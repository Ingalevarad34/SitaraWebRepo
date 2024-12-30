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
        <>

            <div className="lato-regular container mt-5">
                <h3 className="text-white fs-2"style={{ fontWeight : "bolder"}}>
                    New Relese <span className="text-pink">Songs</span>
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
                                    <h6 className="card-title "style={{ fontSize : "20px" }}>{song.title}</h6>
                                    <p className="card-text fs-7"style={{ fontWeight: "300" }}>{song.artist}</p>

                                </div>
                            </div>
                        </div>
                    ))}
                    {/* View All Button */}
                    <div className=" col-md-2 col-sm-6 mb-4 d-flex align-items-center justify-content-center">
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
                    </div>
                </div>
            </div>



        </>

    );

}

export default NewReleseSongs;