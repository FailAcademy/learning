---
layout: slidedeck
title: Building a Pong Game Slides
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

* Practice OOP programming and logic in JavaScript
* Build a "Pong" game using SVGs dynamically generated from ES2015 classes
* Have some fun with this :)

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

---

# Challenge 1

We will generate our game board SVG with JS in this project, but before we do, let's rough-out what we'll be building by writing the SVG mark-up directly in `index.html`.

Your SVG should include:

* A board (512 x 256 pixels, `#353535` background)
* 2 paddles (56 x 8 pixels)
* A ball in the center of the board (8 pixels radius)
* A dividing line down the middle of the board (look into the `stroke-dasharray` attribute)

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

Note that when we create and set attributes an SVG element, we must call slightly different methods so we can declare the necessary XML namespace when we create the element:

```js
const SVG_NS = "http://www.w3.org/2000/svg";
const rect = document.createElementNS(SVG_NS, "rect");
rect.setAttributeNS(null, "width", 10);
rect.setAttributeNS(null, "height", 10);
rect.setAttributeNS(null, "x", 5);
rect.setAttributeNS(null, "y", 5);
```

---

# Initial Set-up

It's a good idea to store values that are used throughout our game in the `settings.js` file. Let's add and export a constant for the SVG namespace:

```js
// settings.js
export const SVG_NS = "http://www.w3.org/2000/svg";
```

We also need to store a reference to the game `element` DOM node in the `constructor` for our `Game` class so we can append our SVG mark-up to it next. How would we do this?

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

---

# A Bug...

Every time the `Game` class `render` method is called (many times per second!), a new SVG will be appended to the DOM, but the previously rendered one won't be removed.

To remedy this, we will need to remove all of the children of the DOM node represented by `this.gameElement` before each re-render. How can we do this?

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

---

# Challenge 3

In the `render` method of the `Board` class you will need to draw the `<rect>` that will serve as the board background, and the `<line>` for the dashed dividing line.

How can you use the `width` and `height` properties set in the `constructor` to position the dividing line in the middle of the board?

Lastly, how will you append the `<rect>` and `<line>` inside the `<svg>` rendered by the `Game` class, but from within the `render` method of `Board`?

**Hint:** You will need a parameter for this.

---

# Instantiate the Board

To instantiate a `Board` object in the game, we will need to add this line of code somewhere in our project:

```js
this.board = new Board(this.width, this.height);
```

Where will we add this?

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

---

# Challenge 4

Create a `render` method in the `Paddle` class, and use it to create a `<rect>` element that represents a paddle.

Be sure to append it to the game `<svg>` just like we did with the board.

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

---

# Keycode Constants

Run the following code to in your **browser console**:

```js
document.addEventListener("keydown", event => {
  console.log(event);
});
```

* What does a **key event** look like?
* Write down the `key` for `a`, `z`, `↑`, `↓`, and `SPACE`.
* Try replacing `keydown` with `keyup`

Fill in the key names in `settings.js`, then import your `KEYS` export into `Game.js`.

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

---

class: center, middle

![Player 2 position](/public/img/slide-assets/pong/basic-p2-position.png)

---

# Challenge 5

Instantiate the second paddle (at the correct `x` coordinate) on the right-hand side now?

Once you have instantiated both paddles in the game, `console.log()` both of your players to make sure that they're there.

Finally, render your paddles in your game!

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

---

class: center, middle

.large[
Now how do we actually move the paddles on `keydown`?
]

---

class: center, middle

![Paddle up](/public/img/slide-assets/pong/paddle-move-up.png)

---

class: center, middle

![Paddle down](/public/img/slide-assets/pong/paddle-move-max-min.png)

---

# Paddle Range

The paddle can still move off the board going up or down.

How might we solve this problem?

---

# Challenge 6

Complete the following requirements for the paddles:

* Instantiate paddles with their up/down keys
* Write paddle methods that move the paddle **up** and **down**
* Use `Math.max` and `Math.min` to prevent moving the paddle off the board
* Replace your `console.log()` calls in the event listener callback with your new `up` and `down` methods

---

# Challenge 7

Move all settings into a `settings.js` file and import them where needed.

Wondering what to put in that file? Anything that you've defined a constant such as `gap`, `speed`, etc. should be moved into your `settings.js` file.

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

---

# Challenge 8

Let's render the ball in the game now:

* Render the ball as a `<circle>`
* Instantiate a `Ball` on `Game` in the middle of the board
* Call `this.ball.render()` in `Game`

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

---

class: center, middle

.large[
Now how do we move the ball?
]

---

class: center, middle

## <iframe width="560" height="315" src="https://www.youtube.com/embed/fNk_zzaMoSs?rel=0" frameborder="0" allowfullscreen></iframe>

# Physics!

**Direction + Magnitude = Vector**

