// get input from human
function getHumanChoice() {
    let input = prompt(("Please enter your choice: ").toLowerCase());
    while (input !== "rock" && input !== "paper" && input !== "scissors") {
        input = prompt("Please enter your choice: ").toLowerCase();
    }
    return input;
}

// get input from computer 
function getComputerChoice() {
    const computerSelection = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return computerSelection[randomIndex];
}

// game rules & regulation
function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        console.log(`YOU picked (${humanSelection}), and COMPUTER picked (${computerSelection}), IT'S A TIE!`);
    } else if (humanSelection === 'rock' && (computerSelection === 'paper' || computerSelection === 'scissors') || (humanSelection === 'scissors' && computerSelection === 'paper')) {
        console.log(humanWinCount);
        return "humanWon";
    } else if ((humanSelection === 'scissors' && computerSelection === 'rock') || (humanSelection === 'paper' && (computerSelection === 'scissors' || computerSelection === 'rock'))) {
        console.log(computerWinCount);
        return "computerWon";
    } else {
        console.log('you entered wrongly!');
    }
}
