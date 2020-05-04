const body = document.querySelector('body');

const stopwatch = document.querySelector('stopwatch');
const timer = document.querySelector('timer');

const date = new Date();
const currentTime = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();

const time = document.querySelector('time');
const display = document.createElement('span');
display.innerText = 'hello world';
time.appendChild(display);



