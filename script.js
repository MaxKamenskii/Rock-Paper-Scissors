console.log("Hello world!");
document.write("Hello World!");

//generate a number from 0 to 1
function getComputerChoice() {
    let pc = Math.random();
    if(pc = 0) {
        console.log("rock");
    }
    else if (pc < 0.5) {
        console.log("scissors");
    }
    else {
        console.log("paper");
    }
}
getComputerChoice();
//if the number is 0 return rock
//if the number is less than 0.5 return scissors
//if the nuber is more than 0.5 return paper