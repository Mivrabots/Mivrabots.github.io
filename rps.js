function playerChoice(choice) {
  var choices = ['rock', 'paper', 'scissors'];
  var randomIndex = Math.floor(Math.random() * choices.length);
  var computerChoice = choices[randomIndex];

  var result;
  if (choice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You win!";
  } else {
    result = "You lose!";
  }

  document.getElementById('result').innerText = result;
}
