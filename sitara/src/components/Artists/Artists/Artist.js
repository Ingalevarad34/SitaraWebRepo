import React from "react";
import './Artist.css';
import Eminem1 from '../../../images/Artist-img/Artist-img.jpg';
import Ajay_Atul from '../../../images/Artist-img/ajay-atul.webp';
import ArRehman from '../../../images/Artist-img/ar.png';
import { useEffect } from "react";




const EminemCard = () => {
  useEffect(() => {
    const carouselElement = document.querySelector('#carouselExampleControls');
    new window.bootstrap.Carousel(carouselElement, {
      interval: 4000,
      ride: 'carousel',
      wrap: true, // Enable looping
    });
  }, []);

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="2000"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src={Eminem1}
            alt="First slide"
            style={{
              padding: "10px 50px",
              width: "1400px",
              height: "600px",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={Ajay_Atul}
            alt="Second slide"
            style={{
              padding: "10px 50px",
              width: "1400px",
              height: "600px",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={ArRehman}
            alt="Third slide"
            style={{
              padding: "10px 50px",
              width: "1400px",
              height: "600px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EminemCard;
