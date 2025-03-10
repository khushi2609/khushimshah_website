'use client';

interface Skill {
  name: string;
  description: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    "title": "Technical Skills",
    "skills": [
      { "name": "Python", "description": "Developing robust scripts for automation, data analysis, and security tooling integration, leveraging libraries like Pandas and Scikit-learn." },
      { "name": "Java", "description": "Building scalable and maintainable applications with a focus on object-oriented design patterns and secure coding practices." },
      { "name": "C++", "description": "Optimizing system performance through efficient memory management and low-level programming for critical security applications." },
      { "name": "SQL", "description": "Designing and optimizing complex database queries for efficient data retrieval and security auditing, ensuring data integrity and confidentiality." },
      { "name": "JavaScript/TypeScript", "description": "Developing interactive and secure web applications, utilizing modern frameworks like React and Angular for enhanced user experience." },
      { "name": "Shell Scripting", "description": "Automating system administration tasks and security operations for efficient incident response and configuration management." }
    ]
  },
  {
    "title": "Security Tools & Frameworks",
    "skills": [
      { "name": "Wireshark", "description": "Analyzing network traffic for security vulnerabilities and anomalies, identifying malicious patterns and protocol weaknesses." },
      { "name": "Nmap", "description": "Conducting comprehensive network discovery and vulnerability assessments, identifying open ports and services for security hardening." },
      { "name": "Metasploit", "description": "Performing advanced penetration testing and vulnerability exploitation, simulating real-world attacks to assess security posture." },
      { "name": "Burp Suite", "description": "Identifying and mitigating web application vulnerabilities through comprehensive security testing and analysis." },
      { "name": "Snort", "description": "Implementing and managing intrusion detection and prevention systems to proactively defend against network threats." },
      { "name": "Splunk", "description": "Analyzing security logs and events for threat detection and incident response, utilizing dashboards and alerts for real-time monitoring." }
    ]
  },
  {
    "title": "Cloud & Infrastructure",
    "skills": [
      { "name": "AWS", "description": "Deploying and managing secure cloud infrastructure and services, implementing best practices for security and compliance." },
      { "name": "Docker", "description": "Containerizing applications for efficient deployment and scalability, ensuring secure configurations and resource isolation." },
      { "name": "Kubernetes", "description": "Orchestrating containerized workloads for high availability and scalability, implementing security policies and access controls." },
      { "name": "Linux", "description": "Securing and administering Linux systems for critical infrastructure components, implementing hardening techniques and access controls." },
      { "name": "Git", "description": "Managing version control and collaboration for secure software development, ensuring code integrity and traceability." }
    ]
  },
  {
    "title": "Security Domains",
    "skills": [
      { "name": "Network Security", "description": "Implementing and managing network security controls, analyzing protocols and traffic patterns for threat detection and prevention." },
      { "name": "Application Security", "description": "Developing and testing secure applications, implementing secure coding practices and conducting vulnerability assessments." },
      { "name": "Incident Response", "description": "Responding to security incidents and breaches, conducting forensic analysis and implementing containment and remediation strategies." },
      { "name": "Risk Assessment", "description": "Identifying and evaluating security risks and vulnerabilities, conducting risk assessments and developing mitigation plans." },
      { "name": "Security Architecture", "description": "Designing and implementing secure system architectures, integrating security controls and best practices." }
    ]
  },
  {
    "title": "Proficiencies",
    "skills": [
      { "name": "Project Management", "description": "Strategic planning and meticulous execution, ensuring projects are delivered on time and within scope." },
      { "name": "Technical Writing", "description": "Crafting clear, concise, and comprehensive documentation tailored for diverse audiences, facilitating knowledge transfer and informed decision-making." },
      { "name": "Team Leadership", "description": "Fostering collaborative environments, empowering team members, and driving collective success through effective coordination and motivation." },
      { "name": "Problem Solving", "description": "Employing rigorous analytical thinking to identify root causes, develop innovative solutions, and mitigate risks effectively." },
      { "name": "Communication", "description": "Building strong relationships and ensuring alignment among stakeholders through clear, persuasive, and empathetic communication." }
    ]
  }
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-background px-4 sm:px-8 lg:px-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-accent mb-4">Skills</h1>
          <p className="text-xl text-primary max-w-2xl mx-auto">
            A comprehensive overview of my technical and professional capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category) => (
            <div 
              key={category.title} 
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold text-accent mb-4">
                {category.title}
              </h2>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li 
                    key={skill.name} 
                    className="text-primary"
                  >
                    <div className="font-semibold">{skill.name}</div>
                    <div className="text-sm text-primary/70">{skill.description}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-accent mb-8 text-center">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-accent mb-2">CompTIA Security+</h3>
              <p className="text-primary mb-2">Certification ID:  FPDJN71QZ14Q1JG5</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-accent mb-2">ISC2 CC</h3>
              <p className="text-primary mb-2">Certification ID:  2065997</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-accent mb-2">IBM: Security Analyst Fundamentals</h3>
              <p className="text-primary mb-2">Certification ID: DMC33NTNPA2M</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-accent mb-8 text-center">Relevant Coursework</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-accent mb-4">Information Security</h3>
              <ul className="space-y-2 text-primary">
                <li>Network Security</li>
                <li>Applied Cryptography</li>
                <li>Security Risk Management</li>
                <li>Software Security</li>
                <li>Network Defense</li>
                <li>Incident Response</li>
                <li>Usable Privacy and Security</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-accent mb-4">Policy & Management</h3>
              <ul className="space-y-2 text-primary">
                <li>Information Security Policy</li>
                <li>Privacy in the Digital Age</li>
                <li>Project Management</li>
                <li>Applied Economics</li>
                <li>Information Security Risk Management</li>
                <li>Lean Innovation Methodology</li>
              
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-accent mb-4">Technical Foundation</h3>
              <ul className="space-y-2 text-primary">
                <li>Computer Systems Security</li>
                <li>Database Management</li>
                <li>Object-Oriented Programming</li>
                <li>Data Structures and Algorithms</li>
                <li>Computer Networks</li>
                <li>Computer Organization and Architecture</li>
                <li>Operating Systems</li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 