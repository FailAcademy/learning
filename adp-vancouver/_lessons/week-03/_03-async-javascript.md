# Async Javascript (3-4 hrs)

## SetTimeout (10)

1. `setTimeout` puzzle.

What do you think the output will be? Why?

EXAMPLE 1

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

EXAMPLE 2

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


*( 'a' 'd' 'c' 'b' )*

Why, we'll look at that shortly.

Use **debugger** to walk through the order of operations.

### Event Loop (5)

Metaphor: servant

Imagine you are the king of small country with only one very dumb servant. This is a lot like how Javascript works.

Model an example for the class using a student:

Write some tasks on a post it notes.

King -> Servant "go get a loaf of bread"
King -> Servant "go cut the loaf of bread into slices"
King -> Servant "spread jam on the bread"
King -> Servant "spread peanut butter on the bread"
King -> Servant "bring me the sandwich"

These tasks are added to "the queue" and put on "the stack". The stack is FIFO (first in, first out).

Tell a student to organize the stack as FIFO.

### Stack (5)

When Javascript runs, it runs in a single thread of execution. Which means there can only be one path of code execution at any point in time.

You may have heard the phrase "stack overflow", what do you think it means?

*( tasks overload the memory )*

We could wrap all the tasks into a function, called "make me a sandwich".

Write an envelope called "make me a sandwich"

King -> Servant "make me a sandwich"

### Stack, Queue & Heap (20)

