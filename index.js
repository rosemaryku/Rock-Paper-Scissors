function computerPlay(){
  const randNum = Math.floor(Math.random() * 3) + 1; 
  let computer = ""; 
  if (randNum === 1){
    computer = "rock"; 
  } else if (randNum === 2){
    computer = "paper"; 
  } else if (randNum ===3){
    computer = "scissors"; 
  }
  return computer; 
}

function playRound(playerSelection, computerSelection){
  let result = ""; 
  let revPlayerSelection = playerSelection.toLowerCase();

  if (revPlayerSelection === computerSelection){
    result = "Draw tie game!"; 
  } else if (revPlayerSelection === "Rock" && computerSelection === "Scissors" || revPlayerSelection === "Paper" && computerSelection === "Rock" || revPlayerSelection === "Scissors" && computerSelection === "Paper"){
    result = `You win! ${revPlayerSelection} beats ${computerSelection}!`; 
  } else {
    result = `You lose! ${computerSelection} beats ${revPlayerSelection}!`; 
  }

  console.log(result); 

}


const playerSelection = "ROCK"; 
const computerSelection = computerPlay(); 
playRound(playerSelection, computerSelection);