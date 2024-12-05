import React, { createContext, useState } from "react";

// Tạo context cho cảm xúc
export const MoodContext = createContext();

export const MoodProvider = ({ children }) => {
  const [mood, setMood] = useState("");

  return (
    <MoodContext.Provider value={{ mood, setMood }}>
      {children}
    </MoodContext.Provider>
  );
};
