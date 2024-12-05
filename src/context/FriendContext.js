import React, { createContext, useState } from "react";

// Tạo context cho bạn bè
export const FriendContext = createContext();

export const FriendProvider = ({ children }) => {
  const [friends, setFriends] = useState([
    { email: "friend1@example.com", status: "accepted" },
    { email: "friend2@example.com", status: "pending" },
  ]);

  // Hàm thêm bạn
  const addFriend = (email) => {
    setFriends([...friends, { email, status: "pending" }]);
  };

  // Hàm chấp nhận yêu cầu kết bạn
  const acceptFriendRequest = (email) => {
    setFriends(
      friends.map((friend) =>
        friend.email === email ? { ...friend, status: "accepted" } : friend
      )
    );
  };

  return (
    <FriendContext.Provider value={{ friends, addFriend, acceptFriendRequest }}>
      {children}
    </FriendContext.Provider>
  );
};
