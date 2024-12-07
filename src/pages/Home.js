import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaUserFriends,
  FaCalendarAlt,
  FaSmile,
  FaGamepad,
  FaSearch,
  FaHeart,
  FaRegComment,
} from "react-icons/fa";
import "./Home.css";

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likeCount || 0);

  const toggleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="post">
      {/* Header */}
      <div className="post-header">
        <img src={post.image} alt="User Avatar" className="post-avatar" />
        <span className="post-username">{post.UserName}</span>
      </div>

      {/* Post Image */}
      <img src={post.image} alt="Post" className="post-image" />

      {/* Actions */}
      <div className="post-actions">
        <button className="like-button" onClick={toggleLike}>
          <FaHeart className={`like-icon ${liked ? "liked" : ""}`} />
          <span className="like-count">{likeCount} Likes</span>
        </button>
        <button className="comment-button">
          <FaRegComment className="comment-icon" />
          Comment
        </button>
      </div>

      {/* Footer */}
      <div className="post-footer">
        <span className="post-caption">{post.caption}</span>
      </div>
    </div>
  );
};

const Home = ({ onLogout, user, users, posts }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const combinedPosts = posts.map((post) => {
    const postUser = users.find((u) => u.id === parseInt(post.userId));
    return {
      ...post,
      userName: postUser?.name,
      userAvatar: postUser?.avatar,
    };
  });

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      const filteredSuggestions = users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery, users]);

  return (
    <div className="home-container">
      <header className="header">
        {/* Logo */}
        <div className="header-left">
          <Link to="/home" className="logo">
            Dating App
          </Link>
        </div>

        {/* Search Bar */}
        <div className="header-center">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Tìm kiếm bạn bè..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {suggestions.length > 0 && (
              <ul className="suggestions-list">
                {suggestions.map((friend) => (
                  <li key={friend.id} className="suggestion-item">
                    <img
                      src={friend.avatar}
                      alt={friend.name}
                      className="suggestion-avatar"
                    />
                    <span>{friend.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* User Info & Logout */}
        <div className="header-right">
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

      {/* Feed */}
      <main className="feed">
        <div className="feed-posts">
          {combinedPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
