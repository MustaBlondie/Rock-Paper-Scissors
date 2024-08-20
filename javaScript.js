const r = document.querySelector(".rock");
const p = document.querySelector(".paper");
const s = document.querySelector(".scissors");

const pc = document.querySelector(".pc");
const human = document.querySelector(".human");

const player = document.querySelector(".player");
const machine = document.querySelector(".machine");

const points = document.querySelector(".points");
const result = document.querySelector(".result");

//function getHumanChoice(){};

function getComputerChoice() {
  let rock = "Rock";
  let paper = "Paper";
  let scissors = "Scissors";
  let computer = Math.floor(Math.random() * 3);

  if (computer === 0) {
    return rock;
  } else if (computer === 1) {
    return paper;
  } else {
    return scissors;
  }
}

function playGame() {
  let computerScore = 0;
  let humanScore = 0;

  function playRound(computerChoice, humanChoice) {
    machine.innerText = "Pc is: " + computerChoice;
    player.innerText = "Human is: " + humanChoice;

    if (computerChoice === humanChoice) {
      return (points.innerText = "Tie, try again");
    } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
      computerScore += 1;
      return (points.innerText = "Computer wins, rock beats scissors");
    } else if (computerChoice === "Scissors" && humanChoice === "Rock") {
      humanScore += 1;
      return (points.innerText = "Human wins, rock beats scissors");
    } else if (computerChoice === "Rock" && humanChoice === "Paper") {
      humanScore += 1;
      return (points.innerText = "Human wins, paper beats rock");
    } else if (computerChoice === "Paper" && humanChoice === "Rock") {
      computerScore += 1;
      return (points.innerText = "Computer wins, paper beats rock");
    } else if (computerChoice === "Paper" && humanChoice === "Scissors") {
      humanScore += 1;
      return (points.innerText = "Human wins, scissors beats paper");
    } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
      computerScore += 1;
      return (points.innerText = "Computer wins, scissors beats paper");
    }
  }

  //const computerSelection = getComputerChoice();
  //const humanSelection = getHumanChoice();

  // playRound(computerSelection, humanSelection);
  function action(n) {
    const computerSelection = getComputerChoice();
    playRound(computerSelection, n.innerText);
    conteoFinal();
  }

  r.addEventListener("click", () => {
    action(r);
  });

  p.addEventListener("click", () => {
    action(p);
  });

  s.addEventListener("click", () => {
    action(s);
  });

  function conteoFinal() {
    pc.innerText = "Puntos pc: " + computerScore;
    human.innerText = "Puntos humano: " + humanScore;

    if (humanScore === 5) {
      result.innerText = "Human WINS!!";
    } else if (computerScore === 5) {
      result.innerText = "Computer WINS!!";
    }
  }
}

playGame();
