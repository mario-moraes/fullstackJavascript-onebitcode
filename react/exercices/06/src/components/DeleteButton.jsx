import useStock from "../hooks/useStock"

export default function DeleteButton({ itemId, itemName }) {
  
  const { deleteItem } = useStock();
  
  const handleDelete = () => {
    if (confirm(`Are you sure you want to delete "${ itemName }"?`)) {
      deleteItem(itemId)
    }
  }
  
  return (
    <button
      className="button is-danger is-small"
      onClick={handleDelete}
    >
      Delete
    </button>
  )
}