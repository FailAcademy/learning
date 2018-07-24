---
layout: slidedeck
title: Redux Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Redux

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1.  Whys, whats, and hows Redux
2.  Setup a basic project using Redux in plain vanilla JS

---

template: inverse

# What Problem Does Redux Solve?

---

class: center, middle

.large[
Redux is a predictable state container for JavaScript apps.
]

???

- That also uses one-way data flow!
- Get students to discuss what they think this means in plain English

---

class: center, middle

### Recall...

How did state management and data flow work in the todo app last week? Did this feel like the best solution?

???

Challenges:

- Passing properties down the tree
- Handling local state within a component
- Passing callbacks down the tree

---

class: center, middle

.large[
How can we fix these issues?
]

---

# What if...

- All app state was stored in a single immutable object?
- That state was was available anywhere within our app?
- Actions were decoupled from component hierarchy?

---

class: center, middle

.large[
How would that change the design of our app?
]

---

template: inverse

# Using Redux

---

# Three Principles of Redux

1.  There's a **single source of truth** for all application state
2.  That state is **read-only**
3.  Changes to application state are made with **pure functions**

???

Single source of truth:

- Regardless of the size of the application, all state data is stored in a single object
- This makes it much easier to debug or inspect your application!

Read-only:

- In Redux neither views nor network callbacks mutate state directly
- Because we don't mutate the state directly (just copy it and combine it with the updates), this makes it possible to "time travel" through our app state changes in the Redux dev tools

Pure functions

- We use actions in Redux, which are simple JavaScript objects that express an intent to mutate the state object
- Then you write a special function called a reducer to decide how every action transforms the entire application's state
- Reducers are just pure functions that take the previous state and an action, and return the next state

---

# Redux Keywords

- **Store:** where all your application state lives
- **Actions:** how you describe a change to be made to state
- **Reducers:** the pure functions that update the store with the new state object

???

Redux, in a nutshell:

- The whole state of your app is stored in an object tree inside a single store
- The only way to change the state tree is to emit an action, an object describing what happened
- To specify how the actions transform the state tree, you write pure reducers

---

class: center, middle

.inline-images[
![Redux diagram](/public/img/slide-assets/redux.png)
]

