import React, { useState, useEffect, useRef } from "react";
import "./topSongs.css";
import axios from "axios";

function TopSongs() {
  const [data, setData] = useState(null);
  const [elm, setElm] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null); // Reference to the single <audio> element

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/weeklyTopSongs/getAllweeklyTopSongs");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const handleSongClick = (song) => {
    setCurrentSong(song);
    setShowModal(true);

    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.src = song.audioUrl;
        audioRef.current.load(); // Reload the audio source so it starts from the beginning
        audioRef.current.play().then(() => setIsPlaying(true)).catch(error => console.error("Playback error:", error));
      }
    }, 100); // Delay ensures the audio element is rendered before setting source
  };

  const closeModal = () => {
    setShowModal(false);
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };
  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  return (
    <>
      {data && data.length > 0 ? (
        <div className="lato-regular container mt-5">
          <h3 className="text-white fs-2" style={{ fontWeight: "bolder" }}>
            Weekly Top <span className="text-pink">Songs</span>
          </h3>

          <div
            className="mt-4 d-flex"
            style={{
              overflowX: "auto",
              whiteSpace: "nowrap",
              scrollbarWidth: "none",
              display: "flex",
              gap: "16px",
            }}
          >
            {data.slice(0, elm).map((song, index) => (
              <div
                key={index}
                className="col-md-2 col-sm-6 mb-4"
                style={{ flex: "0 0 auto", width: "200px", cursor: "pointer" }}
                onClick={() => handleSongClick(song)}
              >
                <div className="card bg-dark text-light h-100">
                  <img
                    src={song.imageUrl}
                    className="card-img-top img-container p-2"
                    alt={song.musicName}
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="card-body text-center text-wrap">
                    <p className="card-title fw-bold" style={{ fontSize: "20px" }}>{song.musicName}</p>
                    <p className="card-text fs-7" style={{ fontWeight: "300" }}>{song.artistName}</p>
                  </div>
                </div>
              </div>
            ))}
            {elm === 5 && (
              <div
                onClick={() => setElm(data.length)}
                className="d-flex flex-column align-items-center justify-content-center"
                style={{ flex: "0 0 auto", width: "200px", cursor: "pointer" }}
              >
                <button
                  className="view-all-btn btn btn-dark rounded-circle d-flex flex-column align-items-center justify-content-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    fontSize: "30px",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  +
                </button>
                <div className="text-white mt-2" style={{ fontSize: "14px" }}>View All</div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>No data</div>
      )}

      {showModal && (
        <div className="modal show d-block" style={{ background: "rgba(0, 0, 0, 0.7)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                borderRadius: "15px",
                color: "white",
                textAlign: "center",
              }}
            >
              <div className="modal-header border-0">
                {/* <h5 className="modal-title">Now Playing</h5> */}
                <button className="btn-close btn-light" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                {currentSong && (
                  <>
                    <p>
                      Now Playing :   <strong>{currentSong.musicName}</strong> By {currentSong.artistName}
                    </p>
                    <div className="mb-4"><img src={currentSong.imageUrl} style={{ height: "190px", width: "230px" }} /></div>
                    {/* SINGLE AUDIO ELEMENT WITH CONTROLS */}
                    <audio ref={audioRef} controls autoPlay />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TopSongs;
