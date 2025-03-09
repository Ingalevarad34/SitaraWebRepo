import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import axios from "axios";

function Header() {
  const [musicData, setMusicData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMusic, setFilteredMusic] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [noResults, setNoResults] = useState(false);
  const audioRef = useRef(null);

  // Fetch music data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/all-songs");
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
      setNoResults(false);
      return;
    }

    const results = musicData.filter((song) => {
      const musicName = song.musicName ? song.musicName.toLowerCase() : "";
      const artistName = song.artistName ? song.artistName.toLowerCase() : "";
      return musicName.includes(query.toLowerCase()) || artistName.includes(query.toLowerCase());
    });

    setFilteredMusic(results);
    setNoResults(results.length === 0);
  };

  const playSong = (song) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
    }
    setCurrentSong(song);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 100);
  };

  const addToPlaylist = async (song) => {
    try {
      const response = await axios.post("http://localhost:5000/api/playList-songs", [song]); // Wrap song in an array
      console.log("Song added to playlist:", response.data);
    } catch (error) {
      console.error("Error adding song to playlist:", error);
    }
  };

  return (
    <>
      {searchQuery && (
        <div className="overlay" onClick={() => { setFilteredMusic([]); setSearchQuery(""); }}>
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
              {filteredMusic.length > 0 ? (
                filteredMusic.map((song, index) => (
                  <div key={song.id || index} className="search-result-item" onClick={() => playSong(song)}>
                    <strong>{song.musicName}</strong> - {song.artistName}
                  </div>
                ))
              ) : (
                <p className="no-results-text">No results found for "{searchQuery}"</p>
              )}
            </div>
            {currentSong && (
              <div className="audio-player">
                <img src={currentSong.imageUrl} alt={currentSong.musicName} className="player-image" />
                <div className="player-info">
                  <strong>{currentSong.musicName}</strong> - {currentSong.artistName}
                  <i onClick={() => addToPlaylist(currentSong)} className="fa-solid fa-plus ms-4" style={{ cursor: "pointer" }} title="add to playlist">
                    {
                      console.log(currentSong)

                    }
                  </i>
                </div>
                <audio className="mt-2" ref={audioRef} controls>
                  <source src={currentSong.audioUrl} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}
          </div>
        </div>
      )}

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
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </nav>

      {loading && <p className="loading-text">Loading music data...</p>}
    </>
  );
}

export default Header;
