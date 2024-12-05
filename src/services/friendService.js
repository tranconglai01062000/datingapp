// friendService.js
export const getFriendList = () => {
  // Giả lập lấy danh sách bạn bè từ API hoặc cơ sở dữ liệu
  return [
    { email: "friend1@example.com", status: "accepted" },
    { email: "friend2@example.com", status: "pending" },
  ];
};

export const sendFriendRequest = (email) => {
  // Giả lập gửi yêu cầu kết bạn (có thể thay bằng API call)
  console.log(`Yêu cầu kết bạn đã được gửi đến ${email}`);
};

export const acceptFriendRequest = (email) => {
  // Giả lập chấp nhận yêu cầu kết bạn (có thể thay bằng API call)
  console.log(`Đã chấp nhận yêu cầu kết bạn từ ${email}`);
};
