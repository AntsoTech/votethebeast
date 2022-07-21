import React from 'react';

interface Props {
  id: number;
  firstname: string;
  lastname: string;
  birthdate: Date;
  picture: string;
  winnerpicture: string;
  points: number;
  idPosition: number;
  idCountry: number;
  position: string;
  country: string;
}

const PlayerCard = (player: Props) => {
  return (
    <div className="playercard">
      <div className="playercard__image">
        <img src={player.picture} alt={player?.firstname} />
      </div>
      <div className="playercard__infos">
        <h2>
          {player.firstname} {player.lastname}
        </h2>
        <div className="playercard__infos__secondary">
          <h3>{player.country}</h3>
          {/* <h3>{player.points} points</h3> */}
          <h3>{player.position}</h3>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
