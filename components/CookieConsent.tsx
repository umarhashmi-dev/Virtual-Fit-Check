/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        try {
            const consent = localStorage.getItem('cookieConsent');
            if (!consent) {
                setIsVisible(true);
            }
        } catch (error) {
            console.error("Could not access localStorage:", error);
        }
    }, []);

    const handleConsent = (consent: 'accepted' | 'declined') => {
        try {
            localStorage.setItem('cookieConsent', consent);
        } catch (error) {
            console.error("Could not write to localStorage:", error);
        }
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    exit={{ y: '100%' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4"
                    role="dialog"
                    aria-live="polite"
                    aria-label="Cookie Consent"
                >
                    <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-lg rounded-xl shadow-2xl p-4 sm:p-6 border border-gray-200/80">
                        <div className="sm:flex sm:items-start">
                            <div className="sm:flex-auto">
                                <h3 className="text-base font-semibold text-gray-900">
                                    Cookie Policy
                                </h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    We use essential cookies to make our site work. We'd also like to set analytics cookies that help us make improvements by measuring how you use the site. These will be set only if you accept.
                                </p>
                            </div>
                            <div className="mt-4 sm:ml-6 sm:mt-0 sm:flex sm:flex-shrink-0 sm:items-center gap-x-3">
                                <button
                                    type="button"
                                    onClick={() => handleConsent('declined')}
                                    className="inline-flex w-full justify-center rounded-md bg-gray-200 px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-300 sm:w-auto"
                                >
                                    Decline
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleConsent('accepted')}
                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 sm:mt-0 sm:w-auto"
                                >
                                    Accept
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
