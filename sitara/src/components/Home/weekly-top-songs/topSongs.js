import React from 'react'
import whatever_it_takes from '../../../images/imagine-dragons.png';
import skyllfall from '../../../images/skyfall.png';
import superman from '../../../images/eminem.jpeg';
import softcore from '../../../images/softcore.jpeg';
import lonilest from '../../../images/loneliest.jpeg';
import './topSongs.css';


function TopSongs() {
  const songs = [
    {
      title: "Whatever It Takes",
      artist: "Imagine Dragons",
      image: whatever_it_takes
    },
    {
      title: "Skyfall",
      artist: "Adele",
      image: skyllfall
    },
    {
      title: "Superman",
      artist: "Eminem",
      image: superman
    },
    {
      title: "Softcore",
      artist: "The Neighborhood",
      image: softcore
    },
    {
      title: "The Loneliest",
      artist: "Måneskin",
      image: lonilest
    },
  ];

  return (
    <div className="lato-regular container mt-5">
      <h3 className="text-white fs-2" style={{ fontWeight: "bolder" }}>
        Weekly Top <span className="text-pink">Songs</span>
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
        <div className="col-md-2 col-sm-6 mb-4 d-flex align-items-center justify-content-center">
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
        <div className="col-md-2 col-sm-6 mb-4 d-flex align-items-center justify-content-center">
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
  );

}

export default TopSongs;
