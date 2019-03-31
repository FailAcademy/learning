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

- Practice OOP programming and logic in JavaScript
- Build a "Pong" game using SVGs dynamically generated from ES2015 classes
- Have some fun with this :)

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

Take a look through the directory structure of your start Pong game. What do we have to work with?

What do you think we'll need to create?

???

Draw 4 boxes on a Whiteboard and engage the class in a discussion as to what to put in each box.

e.g. what properties and methods will each Class have.

The 4 Boxes are: Ball, Board, Game, Paddle

---

# Challenge 1

We will generate our game board SVG with JS in this project, but before we do, let's rough-out what we'll be building by writing the SVG mark-up directly in `index.html`.

Your SVG should include:

- A board (512 x 256 pixels, `#353535` background)
- 2 paddles (56 x 8 pixels)
- A ball in the center of the board (8 pixels radius)
- A dividing line down the middle of the board (look into the `stroke-dasharray` attribute)

???
in **index.html** add

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="256" width="512">
  <rect height="256" width="512" fill="#353535" />
  <rect height="56" width="8" fill="white" x="10" y="100" />
  <line
    stroke-dasharray="20, 15"
    x1="255"
    y1="0"
    x2="257"
    y2="256"
    stroke="white"
    stroke-width="4"
  />
  <rect height="56" width="8" fill="white" x="494" y="100" />
  <circle id="ball" r="8" cx="256" cy="128" fill="white" />
</svg>
```

---

# Challenge 2

Plan out your project on paper with a partner.

1. Which **classes** will we need to create our Pong game? (Hint: think in nouns.) Draw a box for each class.

2. What **properties** and **methods** will these classes have? For example, a class representing the ball may need a `wallBounce` method, etc. Write these inside your class boxes.

3. Compare your classes with another group.

???

You can skip this challenge if already discussed the 4 classes, e.g. already white-boarded the 4 classes

---

# JS and the DOM

Before we get started...we are in a jQuery-free zone!

So how do we **store references** to DOM elements using plain vanilla JS?

How do we **create and add an element** to the DOM?

And how will we **set attributes/values** on those elements?

---

# DOM Selectors

So far we have only used jQuery to select DOM elements, be we can (of course!) do this with regular JS too:

```js
document.querySelector("div.game-wrapper");
document.querySelectorAll("h1");
document.getElementById("game");
document.getElementsByTagName("div");
document.getElementsByClassName("game-wrapper");
```

Try running these lines of code in your browser console to see what you get back.

---

# DOM Manipulation

Just like with jQuery, we can create and append new elements to the DOM, and set/change their attributes:

```js
let el = document.getElementById("game");
el.setAttribute("width", "512");

