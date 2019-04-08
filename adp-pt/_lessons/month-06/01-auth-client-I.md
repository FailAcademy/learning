---
layout: lesson
title: Client-Side Authentication I
slides: ['_slides/month-06/01-auth-client-I.md']
lesson_date: 2019-11-05
---

## Pre-Work

Please look at the following:

- What is [React Context](https://reactjs.org/docs/context.html)

---

## Learning Objectives

- Send Login and Logout requests using React/GraphQL
- Authorize Client-Side Routes using Apollo & React Router

---

## Keywords

- Re-fetch Queries
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

## Additional Resources

- [React Context Docs](https://reactjs.org/docs/context.html)
- [Apollo Client Authentication Docs](https://www.apollographql.com/docs/react/recipes/authentication.html)
