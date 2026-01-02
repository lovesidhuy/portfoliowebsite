export const portfolioData = {
  personal: {
    name: "Lovepreet Sidhu",
    role: "Network Admin & Security",
    location: "Surrey, BC",
    phone: "778-908-3286",
    email: "lovepreet.sidhu3@student.kpu.ca",
    github: "https://github.com/lovesidhuy",
    resume: "https://github.com/lovesidhuy/portfoliowebsite/blob/main/coopls.pdf"
  },

  summary: [
    { label: "4th-Year IT Student", text: "Specializing in Network Administration & Security at KPU, graduating May 2026." },
    { label: "Expertise in Networking & Security", text: "Proficient in TCP/IP, VLANs, firewalls, VPNs, and cloud security with AWS." },
    { label: "Hands-On Problem Solver", text: "Experience in system hardening, FIM, and real-world troubleshooting in fast-paced environments." },
    { label: "Eager to Contribute", text: "Seeking co-op or roles in IT security and infrastructure." }
  ],

  skills: [
    { title: "Networking", icon: "fa-network-wired", desc: "TCP/IP, VLANs, OSPF, DHCP, GRE Tunnels, Cisco Packet Tracer, Wireless Systems." },
    { title: "Security", icon: "fa-user-shield", desc: "System Hardening, FIM (File Integrity Monitoring), VPN Config, Firewall Mgmt, OSSEC." },
    { title: "OS & Server", icon: "fa-server", desc: "Windows 7/10/11, Server 2016/2019, macOS, Linux (Ubuntu, Kali), Active Directory." },
    { title: "Cloud & Tools", icon: "fa-cloud", desc: "AWS Solutions Architect Assoc., Microsoft 365, Remote Desktop, Ticketing Systems." },
    { title: "Scripting", icon: "fa-code", desc: "Python, Bash, SQL, MySQL, HTML/CSS, JavaScript, PHP." },
    { title: "Hardware", icon: "fa-microchip", desc: "Desktop/Laptop troubleshooting, System Imaging, Peripheral setup." }
  ],

  projects: [
    {
      title: "STaaS - Cloud-Based Smart Drive",
      date: "Dec 2025",
      stack: "AWS (VPC, EC2, S3, IAM), Java Spring Boot, Docker, MongoDB",
      bullets: [
        { label: "Architecture", desc: "Designed a secure cloud infrastructure using AWS VPC with segmented public/private subnets, NAT Gateways, and Bastion Hosts." },
        { label: "Development", desc: "Built a scalable backend using Spring Boot integrated with AWS S3 for secure object storage." },
        { label: "Security & Access Control", desc: "Implemented IAM-based access policies, pre-signed URLs, and automated file classification." },
        { label: "Scalability", desc: "Improved fault isolation and system scalability through containerization and modular service design." }
      ],
      link: "https://github.com/lovesidhuy/STaaS-Cloud-Based-Smart-Drive"
    },
    {
      title: "File Integrity Monitoring (FIM) System",
      date: "Mar 2025",
      stack: "Java, SHA-256, WatchService API, OSSEC, Kali Linux",
      bullets: [
        { label: "System Design", desc: "Engineered a real-time file integrity monitoring system using SHA-256 hashing and Java WatchService API." },
        { label: "Threat Detection", desc: "Integrated OSSEC for host-based intrusion detection and real-time alerting." },
        { label: "Security & Compliance", desc: "Designed workflows supporting forensic readiness, compliance auditing, and incident response." }
      ],
      link: "https://github.com/lovesidhuy/file-integrity-monitoring-tool"
    },
    {
      title: "Online Recruitment Platform",
      date: "Mar 2025",
      stack: "PHP, MySQL, OpenAI API, LangChain",
      bullets: [
        { label: "Full-Stack Architecture", desc: "Developed a scalable recruitment platform with separate applicant and HR dashboards." },
        { label: "AI Integration", desc: "Implemented AI-powered resume screening using OpenAI and LangChain." },
        { label: "Backend Optimization", desc: "Improved modularity and query performance to support high-volume candidate processing." }
      ],
      link: "https://github.com/lovesidhuy/online-recruiting-system"
    },
    {
      title: "Tournament Management AI",
      date: "2024",
      stack: "Python, LangChain, MySQL, Node.js",
      bullets: [
        { label: "NLP Integration", desc: "Enabled natural language querying over structured tournament databases using LangChain." },
        { label: "Database Design", desc: "Created normalized schemas for teams, players, sponsors, and financial data." },
        { label: "Analytics & Visualization", desc: "Delivered real-time dashboards for performance metrics and revenue insights." }
      ],
      link: "https://github.com/lovesidhuy/Tournament-Management"
    },
    {
      title: "Secure Banking Application",
      date: "2024",
      stack: "Java, OOP, Interfaces, Abstract Classes",
      bullets: [
        { label: "Security Architecture", desc: "Designed a secure banking system using strong object-oriented principles." },
        { label: "Transaction Handling", desc: "Implemented safe deposit, withdrawal, and fund transfer mechanisms." },
        { label: "Data Protection", desc: "Enforced encapsulation and access control to safeguard sensitive financial information." }
      ],
      link: "https://github.com/lovesidhuy/java-banking_app"
    },
    {
      title: "Sorting Algorithm Visualizer",
      date: "2024",
      stack: "JavaScript, HTML5, CSS3",
      bullets: [
        { label: "Visualization Engine", desc: "Built an interactive tool to demonstrate sorting algorithms visually." },
        { label: "Algorithm Coverage", desc: "Implemented Bubble, Selection, Insertion, and Quick Sort visualizations." },
        { label: "User Experience", desc: "Added real-time animation controls and adjustable speed settings for learning enhancement." }
      ],
      link: "https://github.com/lovesidhuy/Sorting-Agorithms-Visualizer"
    }
  ],

  experience: [
    {
      title: "Porter",
      icon: "fa-hospital",
      company: "Vancouver Coastal Health",
      period: "Oct 2022 - Present",
      category: "healthcare",
      bullets: [
        "Facilitated patient transport and equipment management in high-volume settings.",
        "Maintained clear communication with medical staff to prioritize urgent requests."
      ]
    },
    {
      title: "Delivery Driver",
      icon: "fa-truck",
      company: "UPS (Delta, BC)",
      period: "Oct 2021 - Feb 2022",
      category: "logistics",
      bullets: [
        "Executed time-sensitive deliveries using logistics software.",
        "Optimized delivery routes independently for efficiency."
      ]
    },
    {
      title: "Sales Representative",
      icon: "fa-mobile-alt",
      company: "BELL (Authorized Dealer)",
      period: "Apr 2018 - Aug 2021",
      category: "technical",
      bullets: [
        "Assisted customers with mobile device setup, software troubleshooting, and 5G plans.",
        "Resolved technical inquiries regarding hardware specs and connectivity."
      ]
    },
    {
      title: "Field Sales Rep",
      icon: "fa-network-wired",
      company: "TELUS (Authorized Dealer)",
      period: "Apr 2017 - Mar 2018",
      category: "technical",
      bullets: [
        "Advised customers on fiber network upgrades and provided setup support.",
        "Simplified technical concepts for non-technical users."
      ]
    }
  ],

  education: {
    degree: "B.Tech: Information Technology",
    school: "Kwantlen Polytechnic University",
    period: "May 2022 - May 2026 (Expected)",
    specialization: "Network Administration and Security",
    tags: ["Wireless Security", "IoT", "System Development"]
  },

  certifications: [
    { name: "AWS Solutions Architect - Associate", date: "Nov 2024" },
    { name: "AWS Cloud Practitioner", date: "Feb 2024" }
  ],

  volunteer: {
    title: "Event Support Volunteer",
    org: "Cystic Fibrosis Foundation",
    period: "May 2025",
    desc: "Supported logistics coordination and participant assistance to raise awareness and funds."
  }
};
