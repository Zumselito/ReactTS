import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import useTheme from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-1 p-2 bg-slate-100 dark:bg-slate-800 rounded-lg w-fit">
      <button 
        onClick={() => setTheme('light')}
        className={`p-2 rounded ${theme === 'light' ? 'bg-slate-50 shadow text-yellow-500' : 'text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-900 cursor-pointer'}`}
      >
        <SunIcon className="size-5" />
      </button>

      <button 
        onClick={() => setTheme('dark')}
        className={`p-2 rounded ${theme === 'dark' ? 'bg-slate-700 shadow text-blue-400' : 'text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-900 cursor-pointer'}`}
      >
        <MoonIcon className="size-5" />
      </button>

      <button 
        onClick={() => setTheme('system')}
        className={`p-2 rounded ${theme === 'system' ? 'bg-white dark:bg-slate-700 shadow text-green-500' : 'text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-900 cursor-pointer'}`}
      >
        <ComputerDesktopIcon className="size-5" />
      </button>
    </div>
  );
}
