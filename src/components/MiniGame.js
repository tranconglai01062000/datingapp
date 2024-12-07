import React, { useState } from "react";
import xucSacImg from "../image/xucsac.png"; // Import ảnh từ thư mục src/image
import "./MiniGame.css"; // Thêm file CSS nếu muốn style

const MiniGame = () => {
  const [diceResult, setDiceResult] = useState(null); // Lưu kết quả xúc xắc

  // Hàm lắc xúc xắc ngẫu nhiên
  const rollDice = () => {
    const result = Math.floor(Math.random() * 6) + 1; // Tạo số ngẫu nhiên từ 1 đến 6
    setDiceResult(result); // Cập nhật kết quả xúc xắc
  };

  return (
    <div
      className="mini-game"
      style={{
        backgroundImage: `url(${xucSacImg})`, // Áp dụng ảnh đã import vào style
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Đảm bảo chiếm hết chiều cao màn hình
        textAlign: "center",
        padding: "50px 0",
      }}
    >
      <h2>Xúc Xắc Ngẫu Nhiên</h2>
      <div className="dice">
        {diceResult ? (
          <div className="dice-result">
            <h3>Kết quả: {diceResult}</h3>
          </div>
        ) : (
          <p>Hãy lắc xúc xắc!</p>
        )}
      </div>
      <button onClick={rollDice} className="button-roll">
        Lắc Xúc Xắc
      </button>
    </div>
  );
};

export default MiniGame;
