import Album from "../../components/Album/Album.js";
// import Header from "../../components/Header/Header.js";
import Footer from '../../components/Footer/Footer.js';
function albums(params) {
    return (
        <>
            <div className="bg-black text-white">
            
                <Album />
                <Footer/>
            </div>
        </>
    );
}

export default albums;