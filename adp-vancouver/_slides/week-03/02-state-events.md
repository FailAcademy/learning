---
layout: slidedeck
title: React State and Events Slides
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
3.  Work with component refs
4.  Use React's "lifecycle methods"
5.  Use Apollo Client with React

---

# Today's To-Do To-Dos

- Create an input for adding new to-do items
- Add functions to add and remove to-do items
- Add a function for marking a to-do as complete
- Add a function to clear all of the completed to-dos from the list at once

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

Let's add an `removeCompleted` method to our `App` component to clear all completed to-do items when the "Clear completed" button is clicked:

```js
removeCompleted = () => {
  let todos = this.state.todos.filter(todo => !todo.complete);
  this.setState({ todos });
};
```

---

# Removing Completed

And finally, we will pass it as a prop to the `ClearButton` component:

```js
<ClearButton removeCompleted={this.removeCompleted} />
```

**Bonus!** The proptype warning message is the console should be gone now that we have passed a method into that prop instead of an empty string.

---

# Exercise 5

Now add a `hasCompleted` method to the `App` component to conditionally display the "Clear completed" button.

**Hint:** You're going to need to use `.filter()` again to determine if there are any to-do items in the `todos` array that have `complete` set to `true`, and conditionally display the button based on the length of that filtered array.

How can you use this new method to conditionally render the `ClearButton` component in the `App` component now?

**Note:** The `hasCompleted` method isn't an event handler, so it doesn't need to be bound in the constructor (or elsewhere).

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

- `componentWillMount` (mounting)
- `componentDidMount` (mounting)
- `componentWillReceiveProps` (updating)
- `shouldComponentUpdate` (updating)
- `componentWillUpdate` (updating)
- `componentDidUpdate` (updating)
- `componentWillUnmount` (unmounting)

---

# Exercise 6

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

The first stop will be `client/src/apollo/index.js` to make our client application aware of our GraphQL API by defining a `uri` for the API, and adding the `httpWithUploads` to the newly instantiated Apollo client.

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

Before we can use `<Query />` we'll need to write a query to pass it as prop.

In `client/src/apollo/queries.js` we will:

- Create the `ItemFields` [**fragment**](https://www.apollographql.com/docs/angular/features/fragments.html)
- Use that fragment to create the `ALL_ITEMS_QUERY`

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

- Should be responsible for **fetching data**
- Should **define event handlers** and pass them as props

_Presentational components:_

- Should **never change prop data** (only receive it)
- Should **format the data** for the view only

---

# Create a Container

We will use a more advanced pattern with `<Query />` in `client/src/pages/Items/ItemsContainer.js`.

```js
class ItemsContainer extends Component {
  render() {
    return (
      <Query query={ALL_ITEMS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <FullScreenLoader inverted />;
          if (error) return <p>{`Error! ${error.message}`}</p>;
          return <Items classes={this.props.classes} items={data.items} />;
        }}
      </Query>
    );
  }
}

export default withStyles(styles)(ItemsContainer);
```

???
Challenge students to create a custom Error component instead of using a `<p>` tag.

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
