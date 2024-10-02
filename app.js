let userScore = 0;
let compUser = 0;

let Choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userPara = document.querySelector("#user-id");
let compPara = document.querySelector("#comp-id");


const genCompChoice = () => {
    const Options = [ "rock" , "paper" ,"scissor"];
    const RanIdx = Math.floor(Math.random()*3);
     return Options[RanIdx];

}

const showWinner = (userWin, compChoice, userChoice) => {
  if (userWin) {
    userScore++;
    userPara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compUser++;
    compPara.innerText = compUser;
    msg.innerText = `You Lost ! Your ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const Draw = () =>{
    msg.innerText =`Your Match was Draw`;
    msg.style.backgroundColor = "#081b31"
}

const playGame = (userChoice) => {
  // generate Computer Choice
  let compChoice = genCompChoice();

  if (userChoice === compChoice) {
    Draw();
    // game Was Draw
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissor , papar
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock , paper
      userWin = compChoice === "scissor" ? false : true;
    } else if (userChoice === "scissor") {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, compChoice, userChoice);
  }
};

Choices.forEach((Choice) => {
  Choice.addEventListener("click", () => {
    const userChoice = Choice.getAttribute("id");
    playGame(userChoice);
  });
});
