import React from 'react';
import FiftyCent from '../../../images/50-cent.jpeg';
import SnoopDog from '../../../images/snoop-dog.jpeg';
import harryStyles from '../../../images/harry-styles.jpeg';
import JayZ from '../../../images/jay_z.jpeg';
import TupacThree from '../../../images/tupac-3.jpg';

import './OtherArtist.css'

function OtherArtists() {

    const artists = [
        { name: '50 cent', image: FiftyCent },
        { name: 'Snoop Dog', image: SnoopDog },
        // { name: 'Adele', image: Adele },
        { name: 'Tupac', image: TupacThree },
        { name: 'Harry Styles', image: harryStyles },
        { name: 'Jay+Z', image: JayZ },
    ];

    return (
        <div className=" lato-regular container mt-5">
            <h2 className='text-white'style={{ fontWeight : "bolder"}} >
                Eminem Fans <span className="text-pink">Also Listen To</span>
            </h2>
            <div className="d-flex  align-items-center flex-wrap gap-3 mt-4">
                {artists.map((artist, index) => (
                    <div key={index} className="text-center">
                        <div
                            className="rounded-circle overflow-hidden"
                            style={{
                                width: "210px",
                                height: "210px",
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
                        <p className="mt-4 text-white "style={{fontSize : "18px"}}>{artist.name}</p>
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
            </div>
        </div>
    );
};

export default OtherArtists;


