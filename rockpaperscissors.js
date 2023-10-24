function getComputerChoice() {
   const choices = ["rock","paper","scissors"]
   var choice = choices[Math.floor(Math.random()*choices.length)]
   return choice 
}


console.log(getComputerChoice())