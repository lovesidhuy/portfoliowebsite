import React from 'react'
import { siteUrls } from '../data.jsx'

const highlights = [
  'Comic-book visual style',
  'Same projects & credentials',
  'HTML/CSS',
]

function ArrowRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="legacy-portfolio__arrow" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function LegacyPortfolio() {
  return (
    <section id="legacy-portfolio" className="legacy-portfolio" data-analytics-section="legacy_portfolio">
      <div className="legacy-portfolio__inner">
        <div className="legacy-portfolio__card">
          <p className="legacy-portfolio__eyebrow">Portfolio evolution</p>
          <h2 className="legacy-portfolio__title">
            See my original comic-book portfolio
          </h2>
          <p className="legacy-portfolio__text">
            Before this layout, I built a comic-inspired version — same projects,
            skills, and credentials, told with a bold visual style. It is still live for
            recruiters who want to see range beyond a single template.
          </p>
          <ul className="legacy-portfolio__tags">
            {highlights.map((item) => (
              <li key={item} className="legacy-portfolio__tag">{item}</li>
            ))}
          </ul>
          <a
            href={siteUrls.legacyPortfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="legacy-portfolio__link"
            data-analytics="outbound"
            data-analytics-label="legacy_portfolio_section"
          >
            View old portfolio
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}

export default LegacyPortfolio
