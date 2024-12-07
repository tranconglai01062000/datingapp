import React, { createContext, useState, useEffect } from "react";

// Tạo context cho sự kiện
export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [eventMood, setEventMood] = useState({}); // Lưu cảm xúc cho từng sự kiện

  // Lấy danh sách sự kiện từ API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:5000/events");
        const data = await response.json();
        setEvents(data); // Lưu dữ liệu từ API vào state
      } catch (error) {
        console.error("Lỗi khi lấy danh sách sự kiện:", error);
      }
    };

    fetchEvents();
  }, []);

  // Tạo sự kiện mới (POST)
  const createEvent = async (eventDetails) => {
    try {
      const response = await fetch("http://localhost:5000/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventDetails),
      });

      if (response.ok) {
        const newEvent = await response.json();
        setEvents((prevEvents) => [...prevEvents, newEvent]); // Cập nhật danh sách sự kiện
      } else {
        console.error("Lỗi khi tạo sự kiện");
      }
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu tạo sự kiện:", error);
    }
  };

  // Xóa sự kiện (DELETE)
  const deleteEvent = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/events/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setEvents((prevEvents) =>
          prevEvents.filter((event) => event.id !== id)
        ); // Cập nhật danh sách sự kiện
      } else {
        console.error("Lỗi khi xóa sự kiện");
      }
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu xóa sự kiện:", error);
    }
  };

  // Cập nhật cảm xúc cho từng sự kiện
  const setEventEmotion = (eventId, mood) => {
    setEventMood((prevMood) => {
      // Tạo một bản sao mới từ prevMood để đảm bảo không thay đổi trực tiếp
      const updatedMood = { ...prevMood };

      // Kiểm tra nếu sự kiện chưa có mảng cảm xúc, thì khởi tạo mảng rỗng
      if (!updatedMood[eventId]) {
        updatedMood[eventId] = [];
      }

      // Thêm cảm xúc vào mảng của sự kiện
      updatedMood[eventId] = [...updatedMood[eventId], mood];
      console.log("Cập nhật eventMood:", updatedMood);

      return updatedMood; // Trả về state mới
    });
  };

  return (
    <EventContext.Provider
      value={{ events, createEvent, deleteEvent, eventMood, setEventEmotion }}
    >
      {children}
    </EventContext.Provider>
  );
};
