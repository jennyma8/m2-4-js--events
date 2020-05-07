let startButton = document.querySelector('#startButton')
// This creates a random number between 5 and 10
let randomNumOfButtons = Math.floor(Math.random()*5) + 5;

let clickedState = []

startButton.addEventListener('click', function StartGame(){
    startButton.style.display = 'none';
    // This makes the buttons appear
    appearButton(randomNumOfButtons)
    // This makes the game timer
    let totalTime = 5000 //5 seconds
    const countDown = setInterval(function (){
        if (totalTime === 0){
            clearInterval(countDown)
            console.log('finished countdown')
            endGame()
        }
        totalTime = totalTime-1000
    }, 1000)

})

function appearButton (numberOfButtons){
    for (i = 0; i < numberOfButtons; i++){
        let button = document.createElement('button');
        main.appendChild(button)

        button.id =`button-${i}`
        button.innerText=`Button-${i+1}`
        button.style.position = 'absolute';
        button.style.left =`${Math.random()*85}vw`
        button.style.top =`${Math.random()*85}vh`
        clickedState.push(false)

        button.addEventListener('click', colorButton)
    }
    let buttonStatus = setInterval(function(){
        if (checkArray(clickedState)){
            endGame();
            clearInterval(buttonStatus)
        };
    },400);
}
function colorButton (event){
    const buttonId = event.target.id;
    document.getElementById(buttonId).classList.toggle('green')
    const id = buttonId.split('-')[1];
    clickedState[id] = !clickedState[id];
    console.log(clickedState);

}




function checkArray(arr) {
    return arr.every(function (item) {
      return item;
    });
  }


function endGame(){
    let endMessage = document.querySelector('#gameEnd')
    if(checkArray(clickedState)=== true) {
        console.log("you've won")
        endMessage.innerText = "You've won !"
        endMessage.style.backgroundColor = 'green';
        endMessage.style.width = '200px';
        endMessage.style.height = '200px';

    }else {
        console.log("you've lost")
        endMessage.innerText = "You've lost !"
        endMessage.style.backgroundColor = 'black';
        endMessage.style.width = '200px';
        endMessage.style.height = '200px';
    }
    for (let i = 0; i < randomNumOfButtons; i++) {
        document.getElementById(`button-${i}`).removeEventListener('click', colorButton)
    }
}