let newPara = document.createElement("p");
el.appendChild(newPara).innerHTML = "Hello, world!";
```

---

# Creating SVG Elements

Note that when we create and set attributes of an SVG element, we must call slightly different methods so we can declare the necessary XML namespace when we create the element:

```js
const SVG_NS = "http://www.w3.org/2000/svg";
const rect = document.createElementNS(SVG_NS, "rect");
rect.setAttributeNS(null, "width", 10);
rect.setAttributeNS(null, "height", 10);
rect.setAttributeNS(null, "x", 5);
rect.setAttributeNS(null, "y", 5);
```

???

[MDN setAttributeNS](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttributeNS)

---

# Initial Set-up

It's a good idea to store values that are used throughout our game in the `settings.js` file. Let's add and export a constant for the SVG namespace:

```js
// settings.js
export const SVG_NS = "http://www.w3.org/2000/svg";
```

We also need to store a reference to the game `element` DOM node in the `constructor` for our `Game` class so we can append our SVG mark-up to it next. How would we do this?

???
add to **settings.js**

```js
export const SVG_NS = "http://www.w3.org/2000/svg";
```

add to constructor of Game.js

```js
this.gameElement = document.getElementById(this.element);
```

also add the import to Game.js

```js
import { SVG_NS } from "../settings";
```

---

# Render SVG Element

We already have a `Game` object instantiated and game loop running in `index.js`, but we're not rendering anything yet.

Comment-out the SVG mark-up in `index.html` (but keep it for reference for now!), and use JS to create the `<svg>` element that will wrap the game components in the `Game` class `render` method:

```js
let svg = document.createElementNS(SVG_NS, "svg");
svg.setAttributeNS(null, "width", this.width);
svg.setAttributeNS(null, "height", this.height);
svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
this.gameElement.appendChild(svg);
```

???

Comment out SVG in **index.html**

Add the following to Game.js render method

```
let svg = document.createElementNS(SVG_NS, 'svg');
svg.setAttributeNS(null, 'width', this.width);
svg.setAttributeNS(null, 'height', this.height);
svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
this.gameElement.appendChild(svg);
```

---

# A Bug...

Every time the `Game` class `render` method is called (many times per second!), a new SVG will be appended to the DOM, but the previously rendered one won't be removed.

To remedy this, we will need to remove all of the children of the DOM node represented by `this.gameElement` before each re-render. How can we do this?

???

Add to the **Game.js** render method

```
this.gameElement.innerHTML = '';
```

---

template: inverse

# The Board

---

# The Board Class

Next, we'll create a `Board` class:

```js
export default class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  render() {
    //...
  }
}
```

Where should we define this class in the project files?

???

Create a **Board.js** class in partials and add

```
export default class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  render() {
    //...
  }
}
```

also add SVG_NS

```
import { SVG_NS } from '../settings';
```

---

# Challenge 3

In the `render` method of the `Board` class you will need to draw the `<rect>` that will serve as the board background, and the `<line>` for the dashed dividing line.

How can you use the `width` and `height` properties set in the `constructor` to position the dividing line in the middle of the board?

Lastly, how will you append the `<rect>` and `<line>` inside the `<svg>` rendered by the `Game` class, but from within the `render` method of `Board`?

**Hint:** You will need a parameter for this.

???

Update the render method in **Board.js**

```
render(svg) {
    let rect = document.createElementNS(SVG_NS, 'rect');
    rect.setAttributeNS(null, 'fill', '#353535');
    rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);

    let line = document.createElementNS(SVG_NS, 'line');
    line.setAttributeNS(null, 'x1', (this.width / 2));
    line.setAttributeNS(null, 'y1', 0);
    line.setAttributeNS(null, 'x2', (this.width / 2));
    line.setAttributeNS(null, 'y2', this.height);
    line.setAttributeNS(null, 'stroke', 'white');
    line.setAttributeNS(null, 'stroke-dasharray', '20, 15');
    line.setAttributeNS(null, 'stroke-width', '4');

    svg.appendChild(rect);
    svg.appendChild(line);
}
```

---

# Instantiate the Board

To instantiate a `Board` object in the game, we will need to add this line of code somewhere in our project:

```js
this.board = new Board(this.width, this.height);
```

Where will we add this?

???
add to **Game.js** constructor

```
this.board = new Board(this.width, this.height);
```

---

# Render the Board

Now we can call the `Board` `render` method to draw the background and centerline into the game:

```js
// Game.js

