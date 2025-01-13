import Footer from "../../components/Footer/Footer.js";
import Header from "../../components/Header/Header.js";
import MoodPlaylist from "../../components/Home/Mood-Playlist/mood-playlist.js";
import MusicGenres from "../../components/Home/Music-Geners/music-generes.js";
import MusicVideo from "../../components/Home/Music-video/music-video.js";
import NewReleseSongs from "../../components/Home/New-Relese-songs/New-Relese.js";
import PopularArtists from "../../components/Home/Popular-Artists/popular-artist.js";
import PremimumTopAlbums from "../../components/Home/Premimum-top-albums/Premimum-albums.js";
function discover(params) {
    return(
        <>
            <div className="text-white">
                <Header/>
                <MusicGenres />
                <MoodPlaylist />
                <PopularArtists/>
                <MusicVideo />
                <NewReleseSongs />
                <PremimumTopAlbums />
                <Footer />

            </div>
        </>
    );
}

export default discover;