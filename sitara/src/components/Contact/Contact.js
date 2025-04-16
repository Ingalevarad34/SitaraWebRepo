import { useState } from "react";
import axios from "axios";
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import GoogleLogo from '../../images/Contacts/google-logo.png';

function Contact() {
    const [isSignUp, setIsSignUp] = useState(true);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            userName: name,
            userSuggestion: message,
        };

        try {
            const response = await axios.post("http://localhost:5000/api/userquery", data);
            console.log("Submitted successfully:", response.data);
            setName("");
            setMessage("");
        } catch (error) {
            console.error("Error submitting:", error);
        }
    };

    return (
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
                            {/* Toggle */}
                            <div className="toggle-container d-flex justify-content-center mb-4">
                                <button
                                    className={`toggle-btn ${!isSignUp ? "active" : ""}`}
                                    onClick={() => setIsSignUp(false)}
                                >
                                    Suggestion
                                </button>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="row mt-2">
                                    <div className="col">Name</div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <div className="input-group">
                                            <span className="input-group-text bg-transparent border-3 p-3">
                                                <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff" }} />
                                            </span>
                                            <input
                                                className="text-white form-control bg-transparent border-3 p-3"
                                                type="text"
                                                placeholder="Enter Your Name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col">Your Suggestion Or Query</div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <div className="input-group">
                                            <span className="input-group-text bg-transparent border-3 p-3">
                                                <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff" }} />
                                            </span>
                                            <textarea
                                                className="text-white form-control bg-transparent border-3 p-3 input-search"
                                                placeholder="Enter Your Suggestion Or Query"
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col text-center">
                                        <button
                                            type="submit"
                                            className="btn btn-color w-100 p-3"
                                            style={{ border: "none" }}
                                        >
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
