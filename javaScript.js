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

console.log(getComputerChoice());