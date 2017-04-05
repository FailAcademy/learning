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

# Cheatsheet #1

*Container components:*

- Should be responsible for **fetching data**
- Should **define event handlers** and pass them down as props

*Presentational components:*

- Should **never change prop data** (only receive it)
- Should **format the data** for the view only

---
class: center, middle

.large[
  Knowing this, what type of components should we use for presentational and container components?
]

---

# Cheatsheet #2

Container | Presentational
----------|---------------
Stateful  | Stateless
Classes   | Functions
Impure    | Pure

**Note:** Container and presentational components can be represented on either side of these dichotomies, however, presentational components tend to be **stateless, pure functions** while container components tend to be **stateful classes** that **may or may not be pure**.

---

# In Practice

```js
// CONTAINER COMPONENT

class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [{ title: 'Hello, world!' }]
    };
  }

  render() {
    return <PostList posts={this.state.posts} />;
  }
}

// PRESENTATIONAL COMPONENT

const PostList = ({ posts }) => (
  <ul>
    { posts.map((post) => <li>{post.title}</li>) }
  </ul>
);
```

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

We're building a SPA, so our application uses **a single static HTML file** to display all of it's content.

**When routes changes** in our application, we must ensure that:

- The URL in the address bar reflects what is being shown
- Forward and back nav work in the browser
- The user can navigate to a new URL and they will see the expected view

---

# Exercise 2

