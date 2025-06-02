"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md p-4 fixed top-0 w-full z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="#home" className="text-2xl font-bold flex items-center">
          <span className="text-primary">AIMEE</span>
          <span className="text-gray-800 dark:text-white ml-1">ISHIMWE</span>
        </Link>
        <nav className="relative">
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link href={`#${item.id}`} className="hover:text-primary transition-colors font-medium">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white"></span>
            <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white"></span>
            <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white"></span>
          </button>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full right-0 bg-gray-800 p-4 rounded-md shadow-lg mt-2"
              >
                <ul className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={`#${item.id}`}
                        className="hover:text-primary transition-colors font-medium"
                        onClick={() => setIsMenuOpen(false)}
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