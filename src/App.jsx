import { useState, useEffect } from 'react';
import {
  profile,
  certifications,
  education,
  skills,
  featuredProjects,
  additionalProjects,
  experience,
  projectAnalyticsLabel,
} from './data';
import { trackMobileNavOpen, trackSectionView } from './analytics/events';
import { useAnalytics } from './hooks/useAnalytics';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  useAnalytics();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
        header?.classList.add('header--scrolled');
      } else {
        header?.classList.remove('header--scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main id="main-content">
        <Hero />
        <FeaturedProjects showAll={showAllProjects} setShowAll={setShowAllProjects} />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function Header({ menuOpen, setMenuOpen }) {
  const closeNav = () => setMenuOpen(false);

  const toggleNav = () => {
    if (!menuOpen) trackMobileNavOpen();
    setMenuOpen((open) => !open);
  };

  return (
    <header className="header">
      <div className="header__inner container">
        <a href="#about" className="header__brand" aria-label={`${profile.name} home`}>
          <span className="header__logo">LS</span>
        </a>

        <button
          className="header__toggle"
          onClick={toggleNav}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <a href="#about" data-analytics="nav" data-analytics-label="about" onClick={closeNav}>
            About
          </a>
          <a href="#projects" data-analytics="nav" data-analytics-label="projects" onClick={closeNav}>
            Projects
          </a>
          <a href="#skills" data-analytics="nav" data-analytics-label="skills" onClick={closeNav}>
            Skills
          </a>
          <a href="#experience" data-analytics="nav" data-analytics-label="experience" onClick={closeNav}>
            Experience
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics="outbound"
            data-analytics-label="github_nav"
            onClick={closeNav}
          >
            GitHub
          </a>
          <a href="#contact" data-analytics="nav" data-analytics-label="contact" onClick={closeNav}>
            Contact
          </a>
          <a
            href={profile.resume}
            className="header__cta"
            data-analytics="resume"
            data-analytics-location="header"
            onClick={closeNav}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="about" className="hero" data-analytics-section="about">
      <div className="hero__bg"></div>
      <div className="hero__inner container">
        <div className="hero__content">
          <div className="hero__badge">
            <i className="fas fa-shield-halved"></i>
            <span>Network Admin & Security</span>
          </div>

          <h1 className="hero__title">{profile.name}</h1>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <a
              href={profile.resume}
              className="btn btn--primary"
              data-analytics="resume"
              data-analytics-location="hero"
            >
              <i className="fas fa-file-download"></i>
              Download Resume
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
              data-analytics="outbound"
              data-analytics-label="linkedin_hero"
            >
              <i className="fab fa-linkedin"></i>
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
              data-analytics="outbound"
              data-analytics-label="github_hero"
            >
              <i className="fab fa-github"></i>
              GitHub
            </a>
          </div>
        </div>

        <aside className="hero__sidebar">
          <QuickProfileCard />
          <CertCard />
        </aside>
      </div>
    </section>
  );
}

function QuickProfileCard() {
  return (
    <div className="quick-card">
      <h2>Quick Profile</h2>
      <dl className="quick-card__grid">
        <dt>Focus</dt>
        <dd>Networking & security</dd>
        <dt>Graduation</dt>
        <dd>{profile.gradDate}</dd>
        <dt>Status</dt>
        <dd className="quick-card__status">{profile.status}</dd>
      </dl>
    </div>
  );
}

function CertCard() {
  return (
    <div className="cert-card">
      <h2>
        <i className="fas fa-award"></i>
        Certifications
      </h2>
      <ul>
        {certifications.map((cert, i) => (
          <li key={cert.name}>
            <div className="cert-card__info">
              <span className="cert-card__name">{cert.name}</span>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card__link"
                data-analytics="outbound"
                data-analytics-label={`cert_${i}`}
              >
                {cert.linkLabel}
              </a>
            </div>
            <span className="cert-card__date">{cert.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeaturedProjects({ showAll, setShowAll }) {
  const displayedProjects = showAll
    ? [...featuredProjects, ...additionalProjects]
    : featuredProjects;

  useEffect(() => {
    if (showAll) trackSectionView('more_projects');
  }, [showAll]);

  return (
    <section id="projects" className="section projects" data-analytics-section="projects">
        <div className="container">
          <header className="section__header">
            <h2 className="section__title">
              <i className="fas fa-rocket"></i>
              Featured Projects
            </h2>
            <span className="section__label">Security-focused infrastructure & systems</span>
          </header>

          <div className="projects__grid">
            {displayedProjects.map((project) => (
              <article
                key={project.id}
                className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
              >
                <div className="project-card__header">
                  <span className="project-card__date">{project.date}</span>
                  {project.course && <span className="project-card__course">{project.course}</span>}
                </div>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__stack">{project.stack}</p>
                <ul className="project-card__bullets">
                  {project.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline btn--sm"
                  data-analytics="outbound"
                  data-analytics-label={projectAnalyticsLabel(project)}
                >
                  <i className="fas fa-external-link-alt"></i>
                  {project.linkLabel || 'View Project'}
                </a>
              </article>
            ))}
          </div>

          {!showAll && additionalProjects.length > 0 && (
            <div className="projects__more">
              <button type="button" className="btn btn--secondary" onClick={() => setShowAll(true)}>
                <i className="fas fa-plus"></i>
                More Projects
              </button>
            </div>
        )}
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="section skills" data-analytics-section="skills">
      <div className="container">
        <header className="section__header">
          <h2 className="section__title">
            <i className="fas fa-tools"></i>
            Skills & Strengths
          </h2>
          <span className="section__label">Tools I use to solve real infrastructure problems</span>
        </header>

        <div className="skills__grid">
          {skills.map((skill) => (
            <div key={skill.category} className="skill-card">
              <div className="skill-card__icon">
                <i className={`fas ${skill.icon}`}></i>
              </div>
              <div className="skill-card__content">
                <h3>{skill.category}</h3>
                <div className="skill-card__tags">
                  {skill.items.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="section experience" data-analytics-section="experience">
      <div className="container">
        <header className="section__header">
          <h2 className="section__title">
            <i className="fas fa-briefcase"></i>
            Experience
          </h2>
          <span className="section__label">Professional background</span>
        </header>

        <div className="experience__grid">
          {experience.map((job) => (
            <article key={`${job.title}-${job.company}`} className={`exp-card exp-card--${job.category}`}>
              <div className="exp-card__header">
                <h3>{job.title}</h3>
                <div className="exp-card__meta">
                  <span className="exp-card__company">{job.company}</span>
                  <span className="exp-card__period">{job.period}</span>
                </div>
              </div>
              <ul className="exp-card__bullets">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="experience__edu">
          <article className="edu-card">
            <h3>
              <i className="fas fa-graduation-cap"></i>
              Education
            </h3>
            <p className="edu-card__school">{education.school}</p>
            <p className="edu-card__degree">{education.degree}</p>
            <p className="edu-card__focus">Focus: {education.focus}</p>
            <span className="edu-card__period">{education.period}</span>
          </article>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="section contact" data-analytics-section="contact">
      <div className="container">
        <div className="contact-card">
          <h2>Let's Connect</h2>
          <p>Open to network and security opportunities — reach out or grab my resume.</p>

          <div className="contact-card__actions">
            <a
              href={`mailto:${profile.email}`}
              className="btn btn--primary"
              data-analytics="outbound"
              data-analytics-label="email_contact"
            >
              <i className="fas fa-envelope"></i>
              Email Me
            </a>
            <a
              href={profile.resume}
              className="btn btn--gold"
              data-analytics="resume"
              data-analytics-location="contact"
            >
              <i className="fas fa-file-download"></i>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <p className="footer__brand">
            <strong>LS</strong> · {profile.name}
          </p>
          <p className="footer__tagline">{profile.location}</p>

          <nav className="footer__links">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              data-analytics="outbound"
              data-analytics-label="email_footer"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href={`tel:${profile.phone.replace(/-/g, '')}`}
              aria-label="Phone"
              data-analytics="outbound"
              data-analytics-label="phone_footer"
            >
              <i className="fas fa-phone"></i>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              data-analytics="outbound"
              data-analytics-label="github_footer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              data-analytics="outbound"
              data-analytics-label="linkedin_footer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </nav>

          <p className="footer__copyright">
            © {new Date().getFullYear()} {profile.name} · Built with React
          </p>

          <a
            href="./old-site/index.html"
            className="footer__legacy-link"
            data-analytics="outbound"
            data-analytics-label="legacy_portfolio_footer"
          >
            <i className="fas fa-anchor"></i>
            View older portfolio
          </a>
        </div>
      </div>
    </footer>
  );
}

export default App;