render() {
  //...

  this.board.render(svg);
}
```

???

add to **Game.js** render method after svg has been appended

```
this.board.render(svg);
```

---

template: inverse

# Paddles (Players)

---

# The Paddle Class

Create a `Paddle` class in a `Paddle.js` file:

```js
export default class Paddle {
  constructor(boardHeight, width, height, x, y) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.score = 0;
  }

  //...
}
```

Why do the paddles care about the board height? What does `this.speed` represent?

???

Basically what the slide says, create **Paddle.js** in partials and add...

```
export default class Paddle {
  constructor(boardHeight, width, height, x, y) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.score = 0;
  }
  //...
}
```

---

# Challenge 4

Create a `render` method in the `Paddle` class, and use it to create a `<rect>` element that represents a paddle.

Be sure to append it to the game `<svg>` just like we did with the board.

???
in **Paddle.js** add the SVG_NS

```
import { SVG_NS } from '../settings';
```

And update the render method

```
render(svg) {
  let rect = document.createElementNS(SVG_NS, 'rect');
  rect.setAttributeNS(null, 'fill', 'white');
  rect.setAttributeNS(null, 'width', this.width);
  rect.setAttributeNS(null, 'height', this.height);
  rect.setAttributeNS(null, 'x', this.x); // x of the top left corner
  rect.setAttributeNS(null, 'y', this.y); // y of the top left corner
  svg.appendChild(rect);
}
```

Note that we haven't instantiated a 'player' paddle yet.

---

# Key Constants

Before we instantiate each player in our game, we'll need to add a new constant to `settings.js`:

```js
export const KEYS = {
  a: ??,        // player 1 up key
  z: ??,        // player 1 down key
  up: ??,       // player 2 up key
  down: ??,     // player 2 down key
  spaceBar: ??, // we'll use this later...
}
```

But we'll need some way to figure out what codes correspond to these keys...

???

add to **settings.js** we will fill in the correct keys next

```
export const KEYS = {
  a: ??,        // player 1 up key
  z: ??,        // player 1 down key
  up: ??,       // player 2 up key
  down: ??,     // player 2 down key
  spaceBar: ??, // we'll use this later...
}
```

---

# Keycode Constants

Run the following code to in your **browser console**:

```js
document.addEventListener("keydown", event => {
  console.log(event);
});
```

- What does a **key event** look like?
- Write down the `key` for `a`, `z`, `↑`, `↓`, and `SPACE`.
- Try replacing `keydown` with `keyup`

Fill in the key names in `settings.js`, then import your `KEYS` export into `Game.js`.

???

Try this in console to get the key

```
document.addEventListener('keydown', event => {
  console.log(event);
});
```

After trying this out add to **settings.js** & update the import in **Game.js**

```
export const KEYS = {
  a: 'a',
	z: 'z',
	up: 'ArrowUp',
	down: 'ArrowDown',
	spaceBar: ' ',
}
```

And update the import in Game.js

```
import { SVG_NS, KEYS } from '../settings';
```

---

class: center, middle

.large[
Initial paddle positions...
]

---

class: center, middle

![Player 1 position](/public/img/slide-assets/pong/basic-p1-position.png)

---

# Instantiate Players

Now import the first paddle/player into your game:

```js
// Game.js
constructor(element, width, height) {
  //...
  this.paddleWidth = 8;
  this.paddleHeight = 56;
  this.boardGap = 10;

  this.player1 = new Paddle(
    this.height,
    this.paddleWidth,
    this.paddleHeight,
    this.boardGap,
    ((this.height - this.paddleHeight) / 2)
  );
}
```

???

Add to the constructor in **Game.js**<br>
**important**, import the Paddle class in Game.js first

```
import Paddle from './Paddle';
```

```
this.paddleWidth = 8;
this.paddleHeight = 56;
this.boardGap = 10;

