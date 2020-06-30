import React from 'react';

// child components
import NoirTimelineItem from './components/NoirTimelineItem';

// data // TODO: fetch this data ++ put into state
import filmNoirData from './data/filmNoirData';

function NoirTimelineApp() {
  return (
    <div>
      <h1> Film Noir Timeline</h1>
      <div className="timeline-container">
        {filmNoirData.map((film, i) => (
          <NoirTimelineItem film={film} key={i} />
        ))}
      </div>
    </div>
  );
}

export default NoirTimelineApp;
