import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa"; // Import icon từ react-icons
import axios from "axios"; // Thư viện gọi API
import "./Login.css"; // Import file CSS

const Login = ({ onLogin, setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Trạng thái hiển thị lỗi
  const navigate = useNavigate(); // Hook để điều hướng

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Gửi yêu cầu GET tới API
      const response = await axios.get("http://localhost:5000/users");
      const users = response.data;

      // Kiểm tra thông tin đăng nhập
      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        onLogin(user); // Truyền thông tin người dùng vào App
        setIsLoggedIn(true); // Đánh dấu người dùng đã đăng nhập
        navigate("/home"); // Chuyển tới trang Home
      } else {
        alert("Tên đăng nhập hoặc mật khẩu không chính xác.");
      }
    } catch (error) {
      console.error("Đã xảy ra lỗi:", error);
      setError("Không thể kết nối tới API. Vui lòng thử lại.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2>Đăng nhập vào ứng dụng</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            className="input-field"
            placeholder="Nhập tên người dùng"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            className="input-field"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">
            Đăng nhập
          </button>
        </form>
        {error && <div className="error-message">{error}</div>}
        <div className="forgot-password">
          <button
            onClick={() => alert("Chức năng quên mật khẩu chưa được cài đặt")}
          >
            Quên mật khẩu?
          </button>
        </div>
        <div className="or-separator">
          <span>Hoặc</span>
        </div>
        <div className="other-login-buttons">
          <button
            onClick={() => alert("Đăng nhập với Facebook")}
            className="fb-button"
          >
            <FaFacebook className="icon" /> {/* Facebook icon */}
            Đăng nhập với Facebook
          </button>
          <button
            onClick={() => alert("Đăng nhập với Google")}
            className="google-button"
          >
            <FaGoogle className="icon" /> {/* Google icon */}
            Đăng nhập với Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
