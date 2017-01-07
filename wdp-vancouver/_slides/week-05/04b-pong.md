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

- Learn how to build SVGs from scratch
- Practice OOP programming and logic in JavaScript
- Build a "Pong" game using SVGs dynamically generated from ES2015 classes
- Have some fun with this :)

---
template: inverse

# SVGs

---
class: center, middle

.large[
  **Review time!**

  What is an SVG?<br /> What do they do for us?
]

---

# SVG Features

- **Solid browser support** (standard was developed in 1999)
- **Scales like a champ**, so SVGs look great on high-density pixel displays...but they're small! (best of both worlds)
- You can **embed them directly in an HTML document** (as inline SVGs) and target CSS or JS at them just like normal DOM elements (and animate them!)
- You can include them in the `src` attribute of an `<img>` element (as we have done), but you won't be able to target CSS or JS directly at them

---

# SVG vs. HTML5 Canvas?

- SVG is for rendering vector graphics, while canvas renders raster graphics
- Canvas requires a single DOM element, `<canvas>`, that we draw a picture into (using JS)
- After canvas draws the picture, it has no memory of what the pixels represent (so to create animations, you clear out the canvas element, then re-draw it)

---

# How Do We Make One?

SVGs look a lot like HTML elements:

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" width="100" height="100">
    <rect x="0" y="0" width="50" height="50" />
</svg>
```

**Note:** SVG files aren't actually HTML, they are XML. The `xmlns` attribute changes the the `<svg>` element (and it's children) to a different namespace, so we can use elements like `<rect>` that don't exist in HTML.

The `version="1.1"` attribute refers to the version of the SVG spec we're using.

---

# SVG Workspace

- **Viewport**: The viewport **defines visible area of the SVG**.The canvas where an SVG is drawn is conceptually infinite in both dimensions, but parts of the SVG that lie beyond the viewport are clipped off. The `width` and `height` attributes on an `<svg>` define the viewport dimenions.
- **Viewbox**: The `viewBox` defines the coordinate system we will use to draw SVGs onto the canvas. Think of it as a **nested coordinate system** that can be larger or smaller than the viewport. The first two coordinates define the top/left `x` and `y` values of the `viewBox`, the last two define the height and width.

---

# Try It Out

Paste the SVG example (two slides back) into a Codepen...

- Change the `viewBox` to `0 0 50 50`. What happens?
- Now try `0 0 200 200`. What do you observe?
- Next, try `25 25 100 100`. What happens to the rectangle now? Is this what you expect?
- Finally, add `preserveAspectRatio="none"` as a new attribute on the SVG element, and change the `viewBox` value to `0 0 100 200`. How do you explain this behaviour?

---

# More on Rectangles

We have seen how we can specify the top-left coordinates and width/height of rectangle.

We can also specific the border radius of the corners with `rx` and `ry` attributes, change the fill colour, or add a `stroke`:

```html
<rect x="0" y="0" width="50" height="50" fill="#FFFFFF" stroke="#000000" stroke-width="5" />
```

What happens to the stroke in relation to the viewport?

**Try it with CSS!** Add an `id` to the `<rect>` and set `stroke`, `stroke-width`, and `fill` as CSS properties instead.

---

# All Shapes and Sizes

We can make much more than rectangles in SVGs:

```html
<circle cx="50" cy="50" r="10"/>
```

```html
<ellipse cx="50" cy="50" fill="blue" rx="15" ry="30"/>
```

```html
<line x1="50" y1="0" x2="50" y2="100" stroke="black" />
```

```html
<text x="50" y="50" text-anchor="middle">SVG</text>
```

```html
<polygon points="50,20 20,80 80,80" />
```

---

# Leveling Up...

We can also group elements together:

```html
<g transform="translate(10, 10)">
  <circle cx="50" cy="30" r="10"/>
  <circle cx="50" cy="70" r="10"/>
