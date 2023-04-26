let playerScore = computerScore = 0;
let pScore = document.getElementById("p-score");
let cScore = document.getElementById("c-score");
let go = document.getElementById("go");
let reset = document.getElementById("reset");
let compChoice = document.getElementById("computer");
const print = document.getElementById("print");
let sto = document.getElementById("s")
let pap = document.getElementById("p")
let sci = document.getElementById("sc") 

function s() {
  document.getElementById("player").value = "ROCK";
}
function p() {
  document.getElementById("player").value = "PAPER";
}
function sc() {
  document.getElementById("player").value = "SECISSOR";
}
reset.addEventListener("click", again1);
function again1(){
location.reload()
}
sto.addEventListener("click",start);
pap.addEventListener("click",start);
sci.addEventListener("click",start);
go.addEventListener("click", start);
function start() {
  let playerchoice = document.getElementById("player");
  const arr = ["ROCK", "PAPER", "SECISSOR"];
  if (arr.includes(playerchoice.value)) {
    computer = Math.floor(Math.random() * 3 + 1);
    compChoice.value = arr[computer - 1];
    if (playerchoice.value == compChoice.value) {
      print.textContent = "Tie Game";
    } else if (playerchoice.value == "ROCK" && compChoice.value == "SECISSOR") {
      print.textContent = "U WIN";
      playerScore++;
    } else if (playerchoice.value == "PAPER" && compChoice.value == "ROCK") {
      print.textContent = "U WIN";
      playerScore++;
    } else if (
      playerchoice.value == "SECISSOR" && compChoice.value == "PAPER") {
      print.textContent = "U WIN";
      playerScore++;
    } else {
      print.textContent = "I WIN";
      computerScore++;
    }
  } else {
    print.textContent = "Wrong input";
  }
  pScore.innerText = playerScore;
  cScore.innerText = computerScore;
  if(playerScore >= 5)
  {
	console.log("&&&")
	print.textContent= "YOU ARE THE WINNER ";
  print.style.fontSize ="40px";
  print.style.color="rgb(135 230 40)";
  document.getElementById("result").textContent ="PLAYER WIN";
  playerchoice.value = " HERO";
  compChoice.value = "HERO ";
	return
  }
   if(computerScore >= 5)
  {
	console.log("***")
	print.textContent="COMPUTER THE WINNER ";
	print.style.fontSize="40px";
	print.style.color="rgb(135 230 40)";
	print.style.fontWeight="bolder";
  document.getElementById("result").textContent = "COMPUTER WIN";
  playerchoice.value = " VILLAN";
  compChoice.value = "VILLAN ";
	return
  }
  setTimeout(again,1500)
	function again() {
		document.getElementById("player").value = " ";
		document.getElementById("computer").value = " ";
		document.getElementById("print").innerHTML = " ";
	  }
  }
 




// const playerBtnGroup = document.querySelector("#player-btn-group");
// playerBtnGroup.addEventListener("click", (e)=>{
// 	if(e.target.classList.contains("button")){
// 		compChoice.value = e.target.dataset.type
// 	}
// })