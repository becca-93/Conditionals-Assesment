//PART I: Heads or Tails
let userChoice; 
let randomNumber;
let computerChoice;

userChoice = prompt("Heads or tails");

randomNumber = Math.floor(Math.random() * 2);

if(randomNumber === 0) {
  computerChoice = "heads";
} else {
  computerChoice = "tails"; 
}

if(userChoice === computerChoice) {
  alert(`You guessed right! The coin flip landed on ${computerChoice}`);
} else {
  alert(`Sorry, the coin flip landed on ${computerChoice}`);
}

// PART II: Birth Year
let birthYear = prompt("What year were you born?");

const currentYear = 2024;
let age = currentYear - birthYear;

if(age > 21) {
    alert ("You are old enough to drink in the US");
}  else if (age == 21){
    alert("You are old enough to drink in the US...barely");
}
else {
    alert("Sorry, you are not old enough to drink in the US");
}