import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import IPlayer from '../interfaces/IPlayer';
import PlayerCard from './PlayerCard';
import VotingButton from './VotingButton';

const Homepage = () => {
  const [player1, setPlayer1] = useState<IPlayer>();
  const [player2, setPlayer2] = useState<IPlayer>();
  const [winnerInfos, setWinnerInfos] = useState<IPlayer>();
  const [winnerBg, setWinnerBg] = useState<string>('');
  const [result, setResult] = useState<number>(0);
  const [cssPlayer1, setCssPlayer1] = useState<string>('');
  const [cssPlayer2, setCssPlayer2] = useState<string>('');
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    const getPlayersList = async () => {
      const url = `${import.meta.env.VITE_DB_URL}api/players?random=true`;
      const { data } = await axios.get(url);
      setPlayer1(data[0]);
      setPlayer2(data[1]);
    };
    getPlayersList();
  }, []);

  const setResultIntoCss = () => {
    if (result === player1?.id) {
      setCssPlayer1('-win');
      setCssPlayer2('-lost');
      setWinnerInfos(player1);
      setWinnerBg('-win');
    }
    if (result === player2?.id) {
      setCssPlayer2('-win');
      setCssPlayer1('-lost');
      setWinnerInfos(player2);
      setWinnerBg('-win');
    }
  };

  useEffect(() => {
    setResultIntoCss();
  }, [result]);

  const handlePlayAgain = () => {
    window.location.reload();
  };

  const handleLeaderBoard = () => {
    navigate('/ranking');
  };

  return (
    <div className={`homepage${winnerBg}`}>
      <h1 className={`homepage__title${winnerBg}`}>
        {!winnerInfos
          ? `Who's the be(a)st player ever ?`
          : `You choose ${winnerInfos.firstname}`}
      </h1>
      <p className="homepage__vs">VS</p>
      <div className="homepage__section">
        <div className={`homepage__section__left${cssPlayer1}`}>
          {player1 && (
            <PlayerCard
              {...player1}
              result={result}
              setResultIntoCss={setResultIntoCss}
            />
          )}
          {player1 && !result && <VotingButton setResult={setResult} {...player1} />}
          {result ? (
            <div className="homepage__section__buttons">
              <button className="button__include" onClick={handlePlayAgain}>
                Rejouer
              </button>
              <button className="button__include" onClick={handleLeaderBoard}>
                Voir le classement
              </button>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className={`homepage__section__right${cssPlayer2}`}>
          {player2 && (
            <PlayerCard
              {...player2}
              result={result}
              setResultIntoCss={setResultIntoCss}
            />
          )}
          {player2 && !result && <VotingButton setResult={setResult} {...player2} />}
          {result ? (
            <div className="homepage__section__buttons">
              <button className="button__include" onClick={handlePlayAgain}>
                Rejouer
              </button>
              <button className="button__include" onClick={handleLeaderBoard}>
                Voir le classement
              </button>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
