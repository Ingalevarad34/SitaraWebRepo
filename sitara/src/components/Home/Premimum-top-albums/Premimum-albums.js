import React from 'react'
import './Premimum-albums.css';
import IGotHeven from '../../../images/Top-Albums/i-got-heven.jpeg';
import Saviors from '../../../images/Top-Albums/saviors.jpeg';
import LossOfLife from '../../../images/Top-Albums/loss-of-life.png';
import AllQuitOnTheEast from '../../../images/Top-Albums/all-quit-on.png';
import LittleRope from '../../../images/Top-Albums/little-rope.png';

function Premimum_TopAlbums(params) {
     const songs = [
            {
                title: "I got Heven",
                artist: "Mannequin",
                image: IGotHeven
            },
            {
                title: "Saviours",
                artist: "Green Day",
                image: Saviors
            },
            {
                title: "Loss of Life",
                artist: "MGMT",
                image: LossOfLife
            },
            {
                title: "All Quit on the...",
                artist: "The Libreritness",
                image: AllQuitOnTheEast
            },
            {
                title: "Little Rope",
                artist: "Sleater-Kinney",
                image: LittleRope
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
    
    
    export default Premimum_TopAlbums;
