import { useState } from "react"

function App() {
  const [password, setPassword] = useState("");

  function generatePassword() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
    const length = 12;
    let newPassword = "";
    
    for (let i = 0; i < length; i++) {
      const randomPosition = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomPosition];
    }
    
    setPassword(newPassword);
  }

  return (
    <div className="app">
      <h1>Password generator</h1>
      <button onClick={generatePassword}>Generate</button>
      <button>Copy</button>
      <div>{password}</div>
    </div>
  )
}

export default App
