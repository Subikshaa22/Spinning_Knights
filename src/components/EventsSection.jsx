import { useEffect, useState } from "react";
import { Calendar, MapPin } from "lucide-react";

export default function EventsSection() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/content/events.json")
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) return;
        setEvents(data);
      })
      .catch(console.error);
  }, []);

  if (events.length === 0) return null;

  return (
    <section className="events-section">
      <h2>Upcoming Events</h2>

      <div className="events-grid">
        {events.map((event, i) => (
          <div key={i} className="event-card">
            <div className="event-date">
              <Calendar size={16} />
              <span>{event.date}</span>
            </div>

            <h4>{event.title}</h4>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
