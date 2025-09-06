import React from "react";
import { Routes, Route } from "react-router-dom";
import movies from "./data/movies";
import Watchlist from "./components/Watchlist";
import GenrePage from "./pages/GenrePage";
import Home from "./pages/Home"; 
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const genres = [...new Set(movies.map((m) => m.genre))];

  return (
    <div>
      {/*  Navbar at the top */}
      <Navbar genres={genres} />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/genre/:genreName" element={<GenrePage />} />
      </Routes>
    </div>
  );
}

export default App;
