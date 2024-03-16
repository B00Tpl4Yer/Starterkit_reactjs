import React, { useState, useEffect } from "react";
import { IconMoonStars, IconSunset2 } from '@tabler/icons-react';

export function DarkMode() {
  // Set default state to true for dark mode
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // No need to store the preference in this case
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      className="text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-white px-2 py-2 transition duration-300 ease-in-out transform hover:scale-105"
      onClick={toggleDarkMode}
    >
      {darkMode ? <IconSunset2 className="h-8 w-8" /> : <IconMoonStars className="h-8 w-8" />}
    </button>
  );
}
