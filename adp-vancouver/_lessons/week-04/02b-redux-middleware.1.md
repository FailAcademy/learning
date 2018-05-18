---
layout: lesson
title: Redux Middleware
slides: ['_slides/week-04/02b-redux-middleware.md']
lesson_date: 2018-04-18
---

## Pre-Work

Prior to class, please read the Redux docs on [middleware](http://redux.js.org/docs/advanced/Middleware.html) and [async flow](http://redux.js.org/docs/advanced/AsyncFlow.html).

Optional reading, but recommended:

* [Chapter 4: Currying](https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/ch4.md)
* [Chapter 5: Coding by Composing](https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/ch5.md)

---

## Learning Objectives

* Explain what function currying and function composition are, and how they can be used to make code more reusable and readable.
* Define what middleware is in relation to Redux, and its role in an application.
* Apply Redux middleware, including a bespoke logger and `redux-thunk`.
* Use `redux-thunk` to dispatch multiple actions from an action creator.
* Learn how to setup middleware in your project, depending on environments.

---

## Keywords

* Middleware
* Currying
* Composition
* Logger
* Thunk

---

## Exercise 1

Re-write this function as a curried function:

```js
const greeting = (greeting, name) => {
  return `${greeting}, ${name}`;
};
```

Try using partial application with your curried function too.

---

## Exercise 2

Create a `compose` function that accepts any number of functions as arguments to compose these functions together. Try emoting multiple times and see what happens.

```js
const greet = name => {
  return `Hello ${name}`;
};

const emote = sentence => {
  return `${sentence}!!!`;
};
```

---

## Exercise 3

Let's implement a simple logger. In your grocery store app, put the following code inside a function that matches the expected function signature for Redux middleware:

```js
console.group(action.type);
console.info('dispatching', action);
let result = next(action);
console.log('next state', store.getState());
console.groupEnd(action.type);
return result;
```

Apply your middleware, and check out the browser console.

---

## Exercise 4

Now that you installed Redux thunk, write an async action creator called `waitAndUpdateThenExplainFruitStock` that wraps calls to dispatch `updateFruitStock` and `explainFruitStock` in a `setTimeout`.

Set your timer for 2 seconds, dispatch your new async action creator from `index.js`, and take a look at what happens in your Redux dev tools.

---

## Lab Activity

In todays lab we'll continue to work on our Boomtown project. Try installing Redux in Boomtown now, and set up your store (with dev tools).

We'll learn how to access state managed the Redux store in our React components tomorrow.

---

## Additional Resources

More on middleware:

* [Understanding Redux Middleware](https://medium.com/@meagle/understanding-87566abcfb7a)
* [Egghead.io: Redux Middleware Chain](https://egghead.io/lessons/javascript-redux-the-middleware-chain?course=building-react-applications-with-idiomatic-redux)
* [Stack Overflow: How to Dispatch Async Actions](http://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559)
* [A Dummy's Guide to Redux and Thunk in React](https://codepen.io/stowball/post/a-dummy-s-guide-to-redux-and-thunk-in-react)
