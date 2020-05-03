// Exercise 1.2
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH!
// Similar to the last exercise, write an app that gives the user
// a random amount of time (between 3 and 5 seconds) to click anywhere on the
// screen.
//
// But this time, let's let the user know how much time they have to actually
// 'click'. If they click inside of the required time, you should tell them
// that they've won, else let them know that they've lost.

// In short,
// Replicate (and I mean, REWRITE it from scratch) the last exercise, and add
// - random amount of time to click (between 3 and 5 seconds)
// - tell the user how much time they have to click.

// HINTS:
// - You can use Math.random to generate a random number betwen 0 and 1, and
//   use math operators to scale it between 3 and 5 seconds

// Stretch goal
// Make the countdown live (show a countdown that updates several times a
// second)
const body = document.querySelector('body')
const result = document.getElementById('result');

let hasWon = false;

function clickEvent() {
    if (hasWon = true) {
        body.innerText = 'You won!'
    }
    body.removeEventListener('click', clickEvent);
}

//Math.random() is between 0.01 and 1
//if I do * 3, the random number will be between 0.03 and 3
//if I do + 2  after, the random number will be between 2.03 and 5
const time = Math.floor(Math.random() * 3 + 2);
document.getElementById('time').innerText = time;

setTimeout(function () {
  if (!hasWon) {
    result.innerText = "Time's up! You lost!";

    // always remove the eventListener when you're done
    body.removeEventListener('click', clickEvent);
  }
}, time * 1000);

// Add the event listener
body.addEventListener('click', clickEvent);