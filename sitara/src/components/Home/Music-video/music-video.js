import React, { useState, useEffect, useRef } from "react";
import "./music-video.css";
import axios from "axios";

function MusicVideo() {
    const [data, setData] = useState(null);
    const [elm, setElm] = useState(6);
    const [showModal, setShowModal] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);
    const videoRef = useRef(null); // Ref for video element
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLooping, setIsLooping] = useState(false);
    const [volume, setVolume] = useState(1);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/musicVideo-songs");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const handleVideoClick = (video) => {
        setCurrentVideo(video);
        setShowModal(true);
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.src = video.videoUrl;
                videoRef.current.load();
                videoRef.current.play();
                setIsPlaying(true);
            }
        }, 100);
    };

    const closeModal = () => {
        setShowModal(false);
        if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleLoop = () => {
        if (videoRef.current) {
            videoRef.current.loop = !isLooping;
            setIsLooping(!isLooping);
        }
    };

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
            setVolume(newVolume);
        }
    };

    const handleProgressChange = (e) => {
        const newTime = e.target.value;
        if (videoRef.current) {
            videoRef.current.currentTime = newTime;
            setProgress(newTime);
        }
    };

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            const updateProgress = () => setProgress(video.currentTime);
            video.addEventListener("timeupdate", updateProgress);

            return () => {
                if (video) {
                    video.removeEventListener("timeupdate", updateProgress);
                }
            };
        }
    }, [showModal]);

    return (
        <>
            {data && data.length > 0 ? (
                <div className="container my-5">
                    <h2 className="lato-regular text-white">
                        Music <span className="text-pink">Video</span>
                    </h2>
                    <div className="row mt-4">
                        {data.slice(0, elm).map((video, index) => (
                            <div key={index} className="col-md-4 mb-3">
                                <div
                                    className="card bg-dark text-white border-0 mb-4"
                                    style={{ height: "250px", cursor: "pointer" }}
                                    onClick={() => handleVideoClick(video)}
                                >
                                    <img
                                        src={video.imageUrl}
                                        alt={video.musicName}
                                        className="card-img-top p-2"
                                        style={{ height: "150px", objectFit: "cover" }}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="video-title card-title mb-1">{video.musicName}</h5>
                                        <div className="d-flex justify-content-between">
                                            <p className="video-artist card-text">{video.artistName}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {
                            elm === 6 ? (<div onClick={() => setElm(data.length)} className="text-center">
                                <div
                                    className=" rounded-circle d-flex justify-content-center align-items-center mt-2"
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                        backgroundColor: "#333",
                                        color: "white",
                                        fontSize: "30px",
                                        fontWeight: "bold",
                                        marginLeft: "638px"
                                    }}
                                >
                                    +
                                </div>
                                <p className="mt-2 text-white ms-5">View All</p>
                            </div>) : <div></div>
                        }
                    </div>
                </div>
            ) : null}

            {showModal && currentVideo && (
                <div className="modal show d-block" style={{ background: "rgba(0, 0, 0, 0.7)" }}>
                    <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "1000px" }}>
                        <div
                            className="modal-content"
                            style={{
                                background: "rgba(255, 255, 255, 0.1)",
                                backdropFilter: "blur(10px)",
                                borderRadius: "15px",
                                color: "white",
                                textAlign: "center",
                                width: "1000px",
                                height: "675px"
                            }}
                        >
                            <div className="modal-header border-0">
                                Now Playing :   <strong className="ms-3 me-2">{currentVideo.musicName}</strong> By {currentVideo.artistName}
                                {/* <h5 className="modal-title">{currentVideo.musicName}</h5> */}
                                <button className="btn-close btn-light" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <video ref={videoRef} width="100%" controls autoPlay />
                                <div className="mt-3">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default MusicVideo;
