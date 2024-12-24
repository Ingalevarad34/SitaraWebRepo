import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home/home";
import Albums from "./pages/albums/albums";
import Artists from "./pages/artists/artists";
import Discover from "./pages/discover/dicover";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="albums" element={<Albums />} />
          <Route path="artists" element={<Artists />} />
          <Route path="discover" element={<Discover />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