this.player1 = new Paddle(
  this.height,
  this.paddleWidth,
  this.paddleHeight,
  this.boardGap,
  ((this.height - this.paddleHeight) / 2),
	KEYS.a,
	KEYS.z
);
```

---

class: center, middle

![Player 2 position](/public/img/slide-assets/pong/basic-p2-position.png)

???

add player2 to **Game.js**

```
this.player2 = new Paddle(
  this.height,
  this.paddleWidth,
  this.paddleHeight,
  (this.width - this.boardGap - this.paddleWidth),
  ((this.height - this.paddleHeight) / 2),
  KEYS.up,
  KEYS.down
);
```

---

# Challenge 5

Instantiate the second paddle (at the correct `x` coordinate) on the right-hand side now?

Once you have instantiated both paddles in the game, `console.log()` both of your players to make sure that they're there.

Finally, render your paddles in your game!

???

after instantiating optional

```
console.log(this.player1);
console.log(this.player2);
```

Render players (paddles), **add to render in Game.js**

```
this.player1.render(svg);
this.player2.render(svg);
```

---

# KeyListener

Make a listener to handle the key events that move each of the paddles:

```js
// Paddle.js...
export default class Paddle {
  constructor(boardHeight, width, height, x, y) {
    //...
    document.addEventListener("keydown", event => {
      console.log(event);
    });
  }
}
```

???

add to **Paddle.js**

```
document.addEventListener('keydown', event => {
  console.log(event);
});
```

---

# Up & Down

Let's expand our listener to `console.log()` different messages depending on what key is pressed:

```js
export default class Paddle {
  // ADD "up" and "down" parameters to the constructor
  constructor(boardHeight, width, height, x, y, up, down) {
    //...
    document.addEventListener("keydown", event => {
      switch (event.key) {
        case up:
          console.log("up");
          break;
        case down:
          console.log("down");
          break;
      }
    });
  }
}
```

???

update **Paddle.js**

add to **keydown** event

```
document.addEventListener('keydown', event => {
  switch (event.key) {
    case up:
      console.log('up');
      break;
    case down:
      console.log('down');
      break;
  }
});
```

also add **up, down,** to the **constructor**

```
constructor(boardHeight, width, height, x, y, up, down) {
```

---

class: center, middle

.large[
Now how do we actually move the paddles on `keydown`?
]

???

Talk about creating a method and what it might look like using the next few slides as examples.

Start by adding **up** and **down** methods.

```
up() {
   this.y = this.y - this.speed;
 }

 down() {
   this.y = this.y + this.speed;
 }
```

update the case break, remove console.log and use the methods e.g. **this.up()**

---

class: center, middle

![Paddle up](/public/img/slide-assets/pong/paddle-move-up.png)

---

class: center, middle

![Paddle down](/public/img/slide-assets/pong/paddle-move-max-min.png)

???

Notice how we can take the **paddle height** into consideration?

We will use this to help with paddle bounds

---

# Paddle Range

The paddle can still move off the board going up or down.

How might we solve this problem?

???

This will be our next challenge, Challenge 6

---

# Challenge 6

Complete the following requirements for the paddles:

- Instantiate paddles with their up/down keys
- Write paddle methods that move the paddle **up** and **down**
- Use `Math.max` and `Math.min` to prevent moving the paddle off the board
- Replace your `console.log()` calls in the event listener callback with your new `up` and `down` methods

???

Double check everyone has a method for **up, down** etc...

Check out [Math.min](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
& [Math.max](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)

Let the students try to figure out the paddle bounds before showing.

```
up() {
 // get the max number...
 // either 0 or the y position minus speed
 this.y = Math.max( 0, this.y - this.speed );
}

down() {
 // get the min number...
 // either the height of the board minus the height of the paddle
 // or the y position plus the speed
 this.y = Math.min( this.boardHeight - this.height, this.y + this.speed );
}
```

---

# Challenge 7

Move all settings into a `settings.js` file and import them where needed.

Wondering what to put in that file? Anything that you've defined a constant such as `gap`, `speed`, etc. should be moved into your `settings.js` file.

???

Make sure at least the **KEYS** and **SVG_NS** are in **settings.js**

The rest is a stretch goal? Since it's not in the finished project version?

---

template: inverse

# The Ball

---

# Ball Class

Let's create our `Ball` class now:

```js
// Ball.js
export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
  }
}
```

What do you think `this.direction` is for?

???

Create **Ball.js** in partials

```
import { SVG_NS } from '../settings';

