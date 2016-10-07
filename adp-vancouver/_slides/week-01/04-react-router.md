---
layout: slidedeck
title: React Router Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# React Router

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Container vs. Presentational Components
2. Using React Router

---
template: inverse

# Container vs. Presentational Components

---

# Why the Diff?

In React, it's very easy to mix code that controls the behaviour of our app with code that renders the view.

As a result, our code will become more **tightly coupled** than it should be. This makes our components less modular and harder to reuse.

To avoid this, we will organize our project into **Container Components** and **Presentational Components**.

---

# In Use

We've already seen an approximate example of this pattern in the to-do app&mdash;where the stateful `App` component **passes down props** to a stateless child component.

We have also seen how a stateful parent component **can pass down an event handler too** to a stateless child component. The child component then uses that event handler to update the parent's state.

---
class: center, middle

.large[
   Container components are concerned with **how things work**.
]


---
class: center, middle

.large[
   Presentational components are concerned with **how things look**.
]

---

# Cheatsheet

- Container components should be responsible for fetching data
- Container components should define event handlers and pass them down as props
- Presentational components should never change prop data (only receive it)
- Presentational components should format the data for the view only

---

# Exercise 1

Review the components that you have created for the REDit app so far. What should be classified as a container component, and what should be classified as a presentational component?

Do some project reorganization based on these observations. Remember that your `import` file paths will likely break when you do this and you'll need to fix them!

---
template: inverse

# Routing with React

---
class: center, middle

### What is routing?

Routing allows us to create readable URLs that describe the content loaded in a single-page application, and allows the user to navigate forward and backward through a SPA.

In other words, routing allows us to take a path and use it to generate the correct components to populate the UI.

---

# About Routing

**Note!**

We're building a SPA, so our application uses a single static HTML file to display all of it's content.

When routes in our application change no request to the server is made. Instead, React is dynamically rendering content, and changing the URL.

---

# Exercise 2

---

# An Example

Let's create a new React app to test out some of React Router's features. First run:

`create-react-app router-demo`

Then install React Router:

`npm install react-router`

*Remember that React is a library, not a framework. Installing `react-router` gives React more framework-like capabilities.*

---

# Adding the Router

To use the Router, we'll need to import it into our app. Add this code to your `App.js` file:

```js
import {
   Router,
   Route,
   Link,
   IndexRoute,
   hashHistory
} from 'react-router';
```

---

# Router Basics

We just imported five different modules that we will use set up routing in our app:

- `Router`: used to wrap all of the routes we define
- `Route`: used for identifying each route
- `Link`: used to navigate around an application
- `IndexRoute`: used to render a particular component as the index (i.e. default) route
- `hashHistory`: used to manage front-end SPA-style routing

---

# Adding the Router

Now replace the default app content with the following:

```js
const Home = () => <h1>Hello, World!</h1>;
const Contact = () => <h1>Get in touch!</h1>;

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/contact' component={Contact} />
      </Router>
    );
  }
}
```

`Router` and `Route` don't actually render anything, they just define rules for our app. Each `Route` renders its `component`.

---

# Adding a 404 Page

Adding a 404 page for undefined routes is easy to do with React Router:

```js
const NotFound = () => <h1>Whoops. You broke the internet again.</h1>;

<Route path='*' component={NotFound} />
```

---

# Link Components

The `Link` component allows you to link directly to the routes you have defined (using its `to` prop). Try adding a links to and from the `Home` and `Contact` components:

```js
const Home = () => (
   <div>
      <h1>Hello, World!</h1>
      <Link to="/contact">Contact</Link>
   </div>
);

const Contact = () => (
   <div>
      <h1>Get in touch!</h1>
      <Link to="/">Home</Link>
   </div>
);
```

---

# Nested Routes

What if we decide we want to apply a special layout to our Contact page, perhaps to target some CSS to turn its background pink?

React Router makes this very easy with **nested routes**. First, set-up the new `Layout` component in your app:

```js
// other code...

const Layout = ({children}) => (
   <div className="app-wrapper">
      {children}
   </div>
);
```

---

# Nested Routes

Next, add a nested route for `Contact`:

