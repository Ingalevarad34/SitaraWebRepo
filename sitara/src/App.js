import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home/home";
import Albums from "./pages/albums/albums";
import Artists from "./pages/artists/artists";
import './App.css';
import Login from './components/FirebaseAuth/login.js';
import SignUp from './components/FirebaseAuth/register.js';
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { useState, useEffect } from "react";
import { auth } from "./components/FirebaseAuth/firebase.js";
import Profile from "./components/FirebaseAuth/profile.js";
import PlayList from "./pages/playlist/PlayList.js";
import Premium from "./components/Home/Premimum/Premium.js";
import PaymentGateway from "./components/PaymentGateWay/PaymentGateWay.js";
import AdminPanel from "./components/AdminPanel/AdminPanel.js";
import Discover from "./pages/discover/dicover.js";

function App() {
  const [user, setUser] = useState(() => {
    // Retrieve user from Local Storage on page reload
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      // Store user in Local Storage
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        localStorage.removeItem("user");
      }
    });

    return () => unsubscribe();
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
          <Route path="playlist" element={<PlayList />} />
          <Route path="premium" element={<Premium />} />
          <Route path="payment" element={<PaymentGateway />} />
        </Route>

        {/* Admin Panel Route - Accessible via Browser URL */}
        <Route
          path="/admin"
          element={user ? <AdminPanel /> : <Navigate to="/" />}
        />

        {/* Catch-all route for invalid URLs */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
