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
  result: number;
  setResultIntoCss: () => void;
}

const PlayerCard = ({
  firstname,
  lastname,
  picture,
  winnerpicture,
  position,
  country,
  result,
}: Props) => {
  return (
    <div className="playercard">
      <div className="playercard__image">
        <img src={result ? winnerpicture : picture} alt={firstname} />
      </div>
      <div className="playercard__infos">
        <h2>
          {firstname} {lastname}
        </h2>
        <div className="playercard__infos__secondary">
          <h3>{country}</h3>
          {/* <h3>{player.points} points</h3> */}
          <h3>{position}</h3>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
