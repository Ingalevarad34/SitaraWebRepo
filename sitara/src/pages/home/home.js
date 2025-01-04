import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import IntroSection from "../../components/Home/IntroSection";
import NewReleseSongs from "../../components/Home/New-Relese-songs/New-Relese";
import TrendingSongs from "../../components/Home/Trending-songs/TrendingSongs";
import TopSongs from "../../components/Home/weekly-top-songs/topSongs";

function Home() {
  return (

    <div className="">
      <IntroSection />
      <TopSongs />
      <NewReleseSongs />
      <TrendingSongs />
      <Contact />
      <Footer />
    </div>

  );
}

export default Home;
