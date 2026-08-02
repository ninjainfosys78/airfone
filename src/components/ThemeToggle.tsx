import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  locale?: 'en' | 'ne';
}

export default function ThemeToggle({ locale = 'en' }: ThemeToggleProps) {
  const handleThemeToggle = () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const label = locale === 'en' ? 'Toggle dark/light mode' : 'गाढा/उज्यालो मोड बदल्नुहोस्';

  return (
    <button
      onClick={handleThemeToggle}
      className="theme-toggle"
      aria-label={label}
      title={label}
    >
      <Sun
        className="theme-icon sun-icon"
        width={20}
        height={20}
        stroke="currentColor"
        strokeWidth={2}
      />
      <Moon
        className="theme-icon moon-icon"
        width={20}
        height={20}
        stroke="currentColor"
        strokeWidth={2}
      />
    </button>
  );
}
