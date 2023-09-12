export default function Game({title, cover, onRemove}) {
  return (
    <div>
      <img src={cover} alt="game boxart" />
      <div>
        <h2>{title}</h2>
        <button 
          onClick={onRemove}>
            Remove
        </button>
      </div>
    </div>
  )
}