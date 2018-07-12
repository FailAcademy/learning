---
layout: slidedeck
title: React and Redux Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# React & Redux

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. What's React-Redux for?
2. Set-up Redux store, etc. in Boomtown
3. Begin refactoring state-related code into Redux modules

---

# Exercise 1

**Redux** and **React** serve different roles. Discuss with a partner the role of each in terms of handling:

- Data
- Views
- Logic
- Events

---

# Redux as Global

Currently, we've been using Redux as a great big global container. Redux holds our:

- **Data**
- **Events** (that trigger logic and change data)

Any component can access anything from anywhere by connecting to the `store`.

*Is a "global" container a good design? Why or why not?*

---

# React-Redux

- This package provides us **React bindings** for Redux
- Allows us to connect up components and give them access to only what they need
- We will only connect our Redux store to **container components**
- Technically, a container component will just be a React component that uses `store.subscribe()` to read a part of the Redux state tree and **supply that as props** to a component that it renders

---

# How It Works

- You could write these these special container components by hand, or just use the React-Redux `connect` function
- `connect` does not modify the component passed to it; instead, it returns a new, connected component for you
- To use `connect`, you need to define a special function called `mapStateToProps` that tells how to transform the current Redux store state into the props you want to pass to
- You also need to wrap your app in the `<Provider>` component to make the store available to all containers

???

- `connect` provides many useful optimizations to prevent unnecessary re-renders

---

# Exercise 2

Before we install `react-redux`, install Redux and Redux dev tools in Boomtown just like we did in the earlier exercises this week. You will want to install `redux-thunk` too.

Create a `redux` directory, and rough out the file and sub-directory structure. Set up your `store.js` just as we did for the grocery store exercise.

What kind of modules (i.e. action and reducer combos) do you think we'll need for this Boomtown?

---

# Exercise 3

Let's build the `items` modules together so we can grab this state from the Redux store in our `ItemContainer` component instead once we add `react-redux`.

---

# Installation

Now install React-Redux:

```bash
npm install --save react-redux
```

---

# Set-up Provider

Then wrap your app in the `<Provider>` component:

```js
// ...
import { Provider } from 'react-redux'
import store from './redux/store';

class Boomtown extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
          <Layout>
            <Routes />
          </Layout>
        </Provider>
      </MuiThemeProvider>
    );
  }
}
```

???

- **Check-in:** what does the `Provider` do?
- `Provider` acts as a wrapper to connect our `store` (data) to our React components.
- Any "connected" component can hookup to this store
- https://github.com/reactjs/react-redux/blob/master/docs/api.md#provider-store


---

# Use Connect

The `connect` function provide a component with state as props.

```js
// at the bottom of ItemsContainer.js

const mapStateToProps = state => ({
    isLoading: state.items.isLoading,
    itemsData: state.items.itemsData,
    itemFilters: state.items.itemFilters
});

export default connect(mapStateToProps)(ItemsContainer);
```

???

- `connect` is the glue that attaches Redux data flow to React components
- Ultimately, it returns a component that wraps around the component that you pass into the function that `connect` returns
- `mapStateToProps` is a pure function that's provided state as a parameter
- Walk-through: https://gist.github.com/gaearon/1d19088790e70ac32ea636c025ba424e
- This function will return an object

---

# The dispatch Prop

When we wrap component with `connect` it also give us a handy prop called `dispatch` for firing off actions to our Redux store:

```js
import { fetchItemsAndUsers } from '../../redux/modules/items';

class ItemsContainer extends Component {
  // ...
  componentDidMount() {
    this.props.dispatch(fetchItemsAndUsers());
  }
  // ...
}
```

---

# Exercise 4

Based on what you know about `<Provider>`, `connect`, `mapStateToProps`, and the `dispatch` prop, finish wiring up your `ItemsContainer.js` component with Redux.

Be sure to factor out all locally managed state within the component (you actually won't need a constructor function at all anymore for this component!).

---

# What We've Learned

- How to set-up and use Redux in a React application
- How to refactor local state into Redux modules in a React application

---
template: inverse

# Questions?

{% endhighlight %}
