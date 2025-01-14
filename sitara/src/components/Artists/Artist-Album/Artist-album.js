import React from 'react'
import './Artist-album.css';
import Superman from '../../../images/Artists-Album/The-Eminem-Show.jpeg';
import Encore from '../../../images/Artists-Album/encore.jpeg';
import MusicToBeMurdered from '../../../images/Artists-Album/music-to-be-murdered.jpeg';
import TheSlimShady from '../../../images/Artists-Album/eminem-slim-shady.jpeg';
import Recovery from '../../../images/Artists-Album/recovery.jpeg';




function ArtistTopAlbums() {
    
 const songs = [
        {
            title: "The Eminem Show",
            Year: "2002",
            image: Superman
        },
        {
            title: "Encore",
            Year: "2004",
            image: Encore
        },
        {
            title: "Music To be Murd...",
            Year: "2020",
            image: MusicToBeMurdered
        },
        {
            title: "Recovery",
            Year: "2010",
            image: Recovery
        },
        {
            title: "Eminem the Slim...",
            Year: "1999",
            image: TheSlimShady
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
                      {song.Year}
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

export default ArtistTopAlbums;