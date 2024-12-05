import React, { createContext, useState } from "react";

// Tạo context cho sự kiện
export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([
    {
      title: "Hẹn hò cuối tuần",
      date: "2024-12-10",
      time: "18:00",
      location: "Quán cà phê ABC",
    },
  ]);

  // Hàm tạo sự kiện mới
  const createEvent = (eventDetails) => {
    setEvents([...events, eventDetails]);
  };

  return (
    <EventContext.Provider value={{ events, createEvent }}>
      {children}
    </EventContext.Provider>
  );
};
