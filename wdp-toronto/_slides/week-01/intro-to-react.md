---
layout: slidedeck
title: Introduction to React
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Introduction to React

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

####**Agenda**

1. What is React?
2. React Elements & Components
3. JSX
4. State
5. Virtual DOM
6. Axios
7. Props
8. Stateless vs Stateful Components

---
template: inverse

# What is React?

---
class: center, middle

.large[
   React is a JavaScript **library** for building user interfaces.
]

---

# Why Use React?

React makes it easier to reason about, construct, and maintain *stateless* and *stateful* UIs. Specifically, it is:

- **Declarative:** We program the *what* not the *how*
- **Component-Based:** We build encapsulated pieces of UI to build larger more complex UIs
- **Learn Once, Write Everywhere:** React makes no assumption about how it will ultimately rendered, so we can use it for SSR with Node or to build mobile apps with React Native too

---
# Why Use React?

- **Virtual DOM:** React creates a virtual DOM, so instead of constant DOM updates, it diffs the changes and applies only what is necessary.
- **One Way Data Binding:** Simpler structure makes it easier to reason about
---

# Who Uses React?

- Facebook (created it)
- Instagram
- Netflix
- Alibaba
- Atlassian
- [...and many more!](https://github.com/facebook/react/wiki/Sites-Using-React)
---
![westworld](https://i.redd.it/hikw2mqz2t1y.png)
Hollywood

---
layout: false
class: center, middle

#Components
### The 'V' in 'MVC'

---
#Components

Because React is a **component-based view abstraction**, we need to start thinking about our UIs in terms of *components*.

A component may be an input, a button, a list item, etc. It can also be anything wrapping a number of components to create a more complex piece of UI.

We have to think carefully about how we will **manage state** in our components. 

---


###Identify the Components
Idenitfy the parts of this User Interface that could be considered components:
[(Fullscreen image)](/public/img/slide-assets/airbnb-components.png)
![Airbnb Search Page](/public/img/slide-assets/airbnb-components.png)

---
class: center, middle

.large[
   **Insight:** React components are the programatic abstraction that makes it possible to create these chunks of UI.
]

---
# Elements & Components

React elements -> Object representation of a DOM node.

Can be created with JS or **JavaScript XML (JSX)**.

Components -> **functions or classes that return React elements.**

We use `ReactDOM.render()` to render a React element or component into a particular DOM element.

---
# React Elements

What a React element looks like:

```js
// Without JSX
let helloWorld = React.createElement(
  "div",
  null,
  "Hello World!"
);

// Using JSX
let helloWorld = <div>Hello World!</div>;

// Both produce a JS object that looks something like this...
let helloWorld = {
  key: null,
  props: {
    children: "Hello World!"
  },
  ref: null,
  type: "div"
};
```

---
class: center, middle

### JSX?

JSX is an XML syntax that can be used to construct the markup in React components.

JSX makes it **easier to read and write** React components in our code, but React does work without JSX too.

---
class: center, middle

.large[
   Let's take a closer look at how we would create a React component both ways...
]

---

# Hello World: No JSX

Without JSX...

```html
<div id="root"></div>
```

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      React.createElement('h1', {id: 'title'}, 'Hello, world!')
    );
  }
}

ReactDOM.render(
   React.createElement(App, null),
   document.getElementById('root')
);
```

---

# Hello World: JSX

With JSX now...

```html
<div id="root"></div>
```

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
   render() {
      return (
         <h1 id="title">Hello, world!</h1>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

*More readable, less typing!*

---

# Other Things to Note

- We must import the `React` and `ReactDOM` libraries before we can create React components
- `React` provides us with a `Component` class to extend and create our own components (we can also create *functional stateless components* without the `Component` class)
- `render` method comes from `Component`, and is required
- If you want to return React elements on more than one line, you must wrap your return value in `()`
- Look ma, no quotes! (...because JSX isn't a string)

---
# JSX Gotchas

- There must be **exactly one outer-most element returned** with your JSX (so you can't return sibling elements, only a parent with children)
- To add a comment in JSX use: `{/* a comment */}`
- If you need to add a `class` to an element, you must use `className`
- If you need to add a `for` attribute, you must use `htmlFor`

*Conintued...*

---
# More JSX Gotchas

- Self-closing tags must have a `/` before the `>`
- Event listener names must be camel case (e.g. `onClick`)
- JSX must be transformed into real JS to be parsed by ES5 JS engines (we'll use Babel for that)

---

![almost ready to start](https://img.devrant.com/devrant/rant/r_148928_WdmTj.jpg)

---
template: inverse

# [stackblitz.com/fork/react](stackblitz.com/fork/react)

---
# Types of Components

There are two way we will create components:

1. Using ES2015 classes
2. Using stateless functions

---
# ES2015 Class

We've already seen an example of a React component built using an ES2015 class:

```js
class App extends Component {
   render() {
      return (
         <h1 id="title">Hello, world!</h1>
      );
   }
}
```

---
# Stateless Function

In more recent versions of React, we can also build components using this syntax:

```js
const App = () => {
  return (
    <h1 id="title">Hello, world!</h1>
  );
}

