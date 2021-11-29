import { useState, createContext } from 'react';

export const GameIdContext = createContext({});

export const GameIdProvider = ({ children }) => {
  const [gameId, setGameId] = useState('1');

  return <GameIdContext.Provider value={{ gameId, setGameId }}>{children}</GameIdContext.Provider>;
};
