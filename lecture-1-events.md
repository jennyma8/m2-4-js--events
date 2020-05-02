# 2.4.1 - JS Events

---

## Situation

Open the door, when someone is there.

<img src="assets/door.gif" />

---

## Event-driven Programming

<img src="assets/fig1_event.png" />

---

#### User Interface Events

- `resize`
- `scroll`

---

#### Focus and Blur Events

These events fire when the HTML elements you can interact with gain/ lose focus.

- `focus`
- `blur`

---

##### Mouse Events

- `click`
- `dblclick`
- `mousedown`
- `mouseup`
- `mouseover`
- `mouseout`
- `mousemove`

---

##### Keyboard Events

- `input`
- `keydown`
- `keypress`
- `keyup`

---

### Form Events

- `submit`
- `change`

---

### CSS Events

- `transitionend`
- `animationstart`
- `animationend`

---

### Events and DOM Nodes

All DOM nodes have methods we can use to _notify_ us of an event.

- [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [`removeEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)
```js
// Example
```
//HTML
<button class="main-button">Click here</button>

//Javascript
let elem = document.querySelector('.main-button');

function handleMouseOver() {
  console.log('link was clicked');
}

elem.addEventListener(
  'mouseover', handleMouseOver);

  elem.removeEventListener(
    'mouseover', function() {
    console.log('link was clicked');
  })


---

### [Event Object](https://www.w3schools.com/jsref/obj_event.asp)

Event handler functions are passed an argument, when events are triggered.

```js
window.addEventListener('resize', function (event) {
  console.log(event);
});

<button id="a">1</button>
<button id="a">2</button>
<button id="a">3</button>
<button>
  <span>4</span>
</button>

let allButtons = document.querySelectorAll('button');

function handleButtonClick(event) {
  console.log(event.currentTarget); //instead of console.log(button);
}

for (let i = 0; i < allButtons.length; i++) {
  let button = allButtons[i];
  
  button.addEventListener(
    'click', function(event) {
      function(event) {
        event.target === button //true
      }
}
);


})
```

---

### Default Actions

Some events have _default_ actions associated to them.

- click a link
- press down arrow
- click the submit button in a form

In most cases handlers are called _before_ the default action takes place.

---

You can prevent the _default_ action from happening by calling `event.preventDefault();` in the eventListener function.

ex:
anchor.addEventListener('click', funtion(event {
  event.preventDefault()'
  alert('Please agree to the terms beforehand')
}))
---

### target

- The `target` property refers to the node where they originated. (example)
- With an `input`, use `event.target.value` to read what was entered into an `input`.

target is what i click on
currenttarget is where i put my event in
---

### Propagation

Handlers registered on nodes with children will also receive events that happen in the children.

```html
<div>
  <ul> //click handler here
    <li>
      <a href="#"><img scr="..." /></a> //image doesn't have an event handler, its going to pass it up until it reaches the parent that has one. event does that.
    </li>
    ...
  </ul>
</div>
```

---

```html
<p>
  A paragraph with a
  <button id="the-btn">
    button</button
  >.
</p>
```

```js
let para = document.querySelector('p');
let button = document.querySelector('button');

para.addEventListener('mousedown', () function() {
  console.log('Handler for paragraph.');
});

button.addEventListener('mousedown', function(event) {
  console.log('Handler for button.');

  if (event.button === 2) { //right click
    event.stopPropagation(); //stop the event to follow up the tree but the event will still happen on the button aka child
  }
});
```

---

[Read a little more deeply…](https://eloquentjavascript.net/15_event.html)

---

# Balloon Exercise

> **Balloon**
> Write a page that displays a balloon (using the balloon emoji, 🎈). When you press the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow, it should deflate (shrink) 10 percent.

_source [Eloquent JavaScript](https://eloquentjavascript.net/15_event.html)_

solutions:

let fontSize = 18;

let balloon = document.querySelector('#balloon');
balloon.style.fontSize = fontSize + 'px';

window.addEventListener('keydown', function(event) {
  if (event.code === 'ArrowUp') {
    fontSize += fontSize * 0.1
    balloon.style.fontSize = fontSize + 'px';
  } else if (event.code === 'ArrowDown') {
    fontSize -= fontSize * 0.1
    balloon.style.fontSize = fontSize + 'px';
  } 
})


  




---solution from online, not tested:
 let para = document.querySelector('p');
    // Set to default size
    para.style.fontSize = '24px';


    window.addEventListener("keydown", e => {
    var sizeAsInteger = parseInt(para.style.fontSize, 10);
    if (e.key == "ArrowUp") {
      sizeAsInteger += 10;
    } 
    if (e.key == "ArrowDown") {
      sizeAsInteger -= 10;
      
    }
    para.style.fontSize = sizeAsInteger + 'px';
  });
