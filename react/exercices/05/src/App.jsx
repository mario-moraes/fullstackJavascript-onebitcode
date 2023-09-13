import { useState } from "react";

export default function App() {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState(""); 

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const newComment = {
      id: Math.floor(Math.random()*100000),
      author,
      content,
      createdAt: new Date()
    }
    console.log(newComment);
    setAuthor("");
    setContent("");
  }
  
  return (
    <div id="app">
      <h1>Comment section</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">Email</label>
        <input 
          type="email" 
          id="author" 
          required
          value={author}
          onChange={(ev) => setAuthor(ev.target.value)} 
        />
        <label htmlFor="content">Comment</label>
        <textarea 
          id="content" 
          cols="30" 
          rows="6" 
          required
          value={content}
          onChange={(ev) => setContent(ev.target.value)}
          ></textarea>
        <button type="submit">Submit</button>
      </form>
      <hr />
      <section id="comments">
        <div>
          <h3>author@email.com</h3>
          <span>Published 01/01/2023</span>
          <p>Example comment</p>
        </div>
      </section>
    </div>
  )
}