import React from 'react'
import { projectAnalyticsLabel } from '../data.jsx'

const cardColors = [
  'project-card-col--blue',
  'project-card-col--amber',
  'project-card-col--yellow',
  'project-card-col--green',
]

const projects = [
  {
    id: 1,
    title: 'Identity Infrastructure & Enterprise Authentication Lab',
    date: 'Feb 2026',
    course: 'Wireless Systems',
    featured: true,
    stack: 'Windows Server 2022 | AD | NPS | RADIUS | EAP-TLS | 802.1X | Wireshark | Terraform | Azure | AD CS',
    bullets: [
      'Deployed password-less WPA3-Enterprise simulation using Windows Server NPS, Azure VMs, Active Directory, and AD Certificate Authority (AD CS).',
      'Configured 802.1X access control and EAP-TLS mutual authentication to isolate rogue endpoints; analyzed RADIUS handshakes and packet differences with Wireshark and Event ID logs.',
    ],
    url: 'https://github.com/lovesidhuy/portfoliowebsite/blob/gh-pages/wifi_radius_security_report.pdf',
    linkLabel: 'View report',
  },
  {
    id: 2,
    title: 'IoT Smart Patient Monitoring & Alert System',
    date: 'Apr 2026',
    course: 'IOT',
    featured: true,
    stack: 'Embedded C++ | Arduino | Tinkercad',
    bullets: [
      'Engineered an embedded edge-computing monitoring prototype in C++, implementing a multi-tier priority state machine to evaluate real-time vital telemetry (temperature, BPM, motion) and trigger automated audio-visual alarms and servo lock mechanisms.',
      'Integrated I2C LCD diagnostics, alert acknowledgment overrides, and emergency nurse call logic, validating system reliability and edge fail-safes across 9 distinct simulation test scenarios.',
    ],
    url: 'https://github.com/lovesidhuy/Smart-Patient-Control-System',
  },
  {
    id: 3,
    title: 'STaaS Cloud-Based Smart Drive',
    date: 'Dec 2025',
    course: 'Cloud Computing',
    featured: true,
    stack: 'AWS (VPC, EC2, S3, IAM) | HTML | CSS | JavaScript | Spring Boot | Docker | MongoDB | Python',
    bullets: [
      'Designed and deployed a secure AWS environment with VPC segmentation, NAT gateways, bastion hosts, and least-privilege IAM policies for network isolation and controlled access.',
      'Automated infrastructure operations using Python (Boto3), improving deployment consistency; containerized services with Docker.',
    ],
    url: 'https://github.com/lovesidhuy/STaaS-Cloud-Based-Smart-Drive',
  },
  {
    id: 4,
    title: 'Online Recruitment System',
    date: 'Mar 2025',
    course: 'Full Stack',
    featured: false,
    stack: 'PHP | MySQL | XAMPP | OpenAI API | LangChain',
    bullets: [
      'Built a recruitment system featuring dedicated applicant and HR admin interfaces.',
      'Integrated AI-based screening using OpenAI and LangChain to automate candidate evaluation.',
      'Structured backend logic with modular methods for scalable development.',
    ],
    url: 'https://github.com/lovesidhuy/online-recruiting-system/blob/main/README.md',
  },
]

function ArrowRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-2.5 transition duration-300 ease-in-out group-hover:translate-x-0.5 group-hover:scale-105" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function Projects() {
  return (
    <section id="projects" className="bg-base px-4 py-[96px] md:py-[160px]" data-analytics-section="projects">
      <div className="mx-auto max-w-[1224px]">
        <h2 className="mb-6 text-center text-heading-l text-[#1C1917] md:mb-[96px] md:text-heading-xxl">
          Portfolio labs with production-shaped constraints
        </h2>
        <div className="grid gap-12 md:gap-20">
          {projects.map((project, index) => (
            <article key={project.id} className="project-article grid gap-6 md:grid-cols-2 md:items-start">
              <div className="project-text-col">
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full bg-[#D7D3D0] px-2 py-1.5 text-body-s font-medium text-[#1C1917]">{project.course}</span>
                  <span className="text-body-l text-[#79716b]">{project.date}</span>
                </div>
                <h3 className="mb-2 text-[28px] leading-[40px] text-[#1C1917] md:text-[40px] md:leading-[56px]">
                  {project.title}
                </h3>
                <p className="font-normal leading-6 text-[#57534E]">{project.bullets[0]}</p>
                <p className="mt-3 font-normal leading-6 text-[#57534E]">{project.stack}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex max-h-fit w-max items-center whitespace-nowrap rounded-1 border border-[#D7D3D0] bg-[#FAFAF9] p-2 py-1.5 font-medium leading-6 text-[#1C1917] transition hover:bg-[black]/10 mt-4"
                  data-analytics="outbound"
                  data-analytics-label={projectAnalyticsLabel(project.title)}
                >
                  {project.linkLabel ?? 'View project'}
                  <ArrowRight />
                </a>
              </div>
              <div className={`project-card-col h-full rounded-3 ${cardColors[index % cardColors.length]} p-4`}>
                <div className="project-preview-card-inner">
                  <div className="min-w-0">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-body-l font-medium text-[#1C1917]">{project.course}</span>
                      <span className="h-1 w-1 rounded-full bg-[#D7D3D0]"></span>
                    </div>
                    <ul className="grid gap-2">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="rounded-1 border border-[#D7D3D0] bg-[#FAFAF9] p-2 text-body-l text-[#57534E]">{bullet}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto flex shrink-0 items-center justify-between border-t border-[#D7D3D0] pt-3">
                    <span className="text-heading-s text-[#1C1917]">{project.title.split(' ')[0]}</span>
                    <span className="text-body-l text-[#79716b]">Lovepreet Sidhu</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-[80px] flex justify-center md:mt-[128px]">
          <a
            href="https://github.com/lovesidhuy?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex max-h-fit w-max items-center whitespace-nowrap rounded-1 border border-[#D7D3D0] bg-[#FAFAF9] p-2 py-1.5 font-medium leading-6 text-[#1C1917] transition hover:bg-[black]/10"
            data-analytics="outbound"
            data-analytics-label="github_repositories"
          >
            View all GitHub repositories
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
