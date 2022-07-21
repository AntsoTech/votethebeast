import './App.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddPlayerForm from './components/AddPlayerForm';
import Homepage from './components/Homepage.jsx';
import Ranking from './components/Ranking';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/newplayer" element={<AddPlayerForm />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
