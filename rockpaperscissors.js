let person = prompt("Please choose rock, paper or scissors");
let computer = getComputerChoice();


function getComputerChoice() {
   const choices = ["rock","paper","scissors"]
   var choice = choices[Math.floor(Math.random()*choices.length)]
   return choice 
}

function playGame(player,computer){
    if (player == "rock"){
        if (computer == "rock"){
            return "It's a tie! Both players chose rock"
        } else if (computer == "paper") {
            return "You lose! Paper beats rock"
        } else {
            return "You win! Rock beats scissors"
        }
    }

    if (player == "paper"){
        if (computer == "paper"){
            return "It's a tie! Both players chose Paper"
        } else if (computer == "scissors") {
            return "You lose! Scissors beats Paper"
        } else {
            return "You win! Paper beats Rock"
        }
    }

    if (player == "scissors"){
        if (computer == "scissors"){
            return "It's a tie! Both players chose Scissors"
        } else if (computer == "paper") {
            return "You lose! Rock beats Scissors"
        } else {
            return "You win! Scissors beats Paper"
        }
    }
}





console.log(computer + " : Computers Choice");
console.log(person + " : Player Choice");
console.log(playGame(person.toLowerCase(),computer.toLowerCase()));
