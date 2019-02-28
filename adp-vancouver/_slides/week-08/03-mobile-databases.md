---
layout: slidedeck
title: Mobile Databases Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Mobile Databases

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1.  Whats and whys of embedded databases
2.  Introduction to AsyncStorage
3.  Use AsyncStorage to perform CRUD of "Faves"

---

template: inverse

# Mobile Databases

---

# What's Out There

**SQLite:**

- Popular (fast!) cross-platform embedded database
- Written in C (and must write queries, unless you use a library to abstract this away)

**Core Data:**

- An ORM abstraction on top of SQLite (with a learning curve)
- iOS/Mac Only

---

class: center, middle

.large[
Do you need actually need an embedded database in your mobile app?
]

---

# AsyncStorage

If you just need a basic key-value store for a small amount of data, the `AsyncStorage` [(ref)](https://facebook.github.io/react-native/docs/asyncstorage.html) library built into React Native may do the trick.

Think of `AsyncStorage` as being the React Native equivalent of a web brower's local storage API.

Note that data stored in `AsyncStorage` won't be encrypted.

---

# Use Cases

- Personal preferences and other user-specific data
- Offline data access
- Some kinds of local caching

---

# Exercise 1

If you haven't already, create a `config/model.js` file in your project.

In this file, import the `AsyncStorage` object from `react-native`;

---

template: inverse

# Writing, Retrieving, and Displaying Data

---

# Writing

AsyncStorage con only store `String` values. That is ok, because we can use JavaScript's `JSON.stringify` & `JSON.parse` to encode and decode JS objects when we want to store (and retrieve them).

```js
AsyncStorage.setItem('key', JSON.stringify({ value: 'Hey!' }));
```

---

# Creating and Updating

`AsyncStorage` is a **Key-Value Store**. This means when we store values, we must associate values with another value, called the _key_.
To store a value, you'll use the `setItem` method.

```js
AsyncStorage.setItem('key', JSON.stringify({ value: 'Hey!' }));
```

To lookup this value you must use the `key`.

```js
AsyncStorage.getItem('key'); // returns the string "{ value: 'Hey!'}"
```

**Be careful:** If you store something using a `key` that you previously used, it will overwrite the value.

---

# Promises

`AsyncStorage` methods are `async` and return a `Promise`. So, to bind the value in storage to a variable when querying, you'll need to `await` the result.

```js
await AsyncStorage.setItem('key', JSON.stringify({ value: 'Hey!' }));

const result = await AsyncStorage.getItem('key');

console.log(JSON.parse(result).value); // logs 'Hey!'
```

**Remember**, `AsyncStorage` can only store strings. If you want to store an `Object`, you'll need to `stringify`/`parse` things!

_Why is `AsyncStorage` async?_

---

# Deleting

To Remove an item from `AsyncStorage`,
you need to know the `key`.

```js
AsyncStorage.removeItem('key');
```

_What does this method return?_

---

# Querying

The final piece of the CRUD puzzle is reading data from the database.
We've already seen how to retrieve a _single value_.

Here is the code for retrievng _all_ of the values in your `AsyncStorage`.

```js
const keys = await AsyncStorage.getAllKeys();
const values = await AsyncStorage.multiGet(keys);
```

---

# Exercise 2

Inside your `config/models.js` file, write three functions (which you will export) to perform CRUD operations in related "faves" action creators later:

1.  A function that **adds a Fave object** to the database
2.  A function that **removes a Fave object** from the database
3.  A function that **queries** the database for **all Fave objects**

All of these methods should return the `AsyncStorage` Promise, so you can `await` the result in your components.

_Where (and how) will you use these functions?_

---

template: inverse

# Using Context to Manage Faves State

---

# Faves Context

We'll need to use React's context API to keep our app UI state in sync with our Realm database:

```bash
|-- context/
|   |-- FavesContext
|   |   |-- FavesContext.js
|   |   |-- index.js
```

In `index.js` set up your exports for `FavesContext`:

```js
import FavesContext from './FavesContext';
import { FavesProvider } from './FavesContext';

export { FavesProvider };
export default FavesContext;
```

_We'll create `FavesContext` and `FavesProvider` next..._

---

# Create the Context

Add this code to `FavesProvider.js`:

```js
import React, { Component } from 'react';

// import the Realm helpers you just created here

const FavesContext = React.createContext();

class FavesProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      faveIds: [],
    };
  }

  // more code will go here!
}

export { FavesProvider };
export default FavesContext;
```

---

# Render Provider

We'll need to render the provider in this class too:

```js
// in FavesProvider.js

render() {
  return (
    <FavesContext.Provider value={% raw %}{{ ...this.state }}{% endraw %}>
      {this.props.children}
    </FavesContext.Provider>
  );
}
```

---

# Exercise 3

Our `FavesProvider` component doesn't do much for us yet except give us access to an empty array of `faveIds`.

Write a `getFavedSessionIds` method for this class that uses one of your Realm helpers to get the current faves from the database, and then subsequently update the state of the `FavesProvider` with an array of the faved session IDs.

Call this method in `componentDidMount` so that we fetch this data initially as the component mounts.

Lastly, wrap your app in your `FavesProvider` in `App.js`.

---

# Exercise 4

Add `addFaveSession` and `removeFaveSession` methods to the `FavesProvider` component now. These methods should each have a `sessionId` parameter.

Pass these methods along in the `value` prop of `FavesContext.Provider` (along with the `faveIds`).

You will now be able to update your context where you use a `FavesContext.Consumer` component in your app.

---

# What We've Learned

- What an embedded database is in the context of a mobile app, and when its appropriate to use one
- How to add AsyncStorage to a React Native app
- How to perform basic CRUD operations using syncStorage in React Native
- How to manage UI state in relation to AsyncStorage

---

template: inverse

# Questions?

{% endhighlight %}