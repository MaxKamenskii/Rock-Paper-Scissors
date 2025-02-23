console.log("Hello world!");
// document.write("Hello World!");


function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    // console.log(`Computer choice is ${computerChoice}`);
    //if the number is 0 return rock
    if(computerChoice === 0) {
        // console.log(`Computer choice for rock is ${computerChoice}`)
        computerChoice = 'rock';
    }
    //if the nuber is 1 return paper
    else if (computerChoice === 1) {
        // console.log(`Computer choice for paper is ${computerChoice}`)
        computerChoice = 'paper';
    }
    //if the number is 2 return scissors
    else if (computerChoice === 2) {
        // console.log(`Computer choice for scissors is ${computerChoice}`)
        computerChoice = 'scissors';
    }
    return computerChoice;
};

function getHumanChoice() {
    let humanChoice = prompt('Make you choice!')
    humanChoice = humanChoice.toLowerCase();
    // console.log(`getHumanChoice is ${humanChoice}`)
    return humanChoice;
};









function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    function playRound(humanChoice, computerChoice) {
        
        computerSelection = getComputerChoice();

        // humanChoice.toLowerCase();
                // define whether you win or lose
                    if(humanChoice === 'rock' && computerChoice === 'scissors') {
                        humanScore++;
                        console.log('You win! Rock beats Scissors!')
                    } else if(humanChoice === 'rock' && computerChoice === 'paper') {
                        computerScore++;
                        console.log('You lose! Paper beats Rock!')
                    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
                        computerScore++;
                        console.log('You lose! Rock beats Scissors!')
                    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
                        humanScore++; 
                        console.log('You win! Scissors beats Paper!')       
                    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
                        humanScore++;
                        console.log('You win! Paper beats Rock!')
                    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
                        humanScore++;
                        console.log('You lose! Scissors beats Paper!')
                    } else if (humanChoice === computerChoice) {
                        console.log('That is a draw!')
                    };
                    round++;
    };

    
    
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    
    if(round === 5) {
        if (humanScore > computerScore) {
            console.log("You win!")
        } if (humanScore === computerScore) {
            console.log("That was a draw :(")
        } else {
            console.log("You lose! Computer WINS!")
        }
    }
};

playGame();