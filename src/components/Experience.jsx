import React from 'react'

const volunteer = [
  {
    id: 1,
    title: 'Support Volunteer',
    company: 'Cystic Fibrosis Canada',
    period: 'May 2025',
    bullets: ['Supported logistics coordination and participant assistance at fundraising events.'],
  },
]

function Experience() {
  return (
    <section id="experience" className="lg-px-0 bg-base px-2 py-20" data-analytics-section="experience">
      <section>
        <h2 className="font-aeonik font-normal text-rebranding-h2-mobile lg:text-rebranding-h2 text-center text-heading-primary">
          Experience, education, and proof points
        </h2>
        <div className="mt-2 md:mt-8">
          <div className="grid grid-cols-1 justify-items-center gap-2">
          {volunteer.map((exp, index) => (
            <details key={exp.id} className="w-full lg:max-w-[768px] transition-opacity duration-300" open={index === 0}>
              <summary className="flex w-full flex-col rounded-1.5 shadow-card border border-rebranding-secondary bg-rebranding-primary-subtle p-0">
                <div className="cursor-pointer p-3 transition-[margin] duration-300 ease-in-out">
                  <div className="flex select-none items-center justify-between gap-1">
                    <label className="font-aeonik font-normal text-rebranding-h6-mobile lg:text-rebranding-h6 cursor-pointer text-heading-primary">
                      {exp.title} · {exp.company}
                    </label>
                    <span className="relative flex items-center justify-center ml-1 text-icon-l text-icon-primary transition duration-300 ease-in-out">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                  <p className="mt-2 text-body-l text-rebranding-tertiary">{exp.period}</p>
                </div>
              </summary>
              <div className="overflow-hidden">
                <ul className="exp-card__bullets text-body-l text-rebranding-tertiary">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
                </ul>
              </div>
            </details>
          ))}
            <details className="w-full lg:max-w-[768px] transition-opacity duration-300" open>
              <summary className="flex w-full flex-col rounded-1.5 shadow-card border border-rebranding-secondary bg-rebranding-primary-subtle p-0">
                <div className="cursor-pointer p-3">
                  <div className="flex select-none items-center justify-between gap-1">
                    <label className="font-aeonik font-normal text-rebranding-h6-mobile lg:text-rebranding-h6 cursor-pointer text-heading-primary">Bachelor of Technology · Kwantlen Polytechnic University</label>
                  </div>
                  <p className="mt-2 text-body-l text-rebranding-tertiary">Information Technology, Network Administration and Security · Sep 2022 - Dec 2026 expected</p>
                </div>
              </summary>
              <div className="px-3 pb-3 text-body-l text-rebranding-tertiary">Relevant Coursework: Networking Technologies, Cloud Computing, Digital Forensics, Security of Wireless Systems, IoT Systems</div>
            </details>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Experience
