import React, { useState, useEffect, useRef } from 'react';
import './mood-playlist.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepForward, faStepBackward, faRedo, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

function MoodPlaylist() {
  const [data, setData] = useState(null);
  const [elm, setElm] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const [albumSongs, setAlbumSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songIndex, setSongIndex] = useState(null);
  const [isLoop, setIsLoop] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1.0);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/MoodPlaylist/getAllMoodPlaylist");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const updateDuration = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", updateDuration);

    audio.addEventListener("ended", () => {
      if (!isLoop) {
        handleNextSong(); // Only auto play the next song if loop is off
      } else {
        playSong(songIndex); // Replay the current song if loop is on
      }
    });

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", () => {});
    };
  }, [songIndex, isLoop]);

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleAlbumClick = (album) => {
    const parsedSongs = JSON.parse(album.albumSongs);
    setAlbumSongs(parsedSongs);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentSong(null);
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const playSong = (index) => {
    if (albumSongs && albumSongs[index] && albumSongs[index].audioUrl) {
      const audio = audioRef.current;
      audio.pause(); // Pause the current song if playing
      audio.load();  // Reset the audio element

      // Set the new audio source and play the song once ready
      audio.src = albumSongs[index].audioUrl;

      audio.addEventListener('canplaythrough', () => {
        audio.play()
          .then(() => {
            setCurrentSong(albumSongs[index]);
            setSongIndex(index);
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Error playing the song:", error);
          });
      });
    } else {
      console.error("Error: No audio URL available for this song");
    }
  };

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNextSong = () => {
    let newIndex = isLoop ? songIndex : (songIndex + 1) % albumSongs.length;
    playSong(newIndex);
  };

  const handlePrevSong = () => {
    let newIndex = isLoop ? songIndex : (songIndex - 1 + albumSongs.length) % albumSongs.length;
    playSong(newIndex);
  };

  const handleLoop = () => {
    setIsLoop(!isLoop);
  };

  const handleSeek = (e) => {
    const newTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = newTime;
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    audioRef.current.volume = e.target.value;
  };

  return (
    <>
      {data && data.length > 0 ? (
        <div className="lato-regular container mt-5">
          <h3 className="text-white fs-2" style={{ fontWeight: "bolder" }}>
            Mood <span className="text-pink">Playlist</span>
          </h3>
          <div className="row d-none d-sm-flex mt-4">
            {data.slice(0, elm).map((playlist, index) => (
              <div key={index} className="col-md-2 col-sm-6 mb-4" onClick={() => handleAlbumClick(playlist)}>
                <div className="card bg-dark text-light h-100">
                  <img
                    src={playlist.imageUrl}
                    className="card-img-top p-2"
                    alt={playlist.albumName}
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="card-body text-center">
                    <p className="card-title fw-bold" style={{ fontSize: "20px" }}>
                      {playlist.albumName}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {elm === 5 ? (
              <div className="col-md-2 col-sm-6 mb-4 d-flex flex-column align-items-center justify-content-center">
                <button
                  onClick={() => setElm(data.length)}
                  className="view-all-btn btn btn-dark rounded-circle d-flex flex-column align-items-center justify-content-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    fontSize: "30px",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  <span>+</span>
                </button>
                <div className="text-white mt-2" style={{ fontSize: "14px" }}>
                  View All
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <div>no data</div>
      )}

      {showModal && (
        <div className="modal show d-block" style={{ background: "rgba(0, 0, 0, 0.7)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content" style={{ background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)", borderRadius: "15px", color: "white", textAlign: "center" }}>
              <div className="modal-header border-0">
                <h5 className="modal-title">Album Songs</h5>
                <button className="btn-close btn-light" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                {currentSong && (
                  <p>
                    Now Playing: <strong>{currentSong.musicName}</strong> | Duration: <strong>{formatTime(duration)}</strong>
                  </p>
                )}
                <div className="table-responsive">
                  <table className="table table-dark table-hover text-center align-middle">
                    <tbody>
                      {albumSongs.map((song, index) => (
                        <tr key={index} onClick={() => playSong(index)} style={{ cursor: "pointer" }}>
                          <td>{index + 1}</td>
                          <td><img src={song.imageUrl} width={90} alt={song.musicName}/></td>
                          <td>{song.musicName}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {currentSong && (
                  <div className="modal-footer d-flex flex-column align-items-center w-100">
                    <div className="d-flex align-items-center justify-content-between w-100">
                      <span>{formatTime(audioRef.current.currentTime)}</span>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={progress}
                        onChange={handleSeek}
                        className="form-range flex-grow-1 mx-2"
                      />
                      <span>{formatTime(duration)}</span>
                    </div>

                    <div className="d-flex align-items-center justify-content-center w-100 mt-2">
                      <button className="btn btn-light mx-2" onClick={handleLoop}>
                        <FontAwesomeIcon icon={faRedo} color={isLoop ? 'green' : 'white'} />
                      </button>
                      <button className="btn btn-light mx-2" onClick={handlePrevSong}><FontAwesomeIcon icon={faStepBackward} /></button>
                      <button className="btn btn-light mx-2" onClick={handlePlayPause}><FontAwesomeIcon icon={isPlaying ? faPause : faPlay} /></button>
                      <button className="btn btn-light mx-2" onClick={handleNextSong}><FontAwesomeIcon icon={faStepForward} /></button>
                    </div>

                    <div className="d-flex align-items-center justify-content-between w-100 mt-2">
                      <FontAwesomeIcon icon={faVolumeUp} />
                      <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} className="form-range mx-2" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MoodPlaylist;
