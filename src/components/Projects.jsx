import React from 'react'

const projects = [
  {
    id: 1,
    title: 'STaaS Cloud-Based Smart Drive',
    date: 'Dec 2025',
    course: 'Capstone',
    featured: true,
    stack: 'AWS (VPC, EC2, S3, IAM) | Java Spring Boot | Docker | MongoDB',
    bullets: [
      'Architected a secure AWS infrastructure using a VPC with segmented public/private subnets, NAT Gateways, and Bastion hosts.',
      'Developed a scalable storage platform using Java Spring Boot and AWS S3.',
      'Implemented automated file classification, secure pre-signed URLs, and storage quotas.',
    ],
    url: 'https://github.com/lovesidhuy/STaaS-Cloud-Based-Smart-Drive/blob/main/README.md',
  },
  {
    id: 2,
    title: 'File Integrity Monitoring Tool',
    date: 'Mar 2025',
    course: 'Security',
    featured: false,
    stack: 'Java (SHA-256) | WatchService API | OSSEC | Kali Linux',
    bullets: [
      'Designed a FIM system utilizing SHA-256 hashing and real-time directory monitoring.',
      'Deployed and documented OSSEC on a Kali Linux VM.',
      'Created user guides emphasizing security benefits and regulatory compliance.',
    ],
    url: 'https://github.com/lovesidhuy/file-integrity-monitoring-tool/blob/main/README.md',
  },
  {
    id: 3,
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
    <section id="projects" className="bg-base px-4 py-[96px] md:py-[160px]">
      <div className="mx-auto max-w-[1224px]">
        <h2 className="mb-6 text-center text-heading-l text-[#1C1917] md:mb-[96px] md:text-heading-xxl">
          Portfolio labs with production-shaped constraints
        </h2>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <article key={project.id} className="project-article grid gap-4 md:grid-cols-2 md:items-center">
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
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="group flex max-h-fit w-max items-center whitespace-nowrap rounded-1 border border-[#D7D3D0] bg-[#FAFAF9] p-2 py-1.5 font-medium leading-6 text-[#1C1917] transition hover:bg-[black]/10 mt-4">
                  View project
                  <ArrowRight />
                </a>
              </div>
              <div className={`project-card-col rounded-3 ${index === 0 ? 'bg-[#EDF3FF]' : index === 1 ? 'bg-[#FFFAEB]' : 'bg-[#FFF2C6]'} p-4`}>
                <div className="project-preview-card-inner">
                  <div>
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
                  <div className="flex items-center justify-between border-t border-[#D7D3D0] pt-3">
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
