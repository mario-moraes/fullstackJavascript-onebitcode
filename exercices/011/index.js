// select soccer team players (DOM exercice)

const team = [];

function PickPlayer() {
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
        team.push(playerInfo);
    }

}
