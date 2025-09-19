/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { FitCheckLogo } from './icons';
import type { Page } from '../App';

interface FooterProps {
    onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (page: Page, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onNavigate(page);
    window.scrollTo(0, 0);
  };
    
  return (
    <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
                <FitCheckLogo className="w-10 h-10 text-white"/>
                <span className="font-semibold text-xl">FIT CHECK</span>
            </div>
            <p className="text-sm leading-6 text-gray-300">
              Your personal fitting room, powered by AI. See how clothes look on you before you buy, reducing returns and increasing confidence.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <button onClick={(e) => handleNavClick('landing', e)} className="text-sm leading-6 text-gray-300 hover:text-white">Home</button>
                  </li>
                  <li>
                    <button onClick={(e) => handleNavClick('about', e)} className="text-sm leading-6 text-gray-300 hover:text-white">About Us</button>
                  </li>
                   <li>
                     <a href="#blog" onClick={(e) => { e.preventDefault(); onNavigate('landing'); setTimeout(() => document.getElementById('blog')?.scrollIntoView({behavior: 'smooth'}), 0)}} className="text-sm leading-6 text-gray-300 hover:text-white">Blog</a>
                  </li>
                  <li>
                    <button onClick={(e) => handleNavClick('contact', e)} className="text-sm leading-6 text-gray-300 hover:text-white">Contact Us</button>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <button onClick={(e) => handleNavClick('terms', e)} className="text-sm leading-6 text-gray-300 hover:text-white">Terms of Service</button>
                  </li>
                  <li>
                    <button onClick={(e) => handleNavClick('privacy', e)} className="text-sm leading-6 text-gray-300 hover:text-white">Privacy Policy</button>
                  </li>
                   <li>
                    <button onClick={(e) => handleNavClick('disclaimer', e)} className="text-sm leading-6 text-gray-300 hover:text-white">Disclaimer</button>
                  </li>
                  <li>
                    <button onClick={(e) => handleNavClick('sitemap', e)} className="text-sm leading-6 text-gray-300 hover:text-white">Sitemap</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Fit Check AI. All rights reserved.
            <span className="hidden sm:inline"> • </span>
            <br className="sm:hidden" />
            A Tool by <a href="https://umarhashmi.dev" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-300 hover:text-white">Umar Hashmi</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;