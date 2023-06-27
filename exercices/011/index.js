// select soccer team players (DOM exercice)

function pickPlayer() {
    const playerName = document.querySelector(`#playerName`).value;
    const playerPosition = document.querySelector(`#playerPosition`).value;
    const playerNumber = document.querySelector(`#playerNumber`).value;

    const confirmation = confirm(`Você gostaria de escalar o jogador ${playerName}, camisa ${playerNumber}, como ${playerPosition}?`);

    if (confirmation) {

        const playerItem = document.createElement(`li`);
        playerItem.id = `shirt${playerNumber}`;
        playerItem.innerText = `Jogador: ${playerName} / Posição: ${playerPosition} / Camisa: ${playerNumber}.`;
        
        const playersUl = document.querySelector(`#playersUl`);
        playersUl.appendChild(playerItem);

        document.querySelector(`#playerName`).value = '';
        document.querySelector(`#playerPosition`).value = '';
        document.querySelector(`#playerNumber`).value = '';
    }
}
function removePlayer() {
    const playerNumber = document.querySelector(`#playerNumber`).value;
    const confirmation = confirm(`Você gostaria de remover o jogador camisa ${playerNumber}?`);

    if(confirmation) {
        const playerToRemove = document.querySelector(`#shirt${playerNumber}`);
        playerToRemove.remove();
        document.querySelector(`#playerNumber`).value = '';
    }
}


