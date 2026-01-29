import React from 'react';
import { Link } from 'wouter';
import { blogPosts } from '@/data/blogPosts';

const Insights = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden text-white" style={{backgroundImage: 'url(/countryside-landscape.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '340px'}}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 h-full flex flex-col justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[50px] drop-shadow-lg">
              Turning biological complexity into insights
            </h1>
          </div>
        </div>
      </div>

      {/* Blog List Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-16">Latest Insights</h2>
          <div className="space-y-16">
            {blogPosts.map((post) => (
              <article key={post.id} className="flex flex-col gap-8 lg:flex-row bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
                <div className="relative lg:w-1/2 aspect-[16/9] lg:aspect-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 mix-blend-multiply" />
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                    style={{backgroundImage: 'url(/ai-dna-background.png)'}}
                  />
                </div>
                <div className="flex flex-col justify-between p-6 lg:w-1/2 lg:p-8">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-gray-500">
                      {post.date}
                    </time>
                    <span className="relative z-10 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-600 hover:bg-blue-100">
                      {post.keywords[0]}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-blue-600">
                      <Link href={`/insights/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {post.content.sections[0].content.substring(0, 150)}...
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-x-4">
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <span className="absolute inset-0" />
                        {post.author}
                      </p>
                      <p className="text-gray-600">{post.readTime}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
