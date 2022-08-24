const rockBtn = document.querySelector('.rockBtn'); 
const paperBtn = document.querySelector('.paperBtn'); 
const scsisorsBtn = document.querySelector('.scissorsBtn'); 
const outcome = document.querySelector('.outcome'); 
const compOutcome = document.querySelector('.compChoice'); 
const playerOutcome = document.querySelector('.playerChoice'); 
const gameScore = document.querySelector('.compScoreContainer');
const ps = document.querySelector('.playerScoreContainer'); 

let playerScore = 0; 
let compScore = 0; 


const computerChoice = () => {
    let randomNum = Math.floor(Math.random() * 3); 
    let choiceArray = ['rock', 'paper', 'scissors']; 
    let compChoice = choiceArray[randomNum]; 
    const computerText = document.createElement('p'); 
    computerText.textContent = ',' + compChoice; 
    compOutcome.appendChild(computerText); 
    return compChoice; 
}

function gameRound(playerSelection, computerSelection) {
   if (playerSelection === computerSelection) {
    const gameText = document.createElement('h1'); 
    gameText.classList.add = 'gameText'; 
    gameText.textContent = 'You Tied!   '
    outcome.appendChild(gameText); 
   }else if (playerSelection === 'rock' && computerSelection === 'paper') {
    const gameText = document.createElement('h1'); 
    gameText.classList.add = 'gameText';   
    gameText.textContent = 'you lose! rock is covered by paper.  '; 
    outcome.appendChild(gameText); 
    compScore++; 
    let compScoreDisplay = document.createElement('h1'); 
    compScoreDisplay.textContent = compScore; 
    gameScore.appendChild(compScoreDisplay); 
   }else if (playerSelection === 'paper' && computerSelection === 'rock') {
    const gameText = document.createElement('h1'); 
    gameText.classList.add = 'gameText'; 
    gameText.textContent = 'You win! paper covers rock!,   '; 
    outcome.appendChild(gameText); 
    playerScore++; 
   }else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    const gameText = document.createElement('h1'); 
    gameText.classList.add = 'gameText'; 
    gameText.textContent = 'you lose! scissors are crushed by rock!,   '; 
    outcome.appendChild(gameText); 
    compScore++
    let compScoreDisplay = document.createElement('h1'); 
    compScoreDisplay.textContent = compScore; 
    gameScore.appendChild(compScoreDisplay);  
   }else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    const gameText = document.createElement('h1');
    gameText.classList.add = 'gameText';  
    gameText.textContent = 'You Win! rock crushes scissors!,   '; 
    outcome.appendChild(gameText); 
    playerScore++
   }else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    const gameText = document.createElement('h1'); 
    gameText.classList.add = 'gameText';  
    gameText.textContent = 'You Win! Scissors cuts paper!,   '; 
    outcome.appendChild(gameText); 
    playerScore++
    const playerScoreDisplay = document.createElement('h1'); 
    playerScoreDisplay.textContent = playerScore; 
    ps.appendChild(playerScoreDisplay); 
   }else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    const gameText = document.createElement('h1');
    gameText.classList.add = 'gameText';  
    gameText.textContent = 'You Lose! Paper is cut by scissors,  '; 
    outcome.appendChild(gameText); 
    compScore++
    let compScoreDisplay = document.createElement('h1'); 
    compScoreDisplay.textContent = compScore; 
    gameScore.appendChild(compScoreDisplay); 
   }
   const gameScoreKeep = () => {
    if (playerScore = 5) {
        let scoreText = document.createElement('h1'); 
        scoreText.textContent = 'you win! you scored 5 points before the computer did';

    }else if (compScore = 5) {
        let scoreText = document.createElement('h1'); 
        scoreText.textContent = 'you lost! the computer scored 5 points before you did';
    }
}
}


rockBtn.addEventListener('click', () => {
    playerSelection = 'rock'; 
    computerSelection = computerChoice(); 
    gameRound(playerSelection, computerSelection); 
    gameScoreKeep()
})

paperBtn.addEventListener('click', () => {
    playerSelection = 'paper'; 
    computerSelection = computerChoice(); 
    gameRound(playerSelection, computerSelection); 
    gameScoreKeep()
})

scsisorsBtn.addEventListener('click', () => {
    playerSelection = 'scissors'; 
    computerSelection = computerChoice(); 
    gameRound(playerSelection, computerSelection); 
    gameScoreKeep()
})

const gameScoreKeep = () => {
    if (playerScore = 5) {
        let scoreText = document.createElement('h1'); 
        scoreText.textContent = 'you win! you scored 5 points before the computer did';

    }else if (compScore = 5) {
        let scoreText = document.createElement('h1'); 
        scoreText.textContent = 'you lost! the computer scored 5 points before you did';
    }
}
