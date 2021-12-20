function computerPlay(){
  let randomNum =  Math.floor(Math.random() * 3); 
  if (randomNum === 0){
    return "Rock"; 
  } else if (randomNum === 1){
    return "Paper";
  } else if (randomNum === 2){
    return "Scissors"; 
  }
} 

const playerSelection = "Rock"; 
const computerSelection = computerPlay(); 

function playRound(playerSelection, computerSelection){
  if (playerSelection === "Rock" && computerSelection === "Paper"){
    return "You Lose! Paper beats Rock"; 
  } else if (playerSelection === "Rock" && computerSelection === "Scissors"){
    return "You win! Rock beats Scissors"; 
  } else if (playerSelection === "Paper" && computerSelection === "Rock"){
    return "You win! Paper beats Rock"
  } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
    return "You lose! Scissors beats Paper"
  } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
    return "You win! Scissors beats Paper"
  } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
    return "You lose! Rock beats scissors"
  } else if (playerSelection === computerSelection){
    return "Tie!"
  }
}

console.log(playRound(playerSelection, computerSelection))