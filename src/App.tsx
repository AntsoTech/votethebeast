import './App.scss';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Homepage from './components/Homepage.jsx';
import Ranking from './components/Ranking';
import AddPlayerForm from './components/AddPlayerForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/ranking" element={<Ranking />}/>
        <Route path="/newplayer" element={<AddPlayerForm />}/>
      </Routes>
    </div>
  );
}

export default App;
