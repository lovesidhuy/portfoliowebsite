import React from 'react'

export const siteUrls = {
  portfolio: 'https://lovesidhuy.github.io/portfoliowebsite/',
  resume: 'https://lovesidhuy.github.io/portfoliowebsite/ls_resume.pdf',
  legacyPortfolio: 'https://lovesidhuy.github.io/portfoliowebsite/old-site/index.html',
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

export function projectAnalyticsLabel(title) {
  return `project_${title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')}`;
}

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
  {
    label: 'Available from',
    value: 'January 2027',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4" />
        <path d="M8 3v4" />
        <path d="M3 11h18" />
      </>
    ),
  },
]

export const directLinks = [
  {
    label: 'Download Resume',
    href: 'https://lovesidhuy.github.io/portfoliowebsite/ls_resume.pdf',
    primary: true,
    analytics: { type: 'resume', location: 'hero_direct' },
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/lovepreetssidhu/',
    analytics: { type: 'outbound', label: 'linkedin_hero' },
  },
  {
    label: 'GitHub',
    href: 'https://github.com/lovesidhuy',
    analytics: { type: 'outbound', label: 'github_hero' },
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
    title: 'Networking & Security Labs',
    tags: ['Cisco IOS', 'VLANs', 'STP/RSTP', 'OSPF', 'ACLs', 'NAT', 'Packet Tracer'],
  },
  {
    id: 2,
    title: 'Network Security & Identity',
    tags: ['802.1X', 'WPA3-Enterprise', 'RADIUS/NPS', 'EAP-TLS', 'AD CS', 'Wireshark', 'Nmap'],
  },
  {
    id: 3,
    title: 'Digital Forensics',
    tags: ['FTK Imager', 'Autopsy', 'Evidence Acquisition', 'Phishing Analysis', 'Endpoint Hardening'],
  },
  {
    id: 4,
    title: 'Cloud & Infrastructure',
    tags: ['AWS (EC2, VPC, S3, IAM)', 'Azure', 'Docker', 'Terraform'],
  },
  {
    id: 5,
    title: 'Systems Administration & Scripting',
    tags: ['Windows Server', 'Active Directory', 'NPS', 'Group Policy', 'Linux (Ubuntu, Kali)', 'Python (Boto3)', 'Bash', 'C++', 'SQL', 'Git'],
  },
  {
    id: 6,
    title: 'User Support',
    tags: ['Windows/macOS/iOS/Android', 'Remote Support', 'Hardware Troubleshooting', 'CRM/Ticketing', 'Device Setup & Imaging'],
  },
]
