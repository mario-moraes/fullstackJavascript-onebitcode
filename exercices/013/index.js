const startGameBtn = document.querySelector(`#start-game-btn`);
startGameBtn.addEventListener(`click`, beginGame);

let player = ``;

function updateTitle() {
  const playerInput = document.getElementById(player)
  document.querySelector(`#players-turn`).innerText = playerInput.value
};

function beginGame() {
  const boardSpans = document.querySelectorAll(`#board span`);
  boardSpans.forEach(function(span){
    span.addEventListener(`click`, handleRegionClick)
  });
};

function handleRegionClick(e){
  const span = e.currentTarget;
  if(player === `playerOne`) {
    span.innerText = `X`;
  } else {
    span.innerText = `O`;
  }
  disableRegion(span);

  const winRegions = getWinRegions()
  if (winRegions.length > 0) {
    handleWin(winRegions);
  } else if (vBoard.flat().includes('')) {
    turnPlayer = turnPlayer === 'playerOne' ? 'playerTwo' : 'playerOne'
    updateTitle()
  } else {
    document.querySelector('h2').innerHTML = 'Empate!'
  }
};

function disableRegion(region) {
  region.removeEventListener(`click`, handleClick);
};

function getWinRegions() {
  const winRegions = [];
  if (vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2])
    winRegions.push("0.0", "0.1", "0.2");
  if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2])
    winRegions.push("1.0", "1.1", "1.2");
  if (vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2])
    winRegions.push("2.0", "2.1", "2.2");
  if (vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0])
    winRegions.push("0.0", "1.0", "2.0");
  if (vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1])
    winRegions.push("0.1", "1.1", "2.1");
  if (vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2])
    winRegions.push("0.2", "1.2", "2.2");
  if (vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2])
    winRegions.push("0.0", "1.1", "2.2");
  if (vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0])
    winRegions.push("0.2", "1.1", "2.0");
  return winRegions
};

