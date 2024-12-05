import React, { useContext, useState } from "react";
import { VoteContext } from "../context/VoteContext";

const VotePoll = () => {
  const { votes, proposeOption, voteForOption } = useContext(VoteContext);
  const [newOption, setNewOption] = useState("");

  const handleAddOption = () => {
    proposeOption(newOption);
    setNewOption("");
  };

  return (
    <div>
      <h2>Bỏ phiếu cho Thời gian/Địa điểm</h2>
      <input
        type="text"
        value={newOption}
        onChange={(e) => setNewOption(e.target.value)}
        placeholder="Đề xuất thời gian/địa điểm"
      />
      <button onClick={handleAddOption}>Thêm lựa chọn</button>
      <ul>
        {Object.keys(votes).map((option, index) => (
          <li key={index}>
            {option} - {votes[option]} votes
            <button onClick={() => voteForOption(option)}>Bỏ phiếu</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VotePoll;
