import React, { useContext } from "react";
import { EventContext } from "../context/EventContext";
import { useNavigate } from "react-router-dom";
import { FaSmile, FaFrown, FaAngry, FaHeart } from "react-icons/fa"; // Import icons
import "./moodtracker.css";

const MoodTracker = () => {
  const navigate = useNavigate();
  const { events, eventMood, setEventEmotion } = useContext(EventContext); // Lấy sự kiện và cảm xúc từ Context

  const handleMoodChange = (eventId, mood) => {
    setEventEmotion(eventId, mood); // Cập nhật cảm xúc cho sự kiện
  };

  const countEmotions = (eventId) => {
    const moods = eventMood[eventId] || []; // Lấy mảng cảm xúc của sự kiện cụ thể
    let count = {
      "😊": 0,
      "😞": 0,
      "😠": 0,
      "😍": 0,
    };

    // Duyệt qua các cảm xúc của sự kiện và đếm số lần mỗi cảm xúc xuất hiện
    moods.forEach((mood) => {
      if (count[mood] !== undefined) {
        count[mood] += 1;
      }
    });

    console.log(`Tổng cảm xúc của sự kiện ${eventId}:`, count);
    return count;
  };

  return (
    <div className="mood-tracker">
      <h2>Phản hồi Cảm xúc</h2>

      {/* Lặp qua các sự kiện */}
      {events.length > 0 ? (
        events.map((event) => {
          const emotionCount = countEmotions(event.id); // Tính tổng số lượt cảm xúc cho sự kiện
          return (
            <div key={event.id} className="event-card">
              <h3>{event.title}</h3>
              <p>
                📅 {event.date} - ⏰ {event.time}
              </p>
              <p>📍 {event.location}</p>

              {/* Các nút phản hồi cảm xúc */}
              <div className="mood-options">
                <button
                  onClick={() => handleMoodChange(event.id, "😊")}
                  title="Vui vẻ"
                >
                  <FaSmile size={24} color="green" />
                </button>
                <button
                  onClick={() => handleMoodChange(event.id, "😞")}
                  title="Buồn"
                >
                  <FaFrown size={24} color="blue" />
                </button>
                <button
                  onClick={() => handleMoodChange(event.id, "😠")}
                  title="Giận dữ"
                >
                  <FaAngry size={24} color="red" />
                </button>
                <button
                  onClick={() => handleMoodChange(event.id, "😍")}
                  title="Yêu thích"
                >
                  <FaHeart size={24} color="pink" />
                </button>
              </div>

              {/* Hiển thị tổng số lượt cảm xúc */}
              <div className="emotion-counts">
                <p>
                  <strong>Tổng số lượt cảm xúc:</strong>
                </p>
                <p>😊: {emotionCount["😊"]}</p>
                <p>😞: {emotionCount["😞"]}</p>
                <p>😠: {emotionCount["😠"]}</p>
                <p>😍: {emotionCount["😍"]}</p>
              </div>
            </div>
          );
        })
      ) : (
        <p>Không có sự kiện nào để phản hồi cảm xúc.</p>
      )}
      <button className="button-home" onClick={() => navigate("/home")}>
        Chuyển đến Home
      </button>
      <button className="button-minigame" onClick={() => navigate("/minigame")}>
        Chuyển đến MiniGame
      </button>
    </div>
  );
};

export default MoodTracker;
