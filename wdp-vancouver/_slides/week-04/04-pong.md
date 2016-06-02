---
layout: slidedeck
title: Pong
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Pong

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Goals

* create a "Pong" game using [HTML5 Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
* practice OOP programming

---

# HTML5 Canvas

Canvas is a web API that allows you to draw graphics, create animations, render video and 3d accelerated WebGL graphics.

## Examples

- [cube](http://codepen.io/yoksel/pen/nxgrp)
- [animated logo](http://meru.ca/)
- [robot friends](http://codepen.io/wattenberger/pen/Bksoc)

---

# Challenge

Plan out your project on paper with a partner.

1. Which **classes** will we need to create our Pong game? (_hint: think in nouns_)

2. Which **properties** and **methods** will these classes have?

---

# Setup

Target the canvas

```html
  <canvas id="game" width="1024" height="512"></canvas>
```

Add a background

```css
#game {
    background-color: #353535;
}
```

Create a Game class

```javascript
class Game {
 constructor() {
   const canvas = document.getElementById('game');
 }
}
```

---

# Dimensions

- note the canvas dimensions
- set the context to 2D
- set the fill to white

```javascript
class Game {
    constructor() {
      const canvas = document.getElementById('game');
      this.width = canvas.width;
      this.height = canvas.height;
      this.context = canvas.getContext('2d');
      this.context.fillStyle = 'white';
    }
  }
```

---

# Drawing Shapes

[Canvas Shapes API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

```javascript
// rectangle
canvas.fillRect(x, y, width, height)

// triangle
canvas.beginPath();
canvas.moveTo(corner1x, corner1y);
canvas.lineTo(corner2x, corner2y);
canvas.lineTo(corner3x, corner3y);
canvas.fill();

// circle
canvas.beginPath();
canvas.arc(x, y, radius, 0, Math.PI*2, true);
canvas.fill();
```

---

# Draw

```javascript
class Game {
  ...
  draw() {
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.fillRect(this.width/2, 0, 2, this.height);
  }
 }
```

* what is the `clearRect`?
* what is the `fillRect`?

---

# Render

- display changes (when a ball or paddle moves)

```javascript
class Game {
  constructor() {
      ...
      this.paused = false;
    }
  ...
  render() {
   if (this.paused) { return; }
  }
}
```

---

# Game Loop

- Render at 30 frames per second using `setTimeout`

```javascript
// game instance
var game = new Game();

const fps = 30;

function gameLoop() {
  game.render();
  game.draw();
  setTimeout(gameLoop, fps);
}

gameLoop();
```

---

## Challenge

Break your game into different modules.

```
src
  |- index.js   (game loop)
  |- Game.js    (Game class)
```

Use `default` exports.

---

# Players

- create a Paddle class
- add a `draw` method

##### Paddle.js
```javascript
export default class Paddle {
   constructor(x, y) {
     this.x = x;
     this.y = y;
     this.width = 5;
     this.height = 50;
   }
   draw(player) {
     player.fillRect(
       this.x, this.y,
       this.width, this.height
    );
  }
}
```

---

# Instantiate Players

##### Game.js

```javascript
import Paddle from './Paddle';
const gap = 10;

class Game {
  constructor() {
    ...
    this.player1 = new Paddle(gap, 0);
    this.player1.y = (this.height / 2) - (this.player1.height / 2);

    this.player2 = new Paddle(this.width - 4 - gap, 0);
    this.player2.y = (this.height / 2) - (this.player2.height / 2);

    console.log(this.player1, this.player2);
  }
```

---

# Draw Paddles

Draw both paddles whenever `draw()` is called

```javascript
class Game {
  draw() {
    this.player1.draw(this.context);
    this.player2.draw(this.context);
  }
}
```

---

# Key Event Listeners

Paste the following snippet in your console. Click on the body and type.

```js
var listener = document.body.addEventListener('keypress', (event) => {
  console.log(event);
});
```
* What does a **key event** look like?
* Write down the **keyCode**'s for 'a', 'z', '↑', '↓'
* Try replacing `keypress` with `keydown` or `keyup`.

---

# KeyListener

Make a listener to handle key events.

##### KeyListener.js

```js
export default class KeyListener {
  constructor() {
    this.pressedKeys = [];
    document.addEventListener('keydown', this.keydown.bind(this));
    document.addEventListener('keyup', this.keyup.bind(this));
  }
  keydown(event) {
   console.log('keydown', event);
  }
  keyup(event) {
    console.log('keyup', event);
  }
 }
 ```

---

# Instantiate KeyListener

##### Game.js
```js
import KeyListener from './KeyListener';

export default class Game {
  constructor() {
    ...
    this.keys = new KeyListener();
  }
}
```

---

# Record Key Presses

Record an object of `this.pressedKeys`.

##### KeyListener.js

```js
class KeyListener {
  ...
  keydown(event) {
    this.pressedKeys[event.keyCode] = true;
  }
  keyup(event) {
    this.pressedKeys[event.keyCode] = false;
  }
  isPressed(key) {
    return !!this.pressedKeys[key]; // true or false
  }
}
```

* What does the `isPressed` method do?

---

## Challenge

Write a `KeyListener` method called `addKeyPressListener`. It should take a keyCode value and a function that is called when it is pressed.

##### KeyListener.js

```js
class KeyListener {
  ...
  addKeyPressListener(key, callback) {
    // key is pressed -> call callback(event)
  }
}
```

---

# Moving Paddles

Create a `movePaddle` method.

Where should it go & why?

* A) Game
* B) Paddle

---

# Moving Paddles

##### Paddle.js
```js
export default class Paddle {
	constructor(x, y, up, down) {
	  ...
		this.keyUp = up;
		this.keyDown = down;
		this.speed = 5; // allows variable player speed
	}
	movePaddle(height, keys) {
	   if (keys.isPressed(this.keyDown)) {
        this.y = Math.min(
          height - this.height,
          this.y + this.speed
        );
		} else if (keys.isPressed(this.keyUp)) {
			this.y = Math.max(0, this.y - this.speed);
		}
	}
}
```

---

# Instantiating Paddles

Create paddles with their keys.

```js
const keys = {
  up: 38,
  down: 40,
  a: 68,
  z: 90
};

class Game {
  constructor() {
    this.player1 = new Paddle(
      p1.name, paddle.gap, 0,
      keys.a, keys.z
    );

    this.player2 = new Paddle(
      p2.name, this.width - paddle.gap - paddle.width, 0,
      keys.up, keys.down
    );
  }
}
```

---

# Render Moving Paddles

Call next paddle location on render.

```js
class Game {
  render() {
    /* ... */
    this.player1.movePaddle(this.height, this.keys);
    this.player2.movePaddle(this.height, this.keys);
  }
}
```

---

## Challenge

Move all settings into a `settings.js` file and import them where needed.

* gap
* keys
* speed
* etc.

---

# Ball

Which **properties** and **methods** does a ball have?

* x
* y
* ?

---

# Ball

##### Ball.js
```js
const size = 5;

export default class Ball {
  constructor(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vy = vy || Math.floor(Math.random()*12 - 6); // vertical direction
    this.vx = vx || 7 - Math.abs(this.vy); // horizontal direction
    this.width = size;
    this.height = size;
  }
}
 ```

---

# Ball Draw & Render

Draw the ball as a square

```js
draw(p) {
  p.fillRect(this.x, this.y, this.width, this.height);
}
render() {
  this.x += this.vx;
  this.y += this.vy;
}
```

---

## Challenge

* instantiate the ball on `Game` in the middle of the board (*hint: height/2, width/2*)
* Call `ball.draw()` & `ball.render()` in game
* Draw the ball as a circle

---

# Ball Wall Bounce

Creating a ball bounce requires three variables:

* Ball location
* height & width

Which object should the bounce attach to & why?

* A) Ball
* B) Game

---

## Challenge

- Trigger multiple balls

{% endhighlight %}

---
