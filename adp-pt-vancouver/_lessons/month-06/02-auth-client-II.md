---
layout: lesson
title: Client-Side Authentication II
slides: ['_slides/month-06/02-auth-client-II.md']
lesson_date: 2019-05-27
---

## Pre-Work

Be sure to complete all of the exercises from the previous lesson.

---

## Learning Objectives

- Authorize Client-Side Routes using Apollo & React Router
- Use React's Context API to provide data to components

---

## Keywords

- React Context
- Refetch Queries

---

## Exercise 1

We'll need a way to expose the current logged-in user to various components in our app.

Create a React context to hold information about the current user of your app (the viewer).
We'll use this context's `Provider` later to help us render our layout,
and choose which components are visible to users.

---

## Exercise 2

Now that you've added the `<ViewerContext.Consumer>` to your `Layout.js` file, write some code to check for the existence of `viewer`. If there is no `viewer` your router should only render the welcome page, and redirect all other routes to `/welcome`.

If there is a `viewer`, render the complete set of routes for your app, but _not_ the `/welcome` route. (Users should only have access to the login screen when logged out).

_Use the value of loading to conditionally render a loading component._

---

## Lab Activity (Next Class)

In todays Lab, we'll spend the day completing the necessary code to perform login and signup from our
client application, including completing the necessary (client-side) code to restrict the display of pages
when a user is not signed in. This will be the final day of in-class work. Be sure to make use of this time to address any concerns you might have and tie up loose ends with your project.

---

## Additional Resources

- [React Context Docs](https://reactjs.org/docs/context.html)

- [Apollo Client Authentication Docs](https://www.apollographql.com/docs/react/recipes/authentication.html)
