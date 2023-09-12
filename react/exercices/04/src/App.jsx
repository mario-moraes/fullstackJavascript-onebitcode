import { useState } from "react"

function App() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState ("Copy");
  const [passwordSize, setPasswordSize] = useState(12);

  function generatePassword() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
    let newPassword = "";
    
    for (let i = 0; i < passwordSize; i++) {
      const randomPosition = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomPosition];
    }
    
    setPassword(newPassword);
    setCopyText("Copy");
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password);
    setCopyText("Copied");
  }

  return (
    <div className="app">
      <h1>Password generator</h1>
      <div>
        <label 
          htmlFor="passwordSize">Password length:</label>
        <input 
          type="number" 
          id="passwordSize" 
          min={1}
          value={passwordSize}
          onChange={(ev) => setPasswordSize(ev.target.value)}
        />
      </div>
      <button
        onClick={generatePassword}>Generate a password with {passwordSize} characters
      </button>
      <button 
        onClick={copyToClipboard}>{copyText}
      </button>
      <div>
        {password}
      </div>
    </div>
  )
}

export default App
