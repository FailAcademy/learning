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

1. Middleware is a software pattern
2. Functional programming primier
3. Write a logger middleware
4. Add middleware to your project

---
class: middle, center

### What is Middleware?

View -> Action -> Reducer -> Store -> View

???
Before diving into Redux middleware, introduce the students to the functional programming concepts that middleware uses: **Pure Functions (This is central to redux in general, but should be reviewed at this point), Function Composition, and Function Currying.**
Talking about the function signature of a middleware function is a good starting point.
Pause here to talk about Middleware as a general software pattern as well. Make sure students understand the term 'middleware' is a general term for code which has to do with 'cross-cutting concerns'.

For reference: <br/>
https://medium.com/@meagle/understanding-87566abcfb7a

---

### Functional Programming Primer

Hello There.

???
Pure functions: <br/>
// github link to exercise solution
 
Currying: <br/>
// github link to exercise solution

'It's not magic... just a pleasant shorthand for anonymous functions.' <br/>
**partial(Math.max, 0)** corresponds to **function(x){return Math.max(0, x);}**

Composition: <br/>
// github link to exercise solution

---

# Apply Middleware

Use Redux's `applyMiddleware` to add middleware to your store.

```js
import { createStore, combineReducers, applyMiddleware } from 'redux';

const store = createStore(
  combineReducers(/* reducers here */)
  applyMiddleware(/* middleware here*/)
);
```

*What functional programming pattern does `applyMiddleware` resemble?*

---

# Exercise 1

Search the [Redux source code](https://github.com/reactjs/redux) for examples of the functional
programming patters we discussed in class. 

---

# Redux Middleware

Here is the 'function signature' for every Redux Middleware. It should be evident that 
Redux middleware uses function composition apply middleware in sequence.

```js
const middleware = store => next => action => {
  // This middleware does nothing!
  next(action);
};
```

???
- Compare this function signature with the `excitedGreeter` example. Students should be able to identify 
function composition here.

- Challenge the students to assess why the middleware would be called with the store and action.

- Describe how we can get the state before and after the call to `next(action)`. Implement a simple logger that
logs the state before and after an action:

`console.log(store.getState());` <br/>
`next(action);` <br/>
`console.log(store.getState());`

---

# Exercise 2

Setup ["redux-logger"](https://github.com/evgenyrodionov/redux-logger) middleware.

---

# Thunk

Read [this Stack Overflow article](http://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559) on using Redux-Thunk.

- What is a "thunk"?
- Why might you want to use "thunk"s in your project?

---

# Redux-Thunk: Multiple Actions

Redux-Thunk allows us to dispatch multiple actions in order.

```js
const action = () => (dispatch) => {
  dispatch({ type: ACTION_1 });
  dispatch(action2());
}
```

Why is this important?

---

# Redux-Thunk: Action Creators

Redux thunk allows you to access state in action creators.

```js
const action = () => (dispatch, getState) => {
  const { id } = getState();
  dispatch({ type: ACTION_1, payload: { id }});
}
```

Why is this important?

---

# Redux-Thunk Simplified

```js
// store has access to `getState` & `dispatch`
const middleware = store => next => action => {
  if (typeof action === 'function') {
    // pass in store to the action
    return next(action)(store);
  }
  return next(action);
};
```

---

# Notes

- What happens when "redux-logger" isn't called last by `applyMiddleware`.

```js
const store = createStore(
  reducers,
  applyMiddleware(logger, thunk)
);
```

- Why does this happen?
- How can you fix it?

---

## Exercise 3

Setup an "async action" that sorts posts by their number of votes.
(highest to least). Call this action "SORT_BY_POPULARITY".

The sorting action should be called every time you "VOTE_UP".


---

### SORT_BY_POPULARITY

```js
// Action Creator
const SORT_BY_POPULARITY = 'SORT_BY_POPULARITY';
export const sortByPopularity = () => ({ type: SORT_BY_POPULARITY });
```

```js
import { voteUp, sortByPopularity} from './redux/actions';

store.dispatch(voteUp(2));
store.dispatch(sortByPopularity());
store.dispatch(voteUp(2));
store.dispatch(sortByPopularity());
```

---

# Async Dispatching

We want to call "SORT_BY_POPULARITY" after each "VOTE_UP". 
To do this, we can dispatch "SORT_BY_POPULARITY" inside of our "VOTE_UP" action creator.

---

# Async Dispatching

We want to call "SORT_BY_POPULARITY" after each "VOTE_UP". 

To do this, we can dispatch "SORT_BY_POPULARITY" inside of our "VOTE_UP" action creator.

```js
export const voteUp = id => {
  return (dispatch) => {
    // first
    dispatch({ type: VOTE_UP, payload: { id } });
    // second
    dispatch(sortByPopularity());
  };
};
```

---

# Sort By Votes

Complicated sorting requires a sorting function. 

```js
function sortByVotes(a, b) {
  switch(true) {
    case a.votes < b.votes:
      return 1;
    case a.votes > b.votes:
      return -1;
    default:
      return 0;
  }
}

/* in Reducer */
case SORT_BY_POPULARITY:
  return posts.sort(sortByVotes);
```

---

# Flexible Sort by Votes

Sorting by "key" makes a more reusable function.

```js
function sortByKey(key) {
  return function(a, b) {
    switch (true) {
      case a[key] < b[key]:
        return 1;
      case a[key] > b[key]:
        return -1;
      default:
        return 0;
    }
  }
}

/* in Reducer */
case SORT_BY_POPULARITY:
  return state.posts.sort(sortByKey('votes'));
```
---

# Thunk

Understanding thunks is helpful beyond Redux.

```
function sortByKey(key) {
  return function(a, b) {
    switch (true) {
      case a[key] < b[key]:
        return 1;
      case a[key] > b[key]:
        return -1;
      default:
        return 0;
    }
  }
}

post.sort(sortByKey('votes'));
```

---
name: inverse

# Production vs. Development

---

# Production vs. Development

What features do we have in our app that we do not want in **production**?

---

# Production vs. Development

What features do we have in our app that we do not want in **production**?

- logger
- devTools
- no warnings or propType errors

---

# Environmental Variables

Variables can be passed into a NODE process using `process.env`.

These variables can only be strings.

For example:

Setting `NODE_ENV = "X"` can be accessed as `process.env.NODE_ENV` as "X". 

---

# Setting NODE_ENV

The Node environment can be set from the command line.

```shell
NODE_ENV = 'PRODUCTION'
```

Using "create-react-app", this is handled by the "build" script.

---

# React in Production

When React is run with the NODE_ENV of "PRODUCTION", it has several performance improvements.

These include:

- no warnings
- no propType checks

---

# Using process.env.NODE_ENV

You can detect if your app is in production using:

/store.js

```js
if (process.env.NODE_ENV !== 'PRODUCTION') {
  // do development stuff
} else {
  // do production stuff
}
```

---

# Production: Remove Logger

Skip unnecessary middleware in production.

```js
let middlewareList = [reduxThunk];

if (process.env.NODE_ENV !== 'PRODUCTION') {
  const logger = require('redux-logger')();
  middlewareList.push(logger);
}

const middlewares = applyMiddleware(...middlewareList);
```

---

# Review

1. What is middleware and why do we like it?
2. Discuss three popular redux-middleware
3. Discuss how we specify code for PRODUCTION or DEVELOPMENT

{% endhighlight %}
