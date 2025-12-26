import { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaCoffee } from 'react-icons/fa';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <div className="theme-switcher">
            <button
                className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
                onClick={() => toggleTheme('light')}
                aria-label="Light Mode"
            >
                <FaSun />
            </button>
            <button
                className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
                onClick={() => toggleTheme('dark')}
                aria-label="Dark Mode"
            >
                <FaMoon />
            </button>
            <button
                className={`theme-btn ${theme === 'sepia' ? 'active' : ''}`}
                onClick={() => toggleTheme('sepia')}
                aria-label="Sepia Mode"
            >
                <FaCoffee />
            </button>

            <style>{`
        .theme-switcher {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          display: flex;
          gap: 0.5rem;
          background: var(--bg-glass);
          backdrop-filter: blur(10px);
          padding: 0.5rem;
          border-radius: 50px;
          border: 1px solid var(--border-color);
          z-index: 1000;
          box-shadow: var(--shadow-lg);
        }

        .theme-btn {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          border: none;
          background: transparent;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        .theme-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.1);
        }

        .theme-btn.active {
          background: var(--accent-gradient);
          color: white;
        }
      `}</style>
        </div>
    );
};

export default ThemeSwitcher;
