import React, { createContext, useState } from "react";

// Tạo context cho cảm xúc
export const MoodContext = createContext();

// Tạo MoodProvider để quản lý trạng thái cảm xúc toàn ứng dụng
export const MoodProvider = ({ children }) => {
  const [mood, setMood] = useState(""); // Trạng thái cảm xúc
  const [moodHistory, setMoodHistory] = useState([]); // Lịch sử cảm xúc
  const [eventMoodCount, setEventMoodCount] = useState({}); // Lưu trữ số lượt cảm xúc cho mỗi sự kiện

  const handleMoodChange = (eventId, newMood) => {
    setMood(newMood);

    // Lưu vào lịch sử cảm xúc kèm thời gian
    const newHistory = {
      mood: newMood,
      eventId: eventId,
      timestamp: new Date().toLocaleString(),
    };
    setMoodHistory((prevHistory) => [newHistory, ...prevHistory]);

    // Cập nhật số lượt cảm xúc cho sự kiện
    setEventMoodCount((prevCount) => {
      const newCount = { ...prevCount };
      if (newCount[eventId]) {
        newCount[eventId] += 1;
      } else {
        newCount[eventId] = 1;
      }
      return newCount;
    });
  };

  return (
    <MoodContext.Provider
      value={{ mood, setMood, moodHistory, eventMoodCount, handleMoodChange }}
    >
      {children}
    </MoodContext.Provider>
  );
};
