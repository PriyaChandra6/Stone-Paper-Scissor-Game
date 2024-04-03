let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random()*3);
  return options[randIdx];
}

const drawGame = () => {
  //console.log("Game was draw.");
  msg.innerText = "Game was draw! Play again";
  msg.style.backgroundColor = "blue";
}

const showWinner = (userWin, userChoice, compChoice) => {
  if(userWin) {
    //console.log("You win!");
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }
  else {
    //console.log("You lose!");
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}

const playGame = (userChoice) => {
//  console.log("user choice = ", userChoice);
const compChoice = genCompChoice();
//  console.log("comp choice = ", compChoice);

if (userChoice === compChoice) {
  drawGame();
}
else {
  let userWin = true;
  if(userChoice === "rock") {
    // scissor, paper
    userWin = compChoice === "paper" ? false : true;
  }
  else if (userChoice === "paper") {
    // scissor, rock
    userWin = compChoice === "scissor" ? false : true;
  }
  else {
    // rock, paper
    userWin = compChoice === "rock" ? false : true;
  }
  showWinner(userWin, userChoice, compChoice);
}
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
   
  const userChoice = choice.getAttribute("id");
  //console.log("choice was clicked",userChoice);
  playGame(userChoice);
  });
});



msg.addEventListener("click", ()  => {
  
  if(msg.innerHTML === "Play ur move") {
    msg.innerHTML = "Choose ur any choice";
  } 
});