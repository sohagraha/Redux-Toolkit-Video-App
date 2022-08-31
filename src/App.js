import React from 'react';
import Home from './pages/home/Home';
import Video from './pages/video/Video';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="video/:videoId" element={<Video />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
