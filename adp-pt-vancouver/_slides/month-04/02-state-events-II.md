---
layout: slidedeck
title: React State and Events II Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# React State and Events

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1.  Work with component refs
2.  Use React's "lifecycle methods"
3.  Use Apollo Client with React

---

# Today's To-Do To-Dos

- Add a function for marking a to-do as complete
- Add a function to clear all of the completed to-dos from the list at once

---

# Exercise 5

Now add a `hasCompleted` method to the `App` component to conditionally display the "Clear completed" button.

**Hint:** You're going to need to use `.filter()` again to determine if there are any to-do items in the `todos` array that have `complete` set to `true`, and conditionally display the button based on the length of that filtered array.

How can you use this new method to conditionally render the `ClearButton` component in the `App` component now?

**Note:** The `hasCompleted` method isn't an event handler, so it doesn't need to be bound in the constructor (or elsewhere).

---

# Exercise 6

Now add a `removeCompleted` method to the `App` component to make your "Clear completed" button work.

**Hint** You're going to need to use `.filter()` to keep the todos that are not completed and update your state. Don't forget to pass your method as a prop to your child component.

---

template: inverse

# Working with Refs

---

# Next Up...

We still need to add a very important part of our to-do app&mdash;the input that will allow us to add new to-dos!

Start by adding this mark-up in-between the `<h1>` and `<ul>` rendered in your `App` component:

```js
<div className="add-todo">
  <form name="addTodo" onSubmit={this.addToDo}>
    <input type="text" ref={this.toDoInput} />
    <span>(press enter to add)</span>
  </form>
</div>
```

Look at the mark-up for this form...what new event handler will we need to add? What other strange thing do you notice?

---

# Refs to Components

React gives us a special attribute that can be attached to any component called `ref`. Before we can assign `ref` to a component, we must create the `ref` in its `constructor`:

```js
constructor() {
    // ...other code
    this.toDoInput = React.createRef();
  }
```

We can then access the current value of the `ref` as `this.toDoInput.current`.

---

# Using a Ref

Add this method to your `App`:

```js
addToDo = event => {
  event.preventDefault();
  let toDoInput = this.toDoInput.current;

  if (toDoInput.value) {
    const id = this.state.lastId + 1; // update id
    const newTodos = [
      ...this.state.todos,
      { id, title: toDoInput.value, complete: false },
    ];

    this.setState({
      todos: newTodos,
      lastId: id,
    });

    toDoInput.value = '';
  }
};
```

---

# Using a Ref

**What the `ref` gives us:**

Adding the `ref` to the input in our `App` component allow us to reference the value entered into that input inside of our event handler via `this.toDoInput.value`, and use the value to update the component's state.

Without the `ref` we would not be able to get this value because JSX doesn't actually return a component instance (just a lightweight representation of what the mounted component should look like).

???

**When to Use Refs**

There are a few good use cases for refs:

- Managing focus, text selection, or media playback.
- Triggering imperative animations.
- Integrating with third-party DOM libraries.

Avoid using refs for anything that can be done declaratively.

---

template: inverse

# Component Lifecycle Methods

---

class: center, middle

### Component Lifecycle?

We have already seen how we can set the initial state of a component using a component's class `constructor`, and also how to direct React to display a component using the required `render` method.

React gives us more opportunities to run code that will affect a component as it is **mounted**, **updated**, and **unmounted**.

---

# Lifecycle Methods

**[Component Lifecycle Methods Cheatsheet](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)**

- `constructor` (mounting)
- `render` (mounting/updating)
- `componentDidMount` (mounting)
- `shouldComponentUpdate` (updating)
- `getSnapshotBeforeUpdate` (updating)
- `componentDidUpdate` (updating)
- `componentWillUnmount` (unmounting)

---

# Exercise 7

Last but not least, we want to improve the UX of our to-do app and automatically focus the `<input>` element when the app is rendered.

To do that, we'll need to use one of React's lifecycle methods. It's up to you to pick the right one and implement the code within it to focus the `<input>`.

---

# State Cheatsheet

- Initial state is set in the `constructor` with `this.state` (whereas props are passed from the outside only)
- You inform a component of a state change by calling `this.setState()` (and you **can't** call it within `render()`)
- When you update state in a component, it merges the new data with the data already contained in `this.state`
- Keep state as simple as possible, and don't put other React components or props in the state object
- Keep as many of your components as possible stateless

---

template: inverse

# Using Apollo Client with Boomtown

---

# Hook-up Apollo

All required Apollo packages were added to your project with `npm install`, you just need to use them now :)

The first stop will be `client/src/apollo/index.js` to make our client application aware of our GraphQL API by defining a `uri` for the API, and adding the `httpLink` to the newly instantiated Apollo client.

???

Apollo client will allow us to shift from imperative to declarative data fetching in the client. Data fetching logic be gone!

Imperative data fetching:

1.  construct and send the HTTP request
2.  receive and parse data response
3.  store data locally
4.  display the inforamiton in the UI

Declarative data fetching:

1.  describe its data requirements
2.  display the information in the UI

(All of the lower level networking tasks should be abstracted away by Apollo Client.)

---

# Hook-up Apollo

Next, head to `client/src/index.js` and import the Apollo client.

Now wrap you pages in an `<ApolloProvider />` component and pass it `client` as the `client` prop value so they will have access to data exposed by your GraphQL API.

_Congrats! Your React app is now aware of your GraphQL API!_

---

# The Query Component

Take a look at the [**docs on the Query component**](https://www.apollographql.com/docs/react/essentials/queries.html#basic). Look specifically at the provided code snippet.

Based on what you know about GraphQL and React so far, with a neighbour, try to explain line-by-line the code that you see there.

What looks familiar? What looks new?

---

# Write a Query

Before we can use `<Query>` we'll need to write a query to pass it as prop.

In `client/src/apollo/queries.js` we will:

- Create a query to get `tags`

- Back in our `HomeContainer.js` we will use `<Query>` to fetch all the `tags` from our `GraphQL` server and log them in console.

**Note:** We do not need to fetch `tags` in our HomeContainer. This is just an example.

---

class: center, middle

.large[
**New Pattern Alert!**<br />
Container Components
]

---

# Why the Diff?

In React, it's very easy to mix code that controls the behaviour of our app with code that renders the view.

As a result, our code will become more **tightly coupled** than it should be. This makes our components less modular and harder to reuse.

To avoid this, we will organize our project into **container components** (how things work) and **presentational components** (how things look).

---

# Cheatsheet

_Container components:_

- Create/Update `state` and implement lifecycle methods
- Should be responsible for **fetching data**
- Should **define event handlers** and pass them as `props`

_Presentational components:_

- Sould receive `props`
- Should **never change `props` data**
- Should use `props` and export `JSX` (view)

---

# What We've Learned

- How to set an component's initial state in a `constructor`
- How to alter state in response to some event
- How to use the `ref` attribute on a component
- What React's lifecycle methods can do
- How to add Apollo Client to a React app and fetch data from a GraphQL API

---

template: inverse

# Questions?

{% endhighlight %}
