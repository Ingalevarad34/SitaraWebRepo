import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminPanel.css";

const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "varad3434",
};

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [selectedAPI, setSelectedAPI] = useState("http://localhost:5000/api/weekly-songs");
  const [jsonData, setJsonData] = useState("");
  const [response, setResponse] = useState(null);

  const apiEndpoints = {
    "Weekly Songs": "http://localhost:5000/api/weekly-songs",
    "New Releases": "http://localhost:5000/api/newRelease-songs",
    "Trending Songs": "http://localhost:5000/api/trending-songs",
    "Popular Artists": "http://localhost:5000/api/artist-songs",
    "Music Videos": "http://localhost:5000/api/musicVideo-songs",
    "Top Albums": "http://localhost:5000/api/topAlbums-songs",
    "Mood Playlists": "http://localhost:5000/api/moodPlaylist-songs",
    "All Songs": "http://localhost:5000/api/all-songs",
    "Music Genres": "http://localhost:5000/api/musicGenres-songs",
    "Playlists": "http://localhost:5000/api/playList-songs",
    "UserQuery": "http://localhost:5000/api/userquery"
  };

  useEffect(() => {
    const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");
    if (isAdminLoggedIn === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      credentials.username === ADMIN_CREDENTIALS.username &&
      credentials.password === ADMIN_CREDENTIALS.password
    ) {
      setIsAuthenticated(true);
      localStorage.setItem("isAdminLoggedIn", "true");
    } else {
      alert("Invalid admin credentials!");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAdminLoggedIn");
  };

  const handlePostData = async () => {
    try {
      const parsedData = JSON.parse(jsonData);
      const res = await axios.post(selectedAPI, parsedData);
      setResponse(res.data);
    } catch (error) {
      setResponse({ error: "Invalid JSON or API Error" });
    }
  };

  const handleGetData = async () => {
    try {
      const res = await axios.get(selectedAPI);
      setResponse(res.data);
    } catch (error) {
      setResponse({ error: "GET request failed or API Error" });
    }
  };

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
          <h2 className="admin-main-title">{selectedAPI} - Manage Songs</h2>
          <textarea
            className="admin-json-input"
            placeholder='{ "songName": "Example", "artist": "Artist Name", "url": "https://example.com" }'
            value={jsonData}
            onChange={(e) => setJsonData(e.target.value)}
          />
          <button className="admin-post-button" onClick={handlePostData}>
            🚀 Post Data
          </button>
          <button className="admin-post-button" onClick={handleGetData}>
            📥 Get Data
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
