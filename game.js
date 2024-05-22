// Get human and computer choice

function getHumanChoice() {
    let input = prompt(("Please enter your choice: ").toLowerCase());
    while (input !== "rock" && input !== "paper" && input !== "scissors") {
        input = prompt("Please enter your choice: ").toLowerCase();
    }
    return input;
}

function getComputerChoice() {
    const computerSelection = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return computerSelection[randomIndex];
}

// Function to play 5 rounds and declare and keep track of scores
function playRound() {
    
    let humanScore = 0;
    let computerScore = 0;
    let humanSelection;
    let computerSelection;

    while (humanScore < 5 && computerScore < 5) {
        let humanWinCount = ((`YOU (${humanSelection}) WIN, Computer (${computerSelection}) lost.`));
        let computerWinCount = ((`YOU (${humanSelection}) lost, Computer (${computerSelection}) won.`));

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    if (humanSelection === computerSelection) {
        console.log(`YOU picked (${humanSelection}), and COMPUTER picked (${computerSelection}), IT'S A TIE!`);
    } else if (humanSelection === 'rock' && (computerSelection === 'paper' || computerSelection === 'scissors') || (humanSelection === 'scissors' && computerSelection === 'paper')) {
        console.log(humanWinCount);
        humanScore++;
        console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`);
    } else if ((humanSelection === 'scissors' && computerSelection === 'rock') || (humanSelection === 'paper' && (computerSelection === 'scissors' || computerSelection === 'rock'))) {
        console.log(computerWinCount);
        computerScore++;
        console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`);
    } else {
        console.log('you entered wrongly!');
    }
}
// A consdition to determine the winner after 5th round.
if (humanScore === 5 ) {
    console.log(`Game Over, You Won`);
} else if (computerScore === 5) {
    console.log(`Game Over, Computer Won`)
} else {
    console.log(`Game Over. TIE!`)
}
}

playRound();































