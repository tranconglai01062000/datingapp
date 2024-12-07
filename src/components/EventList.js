import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EventContext } from "../context/EventContext";
import { FaCheck, FaTimes } from "react-icons/fa"; // Import icons từ react-icons
import "./EventList.css";

const EventList = () => {
  const navigate = useNavigate();
  const { events, createEvent, deleteEvent } = useContext(EventContext);
  const [eventDetails, setEventDetails] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    timeOptions: [], // Lưu trữ các đề xuất thời gian
    locationOptions: [], // Lưu trữ các đề xuất địa điểm
    newTime: "", // Thời gian mới để thêm
    newLocation: "", // Địa điểm mới để thêm
  });
  const [error, setError] = useState("");

  // Hàm tạo sự kiện
  const handleCreateEvent = () => {
    if (
      !eventDetails.title ||
      !eventDetails.date ||
      !eventDetails.time ||
      !eventDetails.location
    ) {
      setError("Vui lòng nhập đầy đủ thông tin sự kiện!");
      return;
    }
    // Gửi yêu cầu đến API để tạo sự kiện
    createEvent({
      ...eventDetails,
      timeOptions: eventDetails.timeOptions || [],
      locationOptions: eventDetails.locationOptions || [],
    });
    setEventDetails({
      title: "",
      date: "",
      time: "",
      location: "",
      timeOptions: [],
      locationOptions: [],
      newTime: "",
      newLocation: "",
    });
    setError("");
  };

  // Hàm xóa sự kiện
  const handleDeleteEvent = (id) => {
    deleteEvent(id); // Gửi yêu cầu đến API để xóa sự kiện
  };

  // Hàm thêm thời gian vào các lựa chọn
  const handleAddTimeOption = () => {
    if (eventDetails.newTime) {
      setEventDetails({
        ...eventDetails,
        timeOptions: [
          ...eventDetails.timeOptions,
          { time: eventDetails.newTime, selected: false },
        ],
        newTime: "",
      });
    }
  };

  // Hàm thêm địa điểm vào các lựa chọn
  const handleAddLocationOption = () => {
    if (eventDetails.newLocation) {
      setEventDetails({
        ...eventDetails,
        locationOptions: [
          ...eventDetails.locationOptions,
          { location: eventDetails.newLocation, selected: false },
        ],
        newLocation: "",
      });
    }
  };

  // Hàm thay đổi trạng thái chọn vào một thời gian
  const handleSelectTime = (index) => {
    const updatedTimeOptions = eventDetails.timeOptions.map((item, i) =>
      i === index ? { ...item, selected: !item.selected } : item
    );
    setEventDetails({
      ...eventDetails,
      timeOptions: updatedTimeOptions,
    });
  };

  // Hàm thay đổi trạng thái chọn vào một địa điểm
  const handleSelectLocation = (index) => {
    const updatedLocationOptions = eventDetails.locationOptions.map((item, i) =>
      i === index ? { ...item, selected: !item.selected } : item
    );
    setEventDetails({
      ...eventDetails,
      locationOptions: updatedLocationOptions,
    });
  };

  // Kiểm tra xem có bất kỳ đề xuất nào đã được thêm vào chưa
  const hasTimeOptions = eventDetails.timeOptions.length > 0;
  const hasLocationOptions = eventDetails.locationOptions.length > 0;

  return (
    <div className="eventlist-container">
      <div className="create-event">
        <h2>Tạo sự kiện mới</h2>
        {error && <div className="error-message">{error}</div>}
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

        {/* Đề xuất thời gian */}
        <div>
          <h4>Đề xuất thời gian:</h4>
          <input
            type="time"
            value={eventDetails.newTime}
            onChange={(e) =>
              setEventDetails({ ...eventDetails, newTime: e.target.value })
            }
          />
          <button onClick={handleAddTimeOption}>Thêm thời gian</button>
          <div>
            {hasTimeOptions ? (
              eventDetails.timeOptions.map((time, index) => (
                <div key={index} className="time-option">
                  <label>
                    <input
                      type="checkbox"
                      checked={time.selected}
                      onChange={() => handleSelectTime(index)}
                    />
                    {time.time}
                    {/* Hiển thị icon chỉ khi có đề xuất */}
                    {time.selected && <FaCheck className="check-icon" />}
                    {!time.selected && <FaTimes className="times-icon" />}
                  </label>
                </div>
              ))
            ) : (
              <p>Chưa có đề xuất thời gian.</p>
            )}
          </div>
        </div>

        {/* Đề xuất địa điểm */}
        <div>
          <h4>Đề xuất địa điểm:</h4>
          <input
            type="text"
            value={eventDetails.newLocation}
            onChange={(e) =>
              setEventDetails({ ...eventDetails, newLocation: e.target.value })
            }
          />
          <button onClick={handleAddLocationOption}>Thêm địa điểm</button>
          <div>
            {hasLocationOptions ? (
              eventDetails.locationOptions.map((location, index) => (
                <div key={index} className="location-option">
                  <label>
                    <input
                      type="checkbox"
                      checked={location.selected}
                      onChange={() => handleSelectLocation(index)}
                    />
                    {location.location}
                    {/* Hiển thị icon chỉ khi có đề xuất */}
                    {location.selected && <FaCheck className="check-icon" />}
                    {!location.selected && <FaTimes className="times-icon" />}
                  </label>
                </div>
              ))
            ) : (
              <p>Chưa có đề xuất địa điểm.</p>
            )}
          </div>
        </div>

        <button onClick={handleCreateEvent}>Tạo sự kiện</button>
      </div>

      <div className="event-list">
        <h2>Danh sách sự kiện</h2>
        {events.length > 0 ? (
          events.map((event) => (
            <div className="event-card" key={event.id}>
              <h3>{event.title}</h3>
              <p>
                📅 {event.date} - ⏰ {event.time}
              </p>
              <p>📍 {event.location}</p>
              <button
                className="delete-event-btn"
                onClick={() => handleDeleteEvent(event.id)}
              >
                Xóa sự kiện
              </button>
            </div>
          ))
        ) : (
          <p className="no-events">Không có sự kiện nào!</p>
        )}
        <button className="button-home" onClick={() => navigate("/home")}>
          Chuyển đến Home
        </button>
        <button className="button-mood" onClick={() => navigate("/mood")}>
          Chuyển đến MoodTracker
        </button>
      </div>
    </div>
  );
};

export default EventList;
