import { useEffect, useState } from "react";

export default function EventsSection() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/content/events")
      .then(res => res.json())
      .then(data => {
        const sorted = Object.values(data).sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setEvents(sorted);
      });
  }, []);

  if (events.length === 0) return null;

  return (
    <section className="events">
      <h2>Upcoming Events</h2>

      <div className="events-grid">
        {events.map((event, i) => (
          <div key={i} className="event-card">
            <h4>{event.title}</h4>
            <p>{event.description}</p>
            <small>{new Date(event.date).toDateString()}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