export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
  }
}
```

---

# Challenge 8

Let's render the ball in the game now:

- Render the ball as a `<circle>`
- Instantiate a `Ball` on `Game` in the middle of the board
- Call `this.ball.render()` in `Game`

???

in **Game.js** add the import

```
import Ball from './Ball'
```

in the **constructor** of **Game.js**

```
this.ball = new Ball(8, this.width, this.height);
```

in the **render** method of **Game.js**

```
this.ball.render(svg, this.player1, this.player2);
```

Add a **render** method to **Ball.js**

```
render(svg, player1, player2) {
// draw ball
  let circle = document.createElementNS(SVG_NS, 'circle');
  circle.setAttributeNS(null, 'r', this.radius);
  circle.setAttributeNS(null, 'cx', this.boardWidth / 2); // x of the centre point
  circle.setAttributeNS(null, 'cy', this.boardHeight / 2); // y of the centre point
  circle.setAttributeNS(null, 'fill', 'white');
  svg.appendChild(circle);
}
```

---

# The Ball Reset

We will need a more complex implementation to set the centered `x` and `y` coordinates for the ball, both initially and later on when a goal is scored. Let's create a `reset` method for that:

```js
// Ball.js
reset() {
  this.x = this.boardWidth / 2;
  this.y = this.boardHeight / 2;
}
```

Where should we call this method? How should we set the `cx` and `cy` attributes for the `<circle>` element now?

???

in **Ball.js** add a reset method

```
reset() {
  this.x = this.boardWidth / 2;
  this.y = this.boardHeight / 2;
}
```

**update** the **render** method **cx, cy**

```
circle.setAttributeNS(null, 'cx', this.x);
circle.setAttributeNS(null, 'cy', this.y);
```

Call the reset method in the **Ball.js constructor**

```
this.reset();
```

---

class: center, middle

.large[
Now how do we move the ball?
]

???

Vectors! next slide

---

class: center, middle

<iframe width="560" height="315" src="https://www.youtube.com/embed/fNk_zzaMoSs?rel=0" frameborder="0" allowfullscreen></iframe>

???

## [Despicable Me Vector :)](https://www.youtube.com/watch?v=bOIe0DIMbI8)

# Physics!

**Direction + Magnitude = Vector**

- **Magnitude:** Quantities that have only a magnitude are called scalars (i.e. it's an amount)
- **Direction:** Give an scalar magnitude direction, and you've made a vector

In other words, it's a _numeric value in a specific direction_.

What numeric value and what direction are we dealing with when we think about the ball's movement?

???

[Vector Calculator](https://www.mathsisfun.com/algebra/vector-calculator.html)

[Another Vector Calculator](http://thecraftycanvas.com/library/online-learning-tools/physics-homework-helpers/vector-calculator-component-resolver/)

---

class: center, middle

![Ball moving down and right](/public/img/slide-assets/pong/ball-move-down-right.png)

---

# Reversing Ball Direction

How might we change **vx** and **vy** to make the ball move in the **opposite** direction?

**Note:** This is the same way we make the ball "bounce".

---

class: center, middle

![Ball moving up and left](/public/img/slide-assets/pong/ball-move-up-left.png)

---

# Ball Movement

To move the ball, we need to set

```js
this.vy = Math.floor(Math.random() * 10 - 5);
this.vx = this.direction * (6 - Math.abs(this.vy));
```

What does this code calculate for us?

Where should we add it?

???

add to the reset in **Ball.js**

This code solves the bug in slide 61, don't show students that part yet...

They can try to code from the slide first.

```
// generates random number between -5 and 5 that isn't 0
this.vy = 0;
while( this.vy === 0 ) {
  this.vy = Math.floor(Math.random() * 10 - 5);
}
// a number between -5 and 5, based on this.vy
// this guarantees that if vy is large, vx is small (and vice versa)
this.vx = this.direction * (6 - Math.abs(this.vy));
```

---

class: center, middle

.large[
Lastly, how do we use these vectors to move the ball along the board surface with each call to `render` on the `Ball`?
]

???

add to render method in **Ball.js**

```
this.x += this.vx;
this.y += this.vy;
```

---

# Another Bug...

Occasionally `this.vy` may randomly equal `0`, which means that ball will just bounce back and forth horizontally between the two paddles with no vertical movement.

How can we make sure the random `this.vy` value never equals `0`?

???

Show solution if they can't guess...

Again this goes in the **reset** method of **Ball.js**

```
// generates random number between -5 and 5 that isn't 0
this.vy = 0;
while( this.vy === 0 ) {
  this.vy = Math.floor(Math.random() * 10 - 5);
}
// a number between -5 and 5, based on this.vy
// this guarantees that if vy is large, vx is small (and vice versa)
this.vx = this.direction * (6 - Math.abs(this.vy));
```

---

class: center, middle

.large[
Which game object should detect the wall/ball collision?
]

???

**Ball.js**

---

# Wall Bounce

How will the ball know if one of it's edges have touched a wall?

In other words, using what we know about the ball and its positions (i.e. it's `r`, `cx`, and `cy`), how can we determine if it hit on the left, right, top, or bottom edges of the board?

???

add a wallCollision method to **Ball.js**

```
wallCollision() {
  const hitLeft = this.x - this.radius <= 0;
  const hitRight = this.x + this.radius >= this.boardWidth;
  const hitTop = this.y - this.radius <= 0;
  const hitBottom = this.y + this.radius >= this.boardHeight;
}
```

---

# Wall Bounce

Let's codify that in a `wallCollision` method...

And once we've determined if the ball has touched an edge, what should happen to the direction of its respective vector?

Where should we call the `wallCollision` method?

???

call the method in the **Ball.js** **render** method

```
this.wallCollision();
```

---

class: center, middle

![Ball wall bounce](/public/img/slide-assets/pong/ball-wall-bounce.png)

???

Flip that vector

\*= -1

---

# Challenge 9

Flip that vector!

- Make the ball `vx` flip to `-vx` when it hits a side wall
- Make the ball `vy` flip to `-vy` when it hits a top or bottom wall

???

add to the **wallCollision** method in **Game.js**

```
if (hitLeft || hitRight) {
	this.vx = -this.vx;
} else if (hitTop || hitBottom) {
	this.vy = -this.vy;
}
```

---

template: inverse

# Pause!

---

# Pausing the Game

Now that our paddles and ball move, let's figure out a way to pause the game.

What would _pausing the game_ mean in this context?

Do you remember which key we're going to use to initiate this?

???

remember we can use...

```
document.addEventListener('keydown', event => {
  console.log(event);
});
```

---

# Challenge 10

Add another event listener (to the `Game` class this time) to listen for `keydown` on the space bar.

When this key is pressed it, it should invert the game's `this.pause` property to its opposite.

And once we have a way to set the game's state to paused, how will we use it to halt rendering on each frame of the game loop until unpaused?

???

add to the **constructor** in **Game.js**

```
document.addEventListener('keydown', event => {
  switch (event.key) {
    case KEYS.spaceBar:
      this.pause = !this.pause;
      break;
  }
});
```

and add to the **render** method in **Game.js**

```
// pause the game
// ...slightly broken because it still listens for the paddles' keydown
if (this.pause) {
	return;
}
```

---

template: inverse

# Paddle Collision

---

# Detect Paddle Collision

In order to detect paddle/ball collision, we will need to know:

- What space on the board's grid the `player1` and `player2` paddles occupy
- The location of the ball's outermost horizontal edges
- Whether any of the ball and paddle coordinates overlap

_What game object should be detecting these collisions?_

???

**Paddle.js**

---

class: center, middle

![Paddle bounce detect X](/public/img/slide-assets/pong/paddle-bounce-detect-x.png)

???

example of the **'math'** to solve for **left & right** of **paddles**

---

class: center, middle

![Paddle bounce detect Y](/public/img/slide-assets/pong/paddle-bounce-detect-y.png)

???

example of the **'math'** to solve for **top & bottom** of **paddles**

---

# Paddle Awareness

To make our ball aware of our paddles, we need to pass our paddle instances into our ball `render` method:

```js
// Ball.js
render(svg, player1, player2) {
  //...
}
```

And update the call to to this method with the appropriate arguments in our the `render` method of `Game`:

```js
// Game.js
render() {
  //...
  this.ball.render(svg, this.player1, this.player2);
}
```

???

If not done already add in the missing arguments to the **render** method in **Ball.js**

as well as in **Game.js**

---

# Paddle Coordinates

To know whether the ball should bounce off a paddle, we'll need to know what space the paddle occupies (i.e. its left and right X coordinates, and top and bottom Y coordinates). Add this helper method to your `Paddle` class:

```js
// Paddle.js
coordinates(x, y, width, height) {
  let leftX = x;
  let rightX = x + width;
  let topY = y;
  let bottomY = y + height;
  return [leftX, rightX, topY, bottomY];
}
```

We'll call this method in our ball's `paddleCollision` method.

???

add **coordinates** method to **Paddle.js**

```
coordinates(x, y, width, height) {
  let leftX = x;
  let rightX = x + width;
  let topY = y;
  let bottomY = y + height;
  return [leftX, rightX, topY, bottomY];
}
```

---

# Paddle Collision

This is the basic set-up for our ball's `paddleCollision` method. Why would we structure it this way?

```js
// Ball.js
paddleCollision(player1, player2) {
  if (this.vx > 0) {
    //...
  } else {
    //...
  }
}
```

???

add a **paddleCollision** method to **Ball.js**

```
paddleCollision(player1, player2) {
  if (this.vx > 0) {
    //...
  } else {
    //...
  }
}
```

---

# Challenge 11

Detect the right paddle collision. We need to test if:

- The right edge of the ball is touching or beyond the left edge of the paddle
- The right edge of the ball is touching or beyond the right edge of the paddle
- The ball `cy` is between the top edge of the paddle and bottom edge of the paddle

If all of these conditions are true, the paddle has been struck and we need to reverse the horizontal direction of the ball.

???

add the **paddleCollision** to the **render** method in **Ball.js**

```
this.paddleCollision(player1, player2);
```

**Important, Write out the pseudo code on a wall for students to codify**
Use the comments below for pseudo code.

update the **paddleCollision** method for the **right paddle**

```
paddleCollision(player1, player2) {
  // if moving toward the right end...
  if (this.vx > 0) {
    // detect player2 paddle collision
    let paddle = player2.coordinates(player2.x, player2.y, player2.width, player2.height);
    let [ leftX, rightX, topY, bottomY ] = paddle;

    if (
      (this.x + this.radius >= leftX) // right edge of the ball is >= left edge of the paddle
      && (this.x + this.radius <= rightX) // right edge of the ball is <= right edge of the paddle
      && (this.y >= topY && this.y <= bottomY) // ball Y is >= paddle top Y and <= paddle bottom Y
    ) {
      this.vx = -this.vx;
      // this.ping.play();
    }
  } else {
    //...
  }
}
```

---

# Challenge 12

Now detect the left paddle collision. We need to test if:

- The left edge of the ball is touching or beyond the right edge of the paddle
- The left edge of the ball is touching or beyond the left edge of the paddle
- The ball `cy` is between the top edge of the paddle and bottom edge of the paddle

If true, again, we will reverse the ball. Be sure to call `paddleCollision` in your ball's `render` method now.

???

**Important, Write out the pseudo code on a wall for students to codify**

add the left **paddleCollision**, update the **else** statement

also as mentioned in the slide, make sure you have the **render** method calling the paddleCollision

```
else {
  let paddle = player1.coordinates(player1.x, player1.y, player1.width, player1.height);
  let [ leftX, rightX, topY, bottomY ] = paddle;

  if (
    (this.x - this.radius <= rightX) // left edge of the ball is <= right edge of the paddle
    && (this.x - this.radius >= leftX) // left edge of the ball is >= left edge of the paddle
    && (this.y >= topY && this.y <= bottomY) // ball Y is >= paddle top Y or <= paddle bottom
  ) {
    this.vx = -this.vx;
    // this.ping.play();
  }
}
```

---

template: inverse

# Keeping Score

---

class: center, middle

.large[
When is a goal scored? What should happen in the game when a goal is scored?
]

???

Engage in conversation about how we might keep score.

Next slide is the challenge to codify this.

---

# Challenge 13

Time to start keeping score:

- Write a `goal` method that increments a player's score **and** resets the ball to the middle of the board after a goal is scored
- Call this method when the ball goes too far too the left or right side (...so where will you need to call this method?)

For now, just call `console.log()` to view the score after each goal is score to make sure that it's working.

???

add to **Ball.js**

before the render method...

```
goal(player) {
  player.score++;
  this.reset();
  console.log(player.score);
}
```

at the end inside the render method

```
// Detect goal
const rightGoal = this.x + this.radius >= this.boardWidth;
const leftGoal = this.x - this.radius <= 0;

