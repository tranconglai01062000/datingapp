// dateUtils.js
export const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("vi-VN", options);
};

export const isWeekend = (date) => {
  const day = new Date(date).getDay();
  return day === 0 || day === 6; // Chủ nhật (0) hoặc Thứ bảy (6)
};

export const isSameDay = (date1, date2) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return d1.toDateString() === d2.toDateString();
};
