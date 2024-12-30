import IntroSection from "../../components/Home/IntroSection";
import NewReleseSongs from "../../components/Home/New-Relese-songs/New-Relese";
import TopSongs from "../../components/Home/weekly-top-songs/topSongs";

function Home() {
  return (
  
      <div className="">
        <IntroSection />
        <TopSongs />
        <NewReleseSongs />
        
      </div>
    
  );
}

export default Home;
