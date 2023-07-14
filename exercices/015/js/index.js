// calculator project main module

import { alternateTheme } from "./theme.js";
import { copyToClipboard } from "./clipboard.js";
import { calculate } from "./calculate.js";
import { handleKeyEvents, handleClearEvent, handleTyping} from "./keyhandlers.js";

document.querySelectorAll(".charKey").forEach(charKeyBtn => {
  charKeyBtn.addEventListener("click", handleButtonPress);
});

document.querySelector("#clear").addEventListener("click", handleClearEvent);
document.querySelector("#input").addEventListener("keydown", handleTyping);
document.querySelector("#equal").addEventListener("click", calculate);
document.querySelector("#copyToClipboard").addEventListener("click", copyToClipboard);
document.querySelector("#themeSwitcher").addEventListener("click", alternateTheme);