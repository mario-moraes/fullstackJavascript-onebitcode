let player = ``;
let virtualBoard = [];

function beginGame() {
  player = `playerOne`;
  virtualBoard = [['', '', ''], ['', '', ''], ['', '', '']];
  updateTitle();
  const boardSpans = document.querySelectorAll(`#board span`);
  boardSpans.forEach(function(span){
    span.innerText = ``;
    span.addEventListener(`click`, handleRegionClick)
  });
};

function updateTitle() {
  const playerInput = document.getElementById(player)
  document.querySelector(`#players-turn`).innerText = playerInput.value
};

function handleRegionClick(e){
  const span = e.currentTarget;
  const region = span.dataset.region;
  const rowColumnPair = region.split('.');
  const row = rowColumnPair[0];
  const column = rowColumnPair[1];
  if(player === `playerOne`) {
    span.innerText = `X`;
    virtualBoard[row][column] = 'X';
  } else {
    span.innerText = `O`;
    virtualBoard[row][column] = 'O';
  }
  disableRegion(span);

  const winRegions = getWinRegions();
  if (winRegions.length > 0) {
    handleWin(winRegions);
  } else if (virtualBoard.flat().includes('')) {
    player = player === 'playerOne' ? 'playerTwo' : 'playerOne';
    updateTitle();
  } else {
    document.querySelector('#players-turn').innerHTML = 'Empate!';
  }
};

function disableRegion(region) {
  region.removeEventListener(`click`, handleRegionClick);
};

function handleWin(regions) {
  regions.forEach(function (region) {
  document.querySelector('[data-region="' + region + '"]').classList.add('win')
  })
  const playerName = document.getElementById(player).value
  document.querySelector('h2').innerHTML = playerName + ' venceu!'
}

function getWinRegions() {
  const winRegions = [];
  
  if (virtualBoard[0][0] && virtualBoard[0][0] === virtualBoard[0][1] && virtualBoard[0][0] === virtualBoard[0][2])
    winRegions.push("0.0", "0.1", "0.2");
  
  if (virtualBoard[1][0] && virtualBoard[1][0] === virtualBoard[1][1] && virtualBoard[1][0] === virtualBoard[1][2])
    winRegions.push("1.0", "1.1", "1.2");
  
  if (virtualBoard[2][0] && virtualBoard[2][0] === virtualBoard[2][1] && virtualBoard[2][0] === virtualBoard[2][2])
    winRegions.push("2.0", "2.1", "2.2");
  
  if (virtualBoard[0][0] && vBoard[0][0] === virtualBoard[1][0] && virtualBoard[0][0] === virtualBoard[2][0])
    winRegions.push("0.0", "1.0", "2.0");
  
  if (virtualBoard[0][1] && virtualBoard[0][1] === virtualBoard[1][1] && virtualBoard[0][1] === virtualBoard[2][1])
    winRegions.push("0.1", "1.1", "2.1");
  
  if (virtualBoard[0][2] && virtualBoard[0][2] === virtualBoard[1][2] && virtualBoard[0][2] === virtualBoard[2][2])
    winRegions.push("0.2", "1.2", "2.2");
  
  if (virtualBoard[0][0] && virtualBoard[0][0] === virtualBoard[1][1] && virtualBoard[0][0] === virtualBoard[2][2])
    winRegions.push("0.0", "1.1", "2.2");
  
  if (virtualBoard[0][2] && vBoard[0][2] === virtualBoard[1][1] && virtualBoard[0][2] === virtualBoard[2][0])
    winRegions.push("0.2", "1.1", "2.0");
  return winRegions
};

const startGameBtn = document.querySelector(`#start-game-btn`);
startGameBtn.addEventListener(`click`, beginGame);

