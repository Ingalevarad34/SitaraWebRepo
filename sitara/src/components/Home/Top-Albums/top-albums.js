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
        const response = await axios.get("http://localhost:5000/api/topAlbums-songs");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Function to shuffle array
  const shuffleArray = (array) => {
    if (!array) return [];
    return [...array].sort(() => Math.random() - 0.5);
  };

  // Shuffle albums every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => shuffleArray(prevData));
    }, 3600000); // 60000ms = 1 minute
    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();
  const handleIndex = (index) => {
    handleClick(index);
  };
  const handleClick = (index) => {
    navigate("/albums", { state: { message: index } });
  };

  return (
    <>
      {data && data.length > 0 ? (
        <div className="lato-regular container mt-5" style={{ cursor: "pointer" }}>
          <h3 className="text-white fs-2" style={{ fontWeight: "bolder" }}>
            Top <span className="text-pink">Albums</span>
          </h3>

          {/* Scrollable container */}
          <div
            className="scroll-container d-flex mt-4"
            style={{
              overflowX: "auto",
              display: "flex",
              gap: "15px",
              paddingBottom: "10px",
              scrollBehavior: "smooth",
            }}
          >
            {data.slice(0, elm).map((song, index) => (
              <div key={index} className="col-md-2 col-sm-6 mb-4" style={{ display: "inline-block" }}>
                <div className="card bg-dark text-light h-100">
                  <img
                    onClick={() => handleIndex(data[index])}
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

            {/* View All Button (Inside Scrollable Container) */}
            {elm === 5 ? (
              <div
                className="d-flex flex-column align-items-center justify-content-center"
                style={{ display: "inline-block", minWidth: "80px" }}
              >
                <button
                  onClick={() => setElm(8)}
                  className="view-all-btn btn btn-dark rounded-circle d-flex flex-column align-items-center justify-content-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    fontSize: "30px",
                    color: "#fff",
                    fontWeight: "bold",
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
