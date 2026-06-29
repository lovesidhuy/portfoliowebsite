import React, { useEffect, useState } from 'react'
import { autoresponseMessage, certifications, directLinks, formSubmit, quickProfile, siteUrls } from '../data.jsx'
import { ArrowUpRight, IconBox } from './shared/Icons'

function Hero() {
  const [requestSent, setRequestSent] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('request') === 'sent') {
      setRequestSent(true)
    }
  }, [])

  return (
    <section id="top" className="flex w-full flex-col items-center" style={{ position: 'relative' }}>
      <video
        className="fixed -z-10 h-full w-full bg-transparent object-cover [&::-webkit-media-controls-play-button]:hidden [&::-webkit-media-controls-start-playback-button]:hidden"
        aria-hidden="true"
        autoPlay
        muted
        loop
        playsInline
        src="https://phantombuster.com/assets28245862992/HeroGradient-DMh3OxPE.webm"
      />
      <div className="flex flex-col items-center gap-3 pt-20 md:pt-29">
        <h1 className="text-center text-[40px] leading-[56px] md:text-[80px]">
          <span className="whitespace-nowrap">Lovepreet<wbr /></span>
          <span className="whitespace-nowrap"> Sidhu</span>
        </h1>
        <p className="max-w-[60ch] px-2 text-center text-[20px] font-normal leading-[32px] md:px-[108px]">
          Network Administration & Security student at KPU building cloud labs,
          enterprise systems, and practical security tooling.
        </p>
      </div>
      <div className="mb-[48px] mt-[48px] w-full md:mb-[72px]" id="contact">
        <form
          className="flex flex-col items-center justify-center gap-2 px-2 md:flex-row md:px-0"
          action={formSubmit.action}
          method="POST"
        >
          <fieldset className="hero-form-fieldset">
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              className="flex-1 border-none bg-transparent px-3 font-normal leading-6 placeholder:font-normal placeholder:text-[#79716B] focus:shadow-none focus:outline-none focus:ring-0"
              placeholder="Enter your email"
              aria-label="Email address"
            />
            <input type="hidden" name="_subject" value="New resume request from portfolio" />
            <input type="hidden" name="_next" value={formSubmit.redirect} />
            <input type="hidden" name="_autoresponse" value={autoresponseMessage} />
            <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
            <button type="submit" className="h-[48px] rounded-1 bg-[#1C1917] px-2.5 hover:bg-[#292524] font-medium leading-6 text-[#FFF] hidden md:block whitespace-nowrap">
              Send me the links
            </button>
          </fieldset>
          <button type="submit" className="h-[48px] rounded-1 bg-[#1C1917] px-2.5 hover:bg-[#292524] font-medium leading-6 text-[#FFF] w-full max-w-[600px] md:hidden">
            Send me the links
          </button>
        </form>
        {requestSent ? (
          <p className="mt-3 px-2 text-center text-body-l text-green-700 font-medium" role="status">
            Thanks — check your inbox for the links. You can also{' '}
            <a href={siteUrls.portfolio} className="underline hover:text-green-900" target="_blank" rel="noopener noreferrer">view the portfolio</a>
            {' '}or{' '}
            <a href={siteUrls.resume} className="underline hover:text-green-900" target="_blank" rel="noopener noreferrer">open my resume</a>.
          </p>
        ) : (
          <p className="mt-3 px-2 text-center text-body-l text-[#57534E]">
            Portfolio and resume links sent to your inbox — or use the cards below.
          </p>
        )}
      </div>
      <section className="flex w-full justify-center bg-[linear-gradient(180deg,rgba(255,255,255,0)0%,#FFFFFF_100%)] px-2 pb-8 md:px-5 lg:px-8 xl:pb-12">
        <ul className="grid max-w-[1440px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <li className="rounded-3 border-2 border-[white] bg-[#F5F5F5] p-3 md:p-4">
            <div className="mb-4 flex items-start justify-between gap-2">
              <div>
                <h2 className="text-heading-s font-medium">Quick Profile</h2>
                <p className="mt-2 text-body-l text-[#57534E]">Network Administration & Security at KPU.</p>
              </div>
              <span className="rounded-1 bg-[#FFF2C6] px-2 py-1.5 text-body-l font-medium text-[#1C1917] shrink-0">KPU</span>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {quickProfile.map((item) => (
                <div key={item.label} className="hero-mini-card">
                  <IconBox>{item.icon}</IconBox>
                  <div>
                    <p className="text-body-l text-[#57534E]">{item.label}</p>
                    <p className="mt-1 text-body-l font-medium text-[#1C1917]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </li>

          <li className="rounded-3 border-2 border-[white] bg-[#F5F5F5] p-3 md:p-4">
            <h2 className="mb-3 text-heading-s font-medium">Direct links</h2>
            <div className="grid grid-cols-1 gap-2">
              {directLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={link.primary ? 'hero-link-row hero-link-row--primary' : 'hero-link-row'}
                >
                  {link.label}
                  <ArrowUpRight />
                </a>
              ))}
            </div>
          </li>

          <li className="rounded-3 border-2 border-[white] bg-[#F5F5F5] p-3 md:p-4 md:col-span-2 lg:col-span-1">
            <h2 className="mb-3 text-heading-s font-medium">Certifications</h2>
            <div className="grid grid-cols-1 gap-2">
              {certifications.map((cert) => (
                <article key={cert.title} className="hero-cert-row">
                  <div className="flex min-w-0 items-start gap-2">
                    <IconBox>
                      <path d="M12 3 4 7v6c0 5 3.5 7.5 8 8 4.5-.5 8-3 8-8V7l-8-4Z" />
                      <path d="m9 12 2 2 4-5" />
                    </IconBox>
                    <div className="min-w-0">
                      <h3 className="text-body-l font-medium text-[#1C1917]" style={{ overflowWrap: 'anywhere' }}>{cert.title}</h3>
                      <p className="text-body-l text-[#57534E]">{cert.date}</p>
                    </div>
                  </div>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-cert-btn"
                  >
                    {cert.label}
                    <ArrowUpRight />
                  </a>
                </article>
              ))}
            </div>
          </li>
        </ul>
      </section>
    </section>
  )
}

export default Hero
