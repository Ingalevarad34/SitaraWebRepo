import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home/home";
import Albums from "./pages/albums/albums";
import Artists from "./pages/artists/artists";
import Discover from "./pages/discover/dicover";
import './App.css';
import Login from './components/FirebaseAuth/login.js';
import SignUp from './components/FirebaseAuth/register.js';
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { useState, useEffect } from "react";
import { auth } from "./components/FirebaseAuth/firebase.js";
import Profile from "./components/FirebaseAuth/profile.js";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        {/* Default route: If no user, show Login; otherwise, redirect to Home */}
        <Route
          path="/"
          element={user ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/home" /> : <SignUp />}
        />
        {/* Authenticated routes */}
        <Route
          path="/"
          element={user ? <Layout /> : <Navigate to="/" />}
        >
          <Route path="home" element={<Home />} />
          <Route path="albums" element={<Albums />} />
          <Route path="artists" element={<Artists />} />
          <Route path="discover" element={<Discover />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
