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
  <canvas id="game"></canvas>
```

Add a background

```css
#game {
    background-color: #353535;
    height: 256px;
    width: 512px;
}
```

Create a Game class

```js
import './game.css';

class Game {
 constructor() {
   const canvas = document.getElementById('game');
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
  setTimeout(gameLoop, fps);
}

gameLoop();
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
  drawLine() {
    this.context.setLineDash([10, 10]);
		this.context.beginPath();
		this.context.moveTo(this.width / 2, 0);
		this.context.lineTo(this.width / 2, this.height);
		this.context.strokeStyle = "white";
		this.context.stroke();
	}
 }

function gameLoop() {
  game.drawLine();
}
```

---

# Render

Render all changes in a method.

```js
class Game {
  ...
  render() {
    this.drawLine()
  }
}

function gameLoop() {
  game.render();
}
```

---

## Exercise

Break your game into different modules. Use `default` import & exports.

```
src
  |- index.js   (game loop)
  |- Game.js    (Game class)
  |- Board.js   (Game board)
```

---

# Players

Create a Paddle class.<br />
Add a `render` method.

##### Paddle.js

```js
export default class Paddle {
	constructor(height, x) {
		this.width = 5;
		this.height = 60;
		this.x = x;
		this.y = (height / 2) - (this.height / 2);
	}
	render(ctx) {
		ctx.fillRect(
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
    this.player1 = new Paddle(this.height, gap);
    this.player2 = new Paddle(this.height, this.width - 4 - gap);

    // check your console for paddles
    console.log(this.player1, this.player2);
  }
```

---

# Draw Paddles

Draw both paddles whenever `render()` is called

##### Game.js
```js
class Game {
  render() {
    this.board.render(this.context);
    this.player1.render(this.context);
    this.player2.render(this.context);
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
var listener = document.body.addEventListener('keydown', (event) => {
  console.log(event.keyCode);
});
```
* What does a **key event** look like?
* Write down the **keyCode**'s for 'a', 'z', '↑', '↓'
* Try replacing `keydown` with `keyup`.

---

# KeyListener

Make a listener to handle key events.

##### Paddle.js

```js
export default class Paddle{
	constructor() {
		...
		document.addEventListener('keypress', event => console.log(event.keyCode));
	}
}
 ```

---

# Up & Down

##### Paddle.js

```js
constructor(height, x, up, down) {
		...
  document.addEventListener('keydown', event => {
		switch (event.keyCode) {
			case up:
				console.log('up');
        break;
			case down:
				console.log('down');
        break;
	});
}
```

---

# Record key values in a constant

```js
const keys = {
	a: 65,
	z: 90,
	up: 38,
	down: 40,
};
```

---

## Exercise

* Instantiate paddles with their up/down keys
* Set a paddle property `this.speed` to 5
* Set a paddle property `this.maxHeight` to help
* Write Paddle methods that moves the paddle **up** and **down**.
* Use `Math.max` and `Math.min` to prevent moving too high
* Re-render the board to prevent paddle movement bleeding
* Make a spacebar pause button using `addKeyPressListener`

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
  constructor() {
    this.x = 50; // random x
		this.y = 50; // random y
		this.vy = Math.floor(Math.random() * 12 - 6);
		this.vx = (7 - Math.abs(this.vy));
		this.size = size;
  }
}
 ```

---

## Exercise

* render the ball as a circle
* Call `ball.render()` in Game
* instantiate the ball on `Game` in the middle of the board (*hint: height/2, width/2*)
* color the ball white

---

# Ball Wall Bounce

Creating a ball bounce requires three variables:

* Ball location
* height & width

Which object should the bounce attach to & why?

* A) Ball
* B) Game

---

# Move Ball

```js
class Ball {
  /* ... */
  render(height, width) {
    this.x += this.vx;
    this.y += this.vy;
    /* ... */
  }
}
```

---

# Pass Game into Ball

##### Ball.js

```js
  render(ctx, game) {
		this.x += this.vx;
		this.y += this.vy;

    console.log(game);
    /* ... */
  }
```

##### Game.js
```js
this.ball.render(this.context, this);
```

---

# Ball Wall Bounce

Detect when the ball hits the sides

```js
class Ball {
  constructor(width, height) {
		this.width = width;
		this.height = height;
  }
  /* ... */
  render(height, width) {
    /* ... */
    const hitLeft = this.x >= this.width;
		const hitRight = this.x + this.size <= 0;
		const hitTop = this.y + this.size <= 0;
		const hitBottom = this.y >= this.height;
    /* ... */
  }
}
```

---

## Exercise

* Make the ball `vx` flip to `-vx` when it hits a side wall
* Make the ball `vy` flip to `-vy` when it hits a top or bottom wall


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
 this.ball.render(this.context, this.player1, this.player2);
}
```

##### Ball.js

```js
render(ctx, player1, player2) {
  /* ... */
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

* make a method called `wallCollision` and move its code there
* make a method called `drawBall` and move its code there
* if time, break `paddleCollision` into smaller more readable methods

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

## Exercise

* write a method `goal` and call it when the ball goes too far on the left or right side
* reset the ball location to the middle after a goal
* increment player scores on a goal
* change the ball direction after a goal on one side

---

# ScoreBoard

```js
export default class ScoreBoard {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.score = 0;
  }
  draw(ctx) {
    ctx.font = "30px Helvetica";
    ctx.fillText(this.score, this.x, this.y);
  }
 }
 ```

---

## Exercise

* Instantiate & render the ScoreBoard in Game.js
* Render player scores in the game

```js
  this.scoreBoard1.score = this.player1.score;
  this.scoreBoard2.score = this.player2.score;
```

---

## Bonus Exercises

- Make it prettier
- Adjust sizes
- Trigger multiple balls
- Play a sound on wall collision & paddle collision
- Create balls with special effects (different speeds, actions)
- Trigger speed increases or decreases of paddles

{% endhighlight %}

---
