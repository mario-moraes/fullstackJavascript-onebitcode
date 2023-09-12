import Game from "./components/Game";
import useGameCollection from "./components/hooks/useGameCollection";
import NewGameForm from "./components/newGameForm";

export default function App() {
  
  const {games, addGame, removeGame} = useGameCollection();

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