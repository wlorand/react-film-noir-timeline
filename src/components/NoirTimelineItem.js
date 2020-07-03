import React from 'react';

// styles
import '../noir-timeline-app.css';

function NoirTimelineItem({ film }) {
  // do some destructuring of props
  const { title, year, quote } = film;

  return (
    <div className="tl-item">
      <div className="tl-item-content">
        <span className="tl-tag">{year}</span>

        <p>{title}</p>

        {quote}

        <span className="tl-circle" />
      </div>
    </div>
  );
}

// TODO: Add PropTypes for some basic type-checking

export default NoirTimelineItem;
