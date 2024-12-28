import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home/home"; // Add Home component here if it's not included
import Albums from "./pages/albums/albums";
import Artists from "./pages/artists/artists";
import Discover from "./pages/discover/dicover";
import './App.css'
// import About from "./pages/about/about"; // Add About component
// import Contact from "./pages/contact/contact"; // Add Contact component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Ensure Home is rendered as the default */}
          <Route path="albums" element={<Albums />} />
          <Route path="artists" element={<Artists />} />
          <Route path="discover" element={<Discover />} />
          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
