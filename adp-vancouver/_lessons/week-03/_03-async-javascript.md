# Async Javascript


## SetTimeout (10)

1. `setTimeout` puzzle.

What do you think the output will be? Why?

```js
// setTimeout(fn, delay)

function run() {
  console.log('a');
  setTimeout(() => console.log('b'), 100);
  setTimeout(() => console.log('c'), 0);
  console.log('d');
}
```

*( 'a' 'd' 'c' 'b' )*

How does setTimeout work?

What does `setTimeout(fn, 0)` do, and why might it be useful?


### Event Loop

Metaphor: servant

Imagine you are the king of small country with only one very dumb servant. This is a lot like how Javascript works.

Model an example for the class using a student:

Write some tasks on a post it notes.

King -> Servant "go get a loaf of bread and come back"
King -> Servant "go cut the loaf of bread into slices and come back"
King -> Servant "spread jam on the bread and come back"
King -> Servant "spread peanut butter on the bread and come back"
King -> Servant "bring me the sandwich"

These tasks are added to "the stack". The stack is FIFO (First in, first out).

Tell a student to organize the stack as FIFO.

### Stack

When Javascript runs, it runs in a single thread of execution. Which means there can only be one path of code execution at any point in time.

You may have heard the phrase "stack overflow", what do you think it means?

*( tasks overload the memory )*

We could wrap all the tasks into a function, called "make me a sandwich".

Write an envelope called "make me a sandwich"

King -> Servant "make me a sandwich"

### Blocking & Non-Blocking

Now imagine the king suddenly has another task he has to handle.

King -> Servant "bring me some wine"

The king must wait for the servant to finish making sandwiches before anything else can happen.

The King is "blocked" by tasks in the stack.






[examples](https://developer.mozilla.org/en/docs/Web/JavaScript/EventLoop)
[example 2](http://altitudelabs.com/blog/what-is-the-javascript-event-loop/)



3. Compare blocking and non-blocking code with fs

[src](https://github.com/nodejs/node/blob/master/doc/topics/blocking-vs-non-blocking.md)

4. Introduce callbacks. [examples](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)

5. Discuss "callback hell". [examples](http://stackabuse.com/avoiding-callback-hell-in-node-js/)

6. Introduce promises (similar to egghead.io tutorial). Cover syntax, resolve & reject. Use a simple backend that has a setTimeout of 2500ms.

7. Brainstorm three situations where you would use a promise

8. Use a native JS promise to load data from an api. Use reject to: 1. retry, 2. handle an error message.

9. Introduce the pending property Write a loading spinner that is triggered while data is loading.
