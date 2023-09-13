import { useState } from "react";

export default function App() {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState(""); 
  const [comments, setComments] = useState([]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const newComment = {
      id: Math.floor(Math.random()*100000),
      author,
      content,
      createdAt: new Date()
    }
    setComments((currentState) => [newComment, ...currentState]);
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
        { comments.length > 0 
          ? 
          comments.map((comment) => (
              <div key={comment.id}>
                <h3>{comment.author}</h3>
                <span>{comment.createdAt.toLocaleString()}</span>
                <p>{comment.content}</p>
              </div>))
          : 
          <p>Be the first to comment!</p>
        }
      </section>
    </div>
  )
}