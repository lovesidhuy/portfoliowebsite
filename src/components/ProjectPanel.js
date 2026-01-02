import React from 'react';
import PropTypes from 'prop-types';

const ProjectPanel = ({ project, index }) => (
  <article className="project-panel">
    <div className="project-panel__meta">
      <span className="project-panel__date">{project.date}</span>
    </div>
    <h3>{project.title}</h3>
    <p className="project-panel__stack">{project.stack}</p>
    <ul className="project-panel__list">
      {project.bullets.map((item, i) => (
        <li key={i}>
          <strong>{item.label}.</strong> {item.desc}
        </li>
      ))}
    </ul>
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="kochi-button project-panel__link"
    >
      <span>View code</span>
      <i className="fas fa-arrow-right" aria-hidden="true" />
    </a>
  </article>
);

ProjectPanel.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired,
    bullets: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
      })
    ).isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectPanel;