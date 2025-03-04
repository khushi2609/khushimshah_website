'use client';

interface Skill {
  name: string;
  level: 'Expert' | 'Advanced' | 'Intermediate' | 'Learning';
  description: string;
  context?: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  type?: 'technical' | 'soft';
}

const getLevelPercentage = (level: string): number => {
  switch (level) {
    case 'Expert': return 95;
    case 'Advanced': return 85;
    case 'Intermediate': return 75;
    case 'Learning': return 60;
    default: return 75;
  }
};

const skillsData: SkillCategory[] = [
  {
    title: 'Security Tools',
    type: 'technical',
    skills: [
      {
        name: 'Splunk',
        level: 'Expert',
        description: 'Advanced SIEM implementation, custom dashboard creation, and threat hunting.'
      },
      {
        name: 'Microsoft Sentinel',
        level: 'Advanced',
        description: 'Configuration of analytical rules, incident management, and threat response.'
      },
      {
        name: 'Wireshark',
        level: 'Advanced',
        description: 'Network traffic analysis, packet inspection, and protocol analysis.'
      },
      {
        name: 'Burp Suite',
        level: 'Advanced',
        description: 'Web application security testing and vulnerability assessment.'
      },
      {
        name: 'Cellebrite & XRY',
        level: 'Intermediate',
        description: 'Digital evidence recovery and analysis in cybercrime investigations.'
      }
    ]
  },
  {
    title: 'Programming Languages',
    type: 'technical',
    skills: [
      {
        name: 'Python',
        level: 'Expert',
        description: 'Security automation, tool development, and data analysis.'
      },
      {
        name: 'Java',
        level: 'Advanced',
        description: 'Application development and security implementation.'
      },
      {
        name: 'C++',
        level: 'Advanced',
        description: 'System-level programming and performance optimization.'
      },
      {
        name: 'R',
        level: 'Intermediate',
        description: 'Statistical analysis and data visualization for security metrics.'
      }
    ]
  },
  {
    title: 'Frameworks & Standards',
    type: 'technical',
    skills: [
      {
        name: 'NIST',
        level: 'Advanced',
        description: 'Implementation of NIST SP 800-60, FIPS 199, FIPS 200 frameworks and cybersecurity best practices.'
      },
      {
        name: 'ISO 27001',
        level: 'Advanced',
        description: 'Information security management system standards and implementation guidelines.'
      },
      {
        name: 'PCI DSS',
        level: 'Advanced',
        description: 'Payment card industry security standards compliance and implementation.'
      },
      {
        name: 'GDPR',
        level: 'Advanced',
        description: 'European data protection and privacy regulations compliance and implementation.'
      },
      {
        name: 'Security Frameworks',
        level: 'Expert',
        description: 'Experience with MITRE ATT&CK, TAXII, and other threat intelligence frameworks.'
      },
      {
        name: 'Risk Management',
        level: 'Advanced',
        description: 'Implementation of risk assessment methodologies and security controls based on industry standards.'
      }
    ]
  },
  {
    title: 'Soft Skills',
    type: 'soft',
    skills: [
      {
        name: 'Communication',
        level: 'Expert',
        description: 'Strong verbal and written communication skills developed through technical report writing and stakeholder presentations.',
        context: 'Refined during Digital Forensics internship, creating court-ready documentation and presenting findings to legal teams.'
      },
      {
        name: 'Problem Solving',
        level: 'Expert',
        description: 'Analytical approach to complex challenges with creative solution development.',
        context: 'Demonstrated through CTF competitions, security incident response, and innovative project solutions.'
      },
      {
        name: 'Attention to Detail',
        level: 'Expert',
        description: 'Meticulous approach to work with high accuracy in documentation and analysis.',
        context: 'Crucial skill honed during forensic investigations and security assessments.'
      },
      {
        name: 'Team Collaboration',
        level: 'Expert',
        description: 'Effective team player with experience in cross-functional and international teams.',
        context: 'Strengthened through military innovation project at JMRC and various cybersecurity initiatives.'
      },
      {
        name: 'Stress Management',
        level: 'Advanced',
        description: 'Ability to maintain performance under pressure and meet tight deadlines.',
        context: 'Developed through CTF competitions, incident response scenarios, and project deadlines.'
      },
      {
        name: 'Leadership',
        level: 'Advanced',
        description: 'Experience in leading teams and organizing community initiatives.',
        context: 'Demonstrated through organizing Privacy + Security Spring Academy and leading project teams.'
      },
      {
        name: 'Adaptability',
        level: 'Expert',
        description: 'Quick learner with ability to adapt to new technologies and environments.',
        context: 'Proven through diverse internship experiences and rapid technology adoption.'
      }
    ]
  }
];

