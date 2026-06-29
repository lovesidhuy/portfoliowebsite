import React from 'react'

export const siteUrls = {
  portfolio: 'https://lovesidhuy.github.io/portfoliowebsite/',
  resume: 'https://lovesidhuy.github.io/portfoliowebsite/ls_resume.pdf',
}

export const formSubmit = {
  action: 'https://formsubmit.co/lovepreetsidhu8173@gmail.com',
  redirect: 'https://lovesidhuy.github.io/portfoliowebsite/?request=sent#contact',
}

export const autoresponseMessage = `Hi, thanks for your interest.

You can view my portfolio here:
${siteUrls.portfolio}

You can view or download my resume here:
${siteUrls.resume}

Best regards,
Lovepreet Sidhu`

export const quickProfile = [
  {
    label: 'Focus',
    value: 'Networking & security',
    icon: (
      <>
        <path d="M12 3v18" />
        <path d="M5 8h14" />
        <path d="M5 16h14" />
        <path d="M7 8v8" />
        <path d="M17 8v8" />
      </>
    ),
  },
  {
    label: 'Graduation',
    value: 'Dec 2026',
    icon: (
      <>
        <path d="M3 8l9-4 9 4-9 4-9-4Z" />
        <path d="M7 10v5c3 2 7 2 10 0v-5" />
        <path d="M21 8v6" />
      </>
    ),
  },
]

export const directLinks = [
  {
    label: 'Download Resume',
    href: 'https://lovesidhuy.github.io/portfoliowebsite/ls_resume.pdf',
    primary: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/lovepreetssidhu/',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/lovesidhuy',
  },
]

export const certifications = [
  {
    title: 'AWS Certified Solutions Architect - Associate',
    date: 'Nov 2024',
    url: 'https://www.credly.com/badges/edc04461-7255-46db-b93b-0772b1b4d496/linked_in_profile',
    label: 'View cert',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    date: 'Feb 2024',
    url: 'https://www.credly.com/badges/dd482bdb-ceb5-453a-a41d-8413b877ee7d/linked_in_profile',
    label: 'View cert',
  },
  {
    title: 'Codecademy - Command Line Certification',
    date: 'Credential',
    url: 'https://www.codecademy.com/profiles/py4805662099/certificates/c87ba0541f8be78bc2f4ba1128233f6f',
    label: 'View credentials',
  },
]

export const skills = [
  {
    id: 1,
    title: 'Networking',
    tags: ['TCP/IP', 'VLANs', 'OSPF', 'DHCP', 'GRE Tunnels', 'Cisco Packet Tracer', 'Wireless Systems'],
  },
  {
    id: 2,
    title: 'Security',
    tags: ['System Hardening', 'FIM', 'VPN Config', 'Firewall Management', 'OSSEC', 'Network Monitoring'],
  },
  {
    id: 3,
    title: 'OS & Server',
    tags: ['Windows 7/10/11', 'Server 2016/2019', 'macOS', 'Linux (Ubuntu, Kali)', 'Active Directory'],
  },
  {
    id: 4,
    title: 'Cloud & Tools',
    tags: ['AWS', 'S3', 'EC2', 'VPC', 'IAM', 'Microsoft 365', 'Remote Desktop', 'Ticketing Systems'],
  },
  {
    id: 5,
    title: 'Scripting & Development',
    tags: ['Python', 'Bash', 'SQL', 'MySQL', 'HTML/CSS', 'JavaScript', 'PHP'],
  },
  {
    id: 6,
    title: 'Hardware',
    tags: ['Desktop/Laptop Troubleshooting', 'System Imaging', 'Peripheral Setup', 'Hardware Diagnostics'],
  },
]