</g>
```

And draw paths to create more complicated SVGs&mdash;this will look familiar to you if you've ever opened an SVG exported from Illustrator, etc.:

```html
<path d="M50,20 L50,20 L20,80 L80,80 Z"></path>
```

---

# Warm-up Round

Use `<circle>`, `<rect>`, and `<line>` elements to draw an old-timey radio. The viewport and `viewBox` should be `400` by `260` pixels. All elements have a `stroke-width` of `5`:

<img src="/public/files/exercises/svg-radio-mockup.jpg" alt="SVG radio mock-up" style="display: block; margin: 0 auto;" />

---
template: inverse

# Getting Started

---

# Set-up

A boilerplate for this project has been scaffolded for you. 

Download it here, initialize a new Git repo in it, push it to your GitHub, and `npm install`:

**https://github.com/redacademy/pong-starter**

---

# Explore Pong Starter

Take a look through the directory structure of your start Pong game. What do we have to start working with? 

What do you think we'll need to create?

---

# Challenge 1

We will generate our SVGs with JS in this project, but before we do, let's get a feel for what we'll be building by roughing-out the SVG mark-up in in `index.html`.

Your SVG should include:

- A board
- 2 paddles
- A ball in the center of the board
- A dividing line down the middle of the board

---

# Challenge 2

Plan out your project on paper with a partner.

1. Which **classes** will we need to create our Pong game? (Hint: think in nouns.) Draw a box for each class.

2. What **properties** and **methods** will these classes have? For example, a class representing the ball may need a `wallBounce` method, etc. Write these inside your class boxes.

3. Compare your classes with another group.

---

# JS and the DOM

Before we get started...we are in a jQuery-free zone!

So how do we **store references** to DOM elements using plain vanilla JS?

How do we **create and add an element** to the DOM? 

And how do we **set attributes/values** on those elements?

---

# DOM Selectors

So far we have only used jQuery to select DOM elements, be we can (of course!) do this with regular JS too:

```js
document.querySelector('div.game-wrapper');
document.querySelectorAll('h1');
document.getElementById('game');
document.getElementsByTagName('div');
document.getElementsByClassName('game-wrapper');
```

Try running these lines of code in your browser console to see what you get back.

---

# DOM Manipulation

Just like with jQuery, we can create and append new elements to the DOM, and set/change their attributes:

```js
let el = document.getElementById('game');
el.setAttribute('width', '512');

let newPara = document.createElement('p');
el.appendChild(newPara).innerHTML = 'Hello, world!';
```

---

# Creating SVG Elements

Note that when we create an SVG element, we must call slightly different methods so we can declare the necessary XML namespace when we create the element:

```js
const SVG_NS = 'http://www.w3.org/2000/svg';
const rect = document.createElementNS(SVG_NS, 'rect');
rect.setAttributeNS(null, 'width', 10);
rect.setAttributeNS(null, 'height', 10);
rect.setAttributeNS(null, 'x', 5);
rect.setAttributeNS(null, 'y', 5);
```

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

# Challenge 3

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

# Challenge 4

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

# Challenge 5

Complete the following requirements for this challenge:

* Instantiate paddles with their up/down keys
* Set paddle properties for `this.speed` equal to `5` and `this.maxHeight` equal to `height`
* Write paddle methods that move the paddle **up** and **down**
* Use `Math.max` and `Math.min` to prevent moving the paddle off the board
* Re-render the board to prevent paddle movement bleeding

---

# Challenge 6

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
      this.vy = Math.floor(Math.random() * 12 - 6); // y direction
      this.vx = (7 - Math.abs(this.vy)); // x direction
      this.size = size;
   }
}
 ```

---

# Challenge 7

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

Detect when the ball hits the sides:

```js
class Ball {
   //...
   render(ctx) {
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

# Challenge 8

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

# Challenge 9

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

# Challenge 10

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

# Challenge 11

Complete the following requirements for this challenge:

* Instantiate and render the `ScoreBoard` in `Game.js`
* Render player scores in the game
* Play a sound on wall collision and paddle collision

---

# Stretch Goals:

- Make it prettier
- Adjust sizes paddle & ball sizes and colours
- Trigger multiple balls
- Create balls with special effects (different speeds, sizes, effects, etc.)
- Trigger speed changes or size changes of paddles
- Fire a shot from a paddle on key press
- Declare a winner at a final score

---

template: inverse

#Questions?

{% endhighlight %}
