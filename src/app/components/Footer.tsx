import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    'Frontend Development',
    'React Applications', 
    'UI/UX Design',
    'Website Optimization'
  ];

  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AI</span>
              </div>
              <h3 className="text-lg font-bold">AIMEE ISHIMWE</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Frontend Developer crafting modern web experiences.
            </p>
            <div className="flex space-x-3">
              <a href="https://github.com/1aimee7" className="w-8 h-8 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <Github size={16} />
              </a>
              <a href="https://linkedin.com/in/aimeeishimwe" className="w-8 h-8 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links & Services */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="text-gray-400 text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin size={14} className="text-gray-400" />
                <span className="text-gray-400 text-sm">Kigali, Rwanda</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} className="text-gray-400" />
                <a href="mailto:aimee@devpro.com" className="text-gray-400 hover:text-white text-sm transition-colors">
                  aimeishimwe25@gmail.com
                </a>
              </div>
            </div>
            <div className="mt-4 inline-flex items-center px-2 py-1 bg-green-900/30 rounded-full">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
              <span className="text-xs text-green-400">Available</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {currentYear} Aimee Ishimwe. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;