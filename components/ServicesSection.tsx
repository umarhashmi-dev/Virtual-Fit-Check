/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { ShirtIcon, UsersIcon, CameraIcon, CheckCircleIcon } from './icons';

const features = [
    {
        name: 'AI Model Creation',
        description: 'Upload your photo, and our AI instantly creates a personalized, photorealistic model ready for a virtual fitting.',
        icon: CameraIcon,
        benefits: ['Preserves your unique features', 'Clean studio background', 'No professional photoshoot needed'],
    },
    {
        name: 'Virtual Try-On',
        description: 'Select from our curated wardrobe or upload any garment to see how it looks on your model in seconds.',
        icon: ShirtIcon,
        benefits: ['Realistic fabric draping', 'Experiment with styles risk-free', 'Make confident purchase decisions'],
    },
    {
        name: 'Pose Variation',
        description: 'Don’t just see the front. Generate different professional poses to view your outfit from multiple angles.',
        icon: UsersIcon,
        benefits: ['Get a 360-degree feel for the outfit', 'Perfect for sharing your look', 'Understand the complete silhouette'],
    },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="features" className="py-16 sm:py-24 bg-white" aria-labelledby="features-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-purple-600 tracking-wide uppercase">
            Our Features
          </h2>
          <p id="features-title" className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            A Revolutionary Virtual Fitting Room
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover the future of online shopping with our suite of AI-powered tools designed for you.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col p-6 bg-[#FBF8FF] rounded-2xl border border-gray-200/80">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-purple-100 text-purple-600">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-base text-gray-600">{feature.description}</p>
                <ul className="mt-4 space-y-2">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start">
                      <CheckCircleIcon className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-0.5" aria-hidden="true" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div id="pricing" className="mt-24 bg-gray-50 rounded-2xl p-8 sm:p-16">
            <div className="max-w-xl mx-auto text-center">
                <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">Simple, Transparent Pricing</h3>
                <p className="mt-4 text-xl text-gray-500">
                    Get started for free. No credit card, no registration, no hidden fees.
                </p>
                <div className="mt-8">
                     <div className="border border-gray-200 rounded-lg p-8 bg-white shadow-sm w-full">
                        <h4 className="text-lg leading-6 font-semibold text-purple-600">Free Forever</h4>
                        <p className="mt-2 text-5xl font-extrabold text-gray-900">$0</p>
                        <ul className="mt-6 space-y-4 text-left">
                           <li className="flex items-start">
                              <CheckCircleIcon className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-0.5" aria-hidden="true" />
                              <span className="text-sm text-gray-700">Unlimited virtual try-ons</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-0.5" aria-hidden="true" />
                              <span className="text-sm text-gray-700">AI model generation from your photos</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-0.5" aria-hidden="true" />
                              <span className="text-sm text-gray-700">Explore different poses for your outfits</span>
                            </li>
                             <li className="flex items-start">
                              <CheckCircleIcon className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-0.5" aria-hidden="true" />
                              <span className="text-sm text-gray-700">No sign-up or registration required</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;