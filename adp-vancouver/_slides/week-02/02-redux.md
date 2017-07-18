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

1. Distinguish between MVC and Flux patterns.
1. Identify the benefits of using Flux or Redux to model state.
1. Identify the roles of Redux store, reducers, actions, action-creators and action-types.
1. Setup a basic project using Redux in raw JavaScript.
1. Create structured actions following [Flux Standard Actions](https://github.com/acdlite/flux-standard-action).
1. Explain the results of calling `dispatch(action)` and `getState()`.

---
class: center, middle

.large[
   A well-designed application is...
]

---

class: middle

## What are these?

- data
- view
- logic
- event

---

class: center, middle

.large[
   Which application design patterns are you familiar with?
]

---
template: inverse
class: center, middle

# MVC
model - view - controller

---
class: middle

# MVC

- Old pattern (circa 1970)
- Popular in server-rendered apps (Rails, Django, etc)
- Separation of Concerns
- Dumb views = Less bugs
- Losing popularity in SPAs

---
class: center, middle

# MVC

.inline-images[
  ![MVC Diagram](/public/img/slide-assets/redux_MVC.png)
]

.footnote[But is it really that simple?]

---
class: center, middle

## A "Simple" Use Case

.inline-images[
  ![MVC Diagram](/public/img/slide-assets/redux_MVC_SPA_mock.png)
]

---
class: center, middle

.large[
  How would you model this as a MVC SPA?
]

Remember: JS passes objects by reference

---
class: center, middle

## MVC SPA

.inline-images[
  ![MVC Diagram](/public/img/slide-assets/redux_MVC_SPA.png)
]

---

class: center, middle

.large[
  What happens if a save fails?
]

---
class: center, middle

## MVC SPA - Failsafe

.inline-images[
  ![MVC Diagram](/public/img/slide-assets/redux_MVC_SPA_failsafe.png)
]

---
class: center, middle

.large[
  What if another controller changes the account object?
]

---
class: center, middle

## MVC SPA - Failsafe + Watchers

.inline-images[
  ![MVC Diagram](/public/img/slide-assets/redux_MVC_SPA_failsafe_watchers.png)
]

---
class: center, middle

.large[
  That got confusing.
]

---
class: middle

# What went wrong?

- Two-way binding + pass-by-reference
- Sharing data between unrelated components
- Avoiding stale local state

__Imagine implementing MVC on a SPA like Facebook!__

---

class: center, middle

.large[
  How can we fix these issues?
]

---
class: center, middle

## Revisiting a "Simple" Use Case

.inline-images[
  ![MVC Diagram](/public/img/slide-assets/redux_MVC_SPA_mock.png)
]

---

class: center, middle

.large[
  How would you model this in React?
]

---

class: center, middle

## For fun, let's add a feature

When a user clicks the profile image, an upload dialog appears that allows them to update their photo.

---

class: middle

# What went wrong?

- Passing properties down the tree
- Handling local state within a component
- Passing callbacks down the tree
- Pass-by-reference!

---

class: center, middle

.large[
  How can we fix _these_ issues?
]

---
class: middle

# What if...

- Data could only flow in one direction?
- All app state was stored in a single immutable object?
- Actions were decoupled from component hierarchy?

---

class: center, middle

.large[
  How would that change our design?
]

---
template: inverse
class: middle

# Redux

A _predictable state container_ that uses a _one-way_ data flow

---
class: middle

## Three Principles of Redux
- Single source of truth
- State is read-only
- Changes are made with pure functions

---

## Todo Demo

Clone and install the Todo demo.

Install dependencies at both the root and example level.

```shell
git clone https://github.com/gaearon/redux-devtools
cd redux-devtools
npm install
cd examples/todomvc
npm install
npm start
```

---

class: center, middles
# [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

.inline-images[
  ![Redux Devtools](/public/img/slide-assets/reduxdevtools.gif)
]

---

## Todo Demo

Consider the different **roles** in the app.

- store
- action
- reducer
- view

---

## Worst Pokemon App
Vote up your choice of the worst Pokemon from a list.

- Which actions will we need?
- What will the state look like?
- How would the view be structured?

---

![Worst Pokemon App](../../public/img/slide-assets/worstPokemonApp.png)

---

# Worst Pokemon: Setup

Use "create-react-app" to create a new project.

```shell
npm install -g create-react-app

create-react-app redux-app
cd redux-app
npm install
```

Follow the instructions [here](https://github.com/redacademy/adp-eslint-config) to set up ESLint.

Make sure you have ESLint running in your code editor.

---

# Redux App: Setup

Install Redux

```shell
npm install --save redux
```

Set up Git

```shell
git init
git add --all 
git commit -am "Initial Commit"
```

Start server and open in browser

```
npm start
```

---
template: inverse

# Stores

---

## Stores

- House the app state - single source of truth
- Provide a `.dispatch` method for updating the state
- Provide a `.getState` method for updating the state
- Allows us to register change listeners to update our views based on state (`.subscribe`)

---

## Creating a store

Create a new directory in `src` called `stores`, and create a file called `createStore.js` within it.

```bash
mkdir src/store
touch src/store/createStore.js
```

Import redux into the file:

```js
import { createStore } from 'redux';
```
---
class: center, middle

# Exercise:

Create a store and import it into the App.

---

## Redux DevTools

Install the helper package:

```shell
npm install --save redux-devtools-extension
```

Import into `createStore.js`, and add as the third argument to `createStore()`.

```js
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    state => state,
    {},
    composeWithDevTools(),
);
```
---
template: inverse

# Actions & Action Creators

---
class: middle

## Actions

- Payloads of information that send data from your application to your store
- The only source of information for the store. 
- Sent using `store.dispatch()`
- POJOs

---
class: middle

## Action Creators

Functions that create actions!

---
class: center, middle

# Exercise:

Create an action and action creator.

---
template: inverse 

# Reducers

---
class: middle

## Reducers

Actions describe the fact that something happened, but don't specify how the application's state changes in response. 

This is the job of reducers.

---

class: middle

## Reducers

- Pure Functions (Don't mutate anything!)
- Generally built using `switch`
- Default to returning the existing state

---
class: center, middle

# Exercise:

Create a reducer.

---
class: middle 

# Simple Unit Testing 

With [Expect](https://github.com/mjackson/expect) and [Deep Freeze](https://github.com/substack/deep-freeze)

```shell
npm install --save expect
npm install --save deep-freeze
```

```js
import expect from 'expect';
import deepFreeze from 'deep-freeze';
```

---

class: center, middle

# Exercise:

Write unit tests.

---

class: center, middle

# Exercise:

Refactor the reducer into its own file, import into `createStore`, combine reducers.

---

# Review

- Good application design is ______________.
- MVC vs Redux
- What is the role of each in Redux:
  - action creator
  - reducer
  - store
  - view




{% endhighlight %}
