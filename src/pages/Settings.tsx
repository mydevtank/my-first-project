import React from 'react';
import { useTheme } from '../components/ThemeProvider';

const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Settings
        </h1>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors">
          <div className="space-y-6">
            {/* Theme Toggle Section */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  Appearance
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Toggle between light and dark mode
                </p>
              </div>
              <button
                onClick={toggleTheme}
                className="relative inline-flex items-center h-12 w-24 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                style={{
                  backgroundColor: theme === 'dark' ? '#3B82F6' : '#D1D5DB'
                }}
                aria-label="Toggle theme"
              >
                <span
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-lg transform transition-transform"
                  style={{
                    transform: theme === 'dark' ? 'translateX(52px)' : 'translateX(4px)'
                  }}
                >
                  {theme === 'light' ? (
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 text-gray-700"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  )}
                </span>
              </button>
            </div>

            {/* Current Theme Display */}
            <div className="pt-2">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Current theme:
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {theme === 'light' ? '☀️ Light' : '🌙 Dark'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Settings Sections (Placeholder) */}
        <div className="mt-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Other Settings
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Additional settings can be added here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
