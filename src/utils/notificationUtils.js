// notificationUtils.js
export const showNotification = (message) => {
  // Giả lập hiển thị thông báo
  alert(message); // Thay bằng thư viện thông báo như toastr, react-toastify,...
};

export const showEventReminder = (eventName, eventDate) => {
  // Hiển thị thông báo nhắc nhở sự kiện
  const message = `Nhớ tham gia sự kiện "${eventName}" vào ngày ${eventDate}`;
  showNotification(message);
};
