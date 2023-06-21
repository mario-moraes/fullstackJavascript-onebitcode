// palindrome identificator 

let userInput = prompt("Escreva uma palavra e descubra se ela é um palíndromo:");

let reverseWord = "";

for (let i = (userInput.length - 1); i>=0; i--) {
    reverseWord += userInput[i];
} 
if (userInput === reverseWord) {
    alert(`${userInput} é um palíndromo! Sua escrita e pronúncia é a mesma de trás para frente.`);
} else {
    alert(`${userInput} não é um palíndromo, veja: ${reverseWord}.`);
}

/* word line to collum view:

    let input = prompt("qual seu nome?");
    let word = "";

    for (let i = 0; i <= (input.length - 1); i++) {
        word += `\n${input[i]}`;
    }
    alert(word);
*/