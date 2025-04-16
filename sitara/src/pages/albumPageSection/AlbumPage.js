import React, { useState, useEffect } from 'react';
import './AlbumPage.css';
import Header from '../../components/Header/Header.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TrendingImg from '../../images/album/trendingimg.png'
import {

    faCirclePlay,
    faPlay,
    faPause,
    faStepForward,
    faStepBackward,
    faShuffle,
    faVolumeUp,

} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import Footer from '../../components/Footer/Footer.js';

function AlbumPage() {
    const [musicData, setMusicData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentAudio, setCurrentAudio] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [selectedSong, setSelectedSong] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [songIndex, setSongIndex] = useState(null);
    const [isShuffle, setIsShuffle] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1.0);
    // const audioRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/all-songs");
                setMusicData(response.data);
                // console.log(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const playSong = (index) => {
        if (currentAudio) currentAudio.pause();

        const song = musicData[index];
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
            newIndex = Math.floor(Math.random() * musicData.length);
        } else {
            newIndex = (songIndex + 1) % musicData.length;
        }
        playSong(newIndex);
    };

    const handlePrevSong = () => {
        let newIndex;
        if (isShuffle) {
            newIndex = Math.floor(Math.random() * musicData.length);
        } else {
            newIndex = (songIndex - 1 + musicData.length) % musicData.length;
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
        if (musicData.length > 0) {
            playSong(0);
        }
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <>
            <div className="container-fluid text-white" style={{ background: 'linear-gradient(to right, #1472dc, #2a526c)' }}>
                <Header />
                <div className="row align-items-center mt-5">
                    <div className="col-md-3">
                        <img
                            src={TrendingImg}
                            alt="Album"
                            className="img-fluid rounded albumTopImg"
                            style={{ marginLeft: "50px" }}
                        />
                    </div>
                    <div className="col-md-9">
                        <h1 className="display-5 " style={{ fontWeight: "500" }}>Trending Album Songs <span className="text-danger">Mix</span></h1>
                        <p className="text-light">Your personalized music collection</p>
                        <div className="d-flex align-items-center mb-3">
                            <span>{musicData.length} songs</span>
                            <span className="mx-2">&bull;</span>
                            <span>~{Math.floor(musicData.length * 3)}m</span>
                        </div>
                        <div className='btn-album' onClick={playAllSongs} style={{ cursor: "pointer" }}>
                            <span className='me-2' style={{ fontSize: "20px", fontWeight: "600" }}>Play All</span>
                            <FontAwesomeIcon icon={faCirclePlay} style={{ color: "#ff007f", fontSize: "50px" }} />
                        </div>
                    </div>
                </div>

                <div className="container-fluid my-5 p-4 rounded text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
                    <div className="table-responsive">
                        <table className="table table-dark table-hover text-center align-middle">
                            <thead>
                                <tr>
                                    <th style={{ width: "10%" }}>#</th>
                                    <th style={{ width: "10%" }}>Title</th>
                                    <th style={{ width: "25%" }}>Artist</th>
                                    <th style={{ width: "25%" }}>Album</th>
                                </tr>
                            </thead>
                            <tbody>
                                {musicData.slice(0, 20).map((song, index) => (
                                    <tr key={index} onClick={() => playSong(index)}>
                                        <td>{`#${index + 1}`}</td>
                                        <td className="text-start">
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src={song.imageUrl}
                                                    alt={song.musicName}
                                                    className="rounded me-3"
                                                    style={{ width: "50px", height: "50px", objectFit: "cover" }}
                                                />
                                                <span className="fw-bold">{song.musicName}</span>
                                            </div>
                                        </td>
                                        <td>{song.artistName}</td>
                                        <td>{song.albumName || song.musicName}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {showModal && selectedSong && (
                    <div className="modal show d-block" style={{ background: "rgba(0, 0, 0, 0.7)" }}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content" style={{ background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)", borderRadius: "15px", color: "white", textAlign: "center" }}>
                                <div className="modal-header border-0">
                                    <h5 className="modal-title">{selectedSong.musicName}</h5>
                                    <button className="btn-close btn-light" onClick={closeModal}></button>
                                </div>
                                <div className="modal-body">
                                    <img src={selectedSong.imageUrl} alt={selectedSong.musicName} className="rounded mb-3" style={{ width: "300px", height: "200px", backgroundSize: "cover" }} />

                                    <div className="d-flex align-items-center justify-content-center mb-2">
                                        <span>{formatTime(progress * duration / 100)}</span>
                                        <input
                                            type="range"
                                            value={progress}
                                            onChange={handleSeek}
                                            className="form-range w-75 mx-2"
                                        />
                                        <span>{formatTime(duration)}</span>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex">
                                            <button className="btn btn-light mx-2" onClick={handleShuffle}>
                                                <FontAwesomeIcon icon={faShuffle} style={{ color: isShuffle ? "blue" : "black" }} />
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
            <Footer />
        </>

    );
}

export default AlbumPage;
