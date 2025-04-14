import ArtistTopAlbums from "../../components/Artists/Artist-Album/Artist-album";
import ArtistPlaylist from "../../components/Artists/Artist-Playlist/Artist-Playlist";
import EminemCard from "../../components/Artists/Artists/Artist";
import OtherArtists from "../../components/Artists/Other-Artists/OtherArtist";
import PopularSongs from "../../components/Artists/Popular-Songs/PopularSongs";
import SingleSongs from "../../components/Artists/Single-songs/SingleSong";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MoodPlaylist from "../../components/Home/Mood-Playlist/mood-playlist";
import NewReleseSongs from "../../components/Home/New-Relese-songs/New-Relese";
import PopularArtists from "../../components/Home/Popular-Artists/popular-artist";
import TopAlbums from "../../components/Home/Top-Albums/top-albums";
import TrendingSongs from "../../components/Home/Trending-songs/TrendingSongs";
import EnglishSongs from "../English_Song/English_Song";
import MarathiSongs from "../Marathi_Song/Marathi_Song";


function artists(params) {
    console.log('arties page called');

    return (
        <>
            <div className=" text-white">
                <Header />
                <EminemCard />
                <TrendingSongs />
                <EnglishSongs />
                <MarathiSongs/>
                <TopAlbums />
                <MoodPlaylist />
                <NewReleseSongs />
                <PopularArtists />
                <Footer />
            </div>
        </>
    );
}

export default artists;