

 // Log the NodeList
 console.log('.............');








/*          ---------------this-----------------
let person = {
  name: "Alice",
  age: 25,
  greet: function() {
      console.log("Hello, my name is " + this.name);
  },
  haveBirthday: function() {
      this.age++;
      console.log("Happy Birthday! I am now " + this.age + " years old.");
  }
};

// Calling the methods
person.greet(); // Outputs: "Hello, my name is Alice"
person.haveBirthday(); // Outputs: "Happy Birthday! I am now 26 years old."*/




















/*

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}
*/