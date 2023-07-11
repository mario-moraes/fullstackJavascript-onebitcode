let player = ``;
let virtualBoard = [];

const startGameBtn = document.querySelector(`#start-game-btn`);
startGameBtn.addEventListener(`click`, beginGame);

function beginGame() {
  player = `player-one`;
  virtualBoard = [['', '', ''], ['', '', ''], ['', '', '']];
  document.querySelector(`.gaming-log`).innerHTML = `Player Turn: <span id="players-turn"></span>`;
  
  updateTitle();
  
  const boardSpans = document.querySelectorAll(`#board span`);
  boardSpans.forEach(function(span){
    span.classList.remove(`win`);
    span.innerText = ``;
    span.classList.add(`cursor-pointer`);
    span.addEventListener(`click`, handleRegionClick)
  });
};

function updateTitle() {
  const playerInput = document.getElementById(player);
  document.querySelector(`#players-turn`).innerText = playerInput.value;
};

function disableRegion(region) {
  region.removeEventListener(`click`, handleRegionClick);
};

function handleRegionClick(e){
  const span = e.currentTarget;
  const region = span.dataset.region;
  const rowColumnPair = region.split(`.`);
  const row = rowColumnPair[0];
  const column = rowColumnPair[1];
  
  if(player === `player-one`) {
    span.innerText = `X`;
    virtualBoard[row][column] = `X`;
  } else {
    span.innerText = `O`;
    virtualBoard[row][column] = `O`;
  }
  
  disableRegion(span);
  
  const winRegions = getWinRegions();
  if (winRegions.length > 0) {
    handleWin(winRegions);
  } else if (virtualBoard.flat().includes('')) {
    player = player === `player-one` ? `player-two` : `player-one`;
    updateTitle();
  } else {
    document.querySelector(`.gaming-log`).innerHTML = `Draw! Click on Start Game to play again.`;
  }
};

function getWinRegions() {
  const winRegions = [];
  
  if (
    virtualBoard[0][0] && 
    virtualBoard[0][0] === virtualBoard[0][1] && 
    virtualBoard[0][0] === virtualBoard[0][2]
    )
    winRegions.push(`0.0`, `0.1`, `0.2`);
  
  if (
    virtualBoard[1][0] && 
    virtualBoard[1][0] === virtualBoard[1][1] && 
    virtualBoard[1][0] === virtualBoard[1][2]
    )
    winRegions.push(`1.0`, `1.1`, `1.2`);
  
  if (
    virtualBoard[2][0] && 
    virtualBoard[2][0] === virtualBoard[2][1] && 
    virtualBoard[2][0] === virtualBoard[2][2]
    )
    winRegions.push(`2.0`, `2.1`, `2.2`);
  
  if (virtualBoard[0][0] && 
    virtualBoard[0][0] === virtualBoard[1][0] && 
    virtualBoard[0][0] === virtualBoard[2][0]
    )
    winRegions.push(`0.0`, `1.0`, `2.0`);
  
  if (
    virtualBoard[0][1] && 
    virtualBoard[0][1] === virtualBoard[1][1] && 
    virtualBoard[0][1] === virtualBoard[2][1]
    )
    winRegions.push(`0.1`, `1.1`, `2.1`);
  
  if (
    virtualBoard[0][2] && 
    virtualBoard[0][2] === virtualBoard[1][2] && 
    virtualBoard[0][2] === virtualBoard[2][2]
    )
    winRegions.push(`0.2`, `1.2`, `2.2`);
  
  if (
    virtualBoard[0][0] && 
    virtualBoard[0][0] === virtualBoard[1][1] && 
    virtualBoard[0][0] === virtualBoard[2][2]
    )
    winRegions.push(`0.0`, `1.1`, `2.2`);
  
  if (
    virtualBoard[0][2] && 
    virtualBoard[0][2] === virtualBoard[1][1] && 
    virtualBoard[0][2] === virtualBoard[2][0]
    )
    winRegions.push(`0.2`, `1.1`, `2.0`);
  
  return winRegions
};

function handleWin(regions) {
  regions.forEach(function (region){
    document.querySelector(`[data-region="${region}"]`).classList.add(`win`);
    }
  );
  const playerName = document.getElementById(player).value;
  document.querySelector(`.gaming-log`).innerHTML = `${playerName} winned!`;
};

