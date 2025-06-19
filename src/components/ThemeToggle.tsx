import React from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 flex items-center gap-1 sm:gap-2 z-50">
      <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:inline">
        {darkMode ? 'Dark' : 'Light'}
      </span>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="relative inline-flex h-10 w-20 sm:h-12 sm:w-24 items-center rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 p-1 transition-colors duration-300"
        aria-label="Toggle theme"
      >
        <div
          className={`${
            darkMode ? 'translate-x-10 sm:translate-x-12' : 'translate-x-0'
          } inline-block h-8 w-8 sm:h-10 sm:w-10 transform rounded-full bg-white shadow-lg ring-2 ring-white transition-transform duration-300`}
        >
          {darkMode ? (
            <Moon className="h-4 w-4 sm:h-6 sm:w-6 m-2 text-primary-600" />
          ) : (
            <Sun className="h-4 w-4 sm:h-6 sm:w-6 m-2 text-secondary-600" />
          )}
        </div>
      </button>
    </div>
  );
}