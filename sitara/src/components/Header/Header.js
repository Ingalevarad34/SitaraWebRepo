// components/Header/Header.js
import { Link } from "react-router-dom";
import './Header.css';
function Header() {
  return (
    <>
      {/* NavBar start */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-4">
        <Link className="navbar-brand me-5 gradient-text"  to="/">
         
        </Link>
        <div className="input-group input-design">
          <span className="input-group-text bg-color border-0">
            <i class="fa-solid fa-magnifying-glass fa-flip-horizontal" style={{ color: '#ffffff' }}></i>
          </span>
          <input className="form-control w-50 bg-color border-0" type="search" placeholder="Search For Music, Artists,..." />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ms-5 lato-bold" >
              <Link className="nav-link" style={{ color: 'white' }} to="/artists">
                About Us
              </Link>
            </li>
            <li className="nav-item ms-5 lato-bold">
              <Link className="nav-link" style={{ color: 'white' }} to="/">
                Contact
              </Link>
            </li>
            <li className="nav-item ms-5 me-5 lato-bold">
              <Link className="nav-link" style={{ color: 'white' }} to="/discover">
                Premium
              </Link>
            </li>
          </ul>
          {/* <div className="d-flex nav-btn">
            <button className="btn btn-outline-light me-5 lato-regular  border-pink" style={{ width: '40%' }}>Login</button>
            <button className="btn btn-outline-light me-2 lato-regular  border-pink" style={{ width: '40%' }}>Sign Up</button>
          </div> */}
        </div>
      </nav>
      {/* NavBar end */}
    </>
  );
}

export default Header;
