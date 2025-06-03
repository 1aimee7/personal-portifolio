"use client";

import Link from 'next/link';

const footerNavItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 w-full z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left text-gray-300">
          © {new Date().getFullYear()} Aimee Ishimwe. All rights reserved.
        </p>
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-6">
            {footerNavItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  className="hover:text-primary transition-colors text-gray-300"
                  scroll={true}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}