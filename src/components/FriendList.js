import React, { useContext, useState } from "react";
import { FriendContext } from "../context/FriendContext";

const FriendList = () => {
  const { friends, addFriend, acceptFriendRequest } = useContext(FriendContext);
  const [newFriendEmail, setNewFriendEmail] = useState("");

  const handleAddFriend = () => {
    addFriend(newFriendEmail);
    setNewFriendEmail("");
  };

  return (
    <div>
      <h2>Danh sách Bạn bè</h2>
      <input
        type="email"
        value={newFriendEmail}
        onChange={(e) => setNewFriendEmail(e.target.value)}
        placeholder="Nhập email bạn bè"
      />
      <button onClick={handleAddFriend}>Thêm bạn</button>
      <ul>
        {friends.map((friend) => (
          <li key={friend.email}>
            {friend.email} -{" "}
            {friend.status === "pending" ? "Chờ xác nhận" : "Đã kết bạn"}
            {friend.status === "pending" && (
              <button onClick={() => acceptFriendRequest(friend.email)}>
                Chấp nhận
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
