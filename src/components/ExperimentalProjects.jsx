import React from 'react'

const experimentalProjects = [
  {
    id: 1,
    title: 'JobsFarm 🚜',
    tagline: 'The job-search automation system I built for my own applications',
    description:
      'I built JobsFarm because repeating the same job searches, form fields, and screening questions across ten different sites was eating up my time. It helps me go from finding a role to submitting an application: it discovers matching jobs, opens the right application flow, drafts answers from my own QA bank, and keeps a record of what happened.',
    features: [
      '1. Find the right openings — searches job boards and direct ATS pages, including Indeed, Glassdoor, LinkedIn Easy Apply, Workopolis, Job Bank Canada, Greenhouse, Ashby, Lever, and BambooHR.',
      '2. Open each application flow — uses Playwright and Chrome CDP when a site needs a real browser, or a direct ATS API scraper when one is available.',
      '3. Help me answer consistently — checks my 7,300+ curated QA bank first, then routes harder questions through Ollama, DeepSeek, OpenAI, Gemini, Groq, OpenRouter, or AkashML.',
      '4. Run it where I need it — locally on my workstation or across AWS/GCP nodes, provisioned with Docker, Terraform, Packer, and Ansible.',
      '5. Tell me what happened — stores application history in MongoDB, sends reports to Google Sheets/Drive, and pushes real-time updates to Telegram.',
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
      <div className="experimental-projects__content mx-auto">
        <div className="mb-6 md:mb-12">
          <p className="mb-2 text-body-l font-medium skills-accent">Featured</p>
          <h2 className="experimental-projects__heading text-heading-l">
            Experimental Projects
          </h2>
          <p className="mt-3 max-w-[720px] font-normal leading-6 skills-muted">
            Side projects I build to solve problems I actually run into — automation, AI, and infrastructure in the real world.
          </p>
        </div>
        <div className="grid gap-8">
          {experimentalProjects.map((project) => (
            <article key={project.id} className="experimental-projects__card rounded-3 border border-[#44403C] bg-[#1C1917] p-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded-full bg-[#FFF2C6] px-2 py-1.5 text-body-s font-medium text-[#1C1917]">Open Source</span>
                <span className="experimental-project__year text-body-l">2026</span>
              </div>
              <h3 className="experimental-projects__title mb-2 text-[28px] leading-[40px] text-[#FAFAF9]">
                {project.title}
              </h3>
              <p className="experimental-project__tagline mb-3 font-medium leading-6">{project.tagline}</p>
              <p className="experimental-project__description font-normal leading-6">{project.description}</p>
              <h4 className="experimental-projects__subheading mt-6 text-body-l">How it works</h4>
              <ul className="mt-4 grid gap-2">
                {project.features.map((feature) => (
                  <li key={feature} className="experimental-project__feature rounded-1 border border-[#44403C] bg-[#292524] p-2 text-body-l">{feature}</li>
                ))}
              </ul>
              <p className="experimental-project__stack mt-4 font-normal leading-6"><span className="font-medium">What I used:</span> {project.stack}</p>
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
