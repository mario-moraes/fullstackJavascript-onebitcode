import { useState } from "react";
import TextInput from "./TextInput";

export default function NewGameForm({addGame}) {
  
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addGame({title, cover});
    setTitle("");
    setCover(""); 
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        id="title"
        label="Title:" 
        value={title}
        setValue={setTitle}
      />
      <TextInput
        id="cover"
        label="Cover URL:"
        value={cover}
        setValue={setCover}
      />
      <button type="submit">Add to library</button>
    </form>
  )
}