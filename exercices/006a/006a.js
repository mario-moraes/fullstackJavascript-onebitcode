// multiplication table program

let userInput = parseInt(prompt("Para calcular a tabuada, insira um número:"));
let resultLog = "";

for (let i = 1; i<=20; i++) {
    resultLog += `\n${userInput}x${i} = ${userInput*i}`;
}
alert(`A tabuada do número ${userInput} informado é: ${resultLog}`);


