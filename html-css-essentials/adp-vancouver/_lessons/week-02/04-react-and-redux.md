---
layout: lesson
title: React and Redux
slides: ['_slides/week-02/04-react-and-redux.md']
lesson_date: 2017-07-13
---

## Pre-Work

- Read the [Redux docs on React](http://redux.js.org/docs/basics/UsageWithReact.html)

---

## Learning Objectives

- Identify the roles of React and Redux when used together to display views and store state.
- Use Redux to write state-free code in React that relies largely on `props`.
- Identify the difference between *presentational* and *container* components.
- Use `react-redux`, with `<Provider>` and `connect` to map state and dispatches to `props`.
- Use `reselect` to keep logic out of React.
- Use `react-redux-router` to preserve application routes in state.

---

## Keywords

- Presentational component
- Container component
- `connect`
- Provider
- `mapStateToProps`
- `mapDispatchToProps`
- Selector
- Query string

---

## Exercise 1

Redux and React serve different roles. Discuss with a partner the role of each in terms of handling:

- Data
- View
- Logic
- Events

---

## Exercise 2

Draw a table with **Dumb Presentational** on one side, and **Smart Container** on the other. Fill each side of the table to distinguish between these two types of components.

---

## Exercise 3

In the example tree file structure below, which components should be presentational and which should be container components:

```
- App
 |- Weeks
    |- Week
        |- Header
        |- Links
 |- Posts
    |- Post
        |- Vote Button
        |- Categories
 |- NewPost
    |- Form
        |- InputOne
        |- InputTwo
        |- Submit
```

---

## Exercise 4

Use the `<Provider>` tag from ["react-redux"](https://github.com/reactjs/react-redux) to connect the Redux store to a React App.

**Hint:** Check the [docs](https://github.com/reactjs/react-redux/blob/master/docs/api.md#provider-store)!

---

## Exercise 5

First, write `mapStateToProps` to connect a "container" component using "react-redux" & `connect` in your React app.

**Hint:** Check the [docs](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)!

Next, use `mapDispatchToProps` second parameter to connect dispatched events in your React app.

---

## Exercise 6

Let's implement sorting a list of data using React Router. We'll use a query string to trigger the sort in our component.
Here's what we'll have to do:

- Implement the React Router Link component to trigger the addition of the query string to the location.
- In your list component, you'll need to respond to the changing query string, capture the query and sort
the list based on the value.


---

## Lab Activity

In today's lab, you're going to set-up `react-redux` in your Boomtown project. Map out your components as "presentational" or "container" components.

When you're finished, add [react-router-redux](https://github.com/reactjs/react-router-redux).

---

## Additional Resources

- [React-Redux Docs](https://github.com/reactjs/react-redux)
- [Egghead.io React-Redux Tutorial](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)
- [Quick Guide to React & Redux](https://www.reax.io/blog/2016/07/07/quick-guide-to-react-and-redux/)
