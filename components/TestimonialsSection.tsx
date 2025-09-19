/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { QuoteIcon } from './icons';

const testimonials = [
  {
    body: "I was hesitant to buy a final-sale item online, but Fit Check showed me exactly how it would look. It gave me the confidence to purchase, and it fits just like the app predicted! A total game-changer.",
    author: {
      name: 'Sarah L.',
      handle: 'Confident Shopper',
      imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop',
    },
  },
  {
    body: "As a small online clothing reseller, the 'Model Generation' feature is incredible. I can create professional-looking product shots without hiring a model. It has elevated my store's look instantly.",
    author: {
      name: 'Jessica R.',
      handle: 'Boutique Owner',
      imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop',
    },
  },
   {
    body: "I spent an hour just uploading different clothes from my favorite stores and trying them on my photo. It's so much fun and genuinely helps me visualize a new wardrobe.",
    author: {
      name: 'Mike D.',
      handle: 'Style Explorer',
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
    },
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative isolate bg-white py-24 sm:py-32" aria-labelledby="testimonials-title">
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
            <h2 id="testimonials-title" className="text-lg font-semibold leading-8 tracking-tight text-purple-600">
                Testimonials
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Loved by users worldwide
            </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-3">
          {testimonials.map((testimonial, testimonialIdx) => (
            <figure
              key={testimonial.author.name}
              className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
            >
              <blockquote className="text-gray-900">
                <QuoteIcon className="h-8 w-8 text-gray-200 mb-2" />
                <p>{`“${testimonial.body}”`}</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <img className="h-10 w-10 flex-none rounded-full object-cover" src={testimonial.author.imageUrl} alt={`Avatar of ${testimonial.author.name}`} />
                <div>
                  <div className="font-semibold">{testimonial.author.name}</div>
                  <div className="text-gray-600">{testimonial.author.handle}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;