import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

const DarkModeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center justify-between w-full p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
      aria-label="Toggle dark mode"
    >
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
          {isDarkMode ? (
            <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          ) : (
            <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          )}
        </div>
        <div className="text-left">
          <h3 className="font-medium text-gray-900 dark:text-gray-100">
            Dark Mode
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}
          </p>
        </div>
      </div>
      <div
        className={`relative w-12 h-6 rounded-full transition-colors ${
          isDarkMode ? 'bg-blue-600' : 'bg-gray-300'
        }`}
      >
        <div
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
            isDarkMode ? 'translate-x-6' : 'translate-x-0'
          }`}
        />
      </div>
    </button>
  );
};

export default DarkModeToggle;