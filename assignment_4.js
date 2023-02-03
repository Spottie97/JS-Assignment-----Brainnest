// Return a random choice of Rock, Paper, or Scissors
function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
  }

  // Play a single round of Rock Paper Scissors
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock") {
      if (computerSelection === "rock") {
        return "It's a draw! Both players selected Rock.";
      } else if (computerSelection === "paper") {
        return "You Lose! Paper beats Rock.";
      } else {
        return "You Win! Rock beats Scissors.";
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        return "You Win! Paper beats Rock.";
      } else if (computerSelection === "paper") {
        return "It's a draw! Both players selected Paper.";
      } else {
        return "You Lose! Scissors beat Paper.";
      }
    } else {
      if (computerSelection === "rock") {
        return "You Lose! Rock beats Scissors.";
      } else if (computerSelection === "paper") {
        return "You Win! Scissors beat Paper.";
      } else {
        return "It's a draw! Both players selected Scissors.";
      }
    }
  }

  // Play a 5 round game of Rock Paper Scissors
  function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Rock, Paper, or Scissors?");
      const computerSelection = computerPlay();
      const result = playRound(playerSelection, computerSelection);

      console.log(result);

      if (result.startsWith("You Win")) {
        playerScore++;
      } else if (result.startsWith("You Lose")) {
        computerScore++;
      }
    }

    if (playerScore > computerScore) {
      console.log(
        "You Win the Game! Final Score: " + playerScore + "-" + computerScore
      );
    } else if (playerScore < computerScore) {
      console.log(
        "You Lose the Game! Final Score: " + playerScore + "-" + computerScore
      );
    } else {
      console.log(
        "The game is a draw! Final Score: " + playerScore + "-" + computerScore
      );
    }
  }

  game();