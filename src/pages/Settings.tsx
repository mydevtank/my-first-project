import React from 'react';
import { Settings as SettingsIcon, User, Bell, Shield, Globe } from 'lucide-react';
import DarkModeToggle from '../components/DarkModeToggle';

const Settings: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <SettingsIcon className="w-8 h-8 text-gray-900 dark:text-gray-100" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Settings
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your account settings and preferences
          </p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {/* Appearance Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Appearance
            </h2>
            <div className="space-y-3">
              <DarkModeToggle />
            </div>
          </section>

          {/* Account Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Account
            </h2>
            <div className="space-y-3">
              <button className="flex items-center gap-3 w-full p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors text-left">
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                  <User className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">
                    Profile Settings
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Update your profile information
                  </p>
                </div>
              </button>
            </div>
          </section>

          {/* Notifications Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Notifications
            </h2>
            <div className="space-y-3">
              <button className="flex items-center gap-3 w-full p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors text-left">
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                  <Bell className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">
                    Notification Preferences
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Manage how you receive notifications
                  </p>
                </div>
              </button>
            </div>
          </section>

          {/* Privacy Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Privacy & Security
            </h2>
            <div className="space-y-3">
              <button className="flex items-center gap-3 w-full p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors text-left">
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                  <Shield className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">
                    Privacy Settings
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Control your privacy and data
                  </p>
                </div>
              </button>
            </div>
          </section>

          {/* Language Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Language & Region
            </h2>
            <div className="space-y-3">
              <button className="flex items-center gap-3 w-full p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors text-left">
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                  <Globe className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">
                    Language Settings
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Choose your preferred language
                  </p>
                </div>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Settings;