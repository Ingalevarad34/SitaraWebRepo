import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import axios from "axios";

function Header() {
  const [musicData, setMusicData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMusic, setFilteredMusic] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  // Fetch music data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/allSongs/getAllSongs");
        setMusicData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Handle user input and filter music
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "" || !musicData.length) {
      setFilteredMusic([]);
      return;
    }

    const results = musicData.filter((song) => {
      const musicName = song.musicName ? song.musicName.toLowerCase() : "";
      const artistName = song.artistName ? song.artistName.toLowerCase() : "";

      return musicName.includes(query.toLowerCase()) || artistName.includes(query.toLowerCase());
    });

    setFilteredMusic(results);
  };

  return (
    <>
      {/* Overlay Page (Conditional Rendering: Appears Only If Results Exist) */}
      {filteredMusic.length > 0 && (
        <div className="overlay" onClick={() => setFilteredMusic([])}>
          <div className="search-container" onClick={(e) => e.stopPropagation()}>
            <input
              className="search-input"
              type="search"
              placeholder="Search For Music, Artists,..."
              value={searchQuery}
              onChange={handleSearch}
              autoFocus
            />
            <div className="search-results">
              {filteredMusic.map((song, index) => (
                <div key={song.id || index} className="search-result-item" onClick={() => setCurrentSong(song)}>
                  <strong>{song.musicName}</strong> - {song.artistName}
                </div>
              ))}
            </div>
            {/* Audio Player inside overlay */}
            {currentSong && (
              <div className="audio-player">
                <img src={currentSong.imageUrl} alt={currentSong.musicName} className="player-image" />
                <div className="player-info">
                  <strong>{currentSong.musicName}</strong> - {currentSong.artistName}
                </div>
                <audio controls autoPlay>
                  <source src={currentSong.audioUrl} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-4">
        <Link className="navbar-brand me-5 gradient-text" to="/"></Link>
        <div className="input-group input-design">
          <span className="input-group-text bg-color border-0">
            <i className="fa-solid fa-magnifying-glass fa-flip-horizontal" style={{ color: "#ffffff" }}></i>
          </span>
          <input
            className="form-control w-50 bg-color border-0"
            type="search"
            placeholder="Search For Music, Artists,..."
            onChange={handleSearch}
          />
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ms-5 lato-bold">
              <Link className="nav-link" style={{ color: "white" }} to="/artists">
                About Us
              </Link>
            </li>
            <li className="nav-item ms-5 lato-bold">
              <Link className="nav-link" style={{ color: "white" }} to="/">
                Contact
              </Link>
            </li>
            <li className="nav-item ms-5 me-5 lato-bold">
              <Link className="nav-link" style={{ color: "white" }} to="/discover">
                Premium
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Loading State */}
      {loading && <p className="loading-text">Loading music data...</p>}
    </>
  );
}

export default Header;
