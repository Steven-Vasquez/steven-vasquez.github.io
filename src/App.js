import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer'
import { Analytics } from '@vercel/analytics/react';

import ULingualPage from './pages/progect_pages/ULingualPage';
import MonopolyPage from './pages/progect_pages/MonopolyPage';
import SubylertPage from './pages/progect_pages/SubylertPage';
import DealershipDatabasePage from './pages/progect_pages/DealershipDatabasePage';

import DanaBotBlog from './pages/blog_pages/DanaBotBlog';
function App() {
  return (
    <Router>
      <Analytics id='prj_Gd8G6N3EPMp9yr7AXdiKTHdLe5jp' />

      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog/DanaBot" element={<DanaBotBlog/>} />


        <Route path="/projects/ULingual" element={<ULingualPage />} />
        <Route path="/projects/Monopoly" element={<MonopolyPage />} />
        <Route path="/projects/Subylert" element={<SubylertPage />} />
        <Route path="/projects/DealershipDatabase" element={<DealershipDatabasePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
