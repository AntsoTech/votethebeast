import React from 'react';
import IPlayer from '../interfaces/IPlayer';

interface Props {
  id: number;
  firstname: string;
  lastname: string;
  birthdate: Date;
  picture: string;
  winnerpicture: string;
  points : number;
  idPosition :number;
  idCountry : number;
}

const PlayerCard = (player: Props) => {
  return (
    <div className="playercard">
      <div className="playercard__image">
        <img src="" alt="" />
      </div>
      <div className="playercard__infos">
        <h2> {player.firstname} {player.lastname}</h2>
        <div className='playercard__infos__secondary'>
            <h3>{player.birthdate}</h3>
            <h3>{player.points}</h3>
            <h3>{player.idCountry}</h3>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
