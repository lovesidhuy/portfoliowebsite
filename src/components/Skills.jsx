import React from 'react'
import { skills } from '../data.jsx'

function Skills() {
  return (
    <section id="skills" className="overflow-hidden bg-[#171412] px-2 py-[96px] md:px-5 md:py-[160px] lg:px-8">
      <div className="mx-auto max-w-[1224px]">
        <div className="mb-6 md:mb-12">
          <p className="mb-2 text-body-l font-medium skills-accent">Technical stack</p>
          <h2 className="text-heading-l md:text-heading-xxl">
            Networking, security, and cloud tooling
          </h2>
          <p className="mt-3 max-w-[720px] font-normal leading-6 skills-muted">
            Hands-on labs across enterprise infrastructure, monitoring, and support workflows.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <article key={skill.id} className="rounded-2 border border-[#44403C] bg-[#1C1917] p-3">
              <h3 className="mb-2 text-heading-s">{skill.title}</h3>
              <div className="flex gap-1" style={{ flexWrap: 'wrap', minWidth: 0 }}>
                {skill.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="rounded-1 border border-[#57534E] bg-[#292524] px-2 py-1.5 text-body-l skills-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
