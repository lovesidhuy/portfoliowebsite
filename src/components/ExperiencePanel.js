import React from 'react';
import PropTypes from 'prop-types';

const ExperiencePanel = ({ item, index }) => (
  <article className={`experience-panel experience-panel--${item.category}`}>
    <header>
      <h3>{item.title}</h3>
      <div className="experience-panel__meta">
        <span className="experience-panel__org">{item.company}</span>
        <span className="experience-panel__period">{item.period}</span>
      </div>
    </header>
    {item.bullets && (
      <ul>
        {item.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    )}
  </article>
);

ExperiencePanel.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    bullets: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ExperiencePanel;