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
        <div className="lato-regular container mt-5">
          <h3 className="text-white fs-2" style={{ fontWeight: "bolder" }}>
            Top <span className="text-pink">Albums</span>
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
                  fontWeight: "bold"
                }}
              >
                <span>+</span>
    
              </button>
              <div className='text-white mt-2' style={{ fontSize: "14px" }}>View All</div>
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
                  fontWeight: "bold"
                }}
              >
                <span>+</span>
    
              </button>
              <div className='text-white mt-2' style={{ fontSize: "14px" }}>View All</div>
            </div>
            
          </div>
        </div>
      );
}

export default TopAlbums;