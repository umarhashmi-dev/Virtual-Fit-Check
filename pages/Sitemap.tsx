/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import type { Page } from '../App';
import { ArrowRightIcon } from '../components/icons';

interface SitemapProps {
    onNavigate: (page: Page) => void;
}

const sitemapLinks: { name: string; page: Page; description: string }[] = [
    { name: 'Home', page: 'landing', description: 'The main page where you can use our AI-powered virtual try-on tool.' },
    { name: 'About Us', page: 'about', description: 'Learn more about our company, mission, and the team behind Fit Check.' },
    { name: 'Contact Us', page: 'contact', description: 'Get in touch with us for support, partnerships, or other inquiries.' },
    { name: 'Terms of Service', page: 'terms', description: 'Review the rules and guidelines for using the Fit Check service.' },
    { name: 'Privacy Policy', page: 'privacy', description: 'Understand how we protect your data and handle the images you upload.' },
    { name: 'Disclaimer', page: 'disclaimer', description: 'Read about the limitations of our AI simulation and our liability.' },
];

const Sitemap: React.FC<SitemapProps> = ({ onNavigate }) => {
    const handleNavClick = (page: Page, e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onNavigate(page);
        window.scrollTo(0, 0);
    };

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sitemap</h1>
                <p className="mt-4 text-lg text-gray-600">
                    Navigate through our site using the links below. This page provides an overview of all available sections.
                </p>

                <div className="mt-12 border-t border-gray-200 pt-12">
                    <ul role="list" className="divide-y divide-gray-100">
                        {sitemapLinks.map((link) => (
                            <li key={link.page} className="relative flex items-start space-x-4 py-6">
                                <div className="min-w-0 flex-auto">
                                    <h2 className="font-semibold text-gray-900 pr-12">
                                        <button onClick={(e) => handleNavClick(link.page, e)} className="flex items-center gap-x-2 text-left">
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            {link.name}
                                        </button>
                                    </h2>
                                    <p className="text-sm text-gray-600">{link.description}</p>
                                </div>
                                <div className="flex-none self-center">
                                    <ArrowRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sitemap;
