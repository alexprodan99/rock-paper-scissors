let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const scoreBoardDiv = document.querySelector('.score-board');
const resultDiv = document.querySelector('.result');
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById('paper');
const scissorsDiv = document.getElementById('scissors');



const getComputerOption = () => {
    const options = ['rock', 'paper', 'scissors'];
    const optionIndex = Math.floor(Math.random() * options.length);
    return options[optionIndex];
};

const userWin = (userChoice, computerChoice) => {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultDiv.innerHTML = userChoice +  " beats " + computerChoice + ".User Wins!";
};
const computerWin = (userChoice, computerChoice) => {
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultDiv.innerHTML = computerChoice +  " beats " + userChoice + ".Computer Wins!";
};

const draw = () => {
    resultDiv.innerHTML = 'DRAW!';
}

const playMove = option => {
    const computerOption = getComputerOption();
    // User Wins
    if(option === 'paper' && computerOption === 'rock') {
        userWin(option, computerOption);
    }else if(option === 'rock' && computerOption === 'scissors') {
        userWin(option, computerOption);
    }else if(option === 'scissors' && computerOption === 'paper') {
        userWin(option, computerOption);
    }else if(option === computerOption) {
        draw();
    }else {
         //Else computer wins
         computerWin(option, computerOption);
    }

};

const main = () => {
    
    rockDiv.addEventListener('click', () => {
        playMove("rock");    
    });

    paperDiv.addEventListener('click', () => {
        playMove("paper");
    });

    scissorsDiv.addEventListener('click', () => {
        playMove("scissors");
    });
};


main();