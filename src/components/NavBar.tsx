import React from 'react';
import { useTheme } from '../context/ThemeContext';

const NavBar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="NavBar">
            <div className="logo">adam sirota</div>
            <nav>
                <a href="#about">about</a>
                <a href="#education">education</a>
                <a href="#skills">skills</a>
                <a href="#projects">projects</a>
                <button 
                    onClick={toggleTheme}
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'var(--text-color)',
                        fontSize: '1.2rem',
                        padding: '0.5rem',
                    }}
                >
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>
            </nav>
        </div>
    );
};

export default NavBar;