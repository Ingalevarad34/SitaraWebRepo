import React from 'react';
import './popular-artist.css';
import axios from 'axios';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PopularArtists() {
    const [elm, setElm] = useState(6);
    const [data, setData] = useState(null); // Start with `null` to indicate loading state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/artist/getAllArtist");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {

            }
        };

        fetchData();
    }, []);
    console.log("Data is:", data?.[0]);


    const navigate = useNavigate();
    const handleIndex = (index) => {
        handleClick(index);
    }
    const handleClick = (index) => {
        navigate("/albums", { state: { message: index } });
    };

    //To get the browser rout path
    const path = window.location.pathname;
    useEffect(() => {
        const path = window.location.pathname;
        console.log('Current Path:', path);
    }, []);
    return (
        <>
            {data && data.length > 0 ? (
                <div className=" lato-regular container mt-5">
                    {
                        path === '/home' ? (<h2 className='text-white' style={{ fontWeight: "bolder" }} >
                            Popular <span className="text-pink">Artists</span>
                        </h2>) : <h2 className='text-white' style={{ fontWeight: "bolder" }} >
                            Other <span className="text-pink">Artists</span>
                        </h2>
                    }
                    <div className="d-flex  align-items-center flex-wrap gap-3 mt-4">
                        {data.slice(0, elm).map((artist, index) => (
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
                                        onClick={() => handleIndex(data[index])}
                                        src={artist.imageUrl}
                                        alt={artist.artistName}
                                        className="img-fluid"
                                        style={{ width: "100%", height: "100%", objectFit: "cover", cursor: "pointer" }}
                                    />
                                </div>
                                <p className="mt-2 text-white">{artist.artistName}</p>
                            </div>
                        ))}

                        {elm === 6 ? <div className="text-center">
                            <div
                                onClick={() => setElm(data.length)}
                                className="rounded-circle d-flex justify-content-center align-items-center mt-2"
                                style={{
                                    width: "60px",
                                    height: "60px",
                                    backgroundColor: "#333",
                                    color: "white",
                                    fontSize: "30px",
                                    fontWeight: "bold",
                                    marginLeft: "50px",
                                    cursor: "pointer"
                                }}
                            >
                                +
                            </div>
                            <p className="mt-2 text-white ms-5">View All</p>
                        </div> : <div className="text-center">
                            <div
                                onClick={() => setElm(6)}
                                className="rounded-circle d-flex justify-content-center align-items-center mt-2"
                                style={{
                                    width: "60px",
                                    height: "60px",
                                    backgroundColor: "#333",
                                    color: "white",
                                    fontSize: "30px",
                                    fontWeight: "bold",
                                    marginLeft: "50px",
                                    cursor: "pointer"
                                }}
                            >
                                -
                            </div>
                            <p className="mt-2 text-white ms-5">View Less</p>
                        </div>}

                    </div>
                </div>) : <div></div>
            }
        </>
    );
};

export default PopularArtists;


