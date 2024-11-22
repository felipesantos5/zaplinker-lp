import { useTheme } from '../../context/ThemeContext';
// import { useState, useEffect } from 'react';

export const DarkModeButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="mt-4 p-2 bg-blue-500 dark:bg-blue-700 text-white rounded"
    >
      {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
    </button>
  );
};