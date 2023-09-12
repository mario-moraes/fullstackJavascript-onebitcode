import { useState } from "react";

export default function useGameCollection() {
  const [games, setGames] = useState(() => {
    const storageGames = localStorage.getItem("game-library");
    
    if (!storageGames) 
    return []
    return JSON.parse(storageGames);
  });
  
  const addGame = ({title, cover}) => {
    const id = Math.floor(Math.random() * 1000000);
    const game = { id, title, cover};
    setGames((state) => {
      const newState = [...state, game];
      localStorage.setItem("game-library", JSON.stringify(newState));
      return (newState)
    }); 
  };
  
  const removeGame = (id) => {
    setGames((state) => {
      const newState = state.filter((game) => game.id !== id);
      localStorage.setItem("game-library", JSON.stringify(newState));
      return (newState)
    });
  };

  return ({games, addGame, removeGame})
}