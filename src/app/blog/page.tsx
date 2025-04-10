'use client';

import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'jmrc-hohenfels-germany',
    title: 'Exploring Military Innovations: My Trip to JMRC in Hohenfels, Germany',
    excerpt: 'A firsthand account of my experience at the Joint Multinational Readiness Center.',
    date: 'December 2023',
    readTime: '8 min read',
  },
  {
    slug: 'Internship-Hunt',
    title: 'My Summer Internship Hunt Experience: A Comedy of Errors (and Lessons Learned)',
    excerpt: 'A candid reflection on the challenges, mishaps, and valuable lessons learned during my graduate internship search journey.',
    date: 'March 2025',
    readTime: '10 min read',
  },
  {
    slug: 'from-chai-to-cappuccino',
    title: 'From Chai to Cappuccino: My Hilarious, Heartwarming (and Slightly Tipsy) US Adventure so far',
    excerpt: 'Navigating the cultural shifts and personal growth from India to the US, one cup at a time.',
    date: 'April 2025',
    readTime: '10 min read',
  },
  // Add more blog posts here as you create them
];

export default function BlogPage() {
  const getCoverImagePath = (slug: string) => {
    switch (slug) {
      case 'jmrc-hohenfels-germany':
        return '/blog/jmrc/PolandSiteTank.jpg';
      case 'Internship-Hunt':
        return '/blog/internship-hunt/cover-photo.jpg';
      case 'from-chai-to-cappuccino':
        return '/blog/from-chai-to-cappucino/cover_photo.jpg';
      default:
        return '/blog/default-cover.jpg';
    }
  };

  return (
    <main className="min-h-screen bg-background px-4 sm:px-8 lg:px-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-accent mb-4">Blog</h1>
          <p className="text-xl text-primary max-w-2xl mx-auto">
            Sharing insights and experiences from my journey in cybersecurity, technology, and beyond.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.slug}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={getCoverImagePath(post.slug)}
                  alt={`Cover image for ${post.title}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div> 
              <div className="p-6">
                <div className="flex items-center text-sm text-primary/60 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold text-accent mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-primary line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center text-accent group-hover:text-primary transition-colors">
                  Read more 
                  <svg 
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 