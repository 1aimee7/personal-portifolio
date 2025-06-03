"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaMoon, FaSun } from 'react-icons/fa';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme from localStorage or system preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // Fallback to system preference if no saved theme
      setIsDarkMode(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }, []);

  // Toggle theme and update DOM
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md p-4 fixed top-0 w-full z-20">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="#home" className="text-2xl font-bold flex items-center">
          <span className="text-primary">AIMEE</span>
          <span className="text-gray-800 dark:text-white ml-1">ISHIMWE</span>
        </Link>
        <nav className="relative flex items-center">
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  className="hover:text-primary transition-colors font-medium text-gray-800 dark:text-gray-200"
                  scroll={true}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="md:hidden flex flex-col space-y-1 ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white"></span>
            <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white"></span>
            <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white"></span>
          </button>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="ml-4 text-gray-800 dark:text-gray-200 hover:text-primary transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full right-0 bg-gray-800 p-4 rounded-md shadow-lg mt-2 z-10"
              >
                <ul className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={`#${item.id}`}
                        className="hover:text-primary transition-colors font-medium text-gray-200"
                        onClick={() => setIsMenuOpen(false)}
                        scroll={true}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}