export const profile = {
  name: 'Lovepreet Sidhu',
  role: 'Network Admin & Security',
  tagline: 'Final-year IT student · AWS SAA · Enterprise auth, cloud & security labs',
  location: 'Surrey, BC',
  email: 'lovepreet.sidhu3@student.kpu.ca',
  phone: '778-908-3286',
  github: 'https://github.com/lovesidhuy',
  linkedin: 'https://linkedin.com/in/lovepreetssidhu/',
  resume: './ls_resume.pdf',
  gradDate: 'Dec 2026',
  status: 'Open to opportunities',
};

export const certifications = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: 'Nov 2024',
    link: 'https://www.credly.com/badges/aws-solutions-architect-associate',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Feb 2024',
    link: 'https://www.credly.com/badges/aws-cloud-practitioner',
  },
];

export const education = {
  school: 'Kwantlen Polytechnic University',
  degree: 'Bachelor of Technology in Information Technology',
  focus: 'Network Administration & Security',
  period: 'May 2022 – Dec 2026 (Expected)',
};

export const skills = [
  {
    category: 'Networking & Infrastructure',
    icon: 'fa-network-wired',
    items: ['TCP/IP', 'VLANs', 'OSPF', 'BGP', 'VPNs', 'Cisco IOS', 'Firewall Policy', 'LAN/WAN'],
  },
  {
    category: 'Security & Forensics',
    icon: 'fa-shield-halved',
    items: ['802.1X/RADIUS', 'OSSEC', 'Wazuh HIDS', 'Splunk', 'Wireshark', 'Autopsy', 'Nmap'],
  },
  {
    category: 'Cloud & Systems',
    icon: 'fa-cloud',
    items: ['AWS (VPC, EC2, S3, IAM)', 'Docker', 'Active Directory', 'Windows Server', 'Linux', 'Python'],
  },
  {
    category: 'Scripting & Tools',
    icon: 'fa-code',
    items: ['Python', 'Bash', 'SQL', 'Git', 'MongoDB', 'JavaScript'],
  },
];

export const featuredProjects = [
  {
    id: 'staas',
    title: 'STaaS Cloud-Based Smart Drive',
    course: 'INFO 4110 - Cloud Computing',
    date: 'Dec 2025',
    stack: 'AWS, Spring Boot, Docker, MongoDB, Python',
    featured: true,
    bullets: [
      'Architected secure AWS infrastructure with VPC segmentation, NAT gateways, and bastion hosts.',
      'Automated file lifecycle management using Python (Boto3) for cross-environment operations.',
      'Containerized services with Docker for consistent, scalable deployments.',
    ],
    link: 'https://github.com/lovesidhuy/STaaS-Cloud-Based-Smart-Drive',
    linkLabel: 'View on GitHub',
  },
  {
    id: 'auth-lab',
    title: 'Enterprise Authentication Lab',
    course: 'INFO 4370 - Wireless Systems Security',
    date: 'Mar 2025 – Feb 2026',
    stack: 'Windows Server, Azure, RADIUS, EAP-TLS, 802.1X',
    featured: true,
    bullets: [
      'Deployed enterprise 802.1X authentication with EAP-TLS mutual auth on Azure.',
      'Eliminated password-based network access using internal Certificate Authority.',
      'Validated security via Wireshark captures and Event ID log analysis.',
    ],
    link: '/wifi_radius_security_report.pdf',
    linkLabel: 'Technical Report',
  },
  {
    id: 'security-ops',
    title: 'Security Operations & Threat Detection',
    course: 'INFO 3171/4120 - Systems Security',
    date: 'Mar 2025 – Feb 2026',
    stack: 'Kali Linux, OSSEC, Autopsy, Java, SHA-256',
    featured: true,
    bullets: [
      'Executed controlled phishing attack and reconstructed 35-second incident timeline.',
      'Performed disk forensics with FTK Imager and Autopsy for file recovery.',
      'Built Java FIM tool with SHA-256 hashing for real-time change detection.',
    ],
    link: 'https://github.com/lovesidhuy/file-integrity-monitoring-tool',
    linkLabel: 'View on GitHub',
  },
];

export const additionalProjects = [
  {
    id: 'recruit',
    title: 'Online Recruitment Platform',
    date: 'Mar 2025',
    stack: 'PHP, MySQL, OpenAI API, LangChain',
    bullets: [
      'Engineered AI-powered resume screening using OpenAI and LangChain.',
      'Built modular PHP/MySQL architecture with distinct applicant/HR interfaces.',
    ],
    link: 'https://github.com/lovesidhuy/online-recruiting-system',
    linkLabel: 'View code',
  },
  {
    id: 'formpilot',
    title: 'FormPilot AI',
    date: '2026',
    stack: 'JavaScript, Chrome Extension, Ollama',
    bullets: [
      'Built local-first Chrome extension for job application autofill.',
      'Integrated Ollama AI for intelligent form completion without cloud dependency.',
    ],
    link: 'https://github.com/lovesidhuy/formpilot-ai',
    linkLabel: 'GitHub',
  },
  {
    id: 'iot-monitor',
    title: 'IoT Patient Monitoring System',
    date: 'Mar 2026',
    stack: 'Arduino, Embedded C/C++, Sensors',
    bullets: [
      'Arduino-based healthcare monitoring tracking temperature, heart rate, movement.',
      'Pure edge computing with no cloud or Wi-Fi dependency.',
    ],
    link: 'https://github.com/lovesidhuy/iot-patient-monitor',
    linkLabel: 'View code',
  },
];

export const experience = [
  {
    title: 'Porter',
    company: 'Vancouver Coastal Health',
    period: 'Oct 2022 – Present',
    category: 'healthcare',
    bullets: [
      'Facilitated patient transport and equipment management in high-volume healthcare settings.',
      'Maintained clear communication with medical staff to prioritize urgent requests.',
    ],
  },
  {
    title: 'Delivery Driver',
    company: 'UPS (Delta, BC)',
    period: 'Oct 2021 – Feb 2022',
    category: 'logistics',
    bullets: [
      'Executed time-sensitive deliveries using logistics software.',
      'Optimized delivery routes independently for efficiency.',
    ],
  },
  {
    title: 'Sales Representative',
    company: 'BELL (Authorized Dealer)',
    period: 'Apr 2018 – Aug 2021',
    category: 'tech-sales',
    bullets: [
      'Assisted customers with mobile device setup, software troubleshooting, and 5G plans.',
      'Resolved technical inquiries regarding hardware specs and connectivity.',
    ],
  },
  {
    title: 'Field Sales Rep',
    company: 'TELUS (Authorized Dealer)',
    period: 'Apr 2017 – Mar 2018',
    category: 'tech-sales',
    bullets: [
      'Advised customers on fiber network upgrades and provided setup support.',
      'Simplified technical concepts for non-technical users.',
    ],
  },
];
