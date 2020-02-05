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

1.  Using React Router

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

We're building a SPA, so our application uses **a single static HTML file** to display all of its content.

**When the route changes** in our application, we must ensure that:

- The URL in the address bar reflects what is being shown
- Forward and back nav work in the browser
- The user can navigate to a new URL and they will see the expected view

---

# Exercise 1

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

`create-react-app router-demo && cd router-demo`

Then install React Router:

`yarn add react-router-dom --save`

_Remember that React is a library, not a framework. Installing `react-router-dom` gives it more framework-like capabilities._

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
} from "react-router-dom";
```

---

# Router Basics

We just imported four different modules that we will use set up routing in our app:

- `BrowserRouter`: used to wrap all of the routes we define
- `Route`: used for identifying each route (inclusively)
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

_Things to note..._

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
<Router>
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
<Route path="/match-me" children={({ match }) => match && <p>It matched!</p>} />
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

Let's use the `NavLink` instead. First, import the component from `react-router-dom`:

```js
import {
  // ...other imports
  NavLink
} from "react-router-dom";
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
    <NavLink to="/" exact activeClassName="selected">
      Home
    </NavLink>
    <NavLink to="/contact" activeClassName="selected">
      Contact
    </NavLink>
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
      <Route path="/posts" component={Posts} />
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

Redirects, as they suggest take the user to a different route. They can be rendered for, or nested in, a route:

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
  <Redirect from="/old" to="/new" />
  <Route path="/new" component={New} />
</Switch>
```

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

_Much DRYer!_

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

# Exercise 2

Add routes to your project in `client/routes/index.js`:

- The Items List page (`/items`)
- The Home page (`/welcome`)
- The Share page (`/share`)
- The current viewer Profile page (`/profile`)
- The user Profile pages (`/profile/[ID_HERE]`)

Also, provide a wildcard redirect to `/items` for any undefined route using `<Redirect />`.

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

**But there's a catch!** We need a server to use this... one that will always return `index.html` at any route. (Using the Browser History API also enables us to use server-side rendering.)

Luckily, there's a server already configured in Create React App.

## {% comment %}

# Browser History Demo

Try visiting this article about the Browser History API:

**https://css-tricks.com/using-the-html5-history-api/**

Open your dev tools console, and run this code, line by line:

```js
window.history;

// Run this, then try navigating back and forth
history.replaceState(null, null, "hello");

// Run this, now try navigating back and forth again
history.pushState(null, null, "hello");
```

What do you notice? Be sure to watch the browser's address bar will you do this...
{% endcomment %}

---

# Hash vs. Browser

_Some further clarification..._

- Hashes in URLs were meant to refer to a specific place in the document, so adding/changing a hash was a way to update the URL with `window.location` without refreshing the page (in a SPA)
- `hashHistory` works on the client side alone
- `browserHistory` (as stated) requires a server to always return `index.html` regardless of what "resource" is requested

---

# Hash vs. Browser

_Why bother with `hashHistory` at all?_

You would use `hashHistory` if you're worried about supporting <IE9 (without full page re-loads). Or perhaps if you're deploying a site on GitHub Pages...

It's also helpful it you're building a quick and dirty React app and don't want to go to the trouble of setting up a server to handle `browserHistory` right away.

---

# withRouter

Sometimes you need to access to the `history` object’s properties (or the `match` or `location` props) outside of the named route in your app.

To do this, you can wrap the component that needs access to these props in the `withRouter` **higher-order component (HOC)** from React Router.

---

# withRouter

Example of `withRouter` in use:

```js
import React, { PropTypes } from "react";
import { withRouter } from "react-router-dom";

const Header = ({ history }) => (
  <button onClick={() => history.push("/")}>Go Home</button>
);

Header.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(Header); // THIS IS HOW WE USE IT!
```

---

# What We've Learned

- How to use the `react-router` to set up SPA-style routing in a React app

---

template: inverse

# Questions?

{% endhighlight %}
