  /* This function does a thing. 
*/

function displayGreeting () {
    // initilize variables
  let greeting = ""

    // user input
  let Guessed_number = parseInt((document.getElementById('Guessed-number-here').value));

    // variables
  let Correct_number = Math.floor((Math.random() * 6) + 1);
  
    // formula????
  if (Guessed_number == Correct_number) {
    greeting = "Correct!"
  }
  // alternate formula
  else {
    greeting = "Incorrect"
  }

  document.getElementById("greeting").innerHTML = Guessed_number + " is your number, " + Correct_number

  
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