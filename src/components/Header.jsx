import { useContext } from 'react';
import { Moon, Sun } from 'lucide-react';
import { ThemeContext } from '../App';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="flex justify-between items-center w-full mb-8">
      <span className="text-2xl font-bold text-primaryText tracking-tight">dev</span>
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
      >
        {theme === 'light' ? <Sun size={20} className="text-primaryText" /> : <Moon size={20} className="text-white " />}
      </button>
    </header>
  );
}

export default Header;