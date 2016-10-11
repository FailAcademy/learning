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
class: middle, center

### Where is the middleware?

View -> Action -> Reducer -> Store -> View

---

# Middleware

Middleware in action.

```js
// store has access to `getState` & `dispatch`
const middleware = store => next => action => next(action);
```

- Explain to a partner how you think middleware works.
- Where does the magic happen?

---

# Middleware

Middleware in action.

```js
// store has access to `getState` & `dispatch`
const middleware = store => next => action => {
  
  // magic is here

  return next(action);
};
```

---

# Agenda

Continue from your "Worst Pokemon" app earlier this week.

1. `applyMiddleware`
2. add "logger"
3. add "thunk"
4. add an optional middleware

---

# Apply Middleware

Use Redux's `applyMiddleware` to add middleware to your store.

```js
import { createStore, combineReducers, applyMiddleware } from 'redux';

const store = createStore(
  reducers,
  applyMiddleware(/* middleware here*/)
);
```

---
class: middle

# Exercise 1

Setup ["redux-logger"](https://github.com/evgenyrodionov/redux-logger) middleware in your "Worst Pokemon" app.

---

# Redux-Logger Simplified

A simplified version of "redux-logger".

```js
// store has access to `getState` & `dispatch`
const middleware = store => next => action => {

  console.log(
    store.getState(),
    action,
    next(action).getState()
  )
  return next(action);
};
```

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

class: middle

# Redux Thunk

Setup ["redux-thunk"](https://github.com/gaearon/redux-thunk) middleware in your "Worst Pokemon" app.

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

Setup an "async action" that sorts pokemon by their number of votes.
(highest to least). Call this action "SORT_BY_POPULARITY".

The sorting action should be called every time you "VOTE_UP".


---

# SORT_BY_POPULARITY

/src/pokemon.js

```js
const SORT_BY_POPULARITY = 'SORT_BY_POPULARITY';
export const sortByPopularity = () => ({ type: SORT_BY_POPULARITY });
```

/src/index.js

```js
import {default as pokemon, voteUp, sortByPopularity} from './pokemon';

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

/src/pokemon.js

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

# Sorting

Sort pokemon when "SORT_BY_POPULARITY" is called.

/src/pokemon.js

```js
  case SORT_BY_POPULARITY:
  return pokemon.sort();
```

Why doesn't this work?

---

# Sort By Votes

Complicated sorting requires a sorting function. 

/src/pokemon.js

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
  return pokemon.sort(sortByVotes);
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
  return pokemon.sort(sortByKey('votes'));
```
---

# Returning a Function

What do we call a function that returns a function?

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

list.sort(sortByKey('votes'));
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
