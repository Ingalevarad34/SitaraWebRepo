import './Footer.css';

function Footer(params) {
    return (
        <>
            <div className="container-fluid footer" style={{
                padding: "25px",
                marginTop: "50px"
            }}>
                <div className="container text-white text-center lato-regular-footer">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 text-start">
                            <h3 className="mt-5">About</h3>
                            <p style={{ width: "350px", textAlign: "justify" }}>
                                Melodies is a website that has been created for over <span className="text-pink">5 year’s</span> now and it is one of the most famous music player website’s in the world. in this website you can listen and download songs for free. also of you want no limitation you can buy our <span className="text-primary">premium pass’s</span>.
                            </p>
                        </div>
                        <div className="col-md-2 col-sm-12">
                            <h3>Melodies</h3>
                            <p className="footer-para"></p>
                            <ul>
                                <li className="footer-li">Songs</li>
                                <li className="footer-li">Radio</li>
                                <li className="footer-li">Podcast</li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-12">
                            <h3>Access</h3>
                            <p className="footer-para"></p>
                            <ul>
                                <li className="footer-li">Explore</li>
                                <li className="footer-li">Artists</li>
                                <li className="footer-li">Playlist</li>
                                <li className="footer-li">Albums</li>
                                <li className="footer-li">Trending</li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-12">
                            <h3>Contact</h3>
                            <p className="footer-para"></p>
                            <ul>
                                <li className="footer-li">About</li>
                                <li className="footer-li">Profile</li>
                                <li className="footer-li">Social Media </li>
                                <li className="footer-li">Albums</li>
                                <li className="footer-li">Trending</li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-12">
                            <h3 className="mt-5 gradient-text">Sitara</h3>
                            <ul className="mt-4 d-flex justify-content-evenly">
                                <li className="footer-li"><i className="fa-brands fa-facebook" style={{ color: "#ffffff", fontSize: "25px" }}></i></li>
                                <li className="footer-li"><i className="fa-brands fa-instagram" style={{ color: "#ffffff", fontSize: "25px" }}></i></li>
                                <li className="footer-li"><i className="fa-brands fa-twitter" style={{ color: "#ffffff", fontSize: "25px" }}></i></li>
                                <li className="footer-li"><i className="fa-brands fa-github" style={{ color: " #ffffff", fontSize: "25px" }}></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Footer;