---
layout: slidedeck
title: React & Redux Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# React & Redux

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
class: middle
layout: false

## Exercise 1

**Redux** and **React** serve different roles. Discuss with a partner the role of each in terms of handling:
- data
- view
- logic
- events

---

# Redux as Global

Currently, we are using "Redux" as a great big global container.

Redux holds our:
  - **data**
  - **events** that trigger **logic** and change **data**

Any component can access anything from anywhere by connecting to the `store`.

- Is a "global" container a good design? Why or why not?

---

# React Redux

*React-Redux* allows us to connect up components and give them access to only what they need.

---

# Presentational vs. Container

Components can be categorized as either:

- **Presentational**: *dumb* components
- **Container**: *smart* components

---

## Exercise 2

With a partner, fill out a table to distinguish between **Presentational** & **Container** components.

| Dumb             | Smart                |
| Presentational   | Container            |
| -----------------|----------------------|
| ...              | ...                  |
| ...              | ...                  |

---

## Exercise 3

Based on the following tree structure, discuss with a partner which components should be of each type. Justify your reasons.

```
- REDitApp
 |- Weeks
    |- Week
        |- Header
        |- Links
 |- Posts
    |- Post
        |- Vote Button
        |- Categories
 |- NewPost
    |- Form
        |- InputOne
        |- InputTwo
        |- Submit
```


---


## Exercise 4

Convert your "Worst Pokemon" app to use React. 


---

# Provider

Use the [`<Provider>`](https://github.com/reactjs/react-redux/blob/master/docs/api.md#provider-store) tag from "react-redux" to connect the redux store to the app.

- What does `Provider` do?

---

# Provider

`Provider` acts as a wrapper to connect our `store` (data) to our React components.

Any "connected" component can hookup to this store. 

---

# Connect

Use [`connect`](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options) to create ("smart") container components.

- What does `connect` do?

---

# Connect

`connect` provides a component with:

- state
- actions

These are passed into the component as "props".


---

# mapStateToProps

Write [`mapStateToProps`](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options) to connect a "container" component using "react-redux" & `connect`.

---

# mapStateToProps 

`this.props.votes` = `store.getState().votes`

```js
class Component extends React.Component {
  render() {
    return (
      <button>
        {this.props.votes}
      </button>
    );
  }
}

const mapStateToProps = state => {
  votes: state.votes
};

connect(mapStateToProps)(Component);
```

---

# mapDispatchToProps

Write [`mapDispatchToProps`](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options) to connect a component actions to redux.

Checkout the [shorthand notation](https://egghead.io/lessons/javascript-redux-using-mapdispatchtoprops-shorthand-notation).

---

# mapDispatchToProps

`this.props.someAction` = `store.dispatch(someAction())`

```js
class Component extends React.Component {
  render() {
    return (
      <button onClick={this.props.someAction} />
        {this.props.votes}
      </button>
    );
  }
}

const mapStateToProps = state => {
  votes: state.votes
};
const mapDispatchToProps = { someAction };

connect(mapStateToProps, mapDispatchToProps)(Component);
```

---


## Exercises 5 & 6

Use `<Provider>`, `connect`, `mapStateToProps` & `mapDispatchToProps` to connect the "container" components of your app. 


---

## Exercise 7

Now that you've had some practice, let's return to our component architecture.

Read [React with Redux](http://redux.js.org/docs/basics/UsageWithReact.html).

In a group, write some guidelines for connecting React & Redux.

How can we tell which components should be "presentational" or "container" components?

---

# React Redux Router

Why might we want to use [react-redux-router](https://github.com/reactjs/react-router-redux)?

---

# React Redux Router

Why might we want to use [react-redux-router](https://github.com/reactjs/react-router-redux)?

- reloading user state
- reducer logic can get access to router state
- keeps everything in one accessible place

---

# Reselect

Why might you want to use [reselect](https://github.com/reactjs/reselect)?

---

# Reselect

Why might you want to use [reselect](https://github.com/reactjs/reselect)?

- mapping state to props can sometimes lead to long or repeated paths

```js
const mapStateToProps = state => {
  name: state.user.profile.name,
  activeUsers: state.users.filter(user => user.profile.name && user.isActive)
};
```

---

# Selectors

When these `mapStateToProps` paths get long we can create a "selector".

/src/selectors.js

```js
export const nameSelector = state => state.user.profile.name;

export const activeUsersSelector = state => state.users.filter(user => user.profile.name && user.isActive);
```

---

# Using Selectors

Import and call selectors with the state.

/src/someFile.js

```js
import { nameSelector, activeUsersSelector } from '../selectors';

const mapStateToProps = state => {
  name: nameSelector(state),
  activeUsers: activeUsersSelector(state),
};
```

---

# Reselect

To compose selectors together, we can use *reselect*.

```js
import { createSelector } from 'reselect';

export const nameSelector = state => state.user.profile.name;

export const activeUsersSelector = state => state.users.filter(user => user.profile.name && user.isActive);

export const activeUserNamesSelector = createSelector(
  activeUsers,
  name
);
```

---

## Challenge

Create selectors for your `mapStateToProps` calls.

---

# Review

1. Presentational & Container Components
2. **react-redux**
3. `<Provider />`
4. `connect`
5. `mapStateToProps`
6. `mapDispatchToProps`
7. selectors & **reselect**

{% endhighlight %}
