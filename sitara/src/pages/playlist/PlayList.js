import axios from 'axios';
import { useState, useEffect, useRef } from "react";
import './PlayList.css';  

function PlayList() {
    const [data, setData] = useState([]);
    const [currentSong, setCurrentSong] = useState(null);
    const audioRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/playList/getAllPlayList");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const playSong = (songUrl) => {
        if (audioRef.current) {
            if (currentSong === songUrl) {
                audioRef.current.pause();
                setCurrentSong(null);
            } else {
                audioRef.current.src = songUrl;
                audioRef.current.play();
                setCurrentSong(songUrl);
            }
        }
    };

    return (
        <div className="playlist-container">
            <h2 className="playlist-title">🎵 Your Playlist 🎵</h2>
            <table className="playlist-table">
                <tbody>
                    {data.length > 0 ? (
                        data.map((item, index) => (
                            <tr key={index} className="playlist-row">
                                <td className="track-number">{index + 1}</td>
                                <td className="song-details">
                                    <img src={item.imageUrl} alt={item.musicName} className="song-image" />
                                    <div>
                                        <span className="song-title">{item.musicName}</span>
                                        <br />
                                        <button className="play-btn" onClick={() => playSong(item.audioUrl)}>
                                            {currentSong === item.audioUrl ? "⏸ Pause" : "▶ Play"}
                                        </button>
                                    </div>
                                </td>
                                <td className="song-duration">{item.duration}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="no-music">No music available</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <audio ref={audioRef} controls style={{ display: 'none' }} />
        </div>
    );
}

export default PlayList;
