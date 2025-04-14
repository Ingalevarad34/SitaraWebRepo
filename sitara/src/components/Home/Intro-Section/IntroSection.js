// components/Home/IntroSection.js
// import IntoImg from "../../images/introimg.png";
import './IntroSection.css';
import Header from "../../../components/Header/Header.js";
import { Link } from "react-router-dom";


function IntroSection() {
  return (
    <>
      <div className="introSection">
        <Header />
        {/* Main Content */}
        <div className="mt-4 container h-100  d-flex flex-column justify-content-center align-items-start text-md-start text-center px-3 px-md-5">
          <h1 className="display-4 heading fw-bold">
            All the <span className="text-pink">Best Songs</span>
            <br className="d-none d-md-block" /> in One Place
          </h1>
          <p className="intro-para mt-3">
            On our website, you can access an amazing collection of popular and
            new songs. Stream your favorite tracks in high quality and enjoy
            without interruptions. Whatever your taste in music, we have it all
            for you!
          </p>
          <div className="mt-4 d-flex flex-column flex-md-row justify-content-center justify-content-md-start gap-3">
            <button className="btn btn-outline-light lato-regular border-color">
              <Link className="" to="/discover">
                Discover Now
              </Link>
            </button>
            <button className="btn btn-outline-light lato-regular border-color">
              <Link className="" to="/albumpage">
                Albums
              </Link>
            </button>
          </div>
        </div>
      </div>

    </>
  );
}

export default IntroSection;
