---
layout: slidedeck
title: Introducing React II Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Introducing React II

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1.  Working with components
2.  Adding props to components

---

template: inverse

# Adding Props

---

class: center, middle

.large[
**Problem:**<br />We have a reference error in the `<ToDo />` component.
]

---

class: center, middle

.large[
**Solution:**<br />Fix it with props!
]

---

# Props

- **Arguments passed to React components** are called props
- Props allow us to provide **configuration values** for a given component
- They look a lot like plain ol' HTML attributes
- **ES2015 Components:** Arguments passed as props can be accessed using the `this.props` object
- **Functional Stateless Components:** `props` should be passed in as an argument to the arrow function (or destructuring may be used to access specific props directly)

---

# Props Example

Using a prop allows us to specify a unique greeting for each `<HelloWorld />` component:

```js
const HelloWorld = props => <h1>{props.greeting}</h1>;

// Or with destructuring...
// const HelloWorld = ({ greeting }) => (
//    <h1>{greeting}</h1>
// );
```

```js
class App extends Component {
  render() {
    return <HelloWorld greeting="Hello world, of course!" />;
  }
}
```

???

It can be helpful to relate `props` to something that the students are already familiar with.

For example, demonstrate how the `value` attribute works in an HTML `input` attribute:

```html
<input value="default input text" />
```

---

# Exercise 1

Based on what you just learned about props, fix the reference error in the `ToDo` component.

Specifically, think about how you will pass the `todo` item from the `App` component to the `ToDo` component as a prop called `item`.

Try using the **destructuring approach** when accessing the `item` prop in the `ToDo` component.

While you're at it, add `<h1>So Much To Do</h1>` to the top of your to-do list to give it a title.

---

# Exercise 2

Our to-do items will need to be a bit more complex than they are. Rather being derived from a simple array of string values, they will need to be derived from an **array of objects** where each object has an `id`, `title`, and `complete` property.

```js
render() {
   // const todos = ['Learn React']; REMOVE THIS!
   const todos = [
      { id: 0, title: 'Learn React', complete: false }
   ];
   // ...
}
```

Make this change. Your app will be broken again...what needs to be updated in your `ToDo` component now?

---

# Exercise 3

Our app needs a couple more components. First, create a `ToDoCount` component with a `number` prop to display the number of to-dos in the list **with** the word "todo" or "todos" displayed depending on how many items are present.

Next, create a `ClearButton` component with `removeCompleted` prop. This component's prop will be set to function that will fire on the button's `onClick` event.

Once you've created your new components, add them to your `App` inside of a `<div>` with a class of `todo-admin`. You can pass any integer for the `number` prop and an empty string for the `removeCompleted` prop for now.

---

# this.props.children

Every component's `props` object has a property named `children`.

Why do we need this? It's because not all components use self-closing tags. For example:

```html
<HelloWorld>I am a child of HelloWorld.</HelloWorld>
```

In this example, `this.props.children` would equal "I am a child of HelloWorld."

---

# this.props.children

We can also render components inside of other components:

```js
class HelloWorld extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

class App extends React.Component {
  render() {
    return (
      <HelloWorld>
        <h1 id="title">Hello, world!</h1>
      </HelloWorld>
    );
  }
}
```

---

# Proptypes

Proptypes are a feature of React that allow us validate whether props were set on a component as expected, e.g. if a prop:

- is required
- contains a primitive type
- is an array containing only items of a specified type
- is an object with a specific shape
- satisfies a condition set out in a custom validator
- **[...etc.](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)**

---

# Using Proptypes

To use proptypes, you'll need to import `Proptypes` from `prop-types` in your `App.js` file:

```bash
npm install --save prop-types
```

```js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HelloWorld extends Component {
  // the component's code...
}

HelloWorld.propTypes = {
  greeting: PropTypes.string.isRequired,
};
```

What do you think this `propType` necessitates when using the component?

---

# Default Props

We can also set defaults for our components props, which will take effect if no prop is set where the component is used:

```js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HelloWorld extends Component {
  // the component's code...
}

HelloWorld.propTypes = {
  greeting: PropTypes.string,
};

HelloWorld.defaultProps = {
  greeting: 'Hello, world!',
};
```

---

# Exercise 4

Add proptypes for the `ToDo`, `ToDoCount`, and `ClearButton` components.

We need our `todo` prop to be an object with a specific set of properties, so you will need to use `PropTypes.shape()` for that. Use the React doc's reference on **[Prop Validation](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)** to find out how to do this.

Make all of the props for all components **required**.

**Note:** You will end up with a warning in your console for one of your props if you successfully completed the exercise. Why does this happen?

---

# Looking Ahead

Preparing for tomorrow's exercises, our `ToDo` component will need to be more than a simple list item&mdash;it will need to include a checkbox input as well. Make the following adjustment to the mark-up rendered by the `ToDo` component:

```js
const ToDo = ({ item }) => (
  <li>
    {item.title}
    <input type="checkbox" id={item.id} checked={item.complete} />
    <label htmlFor={item.id} />
    <button>
      <i className="fa fa-trash" />
    </button>
  </li>
);
```

---

# To-Do App To-Dos

Tomorrow we will need to:

- Create an input for adding new to-do items
- Add functions to add and remove to-do items
- Add a function for marking a to-do as complete
- Add a function to clear all of the completed to-dos from the list at once

---

# What We've Learned

- How to create React components
- How to add props to React components

---

template: inverse

# Questions?

{% endhighlight %}
