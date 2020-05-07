let body = document.querySelector('body');


for (i = 0; i < 20; i++){
    let button = document.createElement('button'); 

    body.appendChild(button);
    button.innerText = `Button ${i + 1}`;
    button.id = `button${i+1}`;
    button.style.position = 'absolute';
    button.style.left =`${Math.random()*100}vw`;
    button.style.top =`${Math.random()*100}vh`;


    button.addEventListener('click', function (){
        button.classList.toggle('green');
        
    })
}

