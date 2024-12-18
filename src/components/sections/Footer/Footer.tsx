import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

interface FooterProps {
  email: string;
}

const Footer: React.FC<FooterProps> = ({ email }) => {
  const socialLinks = [
    { icon: Linkedin, url: '#' },
    { icon: Twitter, url: '#' },
    { icon: Instagram, url: '#' },
  ];

  return (
    <footer className="bg-black text-white  font-orbitron py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
        {/* Logo and Tagline */}
        <div>
          <div className="flex items-center justify-center space-x-2">
            <img
              src="/images/logo.png"
              alt="GymFluencer Logo"
              className="h-12"
            />
            <h2 className="text-2xl font-bold tracking-wider">GymFluencer</h2>
          </div>
          <p className="text-2xl mt-2">
            Where Fitness Meets Social Connection!
          </p>
        </div>

        {/* Email */}
        <div className="flex items-center justify-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg text-sm">
          <div className="text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </div>
          <span className="text-gray-300">{email}</span>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-8 text-gray-400">
          <a href="#" className="hover:text-white">
            Home
          </a>
          <a href="#" className="hover:text-white">
            Diet Plan
          </a>
          <a href="#" className="hover:text-white">
            Features
          </a>
          <a href="#" className="hover:text-white">
            FAQ's
          </a>
        </nav>

        {/* Footer Note and Social Links */}
        <div className="flex items-center justify-between w-full">
          <div className="text-xs text-gray-500">
            © {new Date().getFullYear()} GymFluencer. All rights reserved.
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
