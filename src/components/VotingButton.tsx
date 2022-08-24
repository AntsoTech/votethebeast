import axios from 'axios';
import React from 'react';

interface Props {
  id: number;
  firstname: string;
  points: number;
  setResult: React.Dispatch<React.SetStateAction<number>>;
}

const VotingButton = ({ setResult, id, firstname, points }: Props) => {
  // Add +1 point to the voted player (the winner)
  const addPointTheWinner = async (newPoints: number) => {
    const url = `${import.meta.env.VITE_API_URL}api/players/${id}`;
    const { data } = await axios.put(
      url,
      {
        points: newPoints,
      },
      { withCredentials: true },
    );
    console.log(data);
  };

  // Function to handleOnClick
  const handleOnClick = () => {
    addPointTheWinner(points + 1);
    setResult(id);
    // window.location.reload();
  };

  return (
    <div className="button">
      <button className="button__include" onClick={handleOnClick}>
        {' '}
        je vote {firstname}
      </button>
    </div>
  );
};

export default VotingButton;
