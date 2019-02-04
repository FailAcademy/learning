---
layout: slidedeck
title: Client-Side Authentication
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Client-Side Authentication

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1. Use React's Context API to provide data to components
2. Authorize Client-Side Routes using Apollo & React Router
3. Refetch data to refresh the App on Login & Signup

---

# Exercise 1

You have been provided with the initial React component for the login & signup forms in `AccountForm.js`.
In this exercise use `react-final-form` to add field validation and error handling. You'll also need to write a "method stub"
for submitting user credentials. We'll complete the login and signup requests in the next exercise.

---

template: inverse

# Composing Queries

---

# Composing Queries

In our app, the signup and login form is written as a single component.
This component will need access to the `signup` and `login` mutations. To provide access to both queries in our `AccountForm` we can use the `compose` HOC:

```js
// ... imports
// ... AccountForm component

export default compose(
  graphql(SIGNUP_MUTATION, {
    name: 'signupMutation',
  }),
  graphql(LOGIN_MUTATION, {
    name: 'loginMutation',
  }),
  withStyles(styles),
)(AccountForm);
```

---

# Exercise 2

Now that you know how to compose query components. Add the signup and login mutations as props to the `AccountForm` component. Use the form to send email and password information to your resolvers!

---

template: inverse

# React Context

---

class: center, middle

# What is a Context?

.inline-images[
![React Context](/public/img/slide-assets/react-context.png)
]
On the left, global data is global. On the right, global data is provided to parts of the application . The "context" holds the global information we're going to provide to parts of our application tree as needed.

???

**Question:**

How can we provide global data to portions of the application subtree, whithout passing data via props?

**Answer:**

Using a context provider!

**Question:**

How will my components consume data from the provider?

**Answer:**

Using a context consumer!

---

# Creating Context

Both the context `Consumer` and `Provider` are created from a single context object.

```js
import React from 'react';

const Context = React.createContext();
```

Looking ahead: _We'll need a context to hold information about the user (viewer) of our app, including if the user logged in or not_.

---

# Context Provider

The context `Provider` is a component. We can use this component to store information.

```js
import React from 'react';

const Context = React.createContext();

export const Provider = ({ children }) => {

  const message = "Hello World"

  return (
    <Context.Provider value={% raw %}{{ message }}{% endraw %}>
      {children}
    </Context.Provider>
  );
};
```

What is the value of `children`?

???

Here is the final component we're trying to build. Ask leading questions that point the class towards wrapping the Query component.

```js
export const ViewerProvider = ({ children }) => {
  return (
    <Query query={VIEWER_QUERY}>
      {({ data, loading }) => {
        const viewer = data && data.viewer ? data.viewer : null;
        return (
          <ViewerContext.Provider value={{ viewer, loading }}>
            {children}
          </ViewerContext.Provider>
        );
      }}
    </Query>
  );
};
```

---

# Context Consumer

To use the `value` provided by the context, import the context and used it's `Consumer` component!

```js
import React from 'react';
import { Context } from '../Context';

const ConsumerComponent = props => (
  <Context.Consumer>
    {({ message }) => (
      <div>
        <h1>{message}</h1>
      </div>
    )}
  </Context.Consumer>
);
```

Where does the value of `message` come from?

---

template: inverse

# Viewer Provider

---

# Viewer Provider

This is the completed "viewer" (logged in user) context `Provider` for our app.

```js
const ViewerContext = React.createContext();

export const ViewerProvider = ({ children }) => {
  return (
    <Query query={VIEWER_QUERY}>
      {({ data, loading }) => {
        const viewer = data && data.viewer ? data.viewer : null;
        return (
          <ViewerContext.Provider value={% raw %}{{ viewer, loading }}{% endraw %}>
            {children}
          </ViewerContext.Provider>
        );
      }}
    </Query>
  );
};
```

---

# Exercise 3

We'll need a way to expose the current logged-in user to various components in our app.

Create a React context to hold information about the current user of your app (the viewer).
We'll use this context's `Provider` later to help us render our layout,
and choose which components are visible to users.

---

template: inverse

# Rendering the Layout

---

# Rendering the Layout

Refactor your routes to render two root components. One for logged-in and one for logged-out users. Start by wrapping the component in `Layout.js` with the `<ViewerContext.Consumer/>`

```jsx
export default () => (
  <React.Fragment>
    <ViewerContext.Consumer>
      {({ viewer, loading }) => (
        <Switch>
          // ... Your routes
          <Redirect from="*" to="/items" />
        </Switch>
      )}
    </ViewerContext.Consumer>
  </React.Fragment>
);
```

---

# Exercise 4

Now that you've added the `<ViewerContext.Consumer>` to your `Layout.js` file, write some code to check for the existence of `viewer`. If there is no `viewer` your router should only render the welcome page, and redirect all other routes to `/welcome`.

If there is a `viewer`, render the complete set of routes for your app, but _not_ the `/welcome` route. (Users should only have access to the login screen when logged-out).

_Use the value of loading to conditionally render a loading component._

---

template: inverse

# Refecthing Queries

---

# Refecthing Queries

In React **When a component's props or state change, the component and it's children re-render themselves.**

When the `LOGIN_MUTATION` or `SIGNUP_MUTATION` is finished, we'll refetch the `VIEWER_QUERY`. Any components that are wrpapped in the `<ViewerContext.Consumer>` will re-render, because the `Provider` component's props will update when the results from the query are returned!

We'll also refetch the `VIEWER_QUERY` on logout.

---

To re-fetch the `VIEWER_QUERY`, modify `AccountForm.js`

```js
const refetchQueries = [
  {
    query: VIEWER_QUERY,
  },
];

export default compose(
  graphql(SIGNUP_MUTATION, {
    options: {
      refetchQueries,
    },
    name: 'signupMutation',
  }),
  graphql(LOGIN_MUTATION, {
    options: {
      refetchQueries,
    },
    name: 'loginMutation',
  }),
  withStyles(styles),
)(AccountForm);
```

---

# Lab Activity

In todays Lab, we'll spend the day completing the necessary code to perform login and signup from our
client application, including completing the necessary (client-side) code to restrict the display of pages
when a user is not signed in. This will be the final day of in-class work. Be sure to make use of this time to address any concerns you might have and tie up loose ends with your project.

---

# What We've Learned

1. What is React Context
2. How to compose queries using graphql-tools
3. How to use React's Context providers in your app
4. How to conditionally render routes based on the result of a graphql query
5. How to refetch queries as the result of a mutation

---

template: inverse

# Questions?

{% endhighlight %}
