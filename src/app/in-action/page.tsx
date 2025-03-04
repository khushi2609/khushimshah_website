'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Experience {
  id: string;
  title: string;
  company: string;
  date: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  category: 'work' | 'community';
  image?: string;
}

const experiences: Experience[] = [
  {
    id: 'jmrc-project',
    title: 'Military Innovation Research Project',
    company: 'Joint Multinational Readiness Center (JMRC)',
    date: 'November 18-21, 2023',
    location: 'Hohenfels, Germany',
    description: 'Part of the "Lean Innovation Lab" at Carnegie Mellon University, conducted on-site research and innovation assessment at JMRC military base, focusing on military training technology and operational improvements.',
    achievements: [
      'Engaged with military leaders and participated in advanced simulator exercises at DCTC in Poland',
      'Observed and analyzed breach exercises at Uebungsdorf with detailed Q&A sessions',
      'Studied unit tracking systems with the Warhog TAF team',
      'Evaluated cutting-edge thermal imaging technology with the Falcon Team',
      'Collaborated with international military personnel for innovation research'
    ],
    technologies: [
      'Military Training Systems',
      'Simulation Technology',
      'Thermal Imaging',
      'Unit Tracking Systems',
      'Defense Innovation',
      'Operational Analysis'
    ],
    category: 'community',
    image: '/in-action/BAFBA347-3D6D-4135-BC74-D4FAFD80F2A1_1_105_c.jpeg'
  },
  {
    id: 'concepta-innovation',
    title: 'GEN AI Security Intern',
    company: 'Concepta Innovation Solutions',
    date: 'May - August 2024',
    location: 'Rockville, MD',
    description: 'Focused on implementing advanced security solutions and automation using cutting-edge AI technologies.',
    achievements: [
      'Developed and implemented BYOD & RBAC policy using Microsoft Intune',
      'Established automated incident alert system on Microsoft Sentinel',
      'Provided comprehensive training for Copilot for Security tool',
      'Configured analytical rules and conditions in Sentinel dashboard using KQL',
      'Enhanced security monitoring and incident management through SIEM implementation'
    ],
    technologies: [
      'Microsoft Intune',
      'Microsoft Sentinel',
      'Copilot for Security',
      'KQL',
      'SIEM',
      'BYOD',
      'RBAC'
    ],
    category: 'work'
  },
  {
    id: 'forensic-science',
    title: 'Digital Forensics Intern',
    company: 'Directorate of Forensic Science',
    date: 'June - July 2022',
    location: 'Gandhinagar, India',
    description: 'Contributed to cybercrime investigations through digital forensics analysis and evidence handling.',
    achievements: [
      'Analyzed 15+ cybercrime cases providing crucial investigative insights',
      'Conducted in-depth examinations and prepared court-ready reports',
      'Recovered and analyzed digital evidence from 35+ devices',
      'Collaborated with cross-functional teams on forensic investigations',
      'Ensured integrity of electronic evidence for court proceedings'
    ],
    technologies: [
      'Cellebrite',
      'XRY',
      'Digital Forensics',
      'Evidence Analysis',
      'Forensic Tools'
    ],
    category: 'work'
  },
  {
    id: 'defcon-involvement',
    title: 'Women in Privacy & Security Member',
    company: 'DEFCON 2024',
    date: '2024',
    location: 'Las Vegas, NV',
    description: 'Active member of the Women in Privacy & Security community at DEFCON, contributing to diversity and inclusion in cybersecurity.',
    achievements: [
      'Participated in specialized workshops and training sessions',
      'Networked with leading professionals in privacy and security',
      'Contributed to discussions on emerging security challenges',
      'Shared insights on privacy-preserving technologies',
      'Promoted women\'s involvement in cybersecurity'
    ],
    technologies: [
      'Privacy Technologies',
      'Security Tools',
      'Network Security',
      'Privacy Frameworks',
      'Community Building'
    ],
    category: 'community',
    image: '/in-action/1DDEDF10-8BA2-434F-ADE0-6EFD4D966FDC_1_105_c.jpeg'
  },
  {
    id: 'security-academy',
    title: 'Organizing Volunteer',
    company: 'Privacy + Security Spring Academy 2024',
    date: '2024',
    location: 'Washington DC',
    description: 'Led the organization of a comprehensive security training program focusing on privacy and security best practices.',
    achievements: [
      'Coordinated workshop sessions and training materials',
      'Managed event logistics and participant engagement',
      'Facilitated hands-on security training exercises',
      'Created networking opportunities for participants',
      'Developed curriculum covering latest security trends'
    ],
    technologies: [
      'Event Management',
      'Security Training',
      'Privacy Education',
      'Workshop Facilitation',
      'Community Outreach'
    ],
    category: 'community'
  }
];

export default function InAction() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', label: 'All Experience' },
    { id: 'work', label: 'Work Experience' },
    { id: 'community', label: 'Community Involvement' }
  ];
  
  const filteredExperiences = selectedCategory === 'all'
    ? experiences
    : experiences.filter(exp => exp.category === selectedCategory);

  return (
    <main className="min-h-screen bg-background px-4 sm:px-8 lg:px-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-accent mb-4">
            Professional Journey
          </h1>
          <p className="text-xl text-primary max-w-3xl mx-auto">
          Growth and engagement: A visual narrative of my journey through the cybersecurity landscape.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-md transition-colors ${
                selectedCategory === category.id
                  ? 'bg-accent text-white'
                  : 'bg-white text-primary hover:bg-primary/10'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 gap-8">
          {filteredExperiences.map(experience => (
            <div
              key={experience.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className={`${experience.id === 'jmrc-project' || experience.id === 'defcon-involvement' ? 'grid grid-cols-1 md:grid-cols-2 gap-0' : ''}`}>
                {/* Content Section */}
                <div className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold text-accent">
                        {experience.title}
                      </h2>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        experience.category === 'work' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-purple-100 text-purple-800'
                      }`}>
                        {experience.category === 'work' ? 'Work Experience' : 'Community'}
                      </span>
                    </div>
                    <div className="text-lg font-semibold text-primary mt-1">
                      {experience.company}
                    </div>
                    <div className="flex items-center text-gray-600 mt-2">
                      <span className="mr-4">{experience.date}</span>
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {experience.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      Key Achievements
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      {experience.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      Technologies & Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image Section */}
                {experience.image && (
                  <div className="relative w-full h-full order-first md:order-last">
                    <Image
                      src={experience.image}
                      alt={`${experience.title} image`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={100}
                      priority
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No Experience Message */}
        {filteredExperiences.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">
              No experiences found in this category. Check back later for updates!
            </p>
          </div>
        )}
      </div>
    </main>
  );
} 