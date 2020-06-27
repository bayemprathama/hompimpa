const body = document.querySelector('body');
const batuBtn = document.querySelector('.batu');
const guntingBtn = document.querySelector('.gunting');
const kertasBtn = document.querySelector('.kertas');
const hasil = document.querySelector('.hasil');
const bot = document.querySelector('.bot');
const pScore = document.querySelector('.player-score');
const bScore = document.querySelector('.bot-score');
const rstScore = document.querySelector('.reset-score');
const playerWin = 'Kamu Menang';
const botWin = 'Bot Menang';
const draw = 'Draw';
let playerScore = 0;
let botScore = 0;

batuBtn.addEventListener('click', batu);
guntingBtn.addEventListener('click', gunting);
kertasBtn.addEventListener('click', kertas);
rstScore.addEventListener('click', resetScore);
pScore.innerHTML = playerScore;
bScore.innerHTML = botScore;

function resetScore() {
  playerScore = 0;
  botScore = 0;
  bScore.innerHTML = botScore;
  pScore.innerHTML = playerScore;
}

function addBotScore() {
  botScore++;
  bScore.innerHTML = botScore;
}
function addPlayerScore() {
  playerScore++;
  pScore.innerHTML = playerScore;
}

function botAnswer() {
  const ai = ['batu', 'gunting', 'kertas'];
  const jAi = ai[Math.floor(Math.random() * ai.length)];
  return jAi;
}

function batu() {
  //randoming bot answer
  const jawabanBot = botAnswer();
  bot.innerHTML = jawabanBot.toUpperCase();

  if (jawabanBot === 'batu') {
    hasil.innerHTML = draw.toUpperCase();
  } else if (jawabanBot === 'gunting') {
    hasil.innerHTML = playerWin.toUpperCase();
    addPlayerScore();
  } else if (jawabanBot === 'kertas') {
    hasil.innerHTML = botWin.toUpperCase();
    addBotScore();
  }
}
function gunting() {
  //randoming bot answer
  const jawabanBot = botAnswer();
  bot.innerHTML = jawabanBot.toUpperCase();

  if (jawabanBot === 'batu') {
    hasil.innerHTML = botWin.toUpperCase();
    addBotScore();
  } else if (jawabanBot === 'gunting') {
    hasil.innerHTML = draw.toUpperCase();
  } else if (jawabanBot === 'kertas') {
    hasil.innerHTML = playerWin.toUpperCase();
    addPlayerScore();
  }
}
function kertas() {
  //randoming bot answer
  const jawabanBot = botAnswer();
  bot.innerHTML = jawabanBot.toUpperCase();

  if (jawabanBot === 'batu') {
    hasil.innerHTML = playerWin.toUpperCase();
    addPlayerScore();
  } else if (jawabanBot === 'gunting') {
    hasil.innerHTML = botWin.toUpperCase();
    addBotScore();
  } else if (jawabanBot === 'kertas') {
    hasil.innerHTML = draw.toUpperCase();
  }
}
