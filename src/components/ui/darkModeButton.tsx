import { RiMoonLine, RiSunLine } from 'react-icons/ri';
import { useTheme } from '../../context/ThemeContext';

export const DarkModeButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}

      className={`text-white icon-container ${isDarkMode ? "dark" : "light"}`}
    >
      {isDarkMode ? <RiSunLine className='icon' size={20} /> : <RiMoonLine className='icon' size={20} />}
    </button>
  );
};