import React from 'react'

const experimentalProjects = [
  {
    id: 1,
    title: 'Wi-Fi RADIUS Security Audit',
    year: '2026',
    tagline: 'Hands-on EAP-TLS deployment and attack simulation on a live campus network.',
    description:
      'Designed, deployed, and tested a RADIUS-based 802.1X wireless network, then mapped the failure modes an attacker could exploit when certificate validation is misconfigured.',
    features: [
      'FreeRADIUS + NPS side-by-side with EAP-TLS for full certificate validation',
      'Deauth, evil-twin, and rogue-AP scenarios documented with packet evidence',
      'Hardening checklist for enterprise Wi-Fi onboarding',
    ],
    stack: ['RADIUS/NPS', 'EAP-TLS', '802.1X', 'Wireshark', 'Cisco IOS'],
  },
]

function ExperimentalProjects() {
  return (
    <section id="experimental-projects" className="overflow-hidden bg-[#171412] px-2 py-[96px] md:px-5 md:py-[160px] lg:px-8" data-analytics-section="experimental_projects">
      <div className="experimental-projects__content mx-auto max-w-[1224px]">
        <div className="mb-6 md:mb-12 text-center">
          <span className="section__label">Experiments</span>
          <h2 className="experimental-projects__heading">
            Security experiments beyond the classroom
          </h2>
          <p className="experimental-projects__subheading mt-3 mx-auto max-w-[720px] skills-muted">
            Small, deliberate experiments that go further than a lab guide — built to break, then built back better.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {experimentalProjects.map((project) => (
            <article key={project.id} className="experimental-projects__card rounded-2 border border-[#44403C] bg-[#1C1917]" data-analytics="project" data-analytics-label={`experimental_project_${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')}`}>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="experimental-projects__title">{project.title}</h3>
                <span className="experimental-project__year">{project.year}</span>
              </div>
              <p className="experimental-project__tagline mt-3">{project.tagline}</p>
              <p className="experimental-project__description mt-2">{project.description}</p>
              <ul className="mt-4 space-y-1">
                {project.features.map((feature) => (
                  <li key={feature} className="experimental-project__feature">
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="experimental-project__stack mt-4 flex gap-1" style={{ flexWrap: 'wrap', minWidth: 0 }}>
                {project.stack.map((tag) => (
                  <span key={tag} className="rounded-1 border border-[#57534E] bg-[#292524] px-2 py-1.5 text-body-l">
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

export default ExperimentalProjects