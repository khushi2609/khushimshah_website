'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaLinkedin, FaBlog } from 'react-icons/fa';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  
  const isActive = (path: string) => pathname === path;
  
  return (
    <nav className="bg-background shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Image
                  className="h-12 w-auto"
                  src="/KS Logo.jpeg"
                  alt="Khushi Shah"
                  width={48}
                  height={48}
                />
              </Link>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/') 
                    ? 'border-accent text-accent'
                    : 'border-transparent text-primary hover:border-primary hover:text-accent'
                }`}
              >
                Home
              </Link>
              <Link
                href="/blog"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/blog')
                    ? 'border-accent text-accent'
                    : 'border-transparent text-primary hover:border-primary hover:text-accent'
                }`}
              >
                Blog
              </Link>
              <Link
                href="/skills"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/skills')
                    ? 'border-accent text-accent'
                    : 'border-transparent text-primary hover:border-primary hover:text-accent'
                }`}
              >
                Skills
              </Link>
              <Link
                href="/projects"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/projects')
                    ? 'border-accent text-accent'
                    : 'border-transparent text-primary hover:border-primary hover:text-accent'
                }`}
              >
                Projects
              </Link>
              <Link
                href="/in-action"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/in-action')
                    ? 'border-accent text-accent'
                    : 'border-transparent text-primary hover:border-primary hover:text-accent'
                }`}
              >
                In Action
              </Link>
            </div>
          </div>
          
          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/shahkhushimitesh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://shahkhushimitesh.blogspot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent"
              >
                <FaBlog className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 