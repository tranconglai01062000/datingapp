import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import FriendPage from "./pages/FriendPage";
import EventPage from "./pages/EventPage";
import MoodPage from "./pages/MoodPage";
import MiniGamePage from "./pages/MiniGamePage";

// Các context provider
import { FriendProvider } from "./context/FriendContext";
import { EventProvider } from "./context/EventContext";
import { MoodProvider } from "./context/MoodContext";
import { VoteProvider } from "./context/VoteContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập
  const [user, setUser] = useState(null); // Thông tin người dùng
  // Hàm đăng nhập
  const handleLogin = (userData) => {
    setUser(userData); // Lưu thông tin người dùng
    setIsLoggedIn(true); // Đánh dấu người dùng đã đăng nhập
  };

  // Hàm đăng xuất
  const handleLogout = () => {
    setUser(null); // Xóa thông tin người dùng
    setIsLoggedIn(false); // Đánh dấu người dùng đã đăng xuất
  };

  return (
    <FriendProvider>
      <EventProvider>
        <MoodProvider>
          <VoteProvider>
            <Router>
              <Routes>
                {/* Route cho trang đăng nhập */}
                <Route
                  path="/"
                  element={
                    <Login
                      onLogin={handleLogin}
                      setIsLoggedIn={setIsLoggedIn}
                    />
                  }
                />

                {/* Route cho trang Home, chỉ hiển thị khi đã đăng nhập */}
                <Route
                  path="/home"
                  element={
                    isLoggedIn ? (
                      <Home onLogout={handleLogout} user={user} />
                    ) : (
                      <Navigate to="/" /> // Chuyển hướng về Login nếu chưa đăng nhập
                    )
                  }
                />

                {/* Route cho các trang chức năng khác */}
                <Route
                  path="/friends"
                  element={
                    isLoggedIn ? (
                      <FriendPage />
                    ) : (
                      <Navigate to="/" /> // Chuyển hướng về Login nếu chưa đăng nhập
                    )
                  }
                />
                <Route
                  path="/events"
                  element={
                    isLoggedIn ? (
                      <EventPage />
                    ) : (
                      <Navigate to="/" /> // Chuyển hướng về Login nếu chưa đăng nhập
                    )
                  }
                />
                <Route
                  path="/mood"
                  element={
                    isLoggedIn ? (
                      <MoodPage />
                    ) : (
                      <Navigate to="/" /> // Chuyển hướng về Login nếu chưa đăng nhập
                    )
                  }
                />
                <Route
                  path="/minigame"
                  element={
                    isLoggedIn ? (
                      <MiniGamePage />
                    ) : (
                      <Navigate to="/" /> // Chuyển hướng về Login nếu chưa đăng nhập
                    )
                  }
                />
              </Routes>
            </Router>
          </VoteProvider>
        </MoodProvider>
      </EventProvider>
    </FriendProvider>
  );
}

export default App;
