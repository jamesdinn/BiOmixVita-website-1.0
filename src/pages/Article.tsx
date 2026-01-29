import React, { useState } from 'react';
import { useRoute, Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { blogPosts } from '@/data/blogPosts';
import NotFound from './NotFound';

const Article = () => {
  const [, params] = useRoute('/insights/:slug');
  const slug = params?.slug;
  const article = blogPosts.find(post => post.slug === slug);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!article) {
    return <NotFound />;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('https://formspree.io/f/manlgvby', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const shareOnLinkedIn = (title: string) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Check out this insightful article: "${title}" by BiOmixVita Team`);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&text=${text}`, '_blank');
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden text-white" style={{backgroundImage: 'url(/ai-dna-background.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-16 lg:px-8">
          <div className="text-center">
            <Link href="/insights">
              <button 
                className="mb-4 text-blue-200 hover:text-white text-sm flex items-center mx-auto transition-colors"
              >
                ← Back to Insights
              </button>
            </Link>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <span>{article.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span>{article.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>{article.readTime}</span>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {article.keywords.map((keyword, index) => (
                <span key={index} className="inline-flex items-center rounded-full bg-blue-100 px-3 py-0.5 text-sm font-medium text-blue-800">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        <div className="prose prose-lg prose-blue mx-auto text-gray-600">
          {article.content.sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
              <div className="whitespace-pre-line leading-relaxed">
                {section.content.split('\n\n').map((paragraph, pIndex) => {
                  if (paragraph.startsWith('•')) {
                    return (
                      <ul key={pIndex} className="list-disc pl-6 mb-4 space-y-2">
                        {paragraph.split('\n').map((item, i) => (
                          <li key={i}>{item.replace('• ', '')}</li>
                        ))}
                      </ul>
                    );
                  }
                  // Check for radar chart placeholder
                  if (paragraph.includes('radar chart illustrates')) {
                    return (
                      <div key={pIndex}>
                        <p className="mb-4">{paragraph}</p>
                        <div className="my-8 bg-gray-50 rounded-xl p-6 border border-gray-100">
                          <div className="aspect-[16/9] relative w-full max-w-2xl mx-auto">
                            <img 
                              src="/figinsight001-clean.png" 
                              alt="Comparison of Automated vs Hybrid Approaches" 
                              className="rounded-lg shadow-lg w-full h-full object-contain bg-gradient-to-br from-blue-50 to-indigo-50"
                            />
                          </div>
                          <p className="text-center text-sm text-gray-500 mt-4 italic">
                            Figure 1: Comparative analysis of fully automated platforms vs. BiOmixVita's hybrid approach
                          </p>
                        </div>
                      </div>
                    );
                  }
                  return <p key={pIndex} className="mb-4">{paragraph}</p>;
                })}
              </div>
            </div>
          ))}

          {/* References Section */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">References</h3>
            <ol className="list-decimal pl-5 space-y-4 text-sm text-gray-500">
              {article.content.references.map((ref, index) => (
                <li key={index} className="pl-2">{ref}</li>
              ))}
            </ol>
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-12 flex justify-center">
          <Button 
            onClick={() => shareOnLinkedIn(article.title)}
            className="bg-[#0077b5] hover:bg-[#006396] text-white flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            Share on LinkedIn
          </Button>
        </div>
      </div>

      {/* Let's Connect Section */}
      <div className="bg-[#7fa8b8] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let's Connect
            </h2>
            <p className="mt-4 text-lg leading-8 text-blue-50">
              Ready to transform your biological data into actionable insights?
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mx-auto mt-12 max-w-xl sm:mt-16">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="block w-full rounded-md bg-[#2a5fa0] px-3.5 py-2.5 text-center text-sm font-semibold text-[#feffff] shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Article;