Read [Event Loop](https://developer.mozilla.org/en/docs/Web/JavaScript/EventLoop) or [What is the Event Loop](http://altitudelabs.com/blog/what-is-the-javascript-event-loop/).

Draw the image from the top of the "Event Loop" link on a piece of paper.

```
|  | <- stack
|  | _ _ _ _ _ _ _
|  |  queue
```

Using post it notes at your table, make a demo of how the browser handles code using the:
  - stack
  - queue

Make an example using the previous setTimeout example.

How does setTimeout work?

When does `setTimeout(fn, 1000)` fire?

*( Not exactly after 1000ms. It enters the queue after 1000ms, and then is put on the stack when the thread is available )*

What does `setTimeout(fn, 0)` do, and why might it be useful?

*( forces a function to run once the tasks in the queue are complete )*

### Blocking & Non-Blocking (5)

Now imagine the king suddenly has another task he has to handle.

King -> Servant "bring me some wine"

The King must wait for the Servant to finish making sandwiches before anything else can happen.

The King is "blocked" by tasks in the stack.

```js
function run() {
  const start = performance.now();
  alert('Blocking...');
  const end = performance.now();
  console.log(`This code was blocked for ${end - start} ms`);
}
```

## Writing Async Code

### Intro (5)

What's another word for "non-blocking" code?

*( async )*

Take a minute to brainstorm ideas of how we can write async code.

*(
1. Concurrency
2. Callbacks
3. Promises
4. Generators
)*

### Concurrency: FileSystem (20)

Compare blocking and non-blocking code with the built in Node module `fs`.

[docs](https://nodejs.org/api/fs.html)
[src](https://github.com/nodejs/node/blob/master/doc/topics/blocking-vs-non-blocking.md)

1. Create a demo file to read

```md
file.md

some content here
```

2. Read a file with `fs.readFileSync`, write a timer.

```js
// sync.js
const { readFileSync } = require('fs');

const start = performance.now();

const syncData = readFileSync('file.md', 'utf8');
const end = performance.now();
console.log(syncData);
console.log(`This synchronous code was blocked for ${end - start} ms`);
```

3. Read a file with `fs.readFile`

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

How does `fs.readFile` become asynchronous?

*( fs opens a separate process on a different thread. `readFile` doesn't wait for it to finish, while `readFileSync` waits )*

### What is Concurrency (5)

I want to buy a fast computer, what should I look for?

*( GHz, Cores )*

**Cores** refer to the amount of processes or **threads** you can run at one time. Ghz refers to the number of operations per second.

Which of these two make Javascript faster?

*( Ghz, only one thread )*

If you want to learn more about multi-threading in Javascript, study "service workers".


### Review (3)

Why is understanding Async important?

*(
- async is the cause of many bugs in code - the engine interprets code differently than you expected
- async is important for performance
)*

The FileSystem is a special case, as it can spawn different threads.

In the browser, we have only one thread.

### Callbacks (20)

Introduce callbacks. [examples](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)

Callbacks work by passing a second call to

King -> Servant "go get a loaf of bread and come back"
King -> Servant "go cut the loaf of bread into slices and come back"
King -> Servant "spread jam on the bread and come back"

Let's fix example 2 to run in order.

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

Why `callback && callback()`?

This ensures that callback is only called when callback exists.

```js
function do_a() {
  callback && callback()
}
do_a();
// short circuits at first callback

function do_b(callback) {
  callback && callback()
}
do_b();
// true && calls the callback
```

### Callback Hell (10)

1. Write five consecutive calls logging "a", "b", "c", "d", "e" with 1 second intervals.

```js
function do_a(callback){
  setTimeout(() => {
    console.log('a');
    callback && callback();
  }, Math.random() * 1000);
}

function do_b(callback){
  setTimeout(() => {
    console.log('b');
    callback && callback();
  }, 1000);
}

function do_c(callback){
  setTimeout(() => {
    console.log('c');
    callback && callback();
  }, 1000);
}

function do_d(callback){
  setTimeout(() => {
    console.log('d');
    callback && callback();
  }, 1000);
}

function do_e(){
  setTimeout(() => {
    console.log('e');
  }, 1000);
}

do_a(() => {
  do_b(() => {
    do_c(() => {
      do_d(() => {
        do_e();
      });
    });
  });
});
```

2. Refactor into a common function called "do_letter" that takes a letter and a callback:

```js
function do_letter(letter, callback) {
  setTimeout(() => {
    console.log(letter);
    callback && callback();
  }, Math.random() * 1000);
}

do_letter('a', () => {
  do_letter('b', () => {
    do_letter('c', () => {
      do_letter('d', () => {
        do_letter('e');
      });
    });
  });
});
```

Do you see a problem forming?

*(
  - nested callbacks can become massively indented (pyramid of doom)
  - hard to read
  - what happens with multiple callbacks? trees and forks
  - what happens if e wants to call b? infinite recursion
)*

Discuss "callback hell". [examples](http://stackabuse.com/avoiding-callback-hell-in-node-js/)

### Promises Explained (10)

Look back at the King / Servant example. What do you think a promise is?

*( Servant: I promise I will make a sandwich. A guarantee )*

A promise is not actually a guarantee. As in real life, things can go wrong. What happens if the servant goes to make a sandwich and there's no more peanut butter?

A promise can have different states, guess what they mean:

- resolve = *( complete, success, fulfilled )*
- reject = *( broken promise, fail )*
- pending = *( waiting, unknown )*

Have students act out each promise situation in small groups.

### Promises: Code (20)

Introduce promises (similar to egghead.io tutorial).

Keywords:
- new
- Promise *( params: resolve & reject )*
- resolve
- reject
- then *( takes a function )*

```js
function do_a(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log('a'));
    }, 1000);
  });
}

function do_b(){
  console.log('b');
}

do_a()
  .then(() => do_b());
```

You can also pass the result of the first value using then.

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

What happens if the log function doesn't return a val? Why?

*( it breaks. nothing is passed on to the next function )*

### Challenge (25)

1. Change the callback hell example to use promises instead.

Answer:

```js
function do_letter(letter){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(letter);
      resolve();
    }, 1000);
  });
}

do_letter('a')
  .then(() => do_letter('b'))
  .then(() => do_letter('c'))
  .then(() => do_letter('d'))
  .then(() => do_letter('e'));
```

2. Write the function to fail on the letter d with an error: "Failed at 'd'".

```js
function do_letter(letter){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (letter === 'd') {
        reject('Error at ' + letter);
      } else {
        console.log(letter);
        resolve();
      }
    }, 1000);
  });
}

do_letter('a')
  .then(() => do_letter('b'))
  .then(() => do_letter('c'))
  .then(() => do_letter('d'))
  .then(() => do_letter('e'));
```

3. Change the function to write "skip d" and continue instead of failing with an error.

Hint: use "catch"

```js
function do_letter(letter){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (letter === 'd') {
        reject(letter);
      } else {
        console.log(letter);
        resolve();
      }
    }, 1000);
  }).catch((e) =>{
    console.log('skip ' + letter);
    return;
  });
}

do_letter('a')
  .then(() => do_letter('b'))
  .then(() => do_letter('c'))
  .then(() => do_letter('d'))
  .then(() => do_letter('e'));
```

### Practice (20)

1. Use a native JS promise to load data from an api. [API suggestions](https://github.com/toddmotto/public-apis)

  If the first request fails, it should retry.
  If the second request fails, it should retry again.
  If the third request fails, it should return an error.
  If a request succeeds, it should log the data to the console.

*( example solution:

```js
window.fetch = window.fetch ? window.fetch : function makeRequest(method, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}

makeRequest('GET', 'http://example.com')
.then(function (response) {
  const result = JSON.parse(response);
  console.log(result);
})
.catch(function (err) {
  console.log(err);
});
```

)*


### Pending (20)

4. Pending

```js
function wait() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{ item: 1}]);
    }, 3000);
  })
}

let response = wait().then(val => response = val);

let isPending = setInterval(() => {
  if (response && response.length) {
    clearInterval(isPending);
    console.log(response);
  } else {
    console.log('loading...');
  }
}, 500);
```


## Review (5)

1. Brainstorm three situations where you would use a promise

- *( api call, read/write file, HTTP request, loading spinner )*


## Challenge

Experiment with `Promise.all` and `Promise.race`. How do these two differ?
