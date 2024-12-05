import React, { useContext } from "react";
import { MoodContext } from "../context/MoodContext";

const MoodTracker = () => {
  const { mood, setMood } = useContext(MoodContext);

  const handleMoodChange = (newMood) => {
    setMood(newMood);
  };

  return (
    <div>
      <h2>Phản hồi Cảm xúc</h2>
      <div>
        <button onClick={() => handleMoodChange("😊")}>Vui vẻ</button>
        <button onClick={() => handleMoodChange("😞")}>Buồn</button>
        <button onClick={() => handleMoodChange("😠")}>Giận dữ</button>
        <button onClick={() => handleMoodChange("😍")}>Yêu thích</button>
      </div>
      <p>Cảm xúc hiện tại: {mood}</p>
    </div>
  );
};

export default MoodTracker;
