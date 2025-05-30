function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex];
}

function getHumanChoice() {
    return prompt('Enter choice: (rock, paper, scissors)');
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    let humanSelection = humanChoice.toLowerCase()
    let computerSelection = computerChoice

    // Check for tie
    if (humanSelection === computerSelection) {
        console.log(`It's a tie! You both chose ${humanSelection}`)
        return;
    }

    // Win conditions
    const winConditions = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper',
    }

    if (winConditions[humanSelection] === computerSelection) {
        humanScore++
        console.log(`You win! ${humanSelection} beats ${computerSelection}`)
    } else {
        computerScore++
        console.log(`You lose! ${computerSelection} beats ${humanSelection}`)
    }
}

function playGame() {
    let roundsPlayed = 0

    while (roundsPlayed < 5) {
        const humanChoice = getHumanChoice()
        const computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)

        roundsPlayed++
        console.log('Your Score: ' + humanScore)
        console.log('Computer Score: ' + computerScore)
    }

    console.log('Score after ' + roundsPlayed + ' rounds ' + 'Your score: ' + humanScore + ' | ' + 'Computer score: ' + computerScore)
}

playGame()