import axios from 'axios';
import { useState, useEffect, useRef } from "react";
import './WishList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';


function WishList() {
    const [data, setData] = useState([]);
    const [currentSong, setCurrentSong] = useState(null);
    const audioRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/wishList-songs");
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
    const addToPlaylist = async (song) => {
        try {
            const response = await axios.post("http://localhost:5000/api/playList-songs", [song]); // Wrap song in an array
            console.log("Song added to playlist:", response.data);
        } catch (error) {
            console.error("Error adding song to playlist:", error);
        }
    };
    return (
        <div className="playlist-container">
            <h2 className="playlist-title">🎵 Your WishList 🎵</h2>
            <table className="playlist-table">
                <tbody>
                    {data.length > 0 ? (
                        data.map((item, index) => (
                            <tr key={index} className="playlist-row">
                                <td className="track-number">{index + 1}</td>
                                <td className="song-details">
                                    <img src={item.imageUrl} alt={item.musicName} className="song-image" />
                                    <div>
                                        <span className="song-title">{item.musicName}</span><span> By </span><span className="song-title" style={{ fontWeight: "300", color: "#ee10b0" }}>{item.artistName}</span>
                                        <br />
                                        <button className="btn btn-outline-primary mt-2" onClick={() => playSong(item.audioUrl)}>
                                            {currentSong === item.audioUrl ? <FontAwesomeIcon icon={faPause} style={{ color: "#ffffff", }} /> : <FontAwesomeIcon icon={faPlay} style={{ color: "#ffffff", }} />}
                                        </button>
                                        <i onClick={() => addToPlaylist(item)} className="fa-solid fa-plus ms-4" style={{ cursor: "pointer" }} title="add to playlist">
                                            {
                                                // console.log(item)

                                            }
                                        </i>
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

export default WishList;
