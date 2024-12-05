// eventService.js
export const getEventList = () => {
  // Giả lập lấy danh sách sự kiện từ API hoặc cơ sở dữ liệu
  return [
    {
      title: "Hẹn hò cuối tuần",
      date: "2024-12-10",
      time: "18:00",
      location: "Quán cà phê ABC",
    },
    {
      title: "Sinh nhật bạn thân",
      date: "2024-12-15",
      time: "20:00",
      location: "Nhà hàng XYZ",
    },
  ];
};

export const createEvent = (eventDetails) => {
  // Giả lập tạo sự kiện (có thể thay bằng API call)
  console.log("Sự kiện đã được tạo:", eventDetails);
};
