---
layout: slidedeck
title: Redux Middleware Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Redux Middleware

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. What is middleware?
2. Currying and composition
3. Write a logger middleware
4. Use middleware for async operations and in different environments

---
template: inverse

# What is Middleware?

---

# What Does It Do?

In Redux, middleware provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.

Middleware allows us to do things like logging and makes API requests in our action creators. Without middleware, Redux store only supports synchronous data flow.

*Where do you think we'll need to use this in Boomtown?*

---
class: center, middle

.inline-images[
  ![Redux middleware diagram](/public/img/slide-assets/redux_middleware.gif)
]

.footnote.right[Image source: [Our Way of Life](https://prmadi.com/getting-started-with-react-native-app-and-parse/)]

???

We can see here that middleware gives us a chance to intercept a dispatched action before reaching the reducer.

---
template: inverse

# But First, Function Currying & Composition!

---

# More FP Concepts

In addition to what we've already learned about functional programming, we'll need to understand a couple more concepts to implement middleware in Redux:

- Currying
- Function composition


---

# Currying

When currying, you call a function with fewer arguments than it expects. It returns a function that takes the remaining arguments.

The idea with currying is that A function can move throughout your application and gradually receive the arguments it needs.

---

# An Example

Non-curried function:

```js
const madLibs = (ingVerb, number, nameOfPerson) => (
  `When people begin ${ingVerb} in outer space,
  they will have to spend ${number} years just getting
  to the nearest solar system, called ${nameOfPerson}.`
);

madLibs('hitch-hiking', '42', 'Arthur Dent');
```

Curried version:

```js
const curriedMadLibs = ingVerb => number => nameOfPerson => (
  `When people begin ${ingVerb} in outer space,
  they will have to spend ${number} years just getting
  to the nearest solar system, called ${nameOfPerson}.`
);

curriedMadLibs('hitch-hiking')('42')('Arthur Dent');
```

---

# Without Arrows

Using regular functions makes it easier to see what's going on:

```js
const curriedMadLibsNoArrows = function(ingVerb) {
  return function (number) {
    return function (nameOfPerson) {
      return `When people begin ${ingVerb} in outer space,
        they will have to spend ${number} years just getting
        to the nearest solar system, called ${nameOfPerson}.`
    }
  }
}

curriedMadLibsNoArrows('hitch-hiking')('42')('Arthur Dent');
```

---

# Partial Application

You can partially apply a curried function too:

```js
const curriedMadLibs = ingVerb => number => nameOfPerson => (
  `When people begin ${ingVerb} in outer space,
  they will have to spend ${number} years just getting
  to the nearest solar system, called ${nameOfPerson}.`
);

const how = curriedMadLibs('hitch-hiking');
const timeTo = how('42');
const where = timeTo('Arthur Dent');
```

???

- Partial application and currying are not the same thing! (though related)
- Currying is a function that takes a function with multiple parameters as input and returns a function with exactly one parameter
- Partial application is the process of applying a function to some of its arguments
- The partially applied function gets returned for later use, i.e. a function that takes a function with multiple parameters and returns a function with fewer parameters

---

# Exercise 1

Re-write this function as a curried function:

```js
const greeting = (greeting, name) => {
  return `${greeting}, ${name}`;
};
```

Try using partial application with your curried function too.

---
class: center, middle

.large[
  Middleware is created by **composing** functionality that wraps separate cross-cutting concerns which are not part of your main execution task.
]

???

- In the case of Redux middleware the main execution task is the store’s dispatch function
- What might be an example of a "cross-cutting" concern?

---

# Function Composition

- The most common use for currying in functional programming is to make it easier to **compose functions**
- Function composition is the process of **combining two or more functions to produce a new function**
- Think of it as "breeding" functions, or mashing them together to produce a brand new one
- Composition is **associative** so it doesn't matter how you group them (as long as the operands are in the same order)

???

Demonstrate associativity:

```js
const comp = f => g => x => f(g(x));

const inc = x => x + 1;
const dec = x => x - 1;
const sqr = x => x * x;

comp(comp(dec) (sqr)) (inc) (2); // 8
comp(dec) (comp(sqr) (inc)) (2); // 8
```

---

# Math!

We would express function composition in math like this:

`f(g(x))` (evaluated from the inside out)

And in JavaScript:

```js
var compose = function(f, g) {
  return function(x) {
    return g(f(x));
  }
};

// ES2015!
// const compose = (f, g) => x => g(f(x));
```

`f` and `g` are functions and `x` is the value being piped through them.

???

Clear math example:

```
given:
  f(x) = x^2 + 3x + 1
  g(x) = 2x
then:
  (f ∘ g)(x) = f(g(x)) = f(2x) = 4x^2 + 6x + 1
```

- If you take a bunch of small, pure functions and compose them, you guaranteed get a more complex function that is still pure and composable (scalable!)
- JS...point out that this is a higher-order function

---

# Composing "n" Functions

Using a rest parameter and a `reduce`, we can compose together multiple functions:

```js
const compose = (...funcs) => {
  return funcs.reduce((acc, func) => (...args) => acc(func(...args)));
};

// no arrows
const composeNoArrows = function(...funcs) {
  return funcs.reduce(function(acc, func) {
    return function(...args) {
      return acc(func(...args));
    }
  });
};
```

Check this out in action in the [Redux source code](https://github.com/reactjs/redux/blob/master/src/compose.js).

???

- Note that functions are composed right to left, so `compose(f, g, h)` is identical to doing `(...args) => f(g(h(...args)))`

---

# Exercise 2

Create a `compose` function that accepts any number of functions as arguments to compose these functions together. Try emoting multiple times and see what happens.

```js
const greet = (name) => {
  return `Hello ${name}`;
};

const emote = (sentence) => {
  return `${sentence}!!!`;
};
```

---
template: inverse

# Applying Middleware

---

# Redux Middleware

Here is the function signature for every Redux middleware.

Does the Redux middleware use function composition or currying or both?

```js
const middleware = store => next => action => {
  // This middleware does nothing!
  next(action);
};
```

???

- It should be evident that Redux middleware uses function composition to apply middleware in sequence
- Redux middleware is designed by creating functions that can be composed together before the main dispatch method is invoked
- Compare this function signature with the `excitedGreeter` example
- Challenge the students to assess why the middleware would be called with the store and action.
- Describe how we can get the state before and after the call to `next(action)`

---

# Apply Middleware

Back to the grocery store! To use Redux's `applyMiddleware` to add middleware to your store:

```js
import { createStore, applyMiddleware } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

export default createStore(
  rootReducer,
  // devToolsEnhancer()
  composeWithDevTools(
    applyMiddleware(/* some middleware... */)
  )
);
```

What functional pattern does `applyMiddleware` resemble?

???

- We would just add `applyMiddleware` as the second argument to `createStore` directly if we weren't using dev tools
- **Challenge the students:** Does the order of the middleware added to `applyMiddleWare` matter? **Answer:** yes.
- Because Redux middleware uses function composition, the order does matter

---

# Exercise 3

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
template: inverse

# Thunks

---

# Thunks?

A thunk is a function returned from another function (or a function that wraps an expression) so you can delay the evaluation of an expression until later:

```js
function not_a_thunk() {
  // this one is a thunk because it defers work for later
  return function() {
    console.log('do stuff now')
  }
}

not_a_thunk()(); // calls it right away, but you don't have to!
```

Where might we need these in the project?

???

- We'll need them to trigger network requests, etc.
- Reducers are supposed to be pure (i.e. not change anything), so putting Ajax requests in a reducer is a non-starter

---

# Another Example

The calculation of `1 + 2` is immediate:

```js
let x = 1 + 2;  // 3
```

The calculation of `1 + 2` is delayed:

```js
// foo can be called later to perform the calculation
// foo is a thunk!
let foo = () => 1 + 2;

// same, no arrows
let foo = function() {
  return 1 + 2;
}

foo(); // 3
```

---

# Redux Thunk

**[Redux Thunk](https://github.com/gaearon/redux-thunk)** allows us to dispatch multiple actions in order, following this funciton signature:

```js
const action = (someArg, otherArg) => dispatch => {
  dispatch(someActionCreator1(someArg, otherArg));
  dispatch(someActionCreator2());
}
```

*Why is this important?*

???

- Wait, what!? Actions are supposed to be objects...
- Redux thunk allows us to create actions that are function instead
- By default, Redux action creators don't support asynchronous actions like fetching data, so here's where we use Redux Thunk
- It is a middleware that looks at every action that passes through the system, and if it’s a function, it calls that function
- That’s all it does!

---

# How Does It Work?

Under the hood:

```js
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
```

---

# Add Redux Thunk

Install the package:

```bash
npm install --save redux-thunk
```

In `store.js`:

```js
// ...
import thunk from 'redux-thunk';
// ...

export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger, thunk)
  )
);
```

---

# Exercise 4

Now that you installed Redux Thunk, write an async action creator called `waitAndUpdateThenExplainFruitStock` that wraps calls to dispatch `updateFruitStock` and `explainFruitStock` in a `setTimeout`.

Set your timer for 2 seconds, dispatch your new async action creator from `index.js`, and take a look at what happens in your Redux dev tools.

---

# Example With Fetch

An example of using `fetch` in an async action creator:

```js
const fetchSomethingFromAPI = url => dispatch => {
  dispatch(somethingIsLoading());

  fetch(url)
    .then(response => response.json())
    .then(data => dispatch(somethingFetchedSuccessfully(data)))
    .catch(error => dispatch(somethingHasErrored(error)));
};
```

---
template: inverse

# Production vs. Development

???

- What are we talking about when we say 'production' or 'development' in relation to software development?
- What features do we have in our app that we do not want in 'production'?
  - logger
  - devTools
  - no warnings or propType errors

---

# process.env.NODE_ENV

You can detect and use environment variables in your app using the following code:

```js
if (process.env.NODE_ENV !== 'production') {
  // do development stuff
} else {
  // do production stuff
}
```

`process` is a special **global** variable, much like `window` or `document` in Web Browser environments.

???

- Demonstrate how variables can be passed into a Node process using `process.env` by setting some variables in your `.[whatever]rc` files using `export`, as well as running a node script with an environment variable: eg: `APP_NAME='Boomtown' node index.js`, and `console.log(process.env.APP_NAME);` from within the script


---

# Logger in Dev Only

React apps should not use the logger middleware in production environments because of performance penalties, and potential errors. Thunks however will be used. Here is how you determine individual middleware per environment:

```js
let middlewareList = [reduxThunk];

if (process.env.NODE_ENV !== 'prodution') {
  middlewareList.push(logger);
}

const middlewares = applyMiddleware(...middlewareList);
```

---

# What We've Learned

- What middleware is used for in Redux
- How to do function currying and composition in JS
- How to write custom middleware, and use third-party packages
- Selectively apply middleware in different environments

---
template: inverse

# Questions ?

{% endhighlight %}
