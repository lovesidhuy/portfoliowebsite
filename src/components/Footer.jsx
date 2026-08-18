import React from 'react'
import { siteUrls } from '../data.jsx'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-base px-4 py-[80px] md:py-[128px]" data-analytics-section="contact">
      <div className="mx-auto max-w-[1224px]">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-2 flex items-center gap-1">
              <span className="flex h-5 w-5 items-center justify-center rounded-1 bg-[#1C1917] text-[12px] font-bold text-[#FFF]">LS</span>
              <span className="text-heading-s font-bold text-[#1C1917]">Lovepreet Sidhu</span>
            </div>
            <p className="text-body-l text-[#57534E]">Network Administration & Security</p>
          </div>
          <ul>
            <li><span className="mb-2 block font-semibold text-[#79716b]">Portfolio</span></li>
            <li><a className="inline-flex items-center justify-center space-x-0.5 text-body-l text-link-default hover:text-link-hover focus:text-link-hover cursor-pointer font-medium !text-[#1C1917]" href="#projects" data-analytics="nav" data-analytics-label="projects">Projects</a></li>
            <li><a className="inline-flex items-center justify-center space-x-0.5 text-body-l text-link-default hover:text-link-hover focus:text-link-hover cursor-pointer font-medium !text-[#1C1917]" href="#experimental-projects" data-analytics="nav" data-analytics-label="experimental_projects">Experiments</a></li>
            <li><a className="inline-flex items-center justify-center space-x-0.5 text-body-l text-link-default hover:text-link-hover focus:text-link-hover cursor-pointer font-medium !text-[#1C1917]" href="#skills" data-analytics="nav" data-analytics-label="skills">Skills</a></li>
            <li><a className="inline-flex items-center justify-center space-x-0.5 text-body-l text-link-default hover:text-link-hover focus:text-link-hover cursor-pointer font-medium !text-[#1C1917]" href="#experience" data-analytics="nav" data-analytics-label="experience">Experience</a></li>
            <li><a className="inline-flex items-center justify-center space-x-0.5 text-body-l text-link-default hover:text-link-hover focus:text-link-hover cursor-pointer font-medium !text-[#1C1917]" href={siteUrls.legacyPortfolio} target="_blank" rel="noopener noreferrer" data-analytics="outbound" data-analytics-label="legacy_portfolio_footer_nav">Old portfolio</a></li>
          </ul>
          <ul>
            <li><span className="mb-2 block font-semibold text-[#79716b]">Links</span></li>
            <li><a className="inline-flex items-center justify-center space-x-0.5 text-body-l text-link-default hover:text-link-hover focus:text-link-hover cursor-pointer font-medium !text-[#1C1917]" href="mailto:lovepreet.sidhu3@student.kpu.ca" data-analytics="outbound" data-analytics-label="email_footer">Email</a></li>
            <li><a className="inline-flex items-center justify-center space-x-0.5 text-body-l text-link-default hover:text-link-hover focus:text-link-hover cursor-pointer font-medium !text-[#1C1917]" href="https://linkedin.com/in/lovepreetssidhu/" target="_blank" rel="noopener noreferrer" data-analytics="outbound" data-analytics-label="linkedin_footer">LinkedIn</a></li>
            <li><a className="inline-flex items-center justify-center space-x-0.5 text-body-l text-link-default hover:text-link-hover focus:text-link-hover cursor-pointer font-medium !text-[#1C1917]" href="https://github.com/lovesidhuy" target="_blank" rel="noopener noreferrer" data-analytics="outbound" data-analytics-label="github_footer">GitHub</a></li>
          </ul>
        </div>
        <div className="mb-4 mt-[80px] flex w-full flex-col justify-between gap-3 md:mt-[128px] md:flex-row">
          <ul className="flex flex-col gap-1 md:flex-row md:gap-x-3 md:gap-y-0">
            <li><a className="inline-flex items-center justify-center space-x-0.5 text-body-l text-link-default hover:text-link-hover focus:text-link-hover cursor-pointer font-medium !text-[#1C1917]" href="https://lovesidhuy.github.io/portfoliowebsite/ls_resume.pdf" target="_blank" rel="noopener noreferrer" data-analytics="resume" data-analytics-location="footer">Resume</a></li>
            <li><a className="inline-flex items-center justify-center space-x-0.5 text-body-l text-link-default hover:text-link-hover focus:text-link-hover cursor-pointer font-medium !text-[#1C1917]" href="#contact" data-analytics="nav" data-analytics-label="resume_request">Get links</a></li>
          </ul>
          <small className="text-body-l font-normal text-[#79716b]">{currentYear}© Lovepreet Sidhu</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