// Or more succinctly...
const App = () => <h1 id="title">Hello, world!</h1>;
```

---
# What's the Diff?

- Stateless functional components allow us to create components that are meant to be **pure functions of their props** (more on props in a moment!)
- They **do not retain internal state**
- They do not have the **component lifecycle methods** (i.e. no `render()`, etc.)
- Later this week we will use ES2015 classes to create **Container Components** and the stateless functional approach to create **Presentational Components**...

---
# Naming Components

When naming components, the convention is to use **PascalCase**. We also want to make sure we name our components in a way that makes sense given the larger context of our app.

The key is to **be descriptive**, and start with a **base noun** so components can be easily categorized. For example:

```js
<PostsContainer />  ->  <Posts />
<Posts />           ->  <PostList />, <Post />
<Post />            ->  <PostListItem />, <PostDetails/>
``` 

---
template: inverse

![](/public/img/slide-assets/react-concepts-1way.png)

---

#UI Updates in React

In React, there is only one way (for our purposes) to update your component's user interface:
Modifying the state property of your component using `this.setState()`

---
#What is state?

![](http://www.animatedgif.net/furniture/jsflick_e0.gif)

---
###A Lightswitch Component

```js
class Lightswitch extends React.Component {

    constructor(props){
        super(props);
        this.state = { on: false };
    }

    _switch(){
        this.setState({ on: !this.state.on });
    }

    render(){
        return (
        <div>
            <h1>The light is { this.state.on ? 'ON' : 'OFF' }</h1>
            <button onClick={this._switch.bind(this)}>switch</button>
        </div>
        )
    }
}

ReactDOM.render(<Lightswitch/>, document.getElementById('container'));

```
---
# The Virtual DOM

- The virtual DOM is an **in-memory representation of real DOM elements** generated by React components before any changes are made to the page
- It exists on the top of the DOM or some other render target
- When changes are made to the virtual DOM, React figures out the best way to **batch those changes** to the underlying DOM structure

---
class: center, middle

.inline-images[
![Virtual DOM Diff](https://red-adp-to.herokuapp.com/public/img/slide-assets/virtual-dom-diff.png)
]

---
class: center, middle

.large[
  [Or this diagram...](https://bogdan-lyashenko.github.io/Under-the-hood-ReactJS/stack/book/Intro.html)
]

---
# Why This Matters

- The DOM wasn't designed for creating dynamic UIs
- Web apps exist so that users can interact with them in a task-oriented way&mdash;this means that users can/will influence the state of the app, and we need some way to render those changes to the DOM
- The virtual DOM helps with performance in this regard (versus directly manipulating the DOM)


---
# Lifecycle Functions

- `componentDidMount()`
- `componentWillUnmount()`

---
template: inverse

# Axios

---

# Axios

- HTTP request library
- Handles all requests as Promises

---
# Stateful vs Stateless

- Components can be stateful or stateless
- Logic vs Presentation
- Stateful components: handle ineraction, AJAX requests, etc
- Stateless components: pure functions that turn props into HTML

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
const HelloWorld = (props) => (
   <h1>{props.greeting}</h1>
);

// Or with destructuring...
// const HelloWorld = ({ greeting }) => (
//    <h1>{greeting}</h1>
// );
```

```js
class App extends Component {
   render() {
      return (
         <HelloWorld greeting="Hello world, of course!" />
      );
   }
}
```

---

{% endhighlight %}