* **Magnitude:** Quantities that have only a magnitude are called scalars (i.e. it's an amount)
* **Direction:** Give an scalar magnitude direction, and you've made a vector

In other words, it's a _numeric value in a specific direction_.

What numeric value and what direction are we dealing with when we think about the ball's movement?

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

---

class: center, middle

.large[
Lastly, how do we use these vectors to move the ball along the board surface with each call to `render` on the `Ball`?
]

---

# Another Bug...

Occasionally `this.vy` may randomly equal `0`, which means that ball will just bounce back and forth horizontally between the two paddles with no vertical movement.

How can we make sure the random `this.vy` value never equals `0`?

---

class: center, middle

.large[
Which game object should detect the wall/ball collision?
]

---

# Wall Bounce

How will the ball know if one of it's edges have touched a wall?

In other words, using what we know about the ball and its positions (i.e. it's `r`, `cx`, and `cy`), how can we determine if it hit on the left, right, top, or bottom edges of the board?

---

# Wall Bounce

Let's codify that in a `wallCollision` method...

And once we've determined if the ball has touched an edge, what should happen to the direction of its respective vector?

Where should we call the `wallCollision` method?

---

class: center, middle

![Ball wall bounce](/public/img/slide-assets/pong/ball-wall-bounce.png)

---

# Challenge 9

Flip that vector!

* Make the ball `vx` flip to `-vx` when it hits a side wall
* Make the ball `vy` flip to `-vy` when it hits a top or bottom wall

---

template: inverse

# Pause!

---

# Pausing the Game

Now that our paddles and ball move, let's figure out a way to pause the game.

What would _pausing the game_ mean in this context?

Do you remember which key we're going to use to initiate this?

---

# Challenge 10

Add another event listener (to the `Game` class this time) to listen for `keydown` on the space bar.

When this key is pressed it, it should invert the game's `this.pause` property to its opposite.

And once we have a way to set the game's state to paused, how will we use it to halt rendering on each frame of the game loop until unpaused?

---

template: inverse

# Paddle Collision

---

# Detect Paddle Collision

In order to detect paddle/ball collision, we will need to know:

* What space on the board's grid the `player1` and `player2` paddles occupy
* The location of the ball's outermost horizontal edges
* Whether any of the ball and paddle coordinates overlap

_What game object should be detecting these collisions?_

---

class: center, middle

![Paddle bounce detect X](/public/img/slide-assets/pong/paddle-bounce-detect-x.png)

---

class: center, middle

![Paddle bounce detect Y](/public/img/slide-assets/pong/paddle-bounce-detect-y.png)

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

---

# Challenge 11

Detect the right paddle collision. We need to test if:

* The right edge of the ball is touching or beyond the left edge of the paddle
* The right edge of the ball is touching or beyond the right edge of the paddle
* The ball `cy` is between the top edge of the paddle and bottom edge of the paddle

If all of these conditions are true, the paddle has been struck and we need to reverse the horizontal direction of the ball.

---

# Challenge 12

Now detect the left paddle collision. We need to test if:

* The left edge of the ball is touching or beyond the right edge of the paddle
* The left edge of the ball is touching or beyond the left edge of the paddle
* The ball `cy` is between the top edge of the paddle and bottom edge of the paddle

If true, again, we will reverse the ball. Be sure to call `paddleCollision` in your ball's `render` method now.

---

template: inverse

# Keeping Score

---

class: center, middle

.large[
When is a goal scored? What should happen in the game when a goal is scored?
]

---

# Challenge 13

Time to start keeping score:

* Write a `goal` method that increments a player's score **and** resets the ball to the middle of the board after a goal is scored
* Call this method when the ball goes too far too the left or right side (...so where will you need to call this method?)

For now, just call `console.log()` to view the score after each goal is score to make sure that it's working.

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

---

# Challenge 14

Create a `render` method in the `Score` class, and use it to create a `<text>` element that represents a paddle.

You'll need to set `x`, `y`, `font-family`, `font-size`, and `fill` attributes on your `<text>` element.

Be sure to append it to the game `<svg>` just like we have with the other game components, and instantiate two new scores in your `Game`. Position them at the top of the board.

Lastly, how will we feed our player scores properties in their respective score components? Where will we do this?

---

# Finishing Touches

Our pong game wouldn't be complete without sound effects!

The Pong Starter comes with a few sound effects in the `public` directory. Let's instantiate a new `Audio` object inside of our `Ball` class `constructor`:

```js
this.ping = new Audio("public/sounds/pong-01.wav");
```

This [`HTMLAudioElement`](https://developer.mozilla.org/en/docs/Web/API/HTMLAudioElement) provides a number of methods we can call to actually do something with this sound. How do we play it? Where should we call the appropriate method on it to make the "ping" sound?

---

class: center, middle

.inline-images[
![Applause!](/public/img/slide-assets/applause.gif)
]

---

# Stretch Goals

* Trigger multiple balls
* Create balls with special effects (different speeds, sizes, effects, etc.)
* Trigger speed changes or size changes of paddles
* Fire a shot from a paddle on key press
* Declare a winner at a final score

---

template: inverse

# Questions?

{% endhighlight %}
