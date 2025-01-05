import React from 'react'
import './mood-playlist.css';
import SadPlaylist from '../../../images/sad-songs.png';
import ChillPlaylist from '../../../images/chill-songs.png';
import WorkOutPlaylist from '../../../images/work-songs.png';
import LovePlaylist from '../../../images/love-songs.png';
import HappyPlayllist from '../../../images/happy-songs.png';


function MoodPlaylist() {
          
     const songs = [
            {
                title: "Sad Playlist",
                image: SadPlaylist
            },
            {
                title: "Chill Playlist",
                image: ChillPlaylist
            },
            {
                title: "Workout Playlist",
                image: WorkOutPlaylist
            },
            {
                title: "love Playlist",
                image: LovePlaylist
            },
            {
                title: "Happy Playlist",
                image: HappyPlayllist
            },
        ];
    
    
        return (
            <>
    
                <div className="lato-regular container mt-5">
                    <h3 className="text-white fs-2"style={{ fontWeight : "bolder"}}>
                        Mood <span className="text-pink">Playlist</span>
                    </h3>
                    <div className="row mt-4">
                        {songs.map((song, index) => (
                            <div key={index} className=" col-md-2 col-sm-6 mb-4">
                                <div className="card bg-dark text-light h-100 ">
                                    <img
                                        src={song.image}
                                        className="card-img-top p-2"
                                        alt={song.title}
                                        style={{ borderRadius: "10px" }}
                                    />
                                    <div className="card-body text-center">
                                        <h6 className="card-title "style={{ fontSize : "18px" }}>{song.title}</h6>
                                        <p className="card-text fs-7"style={{ fontWeight: "300" }}>{song.artist}</p>
    
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* View All Button */}
    
                        <div className="mt-5 col-md-2">
                        <div
                            className=" rounded-circle d-flex justify-content-center align-items-center mt-2"
                            style={{
                                width: "60px",
                                height: "60px",
                                backgroundColor: "#333",
                                color: "white",
                                fontSize: "30px",
                                fontWeight: "bold",
                                marginLeft: "50px",
                                marginTop: "20px",
                            }}
                        >
                            +
                        </div>
                        <p className="mt-2 text-white ms-5">View All</p>
                    </div>
    
                        {/* <div className=" col-md-2 col-sm-6 mb-4 d-flex align-items-center justify-content-center">
                            <button
                                className="view-all-btn btn btn-dark rounded-circle d-flex flex-column align-items-center justify-content-center"
                                style={{
                                    width: "90px",
                                    height: "90px",
                                    fontSize: "14px",
                                    color: "#fff",
                                }}
                            >
                                <span className="fs-4">+</span>
                                View All
                            </button>
                        </div> */}
    
                        
                    </div>
                </div>
    
    
    
            </>
    
        );
    
    }
    

    export default MoodPlaylist;
