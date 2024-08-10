import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-800 rounded-full"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-blue-500" />}
    </button>
  );
};

export default DarkModeToggle;
