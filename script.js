console.log("Hello world!");
// document.write("Hello World!");

function clearChoices() {
        document.getElementById("rockPic1").style.display = 'none';
        document.getElementById('paperPic1').style.display = 'none';
        document.getElementById('scissorsPic1').style.display = 'none';
        document.getElementById("rockPic2").style.display = 'none';
        document.getElementById('paperPic2').style.display = 'none';
        document.getElementById('scissorsPic2').style.display = 'none';
}

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

// function getHumanChoice() {
//     let humanChoice = prompt('Make you choice!')
//     humanChoice = humanChoice.toLowerCase();
//     // console.log(`getHumanChoice is ${humanChoice}`)
//     return humanChoice;
// };




function playGame() {
    document.getElementById('cupPic1').style.display = 'none';
    document.getElementById('cupPic2').style.display = 'none';
    document.getElementById('handshakePic').style.display = 'none';
    function displayComputerPicture(cChoice) {
        if (cChoice === 'rock'){
            document.getElementById("rockPic2").style.display = 'flex';
        } else if  (cChoice === 'paper') {
            document.getElementById("paperPic2").style.display = 'flex';
        } else if  (cChoice === 'scissors') {
            document.getElementById("scissorsPic2").style.display = 'flex';
        }
    }

    document.getElementById('buttons').style.display = 'flex';
    
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

    // let humanSelection = getHumanChoice();
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
                        computerScore++;
                        console.log('You lose! Scissors beats Paper!')
                    } else if (humanChoice === computerChoice) {
                        console.log('That is a draw!')
                    };

            
                    round++;
                    console.log(`Round ${round} was played!`)
                    console.log(`Humanscore is ${humanScore}`)
                    console.log(`Comoutercore is ${computerScore}`)
                    function endGame() {
                        if (humanScore > computerScore) {
                            console.log("----YOU win!----")
                            clearChoices();
                            document.getElementById('cupPic1').style.display = 'flex';
                        } if (humanScore === computerScore) {
                            clearChoices();
                            console.log("----That was a draw :(----")
                            document.getElementById('handshakePic').style.display = 'block';
                        } else if (humanScore < computerScore) {
                            console.log("----You lose! Computer WINS!----")
                            clearChoices();
                            document.getElementById('cupPic2').style.display = 'flex';
                        }
                        document.getElementById('buttons').style.display = 'none';
                    }

                    if(round === 5) {
                        endGame();
                    }
                    document.getElementById("hScore").innerText = humanScore;
                    document.getElementById("cScore").innerText = computerScore;
                    document.getElementById("rPlayed").innerText = round;          
    };

    // Declare functions for each button
    function clickedRock() {
        clearChoices();
        document.getElementById("rockPic1").style.display = 'flex';
        humanSelection = "rock";
        displayComputerPicture(computerSelection);
        playRound(humanSelection, computerSelection);
    }
    function clickedPaper() {
        clearChoices();
        document.getElementById('paperPic1').style.display = 'flex';
        humanSelection = "paper";
        displayComputerPicture(computerSelection);
        playRound(humanSelection, computerSelection);
    }
    function clickedScissors() {
        clearChoices();
        document.getElementById('scissorsPic1').style.display = 'flex';
        humanSelection = "scissors";
        displayComputerPicture(computerSelection);
        playRound(humanSelection, computerSelection);
    }
    // Select buttons
    const buttonRock = document.getElementById("rock");
    const buttonPaper = document.getElementById("paper");
    const buttonScissors = document.getElementById("scissors");

    
    
    // Add an event listener for the buttons
    buttonRock.addEventListener('click', clickedRock);
    buttonPaper.addEventListener('click', clickedPaper);
    buttonScissors.addEventListener('click', clickedScissors);

    // playRound(humanSelection, computerSelection);
    // humanSelection = getHumanChoice();
    // playRound(humanSelection, computerSelection);
    // humanSelection = getHumanChoice();
    // playRound(humanSelection, computerSelection);
    // humanSelection = getHumanChoice();
    // playRound(humanSelection, computerSelection);
    // humanSelection = getHumanChoice();
    // playRound(humanSelection, computerSelection);
    
    
    
};

playButton.addEventListener('click', playGame);


