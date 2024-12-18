import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <span className="text-green-400 font-bold text-xl">NFV Network</span>
            <p className="text-gray-400 mt-2">Building a sustainable future together</p>
          </div>

          <div className="flex space-x-6">
            {[
              { icon: <Github className="w-5 h-5" />, href: '#' },
              { icon: <Twitter className="w-5 h-5" />, href: '#' },
              { icon: <Linkedin className="w-5 h-5" />, href: '#' },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">© 2025 NFV Network. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;