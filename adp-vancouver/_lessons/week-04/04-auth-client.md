---
layout: lesson
title: Client-Side Authentication
slides: ['_slides/week-04/04-auth-client.md']
lesson_date: 2018-07-26
---

## Pre-Work

Please look at the following:

- What is [React Context](https://reactjs.org/docs/context.html)

---

## Learning Objectives

- Send Login and Logout requests using React/GraphQL
- Authorize Client-Side Routes using Apollo & React Router
- Use React's Context API to provide data to components

---

## Keywords

- React Context
- Refetch Queries
- Redirect

---

## Exercise 1

You have been provided with the initial React component for the login & signup forms in `AccountForm.js`.
In this exercise use `react-final-form` to add field validation and error handling. You'll also need to write a "method stub"
for submitting user credentials. We'll complete the login and signup requests in the next exercise.

---

## Exercise 2

Now that you know how to compose query components. Add the signup and login mutations as props to the `AccountForm` component. Use the form to send email and password information to your resolvers!

---

## Exercise 3

We'll need a way to expose the current logged-in user to various components in our app.

Create a React context to hold information about the current user of your app (the viewer).
We'll use this context's `Provider` later to help us render our layout,
and choose which components are visible to users.

---

## Exercise 4

Now that you've added the `<ViewerContext.Consumer>` to your `Layout.js` file, write some code to check for the existence of `viewer`. If there is no `viewer` your router should only render the welcome page, and redirect all other routes to `/welcome`.

If there is a `viewer`, render the complete set of routes for your app, but _not_ the `/welcome` route. (Users should only have access to the login screen when logged out).

_Use the value of loading to conditionally render a loading component._

---

## Lab Activity

In todays Lab, we'll spend the day completing the necessary code to perform login and signup from our
client application, including completing the necessary (client-side) code to restrict the display of pages
when a user is not signed in. This will be the final day of in-class work. Be sure to make use of this time to address any concerns you might have and tie up loose ends with your project.

---

## Additional Resources

- [React Context Docs](https://reactjs.org/docs/context.html)

- [Apollo Client Authentication Docs](https://www.apollographql.com/docs/react/recipes/authentication.html)
