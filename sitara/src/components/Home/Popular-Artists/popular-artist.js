import React from 'react';
import eminem from '../../../images/eminem.jpeg';
import weekend from '../../../images/weekend.jpeg';
import Adele from '../../../images/adele.jpeg';
import lanaDeRey from '../../../images/lana-del-ray.jpeg';
import harryStyles from '../../../images/harry-styles.jpeg';
import billieElish from '../../../images/belli-elish.jpeg';
import './popular-artist.css';

function PopularArtists() {

    const artists = [
        { name: 'Eminem', image: eminem },
        { name: 'The Weeknd', image: weekend },
        { name: 'Adele', image: Adele },
        { name: 'Lana Del Rey', image: lanaDeRey },
        { name: 'Harry Styles', image: harryStyles },
        { name: 'Billie Eilish', image: billieElish },
    ];

    return (
        <div className=" lato-regular container mt-5">
            <h2 className='text-white'style={{ fontWeight : "bolder"}} >
                Popular <span className="text-pink">Artists</span>
            </h2>
            <div className="d-flex  align-items-center flex-wrap gap-3 mt-4">
                {artists.map((artist, index) => (
                    <div key={index} className="text-center">
                        <div
                            className="rounded-circle overflow-hidden"
                            style={{
                                width: "170px",
                                height: "170px",
                                margin: "0 auto",
                                // border: "2px solid white",
                            }}
                        >
                            <img
                                src={artist.image}
                                alt={artist.name}
                                className="img-fluid"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </div>
                        <p className="mt-2 text-white">{artist.name}</p>
                    </div>
                ))}


                <div className="text-center">
                    <div
                        className="rounded-circle d-flex justify-content-center align-items-center mt-2"
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



                {/* <div className="col-md-2 col-sm-6 mb-4 d-flex align-items-center justify-content-center">
              <button
                className="btn btn-dark rounded-circle d-flex flex-column align-items-center justify-content-center"
                style={{
                  width: "80px",
                  height: "80px",
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
    );
};

export default PopularArtists;


