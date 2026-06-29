import React from 'react'

function Header({ isMenuOpen, setIsMenuOpen, isScrolled }) {
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header id="pb-navbar" className="absolute z-10 flex w-full px-2 pt-2">
      <div className="border-1 mx-auto flex w-max max-w-[1064px] flex-auto justify-between rounded-1.5 border-base/10 bg-base p-1.5 lg:bg-base/40">
        <a href="#top" className="flex items-center justify-center gap-1" onClick={closeMenu}>
          <span className="flex h-5 w-5 items-center justify-center rounded-1 bg-[#1C1917] text-[12px] font-bold text-[#FFF]">LS</span>
          <span className="text-gray-900 text-heading-s font-bold">Lovepreet Sidhu</span>
        </a>
        <button
          className="cursor-pointer whitespace-nowrap rounded-1 px-2 py-1.25 text-body-l font-medium text-gray-900 bg-base hover:bg-[#F5F5F4] text-base-black inline-block h-5 w-5 lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 12h16" />
              <path d="M4 6h16" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>
        <nav className="mx-8 hidden max-h-full shrink-0 justify-self-center lg:flex">
          <div className="flex flex-wrap-reverse items-center justify-end space-x-2">
            <a className="flex cursor-pointer items-center" href="#top" onClick={closeMenu}>
              <span className="font-qanelas font-medium text-body-l">About</span>
            </a>
            <a className="flex cursor-pointer items-center" href="#projects" onClick={closeMenu}>
              <span className="font-qanelas font-medium text-body-l">Projects</span>
            </a>
            <a className="flex cursor-pointer items-center" href="#skills" onClick={closeMenu}>
              <span className="font-qanelas font-medium text-body-l">Skills</span>
            </a>
            <a className="flex cursor-pointer items-center" href="#experience" onClick={closeMenu}>
              <span className="font-qanelas font-medium text-body-l">Experience</span>
            </a>
            <a className="flex cursor-pointer items-center" href="#contact" onClick={closeMenu}>
              <span className="font-qanelas font-medium text-body-l">Get links</span>
            </a>
          </div>
        </nav>
        <nav className="hidden items-center space-x-1 lg:flex">
          <a href="mailto:lovepreet.sidhu3@student.kpu.ca">
            <button className="cursor-pointer whitespace-nowrap rounded-1 px-2 py-1.25 text-body-l font-medium text-gray-900 bg-base hover:bg-[#F5F5F4]" tabIndex="-1">
              Email
            </button>
          </a>
          <a href="https://lovesidhuy.github.io/portfoliowebsite/ls_resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="cursor-pointer whitespace-nowrap rounded-1 px-2 py-1.25 text-body-l font-medium bg-[#1C1917] text-button-primary hover:bg-[#292524]" tabIndex="-1">
              Resume
            </button>
          </a>
        </nav>
      </div>
      <div className={`fixed left-0 top-0 z-50 h-screen w-screen bg-mobile-navbar-overlay text-body-primary lg:hidden ${isMenuOpen ? '' : 'hidden'}`}>
        <div className="flex h-full w-full flex-col bg-base p-2">
          <div className="mb-5 flex items-center justify-between rounded-1.5 border-base/10 bg-base p-1.5">
            <span className="flex items-center justify-center gap-1">
              <span className="flex h-5 w-5 items-center justify-center rounded-1 bg-[#1C1917] text-[12px] font-bold text-[#FFF]">LS</span>
              <span className="text-gray-900 text-heading-s font-bold">Lovepreet Sidhu</span>
            </span>
            <button className="cursor-pointer whitespace-nowrap rounded-1 px-2 py-1.25 text-body-l font-medium text-gray-900 bg-base hover:bg-[#F5F5F4] h-5 w-5" onClick={() => setIsMenuOpen(false)} aria-label="Close navigation menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-3">
            <a className="text-heading-s font-medium" href="#top" onClick={closeMenu}>About</a>
            <a className="text-heading-s font-medium" href="#projects" onClick={closeMenu}>Projects</a>
            <a className="text-heading-s font-medium" href="#skills" onClick={closeMenu}>Skills</a>
            <a className="text-heading-s font-medium" href="#experience" onClick={closeMenu}>Experience</a>
            <a className="text-heading-s font-medium" href="#contact" onClick={closeMenu}>Get links</a>
            <a className="text-heading-s font-medium" href="https://linkedin.com/in/lovepreetssidhu/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>LinkedIn</a>
            <a className="text-heading-s font-medium" href="https://github.com/lovesidhuy" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>GitHub</a>
            <a href="mailto:lovepreet.sidhu3@student.kpu.ca" className="cursor-pointer whitespace-nowrap rounded-1 px-2 py-1.25 text-body-l font-medium text-gray-900 bg-base hover:bg-[#F5F5F4] text-center" onClick={closeMenu}>
            Email
            </a>
            <a href="https://lovesidhuy.github.io/portfoliowebsite/ls_resume.pdf" target="_blank" rel="noopener noreferrer" className="cursor-pointer whitespace-nowrap rounded-1 px-2 py-1.25 text-body-l font-medium bg-[#1C1917] text-button-primary hover:bg-[#292524] text-center" onClick={closeMenu}>
              Resume
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
