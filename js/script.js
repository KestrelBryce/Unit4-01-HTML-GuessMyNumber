  /* This function does a thing. 
*/

function displayGreeting () {

    // user input
  let guessedNumber = parseInt((document.getElementById('Guessed-number-here').value));

    // variables
  let correctNumber = Math.floor((Math.random() * 6) + 1);
  
    // formulas
  if (guessedNumber == correctNumber) {
    document.getElementById("greeting").innerHTML = "Your guess was " + guessedNumber + ", and the correct number was " + correctNumber + ". You guessed correctly, good job!"
  }
    // alternate formula
  if (guessedNumber != correctNumber) {
    document.getElementById("greeting").innerHTML = "Your guess was " + guessedNumber + ", and the correct number was " + correctNumber + ". You guessed incorrectly, better luck next time!"
  }

  
  // output for numbers guessed correctly
  //document.getElementById("greeting").innerHTML = greeting
  // let Testing_value = 67;
  //document.getElementById("greeting").innerHTML = "Testing" + Guessed_number + "hi"

  // unused/currently testing code
  // document.getElementById("Guessed-number-results").innerHTML = "Your number is " + Guessed_number + ", ha."
  // output for numbers guessed incorrectly
  // document.getElementById("Guessed-number-results").innerHTML = 
  
  //   else if (Guessed_number != Correct_number) {
  //  greeting = "Incorrect"
  //}

  // "Your number is: " + Correct_number + "."

}