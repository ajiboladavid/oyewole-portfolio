import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-gray-200 dark:border-gray-600"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={24} className="text-yellow-500" />
      ) : (
        <Moon size={24} className="text-gray-700" />
      )}
    </button>
  );
}
