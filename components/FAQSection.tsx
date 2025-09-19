/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { ChevronDownIcon } from './icons';

const faqs = [
  {
    question: 'How accurate is the virtual try-on?',
    answer:
      "Our AI strives for high realism in how fabric drapes and fits your body shape. While it's a very close simulation, it should be used as a style guide. Real-world fit can still vary based on material and brand sizing.",
  },
  {
    question: 'What happens to my photos after I use the app?',
    answer:
      'Your privacy is our top priority. Your images are processed in real-time to generate the try-on and are never stored on our servers. Your session is private and temporary.',
  },
  {
    question: 'What kind of photos work best for model creation?',
    answer:
      'For the best results, use a clear, well-lit, full-body photo where you are standing straight and facing the camera. Avoid photos with complex backgrounds, harsh shadows, or where your body is obscured.',
  },
  {
    question: 'Can I upload my own clothes?',
    answer:
      "Yes! Besides our default wardrobe, you can upload a picture of any clothing item. For best results, use a clear photo of the garment on a flat surface or a mannequin.",
  },
  {
    question: 'Is Fit Check really free to use?',
    answer:
      'Yes! Our core features—creating a model, trying on clothes, and generating different poses—are completely free. We don\'t require a credit card or even an account to get started.',
  },
];

const FAQSection: React.FC = () => {
  return (
    <div id="faq" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <details key={faq.question} className="pt-6 group">
                <summary className="flex w-full items-center justify-between text-left text-gray-900 cursor-pointer list-none">
                  <span className="text-base font-semibold leading-7">{faq.question}</span>
                  <span className="ml-6 flex h-7 items-center">
                    <ChevronDownIcon
                      className="h-6 w-6 transition-transform duration-200 group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </span>
                </summary>
                <div className="mt-2 pr-12">
                  <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                </div>
              </details>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;