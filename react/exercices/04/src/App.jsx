import { useState } from "react"
import Input from "./components/Input"

function App() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState ("Copy");
  const [customLength, setCustomLength] = useState(12);
  const [showInput, setShowInput] = useState(false);

  const passwordLength = showInput ? customLength : 8;

  function generatePassword() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
    let newPassword = "";
    
    for (let i = 0; i < passwordLength; i++) {
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
          htmlFor="showInput" id="showInput">Customize length:
        </label>
        <input 
          type="checkbox" 
          id="showInput"
          value={showInput}
          onChange={() => setShowInput((currentState)=> !currentState)} 
        />
      </div>
        { showInput && (
           <div>
             <label
             htmlFor="passwordSize">Password length:
            </label>
             <Input
               customLength={customLength}
               setCustomLength={setCustomLength}
             />
           </div>
          )
        }
      <button
        onClick={generatePassword}>Generate a password with {passwordLength} characters
      </button>
      <button 
        onClick={copyToClipboard}>
        {copyText}
      </button>
      <div>
        {password}
      </div>
    </div>
  )
}

export default App
