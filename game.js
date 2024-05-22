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
    let only5rounds = 0;  // the game will last for 5 rounds

    while (only5rounds < 5) {
        
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        
        let humanWinCount = ((`YOU (${humanSelection}) WIN, Computer (${computerSelection}) lost.`));
        let computerWinCount = ((`YOU (${humanSelection}) lost, Computer (${computerSelection}) won.`));

        if (humanSelection === computerSelection) {
            console.log(`YOU picked (${humanSelection}), and COMPUTER picked (${computerSelection}), IT'S A TIE!`);
            only5rounds++;
        } else if (humanSelection === 'rock' && (computerSelection === 'paper' || computerSelection === 'scissors') || (humanSelection === 'scissors' && computerSelection === 'paper')) {
            console.log(humanWinCount);
            humanScore++;
            console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`);
            only5rounds++;
        } else if ((humanSelection === 'scissors' && computerSelection === 'rock') || (humanSelection === 'paper' && (computerSelection === 'scissors' || computerSelection === 'rock'))) {
            console.log(computerWinCount);
            computerScore++;
            console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`);
            only5rounds++;
        } else {
            console.log('you entered wrongly!');
    }
}
// A consdition to determine the winner after 5th round.
if (humanScore > computerScore ) {
    console.log(`Game Over, You Won`);
} else if (computerScore > humanScore) {
    console.log(`Game Over, Computer Won`)
} else {
    console.log(`Game Over. TIE!`)
}
}

playRound();


// This game comes to an end only when a player gets 5 scores.































