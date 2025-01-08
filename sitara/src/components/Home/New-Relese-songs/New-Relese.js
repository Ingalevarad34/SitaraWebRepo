import React from 'react'
import Time from '../../../images/time.jpeg'
import jazzek from '../../../images/112.png';
import WeDontCare from '../../../images/we-dont-care.jpeg';
import WhoAmI from '../../../images/who-am-i.jpeg';
import xxamerica from '../../../images/baxio.jpeg'
import './New-Relese.css';

function NewReleseSongs() {

    const songs = [
        {
            title: "Time",
            artist: "Lucaino",
            image: Time
        },
        {
            title: "112",
            artist: "jazzek",
            image: jazzek
        },
        {
            title: "We Don't Care",
            artist: "Kyanu & Dj Gullum",
            image: WeDontCare
        },
        {
            title: "Who I Am",
            artist: "Alan Walker & Elias",
            image: WhoAmI
        },
        {
            title: "Baixo",
            artist: "XXAnteria",
            image: xxamerica
        },
    ];


    return (
        <div className="lato-regular container mt-5">
            <h3 className="text-white fs-2" style={{ fontWeight: "bolder" }}>
                New Relese <span className="text-pink">Songs</span>
            </h3>
            {/* For larger screens: Grid layout */}
            <div className="row d-none d-sm-flex mt-4">
                {songs.map((song, index) => (
                    <div key={index} className="col-md-2 col-sm-6 mb-4">
                        <div className="card bg-dark text-light h-100">
                            <img
                                src={song.image}
                                className="card-img-top p-2"
                                alt={song.title}
                                style={{ borderRadius: "10px" }}
                            />
                            <div className="card-body text-center">
                                <p className="card-title fw-bold" style={{ fontSize: "20px" }}>
                                    {song.title}
                                </p>
                                <p className="card-text fs-7" style={{ fontWeight: "300" }}>
                                    {song.artist}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
                {/* View All Button */}
                <div className="col-md-2 col-sm-6 mb-4 d-flex flex-column align-items-center justify-content-center">
                    <button
                        className="view-all-btn btn btn-dark rounded-circle d-flex flex-column align-items-center justify-content-center"
                        style={{
                            width: "60px",
                            height: "60px",
                            fontSize: "30px",
                            color: "#fff",
                            fontWeight:"bold"
                        }}
                    >
                        <span>+</span>
                    
                    </button>
                    <div className='text-white mt-2' style={{fontSize:"14px"}}>View All</div>
                </div>
            </div>
            {/* For smaller screens: Horizontal scroll */}
            <div className="d-sm-none mt-4 horizontal-scroll">
                {songs.map((song, index) => (
                    <div key={index} className="card bg-dark text-light me-3">
                        <img
                            src={song.image}
                            className="card-img-top p-2"
                            alt={song.title}
                            style={{ borderRadius: "10px" }}
                        />
                        <div className="card-body text-center">
                            <p className="card-title fw-bold" style={{ fontSize: "20px" }}>
                                {song.title}
                            </p>
                            <p className="card-text fs-7" style={{ fontWeight: "300" }}>
                                {song.artist}
                            </p>
                        </div>
                    </div>
                ))}
                {/* View All Button */}
                <div className="col-md-2 col-sm-6 mb-4 d-flex flex-column align-items-center justify-content-center">
                    <button
                        className="view-all-btn btn btn-dark rounded-circle d-flex flex-column align-items-center justify-content-center"
                        style={{
                            width: "60px",
                            height: "60px",
                            fontSize: "30px",
                            color: "#fff",
                            fontWeight:"bold"
                        }}
                    >
                        <span>+</span>
                    
                    </button>
                    <div className='text-white mt-2' style={{fontSize:"14px"}}>View All</div>
                </div>
            </div>
        </div>
    );

}

export default NewReleseSongs;