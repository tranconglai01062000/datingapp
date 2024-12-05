import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserFriends,
  FaCalendarAlt,
  FaSmile,
  FaGamepad,
  FaSearch,
  FaHeart,
  FaRegComment,
} from "react-icons/fa"; // Import icon từ react-icons
import "./Home.css"; // Import file CSS

const Home = ({ onLogout, user }) => {
  return (
    <div className="home-container">
      <header className="header">
        {/* Phần logo và trang chủ */}
        <div className="header-left">
          <Link to="/home" className="logo">
            Dating App
          </Link>
        </div>

        {/* Thanh tìm kiếm */}
        <div className="header-center">
          <div className="search-bar">
            <FaSearch className="search-icon" /> {/* Icon tìm kiếm */}
            <input type="text" placeholder="Tìm kiếm..." />
          </div>
        </div>

        {/* Các icon và nút đăng xuất */}
        <div className="header-right">
          {/* Hiển thị tên người dùng và ảnh đại diện */}
          <div className="user-info">
            <img src={user.avatar} alt="Avatar" className="user-avatar" />
            <span className="user-name">{user.name}</span>
          </div>

          <Link to="/friends" className="icon-button">
            <FaUserFriends title="Quản lý Bạn bè" />
          </Link>
          <Link to="/events" className="icon-button">
            <FaCalendarAlt title="Quản lý Sự kiện" />
          </Link>
          <Link to="/mood" className="icon-button">
            <FaSmile title="Theo dõi Cảm Xúc" />
          </Link>
          <Link to="/minigame" className="icon-button">
            <FaGamepad title="Chơi Mini-Game" />
          </Link>
          <button className="logout-button" onClick={onLogout}>
            Đăng xuất
          </button>
        </div>
      </header>
      {/* Main Content: Feed */}
      <main className="feed">
        <div className="feed-posts">
          <div className="post">
            <div className="post-header">
              <img
                src={user.avatar}
                alt="User Avatar"
                className="post-avatar"
              />
              <span className="post-username">{user.name}</span>
            </div>
            <img
              src="https://images2.thanhnien.vn/528068263637045248/2024/11/12/4346688273993028297050973153543902712456213n-1731416457019948186035.jpg"
              alt="Post"
              className="post-image"
            />
            <div className="post-actions">
              {/* Biểu tượng Like và Comment */}
              <button className="like-button">
                <FaHeart className="like-icon" />
                Thích
              </button>
              <button className="comment-button">
                <FaRegComment className="comment-icon" />
                Bình luận
              </button>
            </div>
            <div className="post-footer">
              <span className="post-likes">123 lượt thích</span>
              <p className="post-caption">Đây là caption mẫu của bài đăng.</p>
            </div>
          </div>
          {/* Add more posts as needed */}
        </div>
      </main>
    </div>
  );
};

export default Home;
