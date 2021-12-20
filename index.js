function computerPlay(){
  let randomNum =  Math.floor(Math.random() * 3); 
  // console.log(randomNum); 
  if (randomNum === 0){
    console.log("Rock"); 
  } else if (randomNum === 1){
    console.log("Paper");
  } else if (randomNum === 2){
    console.log("Scissors"); 
  }
}

computerPlay(); 