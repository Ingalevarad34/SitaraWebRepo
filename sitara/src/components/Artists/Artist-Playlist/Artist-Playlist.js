import React from 'react'
import './Artist-Playlist.css'
import FullCollection from '../../../images/Artists-Playlist/full-collection.png';
import BestOfEminem from '../../../images/Artists-Playlist/best-of-eminem.png';
import OldSongs from '../../../images/Artists-Playlist/old-songs.png';
import FansFavourite from '../../../images/Artists-Playlist/fans-favorite.png';
import NewRelease from '../../../images/Artists-Playlist/new-relese.png';


function ArtistPlaylist() {

    const songs = [
        {
            title: "Full Collection",
            image: FullCollection
        },
        {
            title: "Best of Eminem",
            image: BestOfEminem
        },
        {
            title: "Old Songs",
            image: OldSongs
        },
        {
            title: "Fan's Favourite",
            image: FansFavourite
        },
        {
            title: "New Releases",
            image: NewRelease
        },
    ];

  
    return (
        <div className="lato-regular container mt-5">
          <h3 className="text-white fs-2" style={{ fontWeight: "bolder" }}>
            Artist <span className="text-pink">Playlist</span>
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


export default ArtistPlaylist;
