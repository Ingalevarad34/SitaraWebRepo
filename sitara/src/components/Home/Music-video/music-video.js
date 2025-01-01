
import React from 'react';
import './music-video.css';
import Gossip from '../../../images/goosip.jpeg';
import ShapeOfYou from '../../../images/shape-of-you.jpeg';
import SomeOneLikeYou from '../../../images/someone-like-you.jpeg';


function MusicVideo() {

    const videos = [
        {
            title: "Gossip",
            artist: "Måneskin",
            views: "3M views",
            thumbnail: Gossip
        },
        {
            title: "Shape Of You",
            artist: "Ed Sheeran",
            views: "5M views",
            thumbnail: ShapeOfYou
        },
        {
            title: "Someone Like You",
            artist: "Adele",
            views: "3M views",
            thumbnail: SomeOneLikeYou
        },
    ];

    return (
        <div className=" container  my-5">
            <h2 className=' lato-regular text-white'>
                Music <span className="text-pink">Video</span>
            </h2>
            <div className="row  mt-4">
                {videos.map((video, index) => (
                    <div key={index} className="col-md-3">
                        <div className="card bg-dark text-white border-0 mb-4" style={{ height: "250px" }}>
                            <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="card-img-top p-2"
                                style={{ height: "150px", objectFit: "cover" }}
                            />


                            <div className="card-body d-flex flex-column">
                                <h5 className="video-title card-title mb-1 ">{video.title}</h5>
                                <div className="d-flex justify-content-between">
                                    <p className="video-artist card-text">{video.artist}</p>
                                    <p className='video-views'>{video.views}</p>
                                </div>

                            </div>

                        </div>
                    </div>
                ))}
                
                <div className="mt-5 col-md-3">
                    <div
                        className=" rounded-circle d-flex justify-content-center align-items-center mt-2"
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
                    <p className="mt-2 text-white ms-5">View All</p>
                </div>


                {/* <div className="col-md-3 d-flex flex-column align-items-center">
                    <div
                        className="d-flex justify-content-center align-items-center bg-dark text-white rounded-circle"
                        style={{
                            width: "90px",
                            height: "90px",
                            fontSize: "30px",
                            fontWeight: "bold",
                        }}
                    >
                        +
                    </div>
                    <p className="mt-3 text-white">View All</p>
                </div> */}
            </div>
        </div>
    );
};

export default MusicVideo;
