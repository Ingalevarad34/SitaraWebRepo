import React, { useState, useEffect } from "react";
import "./top-albums.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TopAlbums() {
  const [elm, setElm] = useState(5);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/artist/getAllArtist");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Function to shuffle array
  // const getRandomItems = (arr, numItems) => {
  //   if (!arr) return [];
  //   return arr
  //     .map(item => ({ item, sort: Math.random() })) // Assign random values
  //     .sort((a, b) => a.sort - b.sort) // Sort randomly
  //     .slice(0, numItems) // Take the first `numItems`
  //     .map(({ item }) => item); // Extract the actual items
  // };

  const navigate = useNavigate();
    const handleIndex = (index) => {
        handleClick(index);
    }
    const handleClick = (index) => {
        navigate("/albums", { state: { message: index } });
    };

    // //To get the browser rout path
    // const path = window.location.pathname;
    // useEffect(() => {
    //     const path = window.location.pathname;
    //     console.log('Current Path:', path);
    // }, []);

  return (
    <>
      {data && data.length > 0 ? (
        <div className="lato-regular container mt-5" style={{cursor:"pointer"}}>
          <h3 className="text-white fs-2" style={{ fontWeight: "bolder" }}>
            Top <span className="text-pink">Albums</span>
          </h3>

          {/* For larger screens: Grid layout */}
          <div className="row d-none d-sm-flex mt-4">
            {data.slice(0, elm).map((song, index) => (
              <div key={index} className="col-md-2 col-sm-6 mb-4">
                <div className="card bg-dark text-light h-100">
                  <img  onClick={() => handleIndex(data[index])}
                    src={song.imageUrl}
                    className="card-img-top p-2"
                    alt={song.artistName}
                    style={{ borderRadius: "10px", height: "22vh" }}
                  />
                  <div className="card-body text-center">
                    <p className="card-title fw-bold" style={{ fontSize: "20px" }}>
                      {song.artistName}
                    </p>
                    <p className="card-text fs-7" style={{ fontWeight: "300" }}>
                      {song.smallDesc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* View All Button */}
            {elm === 5 ? (
              <div className="col-md-2 col-sm-6 mb-4 d-flex flex-column align-items-center justify-content-center">
                <button
                  onClick={() => setElm(12)}
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
                <div className="text-white mt-2" style={{ fontSize: "14px" }}>
                  View All
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default TopAlbums;
