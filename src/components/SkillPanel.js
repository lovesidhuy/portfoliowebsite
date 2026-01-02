import React from 'react';
import PropTypes from 'prop-types';

const SkillPanel = ({ skill }) => (
  <article className="skill-panel">
    <div className="skill-panel__icon">
      <i className={`fas ${skill.icon}`} aria-hidden="true" />
    </div>
    <div>
      <h3>{skill.title}</h3>
      <p>{skill.desc}</p>
    </div>
  </article>
);

SkillPanel.propTypes = {
  skill: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default SkillPanel;