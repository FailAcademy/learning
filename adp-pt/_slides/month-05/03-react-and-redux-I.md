---
layout: slidedeck
title: React and Redux I Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# React & Redux I

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1.  What's React-Redux for?
2.  Set-up Redux store, etc. in Boomtown
3.  Refactor state-related code into Redux modules

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

_Is a "global" container a good design? Why or why not?_

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

Before we install `react-redux`, install Redux and Redux dev tools in Boomtown just like we did in the earlier exercises this week.

Create a `redux` directory, and rough out the file and sub-directory structure. Set up your `store.js` just as we did for the grocery store exercise.

What kind of modules (i.e. action and reducer combos) do you think we'll need for Boomtown?

???

[Source code for solution](https://github.com/redacademy/boomtown/tree/master/client/src/redux)

---

# Exercise 3

Let's build the `shareItemPreview` module together so we can grab this state from the Redux store in our `ShareItemPreview` component instead once we add `react-redux`.

???

[Source code for solution](https://github.com/redacademy/boomtown/tree/master/client/src/redux/ShareItemPreview)

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
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';

const App = () => (
  <ReduxProvider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </ApolloProvider>
    </MuiThemeProvider>
  </ReduxProvider>
);
```

???

- **Check-in:** what does the `Provider` do?
- `Provider` acts as a wrapper to connect our `store` (data) to our React components.
- Any "connected" component can hookup to this store
- https://github.com/reactjs/react-redux/blob/master/docs/api.md#provider-store

---

# Use Connect

The `connect` function is how we'll connect our component to the Redux store. <br/>
We'll also map a portion of the store onto the props of the component!

```js
// at the bottom of ShareItemPreview.js

const mapStateToProps = state => ({
  // This is the reducer we set up in Exercise 3
  shareItemPreview: state.shareItemPreview,
});

export default connect(mapStateToProps)(ShareItemPreview);
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
class ShareItemForm extends Component {
  // ...
  componentDidMount() {
    this.props.dispatch(/* Your action here! */);
  }
  // ...
}
```

---

# Use Connect

The `connect` function receives 2 arguments. The first is `mapStateToProps`. The second is `mapDispatchToProps`. <br/>

```js
// at the bottom of ShareItemForm.js

const mapDispatchToProps = dispatch => ({
  /*  This function will provide a prop called 
    'updateNewItem' to our component. */

  updateNewItem(item) {
    // Inside this function we can dispatch data to our reducer.
    dispatch(updateNewItem(item));
  },
  // ... other methods
});

export default connect(
  undefined,
  mapDispatchToProps,
)(ShareItemPreview /* Or, withStyles(ShareItemPreview)*/);
```

???

Check-in: Why would we do this instead of using this.props.dispatch ?

---

# Send form data to Store

React final form has a component which we can use to send form values to the our redux store:<br/>
The [FormSpy](https://github.com/final-form/react-final-form#formspy--reactcomponenttypeformspyprops) component.

```js
<FormSpy
  subscription={% raw %}{{ values: true }}{% endraw %}
  component={({ values }) => {
  if (values) {
    this.dispatchUpdate(values, tags, updateNewItem);
  }
  return '';
  }}
/>
```

---

# What We've Learned

- How to set-up and use Redux in a React application
- How to refactor local state into Redux modules in a React application

---

template: inverse

# Questions?

{% endhighlight %}

```

```
