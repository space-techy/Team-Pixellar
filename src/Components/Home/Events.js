import React from 'react';
import './Events.css'

const EventsPage = () => {
  return (
    <main>
      <h1>Events</h1>
      <section>
        <h2>2 December</h2>
        <div className="grid-wrapper">
          <article>
            <h3>9:00 AM</h3>
            <p>Life finds a way. You know what? It is beets. </p>
          </article>
          {/* ...other articles */}
        </div>
      </section>
      <section>
        <h2>3 Jan</h2>
        <div className="grid-wrapper">
          <article>
            <h3>9:00 AM</h3>
            <p>Life finds a way. You know what? It is beets. </p>
          </article>
          {/* ...other articles */}
        </div>
      </section>
    </main>
  );
};

export default EventsPage;
