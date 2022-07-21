import axios from 'axios';
import React, { useEffect, useState } from 'react';
import IPlayer from '../interfaces/IPlayer';

const Ranking = () => {

  const [playerList, setPlayerList] = useState<IPlayer[]>();

  useEffect(() => {
    const getPlayersList = async () => {
      const url = `http://localhost:3000/api/players?order=pl.points`;
      const { data } = await axios.get(url);
      setPlayerList(data);
    };
    getPlayersList();
  }, []);

  return <div>
    <div>
     {playerList && playerList.map((player, index) =>
     <div key={index}>
        <h3>{player.firstname} {player.lastname} {player.points} points</h3>
     </div>
     )}
    </div>
  </div>;
};

export default Ranking;
