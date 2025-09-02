import React from 'react';

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex rounded-md shadow-sm bg-gray-100 dark:bg-gray-700 p-1">
        <button
          onClick={() => onTabChange("developers")}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            activeTab === "developers"
              ? "bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow"
              : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          }`}
        >
          For Developers
        </button>
        <button
          onClick={() => onTabChange("sponsors")}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            activeTab === "sponsors"
              ? "bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow"
              : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          }`}
        >
          For Sponsors
        </button>
        <button
          onClick={() => onTabChange("how")}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            activeTab === "how"
              ? "bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow"
              : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          }`}
        >
          How It Works
        </button>
      </div>
    </div>
  );
}
