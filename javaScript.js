 let computerScore = 0;
 let humanScore = 0;
 
 function getComputerChoice(){
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    let computer = Math.floor(Math.random() * 3);

    if(computer === 0){
        return rock;
    }
    else if(computer === 1){
        return paper;
    }
    else {
        return scissors;
    }
}  

function getHumanChoice(){
    let humanChoice = prompt("Do you have rock, paper or scissors? ");

    if(humanChoice.toLowerCase() === "rock"){
        return "Rock";
    }
    else if(humanChoice.toLocaleLowerCase() === "paper"){
        return "Paper";
    }
    else if(humanChoice.toLocaleLowerCase() === "scissors"){
        return "Scissors";
    }
    else{
        return "That option is not valid or you wrote it wrong";
    }

}

function playRound(computerChoice, humanChoice){
    if( computerChoice === humanChoice){
        return "Tie, try again"
    }
    else if(computerChoice === "Rock" && humanChoice === "Scissors"){
        computerScore += 1;
        return console.log("Computer wins, rock beats scissors");
    }
    else if(computerChoice === "Scissors" && humanChoice === "Rock"){
        humanScore += 1;
        return console.log("Human wins, rock beats scissors");
    }
    else if(computerChoice === "Rock" && humanChoice === "Paper"){
        humanScore += 1;
        return console.log("Human wins, paper beats rock");
    }
    else if(computerChoice === "Paper" && humanChoice === "Rock"){
        computerScore += 1;
        return console.log("Computer wins, paper beats rock");
    }
    else if(computerChoice === "Paper" && humanChoice === "Scissors"){
        humanScore += 1;
        return console.log("Human wins, scissors beats paper");
    }
    else if(computerChoice === "Scissors" && humanChoice === "Paper"){
        computerScore += 1;
        return console.log("Computer wins, scissors beats paper");
    }
}
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(computerSelection, humanSelection);