'use client';

import { useEffect } from 'react';

export default function Calculator() {
  useEffect(() => {
    let currentOperand = '0';
    let previousOperand = '';
    let operation: string | null = null;

    const currentOperandElement = document.getElementById('current-operand');
    const previousOperandElement = document.getElementById('previous-operand');

    function updateDisplay() {
      if (currentOperandElement) {
        currentOperandElement.textContent = currentOperand;
      }
      if (previousOperandElement) {
        previousOperandElement.textContent = previousOperand + (operation || '');
      }
    }

    function clear() {
      currentOperand = '0';
      previousOperand = '';
      operation = null;
      updateDisplay();
    }

    function deleteNumber() {
      if (currentOperand.length === 1) {
        currentOperand = '0';
      } else {
        currentOperand = currentOperand.slice(0, -1);
      }
      updateDisplay();
    }

    function appendNumber(number: string) {
      if (number === '.' && currentOperand.includes('.')) return;
      if (currentOperand === '0' && number !== '.') {
        currentOperand = number;
      } else {
        currentOperand += number;
      }
      updateDisplay();
    }

    function chooseOperation(op: string) {
      if (currentOperand === '') return;
      if (previousOperand !== '') {
        calculate();
      }
      operation = op;
      previousOperand = currentOperand;
      currentOperand = '0';
      updateDisplay();
    }

    function calculate() {
      let computation: number;
      const prev = parseFloat(previousOperand);
      const current = parseFloat(currentOperand);
      
      if (isNaN(prev) || isNaN(current)) return;
      
      switch (operation) {
        case '+':
          computation = prev + current;
          break;
        case '-':
          computation = prev - current;
          break;
        case '×':
          computation = prev * current;
          break;
        case '÷':
          computation = prev / current;
          break;
        default:
          return;
      }
      
      currentOperand = computation.toString();
      operation = null;
      previousOperand = '';
      updateDisplay();
    }

    // Event listeners
    const buttons = document.querySelectorAll('.calc-btn');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const numberAttr = button.getAttribute('data-number');
        const operatorAttr = button.getAttribute('data-operator');
        const actionAttr = button.getAttribute('data-action');

        if (numberAttr !== null) {
          appendNumber(numberAttr);
        } else if (operatorAttr !== null) {
          chooseOperation(operatorAttr);
        } else if (actionAttr === 'clear') {
          clear();
        } else if (actionAttr === 'delete') {
          deleteNumber();
        } else if (actionAttr === 'equals') {
          calculate();
        }
      });
    });

    // Keyboard support
    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.key >= '0' && e.key <= '9' || e.key === '.') {
        appendNumber(e.key);
      } else if (e.key === '+' || e.key === '-') {
        chooseOperation(e.key);
      } else if (e.key === '*') {
        chooseOperation('×');
      } else if (e.key === '/') {
        e.preventDefault();
        chooseOperation('÷');
      } else if (e.key === 'Enter' || e.key === '=') {
        calculate();
      } else if (e.key === 'Escape') {
        clear();
      } else if (e.key === 'Backspace') {
        deleteNumber();
      }
    };

    document.addEventListener('keydown', handleKeyboard);

    return () => {
      document.removeEventListener('keydown', handleKeyboard);
    };
  }, []);

  return null;
}
