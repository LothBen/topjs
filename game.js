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
































