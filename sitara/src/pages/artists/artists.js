import ArtistTopAlbums from "../../components/Artists/Artist-Album/Artist-album";
import ArtistPlaylist from "../../components/Artists/Artist-Playlist/Artist-Playlist";
import EminemCard from "../../components/Artists/Artists/Artist";
import OtherArtists from "../../components/Artists/Other-Artists/OtherArtist";
import PopularSongs from "../../components/Artists/Popular-Songs/PopularSongs";
import SingleSongs from "../../components/Artists/Single-songs/SingleSong";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import TopAlbums from "../../components/Home/Top-Albums/top-albums";


function artists(params) {
    console.log('arties page called');
    
    return(
        <>
            <div className=" text-white">
            <Header />
                <EminemCard />
                <PopularSongs />
                <ArtistTopAlbums />
                <SingleSongs />
                <ArtistPlaylist />
                <OtherArtists />
                <Footer />
            </div>
        </>
    );
}

export default artists;