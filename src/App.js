import React, { useState, Suspense, lazy } from 'react';
import './App.css';
import { portfolioData } from './data';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load components for better performance
const PanelHeading = lazy(() => import('./components/PanelHeading'));
const SkillPanel = lazy(() => import('./components/SkillPanel'));
const ProjectPanel = lazy(() => import('./components/ProjectPanel'));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="loading-spinner" aria-label="Loading">
    <div className="spinner"></div>
  </div>
);

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const { personal, summary, skills, projects } =
    portfolioData;

  return (
    <ErrorBoundary>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className={`kochi-app ${navOpen ? 'nav-open' : ''}`}>
      <header className="kochi-banner">
        <div className="kochi-banner__inner">
          <a href="#top" className="kochi-brand">
            <span className="kochi-brand__icon" aria-hidden="true">
              LS
            </span>
            <span className="kochi-brand__title">{personal.name}</span>
            <span className="kochi-brand__role">Network Admin &amp; Security</span>
          </a>

          <button
            type="button"
            className="kochi-toggle"
            onClick={() => setNavOpen(!navOpen)}
            aria-expanded={navOpen}
            aria-label="Toggle navigation"
          >
            Menu
          </button>

          <nav className="kochi-nav" aria-label="Primary">
            <ul className={navOpen ? 'is-open' : ''}>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href={personal.github} target="_blank" rel="noreferrer">GitHub</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section id="about" className="panel panel--hero" aria-labelledby="hero-title" style={{ animationDelay: '0.1s' }}>
          <div className="panel__content hero-grid">
            <div className="hero-main">
              <h1 id="hero-title" className="hero-main__title">
                {personal.name}
              </h1>
              <p className="hero-main__subtitle">{personal.role}</p>

              <div className="hero-main__contacts">
                <span>
                  <i className="fas fa-envelope" aria-hidden="true" /> {personal.email}
                </span>
              </div>

              <ul className="hero-main__highlights">
                {summary.map((item, i) => (
                  <li key={i}>
                    <strong>{item.label}.</strong> {item.text}
                  </li>
                ))}
              </ul>

              <div className="hero-main__actions">
                <a href="#projects" className="kochi-button">
                  <span>View projects</span>
                  <i className="fas fa-arrow-down" aria-hidden="true" />
                </a>
                <a
                  href={personal.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="kochi-button kochi-button--outline"
                >
                  <span>Download resume</span>
                  <i className="fas fa-file-download" aria-hidden="true" />
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="kochi-button kochi-button--secondary"
                >
                  <span>GitHub</span>
                  <i className="fab fa-github" aria-hidden="true" />
                </a>
              </div>
            </div>

            <aside className="hero-sidebar" aria-label="Snapshot">
              <section className="hero-sidebar__card">
                <h2>Quick profile</h2>
                <dl>
                  <div>
                    <dt>Focus</dt>
                    <dd>Networking &amp; security</dd>
                  </div>
                  <div>
                    <dt>Education</dt>
                    <dd>
                      <p>Bachelor of Technology – Information Technology</p>
                      <p>Kwantlen Polytechnic University</p>
                      <p>Intended Specialization: Network Administration and Security</p>
                      <p>May 2022 – May 2026 (Expected)</p>
                    </dd>
                  </div>
                  <div>
                    <dt>Certifications</dt>
                    <dd>
                      <p>AWS Certified Solutions Architect – Associate (November 2024)</p>
                      <p>AWS Certified Cloud Practitioner (February 2024)</p>
                    </dd>
                  </div>
                  <div>
                    <dt>Projects</dt>
                    <dd>File Integrity Monitoring Tool | System S</dd>
                  </div>
                </dl>
              </section>

            </aside>
          </div>
        </section>

        <section
          id="skills"
          className="panel panel--accent"
          aria-labelledby="skills-title"
          style={{ animationDelay: '0.3s' }}
        >
          <Suspense fallback={<LoadingSpinner />}>
            <PanelHeading
              title="Skills & Strengths"
              blurb="A practical blend of networking, security, systems and cloud tools I use to solve real problems."
              lineProgress={0.25}
            />
          </Suspense>
          <div className="panel__content">
            <div className="skill-grid">
              {skills.map((skill, index) => (
                <Suspense key={index} fallback={<LoadingSpinner />}>
                  <SkillPanel skill={skill} />
                </Suspense>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="panel panel--contrast"
          aria-labelledby="projects-title"
          style={{ animationDelay: '0.5s' }}
        >
          <Suspense fallback={<LoadingSpinner />}>
            <PanelHeading
              title="Selected Projects"
              blurb="Real-world style projects showing how I design, secure and ship systems end-to-end."
              lineProgress={0.5}
            />
          </Suspense>
          <div className="panel__content">
            <div className="project-grid">
              {projects.map((project, index) => (
                <Suspense key={project.title} fallback={<LoadingSpinner />}>
                  <ProjectPanel project={project} index={index} />
                </Suspense>
              ))}
            </div>
          </div>
        </section>

        <section className="panel panel--closing" aria-labelledby="closing-title" style={{ animationDelay: '1.1s' }}>
          <div className="panel__content closing-card">
            <p className="closing-card__overline">Let's connect</p>
            <h3 id="closing-title">Interested in working together?</h3>
            <p>
              I'm passionate about building secure and reliable systems. If you're looking for a dedicated IT professional with expertise in networking and security, I'd love to discuss opportunities.
            </p>
            <div className="closing-card__actions">
              <a href={`mailto:${personal.email}`} className="kochi-button">
                <span>Email me</span>
                <i className="fas fa-envelope" aria-hidden="true" />
              </a>
              <a href={personal.github} target="_blank" rel="noreferrer" className="kochi-button kochi-button--secondary">
                <span>View GitHub</span>
                <i className="fab fa-github" aria-hidden="true" />
              </a>
              <a
                href="https://lovesidhuy.github.io/portfoliowebsite/old-site/"
                target="_blank"
                rel="noreferrer"
                className="kochi-button kochi-button--outline"
              >
                <span>View older portfolio</span>
                <i className="fas fa-history" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="kochi-footer" aria-label="Footer">
        <div className="kochi-footer__inner">
          <div>
            <span className="kochi-footer__title">{personal.name}</span>
            <span className="kochi-footer__subtitle">Network admin &amp; security</span>
          </div>
          <ul>
            <li>
              <a href={`mailto:${personal.email}`}>Email</a>
            </li>
            <li>
              <a href={personal.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
          <span className="kochi-footer__copyright">
            &copy; {new Date().getFullYear()} {personal.name} • Built with React
          </span>
        </div>
      </footer>
    </div>
    </ErrorBoundary>
  );
}

export default App;
