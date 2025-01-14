import React from "react";
import './Artist.css';
import Eminem1 from '../../../images/Artist-img/Artist-img.jpg';



const EminemCard = () => {
  return (
    <div className=" img-card col-md-3  text-white">
      <img
        src= {Eminem1}// Replace with your image URL
        className="card-img"
        alt="Eminem"
        style={{
            padding : " 10px 50px",
            width: "1400px",  // Change width here
            height: "600px", // Change height here
            objectFit: "cover", // Maintain aspect ratio and crop overflow
          }}
      />
      
    </div>
  );
};

export default EminemCard;
