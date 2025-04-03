
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          <button 
            onClick={scrollToTop}
            className="bg-teal hover:bg-teal-dark text-white p-3 rounded-full mb-8 transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
          
          <h3 className="font-heading font-bold text-2xl mb-2">Lennox Walter</h3>
          <p className="text-gray-300 mb-6">Full Stack Developer & Designer</p>
          
          <div className="w-16 h-1 bg-teal rounded mb-6"></div>
          
          <p className="text-gray-400 text-sm text-center mb-2">
            Thank you for visiting my portfolio. Let's create something amazing together!
          </p>
          
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} lennoxwalter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
