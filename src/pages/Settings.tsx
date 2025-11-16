import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Settings
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200">
          <div className="space-y-6">
            {/* Dark Mode Toggle */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Dark Mode
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Toggle between light and dark theme
                </p>
              </div>
              <button
                onClick={toggleTheme}
                className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                style={{
                  backgroundColor: theme === 'dark' ? '#3B82F6' : '#D1D5DB'
                }}
                aria-label="Toggle dark mode"
              >
                <span
                  className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
                  style={{
                    transform: theme === 'dark' ? 'translateX(1.5rem)' : 'translateX(0.25rem)'
                  }}
                />
              </button>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700" />

            {/* Theme Preview */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                Theme Preview
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Current Theme
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
                  </div>
                </div>
                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Sample Text
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    This is how text appears
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;