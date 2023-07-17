import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ULingualPage from './pages/progect_pages/ULingualPage';
import MonopolyPage from './pages/progect_pages/MonopolyPage';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/ULingual" element={<ULingualPage />} />
        <Route path="/projects/Monopoly" element={<MonopolyPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
