---
layout: slidedeck
title: React Router II Slides
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

# Exercise 2

Add routes to your project in `client/routes/Layout.js`:

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
history.replaceState(null, null, 'hello');

// Run this, now try navigating back and forth again
history.pushState(null, null, 'hello');
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

Sometimes you need to access to the `history` object’s properties (or the `match` or `location` props) outside of the named route in your app.

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
  history: PropTypes.object.isRequired,
};

export default withRouter(Header); // THIS IS HOW WE USE IT!
```

_We'll do a lot more with HOCs in our app when we add Redux next week..._

---

# What We've Learned

- How to use the `react-router` to set up SPA-style routing in a React app

---

template: inverse

# Questions?

{% endhighlight %}