function SkillBar({ name, level, description, context }: Skill) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-medium text-primary">{name}</span>
        <span className="text-sm text-accent font-medium">{level}</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-accent rounded-full transition-all duration-500"
          style={{ width: `${getLevelPercentage(level)}%` }}
        />
      </div>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      {context && (
        <p className="mt-1 text-sm text-accent/80 italic">
          {context}
        </p>
      )}
    </div>
  );
}

export default function Skills() {
  return (
    <main className="min-h-screen bg-background px-4 sm:px-8 lg:px-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-accent mb-4">
            Professional Skills & Expertise
          </h1>
          <p className="text-xl text-primary max-w-3xl mx-auto">
            A comprehensive overview of both technical and interpersonal capabilities,
            developed through hands-on experience in cybersecurity and community engagement.
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.slice(0, 3).map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-accent mb-6">
                {category.title}
              </h2>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar key={skillIndex} {...skill} />
              ))}
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-accent mb-6">
            Professional Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-primary text-lg">CompTIA Security+</h3>
                  <p className="text-gray-600 mt-1">Credential ID: FPDJN71QZ14Q1JG5</p>
                </div>
                <span className="text-accent text-sm font-medium">January 2025</span>
              </div>
            </div>

            <div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-primary text-lg">ISC2 Certified in Cybersecurity</h3>
                  <p className="text-gray-600 mt-1">Certificate No.: 2065997</p>
                </div>
                <span className="text-accent text-sm font-medium">June 2024</span>
              </div>
            </div>

            <div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-primary text-lg">Certification in Cyber Security & <br></br>Cyber Defense</h3>
                  <p className="text-gray-600 mt-1">Certificate No.: 2201800</p>
                </div>
                <span className="text-accent text-sm font-medium">April 2022</span>
              </div>
            </div>

            <div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-primary text-lg">Security Analyst Fundamentals (IBM)</h3>
                  <p className="text-gray-600 mt-1">Credential ID: DMC33NTNPA2M</p>
                </div>
                <span className="text-accent text-sm font-medium">January 2021</span>
              </div>
            </div>
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="mt-12 grid grid-cols-1">
          {skillsData.slice(3).map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-accent mb-6">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Relevant Coursework */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-accent mb-6">
            Relevant Coursework
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-primary/10 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">
                Software & Security
              </h3>
              <p className="text-gray-600">
                Advanced security principles, secure software development, and vulnerability assessment
              </p>
            </div>
            <div className="p-4 bg-primary/10 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">
                Malware Analysis
              </h3>
              <p className="text-gray-600">
                Reverse engineering, malware behavior analysis, and threat detection techniques
              </p>
            </div>
            <div className="p-4 bg-primary/10 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">
                Usable Privacy & Security
              </h3>
              <p className="text-gray-600">
                Human factors in security, privacy-preserving design, and user-centered security
              </p>
            </div>
            <div className="p-4 bg-primary/10 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">
                Network Defenses
              </h3>
              <p className="text-gray-600">
                Network security architecture, intrusion detection, and defense strategies
              </p>
            </div>
            <div className="p-4 bg-primary/10 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">
                Privacy Policy, Law & Technology
              </h3>
              <p className="text-gray-600">
                Legal frameworks, privacy regulations, and compliance requirements
              </p>
            </div>
            <div className="p-4 bg-primary/10 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">
                Cybersecurity Policy & Governance
              </h3>
              <p className="text-gray-600">
                Security policy development, risk management, and governance frameworks
              </p>
            </div>
            <div className="p-4 bg-primary/10 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">
                Statistical Reasoning with R
              </h3>
              <p className="text-gray-600">
                Data analysis, statistical modeling, and security metrics visualization
              </p>
            </div>
            <div className="p-4 bg-primary/10 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">
                IT Project Management
              </h3>
              <p className="text-gray-600">
                Project planning, team leadership, and security implementation methodologies
              </p>
            </div>
            <div className="p-4 bg-primary/10 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">
                Lean Innovation Lab
              </h3>
              <p className="text-gray-600">
                Agile methodologies, innovation practices, and real-world security solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 