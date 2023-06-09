// deck stack program

let deck = [];
let programRunning = true;

while (programRunning) {
let cardsQuantity = deck.length
let menuOptions = parseInt(prompt(`O deck atualmente possui ${cardsQuantity} cartas. 
Escolha uma opção:
1. Inserir carta no deck
2. Puxar uma carta do deck
3. Encerrar programa`));

switch(menuOptions) {
    case 1:
        let cardName = prompt("Qual nome da carta?");
        if (cardName.length === 0 || cardName.trim().length === 0) {
            alert(`Inserção inválida.`);
        } else {
            deck.push(cardName);
        }
        break
    case 2:
        let cardRemoved = deck.pop();
        if (!cardRemoved) {
            alert ("atenção: seu baralho está vazio!");
        } else {
            alert(`Você puxou a carta ${cardRemoved}`);
        }
        break
    case 3:
        programRunning = false;
        alert("Programa encerrado");
        break
    default:
        alert("[ERRO] Opção inválida: escolha de 1 a 3.");
}
}
