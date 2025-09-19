/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { FitCheckLogo } from './icons';
import type { Page } from '../App';

interface HeaderProps {
    onLogoClick?: () => void;
    onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick, onNavigate }) => {
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigate('landing');
    // Use setTimeout to ensure the landing page is rendered before scrolling
    setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }, 0);
  };

  const handleNavClick = (page: Page, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onNavigate(page);
    window.scrollTo(0, 0);
  };


  return (
    <header className="w-full py-3 px-8 text-gray-800">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <button onClick={onLogoClick} className="flex items-center gap-3 text-lg font-bold tracking-wider" aria-label="Go to homepage">
          <FitCheckLogo className="w-9 h-9"/>
          <span className="font-semibold">FIT CHECK</span>
        </button>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium bg-[#FBF8FF] rounded-full px-6 py-2 border border-gray-200/80 shadow-sm">
            <a href="#features" onClick={scrollToSection('features')} className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#blog" onClick={scrollToSection('blog')} className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a>
            <a href="#faq" onClick={scrollToSection('faq')} className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
        </nav>
        
        <button onClick={(e) => handleNavClick('contact', e)} className="text-sm font-semibold border border-gray-300 text-gray-700 rounded-full px-5 py-2 hover:bg-gray-800 hover:text-white transition-colors duration-200">
            Contact Us
        </button>
      </div>
    </header>
  );
};

export default Header;
