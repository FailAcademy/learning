---
layout: lesson
title: React and Redux
slides: ['_slides/week-02/04-react-and-redux.md']
lesson_date: 2016-10-06
---

## Objectives

- Identify the roles of React and Redux when used together to display views and store state
- Use Redux to write 'state' free code in React that relies largely on 'props'
- Identify the difference between presentational and container components
- Use "react-redux", with <Provider> and 'connect' to map state and dispatches to props
- Use "reselect" to keep logic out of react
- Use "react-redux-router" to preserves routes in state

## Pre-Work

- Read the [Redux docs on React](http://redux.js.org/docs/basics/UsageWithReact.html)

## Keywords

- connect
- provider
- mapStateToProps
- mapDispatchToProps
- selector

## Active Learning

1. Redux and React serve different roles. Discuss with a partner the role of each in terms of handling:
  a. data
  b. view
  c. logic
  d. events

2. Fill out the following table to distinguish between Presentational & Container components.

| Dumb             | Smart                |
| Presentational   | Container            |
| -----------------|----------------------|
| ...              | ...                  |
| ...              | ...                  |

3. In the example tree file structure below, which components should be "Presentational" and which should be "Container" components.

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

3. Use the `<Provider>` tag from ["react-redux"](https://github.com/reactjs/react-redux) to connect the redux store to the React app in your "Worst Pokemon" app.

[Docs](https://github.com/reactjs/react-redux/blob/master/docs/api.md#provider-store)

4. Write `mapStateToProps` to connect a "container" component using "react-redux" & `connect` in your "Worst Pokemon" app.

[Docs](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)

5. Use `mapDispatchToProps` second parameter to connect dispatched events in your "Worst Pokemon" app.

6. In your group, write some guidelines for connecting React & Redux.

Think about:
- mapStateToProps: which components?
- mapDispatchToProps: which components?

7. Write [reselect](https://github.com/reactjs/reselect) selectors for your app.


## Resources

- [React-Redux Docs](https://github.com/reactjs/react-redux)
- [Egghead.io React-Redux Tutorial](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)
