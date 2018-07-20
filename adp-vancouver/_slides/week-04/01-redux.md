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

How did state management and data flow work in the to-do app last week? Did this feel like the best solution?

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
- Actions that respond to events were decoupled from component hierarchy?

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

Before we learn how to integrate Redux with React, we're going learn the basics of Redux by creating a simple counter.

There will be a button to increment the count, a button to decrement the count, and a string of text displaying the current count.

**Begin by creating a new directory** for this lesson with empty `dist/index.html` and `src/main.js` files, and then `npm init` in the root directory.

---

# Webpack Installation

Install Webpack and its dependencies in your project:

```bash
npm install --save-dev webpack webpack-dev-server webpack-cli
```

Add scripts to your `package.json`:

```js
// ...
"scripts": {
    "dev": "webpack-dev-server --mode development ./src/main.js --output ./dist/bundle.js --content-base dist/ --hot"
  },
// ...
```

---

# Add HTML

Add this HTML to your `dist/index.html` file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Redux Exercise</title>
</head>
<body>
  <button id="increment">Increment</button>
  <button id="decrement">Decrement</button>
  <p>The count is now: <span id="count"></span></p>
  <script src="bundle.js"></script>
</body>
</html>
```

---

# Redux Installation

Install Redux:

```bash
npm install --save redux
npm install --save-dev redux-devtools-extension
```

Now start a local server in your exercise directory:

```
npm run dev
```

---

class: center, middle

.large[
What kind of actions do you think our counter will need?
]

???

- one to increase the count by 1
- one to decrease the count by 1

---

# Redux Set-up

We will co-locate our related Redux actions, action creators, and reducers in appropriately named files.

Create a new directory called `redux`, and another directory called `modules` within it, and a `counter.js` module file within that:

```bash
mkdir -p src/redux/modules
touch src/redux/modules/counter.js
```

???

- Note that we will mostly adhere to the Ducks pattern to structure our Redux code: https://github.com/erikras/ducks-modular-redux

---

# Our First Action

Remember that actions plain JS objects that contain payloads of information that send data from your application to your store. Action objects must have a `type` property to indicate the type of action being performed.

As a best practice, we define string constants to use as the values for our action object `type` property.

So in `counter.js` add:

```js
const INCREMENT_COUNT = "INCREMENT_COUNT";
```

---

# The Action Creator

Now we need an **action creator** to actually create the corresponding action object in `counter.js`:

```js
export const incrementCount = () => ({
  type: INCREMENT_COUNT
});
```

---

# Exercise 1

Now create an action for decrementing the count, as well as its corresponding action creator.

---

# What's in a Reducer?

Actions describe the fact that something happened, but don't specify how the application's state changes in response&mdash;**that's where reducers come in**. The basic function signature of a reducer is:

```js
export default (state = {}, action) => {
  switch (action.type) {
    case SOME_ACTION_CONSTANT: {
      return {
        ...state, // not mutating state!
        someData: "new value"
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
// action, action creators here...

export default (
  state = {
    count: 0
  },
  action
) => {
  switch (action.type) {
    case INCREMENT_COUNT: {
      // When this action fires off, how do we take what's currently
      // in state and combine it with the count+1 in a new object?
    }
    // check for other types here as needed...
    default:
      return state;
  }
};
```

???

- Work through this with the students!

---

# Exercise 2

Now write the case for `DECREMENT_COUNT` in your reducer.

---

# Combining Reducers

Before we create our store, we'll use the `combineReducers` function to combine all of our module reducers into one, even through we only have one right now!

Add this to `src/redux/reducers.js`:

```js
import { combineReducers } from "redux";
import counterReducer from "./modules/counter";

export default combineReducers({
  counter: counterReducer
});
```

---

# Creating the Store

Create a `src/redux/store.js` file now, the import redux into the file with the combined reducer:

```js
import { createStore } from "redux";
import rootReducer from "./reducers";

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

Head over to `src/main.js` in the root of your app, import the `store`, import the action creator functions, then try dispatching the actions and get something from the store:

```js
store.dispatch(incrementCount());
store.dispatch(decrementCount());
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

# Redux Dev Tools

Console-logging is fine, but dev tools are better!

As per the **[Redux Dev Tools usage instructions](https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store)**, add the dev tools to your counter app by adding an additional argument to `createStore`:

```js
export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

_What do you see in the Redux tab of your dev tools now?_

---

# Exercise 4

Let's add information from the store to the UI. Add the following code to `src/main.js` and fill in the blanks:

```js
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const count = document.getElementById("count");

// How will we initially populate this span with content?
count.textContent = null;

incrementButton.addEventListener("click", () => {
  // Dispatch an action
  // Update the count span text
});

decrementButton.addEventListener("click", () => {
  // Dispatch an action
  // Update the count span text
});
```

---

template: inverse

# Bonus Round:<br />Working with Inputs

---

# Set-up

Let's see how we can capture the state of an input's value in our Redux store, and use that value to update another part of the app's UI.

Add the following HTML to `dist/index.html`:

```html
<label for="name">What are you counting</label>
<input type="text" id="name" placeholder="Enter the name..." />
<p>I am counting: <span id="counted-name"></span></p>
```

---

# New Module

Create a new module in `src/redux/modules` called `name.js` and add an `UPDATE_COUNT_NAME` action to it.

Create the corresponding action creator too.

**Challenge:** We will need to send the value of the input into this action creator so it can be used to update the app state in the reducer. How can we do this?

---

# Actions with Parameters

Action creators are just functions that return objects, so we can set them up with parameters and use the values of the arguments passed in as a "payload" to send with the action type to the reducer:

```js
export const someActionCreator = value => ({
  type: SOME_ACTION_CONSTANT,
  payload: value
});
```

_Knowing this, what will your `updateCounterName` action creator look like now?_

---

# Payloads in Reducers

It's easy to grab the payload from the action object to update your store in the reducer:

```js
export default (state = {}, action) => {
  switch (action.type) {
    case SOME_ACTION_CONSTANT: {
      return { ...state, someData: action.payload };
    }
    default:
      return state;
  }
};
```

---

# Exercise 5

Time to finish the counter app! You will need to:

1.  Add your name reducer to `src/redux/modules/name.js`
2.  Combine that reducer in `src/redux/reducers.js`
3.  Update the UI by adding/completing this in `src/main.js`:

```js
// Import the appropriate action creator

const nameInput = document.getElementById("name");
const countedName = document.getElementById("counted-name");

nameInput.addEventListener("input", event => {
  // Dispatch an action (with the input value as an argument)
  // Update the name span text
});
```

---

# What We've Learned

- What Redux is for and what problem it solves
- What actions, reducers, and stores are
- How to set-up Redux in a simple app

---

template: inverse

# Questions?

{% endhighlight %}
