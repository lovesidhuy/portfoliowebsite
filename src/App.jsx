import { useState, useEffect } from 'react';
import {
  profile,
  certifications,
  education,
  skills,
  featuredProjects,
  additionalProjects,
  experience,
} from './data';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

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

  const trackEvent = (eventName, params = {}) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
  };

  return (
    <div className="app">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} trackEvent={trackEvent} />
      <main id="main-content">
        <Hero trackEvent={trackEvent} />
        <CertStrip />
        <FeaturedProjects
          showAll={showAllProjects}
          setShowAll={setShowAllProjects}
          trackEvent={trackEvent}
        />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection trackEvent={trackEvent} />
      </main>
      <Footer />
    </div>
  );
}

function Header({ menuOpen, setMenuOpen, trackEvent }) {
  return (
    <header className="header">
      <div className="header__inner container">
        <a href="#main-content" className="header__brand">
          <span className="header__logo">LS</span>
          <span className="header__name">{profile.name}</span>
        </a>

        <button
          className="header__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('outbound_click', { link_type: 'github', location: 'header' })}
          >
            GitHub
          </a>
          <a
            href={profile.resume}
            className="header__cta"
            onClick={() => trackEvent('resume_download', { location: 'header' })}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero({ trackEvent }) {
  return (
    <section className="hero">
      <div className="hero__bg"></div>
      <div className="hero__inner container">
        <div className="hero__content">
          <div className="hero__badge">
            <i className="fas fa-shield-halved"></i>
            <span>Network Admin & Security</span>
          </div>

          <h1 className="hero__title">{profile.name}</h1>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__contacts">
            <span><i className="fas fa-map-marker-alt"></i> {profile.location}</span>
            <span><i className="fas fa-envelope"></i> {profile.email}</span>
            <span><i className="fas fa-phone"></i> {profile.phone}</span>
          </div>

          <div className="hero__actions">
            <a
              href={profile.resume}
              className="btn btn--primary"
              onClick={() => trackEvent('resume_download', { location: 'hero' })}
            >
              <i className="fas fa-file-download"></i>
              Download Resume
            </a>
            <a href="#projects" className="btn btn--outline">
              <i className="fas fa-folder-open"></i>
              View Projects
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
              onClick={() => trackEvent('outbound_click', { link_type: 'linkedin', location: 'hero' })}
            >
              <i className="fab fa-linkedin"></i>
              LinkedIn
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
        <dt>Location</dt>
        <dd>{profile.location}</dd>
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
          <li key={i}>
            <span className="cert-card__name">{cert.name}</span>
            <span className="cert-card__date">{cert.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CertStrip() {
  return (
    <section className="cert-strip">
      <div className="container">
        <ul className="cert-strip__list">
          <li>
            <i className="fab fa-aws"></i>
            <span>AWS SAA</span>
          </li>
          <li>
            <i className="fab fa-aws"></i>
            <span>Cloud Practitioner</span>
          </li>
          <li>
            <i className="fas fa-graduation-cap"></i>
            <span>KPU IT</span>
          </li>
          <li>
            <i className="fas fa-briefcase"></i>
            <span>Open to Opportunities</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

function FeaturedProjects({ showAll, setShowAll, trackEvent }) {
  const displayedProjects = showAll
    ? [...featuredProjects, ...additionalProjects]
    : featuredProjects;

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
            <article key={project.id} className={`project-card ${project.featured ? 'project-card--featured' : ''}`}>
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
                onClick={() => trackEvent('outbound_click', { link_type: 'project', project_id: project.id })}
              >
                <i className="fas fa-external-link-alt"></i>
                {project.linkLabel || 'View Project'}
              </a>
            </article>
          ))}
        </div>

        {!showAll && additionalProjects.length > 0 && (
          <div className="projects__more">
            <button
              className="btn btn--secondary"
              onClick={() => setShowAll(true)}
            >
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
          {skills.map((skill, i) => (
            <div key={i} className="skill-card">
              <div className="skill-card__icon">
                <i className={`fas ${skill.icon}`}></i>
              </div>
              <div className="skill-card__content">
                <h3>{skill.category}</h3>
                <div className="skill-card__tags">
                  {skill.items.map((item, j) => (
                    <span key={j} className="tag">{item}</span>
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
          {experience.map((job, i) => (
            <article key={i} className={`exp-card exp-card--${job.category}`}>
              <div className="exp-card__header">
                <h3>{job.title}</h3>
                <div className="exp-card__meta">
                  <span className="exp-card__company">{job.company}</span>
                  <span className="exp-card__period">{job.period}</span>
                </div>
              </div>
              <ul className="exp-card__bullets">
                {job.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
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

function ContactSection({ trackEvent }) {
  return (
    <section id="contact" className="section contact" data-analytics-section="contact">
      <div className="container">
        <div className="contact-card">
          <h2>Let's Connect</h2>
          <p>Interested in network security, cloud infrastructure, or enterprise systems? Let's talk.</p>

          <div className="contact-card__actions">
            <a href={`mailto:${profile.email}`} className="btn btn--primary">
              <i className="fas fa-envelope"></i>
              Email Me
            </a>
            <a
              href={profile.resume}
              className="btn btn--gold"
              onClick={() => trackEvent('resume_download', { location: 'contact' })}
            >
              <i className="fas fa-file-download"></i>
              Download Resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
              onClick={() => trackEvent('outbound_click', { link_type: 'github', location: 'contact' })}
            >
              <i className="fab fa-github"></i>
              GitHub
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
          <p className="footer__tagline">{profile.role} · {profile.location}</p>

          <nav className="footer__links">
            <a href={`mailto:${profile.email}`}>
              <i className="fas fa-envelope"></i>
            </a>
            <a href={`tel:${profile.phone.replace(/-/g, '')}`}>
              <i className="fas fa-phone"></i>
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </nav>

          <p className="footer__copyright">
            © {new Date().getFullYear()} {profile.name} · Built with React
          </p>
        </div>
      </div>
    </footer>
  );
}

export default App;
