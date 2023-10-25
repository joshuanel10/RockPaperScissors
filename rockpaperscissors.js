personScore = 0;
computerScore = 0;


function getComputerChoice() {
   const choices = ["rock","paper","scissors"]
   var choice = choices[Math.floor(Math.random()*choices.length)]
   return choice 
}

function playGame(player,computer){
    if (player == "rock"){
        if (computer == "rock"){
            personScore++;
            computerScore++;
            return "It's a tie! Both players chose rock"
        } else if (computer == "paper") {
            computerScore++;
            return "You lose! Paper beats rock"
        } else {
            personScore++;
            return "You win! Rock beats scissors"
        }
    }

    if (player == "paper"){
        if (computer == "paper"){
            computerScore++;
            personScore++;
            return "It's a tie! Both players chose Paper"
        } else if (computer == "scissors") {
            computerScore++;
            return "You lose! Scissors beats Paper"
        } else {
            personScore++;
            return "You win! Paper beats Rock"
        }
    }

    if (player == "scissors"){
        if (computer == "scissors"){
            computerScore++;
            personScore++;
            return "It's a tie! Both players chose Scissors"
        } else if (computer == "paper") {
            computerScore++;
            return "You lose! Rock beats Scissors"
        } else {
            personScore++;
            return "You win! Scissors beats Paper"
        }
    }
}

function getPersonChoice() {
    let choice = prompt("Please choose");
    return choice
}

function game() {
   for (let i = 0; i < 5; i++) {
        let person = getPersonChoice();
        let computer = getComputerChoice();
        console.log(playGame(person.toLowerCase(),computer.toLowerCase()));
        console.log(computer + " : Computers Choice");
        console.log(person + " : Player Choice");
        console.log("Person score: " + personScore);
        console.log("Computer score: " + computerScore);
   }
    
}


       
        
game();
