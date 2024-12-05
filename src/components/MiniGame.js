import React, { useState } from "react";

const MiniGame = () => {
  const [gameResult, setGameResult] = useState(null);

  const rollDice = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    setGameResult(`Kết quả xúc xắc: ${result}`);
  };

  const handleQuizAnswer = (answer) => {
    if (answer === "correct") {
      setGameResult("Bạn đã chiến thắng trong trò chơi!");
    } else {
      setGameResult("Bạn đã thất bại trong trò chơi!");
    }
  };

  return (
    <div>
      <h2>Mini-game Quyết định</h2>
      <button onClick={rollDice}>Chơi Xúc Xắc</button>
      <div>{gameResult}</div>
      <h3>Đố vui trắc nghiệm:</h3>
      <p>Câu hỏi: 2 + 2 là bao nhiêu?</p>
      <button onClick={() => handleQuizAnswer("correct")}>4</button>
      <button onClick={() => handleQuizAnswer("incorrect")}>5</button>
    </div>
  );
};

export default MiniGame;
