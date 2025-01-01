
import IntroSection from "../../components/Home/Intro-Section/IntroSection";
import MusicVideo from "../../components/Home/Music-video/music-video";
import NewReleseSongs from "../../components/Home/New-Relese-songs/New-Relese";
import PopularArtists from "../../components/Home/Popular-Artists/popular-artist";
import TopAlbums from "../../components/Home/Top-Albums/top-albums";
import TopSongs from "../../components/Home/weekly-top-songs/topSongs";

function Home() {
  return (
  
      <div className="">
        <IntroSection />
        <TopSongs />
        <NewReleseSongs />
        <PopularArtists />
        <MusicVideo />
        <TopAlbums />
        
      </div>
    
  );
}

export default Home;
