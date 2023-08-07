// reg expressions exercice (email and password validation)

function validateEmail(email) {
  if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
    const err = new Error("Email not valid.");
    err.input = "email";
    throw err
  }
}

const userInputs = {};
userInputs.name = document.querySelector("#name");
userInputs.email = document.querySelector("#email");
userInputs.password = document.querySelector("#password");

const form = document.querySelector("form");
form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  resetFormStyles();
  try {
    userInputs.name.classList.add("success");
    validateEmail(userInputs.email.value);
    userInputs.email.classList.add("success");
  } catch (error) {
      userInputs[err.input].classList.add("error");
      document.querySelector(`#${err.input}-error`).textContent = err.message;
    }
});