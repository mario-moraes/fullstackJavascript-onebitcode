let firstName = prompt("Qual o seu nome?");
let surname = prompt("Qual seu sobrenome?");
let studyField = prompt("Qual sua área de estudo?");
let birthYear = parseInt(prompt("Qual seu ano de nascimento?"));

let date = new Date();
date = date.getFullYear(); 
let age = date - birthYear;

let log = document.querySelector("#log");

log.innerHTML = `Olá ${firstName} ${surname}, vejo que você estuda ${studyField} e tem ${age} anos de idade. Parabéns, seu cadastro foi <strong>realizado com sucesso!</strong>`;
