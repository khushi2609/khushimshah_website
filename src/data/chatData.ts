import { BotPersona, ChatPrompt } from '@/types/chat';

export const botPersona: BotPersona = {
  name: 'Cypher',
  avatar: '/KS Logo.jpeg',
  greeting: "Hi! 👋 I'm Cypher, your interactive guide to Khushi's world. I'm here to share insights about her professional journey and personal interests. What would you like to know about her?",
  defaultOptions: [
    { id: 'background', text: 'Tell me about her background' },
    { id: 'skills', text: 'What are her cybersecurity skills?' },
    { id: 'projects', text: 'Show me her projects' },
    { id: 'experience', text: 'What\'s her work experience?' },
    { id: 'personal', text: 'What are her interests outside work?' },
    { id: 'contact', text: 'How can I contact her?' },
    { id: 'resources', text: 'What resources does she recommend?' },
  ],
};

export const chatPrompts: Record<string, ChatPrompt> = {
  background: {
    id: 'background',
    message: "Let me tell you about Khushi's background in cybersecurity. What would you like to know?",
    options: [
      { id: 'motivation', text: 'What motivated her to pursue cybersecurity?' },
      { id: 'philosophy', text: 'What is her philosophy on knowledge sharing?' },
      { id: 'goals', text: 'What are her career goals?' },
      { id: 'learning', text: 'How does she stay updated in cybersecurity?' },
      { id: 'back', text: 'Go back to main menu' },
    ],
  },

  motivation: {
    id: 'motivation',
    message: "Witnessing the impact of cyber threats during the global pandemic ignited Khushi's passion for cybersecurity. She realized the importance of protecting individuals and organizations in the digital age.",
    options: [
      { id: 'goals', text: 'What are her career goals?' },
      { id: 'learning', text: 'How does she stay updated?' },
      { id: 'background', text: 'Ask another background question' },
      { id: 'back', text: 'Go back to main menu' },
    ],
  },

  philosophy: {
    id: 'philosophy',
    message: "Khushi believes in the philosophy of 'helping others is the secret sauce to a happy life.' She's committed to sharing her knowledge and contributing to the cybersecurity community through research, volunteer work, and mentorship.",
    options: [
      { id: 'motivation', text: 'What motivated her?' },
      { id: 'goals', text: 'What are her career goals?' },
      { id: 'background', text: 'Ask another background question' },
      { id: 'back', text: 'Go back to main menu' },
    ],
  },

  goals: {
    id: 'goals',
    message: "Khushi's goal is to contribute to making the digital world a safer place for everyone. She aims to leverage her skills and knowledge to enhance security solutions and protect against evolving cyber threats.",
    options: [
      { id: 'motivation', text: 'What motivated her?' },
      { id: 'learning', text: 'How does she stay updated?' },
      { id: 'background', text: 'Ask another background question' },
      { id: 'back', text: 'Go back to main menu' },
    ],
  },

  learning: {
    id: 'learning',
    message: "Khushi believes in continuous learning and active participation in the cybersecurity community. She regularly explores new tools and techniques, and is always eager to tackle new challenges.",
    options: [
      { id: 'motivation', text: 'What motivated her?' },
      { id: 'goals', text: 'What are her career goals?' },
      { id: 'background', text: 'Ask another background question' },
      { id: 'back', text: 'Go back to main menu' },
    ],
  },

  experience: {
    id: 'experience',
    message: "Khushi has experience in various areas of cybersecurity. What would you like to know more about?",
    options: [
      { id: 'siem_edr', text: 'Experience with SIEM and EDR' },
      { id: 'forensics', text: 'Digital Forensics experience' },
      { id: 'cloud', text: 'Cloud Security experience' },
      { id: 'incident', text: 'Incident Response experience' },
      { id: 'network', text: 'Network Security experience' },
      { id: 'back', text: 'Go back to main menu' },
    ],
  },

  siem_edr: {
    id: 'siem_edr',
    message: "Khushi has a strong foundation in Security Information and Event Management (SIEM) and Endpoint Detection and Response (EDR). She has worked with tools like Wazuh, Graylog, and Kibana to implement SOCs and analyze logs for threat detection.",
    options: [
      { id: 'forensics', text: 'Tell me about Digital Forensics' },
      { id: 'cloud', text: 'Cloud Security experience' },
      { id: 'experience', text: 'Ask about other experience' },
      { id: 'back', text: 'Go back to main menu' },
    ],
  },

  forensics: {
    id: 'forensics',
    message: "Khushi had the opportunity to intern at the Directorate of Forensic Science, where she used tools like Cellebrite and XRY to recover and analyze digital evidence for cybercrime cases.",
    options: [
      { id: 'siem_edr', text: 'Tell me about SIEM/EDR' },
      { id: 'cloud', text: 'Cloud Security experience' },
      { id: 'experience', text: 'Ask about other experience' },
      { id: 'back', text: 'Go back to main menu' },
    ],
  },

  cloud: {
    id: 'cloud',
    message: "Yes, Khushi has hands-on experience with Microsoft Azure and Microsoft Sentinel, where she has configured analytical rules for threat identification and incident management.",
    options: [
      { id: 'siem_edr', text: 'Tell me about SIEM/EDR' },
      { id: 'forensics', text: 'Digital Forensics experience' },
      { id: 'experience', text: 'Ask about other experience' },
      { id: 'back', text: 'Go back to main menu' },
    ],
  },

  network: {
    id: 'network',
    message: "Khushi has engineered alerts and rules using Suricata (IPS) to prevent unauthorized network traffic and has experience optimizing firewall rulesets in pfSense and Endian.",
    options: [
      { id: 'siem_edr', text: 'Tell me about SIEM/EDR' },
      { id: 'cloud', text: 'Cloud Security experience' },
      { id: 'experience', text: 'Ask about other experience' },
      { id: 'back', text: 'Go back to main menu' },
    ],
  },

  incident: {
    id: 'incident',
    message: "Khushi has contributed to cybercrime case analysis and has experience in log analysis and threat detection, which are crucial aspects of incident response. She's eager to further develop her skills in this area.",
    options: [
      { id: 'siem_edr', text: 'Tell me about SIEM/EDR' },
      { id: 'forensics', text: 'Digital Forensics experience' },
      { id: 'experience', text: 'Ask about other experience' },
      { id: 'back', text: 'Go back to main menu' },
    ],
  },

  skills: {
    id: 'skills',
    message: "Khushi has a diverse set of cybersecurity skills. What would you like to know more about?",
    options: [
      { id: 'technical_skills', text: 'Technical Skills' },
      { id: 'programming', text: 'Programming Languages' },
      { id: 'soft_skills', text: 'Soft Skills' },
      { id: 'research', text: 'Research Experience' },
      { id: 'back', text: 'Go back to main menu' },
    ],
  },

  technical_skills: {
    id: 'technical_skills',
    message: "Khushi has experience in implementing Security Operations Centers (SOCs), conducting log analysis, intrusion detection, and using tools like Splunk, Wireshark, and Burp Suite. She's also familiar with frameworks like NIST, ISO 27001, and PCI DSS.",
    options: [
      { id: 'programming', text: 'Programming Languages' },
      { id: 'soft_skills', text: 'Soft Skills' },
      { id: 'skills', text: 'Ask about other skills' },
      { id: 'back', text: 'Go back to main menu' },
    ],
  },

  programming: {
    id: 'programming',
    message: "Khushi is proficient in Python, Java, C++, and R, among other languages. She has used these languages for various projects, including developing a probability model for fatigue failure analysis and conducting data analysis with Hadoop and MapReduce.",
    options: [
      { id: 'technical_skills', text: 'Technical Skills' },
      { id: 'soft_skills', text: 'Soft Skills' },
      { id: 'skills', text: 'Ask about other skills' },
      { id: 'back', text: 'Go back to main menu' },
    ],
  },

  soft_skills: {
    id: 'soft_skills',
    message: "Khushi thrives in dynamic, fast-paced environments. She's highly adaptable and can quickly learn and apply new skills. She believes in effective communication and collaboration, and has demonstrated these skills in various team projects.",
    options: [
      { id: 'technical_skills', text: 'Technical Skills' },
      { id: 'programming', text: 'Programming Languages' },
      { id: 'skills', text: 'Ask about other skills' },
      { id: 'back', text: 'Go back to main menu' },
    ],
  },

  research: {
    id: 'research',
    message: "Khushi has conducted research on privacy policies for voice cloning AI models like RVC and Eleven Labs, examining their use cases and implications. She has also developed an insider threat detection model using Moral Foundations Theory and NLP, achieving high accuracy rates on the CMU Insider Threat Dataset and the Enron Email Dataset.",
    options: [
      { id: 'technical_skills', text: 'Technical Skills' },
      { id: 'programming', text: 'Programming Languages' },
      { id: 'skills', text: 'Ask about other skills' },
      { id: 'back', text: 'Go back to main menu' },
    ],
  },

  projects: {
    id: 'projects',
    message: `Here are some of Khushi's notable cybersecurity projects: \n

1. Network Intrusion Detection System \n
- Custom-built IDS using Python and Machine Learning \n
- Real-time traffic analysis and threat detection \n

2. Web Application Security Scanner \n
- Automated vulnerability assessment tool \n
- Cross-site scripting (XSS) and SQL injection detection \n

3. CTF Challenge Platform \n
- Developed and hosted multiple CTF challenges \n
- Focus on web security and reverse engineering \n

Would you like to know more about any specific project?`,
    options: [
      { id: 'ids', text: 'Tell me about the IDS project' },
      { id: 'scanner', text: 'More about the Security Scanner' },
      { id: 'ctf', text: 'CTF Platform details' },
      { id: 'back', text: 'Go back to main menu' },
    ],
  },
  
  resources: {
    id: 'resources',
    message: `Here are some excellent cybersecurity resources Khushi recommends:

📚 Learning Platforms: \n
- TryHackMe \n
- LinkedIn Learning \n

News Sources: \n
- IAPP News \n
- Slashdot Org \n
- WSJ Pro Cybersecurity \n
- Bloomberg Technology \n

🎓 Certifications: \n
- CompTIA Security+ \n
- OSCP \n
- CEH \n
- Refer to "https://pauljerimy.com/security-certification-roadmap/" to know more about certifications \n

Would you like specific details about any of these?`,
    options: [
      { id: 'platforms', text: 'Learning Platforms' },
      { id: 'books', text: 'Recommended Books' },
      { id: 'certs', text: 'Certification Paths' },
      { id: 'back', text: 'Go back to main menu' },
    ],
  },

  contact: {
    id: 'contact',
    message: `You can reach Khushi through any of these channels: \n

📧 Email: khushims@andrew.cmu.edu or shahk2609@gmail.com \n
🔗 LinkedIn: www.linkedin.com/in/shahkhushimitesh \n
🐙 GitHub: www.github.com/khushi2609 \n

She's always open to discussing cybersecurity, potential collaborations, or job opportunities!`,
    options: [
      { id: 'email', text: 'Send an email' },
      { id: 'linkedin', text: 'Visit LinkedIn' },
      { id: 'github', text: 'Check GitHub' },
      { id: 'back', text: 'Go back to main menu' },
    ],
  },

  personal: {
    id: 'personal',
    message: "Beyond cybersecurity, Khushi has diverse interests and a rich personal background. What would you like to know more about?",
    options: [
      { id: 'hobbies', text: 'Sports and Activities' },
      { id: 'psychology', text: 'Interest in Psychology' },
      { id: 'background_personal', text: 'Personal Background' },
      { id: 'back', text: 'Go back to main menu' },
    ],
  },

  hobbies: {
    id: 'hobbies',
    message: "Khushi is passionate about sports and staying active. She enjoys watching Ice Hockey and Tennis, and actively participates in tennis and table tennis. She believes in maintaining an active lifestyle and is always eager to try new sports and physical activities.",
    options: [
      { id: 'psychology', text: 'Tell me about her interest in Psychology' },
      { id: 'background_personal', text: 'More about her background' },
      { id: 'personal', text: 'Ask about other interests' },
      { id: 'back', text: 'Go back to main menu' },
    ],
  },

  psychology: {
    id: 'psychology',
    message: "Khushi has a deep interest in psychology and personal development. She's fascinated by understanding herself and the people around her better. This interest in human behavior and psychology also complements her work in cybersecurity, particularly in areas like insider threat detection and understanding user behavior patterns.",
    options: [
      { id: 'hobbies', text: 'Tell me about her sports interests' },
      { id: 'background_personal', text: 'More about her background' },
      { id: 'personal', text: 'Ask about other interests' },
      { id: 'back', text: 'Go back to main menu' },
    ],
  },

  background_personal: {
    id: 'background_personal',
    message: "Khushi lived in India before moving to the United States in 2023. Her family continues to live in India, and maintaining those close connections is very important to her. She makes it a priority to visit them every year, cherishing the time spent with family and experiencing the rich culture of her homeland. This international perspective adds depth to both her personal and professional life.",
    options: [
      { id: 'hobbies', text: 'Tell me about her sports interests' },
      { id: 'psychology', text: 'Interest in Psychology' },
      { id: 'personal', text: 'Ask about other interests' },
      { id: 'back', text: 'Go back to main menu' },
    ],
  },
}; 