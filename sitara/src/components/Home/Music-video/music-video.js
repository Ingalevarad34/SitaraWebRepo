
import React from 'react';
import './music-video.css';
import Gossip from '../../../images/goosip.jpeg';
import ShapeOfYou from '../../../images/shape-of-you.jpeg';
import SomeOneLikeYou from '../../../images/someone-like-you.jpeg';
import ShakeItOff from '../../../images/shake-it-off.jpeg';
import NewRules from '../../../images/new-rules.jpeg';
import WakaWaka from '../../../images/waka-waka.png';


function MusicVideo() {

    const videos = [

        {
            title: "Shape Of You",
            artist: "Ed Sheeran",
            views: "5M views",
            thumbnail: ShapeOfYou
        },
        {
            title: "Gossip",
            artist: "Måneskin",
            views: "3M views",
            thumbnail: Gossip
        },

        {
            title: "Shake it Off",
            artist: "Taylor swift",
            views: "4.2M views",
            thumbnail: ShakeItOff
        },
        
        {
            title: "Someone Like You",
            artist: "Adele",
            views: "3M views",
            thumbnail: SomeOneLikeYou
        },

        
        {
            title: "New Rules",
            artist: "Dualipa",
            views: "3.7M views",
            thumbnail: NewRules
        },
        {
            title: "Waka Waka",
            artist: "Shakira",
            views: "3.1M views",
            thumbnail: WakaWaka
        },
    ];

    return (
        <div className=" container  my-5">
            <h2 className=' lato-regular text-white'>
                Music <span className="text-pink">Video</span>
            </h2>
            <div className="row  mt-4">

                {videos.map((video, index) => (
                    <div key={index} className="col-md-4 mb-3">
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
                
                <div className="text-center">
                    <div
                        className=" rounded-circle d-flex justify-content-center align-items-center mt-2"
                        style={{
                            width: "60px",
                            height: "60px",
                            backgroundColor: "#333",
                            color: "white",
                            fontSize: "30px",
                            fontWeight: "bold",
                            marginLeft: "638px"
                        }}
                    >
                        +
                    </div>
                    <p className="mt-2 text-white ms-5">View All</p>
                </div>
            </div>
        </div>
    );
};

export default MusicVideo;
