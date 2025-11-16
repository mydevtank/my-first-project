import React from 'react';
import { Settings as SettingsIcon, User, Bell, Shield, HelpCircle } from 'lucide-react';
import DarkModeToggle from '../components/DarkModeToggle';

const Settings: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
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
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Appearance
              </h2>
            </div>
            <div className="px-6">
              <DarkModeToggle />
            </div>
          </div>

          {/* Account Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Account
              </h2>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              <SettingItem
                icon={<User className="w-5 h-5" />}
                title="Profile Information"
                description="Update your personal details"
                onClick={() => console.log('Profile clicked')}
              />
              <SettingItem
                icon={<Shield className="w-5 h-5" />}
                title="Privacy & Security"
                description="Manage your privacy settings"
                onClick={() => console.log('Privacy clicked')}
              />
            </div>
          </div>

          {/* Notifications Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Notifications
              </h2>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              <SettingItem
                icon={<Bell className="w-5 h-5" />}
                title="Notification Preferences"
                description="Choose what updates you receive"
                onClick={() => console.log('Notifications clicked')}
              />
            </div>
          </div>

          {/* Support Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Support
              </h2>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              <SettingItem
                icon={<HelpCircle className="w-5 h-5" />}
                title="Help & Documentation"
                description="Get help and learn more"
                onClick={() => console.log('Help clicked')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface SettingItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

const SettingItem: React.FC<SettingItemProps> = ({
  icon,
  title,
  description,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between py-4 px-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
    >
      <div className="flex items-center space-x-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
          {icon}
        </div>
        <div className="text-left">
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
      <svg
        className="w-5 h-5 text-gray-400 dark:text-gray-500"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
};

export default Settings;