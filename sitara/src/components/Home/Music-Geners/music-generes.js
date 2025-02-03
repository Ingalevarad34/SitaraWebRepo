import React from "react";
import './music-generes.css';
import axios from 'axios';
import { useState, useEffect } from "react";

function MusicGenres() {
  const [data, setData] = useState(null); // Start with `null` to indicate loading state
  // const [elm, setElm] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/MusicGenres/getAllMusicGenres");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {

      }
    };

    fetchData();
  }, []);
  console.log("Data is:", data);



  return (
    <>
      {
        data && data.length > 0 ? (<div className="lato-regular container mt-5">
          <h2 className="text-white fs-2">
            Music <span className="text-pink">Genres</span>
          </h2>
          <div className="d-flex align-items-center mt-4">
            <div className="row flex-grow-1">
              {data.map((genre, index) => (
                <div key={index} className="col-md-3">
                  <div className="card bg-dark text-white">
                    <img
                      src={genre.imageUrl}
                      className="card-img"
                      alt={genre.albumName}
                      style={{ objectFit: "cover", height: "200px" }}
                    />
                    <div className="card-img-overlay d-flex align-items-end">
                      <h5 className="card-title">{genre.albumName}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>) : <div></div>
      }
    </>
  );
};




export default MusicGenres;


