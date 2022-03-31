window.onload = function() {
   // 1. Variables for timer
   var tens = 00;
   var seconds = 00;
   var mins = 00;
   // 2. Connects the html docs
   var spanTens = document.getElementById("tens");
   var spanSeconds = document.getElementById("seconds");
   var spanMins = document.getElementById("mins");

   // 3. Initialises buttons
   var buttonStart = document.getElementById("btn-start");
   var buttonStop = document.getElementById("btn-stop");
   var buttonReset = document.getElementById("btn-reset");
   // 4. an counter for timer
   var Interval

   // function for starting a timer
   function startTimer () {
      tens = tens + 1;
      if(tens <= 9) {
         spanTens.innerHTML = "0" + tens;
      }
      if (tens > 9) {
         spanTens.innerHTML = tens;
      }
      if (tens > 99) {
         seconds = seconds + 1;
         spanSeconds.innerHTML = "0" + seconds;
         tens = 00;
         spanTens.innerHTML = "0" + tens;
      }
      if(seconds <= 9) {
         spanSeconds.innerHTML = "0" + seconds;
      }
      if (seconds > 9) {
         spanSeconds.innerHTML = seconds;
      }
      if (seconds > 59) {
         mins = mins + 1;
         spanMins.innerHTML = "0" + mins;
         seconds = 00;
         spanSeconds.innerHTML = "0" + seconds;
      }
      if(mins <= 9) {
         spanMins.innerHTML = "0" + mins;
      }
      if (mins > 9) {
         spanMins.innerHTML = mins;
      }
   }
   // function for pressing a start button
   buttonStart.onclick = function () {
     console.log("StartButtonClicked");
     Interval = setInterval(startTimer, 10)
   }
   
   // function for pressing the stop 
   buttonStop.onclick = function () {
      console.log("StopButtonClicked");
      clearInterval(Interval);
   }

   // function for pressing the reset
   buttonReset.onclick = function () {
      console.log("ResetButtonClicked");
      clearInterval(Interval);
      tens = 00;
      seconds = 00;
      mins = 00;
      spanTens.innerHTML = tens;
   }
}