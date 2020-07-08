import React, { useState } from 'react';

// child components
import NoirTimelineItem from './components/NoirTimelineItem';

// data file
import filmNoirData from './data/filmNoirData';

// styles
import './noir-timeline-app.css';

function NoirTimelineApp() {
  const [films, setFilms] = useState(filmNoirData);

  return (
    films.length > 0 && (
      <div className="app-container">
        <h1> Film Noir Timeline</h1>
        <div className="tl-container">
          {films.map((film, i) => (
            <NoirTimelineItem film={film} key={`${film.year}:${i}`} />
          ))}
        </div>
      </div>
    )
  );
}

export default NoirTimelineApp;
