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

1. Event loop
2. Blocking vs. non-blocking
3. Callbacks
4. ES6 Promises

---

## Exercise 1

Read the following code examples, and predict the outcome.

Do not copy and run the code yet.

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
class: center, middle, inverse

# Event Loop

---

# Event Loop

Imagine you are the king of small country with only one very dumb servant. This is a lot like how Javascript works.

**King** <("go get a loaf of bread")<br />
**King** <("go cut the loaf of bread into slices")<br />
**King** <("spread jam on the bread")<br />
**King** <("spread peanut butter on the bread")<br />
**King** <("bring me the sandwich")<br />

Keywords: **queue**, **stack**, **FIFO**

---

# Function

We could wrap all the tasks into a function, called "make me a sandwich".

**King** <("make me a sandwich")

---

# Stack

Javascript runs in a single **thread** of execution.

The interpreter can only handle one thing at a time.

- What do you think a **stack overflow** is?

---

# Stack, Queue, & Heap

Read [Event Loop](https://developer.mozilla.org/en/docs/Web/JavaScript/EventLoop) or [What is the Event Loop](http://altitudelabs.com/blog/what-is-the-javascript-event-loop/).

Draw the image from the top of the "Event Loop" link on a piece of paper. It should be "page" sized.

```
| s |
| t |
| a |
| c | _ _ _ _ _ _ _
| k |  q u e u e
```

---

# The Event Loop in Action

Using post-it-notes at your table, make a demo of how the browser handles the previous `setTimeout` code example. Focus on the **stack** and **queue**.

```js
(function run() {
  console.log('a');
  setTimeout(() => {
    console.log('b');
  }, 100);  
  setTimeout(() => {
    console.log('c');
  }, 0);
  console.log('d');
}());
```

---

# Break Points

Run the code in your editor with "break points" to verify this is how it works.

"DevTools" => "Sources" -> "Snippets" -> "New Snippet".

```js
(function run() {
  console.log('a'); // break
  setTimeout(() => { // break
    console.log('b'); // break
  }, 100);  
  setTimeout(() => { // break
    console.log('c'); // break
  }, 0);
  console.log('d'); // break
}());
```

---

# Single Thread

- How many threads can your computer handle?
- Why do you think JavaScript is "single-threaded"?
- Do you think a single thread makes coding easier or harder?

---
template: inverse

# Blocking
# &
# Non-Blocking

---

# Blocking & Non-Blocking

Now imagine the king suddenly has another emergency task he has to handle.

**King** <("make me a sandwich")<br />
<br />
    (after 3 seconds)<br />
<br />
**King** <("bring me some wine")

---

# Blocking

The King must wait for the Servant to finish making sandwiches before anything else can happen.

**Servant** => sandwich => **King**<br />
<br />
**Servant** => wine => **King**

The King is **blocked** by tasks in the stack.

- Why can't the King get his wine first?


---

# Blocking Example

Javascript is generally a non-blocking language. However, some functions, such as `alert` are blocking.

```js
function run() {
  const start = performance.now();
  alert('Blocking...');
  const end = performance.now();
  console.log(`This code was blocked for ${end - start} ms`);
}
```

---
template: inverse

# Concurrency

---

# Concurrency

Concurrency refers to running multiple processes (threads) at the same time.

This is possible nowadays with multi-core computers.

Think of it like a king with several servants, most of whom are idle a lot of the time. 

---

## Exercise 2

See the [fs docs](https://nodejs.org/api/fs.html) &
[src](https://github.com/nodejs/node/blob/master/doc/topics/blocking-vs-non-blocking.md).

- create a demo file called "file.md" to read.
- create a file called "sync.js" that should read "file.md" using `fs.readFileSync`.
- create a file called "async.js" that should read "file.md" using `fs.readFile`.
- create timers using "performance.now()" to determine how long the previous functions take to run.

---

# fs.readFileSync

```js
// sync.js
const { readFileSync } = require('fs');

const start = performance.now();

const syncData = readFileSync('file.md', 'utf8');
const end = performance.now();
console.log(syncData);
console.log(`This synchronous code was blocked for ${end - start} ms`);
```

---

# fs.readFile

```js
// async.js
const { readFile } = require('fs');

const startAsync = performance.now();

readFile('file.md', (err, data) => {
  const endIn = performance.now();
  if (err) throw err;
  console.log(data);
  console.log(`This inside code was blocked for ${endIn - startAsync} ms`);
});
const endOut = performance.now();
console.log(`This outside code was blocked for ${endOut - startAsync} ms`);
```

How is `readFile` asynchronous?

---

# Concurrency: File System

Discuss the pros and cons of using `fs.readFile` or `fs.readFileSync`.

---

# What is Concurrency

Which **two numbers** should you consider if you want to buy a fast computer?

Read [this](http://www.quickanddirtytips.com/tech/computers/how-to-compare-computer-processors-cpus?page=1) for help.

---
template: inverse

# Callbacks

---

# Callbacks

Callbacks work by passing a second call to your function.

**King** <("go get a loaf of bread and come back")<br />
**King** <("go cut the loaf of bread into slices and come back")<br />
**King** <("spread jam on the bread and come back")

---

# Example 2

Callbacks can be used to make the results return in order.

```js
function do_a(callback){
  setTimeout(() => {
    console.log('a');
    callback && callback(); // why callback && callback()?
  }, Math.random() * 1000);
}

function do_b(){
  console.log('b');
}

do_a(() => {
  do_b();
});
```

---

## Exercise 3

1. Rewrite example 2 using callbacks.

2. Use "nested" callbacks to write five consecutive calls logging "a", "b", "c", "d", "e" with 1 second intervals.


---
template: inverse

# Promises

---

# Promises

A promise is a way of handling async code.

**Servant** <("I promise I will make a sandwich.")

An async action can have three different states:

- **resolve**: "The sandwich is made"
- **reject**: "Sorry, we are out of peanut butter"
- **pending**: "I'm still making the sandwich now"

Give an example of each state in a real app.

---

# Promises

What do each of the following keywords do:<br /> **new**, **Promise**, **resolve**, **reject**, **then**

```js
let result = new Promise((resolve, reject) => {
  return result.then((res, err) => {
    if (err) { reject(err); }
    resolve(res.data);
  });
})
```

---

# `.then()`

```js
function wait(val, time){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(val);
    }, time);
  });
}

function addOne(val){
  return val + 1;
}

function log(val) {
  console.log(val);
  return val;
}

wait(0, 1000)
  .then((val) => addOne(val))
  .then((val) => log(val))
  .then((val) => wait(val, 1000))
  .then((val) => addOne(val))
  .then((val) => console.log(val));
```

---

## Exercise 4

1. Change the callback hell from example 2 (a, b, c, d, e) to use ES6 Promises instead.

2. Ensure that the function returning "d" throws the error "Failed at 'd'".

3. Change the function to `console.log('Skipped "d"')` and continue instead of throwing na error. Hint: `catch` the failure.

---

## Exercise 5 (Stretch Goal)

1. Use a native JS promise to load data from an api. [API suggestions](https://github.com/toddmotto/public-apis)

  If the first request fails, it should retry.
  If the second request fails, it should retry again.
  If the third request fails, it should return an error.
  If a request succeeds, it should log the data to the console.

2. Write a demo to that demonstrates the difference between `Promise.all` and `Promise.race`.

---

# Review

1. Event loop
2. Blocking vs. non-blocking
3. Callbacks
4. ES6 Promises

{% endhighlight %}
