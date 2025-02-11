import './TrendingSongs.css'; // Import custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
const TrendingSongs = () => {
  const [data, setData] = useState(null);
  const [elm, setElm] = useState(7);
  const [showModal, setShowModal] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null); // Reference to the single <audio> element

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/TrendingSongs/getAllTrendingSongs");
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
      {
        data && data.length > 0 ? (<div className="container mt-5 trending-songs lato-regular-table">
          <h2 className="text-left mb-4 lato-bold">
            Trending <span className="text-gradient">Songs</span>
          </h2>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  {/* <th>Release Date</th> */}
                  <th className='text-center'>Album</th>
                  <th></th>
                  {/* <th>Time</th> */}
                </tr>
              </thead>
              <tbody>
                {data.slice(0, elm).map((song, index) => (
                  <tr key={song.musicId}   onClick={() => handleSongClick(song)}>
                    <td>{`#${index + 1}`}</td>
                    <td>
                      <img src={song.imageUrl} alt={song.musicName} className="song-image" />
                      <span className="ps-3">{song.musicName}</span>
                    </td>
                    {/* <td>{song.releaseDate}</td> */}
                    <td className='text-center'>{song.artistName}</td>
                    <td>
                      <FontAwesomeIcon icon={faHeart} className="heart-icon" />
                    </td>
                    <td>{song.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {
            elm === 7 ? (<div className="text-center mt-3">
              <button onClick={() => setElm(data.length)} className="btn bg-dark text-white"><span className='pe-2'>+</span>View All</button>
            </div>) : <></>
          }
        </div>) : <div></div>
      }
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
};

export default TrendingSongs;
