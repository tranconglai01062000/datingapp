import React, { useContext, useState } from "react";
import { EventContext } from "../context/EventContext";

const EventList = () => {
  const { events, createEvent } = useContext(EventContext);
  const [eventDetails, setEventDetails] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
  });

  const handleCreateEvent = () => {
    createEvent(eventDetails);
    setEventDetails({ title: "", date: "", time: "", location: "" });
  };

  return (
    <div>
      <h2>Quản lý Sự kiện</h2>
      <input
        type="text"
        placeholder="Tiêu đề sự kiện"
        value={eventDetails.title}
        onChange={(e) =>
          setEventDetails({ ...eventDetails, title: e.target.value })
        }
      />
      <input
        type="date"
        value={eventDetails.date}
        onChange={(e) =>
          setEventDetails({ ...eventDetails, date: e.target.value })
        }
      />
      <input
        type="time"
        value={eventDetails.time}
        onChange={(e) =>
          setEventDetails({ ...eventDetails, time: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Địa điểm"
        value={eventDetails.location}
        onChange={(e) =>
          setEventDetails({ ...eventDetails, location: e.target.value })
        }
      />
      <button onClick={handleCreateEvent}>Tạo sự kiện</button>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            {event.title} - {event.date} {event.time} tại {event.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
