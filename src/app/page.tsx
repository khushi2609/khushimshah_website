'use client';

import Link from 'next/link';
import { FaArrowRight, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-4 sm:px-8 lg:px-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section with Image Collage */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Single Image */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <div className="relative w-72 h-96 rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
              <Image
                src="/home/2.jpeg"
                alt="Professional photo"
                fill
                className="object-cover"
                priority
                quality={100}
                sizes="(max-width: 768px) 288px, (max-width: 1200px) 288px, 288px"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 text-left">
            <h1 className="text-5xl font-bold text-accent mb-6">
              Khushi Mitesh Shah
            </h1>
            <p className="text-2xl text-primary mb-8">
              Information Security Professional | Usable Security Enthusiast | Community Builder
            </p>
            <p className="text-xl text-gray-600">
              Passionate about cybersecurity, specializing in security operations, digital forensics,
              and threat hunting technologies. Currently pursuing MS in Information Security
              Policy and Management at Carnegie Mellon University.
            </p>
          </div>
        </div>

        {/* Additional Content */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            My Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
            Dedicated to advancing cybersecurity through innovative solutions and knowledge sharing,
            while promoting diversity and inclusion in the field of information security.
          </p>
        </div>
      </div>

      {/* Quick Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      <Link href="/in-action"
          className="group p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-accent mb-2 group-hover:text-primary">
            In Action
            <FaArrowRight className="inline ml-2 transform group-hover:translate-x-1 transition-transform" />
          </h2>
          <p className="text-primary">
          Beyond the desk: A visual compilation of my engagements, from industry events to hands-on internships
          </p>
        </Link>
      

        <Link href="/skills"
          className="group p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-accent mb-2 group-hover:text-primary">
            Skills
            <FaArrowRight className="inline ml-2 transform group-hover:translate-x-1 transition-transform" />
          </h2>
          <p className="text-primary">
            A blend of technical expertise and interpersonal abilities. From cybersecurity tools and programming to effective communication and adaptability, discover my comprehensive skill set.
          </p>
        </Link>

        <Link href="/projects"
          className="group p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-accent mb-2 group-hover:text-primary">
            Projects
            <FaArrowRight className="inline ml-2 transform group-hover:translate-x-1 transition-transform" />
          </h2>
          <p className="text-primary">
            Portfolio of cybersecurity projects and research initiatives.
          </p>
        </Link>
        
        <Link href="/blog" 
          className="group p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-accent mb-2 group-hover:text-primary">
            Blog
            <FaArrowRight className="inline ml-2 transform group-hover:translate-x-1 transition-transform" />
          </h2>
          <p className="text-primary">
            Embark on a journey through my mind! This blog is a space where I reflect on life, share my passions, and explore the ever-evolving landscape of information security. From personal anecdotes to technical insights, there&apos;s something for everyone.
          </p>
        </Link>
      </div>
      
      {/* Connect with Me Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-accent mb-4">
              Connect with Me
            </h2>
            <p className="text-xl text-primary max-w-3xl mx-auto">
              Let&apos;s collaborate on making the digital world more secure and privacy-conscious.
            </p>
          </div>

          <div className="flex justify-center gap-8 flex-wrap">
            <a
              href="mailto:khushimshah26@gmail.com"
              className="flex items-center gap-3 px-6 py-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group"
            >
              <FaEnvelope className="h-6 w-6 text-accent group-hover:text-accent/80" />
              <div className="text-left">
                <div className="text-sm text-primary/60 font-medium">Email</div>
                <div className="text-primary font-semibold">khushimshah26@gmail.com</div>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/shahkhushimitesh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group"
            >
              <FaLinkedin className="h-6 w-6 text-accent group-hover:text-accent/80" />
              <div className="text-left">
                <div className="text-sm text-primary/60 font-medium">LinkedIn</div>
                <div className="text-primary font-semibold">Connect on LinkedIn</div>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* Chat Interface Link */}
      <div className="text-center mb-16">
        <Link href="/chat" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-primary transition-colors shadow-md hover:shadow-lg"
        >
          Chat with Cypher
          <FaArrowRight className="ml-2" />
        </Link>
        <p className="mt-2 text-sm text-gray-600">
          Have questions? Let Cypher guide you through Khushi&apos;s cybersecurity journey
        </p>
      </div>
    </main>
  );
} 