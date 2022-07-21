import axios from 'axios';
import React from 'react';

interface Props {
  id: number;
  firstname: string;
  lastname: string;
  points: number;
}

const VotingButton = (player: Props) => {

  // Add +1 point to the voted player (the winner)
    const addPointTheWinner = async (newPoints:number) => {
      const url = `http://localhost:3000/api/players/${player.id}`;
      const { data } = await axios.put(url, {
        points: newPoints,
      });
      console.log(newPoints);
    };

    // Function to handleOnClick 
    const handleOnClick =  () => {
      addPointTheWinner(player.points + 1);
    }

  return (
    <div className='button'>
      <button className='button__include' onClick={handleOnClick}> je vote {player.firstname}</button>
    </div>
  );
};

export default VotingButton;