.footnote.right[Image source: [Scotch.io](https://scotch.io/bar-talk/getting-started-with-redux-an-intro)]

---

class: center, middle

Before we start, **[install Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)**:

.inline-images[
![Redux Devtools](/public/img/slide-assets/reduxdevtools.gif)
]

---

# Premise & Set-up

Before we learn how to integrate Redux with React, we're going learn the basics of Redux by improving fruit inventory state management in our grocery store from yesterday.

We'll be rebuilding our grocery store from scratch with Redux, so **begin by creating a new directory** for this lesson with an `src/index.js` file in it, create an empty `dist` directory, and then `npm init` in the root directory.

---

# Webpack Installation

Install Webpack and its dependencies in your project:

```bash
npm install --save-dev babel-loader babel-core babel-preset-stage-0 webpack webpack-dev-server html-webpack-plugin
```

Add scripts to your `package.json`:

```js
// ...
"scripts": {
  "start": "webpack && webpack-dev-server",
  "build": "webpack -p",
},
// ...
```

Also include a `webpack.config.js` file to your project root director too and add the provided snippet.

???

Give the students this snippet for their Webpack config:

```js
const webpack = require('webpack');
const resolve = require('path').resolve;
const src = resolve(__dirname, 'src');
const dist = resolve(__dirname, 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },

  output: {
    path: dist,
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [src],
        exclude: /node_modules/,
        query: {
          presets: ['stage-0'],
        },
      },
    ],
  },

  plugins: [new HtmlWebpackPlugin()],
};
```

---

# Redux Installation

Install Redux:

```bash
npm install --save redux
npm install --save-dev redux-devtools-extension
```

Now start your Webpack dev server:

```
npm start
```

---

class: center, middle

.large[
What kind of actions do you think our store will need?
]

???

- one to count fruit
- one to stock up
- one to explain

---

# Redux Set-up

We will co-locate our related Redux actions, action creators, and reducers in appropriately named files.

Create a new directory in `src` called `redux`, and another directory called `modules` within it, and a `fruit.js` module file within that:

```bash
mkdir -p src/redux/modules
touch src/redux/modules/fruit.js
```

???

- Note that we will mostly adhere to the Ducks pattern to structure our Redux code: https://github.com/erikras/ducks-modular-redux

---

# Our First Action

Remember that actions plain JS objects that contain payloads of information that send data from your application to your store. Action objects must have a `type` property to indicate the type of action being performed.

As a best practice, we define string constants to use as the values for our action object `type` property.

So in `fruit.js` add:

```js
const GET_FRUIT_COUNT = 'GET_FRUIT_COUNT';
```

---

# The Action Creator

Now we need an **action creator** to actually create the corresponding action object in `fruit.js`:

```js
export const getFruitCount = () => ({
  type: GET_FRUIT_COUNT,
});
```

---

# Exercise 1

Now create action string constants for stocking up fruit and explaining the current fruit stock.

Note that the action creator for stocking up fruit will need to be set-up with a parameter of `count` so we can pass some information along in the action's payload about how much to update the inventory in our grocery store state.

You can set the value of `count` on a `payload` property in this action object.

---

# A Bit More Set-up...

Before we create our reducer, we'll need to add our initial fruit inventory data to our app, and abstract our prototype methods into helper functions.

Create `inventory.js` and add your fruit data as a named export, then add `helpers.js` and add `countFruit`, `stockUp`, and `explain` functions to this file as named exports (based on the work you did yesterday).

What modifications will you need to make to these functions to make them into more generic helpers?

---

# What's in a Reducer?

Actions describe the fact that something happened, but don't specify how the application's state changes in response&mdash;that's where reducers come in. The basic function signature of a reducer is:

```js
export default (state = {}, action) => {
  switch (action.type) {
    case SOME_ACTION_CONSTANT: {
      return {
        ...state, // not mutating state!
        someData: action.payload,
      };
    }
    default:
      return state;
  }
};
```

???

Remember:

- Use pure functions (don't mutate anything!)
- Generally built using `switch`
- Default to returning the existing state
- Set initial state with a default parameter
- It's a good idea to think about what shape you want your state object to be before writing any code

Things you should never do inside a reducer:

- Mutate its arguments
- Perform side effects like API calls and routing transitions
- Call non-pure functions, e.g. Date.now() or Math.random()

---

class: center, middle

.large[
Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.
]

(From the [Redux docs](http://redux.js.org/docs/basics/Reducers.html))

---

# The Reducer

```js
import { fruit } from '../../inventory';
import { countFruit, stockUp, explain } from '../../helpers';

// action, action creators here...

export default (state = {
  inventory: fruit,
  originalList: {},
  currentList: {},
  counted: false
}, action) => {
  switch (action.type) {
    case GET_FRUIT_COUNT: {
      const originalList = ???; // how to define this?
      const currentList = ???; // and this?
      return { ...state, originalList, currentList, counted: true };
    }
    // check for other types here...
    default:
      return state;
    }
};
```

???

- Work through this with the students!

---

# Exercise 2

Now that you've take care of the `GET_FRUIT_COUNT` action in the produce reducer, finish off building out the cases for the `UPDATE_FRUIT_STOCK` and `EXPLAIN_FRUIT_STOCK` action types.

How will you ensure that the original and current lists of fruit stocks are added to the store even if the user doesn't fire off the `GET_FRUIT_COUNT` action first?

---

# Combining Reducers

Before we create our store, we'll use the `combineReducers` function to combine all of our module reducers into one, even through we only have one right now!

Add this to `src/redux/reducers.js`:

```js
import { combineReducers } from 'redux';
import produceReducer from './modules/produce';

export default combineReducers({
  produce: produceReducer,
});
```

---

# Creating the Store

Create a `src/redux/store.js` file now, the import redux into the file:

```js
import { createStore } from 'redux';
import rootReducer from './reducers';

export default createStore(rootReducer);
```

???

- Remember that the store is where we ultimately keep all of our application state (it's the single source of state truth)
- Redux provides a `dispatch` method for updating the state in the store
- Redux also provides a `getState` method for getting state info from the store
- It allows us to register change listeners to update our views based on state using `subscribe`

---

# Exercise 3

Now that you have your actions, reducers, and store created, you can actually dispatch actions to your store and get state from your store.

Head over to `index.js` in the root of your app, import the store, import the action creator functions, then try dispatching the three actions and get something from the store:

```js
store.dispatch(getFruitCount());
store.dispatch(updateFruitStock(10));
store.dispatch(explainFruitStock());
// try console-logging something from the store with store.getState()
```

???

- When we want to retrieve data, we do not get it directly from the store
- Instead, we get a snapshot of the data in the store at any point in time using `store.getState()` which gives us the “state” of the application as on the time at which we called the getState method

---

# What Just Happened?

The data lifecycle in any Redux app follows these 4 steps:

1.  You called `store.dispatch(action)`
2.  The Redux store called the reducer function you gave it
3.  The root reducer combined the output of all reducers into a single state tree
4.  The Redux store saved the complete state tree returned by the root reducer

---

# Subscribe to Changes

To see each consecutive change made to the store, add the following code above your dispatches:

```js
let unsubscribe = store.subscribe(() => console.log(store.getState()));
```

Then add this after the dispatches:

```js
unsubscribe();
```

Check out your console once your app refreshes.

---

# Exercise 4

Console logs are fine, but there's a better way! Integrate your store with the [Redux Dev Tools extension now](https://github.com/zalmoxisus/redux-devtools-extension).

To do that you'll need to import `devToolsEnhancer` from `redux-devtools-extension` into `store.js` and then pass `devToolsEnhancer()` as a second argument to `createStore`.

You'll know it's working when you can see the contents of your store in your browser's Redux dev tools.

---

# What We've Learned

- What Redux is for and what problem it solves
- What actions, reducers, and stores are
- How to set-up Redux in a simple app

---

template: inverse

# Questions?

{% endhighlight %}
