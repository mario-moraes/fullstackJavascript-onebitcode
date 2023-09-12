import { useState } from "react";
import Game from "./components/Game";
import NewGameForm from "./components/newGameForm";

export default function App() {

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

  return (
    <div className="app">
      <h1>Game Library</h1>
      <NewGameForm 
        addGame={addGame}
      />
      <div className="games">
        {games.map((game) => (
          <Game 
            key={game.id}
            title={game.title}
            cover={game.cover}
            onRemove={() => removeGame(game.id)}
          />
        ))}
      </div>
    </div>
  )
}