import React from 'react';

// child components
import NoirTimelineItem from './components/NoirTimelineItem';

// data // TODO: fetch this data ++ put into state
import filmNoirData from './data/filmNoirData';

// styles
import './noir-timeline-app.css';

function NoirTimelineApp() {
  return (
    <div className="app-container">
      <h1> Film Noir Timeline</h1>
      <div className="tl-container">
        {filmNoirData.map((film, i) => (
          <NoirTimelineItem film={film} key={`${film.year}:${i}`} />
        ))}
      </div>
    </div>
  );
}

export default NoirTimelineApp;
