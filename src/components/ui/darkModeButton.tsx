import { RiMoonLine, RiSunLine } from 'react-icons/ri';
import { useTheme } from '../../context/ThemeContext';
// import { useState, useEffect } from 'react';

export const DarkModeButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="text-black dark:text-white text-xl transition-all"
    >
      {isDarkMode ? <RiSunLine /> : <RiMoonLine />}
    </button>
  );
};