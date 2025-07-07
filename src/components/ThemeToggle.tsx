import { useEffect, useState } from 'react';
import '../styles/ThemeToggle.css';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(savedTheme);
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(newTheme);
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="switch-container">
      <label className="switch">
        <input 
          type="checkbox" 
          onChange={toggleTheme} 
          checked={theme === 'light'} 
          aria-label="Toggle light and dark mode"
        />
        <span className="slider"></span>
      </label>
     <span className="mode-label">
  {theme === 'dark' ? <FaMoon color="#2f4862" size={24} /> : <FaSun color="#f39c12" size={24} />}
</span>

    </div>
  );
};

export default ThemeToggle;

