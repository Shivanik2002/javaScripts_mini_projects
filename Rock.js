let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")


const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const ranfInx = Math.floor(Math.random() * 3);
    return options[ranfInx];
};

const drawGame = () => {
    msg.innerText = "Game was draw. Play again."
    msg.style.backgroundColor = "#081b31";

};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    //Generate computer choice -> modular; 
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        // Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            // paper , Scissors
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            // rock  , Scissors
            userWin = compChoice === "scissors" ? false : true
        } else {
            // rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    };
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute(("id"));
        playGame(userChoice);
    });
});