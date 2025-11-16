"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode preference exists in localStorage
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const isDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setDarkMode(isDark);
    
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Settings
        </h1>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200">
          <div className="space-y-6">
            {/* Dark Mode Toggle Section */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Appearance
              </h2>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-700">
                    {darkMode ? (
                      <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    ) : (
                      <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Dark Mode
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Toggle between light and dark theme
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={toggleDarkMode}
                  className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${
                    darkMode ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  role="switch"
                  aria-checked={darkMode}
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-200 ${
                      darkMode ? "translate-x-7" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Placeholder for additional settings */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Other Settings
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                More settings coming soon...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}