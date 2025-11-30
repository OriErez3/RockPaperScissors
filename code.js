let humanScore = 0;
let computerScore = 0; 
let human = "NULL"
let comp = "NULL"
    function getComputerChoice() {
    const ans = Math.random();
    if (ans >= 0 &&  ans < 0.33){
        return "ROCK";
    }
    if (ans >= 0.33 &&  ans < 0.66){
        return "PAPER";
    }
    else{
        return "SCISSORS";
    }
} 

function humanChoice(){
    const User = prompt("What is your choice?").toUpperCase(); 
    return User
}
function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        return "Tie"
    }
    if (humanChoice == "SCISSORS" && computerChoice == "ROCK"){
        computerScore = computerScore + 1;
        return "Computer Wins"
    }
    if (humanChoice == "SCISSORS" && computerChoice == "PAPER"){
        humanScore = humanScore + 1;
        return "Human Wins"
    }
    if (humanChoice == "PAPER" && computerChoice == "SCISSORS"){
        computerScore = computerScore + 1;
        return "Computer Wins"
    }
    if (humanChoice == "PAPER" && computerChoice == "ROCK"){
        humanScore = humanScore + 1;
        return "Human Wins"
}
    if (humanChoice == "ROCK" && computerChoice == "PAPER"){
        computerScore = computerScore + 1;
        return "Computer Wins"
    }
    if (humanChoice == "ROCK" && computerChoice == "SCISSORS"){
        humanScore = humanScore + 1;
        return "Human Wins"
    }
}

const btn1 = document.createElement("button");
btn1.textContent = "Rock";
const btn2 = document.createElement("button");
btn2.textContent = "Paper";
const btn3 = document.createElement("button");
btn3.textContent = "Scissors";
const buttons = document.querySelector("#btns");
const div = document.createElement("div")
const winner = document.createElement("h1")
const result = document.createElement("p")
document.body.appendChild(btn1);
document.body.appendChild(btn2);
document.body.appendChild(btn3);
document.body.appendChild(div);
document.body.appendChild(result)
document.body.appendChild(winner);
btn1.addEventListener("click", () =>{
    const outcome = playRound("PAPER", getComputerChoice());
    result.textContent = outcome;
    div.textContent = "Human: " + humanScore + " Computer: " + computerScore;
    if (humanScore == 5){
        winner.textContent = "Human Wins";
    }
    if (computerScore == 5){
        winner.textContent = "Computer Wins";
    }
    
})
btn2.addEventListener("click", () =>{
    const outcome = playRound("PAPER", getComputerChoice());
    result.textContent = outcome;
    div.textContent = "Human: " + humanScore + " Computer: " + computerScore;
    if (humanScore == 5){
        winner.textContent = "Human Wins";
    }
    if (computerScore == 5){
        winner.textContent = "Computer Wins";
    }
})
btn3.addEventListener("click", () =>{
    const outcome = playRound("PAPER", getComputerChoice());
    result.textContent = outcome;
    div.textContent = "Human: " + humanScore + " Computer: " + computerScore;
    if (humanScore == 5){
        winner.textContent = "Human Wins";
    }
    if (computerScore == 5){
        winner.textContent = "Computer Wins";
    }
})