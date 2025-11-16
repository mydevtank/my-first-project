'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);

  const handleNumber = (num: string) => {
    if (shouldResetDisplay) {
      setDisplay(num);
      setShouldResetDisplay(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleDecimal = () => {
    if (shouldResetDisplay) {
      setDisplay('0.');
      setShouldResetDisplay(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleOperation = (op: string) => {
    const currentValue = parseFloat(display);
    
    if (previousValue === null) {
      setPreviousValue(currentValue);
    } else if (operation) {
      const result = calculate(previousValue, currentValue, operation);
      setDisplay(String(result));
      setPreviousValue(result);
    }
    
    setOperation(op);
    setShouldResetDisplay(true);
  };

  const calculate = (prev: number, current: number, op: string): number => {
    switch (op) {
      case '+':
        return prev + current;
      case '-':
        return prev - current;
      case '×':
        return prev * current;
      case '÷':
        return current !== 0 ? prev / current : 0;
      default:
        return current;
    }
  };

  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const currentValue = parseFloat(display);
      const result = calculate(previousValue, currentValue, operation);
      setDisplay(String(result));
      setPreviousValue(null);
      setOperation(null);
      setShouldResetDisplay(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setShouldResetDisplay(false);
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const handlePercentage = () => {
    const value = parseFloat(display) / 100;
    setDisplay(String(value));
  };

  const handleToggleSign = () => {
    const value = parseFloat(display);
    setDisplay(String(value * -1));
  };

  const Button = ({ 
    children, 
    onClick, 
    className = '',
    variant = 'default'
  }: { 
    children: React.ReactNode; 
    onClick: () => void; 
    className?: string;
    variant?: 'default' | 'operation' | 'equals' | 'function';
  }) => {
    const baseStyle = 'h-16 rounded-xl font-semibold text-xl transition-all duration-150 active:scale-95 shadow-lg';
    
    const variants = {
      default: 'bg-gray-700 hover:bg-gray-600 text-white',
      operation: 'bg-orange-500 hover:bg-orange-600 text-white',
      equals: 'bg-green-500 hover:bg-green-600 text-white',
      function: 'bg-gray-600 hover:bg-gray-500 text-white'
    };

    return (
      <button
        onClick={onClick}
        className={`${baseStyle} ${variants[variant]} ${className}`}
      >
        {children}
      </button>
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-800 rounded-3xl shadow-2xl p-6 border border-gray-700">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-white">計算機</h1>
            <Link 
              href="/"
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm transition-colors"
            >
              返回
            </Link>
          </div>

          {/* Display */}
          <div className="bg-gray-900 rounded-2xl p-6 mb-6 border border-gray-700">
            <div className="text-right">
              {operation && previousValue !== null && (
                <div className="text-gray-400 text-sm mb-1">
                  {previousValue} {operation}
                </div>
              )}
              <div className="text-white text-5xl font-light overflow-x-auto whitespace-nowrap">
                {display}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-4 gap-3">
            {/* Row 1 */}
            <Button onClick={handleClear} variant="function">C</Button>
            <Button onClick={handleToggleSign} variant="function">+/-</Button>
            <Button onClick={handlePercentage} variant="function">%</Button>
            <Button onClick={() => handleOperation('÷')} variant="operation">÷</Button>

            {/* Row 2 */}
            <Button onClick={() => handleNumber('7')}>7</Button>
            <Button onClick={() => handleNumber('8')}>8</Button>
            <Button onClick={() => handleNumber('9')}>9</Button>
            <Button onClick={() => handleOperation('×')} variant="operation">×</Button>

            {/* Row 3 */}
            <Button onClick={() => handleNumber('4')}>4</Button>
            <Button onClick={() => handleNumber('5')}>5</Button>
            <Button onClick={() => handleNumber('6')}>6</Button>
            <Button onClick={() => handleOperation('-')} variant="operation">-</Button>

            {/* Row 4 */}
            <Button onClick={() => handleNumber('1')}>1</Button>
            <Button onClick={() => handleNumber('2')}>2</Button>
            <Button onClick={() => handleNumber('3')}>3</Button>
            <Button onClick={() => handleOperation('+')} variant="operation">+</Button>

            {/* Row 5 */}
            <Button onClick={() => handleNumber('0')} className="col-span-2">0</Button>
            <Button onClick={handleDecimal}>.</Button>
            <Button onClick={handleEquals} variant="equals">=</Button>
          </div>

          {/* Additional Controls */}
          <div className="mt-4">
            <Button 
              onClick={handleBackspace} 
              variant="function"
              className="w-full"
            >
              ← 刪除
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}