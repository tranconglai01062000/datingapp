// voteService.js
export const getVoteResults = () => {
  // Giả lập lấy kết quả bỏ phiếu từ API hoặc cơ sở dữ liệu
  return {
    "12:00 PM": 5,
    "02:00 PM": 3,
    "04:00 PM": 2,
  };
};

export const createVote = (options) => {
  // Giả lập tạo bảng bình chọn (có thể thay bằng API call)
  console.log("Bảng bình chọn đã được tạo:", options);
};

export const voteForOption = (option) => {
  // Giả lập bỏ phiếu cho lựa chọn
  console.log(`Đã bỏ phiếu cho lựa chọn: ${option}`);
};
