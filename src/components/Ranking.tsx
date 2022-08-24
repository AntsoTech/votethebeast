import axios from 'axios';
import React, { useEffect, useState } from 'react';

import IPlayer from '../interfaces/IPlayer';

interface ICountry {
  id: number;
  name: string;
  flag: string;
}

const Ranking = () => {
  const [playerList, setPlayerList] = useState<IPlayer[]>();
  const [countriesList, setCountriesList] = useState<ICountry[]>();
  const [position, setPosition] = useState<number>();
  const [country, setCountry] = useState<number>();

  // Get the list of all players and handling filters
  const getPlayersList = async () => {
    let url = `${import.meta.env.VITE_DB_URL}api/players?order=points`;
    if (position) {
      url += `&position=${position}`;
    }
    if (country) {
      url += `&country=${country}`;
    }
    const { data } = await axios.get(url);
    setPlayerList(data);
  };

  // Get all the countries of the player (filter option)
  const getCountriesList = async () => {
    let url = `${import.meta.env.VITE_DB_URL}api/countries`;
    const { data } = await axios.get(url);
    setCountriesList(data);
  };

  useEffect(() => {
    getCountriesList();
  }, []);

  useEffect(() => {
    getPlayersList();
  }, [position, country]);

  return (
    <div className="ranking">
      <div className="ranking__list">
        <div className="ranking__list__title">
          <h1>Leaderboard</h1>
          <p>Filtrer par</p>
          <select
            placeholder=""
            className="ranking__list__title__options"
            onChange={(e) => setPosition(Number(e.target.value))}>
            <option value={0}> Position </option>
            <option value={1}> striker </option>
            <option value={2}> middlefield </option>
            <option value={3}> defender </option>
          </select>
          <select
            placeholder=""
            className="ranking__list__title__options"
            onChange={(e) => setCountry(Number(e.target.value))}>
            <option value={0}> Country </option>
            {countriesList &&
              countriesList.map((country, index) => (
                <option key={index} value={country?.id}>
                  {country?.name}
                </option>
              ))}
          </select>
        </div>
        {playerList &&
          playerList.map((player, index) => (
            <div className="ranking__list__player" key={index}>
              <div className="ranking__list__player__image">
                <img src={player.winnerpicture} alt={player.firstname} />
              </div>
              <h3 className="ranking__list__player__title">
                {player.firstname} {player.lastname}
              </h3>
              <h3 className="ranking__list__player__points">{player.points} ⭐️ </h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Ranking;
