import React, { useState, useRef } from 'react';
import './Album.css';
import Header from '../Header/Header.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCirclePlay, faPlay, faPause, faTimes, faStepForward, faStepBackward, faShuffle, faVolumeUp, faVolumeDown } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from "react-router-dom";

function Album() {
    const location = useLocation();
    const { message } = location.state || {};
    const artistAlbumArray = JSON.parse(message.artistAlbum);

    const [currentAudio, setCurrentAudio] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [selectedSong, setSelectedSong] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [songIndex, setSongIndex] = useState(null);
    const [isShuffle, setIsShuffle] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1.0); // Default volume
    const audioRef = useRef(null);

    const playSong = (index) => {
        if (currentAudio) {
            currentAudio.pause();
        }
        const song = artistAlbumArray[index];
        const newAudio = new Audio(song.audioUrl);
        newAudio.play();
        setCurrentAudio(newAudio);
        setSelectedSong(song);
        setShowModal(true);
        setIsPlaying(true);
        setSongIndex(index);

        newAudio.volume = volume;

        newAudio.addEventListener("timeupdate", () => {
            setProgress((newAudio.currentTime / newAudio.duration) * 100);
            setDuration(newAudio.duration);
        });

        newAudio.addEventListener("ended", handleNextSong);
    };

    const handlePlayPause = () => {
        if (currentAudio) {
            if (isPlaying) {
                currentAudio.pause();
                setIsPlaying(false);
            } else {
                currentAudio.play();
                setIsPlaying(true);
            }
        }
    };

    const handleNextSong = () => {
        let newIndex;
        if (isShuffle) {
            newIndex = Math.floor(Math.random() * artistAlbumArray.length);
        } else {
            newIndex = (songIndex + 1) % artistAlbumArray.length;
        }
        playSong(newIndex);
    };

    const handlePrevSong = () => {
        let newIndex;
        if (isShuffle) {
            newIndex = Math.floor(Math.random() * artistAlbumArray.length);
        } else {
            newIndex = (songIndex - 1 + artistAlbumArray.length) % artistAlbumArray.length;
        }
        playSong(newIndex);
    };

    const handleShuffle = () => {
        setIsShuffle(!isShuffle);
    };

    const closeModal = () => {
        if (currentAudio) {
            currentAudio.pause();
        }
        setShowModal(false);
        setIsPlaying(false);
    };

    const handleSeek = (e) => {
        const newTime = (e.target.value / 100) * duration;
        if (currentAudio) {
            currentAudio.currentTime = newTime;
        }
    };

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        setVolume(newVolume);
        if (currentAudio) {
            currentAudio.volume = newVolume;
        }
    };

    const playAllSongs = () => {
        playSong(0);
    };

    return (
        <div className="container-fluid text-white" style={{ background: 'linear-gradient(to right, #1472dc, #2a526c)' }}>
            <Header />
            <div className="row align-items-center mt-5">
                <div className="col-md-3">
                    <img src={message.imageUrl} alt="Trending Music" className="img-fluid rounded albumTopImg" style={{ marginLeft: "50px" }} />
                </div>
                <div className="col-md-9">
                    <h1 className="display-5">Trending songs <span className="text-danger">mix</span></h1>
                    <p className="text-light">{message.smallDesc}...</p>
                    <div className="d-flex align-items-center mb-3">
                        <span>{artistAlbumArray.length} songs</span>
                        <span className="mx-2">&bull;</span>
                        <span>1h 36m</span>
                    </div>
                    <div className='btn-album' onClick={playAllSongs} style={{ cursor: "pointer" }}>
                        <span className='me-2' style={{ fontSize: "20px", fontWeight: "600" }}>Play All</span>
                        <FontAwesomeIcon icon={faCirclePlay} style={{ color: "#ff007f", fontSize: "50px" }} />
                    </div>
                </div>
            </div>

            {/* Songs Table */}
            <div className="container-fluid my-5 p-4 rounded text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
                <div className="table-responsive"> {/* Makes the table scrollable on smaller screens */}
                    <table className="table table-dark table-hover text-center align-middle">
                        <thead>
                            <tr>
                                <th style={{ width: "10%" }}>#</th>  {/* Set width for first column */}
                                <th style={{ width: "10%" }}>Title</th>  {/* Set width for title column */}
                                <th style={{ width: "25%" }}>Artist</th>  {/* Set width for artist column */}
                                <th style={{ width: "25%" }}>Album</th>  {/* Set width for album column */}
                            </tr>
                        </thead>
                        <tbody>
                            {artistAlbumArray.map((album, index) => (
                                <tr key={index} onClick={() => playSong(index)}>
                                    <td>{`#${index + 1}`}</td>
                                    <td className="text-start">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src={album.imageUrl}
                                                alt={album.musicName}
                                                className="rounded me-3"
                                                style={{ width: "50px", height: "50px", objectFit: "cover" }}
                                            />
                                            <span className="fw-bold">{album.musicName}</span>
                                        </div>
                                    </td>
                                    <td>{album.artistName}</td>
                                    <td>{album.musicName}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


            {/* Modern Popup Modal */}
            {showModal && selectedSong && (
                <div className="modal show d-block" style={{ background: "rgba(0, 0, 0, 0.7)" }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content" style={{ background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)", borderRadius: "15px", color: "white", textAlign: "center" }}>
                            <div className="modal-header border-0">
                                <h5 className="modal-title">{selectedSong.musicName}</h5>
                                <button className="btn-close btn-light" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <img src={selectedSong.imageUrl} alt={selectedSong.musicName} className="img-fluid rounded mb-3" style={{ width: "200px", height: "200px" }} />

                                {/* Song Progress Bar */}
                                <div className="d-flex align-items-center justify-content-center">
                                    <input
                                        type="range"
                                        value={progress}
                                        onChange={handleSeek}
                                        className="form-range w-75 my-2"
                                    />
                                </div>

                                {/* Controls Row: Shuffle, Previous, Play/Pause, Next & Volume */}
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex">
                                        <button className="btn btn-light mx-2" onClick={handleShuffle}>
                                            <FontAwesomeIcon icon={faShuffle} style={{ color: isShuffle ? "green" : "white" }} />
                                        </button>
                                        <button className="btn btn-light mx-2" onClick={handlePrevSong}>
                                            <FontAwesomeIcon icon={faStepBackward} />
                                        </button>
                                        <button className="btn btn-light mx-2" onClick={handlePlayPause}>
                                            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                                        </button>
                                        <button className="btn btn-light mx-2" onClick={handleNextSong}>
                                            <FontAwesomeIcon icon={faStepForward} />
                                        </button>
                                    </div>

                                    {/* Volume Control with Sound Icon */}
                                    <div className="d-flex align-items-center">
                                        <FontAwesomeIcon icon={faVolumeUp} style={{ color: "white", marginRight: "10px" }} />
                                        <input
                                            type="range"
                                            min="0"
                                            max="1"
                                            step="0.01"
                                            value={volume}
                                            onChange={handleVolumeChange}
                                            className="form-range w-75 my-2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Album;
