---
layout: slidedeck
title: Pong
---

{% highlight html %} name: inverse layout: true class: center, middle, inverse

---

# Pong

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Pong

**Goal**: create a pong game using [HTML5 Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) and OOP method of programming.

---

# HTML5 Canvas

Canvas is a web API that allows you to draw graphics, create animations and even render video.

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
 +    this.width = canvas.width;
 +    this.height = canvas.height;
 +    this.context = canvas.getContext('2d');
 +    this.context.fillStyle = 'white';
    }
  }
```

---

# Draw

- Draw a line down the middle

```javascript
class Game {
  ...
 +  draw() {
 +    this.context.clearRect(0, 0, this.width, this.height);
 +    this.context.fillRect(this.width/2, 0, 2, this.height);
 +  }
 }
```

---

# Render

- display changes (when a ball or paddle moves)

```javascript
      this.context.fillStyle = 'white';
 +    this.paused = false;
    }

 +  render() {
 +    if (this.paused) { return; }
 +  }
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

# Paddle

Create a paddle class using [`canvas.fillRect`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect)

```javascript
canvas.fillRect(x, y, width, height)
```

---

# Paddle.js

- create a Paddle class
- add a `draw` method

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

## Game.js

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

Post the following snippet in your console, click on the body and type. What does a **key event** look like?

```js
var listener = document.body.addEventListener('keypress', (event) => {
  console.log(event);
});
```

Try replacing `keypress` with `keydown` or `keyup`.

---

# KeyListener

Make a listener to handle key events.

### KeyListener.js

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



---

## Challenge

- Trigger multiple balls

{% endhighlight %}

---
