import React, { useState } from 'react';
import { 
  profile, 
  certifications, 
  education, 
  skills, 
  featuredProjects, 
  additionalProjects, 
  experience, 
  siteUrls, 
  formSubmit, 
  autoresponseMessage, 
  encodeAutoresponseForFormSubmit,
  projectAnalyticsLabel
} from './data.js';

import {
  video_0_poster, video_0_src,
  video_1_poster, video_1_src,
  video_2_poster, video_2_src,
  video_3_poster, video_3_src,
  video_4_poster, video_4_src,
  video_5_poster, video_5_src,
  video_6_poster, video_6_src
} from './assets-data.js';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [requestSent, setRequestSent] = useState(
    typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('request') === 'sent' : false
  );

  const toggleNav = () => setMenuOpen(!menuOpen);
  const closeNav = () => setMenuOpen(false);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const handleFormSubmit = (e) => {
    const textarea = e.currentTarget.querySelector('textarea[name="_autoresponse"]');
    if (textarea) {
      textarea.value = encodeAutoresponseForFormSubmit(autoresponseMessage);
    }
  };

  return (
    <div className="home-custom-fonts font-sans antialiased text-[#1C1917] bg-white min-h-screen relative">
      {/* Background Gradient Video */}
      <video 
        className="fixed -z-10 h-full w-full bg-transparent object-cover" 
        poster={video_0_poster}
        src="https://phantombuster.com/assets28245862992/HeroGradient-DMh3OxPE.webm"
        autoPlay 
        loop 
        muted 
        playsInline 
      />

      {/* ===== HEADER (Exact Capsule Structure) ===== */}
      <header className="absolute z-50 flex w-full px-2 pt-2" id="pb-navbar">
        <div className="border-1 mx-auto flex w-max max-w-[1064px] flex-auto justify-between rounded-1.5 border-base/10 bg-base p-1.5 lg:bg-base/40 backdrop-blur-md items-center">
          <a className="flex items-center justify-center gap-1.5" href="#about">
            <div className="flex items-center justify-center rounded font-bold" style={{ width: '24px', height: '24px', fontSize: '10px', lineHeight: '24px', marginRight: '4px', backgroundColor: '#1C1917', color: '#ffffff' }}>
              LS
            </div>
            <span className="text-gray-900 text-heading-s font-bold font-aeonik">
              Lovepreet Sidhu
            </span>
          </a>
          
          <nav className="mx-8 hidden max-h-full shrink-0 justify-self-center lg:flex items-center">
            <div className="flex flex-wrap-reverse items-center justify-end font-qanelas font-medium text-body-l">
              <a className="flex items-center text-gray-900 hover:text-black transition" href="#about">About</a>
              <a className="flex items-center text-gray-900 hover:text-black transition" style={{ marginLeft: '24px' }} href="#projects">Projects</a>
              <a className="flex items-center text-gray-900 hover:text-black transition" style={{ marginLeft: '24px' }} href="#skills">Skills</a>
              <a className="flex items-center text-gray-900 hover:text-black transition" style={{ marginLeft: '24px' }} href="#experience">Experience</a>
              <a className="flex items-center text-gray-900 hover:text-black transition" style={{ marginLeft: '24px' }} href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="flex items-center text-gray-900 hover:text-black transition" style={{ marginLeft: '24px' }} href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="flex items-center text-gray-900 hover:text-black transition" style={{ marginLeft: '24px' }} href="#resume-request">Save Links</a>
              <a className="flex items-center text-gray-900 hover:text-black transition" style={{ marginLeft: '24px' }} href="#contact">Contact</a>
            </div>
          </nav>

          <nav className="hidden items-center space-x-1 lg:flex font-qanelas font-medium">
            <a href="#resume-request">
              <button className="cursor-pointer whitespace-nowrap rounded-1 px-4 py-2 text-body-l text-[#1C1917] bg-white border border-gray-200/60 hover:bg-[#F5F5F4] transition">
                Save Links
              </button>
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '8px' }}>
              <button className="cursor-pointer whitespace-nowrap rounded-1 px-4 py-2 text-[#FFF] bg-[#1C1917] hover:bg-[#292524] transition font-bold">
                Resume
              </button>
            </a>
          </nav>

          <button onClick={toggleNav} className="cursor-pointer whitespace-nowrap rounded-1 px-2.5 py-1.25 text-body-l font-medium text-gray-900 bg-base hover:bg-[#F5F5F4] text-base-black inline-block h-5 w-5 lg:hidden" type="button">
            <svg className="lucide lucide-menu h-2.5 w-2.5" height="24" width="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M4 18h16M4 6h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="fixed left-0 top-0 z-50 h-screen w-screen bg-[#FAFAF9] text-body-primary lg:hidden flex flex-col items-center justify-center gap-6 p-6 select-none animate-fadeIn" onClick={closeNav}>
            <button className="absolute top-4 right-4 text-gray-900" onClick={closeNav}>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <a href="#about" className="font-aeonik font-bold text-2xl text-gray-900" onClick={closeNav}>About</a>
            <a href="#projects" className="font-aeonik font-bold text-2xl text-gray-900" onClick={closeNav}>Projects</a>
            <a href="#skills" className="font-aeonik font-bold text-2xl text-gray-900" onClick={closeNav}>Skills</a>
            <a href="#experience" className="font-aeonik font-bold text-2xl text-gray-900" onClick={closeNav}>Experience</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="font-aeonik font-bold text-2xl text-gray-900" onClick={closeNav}>LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="font-aeonik font-bold text-2xl text-gray-900" onClick={closeNav}>GitHub</a>
            <a href="#resume-request" className="font-aeonik font-bold text-2xl text-gray-900" onClick={closeNav}>Save Links</a>
            <a href="#contact" className="font-aeonik font-bold text-2xl text-gray-900" onClick={closeNav}>Contact</a>
            <a href={profile.resume} className="cursor-pointer whitespace-nowrap rounded-lg px-6 py-3 text-body-l font-medium bg-[#1C1917] text-white hover:bg-[#292524] mt-4" onClick={closeNav}>Resume</a>
          </div>
        )}
      </header>

      {/* ===== HERO SECTION ===== */}
      <section id="about" className="flex w-full flex-col items-center relative pt-20" style={{ position: 'relative' }}>
        <div className="flex flex-col items-center gap-3 pt-20 md:pt-29">
          <div className="flex items-center gap-2 bg-[#EDF3FF] text-[#5273E8] px-3 py-1 rounded-full text-sm font-semibold border border-blue-100 font-qanelas">
            <i className="fas fa-shield-halved"></i>
            {profile.role}
          </div>
          <h1 className="text-center text-heading-xl md:text-[80px] font-aeonik font-bold leading-none tracking-tight text-gray-900 mt-2 select-none">
            Lovepreet Sidhu
          </h1>
          <p className="max-w-[60ch] px-4 text-center text-lg md:text-xl font-normal text-gray-500 leading-relaxed font-qanelas mt-1">
            {profile.tagline}
          </p>
        </div>

        {/* Hero Email Form */}
        <div className="mb-[90px] mt-[48px] w-full max-w-[600px] px-4">
          <form 
            className="flex flex-col items-center justify-center gap-2 w-full"
            action={formSubmit.action}
            method="POST"
            onSubmit={handleFormSubmit}
          >
            <fieldset className="flex h-14 w-full gap-4 overflow-hidden rounded-1.5 bg-white p-1 border border-gray-200/80 shadow-[0px_2px_2px_-1px_rgba(23,20,18,0.04),_0px_4px_6px_-2px_rgba(23,20,18,0.03),_0px_12px_16px_-4px_rgba(23,20,18,0.08)] items-center">
              <input 
                className="flex-1 border-none font-normal leading-6 placeholder:font-normal placeholder:text-[#79716B] focus:shadow-none focus:outline-none focus:ring-0 px-4 text-gray-900 bg-transparent font-qanelas" 
                name="email" 
                placeholder="Enter your email" 
                required 
                type="email" 
              />
              <input type="hidden" name="_subject" value="New resume request from portfolio" />
              <input type="hidden" name="_next" value={formSubmit.redirect} />
              <textarea
                name="_autoresponse"
                style={{ display: 'none' }}
                readOnly
                tabIndex={-1}
                aria-hidden="true"
                value={autoresponseMessage}
              />
              <input
                type="text"
                name="_honey"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />
              <button className="h-full rounded-1 bg-[#1C1917] px-6 hover:bg-[#292524] font-medium leading-6 text-[#FFF] transition whitespace-nowrap font-qanelas" type="submit">
                Save Links
              </button>
            </fieldset>
            {requestSent && (
              <p className="text-sm text-green-600 mt-2 font-medium font-qanelas">
                ✓ Check your inbox for direct links to this portfolio and my resume!
              </p>
            )}
          </form>
        </div>

        {/* Three Hero Cards (Exact PhantomBuster Layout) */}
        <section className="flex w-full justify-center bg-gradient-to-b from-transparent to-white px-4 pb-8 md:px-5 lg:px-8 xl:pb-12">
          <ul className="grid max-w-[1440px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
            {/* Card 1 */}
            <li className="group rounded-3 border-2 border-[white] bg-[#F5F5F5] overflow-hidden flex flex-col justify-between shadow-sm">
              <div className="block">
                <header className="flex items-center justify-between p-4 pb-2">
                  <h2 className="text-heading-s font-medium font-aeonik text-gray-900">
                    Quick Profile
                  </h2>
                  <svg className="lucide lucide-arrow-right size-3 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" height="24" width="24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </header>
                <div className="p-4 pt-2 flex flex-col gap-3 font-qanelas text-sm">
                  <div className="flex justify-between items-center border-b border-gray-200/50 pb-2">
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Academic Focus</span>
                    <span className="text-gray-900 font-semibold">Network Admin &amp; Security</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200/50 pb-2">
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Expected Graduation</span>
                    <span className="text-gray-900 font-semibold">{profile.gradDate}</span>
                  </div>
                  <div className="flex justify-between items-center pb-1">
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Opportunity Status</span>
                    <span className="text-blue-600 font-bold flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                      {profile.status}
                    </span>
                  </div>
                </div>
              </div>
              <video 
                className="w-full object-cover transition-opacity opacity-90 h-48 border-t border-white" 
                poster={video_1_poster}
                src={video_1_src}
                controls={false}
                autoPlay
                loop
                muted
                playsInline
              />
            </li>

            {/* Card 2 */}
            <li className="group rounded-3 border-2 border-[white] bg-[#F5F5F5] overflow-hidden flex flex-col justify-between shadow-sm">
              <div className="block">
                <header className="flex items-center justify-between p-4 pb-2">
                  <h2 className="text-heading-s font-medium font-aeonik text-gray-900">
                    AWS Certifications
                  </h2>
                  <svg className="lucide lucide-arrow-right size-3 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" height="24" width="24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </header>
                <div className="p-4 pt-2 flex flex-col gap-3 font-qanelas text-sm">
                  {certifications.slice(0, 2).map((cert, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-gray-200/50 pb-2 last:border-0 last:pb-0">
                      <div className="flex flex-col">
                        <span className="text-gray-900 font-semibold leading-snug">{cert.name}</span>
                        <span className="text-xs text-gray-500 font-medium mt-0.5">{cert.date}</span>
                      </div>
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline font-bold whitespace-nowrap bg-blue-50 px-2 py-1 rounded">
                        Verify
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <video 
                className="w-full object-cover transition-opacity opacity-90 h-48 border-t border-white" 
                poster={video_2_poster}
                src={video_2_src}
                controls={false}
                autoPlay
                loop
                muted
                playsInline
              />
            </li>

            {/* Card 3 */}
            <li className="group rounded-3 border-2 border-[white] bg-[#F5F5F5] overflow-hidden flex flex-col justify-between shadow-sm">
              <div className="block">
                <header className="flex items-center justify-between p-4 pb-2">
                  <h2 className="text-heading-s font-medium font-aeonik text-gray-900">
                    Active Directory &amp; Labs
                  </h2>
                  <svg className="lucide lucide-arrow-right size-3 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" height="24" width="24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </header>
                <div className="p-4 pt-2 flex flex-col gap-3 font-qanelas text-sm">
                  <div className="flex flex-col gap-0.5 border-b border-gray-200/50 pb-2">
                    <span className="text-gray-900 font-semibold">Enterprise CA Deployment</span>
                    <p className="text-xs text-gray-500 leading-relaxed">Mutual EAP-TLS authentication removing passwords from network access.</p>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-gray-900 font-semibold">Wazuh &amp; Splunk Threat SIEM</span>
                    <p className="text-xs text-gray-500 leading-relaxed">Real-time incident response and host intrusion alerts verification.</p>
                  </div>
                </div>
              </div>
              <video 
                className="w-full object-cover transition-opacity opacity-90 h-48 border-t border-white" 
                poster={video_3_poster}
                src={video_3_src}
                controls={false}
                autoPlay
                loop
                muted
                playsInline
              />
            </li>
          </ul>
        </section>
      </section>

      {/* ===== ECOSYSTEM ROW ===== */}
      <div className="py-8 bg-white border-t border-gray-100 flex flex-col items-center justify-center gap-3">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest font-qanelas">Ecosystem &amp; Platforms</span>
        <div className="flex flex-wrap items-center justify-center px-4 max-w-[1224px]" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '32px', marginTop: '12px' }}>
          <span className="text-lg font-bold font-aeonik text-gray-400 tracking-wider">AWS</span>
          <span className="text-lg font-bold font-aeonik text-gray-400 tracking-wider">CISCO IOS</span>
          <span className="text-lg font-bold font-aeonik text-gray-400 tracking-wider">AZURE</span>
          <span className="text-lg font-bold font-aeonik text-gray-400 tracking-wider">LINUX</span>
          <span className="text-lg font-bold font-aeonik text-gray-400 tracking-wider">DOCKER</span>
          <span className="text-lg font-bold font-aeonik text-gray-400 tracking-wider">ACTIVE DIRECTORY</span>
        </div>
      </div>

      {/* ===== STATS SECTION ===== */}
      <section className="flex justify-center bg-white px-4 py-8 md:px-[54px] xl:px-[108px] border-t border-gray-100">
        <ul className="grid w-full max-w-[1440px] grid-cols-1 gap-4 md:grid-cols-3">
          <li className="flex h-[136px] flex-1 flex-col justify-center gap-1 rounded-1.5 p-6 md:h-[152px] bg-[#EDF3FF] border border-[#D1E2FF]">
            <p className="text-[32px] md:text-[40px] font-bold font-aeonik text-[#1C1917] leading-none">
              {profile.gradDate}
            </p>
            <p className="font-medium text-sm text-[#1C1917] tracking-wide mt-1 font-qanelas">
              B.Tech IT Graduation Expected
            </p>
          </li>
          <li className="flex h-[136px] flex-1 flex-col justify-center gap-1 rounded-1.5 p-6 md:h-[152px] bg-[#FFFAEB] border border-[#FFE8A3]">
            <p className="text-[32px] md:text-[40px] font-bold font-aeonik text-[#1C1917] leading-none">
              2+
            </p>
            <p className="font-medium text-sm text-[#1C1917] tracking-wide mt-1 font-qanelas">
              AWS Cloud Certifications
            </p>
          </li>
          <li className="flex h-[136px] flex-1 flex-col justify-center gap-1 rounded-1.5 p-6 md:h-[152px] bg-[#FFF2C6] border border-[#FFDF85]">
            <p className="text-[32px] md:text-[40px] font-bold font-aeonik text-[#1C1917] leading-none">
              10+
            </p>
            <p className="font-medium text-sm text-[#1C1917] tracking-wide mt-1 font-qanelas">
              Enterprise Network &amp; Security Labs
            </p>
          </li>
        </ul>
      </section>

      {/* ===== FEATURED PROJECTS (Exact Alternate Layout) ===== */}
      <section id="projects" className="flex flex-col items-center bg-white px-4 py-[96px] md:px-[54px] md:py-[160px] xl:px-[108px] border-t border-gray-100">
        <h2 className="mb-6 text-center text-4xl md:text-5xl font-bold font-aeonik md:mb-20 max-w-[600px] text-gray-900 leading-tight">
          Featured Lab &amp; Architecture Projects
        </h2>
        <ul className="max-w-[1224px] w-full flex flex-col gap-24">
          {/* Project 1 */}
          <li className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div className="flex flex-col items-start font-qanelas">
              <span className="text-xs text-blue-600 font-bold uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded mb-3">
                {featuredProjects[0].course}
              </span>
              <h3 className="mb-3 text-3xl md:text-4xl font-bold font-aeonik leading-tight text-gray-900">
                {featuredProjects[0].title}
              </h3>
              <span className="text-sm font-semibold text-gray-500 mb-4">{featuredProjects[0].date}</span>
              <p className="text-sm font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-lg mb-6 w-full">
                Stack: {featuredProjects[0].stack}
              </p>
              <ul className="flex flex-col gap-3 pl-4 list-disc text-gray-600 text-base mb-6">
                {featuredProjects[0].bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
              <a 
                className="group flex items-center whitespace-nowrap rounded-1 border border-[#D7D3D0] bg-[#FAFAF9] px-4 py-2.5 font-bold text-[#1C1917] transition hover:bg-black/5" 
                href={featuredProjects[0].link}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics="project"
                data-analytics-label={projectAnalyticsLabel(featuredProjects[0])}
              >
                {featuredProjects[0].linkLabel}
                <svg className="lucide lucide-arrow-right ml-1.5 h-4 w-4 transition duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" height="24" width="24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
            <div className="rounded-3 overflow-hidden border-4 border-white shadow-xl bg-gray-100 relative group">
              <video 
                className="w-full object-cover h-80" 
                poster={video_4_poster}
                src={video_4_src}
                controls={false}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </li>

          {/* Project 2 */}
          <li className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div className="rounded-3 overflow-hidden border-4 border-white shadow-xl bg-gray-100 relative group lg:order-1 order-2">
              <video 
                className="w-full object-cover h-80" 
                poster={video_5_poster}
                src={video_5_src}
                controls={false}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <div className="flex flex-col items-start lg:order-2 order-1 font-qanelas">
              <span className="text-xs text-blue-600 font-bold uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded mb-3">
                {featuredProjects[1].course}
              </span>
              <h3 className="mb-3 text-3xl md:text-4xl font-bold font-aeonik leading-tight text-gray-900">
                {featuredProjects[1].title}
              </h3>
              <span className="text-sm font-semibold text-gray-500 mb-4">{featuredProjects[1].date}</span>
              <p className="text-sm font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-lg mb-6 w-full">
                Stack: {featuredProjects[1].stack}
              </p>
              <ul className="flex flex-col gap-3 pl-4 list-disc text-gray-600 text-base mb-6">
                {featuredProjects[1].bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
              <a 
                className="group flex items-center whitespace-nowrap rounded-1 border border-[#D7D3D0] bg-[#FAFAF9] px-4 py-2.5 font-bold text-[#1C1917] transition hover:bg-black/5" 
                href={featuredProjects[1].link}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics="project"
                data-analytics-label={projectAnalyticsLabel(featuredProjects[1])}
              >
                {featuredProjects[1].linkLabel}
                <svg className="lucide lucide-arrow-right ml-1.5 h-4 w-4 transition duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" height="24" width="24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </li>

          {/* Project 3 */}
          <li className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div className="flex flex-col items-start font-qanelas">
              <span className="text-xs text-blue-600 font-bold uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded mb-3">
                {featuredProjects[2].course}
              </span>
              <h3 className="mb-3 text-3xl md:text-4xl font-bold font-aeonik leading-tight text-gray-900">
                {featuredProjects[2].title}
              </h3>
              <span className="text-sm font-semibold text-gray-500 mb-4">{featuredProjects[2].date}</span>
              <p className="text-sm font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-lg mb-6 w-full">
                Stack: {featuredProjects[2].stack}
              </p>
              <ul className="flex flex-col gap-3 pl-4 list-disc text-gray-600 text-base mb-6">
                {featuredProjects[2].bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
              <a 
                className="group flex items-center whitespace-nowrap rounded-1 border border-[#D7D3D0] bg-[#FAFAF9] px-4 py-2.5 font-bold text-[#1C1917] transition hover:bg-black/5" 
                href={featuredProjects[2].link}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics="project"
                data-analytics-label={projectAnalyticsLabel(featuredProjects[2])}
              >
                {featuredProjects[2].linkLabel}
                <svg className="lucide lucide-arrow-right ml-1.5 h-4 w-4 transition duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" height="24" width="24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
            <div className="rounded-3 overflow-hidden border-4 border-white shadow-xl bg-gray-100 relative group">
              <video 
                className="w-full object-cover h-80" 
                poster={video_6_poster}
                src={video_6_src}
                controls={false}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </li>
        </ul>
      </section>

      {/* ===== DARK SKILLS SECTION ===== */}
      <section id="skills" className="bg-[#171412] px-4 pb-16 pt-20 lg:px-16 lg:py-24 border-t border-gray-900" style={{ backgroundColor: '#171412' }}>
        <h2 className="mb-12 text-center text-4xl md:text-5xl font-bold font-aeonik leading-tight" style={{ color: '#ffffff' }}>
          System Admin &amp; Security Skill Stack
        </h2>
        <div className="mx-auto grid max-w-[1224px] gap-6 md:grid-cols-2 md:grid-rows-2 w-full">
          {/* Card 1 */}
          <div className="row-span-2 flex h-full flex-col overflow-hidden rounded-2 border p-8 justify-between shadow-2xl" style={{ backgroundColor: '#1C1917', borderColor: '#44403C', color: '#ffffff' }}>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold font-aeonik flex items-center gap-2" style={{ color: '#ffffff' }}>
                <i className="fas fa-network-wired text-[#5273E8]" style={{ color: '#5273E8' }}></i>
                Networking &amp; Cloud
              </h3>
              <p className="text-sm leading-relaxed mb-4 font-qanelas" style={{ color: '#A8A29E' }}>
                Core infrastructure setup, enterprise cloud configurations, routing and network security protocols.
              </p>
              <div className="flex flex-wrap gap-2 font-qanelas" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {skills[0].items.map((item, idx) => (
                  <span key={idx} className="border px-3 py-1.5 rounded text-xs font-semibold" style={{ backgroundColor: '#292524', color: '#ffffff', borderColor: '#44403C' }}>
                    {item}
                  </span>
                ))}
                {skills[2].items.map((item, idx) => (
                  <span key={idx} className="border px-3 py-1.5 rounded text-xs font-semibold" style={{ backgroundColor: '#292524', color: '#5273E8', borderColor: '#5273E8' }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-4 border-t font-qanelas" style={{ borderTopColor: '#292524' }}>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#79716B' }}>Environment</span>
              <p className="text-sm mt-1 font-medium" style={{ color: '#ffffff' }}>AWS VPC, Azure, Linux &amp; Cisco Core Infrastructure</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col overflow-hidden rounded-2 border p-8 justify-between shadow-2xl" style={{ backgroundColor: '#1C1917', borderColor: '#44403C', color: '#ffffff' }}>
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-bold font-aeonik flex items-center gap-2" style={{ color: '#ffffff' }}>
                <i className="fas fa-shield-halved text-[#5273E8]" style={{ color: '#5273E8' }}></i>
                Security Operations &amp; Forensics
              </h3>
              <p className="text-sm leading-relaxed mb-3 font-qanelas" style={{ color: '#A8A29E' }}>
                Mutual CA setup, intrusion alerts verification, digital analysis and file monitoring.
              </p>
              <div className="flex flex-wrap gap-2 font-qanelas" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {skills[1].items.map((item, idx) => (
                  <span key={idx} className="border px-3 py-1.25 rounded text-xs font-semibold" style={{ backgroundColor: '#292524', color: '#ffffff', borderColor: '#44403C' }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col overflow-hidden rounded-2 border p-8 justify-between shadow-2xl" style={{ backgroundColor: '#1C1917', borderColor: '#44403C', color: '#ffffff' }}>
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-bold font-aeonik flex items-center gap-2" style={{ color: '#ffffff' }}>
                <i className="fas fa-wifi text-[#5273E8]" style={{ color: '#5273E8' }}></i>
                Wireless &amp; Scripting Tools
              </h3>
              <p className="text-sm leading-relaxed mb-3 font-qanelas" style={{ color: '#A8A29E' }}>
                WLAN design, RF fundamentals, scripting and tools integration.
              </p>
              <div className="flex flex-wrap gap-2 font-qanelas" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {skills[3].items.map((item, idx) => (
                  <span key={idx} className="border px-3 py-1.25 rounded text-xs font-semibold" style={{ backgroundColor: '#292524', color: '#ffffff', borderColor: '#44403C' }}>
                    {item}
                  </span>
                ))}
                {skills[4].items.map((item, idx) => (
                  <span key={idx} className="border px-3 py-1.25 rounded text-xs font-semibold" style={{ backgroundColor: '#292524', color: '#FFE8A3', borderColor: '#FFE8A3' }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE & EDUCATION ACCORDION ===== */}
      <section id="experience" className="bg-white px-4 py-20 lg:px-0 border-t border-gray-100">
        <div className="max-w-[768px] mx-auto w-full">
          <h2 className="font-aeonik font-bold text-4xl md:text-5xl text-center text-gray-900 mb-12">
            Experience &amp; Education
          </h2>
          <div className="grid grid-cols-1 gap-3 w-full">
            {/* Accordion 1 */}
            <div className="flex w-full flex-col rounded-1.5 shadow-card border border-[#E7E5E4] bg-[#FAFAF9] p-0 overflow-hidden">
              <div 
                onClick={() => toggleFaq(0)} 
                className="cursor-pointer p-5 hover:bg-gray-100/50 transition duration-300"
              >
                <div className="flex select-none items-center justify-between gap-4">
                  <div className="flex flex-col font-qanelas">
                    <label className="font-aeonik font-bold text-lg md:text-xl cursor-pointer text-gray-900 leading-snug">
                      {experience[0].title} — {experience[0].company}
                    </label>
                    <span className="text-xs font-semibold text-gray-500 mt-1">{experience[0].period}</span>
                  </div>
                  <span className={`relative flex items-center justify-center text-xl text-gray-500 transition duration-300 ${openFaq === 0 ? 'rotate-180' : ''}`}>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openFaq === 0 ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden text-gray-600 text-base font-qanelas">
                  <div className="px-5 pb-5 pt-1 border-t border-gray-200/50">
                    <ul className="list-disc pl-4 flex flex-col gap-2">
                      {experience[0].bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Accordion 2 */}
            <div className="flex w-full flex-col rounded-1.5 shadow-card border border-[#E7E5E4] bg-[#FAFAF9] p-0 overflow-hidden">
              <div 
                onClick={() => toggleFaq(1)} 
                className="cursor-pointer p-5 hover:bg-gray-100/50 transition duration-300"
              >
                <div className="flex select-none items-center justify-between gap-4">
                  <div className="flex flex-col font-qanelas">
                    <label className="font-aeonik font-bold text-lg md:text-xl cursor-pointer text-gray-900 leading-snug">
                      {experience[1].title} — {experience[1].company}
                    </label>
                    <span className="text-xs font-semibold text-gray-500 mt-1">{experience[1].period}</span>
                  </div>
                  <span className={`relative flex items-center justify-center text-xl text-gray-500 transition duration-300 ${openFaq === 1 ? 'rotate-180' : ''}`}>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openFaq === 1 ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden text-gray-600 text-base font-qanelas">
                  <div className="px-5 pb-5 pt-1 border-t border-gray-200/50">
                    <ul className="list-disc pl-4 flex flex-col gap-2">
                      {experience[1].bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Accordion 3 */}
            <div className="flex w-full flex-col rounded-1.5 shadow-card border border-[#E7E5E4] bg-[#FAFAF9] p-0 overflow-hidden">
              <div 
                onClick={() => toggleFaq(2)} 
                className="cursor-pointer p-5 hover:bg-gray-100/50 transition duration-300"
              >
                <div className="flex select-none items-center justify-between gap-4">
                  <div className="flex flex-col font-qanelas">
                    <label className="font-aeonik font-bold text-lg md:text-xl cursor-pointer text-gray-900 leading-snug">
                      {experience[2].title} — {experience[2].company}
                    </label>
                    <span className="text-xs font-semibold text-gray-500 mt-1">{experience[2].period}</span>
                  </div>
                  <span className={`relative flex items-center justify-center text-xl text-gray-500 transition duration-300 ${openFaq === 2 ? 'rotate-180' : ''}`}>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openFaq === 2 ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden text-gray-600 text-base font-qanelas">
                  <div className="px-5 pb-5 pt-1 border-t border-gray-200/50">
                    <ul className="list-disc pl-4 flex flex-col gap-2">
                      {experience[2].bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Accordion 4 */}
            <div className="flex w-full flex-col rounded-1.5 shadow-card border border-[#E7E5E4] bg-[#FAFAF9] p-0 overflow-hidden">
              <div 
                onClick={() => toggleFaq(3)} 
                className="cursor-pointer p-5 hover:bg-gray-100/50 transition duration-300"
              >
                <div className="flex select-none items-center justify-between gap-4">
                  <div className="flex flex-col font-qanelas">
                    <label className="font-aeonik font-bold text-lg md:text-xl cursor-pointer text-gray-900 leading-snug">
                      {education.degree} — {education.school}
                    </label>
                    <span className="text-xs font-semibold text-gray-500 mt-1">{education.period}</span>
                  </div>
                  <span className={`relative flex items-center justify-center text-xl text-gray-500 transition duration-300 ${openFaq === 3 ? 'rotate-180' : ''}`}>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openFaq === 3 ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden text-gray-600 text-base font-qanelas">
                  <div className="px-5 pb-5 pt-1 border-t border-gray-200/50 flex flex-col gap-2">
                    <p className="font-bold text-gray-900">Focus: {education.focus}</p>
                    <p>Bachelor of Technology degree specializing in enterprise networking structure, security frameworks, Active Directory configurations, and virtualization environments.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer id="contact" className="flex justify-center bg-[length:100%_100%] bg-center bg-no-repeat px-4 md:px-[108px] border-t border-gray-100 pt-16 pb-12 bg-gray-50">
        <div className="flex max-w-[1440px] flex-col items-center w-full">
          <section className="py-[64px] w-full flex flex-col items-center">
            <h2 className="text-center text-4xl md:text-5xl font-bold font-aeonik text-gray-900 max-w-[20ch] leading-tight">
              Fresh opportunities are waiting. Connect today.
            </h2>
            
            <div id="resume-request" className="mt-8 w-full max-w-[600px] px-4">
              <form 
                className="flex flex-col items-center justify-center gap-2 w-full"
                action={formSubmit.action}
                method="POST"
                onSubmit={handleFormSubmit}
              >
                <fieldset className="flex h-14 w-full gap-4 overflow-hidden rounded-2 bg-white p-1 border border-gray-200 shadow-md items-center">
                  <input 
                    className="flex-1 border-none font-normal leading-6 placeholder:font-normal placeholder:text-[#79716B] focus:shadow-none focus:outline-none focus:ring-0 px-4 text-gray-900 bg-transparent font-qanelas" 
                    name="email" 
                    placeholder="Enter your email to receive direct resume links" 
                    required 
                    type="email" 
                  />
                  <input type="hidden" name="_subject" value="New resume request from portfolio" />
                  <input type="hidden" name="_next" value={formSubmit.redirect} />
                  <textarea
                    name="_autoresponse"
                    style={{ display: 'none' }}
                    readOnly
                    tabIndex={-1}
                    aria-hidden="true"
                    value={autoresponseMessage}
                  />
                  <input
                    type="text"
                    name="_honey"
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  <button className="h-full rounded-lg bg-[#1C1917] px-6 hover:bg-[#292524] font-medium leading-6 text-[#FFF] transition whitespace-nowrap font-qanelas" type="submit">
                    Send Links
                  </button>
                </fieldset>
              </form>
            </div>
          </section>

          {/* Large text branding */}
          <div className="my-12 font-aeonik font-bold text-5xl md:text-7xl text-gray-900 text-center tracking-tight uppercase select-none opacity-80">
            Lovepreet Sidhu
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full max-w-[1224px] border-t border-gray-200 pt-12 pb-8">
            <div>
              <span className="mb-3 block font-bold text-xs text-gray-400 uppercase tracking-widest font-qanelas">
                Portfolio Links
              </span>
              <ul className="flex flex-col gap-2 font-qanelas">
                <li><a className="text-gray-600 hover:text-black font-semibold text-sm transition" href="#about">About</a></li>
                <li><a className="text-gray-600 hover:text-black font-semibold text-sm transition" href="#projects">Projects</a></li>
                <li><a className="text-gray-600 hover:text-black font-semibold text-sm transition" href="#skills">Skills</a></li>
                <li><a className="text-gray-600 hover:text-black font-semibold text-sm transition" href="#experience">Experience</a></li>
              </ul>
            </div>
            
            <div>
              <span className="mb-3 block font-bold text-xs text-gray-400 uppercase tracking-widest font-qanelas">
                Professional
              </span>
              <ul className="flex flex-col gap-2 font-qanelas">
                <li><a className="text-gray-600 hover:text-black font-semibold text-sm transition" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a className="text-gray-600 hover:text-black font-semibold text-sm transition" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a className="text-gray-600 hover:text-black font-semibold text-sm transition" href={`mailto:${profile.email}`}>Email Me</a></li>
                <li><a className="text-gray-600 hover:text-black font-semibold text-sm transition" href={`tel:${profile.phone.replace(/-/g, '')}`}>{profile.phone}</a></li>
              </ul>
            </div>

            <div>
              <span className="mb-3 block font-bold text-xs text-gray-400 uppercase tracking-widest font-qanelas">
                Downloads &amp; Info
              </span>
              <ul className="flex flex-col gap-2 font-qanelas">
                <li><a className="text-gray-600 hover:text-black font-semibold text-sm transition" href={profile.resume} target="_blank" rel="noopener noreferrer">Download Resume PDF</a></li>
                <li><a className="text-gray-600 hover:text-black font-semibold text-sm transition" href={featuredProjects[1].link} target="_blank" rel="noopener noreferrer">Download RADIUS Report</a></li>
                <li><a className="text-[#5273E8] hover:underline font-bold text-sm transition" href="./old-site/index.html">View Older Portfolio</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-[1224px] border-t border-gray-200 pt-6 text-xs text-gray-400 font-semibold gap-4 font-qanelas">
            <span>&copy; {new Date().getFullYear()} Lovepreet Sidhu. All rights reserved.</span>
            <div className="flex gap-4">
              <a href="#about" className="hover:text-black transition">Back to Top</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
