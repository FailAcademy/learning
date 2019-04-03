---
layout: slidedeck
title: React State and Events I Slides
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

1.  Set a component's initial state
2.  Change state in response to events

---

# Today's To-Do To-Dos

- Create an input for adding new to-do items
- Add functions to add and remove to-do items

---

template: inverse

# Setting Initial Component State

---

class: center, middle

### What is application state?

**State** is where we store data that will change over time.

---

class: center, middle

.large[
What are some examples of how state will change in the to-do app?
]

---

class: center, middle

.large[
What are some examples of how state will change in the Boomtown app?
]

---

# State in React

Recall that in React we don't manipulate the DOM directly.

When we need to update the state of our app, we update a component's **state object** and then let React take care of rendering the updates to the DOM.

We can access a component's state object via `this.state`.

---

# One-way Data Flow

React is all about **one-way data flow** down the component hierarchy (vs. two-way data binding that you may have heard of in AngularJS, etc.).

Two-way data binding means that when properties in the model get updated so does the UI, and similarly, when a UI element is updated the model changes too.

One-way data flow means that the model is the single source of truth. Only the model has access to change the app's state.

---

# State Example

We often want to conditionally change an app's UI depending on application state:

```js
class App extends Component {
  // other code...

  render() {
    let mood = this.state.happy ? 'Hello, world!' : 'Scram, world!';

    return <h1 id="title">{mood}</h1>;
  }
}
```

_But where do we set our `happy` state?_

---

# State Example

We set a component's initial state in the class `constructor`:

```js
class App extends Component {
  constructor() {
    super();
    // set state here...
  }

  // render things here...
}
```

**Note:** In ES2015 child class constructors, `this` cannot be used until `super` is called.

---

# State Example

Now we can set our application initial state in `this.state` in the class `constructor`:

```js
class App extends Component {
  constructor() {
    super();

    this.state = {
      happy: true,
    };
  }

  render() {
    let mood = this.state.happy ? 'Hello, world!' : 'Scram, world!';

    return <h1 id="title">{mood}</h1>;
  }
}
```

---

class: center, middle

.large[
**Insight:** Components are just state machines.
]

---

# Exercise 1

We want our first placeholder to-do item to be set in our app's initial state (not as a constant inside the `render` method).

Create a constructor in your `App` component and set a property called `todos` to the array of the single placeholder to-do object. Remove the `todos` const from `render`.

Set another property (separate from `todos`) called `lastId` and set to the integer `0`. We will need be using this later.

Once again, our app will be broken now. How do we fix this?

---

# Exercise 2

Now that our `todos` are stored in our `App`'s state, let's make the `ToDoCount`'s `number` prop dynamic.

To do that, we will need to get the length of the array in `this.state.todos` and populate the `number` prop with that count dynamically when the `App` component is rendered.

Try implementing this now.

---

class: center, middle

.large[
**Important!** We can't set state in **stateless** functional components (of course).
]

---

template: inverse

# Events in React

---

# What Changes State?

Apps are task-oriented by nature. There are many actions that a user could take to alter that state of an application. Interactions that may alter state include:

- Clicking a button or link
- Submitting a form
- Sending Ajax request
- ...etc.

The **event handlers** we create will control how state is updated in our components.

---

# Synthetic Events

**Synthetic events** in React help us make sure that events have consistent properties across browsers.

React passes our event handlers through instances of `SyntheticEvent`, which helps consolidate browser behaviours into one API. Cross-browser compatibility FTW.

Check out the docs for a full list of **[supported events in React](https://facebook.github.io/react/docs/events.html?#supported-events)**.

---

# Updating State

Our to-do app won't be very useful until we can add, check-off, and remove to-dos from the list. To do that, we will need some way to update component state.

**Important!** Outside of a component's class `constructor`, we don't assign (or re-assign) to the state object directly.

Instead, we will call `this.setState()` and pass it an appropriate object as an argument.

Calling `this.setState()` **will only update the properties passed as  an argument**, not replace the entire state object.

---

# Updating State

What `this.setState()` looks like in action:

```js
class App extends Component {
  constructor() {
    super();

    this.state = {
      happy: true,
    };
  }

  toggleMood = () => {
    // this.state.happy = false; DO NOT DO!
    this.setState({ happy: !this.state.happy }); // DO DO!!
  };

  // other code...
}
```

**Where might we call `toggleMood()`?**

???

Point out the use of the arrow function here (and why it's used):

**Binding**

Methods don't automatically bind `this` to an instance in ES2015. This means we need to explicitly use `.bind()` or an arrow function to bind event handlers.

Using an arrow function or calling `.bind()` with the `toggleMood` method and allows us to maintain the appropriate scope context for the current instance.

It may help to relate this back to experience with working with `$(this)` in jQuery callbacks.

---

class: center, middle

.large[
**Insight:** Whenever state changes in a component, React will re-render the component for us.
]

---

# Exercise 3

Let's write a method for our component to toggle the state of the checkbox when it is clicked (i.e. checked or not checked). To do this you'll need to add a `toggleComplete` method to the `App` component. It should take `item` as a parameter.

Whether a to-do is complete is determined by whether the `complete` property in its state object is `true` or `false`.

Using `.map()` on `this.state.todos`, you will need to selectively set the toggled to-do's `complete` property to the alternative, and then update the component state with the newly mapped array of objects in `todos`.

---

class: center, middle

.large[
Our `toggleComplete` method doesn't do much for us yet...
]

---

class: center, middle

.large[
**Challenge:** How do we use `App`'s `toggleComplete` method to update a `ToDo`'s state based on some event?
]

---

# Props vs. State

- `props` are set by parent components
- A component **cannot** change its own props (it can set a child component's `props` though)
- `props` are only set at element definition time
- A component's state can change from within (and when it does, the virtual DOM is re-rendered)
- State can be used to define props for child components

---

# Next Steps

We will need to add a `toggleComplete` prop to our `ToDo` component inside `App`:

```js
render() {
   // other code...
   return (
      // ...
      <ul>
      {this.state.todos.map((todo) => (
         <ToDo
            key={todo.id}
            item={todo}
            toggleComplete={() => this.toggleComplete(todo)}
          />
      ))}
      </ul>
      // ...
   );
}
```

---

# Using the Method

Now that our parent `App` component has set `toggleComplete` as a prop on `ToDo`, we will use it within our `ToDo` component on the `onChange` attribute:

```js
const ToDo = ({ item, toggleComplete }) => (
  <li>
    {item.title}
    <input
      type="checkbox"
      id={item.id}
      checked={item.complete}
      onChange={toggleComplete}
    />
    {/* other code... */}
  </li>
);
```

_Be sure to update your `ToDo` proptypes with the new prop too!_

---

# Exercise 4

In your `App` component, now add a method to remove a to-do item from the list when the garbage can icon is clicked on a given `ToDo` component.

To do this, you will need to add a `removeToDo` prop to your `ToDo` component, and pass in a `removeToDo` method from the `App` component. This method should be called `onClick` on the button wrapping the garbage can icon.

**Hint:** To remove a to-do from the array of to-do objects stored in the state, you will need to call `.filter()` to create a new array of to-dos containing only the items **that are not the current item**, and set that new array to the value of `todos`.

---

# Removing Completed

And finally, we will pass it as a prop to the `ClearButton` component:

```js
<ClearButton removeCompleted={this.removeCompleted} />
```

**Bonus!** The proptype warning message is the console should be gone now that we have passed a method into that prop instead of an empty string.

---

# What We've Learned

- How to set an component's initial state in a `constructor`
- How to alter state in response to some event

---

template: inverse

# Questions?

{% endhighlight %}
