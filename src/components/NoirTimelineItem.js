import React from 'react';

function NoirTimelineItem({ film }) {
  return (
    <div>
      <strong>{film.title}</strong> <i>({film.year})</i>
    </div>
  );
}

export default NoirTimelineItem;
