// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// the function that will be called by the unit test below
const rockPaperScissors = (hand1, hand2) => {
  // Write code here
  // Use the unit test to see what is expected
hand1 = hand1.toLowerCase()
hand2 = hand2.toLowerCase()

const validChoices = ["rock", "paper", "scissors"];

if (!validChoices.includes(hand1)) {
  console.log("Invalid choice from Hand 1.");
  return;
}

if (!validChoices.includes(hand2)) {
  console.log("Invalid choice from Hand 2.");
  return;
}

switch (hand1) {
  case "rock":
    switch (hand2) {
      case "rock":
        console.log("It's a tie!");
        break;
        case "paper":
          console.log("Hand 2 Wins!");
          break;
          case "scissors":
            console.log("Hand 1 Wins!")
            break;
            default:
              console.log("Invalid choice from Hand 2.")
    }
    break;

    case "paper":
      switch (hand2) {
        case "paper":
          console.log("It's a tie!");
          break;
          case "scissors":
            console.log("Hand 2 Wins!");
            break;
            case "rock":
              console.log("Hand 1 Wins");
              break;
              default:
                console.log("Invalid choice from Hand 2.")
      }
      break;

      case "scissors":
        switch (hand2) {
          case "scissors":
            console.log("It's a tie!")
            break;
            case "rock":
              console.log("Hand 2 Wins!")
              break;
              case "paper":
                console.log("Hand 1 Wins!")
                break;
                default:
                  console.log("Invalid choice from Hand 2.")
        }
        break;
}
}


//   if (hand1 === "rock" && hand2 === "paper") {
//     console.log("Hand 2 Wins!")
//   } else if (hand1 === "rock" && hand2 === "scissors") {
//     console.log("Hand 1 wins!")
//   } else {
//     console.log("Tie Game.")
//   }
//   if (hand1 === "paper" && hand2 === "scissors") {
//     console.log("Hand 2 Wins!")
//   } else if (hand1 === "paper" && hand2 === "rock") {
//     console.log("Hand 1 wins!")
//   } else {
//     console.log("Tie Game.")
//   }
//   if (hand1 === "scissors" && hand2 === "rock") {
//     console.log("Hand 2 Wins!")
//   } else if (hand1 === "scissors" && hand2 === "paper") {
//     console.log("Hand 1 wins!")
//   } else {
//     console.log("Tie Game.")
//   }
// }

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built returns the expected output.
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  // always returns ask the user for another input
  getPrompt();

}
