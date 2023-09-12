export default function Input(props) {
  return (
    <input 
    type="number" 
    id="passwordSize"
    min={1}
    value={props.customLength}
    onChange={(ev) => props.setCustomLength(ev.target.value)}
  />
  )
}