```js
class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
         <Route path='/' component={Home} />
         <Route component={Layout}>
            <Route path='contact' component={Contact} />
         </Route>
      </Router>
    )
  }
}
```

Notice how we define a `Route` without specifying a path? This means don't need to add additional segments to an URL in order to nest routes.

---

# Nested Routes

Nested routes also allow us to eliminate redundancy:

```js
<Route path="posts/new" component={PostForm} />
<Route path="posts/hello-world" component={Post} />
<Route path="posts/scram-world" component={Post} />
```

```js
<Route path="posts">
   <Route path="new" component={PostForm} />
   <Route path="hello-world" component={Post} />
   <Route path="scram-world" component={Post} />
</Route>
```

*Much DRYer!*

---

# IndexRoutes

We can also use something called an `<IndexRoute />` with React Router. This allows us to wrap a group of our routes in a component, but set one route as the index:

```js
class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
         <IndexRoute component={Home} />
         <Route path='contact' component={Contact} />
         <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}
```

---

# Using Params

Params allow us to navigate to routes with some sort of variable segment in the URL using via **route matching**. If we don't use params, we would have to write our routes like so:

```js
<Route path="posts">
   <Route path="new" component={PostForm} />
   <Route path="hello-world" component={Post} />
   <Route path="scram-world" component={Post} />
</Route>
```

With params:

```js
<Route path="posts">
   <Route path="new" component={PostForm} />
   <Route path=":name" component={Post} />
</Route>
```

---

# Using Params

So how do we make use of the params in our routes?

Remember that routes are components themselves, so params are passed down as props to the component specified for the route.

This will give us access to the passed topic in `props.params.name` in our `Post` component constructor (to perhaps selectively load content based on the `name`). You will be able to see this is the React dev tools.

---

# Using Params

We can also use route params with the `Link` component:

```js
<Link to="posts" params={{name: 'hello-world'}}>Hello, world!</Link>  
```

---

# Exercise 3

Based on what you just learned in the preceding examples, apply this to your project now. You will need to create routes that point users to:

- The Welcome page (`/`)
- The Login page (`/login`)
- The New Post page (`/posts/new`)
- The posts topic pages (`/posts/[topic-name-here]`, but note that this should just load the default `PostList` for now)

---

# Dealing with History

React Router allows us to set `hashHistory` or `browserHistory` on the `Router` component.

Hash history (what we have set now) works without configuring a server. And it's why we have weird query strings at the end of the URL like so:

- **Home:** http://localhost:3000/#/?_k=yxa2a1
- **Contact:** http://localhost:3000/#/contact?_k=3as5bo

The query string is a key that history uses to look up persistent state data in `window.sessionStorage` between page loads.

---

# Hash vs. Browser

**Browser history** is the recommended method in the React Router docs. It uses the Browser History API and will eliminate the hashes from your URLs:

- **Home:** http://localhost:3000/
- **Contact:** http://localhost:3000/contact

But there's a catch! We need a server to do this...one that will always return the server at any route.

Luckily, there is an Express server already configured in the RED React Seed.

---

# Hash vs. Browser

*Why bother with `hashHistory` at all?*

You would use `hashHistory` if you are worried about supporting <IE9.

It's also helpful it you're building a quick and dirty React app and don't want to go to the trouble of setting up a server to handle `browserHistory` right away.

---

# Using Browser History

To use `browserHistory`, we'll need to import that instead of `hashHistory`:

```js
import {
   Router,
   Route,
   Link,
   IndexRoute,
   browserHistory // update this!
} from 'react-router';
```

---

# Using Browser History

We will also need to set the `history` prop accordingly on the `Router` component:

```js
class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        {/* other code here! */}
      </Router>
    )
  }
}
```

---

# Exercise 4

Time to implement switch `hashHistory` to `browserHistory` in your app.

Note that there is already an Express server configured for you in `server/index.js`, so `browserHistory` will (mostly) work out of the box.

---

# What We've Learned

- What container components and presentational components are for, and how to use them to make components more reusable
- How to use the `react-router` to set up SPA-style routing in a React app

---
template: inverse

# Questions?

{% endhighlight %}
