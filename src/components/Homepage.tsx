import axios from 'axios';
import React, { useEffect, useState } from 'react';
import IPlayer from '../interfaces/IPlayer';
import PlayerCard from './PlayerCard';

const Homepage = () => {
  const [player1, setPlayer1] = useState<IPlayer>();
  const [player2, setPlayer2] = useState<IPlayer>();

  useEffect(() => {
    const getPlayersList = async () => {
      const url = `http://localhost:3000/api/players?random=true`;
      const { data } = await axios.get(url);
      setPlayer1(data[0]);
      setPlayer2(data[1]);
    };
    getPlayersList();
  }, []);

  return (
    <div className="homepage">
      <h1 className="homepage__title"> Who's the best player ? </h1>
      <div className="homepage__section">
        <div className="homepage__section__left">
         {player1 && <PlayerCard {...player1}/>}
        </div>
        <div className="homepage__section__right">
        {player2 && <PlayerCard {...player2}/>}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
