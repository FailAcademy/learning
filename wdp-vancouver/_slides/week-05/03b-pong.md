---
layout: slidedeck
title: Building a Pong Game
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Building a Pong Game

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

* Practice OOP programming
* Create a "Pong" game using HTML5 Canvas
* Have some fun with this :)

---
template: inverse

# Getting Started

---

# HTML5 Canvas

Canvas is a web API that allows you to draw graphics, create animations, as well as render video and 3d accelerated WebGL graphics.

**Canvas some examples:**

- [cube](http://codepen.io/yoksel/pen/nxgrp)
- [animated logo](http://meru.ca/)
- [robot friends](http://codepen.io/wattenberger/pen/Bksoc)

---

# Challenge 1

Plan out your project on paper with a partner.

1. Which **classes** will we need to create our Pong game? (Hint: think in nouns.)

2. Which **properties** and **methods** will these classes have? (e.g. a class representing the ball may need a `wallBounce` method, etc.)

---

# Initial Setup

Set up a new project directory on your computer with Webpack (as per the [ES2015/Webpack lesson](/lesson/developing-with-es2015-webpack/)).

Set your project up with Babel transpiling, Sass compilation, and a development server.

Ensure your Webpack dev environment is functioning properly before proceeding.

---

# Initial Setup

Target the canvas in an `index.html` file:

```html
<canvas id="game"></canvas>
```

Add a background in a SCSS file:

```css
#game {
   background-color: #353535;
   height: 256px;
   width: 512px;
}
```

---

# Initial Setup

Create a `Game` class in a `game.js` file:

```js
import './game.js';

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

Note the canvas dimensions. You'll need to set the context to **2D** and set the fill to **white**.

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

Draw your first shapes on the canvas:

```js
class Game {
   //...
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

**Note:** `this.context = canvas`

---

# Render

Render all changes in a method:

```js
class Game {
   //...
   render() {
      this.drawLine()
   }
}

function gameLoop() {
   game.render();
}
```

---

# Challenge 2

Break your game into different modules as illustrated.

Use `default` import and exports.

```
src
  |- index.js   (Game loop)
  |- Game.js    (Game class)
  |- Board.js   (Game board)
```

---
template: inverse

# Paddles (Players)

---

# Players

Create a Paddle class in a `Paddle.js` file, and add a `render` method:

```js
// In Paddle.js...

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

Now import paddles/players into your game:

```js
// In Game.js...

import Paddle from './Paddle';
const gap = 10;

class Game {
   constructor() {
      //...
      this.player1 = new Paddle(this.height, gap);
      this.player2 = new Paddle(this.height, this.width - 4 - gap);

      // check your console for paddles
      console.log(this.player1, this.player2);
   }
   //...
}
```

---

# Draw Paddles

Draw both paddles whenever `render()` is called

```js
// In Game.js...

class Game {
   //...
   render() {
      this.board.render(this.context);
      this.player1.render(this.context);
      this.player2.render(this.context);
   }
}
```
---

# Challenge 3

In this challenge, you'll need to make two adjustments to your game:

1. Change the paddle sizes to fit the screen better.
2. Change the paddles to a different color. (**Hint:** you'll need to use `fillStyle` for this.)

---

# Key Event Listeners

Get the following code to run in a browser console:

```js
var listener = document.body.addEventListener('keydown', (event) => {
   console.log(event.keyCode);
});
```

* What does a **key event** look like?
* Write down the `keyCode` for `a`, `z`, `↑`, and `↓`
* Try replacing `keydown` with `keyup`

---

# KeyListener

Make a listener to handle key events:

```js
// In Paddle.js...

export default class Paddle{
	constructor() {
		//...
		document.addEventListener('keydown', event =>
         console.log(event.keyCode)
      );
	}
}
 ```

---

# Up & Down

Let's expand our listener with a `switch` statement to `console.log()` different messages depending on what key is pressed:

```js
// In Paddle.js...

constructor(height, x, up, down) {
   //...
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

# Set Key Values

Also record the key values in a constant:

```js
// In Paddle.js...

const keys = {
   a: 65,
   z: 90,
   up: 38,
   down: 40,
};
```

---

# Challenge 4

Complete the following requirements for this challenge:

* Instantiate paddles with their up/down keys
* Set paddle properties for `this.speed` equal to `5` and `this.maxHeight` equal to `height`
* Write paddle methods that move the paddle **up** and **down**
* Use `Math.max` and `Math.min` to prevent moving too high
* Re-render the board to prevent paddle movement bleeding
* Make a spacebar pause button with `addKeyPressListener`

---

# Challenge 5

Move all settings into a `settings.js` file and import them where needed.

Wondering what to put in that file? Anything that you've defined a constant such as `gap`, `keys`, `speed`, etc. should be moved into your `settings.js` file.

---
template: inverse

# Ball

---

# Ball

What **properties** and **methods** does a ball have?

* x
* y
* ?

---

# Ball

Now let's set-up our `Ball` class:

```js
// In Ball.js...

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

# Challenge 6

Complete the following requirements for this challenge:

* Render the ball as a circle
* Call `ball.render()` in `Game`
* Instantiate the ball on `Game` in the middle of the board (**Hint:** `height/2`, `width/2`)
* Change the colour of the ball to white

---

# Ball Wall Bounce

Creating a ball bounce requires three variables:

* ball location
* ball height
* ball width

*Which object should the bounce attach to and why?*

**A)** Ball

**B)** Game

---

# Move the Ball

Add a `render` method to the `Ball` class:

```js
class Ball {
   // In Ball.js...

   render(height, width) {
      this.x += this.vx;
      this.y += this.vy;
      //...
   }
}
```

---

# Pass Game into Ball

```js
// In Ball.js...

render(ctx, game) {
   this.x += this.vx;
   this.y += this.vy;

   console.log(game);
   //...
}
```

```js
// In Game.js...
this.ball.render(this.context, this);
```

---

# Ball Wall Bounce

Detect when the ball hits the sides:

```js
class Ball {
   constructor(width, height) {
      this.width = width;
      this.height = height;
   }
   //...
   render(height, width) {
      //...
      const hitLeft = this.x >= this.width;
      const hitRight = this.x + this.size <= 0;
      const hitTop = this.y + this.size <= 0;
      const hitBottom = this.y >= this.height;
      //...
   }
}
```

---

# Challenge 7

Complete the following requirements for this challenge:

* Make the ball `vx` flip to `-vx` when it hits a side wall
* Make the ball `vy` flip to `-vy` when it hits a top or bottom wall

---
template: inverse

# Paddle Collision

---

# Detect Paddle Collision

The paddle collision will require:

* `player1` and `player2` paddles
* ball location and velocity

*Which object should the collision attach to and why?*

**A)** Game

**B)** Paddle

**C)** Ball

---

# Render paddleCollision

```js
// In Game.js...

render() {
   this.ball.render(this.context, this.player1, this.player2);
}
```

```js
// In Ball.js...

render(ctx, player1, player2) {
  //...
  this.paddleCollision(player1, player2);
}
```

---

# Collision 1/2

Add the `paddleCollison` method to your `Ball` class:

```js
paddleCollision(player1, player2) {
   if (this.vx > 0) {
      const inRightEnd = player2.x <= this.x + this.width &&
      player2.x > this.x - this.vx + this.width;
      if (inRightEnd) {
         const collisionDiff = this.x + this.width - player2.x;
         const k = collisionDiff / this.vx;
         const y = this.vy * k + (this.y - this.vy);
         const hitRightPaddle = y >= player2.y && y + this.height <=
         player2.y + player2.height;
         if (hitRightPaddle) {
            this.x = player2.x - this.width;
            this.y = Math.floor(this.y - this.vy + this.vy * k);
            this.vx = -this.vx;
         }
      }
   } // else more...
}
```

---

# Collision 2/2

```js
paddleCollision(player1, player2) {
   if (this.vx > 0) {
      // see previous slide...
   } else {
      const inLeftEnd = player1.x + player1.width >= this.x;
      if (inLeftEnd) {
         const collisionDiff = player1.x + player1.width - this.x;
         const k = collisionDiff / -this.vx;
         const y = this.vy * k + (this.y - this.vy);
         const hitLeftPaddle = y >= player1.y && y + this.height <=
         player1.y + player1.height;
         if (hitLeftPaddle) {
            this.x = player1.x + player1.width;
            this.y = Math.floor(this.y - this.vy + this.vy * k);
            this.vx = -this.vx;
         }
      }
   }
}
```

---

# Challenge 8

Complete the following requirements for this challenge:

* Make a method called `wallCollision` and move its code there
* Make a method called `drawBall` and move its code there
* Break `paddleCollision` into smaller more readable methods

---
template: inverse

# Keeping Score

---

# Scoring a Goal

Scoring a goal will require:

* `player1` and `player2` scores
* ball location and window width

*Which object should the `goal` method attach to and why?*

**A)** Game

**B)** Paddle

**C)** Ball

---

# Challenge 9

Complete the following requirements for this challenge:

* Write a method `goal` and call it when the ball goes too far on the left or right side
* Reset the ball location to the middle after a goal
* Increment player scores on a goal
* Change the ball direction after a goal on one side

---

# Score Board

We'll need to create a `ScoreBoard` class now:

```js
// In ScoreBoard.js...

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

# Challenge 10

Complete the following requirements for this challenge:

* Instantiate and render the `ScoreBoard` in `Game.js`
* Render player scores in the game

---

# Stretch Goals:

- Make it prettier
- Adjust sizes
- Trigger multiple balls
- Play a sound on wall collision and paddle collision
- Create balls with special effects (different speeds, actions)
- Trigger speed increases or decreases of paddles

{% endhighlight %}
