'use client';

import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
  status: 'completed' | 'ongoing';
  links?: {
    github?: string;
    demo?: string;
  };
  image?: string;
}

const projects: Project[] = [
  {
    id: 'soc-implementation',
    title: 'Security Operations Centre Implementation',
    description: 'Orchestrated the establishment of a cutting-edge SOC center leveraging modern technologies for robust security monitoring and threat intelligence.',
    technologies: ['Docker', 'Wazuh', 'Graylog', 'SIEM', 'Kibana', 'Grafana', 'OpenCTI', 'MISP', 'EDR'],
    achievements: [
      'Integrated Wazuh and Graylog as SIEM tools for robust log ingestion',
      'Built data pipeline for processing security events',
      'Implemented dynamic visualization using Kibana and Grafana',
      'Working on OpenCTI and MISP integration for threat intelligence sharing',
      'Enhanced EDR capabilities through Wazuh integration'
    ],
    status: 'ongoing'
  },
  {
    id: 'web-server-analysis',
    title: 'Web Server Log Analysis',
    description: 'Comprehensive analysis of web server logs using advanced SIEM tools to detect and investigate security incidents.',
    technologies: ['Kibana', 'Splunk', 'SQL', 'Data Visualization'],
    achievements: [
      'Analyzed over 50,000 web server logs using Kibana dashboards',
      'Extracted technical insights through advanced data visualization',
      'Detected SQL injection attempts targeting internal executable files',
      'Tracked 10 IP addresses compromised by a botnet',
      'Developed protection strategies based on pattern analysis'
    ],
    status: 'completed'
  },
  {
    id: 'intrusion-detection',
    title: 'Intrusion Detection & Prevention System',
    description: 'Implementation of comprehensive IDS/IPS solution to protect against various cyber threats and unauthorized access.',
    technologies: ['Snorby', 'Suricata', 'Bash Scripting', 'Network Security'],
    achievements: [
      'Investigated web application, SQL injection, and port scan alerts',
      'Analyzed attacks against DMZ network to identify vulnerabilities',
      'Engineered custom alerts and rules using bash scripting',
      'Implemented proactive traffic filtering to prevent unauthorized access',
      'Enhanced overall network infrastructure security'
    ],
    status: 'completed'
  },
  {
    id: 'insider-threat',
    title: 'Enhancing Insider Threat Detection',
    description: 'Innovative approach combining Moral Foundations Theory with NLP for advanced insider threat detection.',
    technologies: ['NLP', 'Machine Learning', 'Python', 'Moral Foundations Theory'],
    achievements: [
      'Achieved 88% accuracy on CMU Insider Threat Dataset',
      'Reached 80% accuracy on Enron Email Dataset',
      'Developed novel NLP framework using Moral Foundations Dictionary',
      'Enhanced behavioral analysis for threat detection',
      'Created scalable solution for enterprise deployment'
    ],
    status: 'completed'
  },
  {
    id: 'privacy-smart-assistants',
    title: 'Privacy for Shared Smart Assistants',
    description: 'Published research at USENIX SOUPS\'24 focusing on privacy preferences and controls for smart personal assistants.',
    technologies: ['Privacy Research', 'User Studies', 'Data Analysis'],
    achievements: [
      'Conducted comprehensive research on privacy preferences',
      'Surveyed both voice assistant users and non-users',
      'Identified effective fine-grained privacy controls',
      'Published findings at prestigious USENIX SOUPS\'24 conference',
      'Contributed to improving smart device privacy'
    ],
    status: 'completed'
  },
  {
    id: 'windows-server',
    title: 'Windows Server Environment Management',
    description: 'Comprehensive implementation and management of Windows Server environment with focus on security and policy enforcement.',
    technologies: ['Windows Server', 'Active Directory', 'DHCP', 'DNS', 'Group Policy'],
    achievements: [
      'Set up and managed Windows servers with multiple roles',
      'Implemented Active Directory infrastructure',
      'Configured DHCP and DNS services',
      'Deployed and managed group policies',
      'Enhanced overall network security through proper configuration'
    ],
    status: 'completed'
  },
  {
    id: 'netflow-analysis',
    title: 'NetFlow Analysis',
    description: 'Advanced network traffic analysis using specialized tools to detect and investigate malicious activities.',
    technologies: ['Argus', 'SiLK', 'UNIX', 'Network Analysis'],
    achievements: [
      'Analyzed network traffic patterns using Argus and SiLK',
      'Utilized UNIX commands for detailed traffic investigation',
      'Uncovered evidence of malicious activities',
      'Developed traffic analysis methodologies',
      'Created comprehensive network visibility'
    ],
    status: 'completed'
  },
  {
    id: 'firewall-optimization',
    title: 'Firewall Rule Optimization',
    description: 'Strategic optimization of firewall rules to enhance network security while maintaining performance.',
    technologies: ['pfSense', 'Endian', 'Network Security', 'Firewall Management'],
    achievements: [
      'Crafted and optimized 10 firewall rulesets',
      'Protected against unauthorized access and threats',
      'Developed robust network security architecture',
      'Balanced security with network performance',
      'Implemented best practices in firewall configuration'
    ],
    status: 'completed'
  },
  {
    id: 'voice-cloning-privacy',
    title: 'Voice Cloning Privacy Research',
    description: 'In-depth analysis of privacy implications in voice cloning AI/ML models.',
    technologies: ['Privacy Analysis', 'AI/ML', 'RVC', 'Eleven Labs'],
    achievements: [
      'Conducted comprehensive privacy policy analysis',
      'Reviewed use cases and implications',
      'Provided solutions for privacy concerns',
      'Raised awareness about privacy issues',
      'Contributed to privacy-conscious AI development'
    ],
    status: 'completed'
  },
  {
    id: 'cryptocurrency-forecast',
    title: 'Cryptocurrency Forecasting',
    description: 'Advanced machine learning application for cryptocurrency price prediction and analysis.',
    technologies: ['XGBoost', 'LGBM', 'KNN', 'Ridge', 'Lasso', 'Python'],
    achievements: [
      'Developed short-term return forecasting models',
      'Analyzed fourteen different cryptocurrencies',
      'Implemented multiple ML algorithms',
      'Created time-series analysis framework',
      'Produced actionable trading insights'
    ],
    status: 'completed'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'completed' | 'ongoing'>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.status === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-accent mb-4">
          Cybersecurity Projects
        </h1>
        <p className="text-xl text-primary max-w-3xl mx-auto">
          A showcase of my technical projects in cybersecurity, 
          featuring research, implementations, and ongoing initiatives.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-md transition-colors ${
            filter === 'all'
              ? 'bg-accent text-white'
              : 'bg-white text-primary hover:bg-primary/10'
          }`}
        >
          All Projects
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-4 py-2 rounded-md transition-colors ${
            filter === 'completed'
              ? 'bg-accent text-white'
              : 'bg-white text-primary hover:bg-primary/10'
          }`}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter('ongoing')}
          className={`px-4 py-2 rounded-md transition-colors ${
            filter === 'ongoing'
              ? 'bg-accent text-white'
              : 'bg-white text-primary hover:bg-primary/10'
          }`}
        >
          Ongoing
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-8">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="md:flex">
              {project.image && (
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full md:w-48 object-cover"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              )}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-accent">
                    {project.title}
                  </h2>
                  <div className="flex space-x-4">
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-accent"
                      >
                        <FaGithub className="h-6 w-6" />
                      </a>
                    )}
                    {project.links?.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-accent"
                      >
                        <FaExternalLinkAlt className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Key Achievements
                  </h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {project.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 