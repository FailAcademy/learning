---
layout: slidedeck
title: Client-Side Authentication I Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Client-Side Authentication I

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1. Use React's Context API to provide data to components
2. Authorize Client-Side Routes using Apollo & React Router

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

# What We've Learned

1. How to compose queries using graphql-tools

---

template: inverse

# Questions?

{% endhighlight %}
