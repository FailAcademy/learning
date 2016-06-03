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

* practice OOP programming
* create a "Pong" game using [HTML5 Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)


---

# HTML5 Canvas

Canvas is a web API that allows you to draw graphics, create animations, as well as render video and 3d accelerated WebGL graphics.

### Canvas Examples

- [cube](http://codepen.io/yoksel/pen/nxgrp)
- [animated logo](http://meru.ca/)
- [robot friends](http://codepen.io/wattenberger/pen/Bksoc)

---

## Exercise

Plan out your project on paper with a partner.

1. Which **classes** will we need to create our Pong game?<br />
(_hint: think in nouns_)

2. Which **properties** and **methods** will these classes have?

##### Example

```
class Ball
- location
- wallBounce
- etc.
```

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

```js
class Game {
 constructor() {
   const canvas = document.getElementById('game');
 }
}
```

---

# Dimensions

Note the canvas dimensions.<br />
Set the context to 2D.<br />
Set the fill to white.

```js
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

# Canvas: Drawing Shapes

See the [Canvas Shapes API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) for more.

```js
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

Draw your first shapes on the canvas.<br />
(_note: `this.context = canvas`_)

```js
class Game {
  ...
  draw() {
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.fillRect(this.width/2, 0, 2, this.height);
  }
 }
```

* what does the `clearRect` create?
* what does the `fillRect` for create?

---

# Render

Render changes (when something moves).

```js
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

Render at 30 frames per second using `setTimeout(fn, timeout)`.

```js
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

## Exercise

Break your game into different modules. Use `default` import & exports.

```
src
  |- index.js   (game loop)
  |- Game.js    (Game class)
```

---

# Players

Create a Paddle class.<br />
Add a `draw` method.

##### Paddle.js

```js
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

```js
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

```js
class Game {
  draw() {
    this.player1.draw(this.context);
    this.player2.draw(this.context);
  }
}
```

---

# Exercise

* Change the paddle sizes to fit the screen better.
* Change the paddles to a different color<br />
(*hint: use `fillStyle`*).

---

# Key Event Listeners

Get the following code to run in a browser console.

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

# KeyListener

Instantiate the KeyListener as `this.keys`.

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

Record keys pressed as an object called `this.pressedKeys`.
We can use these keys to trigger changes each time the app is rendered.

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

## Exercise

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

* Make a spacebar pause button using `addKeyPressListener`

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

##### Game.js
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

## Exercise

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

##### Ball.js

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

## Exercise

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

# Ball Wall Bounce

Change direction on top/bottom or left/right hit.

```js
class Ball {
  /* ... */
  render(height, width) {
    this.x += this.vx;
    this.y += this.vy;

    const hitLeft = this.x > width;
    const hitRight =this.x + this.width < 0;
    const hitTop = this.y + this.height < 0;
    const hitBottom = this.y > height;

    if (hitLeft || hitRight) {
      this.vx = -this.vx; // change direction
    } else if (hitTop || hitBottom) {
      this.vy = -this.vy; // change direction
    }
  }
}
```

---

## Exercise

* Render the ball bounce using the Game height & width
* Make the ball vx flip when it hits a side wall
* Make the ball vy flip when it hits a top or bottom wall


---

# Detect Paddle Collision

The paddle collision will require:

* player1 & player2 paddles
* ball location and velocity


Which object should the `collision` attach to & why?

* A) Game
* B) Paddle
* C) Ball

---

# Render paddleCollision

##### Game.js

```js
render() {
 this.ball.render(this.height, this.width, this.player1, this.player2);
}
```

##### Ball.js

```js
render(height, width, player1, player2) {
  this.x += this.vx;
  this.y += this.vy;

  /* wall collision */

  this.paddleCollision(player1, player2);
}
```

---

# Collision 1/2

Feel free to copy this part

##### Ball.js

```js
paddleCollision(player1, player2) {
  if (this.vx > 0) {
    const inRightEnd = player2.x <= this.x + this.width &&
    player2.x > this.x - this.vx + this.width;
    if (inRightEnd) {
      const collisionDiff = this.x + this.width - player2.x;
      const k = collisionDiff / this.vx;
      const y = this.vy * k + (this.y - this.vy);
      const hitRightPaddle = y >= player2.y && y + this.height <= player2.y + player2.height;
      if (hitRightPaddle) {
        this.x = player2.x - this.width;
        this.y = Math.floor(this.y - this.vy + this.vy * k);
        this.vx = -this.vx;
      }
    }
  }
  /* else more */
}
```

---

# Collision 2/2

And this part...

```js
paddleCollision(player1, player2) {
  /* if ... */
 else {
  const inLeftEnd = player1.x + player1.width >= this.x;
  if (inLeftEnd) {
    const collisionDiff = player1.x + player1.width - this.x;
    const k = collisionDiff / -this.vx;
    const y = this.vy * k + (this.y - this.vy);
    const hitLeftPaddle = y >= player1.y && y + this.height <= player1.y + player1.height;
    if (hitLeftPaddle) {
      this.x = player1.x + player1.width;
      this.y = Math.floor(this.y - this.vy + this.vy * k);
      this.vx = -this.vx;
    }
  }
}
```

---

## Exercise

* move `wallCollision` into a method
* `console.log('goal')` when a goal is scored

---

# Goal

Scoring goals will require:

* player1 & player2 scores
* ball location
* window width


Which object should the `goal` method attach to & why?

* A) Game
* B) Paddle
* C) Ball

---

# GOOOOOAAAALLL!!

Call `goal` on a goal.

##### Ball.js

```js
goal() {
  console.log('GOOOOOAAAALLL!!');
}
render(height, width, player1, player2) {
  /* ... */
  const goalRight = this.x >= width;
  const goalLeft = this.x + this.width <= 0;
  if (goalRight) {
    this.goal();
  } else if (goalLeft) {
    this.goal();
  }
}
```

---

# Reset Ball

Reset the ball location on a goal

##### Ball.js

```js
goal(player, width) {
  this.x = width / 2;
  this.y = player.y + player.height / 2;
  this.vy = Math.floor(Math.random() * 12 - 6);
  this.vx = 7 - Math.abs(this.vy);
}
render() {
  /* ... */
  if (goalRight) {
    this.goal(player1, width);
  } else if (goalLeft) {
    this.goal(player2, width);
  }
}
```

---

## Exercise

- Increment player scores on a goal
- Change ball direction after a goal (towards the opponent)

---

# ScoreBoard

```js
export default class ScoreBoard {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.score = 0;
  }
  draw(p) {
    // fillText with a number
    p.fillText(this.score, this.x, this.y);
  }
 }
 ```

---

## Exercise

* Instantiate the Scoreboard in Game.js
* Call `ScoreBoard.draw(this.context)` when `Game.draw` is called
* Render the score in game

```js
  this.scoreBoard1.score = this.player1.score;
  this.scoreBoard2.score = this.player2.score;
```

* Change the ScoreBoard font

```js
this.context.font = "30px Helvetica";
```

---

## Bonus Exercises

- Trigger multiple balls
- Play a sound on wall collision & paddle collision
- Create special balls
- Trigger speed increases or decreases of paddles
- Create different colored balls with different speeds or actions


{% endhighlight %}

---
