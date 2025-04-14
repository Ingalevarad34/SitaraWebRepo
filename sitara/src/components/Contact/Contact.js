import { useState } from "react";
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import GoogleLogo from '../../images/Contacts/google-logo.png';

function Contact() {
    const [isSignUp, setIsSignUp] = useState(true);

    return (
        <>
            <div className="container text-white mt-5">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <div className="fs-2 lato-bold">Join Our Platform</div>
                        <p className="contact-para mt-3 lato-regular-contact">
                            Got a favorite <span className="text-pink">artist</span> or a song you think we should know about? Feel free to send in your suggestions or ask any questions you have! If you're already part of the community, just hit the <span className="text-primary">Login button</span> to share your thoughts.
                        </p>

                    </div>
                    <div className="col-md-6">
                        <div className="d-flex">
                            <div
                                className="card p-4"
                                style={{
                                    backgroundColor: "#53063e",
                                    color: "#fff",
                                    width: "650px",
                                    borderRadius: "15px",
                                }}
                            >
                                {/* Custom Toggle UI */}
                                <div className="toggle-container d-flex justify-content-center mb-4">

                                    <button
                                        className={`toggle-btn ${!isSignUp ? "active" : ""}`}
                                        onClick={() => setIsSignUp(false)}
                                    >
                                        Login
                                    </button>
                                </div>


                                <form>
                                    <div className="row mt-2">
                                        <div className="col">Name</div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col">
                                            <div className="input-group">
                                                <span className="input-group-text bg-transparent border-3 p-3">
                                                    <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff" }} />
                                                </span>
                                                <input
                                                    className="form-control bg-transparent border-3 p-3"
                                                    type="email"
                                                    placeholder="Enter Your Email"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col">Password</div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col">
                                            <div className="input-group">
                                                <span className="input-group-text bg-transparent border-3 p-3">
                                                    <FontAwesomeIcon icon={faKey} style={{ color: "#ffffff" }} />
                                                </span>
                                                <input
                                                    className="form-control bg-transparent border-3 p-3"
                                                    type="password"
                                                    placeholder="Enter Your Password"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>


                                {/* Buttons */}
                                <div className="row mt-4">
                                    <div className="col text-center">
                                        <button
                                            type="submit"
                                            className="btn btn-color w-100 p-3"
                                            style={{ border: "none" }}
                                        >
                                            {isSignUp ? "Sign Up" : "Login"}
                                        </button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="divider-container">
                                        <hr className="line" />
                                        <span className="text">Or</span>
                                        <hr className="line" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col text-center">
                                        <button
                                            type="button"
                                            className="btn btn-light w-100 p-3"
                                            style={{ border: "none" }}
                                        >
                                            <img
                                                src={GoogleLogo}
                                                alt="Google Logo"
                                                style={{ width: "20px", marginRight: "10px" }}
                                            />
                                            Google
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
