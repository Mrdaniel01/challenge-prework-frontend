const playAgainBtn = document.getElementById('playAgainBtn')
const modalWinner = document.getElementById('modalWinner')
const gameContainer = document.getElementById('gameContainer')

const playBtn1 = document.getElementById('playBtn1')
const playBtn2 = document.getElementById('playBtn2')

// OCULTAR MODAL / EMPEZAR JUEGO

function hideModalWinner () {
  playAgainBtn.addEventListener("click", addHide, false)
}

function addHide() {
  modalWinner.classList.add('hide');
  gameContainer.classList.remove('hide');
}


hideModalWinner()

//LOGICA BTN PLAY 1

function playBtn_1 () {
  playBtn1.addEventListener('click', randomNumber1, false) 
}

function randomNumber1(){
  let currentLife = 100 
  console.log(currentLife)
  const randomNum = Math.floor(Math.random() * (30 - 10) + 10)
  currentLife = currentLife-randomNum 
  console.log(currentLife)
  
  const remainLife1Num = document.getElementById('remainLife1Num')
  remainLife1Num.innerHTML = currentLife;
} 


playBtn_1()

//LOGICA BTN PLAY 2

function playBtn_2 () {
  playBtn2.addEventListener("click", randomNumber2, false)
}

function randomNumber2 (){
  let ranNum = Math.floor(Math.random() * (10 - 40) + 1)
  console.log('Btn 2' + ranNum)
  return ranNum
}

playBtn_2()