if (rightGoal) {
	this.goal(player1);
  this.direction = 1;
} else if (leftGoal) {
	this.goal(player2);
  this.direction = -1;
}
```

---

# Score Board

It will be helpful if the players can actually see their scores! Create a `Score.js` file, and set up a new `Score` class in it:

```js
export default class Score {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  //...
}
```

???

create a new file **Score.js**

```
export default class Score {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  //...
}
```

---

# Challenge 14

Create a `render` method in the `Score` class, and use it to create a `<text>` element that represents a paddle.

You'll need to set `x`, `y`, `font-family`, `font-size`, and `fill` attributes on your `<text>` element.

Be sure to append it to the game `<svg>` just like we have with the other game components, and instantiate two new scores in your `Game`. Position them at the top of the board.

Lastly, how will we feed our player scores properties in their respective score components? Where will we do this?

???

finished **Score.js** and **Game.js**

```
import { SVG_NS } from '../settings';

export default class Score {

  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  render(svg, score) {
    let text = document.createElementNS(SVG_NS, 'text');
    text.setAttributeNS(null, 'x', this.x);
    text.setAttributeNS(null, 'y', this.y);
    text.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
    text.setAttributeNS(null, 'font-size', this.size);
    text.setAttributeNS(null, 'fill', 'white');
    text.textContent = score;
    svg.appendChild(text);
  }

}
```

add to render method in **Game.js**

```
// render and update the score component based on player score
this.score1.render(svg, this.player1.score);
this.score2.render(svg, this.player2.score);
```

---

# Finishing Touches

Our pong game wouldn't be complete without sound effects!

The Pong Starter comes with a few sound effects in the `public` directory. Let's instantiate a new `Audio` object inside of our `Ball` class `constructor`:

```js
this.ping = new Audio("public/sounds/pong-01.wav");
```

This [`HTMLAudioElement`](https://developer.mozilla.org/en/docs/Web/API/HTMLAudioElement) provides a number of methods we can call to actually do something with this sound. How do we play it? Where should we call the appropriate method on it to make the "ping" sound?

???

add to the constructor in **Ball.js**

```
this.ping = new Audio('public/sounds/pong-01.wav');
```

add to **paddleCollision** should be there just uncomment

```
this.ping.play();
```

Talk about other sounds they could use etc...

---

class: center, middle

.inline-images[
![Applause!](/public/img/slide-assets/applause.gif)
]

???

We made it!!!? 😎 😌

![image](https://placekitten.com/g/300/300)

---

# Stretch Goals

- Trigger multiple balls
- Create balls with special effects (different speeds, sizes, effects, etc.)
- Trigger speed changes or size changes of paddles
- Fire a shot from a paddle on key press
- Declare a winner at a final score

---

template: inverse

#Questions?

{% endhighlight %}
