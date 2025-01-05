import React from 'react'
import './top-albums.css'
import AdeleTwentyOne from '../../../images/adele-21.png';
import Scorpion from '../../../images/scorpion.jpeg';
import HarrysHouse from '../../../images/harrys-house.png';
import BornToDie from '../../../images/born-to-die.png';
import BeautyBehindMadness from '../../../images/beauty-behind-the-madness.png';



function TopAlbums() {
    
 const songs = [
        {
            title: "Adele 21",
            artist: "Adele",
            image: AdeleTwentyOne
        },
        {
            title: "Scorpion",
            artist: "Drake",
            image: Scorpion
        },
        {
            title: "Harry's House",
            artist: "Harry Styles",
            image: HarrysHouse
        },
        {
            title: "Born To Die",
            artist: "Lana Dey Ray",
            image: BornToDie
        },
        {
            title: "Beauty Behind the...",
            artist: "The Weekend",
            image: BeautyBehindMadness
        },
    ];


    return (
        <>

            <div className="lato-regular container mt-5">
                <h3 className="text-white fs-2"style={{ fontWeight : "bolder"}}>
                    Top <span className="text-pink">Albums</span>
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

export default TopAlbums;