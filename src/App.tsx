import './App.scss';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AddPlayerForm from './components/AddPlayerForm';
import Homepage from './components/Homepage.jsx';
import Nav from './components/Nav';
import Ranking from './components/Ranking';
// import WinnerPlayer from './components/WinnerPlayer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/newplayer" element={<AddPlayerForm />} />
      </Routes>
    </div>
  );
}

export default App;