Visit **[Reddit](http://reddit.com)**. Click on several links and map out how the urls are structured:

- hot posts
- new posts
- submitting posts
- comment on posts
- a subReddit
- showing posts only posted in the past hour

---

# An Example

Let's create a new React app to test out some of React Router's features. First run:

`create-react-app router-demo`

Then install React Router:

`npm install react-router-dom --save`

*Remember that React is a library, not a framework. Installing `react-router-dom` gives it more framework-like capabilities.*

---

# Adding the Router

To use React Router, we'll need to import it into our app. 

Add this code to your `App.js` file:

```js
import { 
  BrowserRouter as Router, 
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';
```

---

# Router Basics

We just imported four different modules that we will use set up routing in our app:

- `BrowserRouter`: used to wrap all of the routes we define
- `Route`: used for identifying each route (nclusively)
- `Switch`: used to render the first child `Route` that matches the location
- `Link`: used to navigate around an application
- `Redirect`: used to navigate to a new location, like server-side redirects (HTTP 3xx) do

---

# Adding the Router

Now replace the default app content with the following:

```js
const Home = () => <h1>Hello, World!</h1>;
const Contact = () => <h1>Get in touch!</h1>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}
```

---

# Adding the Router

*Things to note...*

`Router` and `Route` **don't render anything by themselves**. They just define rules for our app. Each `Route` renders its `component`.

Also note that `Router` **can only have one child**, so multiple `Route` components should be wrapped in a `div`, etc.

Lastly, the `exact` qualifier ensures that the `path` prop **exactly matches what's in the browser address bar** before rendering the component.

---

# Adding a 404 Page

We can also use the `Route` component to render something for any undefined route. First, create a component to render when there's a 404:

```js
const NotFound = () => <h1>Whoops. You broke the internet again.</h1>;
```

Then add the route:

```js
<Route component={NotFound} />
```

Look ma, no path! But now there's a bug we need to fix...

---

# Switch

`Switch` allows us to render a route **exclusively**, i.e. it allows us to pick only one `Route` to render at a given path:

```js
<Router history={history}>
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </div>
</Router>
```

---

# Rendering: 3 Ways

There are 3 ways to show components for a given `Route`.

We have already seen the first, using the `component` prop:

```js
<Route exact path="/" component={Home} />
```

---

# Rendering: 3 Ways

We can also use the `render` prop and pass it a function:

```js
<Route exact path="/" render={() => <h1>Hello, World!</h1>} />
```

**Note:** Defining this function elsewhere (rather than passing in an anonymous function) would likely be preferable though.

---

# Rendering: 3 Ways

Lastly, we can use the `children` prop:

```js
<Route 
  path ="/match-me" 
  children={({ match }) => match && <p>It matched!</p>} 
/>
```

The difference between `render` and `children` is that the function passed into `children` will always run (regardless of whether there is a match), **unless** you explicitly check for a match using the `match` parameter in the function.

---

# Link Components

The `Link` component allows you to link directly to the routes you have defined. Let's make a nav bar for our app:

```js
const NavBar = () => (
  <div>
    <Link to="/">Home</Link> 
    <Link to="/contact">Contact</Link> {/* include forward slash! */}
  </div>
);
```

```js
<div>
  <NavBar />
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/contact" component={Contact} />
    <Route component={NotFound} />
  </Switch>
</div>
```

---

# NavLink Components

The `NavLink` component is like a `Link`, but with special feature that makes it better for setting up navigation menus.

Ultimately, it allows us to add style-related attributes to the rendered element when it matches the current URL.

Let's' use the `NavLink` instead. First, import the component from `react-router-dom`:

```js
import {
  // ...other imports
  NavLink
} from 'react-router-dom';
```

---

# NavLink Components

Note that if you added any qualifiers to your route you need to add the same ones to your `NavLink` as well...

```css
.selected {
  color: red;
}
```

```js
const NavBar = () => (
  <div>
    <NavLink to="/" exact activeClassName="selected">Home</NavLink>
    <NavLink to="/contact" activeClassName="selected">Contact</NavLink>
  </div>
);
```

You can also use the `activeStyle` prop with the `NavLink` and pass it a style object.

---

# Nested Routes

What if we want to define routes somewhere that isn't the top-level `App` component?

We can use **nested routes** for that. Let's start by adding a route for a Posts page in our `App` component:

```js
<Router>
  <div>
    <NavBar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/posts" component={Post} />
      <Route component={NotFound} />
    </Switch>
  </div>
</Router>
```

---

# Nested Routes

Now create your `Posts` component with its nested routes:

```js
const Posts = ({ match }) => (
  <div>
    <h1>Blog</h1>
    <Route 
      path={`${match.url}/hello-world`}
      render={({ match }) => <h2>Hello, World!</h2>}
    />
    <Route 
      path={`${match.url}/scram-world`}
      render={({ match }) => <h2>Scram, World!</h2>}
    />
  </div>
);
```

Note the use of `match` to dynamically grab the path of the `Posts` component route.

---

# Redirects

Redirects, as they suggest take the user to a different route. They can be rendered for or nested in a route:

```js
<Route render={() => (
  loggedIn ? (
    <Redirect to="/dashboard"/>
  ) : (
    <LoginForm />
  )
) />
```

Or used inside a `Switch` component:

```js
<Switch>
  <Redirect from ="/old" to="/new" />
  <Route path='/new' component={New} />
</Switch>
```

---

# Exercise 3

Based on what you just learned in the preceding examples, apply this to your project now. You will need to create routes that point users to:

- The Welcome page (`/`)
- The Login page (`/login`)
- The New Post page (`/posts/new`)
- The posts topic pages (`/posts/[ID_HERE]`, but note that this should just load the default `PostList` for now)
- A 404 page

---
template: inverse

# Parameters

---

# URL Parameters

URL parameters allow us to navigate to routes with some sort of variable segment in the URL using via **route matching**:

```js
const Posts = ({ match }) => (
  <div>
    <h1>Blog</h1>
    <Route 
      path={`${match.url}/:name`}
      render={({ match }) => <h2>{match.params.name}</h2>}
    />
  </div>
);
```

*Much DRYer!*

---

# URL Parameter Example

Back to [reddit.com](https://www.reddit.com/):

```bash
# homepage
/

# re-directs to /subreddits
/r

# homepage of Subreddit
/r/space

# browse all comments for the Subreddit
/r/space/comments

# redirects to URL below
/r/space/comments/5lxs89

# browse comments page for post
/r/space/comments/5lxs89/clouds_of_andromeda

# URL for specific comment
/r/space/comments/5lxs89/clouds_of_andromeda/dbztmtr
```

---

# URL Parameter Example

If we were building actual Reddit in React, our specific comment URLs might look like this:

```bash
/r/:subRedditName/comments/:postId/:postName/:commentId
```

The parts that start with `:` are URL parameters whose values will be parsed out and made available in `props.match.params.PARAM_NAME` in your component.

---

# Query Strings

React Router 4 **does not have a built-in way to parse query strings** at the end of an URL (e.g. `?sort=popular`).

You can, however, link to an URL with a query string in the `to` props of a `Link` component like this:

```js
<Link to={% raw %}{{pathname: `${match.url}`, search: '?sort=popular'}}{% endraw %}>
  Sort by Popularity
</Link>
```

Add this to your `Posts` component. You can then access the query string for the route in `props.location.search`.

---

# Query String Example

We can then use the emerging [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) standard to parse the query string, but we will need to add a polyfill to ensure support for older browsers:

```bash
npm install url-search-params-polyfill --save
```

Then import the polyfill wherever you plan on instantiaing a new `URLSearchParams`:

```js
import 'url-search-params-polyfill';
```

---

# Query String Example

You can then parse your query string `id` param like this:

```js
const Posts = ({ match, location }) => {
  const searchParams = new URLSearchParams(location.search);
  const sortValue = searchParams.get('sort');

  return (
    <div>
      <h1>Blog</h1>
      <Link to={% raw %}{{pathname: `${match.url}`, search: '?sort=popular'}}{% endraw %}>
        Sort by Popularity
      </Link>
      <Route 
        path={`${match.url}/:name`}
        render={({ match }) => <h2>{match.params.name}</h2>}
      />
      {sortValue && <p>You are sorting by "{sortValue}" right now.</p>}
    </div>
  )
};
```

---
template: inverse

# History and URLs

---

# Dealing with History

React Router offers more than one type of top-level router component. We have see the `BrowserRouter` so far, but there's also a `HashRouter`.

Hash history **works without configuring a server**. It uses `window.location.hash` and that's why we have `#` showing up in our URLs, even though we didn't put it there ourselves:

- **Home:** http://localhost:3000/#/
- **Contact:** http://localhost:3000/#/contact/

---

# Hash vs. Browser

The `BrowserRouter` (used in our demo) uses the **[Browser History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)** and will eliminate the hashes from your URLs:

- **Home:** http://localhost:3000/
- **Contact:** http://localhost:3000/contact

**But there's a catch!** We need a server to use this...one that will always return `index.html` at any route. (Using the Browser History API also enables us to use server-side rendering.)

Luckily, there's a server already configured in RED React Seed, and Create React App.

---

# Browser History Demo

Try visiting this article about the Browser History API:

**https://css-tricks.com/using-the-html5-history-api/**

Open your dev tools console, and run this code, line by line:

```js
window.history

// Run this, then try navigating back and forth
history.replaceState(null, null, 'hello');

// Run this, now try navigating back and forth again
history.pushState(null, null, 'hello');
```

What do you notice? Be sure to watch the browser's address bar will you do this...

---

# Hash vs. Browser

*Some further clarification...*

- Hashes in URLs were meant to refer to a specific place in the document, so adding/changing a hash was a way to update the URL with `window.location` without refreshing the page (in a SPA)
- `hashHistory` works on the client side alone
- `browserHistory` (as stated) requires a server to always return `index.html` regardless of what "resource" is requested

---

# Hash vs. Browser

*Why bother with `hashHistory` at all?*

You would use `hashHistory` if you're worried about supporting <IE9 (without full page re-loads). Or perhaps if you're deploying a site on GitHub Pages...

It's also helpful it you're building a quick and dirty React app and don't want to go to the trouble of setting up a server to handle `browserHistory` right away.


---

# Other Routers

`MemoryRouter`:

- An entirely in-memory router (doesn't depend on URLs in the browser address bar)
- Useful for testing and proof-of-concept

`StaticRouter`:

- Meant to be used with server-side rendering

`NativeRouter`:

- For use in React Native apps

---

# withRouter

Sometimes you need to access to the `history` object’s properties (or the `match` or `location` props) outside of named route in your app. 

To do this, you can wrap the component that needs access to these props in the `withRouter` **higher-order component (HOC)** from React Router.

---

# withRouter

Example of `withRouter` in use:

```js
import React, { PropTypes } from 'react';
import { withRouter } from 'react-router-dom';

const Header = ({ history }) => (
  <button onClick={() => history.push('/')}>Go Home</button>
);

Header.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default withRouter(Header); // THIS IS HOW WE USE IT!
```

*We'll do a lot more with HOCs in our app when we add Redux next week...*

---

# What We've Learned

- What container components and presentational components are for, and how to use them to make components more reusable
- How to use the `react-router` to set up SPA-style routing in a React app

---
template: inverse

# Questions?

{% endhighlight %}
