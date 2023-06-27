// select soccer team players (DOM exercice)

function pickPlayer() {
    const playerName = document.querySelector(`#playerName`).value;
    const playerPosition = document.querySelector(`#playerPosition`).value;
    const playerNumber = document.querySelector(`#playerNumber`).value;

    const confirmation = confirm(`Você gostaria de escalar o jogador ${playerName}, camisa ${playerNumber}, como ${playerPosition}?`);

    if (confirmation) {
        const playerInfo = {
            playerName,
            playerPosition,
            playerNumber
        }

        const playersUl = document.querySelector(`#playersUl`);

        const li = document.createElement(`li`);
        
        li.innerText = `Jogador: ${playerInfo.playerName} / Posição: ${playerInfo.playerPosition} / Camisa: ${playerInfo.playerNumber}.`;

        playersUl.appendChild(li);

        document.querySelector(`#playerName`).value = '';
        document.querySelector(`#playerPosition`).value = '';
        document.querySelector(`#playerNumber`).value = '';
    }
}
function removePlayer() {
    const playerNumber = document.querySelector(`#playerNumber`).value;
    const confirmation = confirm(`Você gostaria de remover o jogador camisa ${playerNumber}?`);

    if(confirmation) {
    }
}


