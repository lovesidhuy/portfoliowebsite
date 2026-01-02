import React from 'react';
import PropTypes from 'prop-types';

const clampProgress = (value) => {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    return 0;
  }
  return Math.min(Math.max(value, 0), 1);
};

const PanelHeading = ({ issue, kicker, title, blurb, lineProgress }) => {
  const progress = clampProgress(lineProgress);
  const style = {
    '--line-progress': progress,
    '--line-saturation': 0.85 + progress * 0.6,
    '--line-brightness': 0.9 + progress * 0.35,
  };

  const hasMeta = Boolean(issue) || Boolean(kicker);

  return (
    <header className="panel-heading" style={style}>
      {hasMeta && (
        <div className="panel-heading__meta">
          {issue && <span className="panel-heading__issue">{issue}</span>}
          {kicker && <span className="panel-heading__kicker">{kicker}</span>}
        </div>
      )}
      <div className="panel-heading__text">
        <h2>{title}</h2>
        {blurb && <p>{blurb}</p>}
      </div>
    </header>
  );
};

PanelHeading.propTypes = {
  issue: PropTypes.string,
  kicker: PropTypes.string,
  title: PropTypes.string.isRequired,
  blurb: PropTypes.string,
  lineProgress: PropTypes.number,
};

PanelHeading.defaultProps = {
  issue: null,
  kicker: null,
  blurb: null,
  lineProgress: 0,
};

export default PanelHeading;