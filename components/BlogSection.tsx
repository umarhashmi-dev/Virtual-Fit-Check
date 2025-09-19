/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const posts = [
  {
    title: 'How Virtual Try-On Solves Online Shopping’s Biggest Problem',
    href: '#',
    category: { name: 'Industry Insights', href: '#' },
    description:
      'Dive into the technology behind Fit Check and how it is reducing returns and boosting shopper confidence by letting you ‘try before you buy’ right from your home.',
    date: 'Mar 16, 2024',
    datetime: '2024-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop',
    author: {
      name: 'Emily Carter',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop',
    },
  },
  {
    title: '5 Tips for Taking the Perfect Photo for Fit Check',
    href: '#',
    category: { name: 'How-To', href: '#' },
    description:
      'Get the most realistic results from our AI. We share the dos and don\'ts for your source image, from good lighting and simple backgrounds to the best poses.',
    date: 'Feb 28, 2024',
    datetime: '2024-02-28',
    imageUrl:
      'https://images.unsplash.com/photo-1503185912284-5271ff81b938?q=80&w=800&auto=format&fit=crop',
    author: {
      name: 'David Lee',
      imageUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop',
    },
  },
  {
    title: 'Beyond the Basics: Using Fit Check to Discover Your Style',
    href: '#',
    category: { name: 'Style Guide', href: '#' },
    description:
      'Use our virtual fitting room as your personal style lab. Experiment with colors, shapes, and trends you were hesitant to try in real life, risk-free.',
    date: 'Feb 12, 2024',
    datetime: '2024-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=800&auto=format&fit=crop',
    author: {
      name: 'Sophia Chen',
      imageUrl:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop',
    },
  },
]

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="bg-gray-50 py-16 sm:py-24" aria-labelledby="blog-title">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="blog-title" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From Our Blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Get the latest tips, trends, and insights from the world of fashion and AI.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="flex flex-col items-start justify-between p-4 bg-white rounded-2xl border border-gray-200/80 shadow-sm">
              <div className="relative w-full">
                <img
                  src={post.imageUrl}
                  alt={`Image for blog post titled ${post.title}`}
                  className="aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl w-full">
                <div className="mt-6 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-purple-50 px-3 py-1.5 font-medium text-purple-600 hover:bg-purple-100"
                  >
                    {post.category.name}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-6 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt={`Avatar of ${post.author.name}`} className="h-10 w-10 rounded-full bg-gray-100 object-cover" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      {post.author.name}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection;