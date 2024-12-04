import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Levels from './pages/Levels';
import Game from './pages/Game';
import Tutorial from './pages/Tutorial';
import './styles/main.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/levels" element={<Levels />} />
        <Route path="/game/:levelId" element={<Game />} />
        <Route path="/tutorial" element={<Tutorial />} />
      </Routes>
    </Router>
  );
}

export default App;