import ItemForm from "../../components/ItemForm";
import useStock from "../../hooks/useStock"
import { useParams } from "react-router-dom"


export default function UpdateItem() {

  const { getItem } = useStock()  
  const { id } = useParams()
  const item = getItem(id)
  
  return (
    <>
    <h2>Update Item</h2>
    <ItemForm itemToUpdate={item} />
    </>
  )
}