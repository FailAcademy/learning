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
* Practice Logic in JavaScript
* Create a "Pong" game using HTML5 Canvas
* Have some fun with this :)

---
template: inverse

# Getting Started

---

# HTML5 Canvas

Canvas is a web API that allows you to draw graphics, create animations, as well as render video and 3d accelerated WebGL graphics.

**Some Canvas examples:**

- [cube](http://codepen.io/yoksel/pen/nxgrp)
- [animated logo](http://meru.ca/)
- [robot friends](http://codepen.io/wattenberger/pen/Bksoc)

---

# Canvas: Drawing Shapes

See the [Canvas Shapes API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) for more.

Canvas is a lot like telling a computer how to paint. We use step by step, clear instructions.

```js
// rectangle
canvas.fillStyle = 'blue';
canvas.fillRect(x1, y1, x2, y2);
```

---

![Basic Pong](/public/img/slide-assets/pong/basic.png)

---

# Challenge 1: Canvas

Draw a Pong game outline using Canvas and this [Starter](http://codepen.io/Sh_McK/pen/QEzGGx).

Your drawing should include:
  - board
  - 2 paddles
  - a ball in the center of the board
  - a dividing line down the middle of the board
  - a scoreboard

**Bonus:** Try to make the paddle or ball move.

---

# Challenge 2: Planning

Plan out your project on paper with a partner.

1. Which **classes** will we need to create our Pong game? (Hint: think in nouns.) Draw a box for each class.

2. Which **properties** and **methods** will these classes have? (e.g. a class representing the ball may need a `wallBounce` method, etc.) Write these inside your class boxes.

3. Compare your classes with another group.

---

# Initial Setup

Set up a new project directory on your computer with Webpack (as per the [ES2015/Webpack lesson](/lesson/developing-with-es2015-webpack/)).

Set your project up to transpile Babel, compile Sass, and run a development server.

Ensure your Webpack dev environment is functioning properly before proceeding.

---

# Initial Setup

Target the canvas in an `index.html` file:

```html
<canvas id="game"></canvas>
```

---

# Styles

Add a background in the `game.css` file:

```css
#game {
   background-color: #353535; /* add this! */
   display: block;
   margin: 20px auto;
   height: 256px;
   width: 512px;
}
```

This specifies our canvas **height** & **width**.

---

# Initial Setup

Create a `Game` class in a `game.js` file:

```js
class Game {
   constructor() {
      const canvas = document.getElementById('game');
   }
}
```

---

# Game Loop

Render at 30 frames per second using `setTimeout(fn, timeout)`:

```js
// game instance
var game = new Game();

const fps = 30;

// self invoking function
(function gameLoop() {
   setTimeout(gameLoop, fps);
}());

```

**Tip**: Use [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) for performant animation: `setTimeout(window.requestAnimationFrame(gameloop))`

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

(function gameLoop() {
   game.drawLine();
   setTimeout(gameLoop, fps);
}());
```

**Note:** `this.context is our 2D canvas`

---

# Render

Let's create a new class method that will 'render' all of the shapes
in our game.  Render all changes in a class method, and move the call to `drawLine` we created earlier:

```js
class Game {
   //...
   render() {
      this.drawLine()
   }
}

(function gameLoop() {
   game.render();
   setTimeout(gameLoop, fps);
}());
```

---

# X & Y Axis

![X & Y axis](/public/img/slide-assets/pong/basic-xy.png)

---

# Board Dimensions

![Board Dimensions](/public/img/slide-assets/pong/basic-height-width.png)

---

# Board

Create a Board class.

```js
class Board {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}
}
```

---

# Board

Draw the Board.

```js
class Board {
  ...
  drawLine(ctx) {
    ctx.setLineDash([10, 10]);
    ctx.beginPath();
    ctx.moveTo(this.width / 2, 0);
    ctx.lineTo(this.width / 2, this.height);
    ctx.strokeStyle = "white";
    ctx.stroke();
  }
  render(ctx) {
    ctx.clearRect(0, 0, this.width, this.height);
		this.drawLine(ctx);
	}
 ...
}
```


---

# Render Board

Render the Board inside of your Game class.
Remove the "drawline" method, as it is now moved to Board.

```js
class Game {
  constructor() {
    ...
    this.board = new Board(this.width, this.height);
  }
   //... remove the "drawline" method
   render() {
      this.board.render(this.context);
   }
}
```

*Why do we need to render the board after each change?<br />
Hint: think about what happens when objects move.*

---

# ES6 Import & Export

`import` & `export` let us share code across files.

```js
// defaultExport.js
const a = 1;
export default a;
```

```js
// namedExport.js
export const b = 2;
export const c = 3;
```

```js
// import.js
import a from './defaultExport';
import { b, c } from './namedExport'
```

---

# Challenge 3: File Structure

Break your game into different modules as illustrated.

Use `default` import and exports with classes.

```
src
  |- index.js   (Game loop)
  |- Game.js    (Game class)
  |- Board.js   (Board class)
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
   render(ctx) { // What is ctx? Where does it come from?
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
const gap = 10; // space between left/right edges and paddles

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

# Positioning P1

![Positioning P1](/public/img/slide-assets/pong/basic-p1-position.png)

---

# Positioning P2

![Positioning P2](/public/img/slide-assets/pong/basic-p2-position.png)


---

# Draw Paddles

Draw both paddles whenever `render()` is called

```js
// In Game.js...

class Game {
   //...
   render() { // We found it! here is our ctx!
      this.board.render(this.context);
      this.player1.render(this.context);
      this.player2.render(this.context);
   }
}
```
---

# Movement

How do we make the paddle and ball move?

Can you make a movement demo using `setTimeout(fn, timeout)`?

---

# Challenge 4: Paddle Style

In this challenge, you'll need to make two adjustments to your game:

1. Change the paddle sizes to fit the screen better.
2. Change the paddles to a different color. (**Hint:** you'll need to use `fillStyle` for this.)

---

# Key Event Listeners

Get the following code to run in a **browser console**:

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
	constructor(height, x) {
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

constructor(height, x) {
   //...
   document.addEventListener('keydown', event => {
      switch (event.keyCode) {
         case keys.up:
            console.log('up');
            break;
         case keys.down:
            console.log('down');
            break;
      }
   });
}
```

---

# Set Key Values

Also record the key values in a constant:

```js
// At the top of Paddle.js...

const keys = {
   a: 65,
   z: 90,
   up: 38,
   down: 40,
};
```

---

# Paddle Up

![Paddle up](/public/img/slide-assets/pong/paddle-move-up.png)

---

# Paddle Range

The paddle can still move off the board going up or down.

How might we solve this problem?

---

# Paddle Down

![Paddle down](/public/img/slide-assets/pong/paddle-move-max-min.png)


---

# Challenge 5: Paddles

Complete the following requirements for this challenge:

* Instantiate paddles with their up/down keys
* Set paddle properties for `this.speed` equal to `5` and `this.maxHeight` equal to `height`
* Write paddle methods that move the paddle **up** and **down**
* Use `Math.max` and `Math.min` to prevent moving the paddle off the board
* Re-render the board to prevent paddle movement bleeding

---

# Challenge 6: Settings

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

# Ball Dimensions

![Ball Radius](/public/img/slide-assets/pong/basic-ball-radius.png)

---

# Centering the Ball

![Centering the ball](/public/img/slide-assets/pong/basic-ball-position.png)

---

# Ball

Now let's set-up our `Ball` class:

```js
// In Ball.js...

export default class Ball {
   constructor() {
      this.x = 50; // random x
      this.y = 50; // random y
      this.vy = Math.floor(Math.random() * 12 - 6); // y direction
      this.vx = (7 - Math.abs(this.vy)); // x direction
      this.radius = 5;
   }
}
 ```

---

# Ball Down/Right

![ball move down and right](/public/img/slide-assets/pong/ball-move-down-right.png)

---

# Reversing Ball direction

How might we change **vx** and **vy** to make the ball move in the **opposite** direction?

*Note: this is the same way we make the ball "bounce".*

---

# Ball Up/Left

![ball move up and left](/public/img/slide-assets/pong/ball-move-up-left.png)

---

# Challenge 7: Create Ball

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

   render(ctx) {
     this.x += this.vx;
     this.y += this.vy;
     this.draw(ctx);
   }
    /* ... */
}
```

---

# Draw the Ball

Create a `draw` function called by the `render` function.

```js
class Ball {
   // In Ball.js...

  draw(ctx) {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }
}
```

---

# Ball Wall Bounce

![ball wall bounce](/public/img/slide-assets/pong/ball-wall-bounce.png)

---

# Goal Detection

![goal detection](/public/img/slide-assets/pong/ball-goal.png)

---

# Challenge 8: Ball Bounce

Complete the following requirements for this challenge:

* Make the ball appear to bounce from the top and bottom walls
* Write a method `goal` and call it when the ball goes too far on the left or right side
* `console.log('GOALLLL')` on each goal
* Reset the ball location to the middle after a goal

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

# Collision Detection

Detecting when the ball hits the paddle requires knowing two things:

* the ball and paddle x values
* the ball and paddle y values 

---

# X Collision Detection

![paddle bounce detect x](/public/img/slide-assets/pong/paddle-bounce-detect-x.png)

---

# Y Collision Detection

![paddle bounce detect y](/public/img/slide-assets/pong/paddle-bounce-detect-y.png)

---

# Challenge 9: Paddle Bounce

Detect when a ball hits a paddle and have it bounce (reverse direction).

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

# Challenge 10: Scores

Complete the following requirements for this challenge:

* Increment player scores on a goal
* Change the ball direction after a goal on one side

---

# Challenge 11: Scoreboard

Complete the following requirements for this challenge:

* Instantiate and render the `ScoreBoard` in `Game.js`
* Calculate the x & y values for each scoreboard
* Render player scores in the game
* Play a sound on wall collision and paddle collision

---

# Challenge 12: Audio

Add sounds for wall & paddle bounces, goals, music.

```js
const ping = new Audio('path/to/audio.wav');

ping.play(); // ♪ ping ♪
```

---

# Images

Canvas also allows you to draw images.

```js
ctx.drawImage('path/to/image.png', x, y);
```

---

# Compare Circle & Image

![circle and image](/public/img/slide-assets/pong/ball-as-image.png)

---

# Using Image Centering

![circle and image](/public/img/slide-assets/pong/image-center.png)

---

# Challenge 13: Images

Create an image on your canvas.

* ball
* paddle
* background

---

# Stretch Goals:

* Make it prettier
* Adjust sizes paddle & ball sizes and colours
* Trigger multiple balls
* Create balls with special effects (different speeds, sizes, effects, etc.)
* Trigger speed changes or size changes of paddles
* Fire a shot from a paddle on key press
* Declare a winner at a final score
* Create an AI paddle that tracks the ball (easier than you might think)

---

template: inverse

# Questions?

{% endhighlight %}
