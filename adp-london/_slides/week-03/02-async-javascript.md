---
layout: slidedeck
title: Asynchronous JavaScript Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---
# Asynchronous JavaScript

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1. Recognizing Asynchrony
1. Stacks & Queues
1. The Event Loop
1. Asynchrony, Parallelism and Concurrency
1. Callbacks & Callback Hell
1. Promises
1. Async Functions

---

template: inverse

# Recognizing Asynchrony

---

# Example 1

```js
// setTimeout(fn, delay)

function run() {
  console.log('a');
  setTimeout(() => {
    console.log('b');
  }, 100);  
  setTimeout(() => {
    console.log('c');
  }, 0);
  console.log('d');
}

run();
```

What is the output? Why?

---

# Example 2

```js
function do_a(){
  // simulate a time consuming function
  setTimeout(() => {
    console.log('a');
  }, Math.random() * 1000);
}

function do_b(){
  console.log('b');
}

do_a();
do_b();
```

What is the output? Why?

---

# Example 3

```js
function do_a(cb) {
  console.log('a');
  cb('cb');
}

function do_b() {
  console.log('b');
  do_a(console.log)
}

do_b();
```

What is the output? Why?

What is different about this example?

---

template: inverse

# Data Structures

.large[
   Stacks & Queues
]

---
class: center

# Stack

.inline-images[
  <img src="https://www.oddballs.co.uk/images/CathysSpinningPlateMain.jpg" width="400">
]

---
class: middle

## Stack

- L -> Last
- I -> In
- F -> First
- O -> Out

Two methods: __Push__ & __Pop__. One reference: __Top__.

How would we implement it?

---
class: center

# Queue

.inline-images[
  <img src="https://davidsowden.files.wordpress.com/2012/08/the_kissing_queue.jpg" width="400">
]

---

class: middle

## Queue

(head) 1 <- 2 <- 3 <- 4 <- 5 (tail)

Two methods: __Enqueue__ & __Dequeue__. Two references: __Head__ & __Tail__.

How would we implement it?

---

template: inverse

# The Event Loop

---

class: middle

## Exercise: The Event Loop as a Restaurant

Picture a busy restaurant with one server on the floor.

The server takes orders, gives them to the kitchen, fills water glasses, runs food, and takes payment for every table that comes into the restaurant.

---

class: middle

## Exercise: The Event Loop as a Restaurant

Which of the server's responsibilities are synchronous? Which are asynchronous?

When would the server's responsibilities affect the experience of the customers in the restaurant?

---

class: middle

## Exercise: The Event Loop as a Restaurant

Let's do this.

Pick a server and a chef. Everyone else can be a table.

Take orders on post-it notes. Use a Stack and a Queue and an interface called "The Kitchen" to make the restaurant work.

---

template: inverse

# Parallelism

.large[
   Picture a rollercoaster with one thirty-seat car
]

---

template: inverse

# Asynchrony

.large[
   Picture a rollercoaster thirty one-seat cars
]

---

template: inverse

# Concurrency

.large[
   More than one person can enjoy the rollercoaster at any given time
]

---
class: center, middle

## So how do we write asynchronous code?

---

template: inverse

# Callbacks

.large[
   (& Callback Hell)
]

---

template: inverse

# Promises

---

template: inverse

# Async Functions

.large[
   AKA the best thing ever
]

---

## Exercise

It's time to understand the pain and pleasure of each type of async function.

Using [this fake API](https://jsonplaceholder.typicode.com/), write a function that:

- GETs some data
- Prints some part of it to the console
- POSTs some of it
- Prints "Done!"

Write it using callbacks, then promises, then async/await.

{% endhighlight %}
