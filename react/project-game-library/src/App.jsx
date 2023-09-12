import { useState } from "react";

export default function App() {

  const [games, setGames] = useState([]);
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");
  
  const addGame = ({title, cover}) => {
    const id = Math.floor(Math.random() * 1000000);
    const game = { id, title, cover};
    setGames((state) => [...state, game]); 
  };
  
  const removeGame = (id) => {
    setGames((state) => state.filter((game) => game.id !== id))
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addGame({title, cover});
    setTitle("");
    setCover(""); 
  };

  return (
    <div id="app">
      <h1>Game Library</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="cover">Cover</label>
          <input
            type="text"
            name="cover"
            id="cover"
            value={cover}
            onChange={(e) => setCover(e.target.value)} 
          />
          </div>
          <button type="submit">Add to library</button>
      </form>
      <div className="games">
        {games.map((game) => (
          <div key={game.id}>
            <img src={game.cover} alt="game boxart" />
            <div>
              <h2>{game.title}</h2>
              <button 
                onClick={() => removeGame(game.id)}>
                  Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}