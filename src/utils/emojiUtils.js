// emoji.js

// Danh sách emoji cho các cảm xúc phổ biến
export const emojis = {
  happy: "😊", // Vui vẻ
  sad: "😢", // Buồn
  angry: "😡", // Giận dữ
  love: "❤️", // Yêu thích
  surprised: "😲", // Ngạc nhiên
  neutral: "😐", // Trung lập
  excited: "😄", // Hào hứng
  bored: "😒", // Buồn chán
};

// Hàm lấy emoji theo cảm xúc
export const getEmojiForMood = (mood) => {
  switch (mood.toLowerCase()) {
    case "vui vẻ":
      return emojis.happy;
    case "buồn":
      return emojis.sad;
    case "giận dữ":
      return emojis.angry;
    case "yêu thích":
      return emojis.love;
    case "ngạc nhiên":
      return emojis.surprised;
    case "trung lập":
      return emojis.neutral;
    case "hào hứng":
      return emojis.excited;
    case "buồn chán":
      return emojis.bored;
    default:
      return emojis.neutral; // Mặc định trả về emoji trung lập
  }
};

// Hàm trả về danh sách các emoji (có thể sử dụng trong giao diện lựa chọn)
export const getAllEmojis = () => {
  return Object.values(emojis);
};
