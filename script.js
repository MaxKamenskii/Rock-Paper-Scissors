console.log("Hello world!");
document.write("Hello World!");

//generate a number from 0 to 1

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    // console.log(`Computer choice is ${computerChoice}`);
    //if the number is 0 return rock
    if(computerChoice === 0) {
        // console.log(`Computer choice for rock is ${computerChoice}`)
        computerChoice = 'rock';
    }
    //if the number is less than 0.5 return scissors
    else if (computerChoice === 2) {
        // console.log(`Computer choice for scissors is ${computerChoice}`)
        computerChoice = 'scissors';
    }
    //if the nuber is more than 0.5 return paper
    else if (computerChoice === 1) {
        // console.log(`Computer choice for paper is ${computerChoice}`)
        computerChoice = 'paper';
    }
    return computerChoice;
}
// getComputerChoice();
function getHumanChoice() {
    let humanChoice = prompt('Make you choice!')
    // console.log(`getHumanChoice is ${humanChoice}`)
    return humanChoice;
}







function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    let round = 0;
    
    function playRound() {
        let humanSelection;
        let computerSelection;
        
        humanSelection = getHumanChoice();
        // console.log(`humanSelection is ${humanSelection}`);
        computerSelection = getComputerChoice();
        // console.log(`computerSelection is ${computerSelection}`);
        function playLoop(humanChoice, computerChoice) {

            humanChoice.toLowerCase();
            // calculate the score
                if(humanChoice === 'rock' && computerChoice === 'scissors') {
                    humanScore++;
                    console.log('You win! Rock beats scissors!')
                } else if(humanChoice === 'rock' && computerChoice === 'paper') {
                    computerScore++;
                    console.log('You lose! Paper beats Rock!')
                } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
                    computerScore++;
                    console.log('You lose! Rock beats scissors!')
                } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
                    humanScore++; 
                    console.log('You win! Scissors beats paper!')       
                } else if (humanChoice === 'paper' && computerChoice === 'rock') {
                    humanScore++;
                    console.log('You win! Paper beats Rock!')
                } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
                    humanScore++;
                    console.log('You lose! Scissors beats Paper!')
                } else if (humanChoice === computerChoice) {
                    console.log('That is a draw!')
                }
                // console.log(`Human score is ${humanScore}`)
                // console.log(`Computer score is ${computerScore}`)
                round++;
                console.log(`That was round: ${round}`)
        };
        playLoop(humanSelection, computerSelection);
    };
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if(round === 5) {
        if (humanScore > computerScore) {
            console.log('Human wins!')
        } else if(humanScore < computerScore) {
            console.log('Computer wins!')
        } else {
            console.log("That's a draw!")
        }
    }
}


playGame();

