---
layout: lesson
title: React & Redux
slides: ['_slides/week-02/04-react-and-redux.md']
lesson_date: 2016-10-06
---

## Objectives

- Identify the roles of React and Redux when used together to display views and store state
- Use Redux to write 'state' free code in React that relies largely on 'props'
- Identify the difference between **presentational** and **container** components
- Use "react-redux", with <Provider> and 'connect' to map state and dispatches to props
- Use "reselect" to keep logic out of react
- Use "react-redux-router" to preserves routes in state

---

## Pre-Work

- Read the [Redux docs on React](http://redux.js.org/docs/basics/UsageWithReact.html)

---

## Keywords

- presentational component
- container component
- connect
- provider
- mapStateToProps
- mapDispatchToProps
- selector

---

## Exercise 1

Redux and React serve different roles. Discuss with a partner the role of each in terms of handling:
  a. data
  b. view
  c. logic
  d. events

---

## Exercise 2

Fill out the following table to distinguish between Presentational & Container components.

| Dumb             | Smart                |
| Presentational   | Container            |
| -----------------|----------------------|
| ...              | ...                  |
| ...              | ...                  |

---

## Exercise 3

In the example tree file structure below, which components should be "Presentational" and which should be "Container" components.

```
- REDitApp
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

Convert your "Worst Pokemon" app to use React. 

---

## Exercise 5

Use the `<Provider>` tag from ["react-redux"](https://github.com/reactjs/react-redux) to connect the redux store to the React app in your "Worst Pokemon" app.

[Docs](https://github.com/reactjs/react-redux/blob/master/docs/api.md#provider-store)

---

## Exercise 6

1. Write `mapStateToProps` to connect a "container" component using "react-redux" & `connect` in your "Worst Pokemon" app.

[Docs](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)

2. Use `mapDispatchToProps` second parameter to connect dispatched events in your "Worst Pokemon" app.

---

## Exercise 7

In your group, write some guidelines for connecting React & Redux.

Think about:
- mapStateToProps: which components?
- mapDispatchToProps: which components?

---

## Lab Activity

1. Setup "react-redux". Map out your components as "presentational" or "container" components.

2. Write selectors for your app. If necessary, use [reselect](https://github.com/reactjs/reselect).  

---

## Additional Resources

- [React-Redux Docs](https://github.com/reactjs/react-redux)
- [Egghead.io React-Redux Tutorial](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)
- [Quick Guide to React & Redux](https://www.reax.io/blog/2016/07/07/quick-guide-to-react-and-redux/)