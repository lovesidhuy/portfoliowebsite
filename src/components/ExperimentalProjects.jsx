import React from 'react'

const experimentalProjects = [
  {
    id: 1,
    title: 'JobsFarm 🚜',
    tagline: 'Open-source job discovery & application automation',
    description:
      'A high-throughput, hands-free job discovery and application automation engine combining browser automation (Playwright/Chrome CDP), anti-detection evasion, an autonomous AI question-answering brain, and automated ATS API scrapers — automating every phase of modern job hunting from discovery to final submission.',
    features: [
      'Multi-Portal & Direct ATS Automation — Indeed, Glassdoor, LinkedIn Easy Apply, Workopolis, Job Bank Canada, Google Jobs, Greenhouse, Ashby, Lever, BambooHR',
      'Autonomous Multi-Model AI Answering — 7,300+ curated QA bank with Ollama, DeepSeek, OpenAI, Google Gemini, Groq, OpenRouter, AkashML',
      'Anti-Detection & Evasion Engine — CapSolver/CapMonster CAPTCHA resolution, proxy ladders, NSTbrowser anti-detect profiles',
      'Dual Deployment — local workstation or multi-node cloud farm on AWS/GCP with Terraform, Packer, and Ansible',
      'Observability & Telemetry — MongoDB history, Google Sheets/Drive reporting, Telegram real-time alerts',
    ],
    stack: 'Python | Playwright/Chrome CDP | MongoDB | Docker | Terraform (AWS/GCP) | Packer | Ansible | LLM Gateway',
    url: 'https://github.com/lovesidhuy/jobsfarm',
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

function ExperimentalProjects() {
  return (
    <section id="experimental-projects" className="overflow-hidden bg-[#171412] px-2 py-[96px] md:px-5 md:py-[160px] lg:px-8" data-analytics-section="experimental_projects">
      <div className="mx-auto max-w-[1224px]">
        <div className="mb-6 md:mb-12">
          <p className="mb-2 text-body-l font-medium skills-accent">Featured</p>
          <h2 className="text-heading-l md:text-heading-xxl">
            Experimental Projects
          </h2>
          <p className="mt-3 max-w-[720px] font-normal leading-6 skills-muted">
            Hands-on builds pushing beyond coursework — automation, AI, and infrastructure at scale.
          </p>
        </div>
        <div className="grid gap-8">
          {experimentalProjects.map((project) => (
            <article key={project.id} className="rounded-3 border border-[#44403C] bg-[#1C1917] p-4 md:p-6">
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded-full bg-[#FFF2C6] px-2 py-1.5 text-body-s font-medium text-[#1C1917]">Open Source</span>
                <span className="experimental-project__year text-body-l">2026</span>
              </div>
              <h3 className="mb-2 text-[28px] leading-[40px] text-[#FAFAF9] md:text-[40px] md:leading-[56px]">
                {project.title}
              </h3>
              <p className="experimental-project__tagline mb-3 font-medium leading-6">{project.tagline}</p>
              <p className="experimental-project__description font-normal leading-6">{project.description}</p>
              <ul className="mt-4 grid gap-2">
                {project.features.map((feature) => (
                  <li key={feature} className="experimental-project__feature rounded-1 border border-[#44403C] bg-[#292524] p-2 text-body-l">{feature}</li>
                ))}
              </ul>
              <p className="experimental-project__stack mt-4 font-normal leading-6">{project.stack}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-5 flex max-h-fit w-max items-center whitespace-nowrap rounded-1 border border-[#D7D3D0] bg-[#FAFAF9] p-2 py-1.5 font-medium leading-6 text-[#1C1917] transition hover:bg-[black]/10"
                data-analytics="outbound"
                data-analytics-label="experimental_jobsfarm"
              >
                View on GitHub
                <ArrowRight />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperimentalProjects
