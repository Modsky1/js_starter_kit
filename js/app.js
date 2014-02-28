var random_number = Math.floor(Math.random() * 5) + 1

name = prompt("What is your name?")

var switcher = true

while (switcher) {
  var user_guess = prompt(name + ", please guess a number from 1 to 5.")

  if (user_guess == random_number) {
    alert("You've won!!!");
    switcher = false;
  }

  else {
    alert("PLEASE TRY AGAIN");
  }
}
