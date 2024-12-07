import React, { useState, useEffect } from "react";
import "./friendlist.css";

const FriendList = () => {
  const [friends, setFriends] = useState([]); // Lưu danh sách bạn bè
  const [searchTerm, setSearchTerm] = useState(""); // Lưu từ khóa tìm kiếm
  const [newFriendEmail, setNewFriendEmail] = useState(""); // Lưu email bạn mới

  // Lấy danh sách bạn bè từ API
  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await fetch("http://localhost:5000/friends");
        const data = await response.json();
        setFriends(data); // Lưu dữ liệu vào state
      } catch (error) {
        console.error("Error fetching friends:", error);
      }
    };

    fetchFriends();
  }, []); // useEffect chạy 1 lần khi component mount

  // Xử lý thêm bạn
  const handleAddFriend = async (friendId) => {
    setFriends((prevState) =>
      prevState.map((friend) =>
        friend.id === friendId ? { ...friend, isFriend: true } : friend
      )
    );
  };

  // Xử lý hủy kết bạn
  const handleCancelFriend = async (friendId) => {
    setFriends((prevState) =>
      prevState.map((friend) =>
        friend.id === friendId ? { ...friend, isFriend: false } : friend
      )
    );
  };

  // Lọc bạn bè theo tên
  const filteredFriends = friends.filter(
    (friend) =>
      friend.name &&
      friend.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Danh sách Bạn bè</h2>

      {/* Thanh tìm kiếm */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Tìm kiếm bạn bè..."
      />

      {/* Thêm bạn */}
      <div>
        <input
          type="email"
          value={newFriendEmail}
          onChange={(e) => setNewFriendEmail(e.target.value)}
          placeholder="Nhập email bạn bè"
        />
        <button onClick={handleAddFriend}>Thêm bạn</button>
      </div>

      {/* Danh sách bạn bè */}
      <div className="friendlist-container">
        {filteredFriends.length > 0 ? (
          filteredFriends.map((friend) => (
            <div className="friend-card" key={friend.id}>
              <img src={friend.avatar} alt={friend.name} />
              <div className="friend-info">
                <div className="friend-name">{friend.name}</div>
                <div className="friend-mutual-friends">
                  {friend.mutualFriends} bạn chung
                </div>
              </div>

              {/* Nút Thêm bạn hoặc Hủy kết bạn */}
              <button className="friend-btn">bạn bè</button>
              {friend.isFriend ? (
                <button
                  className="cancel-friend-btn"
                  onClick={() => handleCancelFriend(friend.id)}
                >
                  thêm bạn
                </button>
              ) : (
                <button
                  className="add-friend-btn"
                  onClick={() => handleAddFriend(friend.id)}
                >
                  Hủy kết bạn
                </button>
              )}
            </div>
          ))
        ) : (
          <div className="no-friends-message">Không tìm thấy bạn bè</div>
        )}
      </div>
    </div>
  );
};

export default FriendList;
