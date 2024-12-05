import React, { createContext, useState } from "react";

// Tạo context cho bỏ phiếu
export const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
  const [votes, setVotes] = useState({});

  // Hàm đề xuất lựa chọn mới (thời gian/địa điểm)
  const proposeOption = (option) => {
    setVotes({ ...votes, [option]: 0 });
  };

  // Hàm bỏ phiếu cho lựa chọn
  const voteForOption = (option) => {
    setVotes({
      ...votes,
      [option]: votes[option] + 1,
    });
  };

  return (
    <VoteContext.Provider value={{ votes, proposeOption, voteForOption }}>
      {children}
    </VoteContext.Provider>
  );
};
