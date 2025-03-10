import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminPanel.css";

// Predefined Admin Credentials
const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "varad3434",
};

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [selectedAPI, setSelectedAPI] = useState("weekly-songs");
  const [jsonData, setJsonData] = useState("");
  const [response, setResponse] = useState(null);

  // API Endpoints
  const apiEndpoints = {
    "Weekly Songs": "/api/weekly-songs",
    "New Releases": "/api/newRelease-songs",
    "Trending Songs": "/api/trending-songs",
    "Popular Artists": "/api/artist-songs",
    "Music Videos": "/api/musicVideo-songs",
    "Top Albums": "/api/topAlbums-songs",
    "Mood Playlists": "/api/moodPlaylist-songs",
    "All Songs": "/api/all-songs",
    "Music Genres": "/api/musicGenres-songs",
    "Playlists": "/api/playList-songs",
  };

  // Check if admin is already logged in (from localStorage)
  useEffect(() => {
    const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");
    if (isAdminLoggedIn === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Handle Admin Login
  const handleLogin = (e) => {
    e.preventDefault();
    if (
      credentials.username === ADMIN_CREDENTIALS.username &&
      credentials.password === ADMIN_CREDENTIALS.password
    ) {
      setIsAuthenticated(true);
      localStorage.setItem("isAdminLoggedIn", "true"); // Store session
    } else {
      alert("Invalid admin credentials!");
    }
  };

  // Handle Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAdminLoggedIn"); // Clear session
  };

  // Handle API Post Request
  const handlePostData = async () => {
    try {
      const parsedData = JSON.parse(jsonData);
      const res = await axios.post(apiEndpoints[selectedAPI], parsedData);
      setResponse(res.data);
    } catch (error) {
      setResponse({ error: "Invalid JSON or API Error" });
    }
  };

  // If Admin is NOT logged in, show login form
  if (!isAuthenticated) {
    return (
      <div className="admin-login-container">
        <h2>🔒 Admin Login</h2>
        <form onSubmit={handleLogin} className="admin-login-form">
          <input
            type="text"
            placeholder="Admin Username"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Admin Password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <div className="admin-sidebar">
        <h2 className="admin-title">🎵 Music Admin</h2>
        <nav className="admin-nav">
          {Object.keys(apiEndpoints).map((api) => (
            <button
              key={api}
              className={`admin-nav-link ${selectedAPI === apiEndpoints[api] ? "active" : ""}`}
              onClick={() => setSelectedAPI(apiEndpoints[api])}
            >
              {api}
            </button>
          ))}
        </nav>
        <button className="admin-logout-btn" onClick={handleLogout}>
          🚪 Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="admin-main">
        <div className="admin-card">
          <h2 className="admin-main-title">{selectedAPI} - Add Songs</h2>
          <textarea
            className="admin-json-input"
            placeholder='{ "songName": "Example", "artist": "Artist Name", "url": "https://example.com" }'
            value={jsonData}
            onChange={(e) => setJsonData(e.target.value)}
          />
          <button className="admin-post-button" onClick={handlePostData}>
            🚀 Post Data
          </button>

          {response && (
            <div className="admin-response">
              <h3>API Response:</h3>
              <pre>{JSON.stringify(response, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
