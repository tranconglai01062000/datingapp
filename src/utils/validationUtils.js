// validationUtils.js
export const isValidEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

export const isValidDate = (date) => {
  const regex = /^\d{4}-\d{2}-\d{2}$/; // Định dạng YYYY-MM-DD
  return regex.test(date);
};

export const isValidTime = (time) => {
  const regex = /^(0?[1-9]|1[0-2]):([0-5]?[0-9])\s([APap][Mm])$/; // Định dạng 12h AM/PM
  return regex.test(time);
};
