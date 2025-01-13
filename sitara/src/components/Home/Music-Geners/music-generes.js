import React from "react";
import RapTracks from '../../../images/rap-tracks.jpeg';
import PopTracks from '../../../images/pop-tracks.jpeg';
import RockTrcks from '../../../images/rock-tracks.jpeg';
import ClassicTracks from '../../../images/classic-tracks.jpeg';
import './music-generes.css';




function MusicGenres() {

  return (
    <div className="lato-regular container mt-5">
      <h2 className="text-white fs-2">
        Music <span className="text-pink">Genres</span>
      </h2>
      <div className="d-flex align-items-center mt-4">
        <div className="row flex-grow-1">
          <div className="col-md-3">
            <div className="card bg-dark text-white">
              <img
                src={RapTracks}
                className="card-img"
                alt="Rap Tracks"
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-img-overlay d-flex align-items-end">
                <h5 className="card-title">Rap Tracks</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-dark text-white">
              <img
                src={PopTracks}
                className="card-img"
                alt="Pop Tracks"
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-img-overlay d-flex align-items-end">
                <h5 className="card-title">Pop Tracks</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-dark text-white">
              <img
                src={RockTrcks}
                className="card-img"
                alt="Rock Tracks"
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-img-overlay d-flex align-items-end">
                <h5 className="card-title">Rock Tracks</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-dark text-white">
              <img
                src={ClassicTracks}
                className="card-img"
                alt="Classic Tracks"
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-img-overlay d-flex align-items-end">
                <h5 className="card-title">Classic Tracks</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div
            className="rounded-circle d-flex justify-content-center align-items-center"
            style={{
              width: "60px",
              height: "60px",
              backgroundColor: "#333",
              color: "white",
              fontSize: "30px",
              fontWeight: "bold",
              marginLeft: "50px"
            }}
          >
            +
          </div>
          <p className="mt-2 ms-5 text-white">View All</p>
        </div>
        {/* <div className="ms-3">
          <button className="btn btn-dark text-white">View All</button>
        </div> */}
      </div>
    </div>
  );
};




export default MusicGenres;


