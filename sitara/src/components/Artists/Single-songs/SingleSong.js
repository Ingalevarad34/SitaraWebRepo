import React from 'react'
import './SingleSong.css';
import LaceIt from '../../../images/lace-it.jpeg';
import Realesc from '../../../images/realesc.jpeg';
import FromTheD2Th from '../../../images/eminem-snoop.png';
import KillShort from '../../../images/killshot.jpeg';
import NineOneOne from '../../../images/911.jpeg';




function SingleSongs() {
    
 const songs = [
        {
            title: "Lace It",
            Year: "2023",
            image: LaceIt
        },
        {
            title: "Realast",
            Year: "2022",
            image: Realesc
        },
        {
            title: "From The D 2 Th...",
            Year: "2023",
            image: FromTheD2Th
        },
        {
            title: "911",
            Year: "2022",
            image: NineOneOne
        },
        {
            title: "The Killshot",
            Year: "2018",
            image: KillShort
        },
    ];


    return (
        <div className="lato-regular container mt-5">
          <h3 className="text-white fs-2" style={{ fontWeight: "bolder" }}>
            Single <span className="text-pink">Songs</span>
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

export default SingleSongs;