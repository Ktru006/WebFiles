var images = ["rock.png", "paper.png", "scissors.png"];
var users = ["User", "Opponent"];

document.getElementById('userimage').innerHTML = "<img src= 'assets/" + images[0] + "' >";
document.getElementById('opponentimage').innerHTML = "<img src= 'assets/" + images[Math.floor(Math.random() * images.length)] + "' >";

document.getElementById('rockbutton').addEventListener("click", rockClicked);
document.getElementById('paperbutton').addEventListener("click", paperClicked);
document.getElementById('scissorsbutton').addEventListener("click", scissorsClicked);
document.getElementById('startgame').addEventListener("click", startGame);



function rockClicked(){
  document.getElementById('userimage').innerHTML = "<img src= 'assets/" + images[0] + "' >";
  userChoice = images[0];
}
function paperClicked(){
  document.getElementById('userimage').innerHTML = "<img src= 'assets/" + images[1] + "' >";
  userChoice = images[1];
}
function scissorsClicked(){
  document.getElementById('userimage').innerHTML = "<img src= 'assets/" + images[2] + "' >";
  userChoice = images[2];
}

function startGame() {
  var computerChoiceNum = Math.floor(Math.random() * images.length);
  var computerChoice = images[computerChoiceNum];

  if (computerChoiceNum < 1) {
      computerChoice = images[0];
      document.getElementById('opponentimage').innerHTML = '<img src="assets/' + images[0] + ' "> ';
  } else if(computerChoiceNum < 2) {
      computerChoice = images[1];
      document.getElementById('opponentimage').innerHTML = '<img src="assets/' + images[1] + ' "> ';
  } else {
      computerChoice = images[2];
      document.getElementById('opponentimage').innerHTML = '<img src="assets/' + images[2] + ' "> ';
  }
//Game conditions
  if (userChoice == computerChoice){
      document.getElementById('endgame').style.color = '#EDF2F4';
      document.getElementById('endgame').innerHTML = "It's a Tie!";
  }
    else if (userChoice == images[0] && computerChoice == images[1]) {
      document.getElementById('endgame').style.color = '#EF233C';
      document.getElementById('endgame').innerHTML = "You Lose!";

  }
    else if (userChoice == images[0] && computerChoice == images[2]){
      document.getElementById('endgame').style.color = '#EF233C';
      document.getElementById('endgame').innerHTML = "You Win!";
    }
    else if (userChoice == images[1] && computerChoice == images[2]) {
      document.getElementById('endgame').style.color = '#EF233C';
      document.getElementById('endgame').innerHTML = "You Lose!";
  }
    else if (userChoice == images[1] && computerChoice == images[0]){
      document.getElementById('endgame').style.color = '#EF233C';
      document.getElementById('endgame').innerHTML = "You Win!";
    }
    else if (userChoice == images[2] && computerChoice == images[0]) {
      document.getElementById('endgame').style.color = '#EF233C';
      document.getElementById('endgame').innerHTML = "You Lose!";
  }
    else if (userChoice == images[2] && computerChoice == images[1]){
      document.getElementById('endgame').style.color = '#EF233C';
      document.getElementById('endgame').innerHTML = "You Win!";
    }
  }
