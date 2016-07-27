# Lesson: React & Redux (2hrs)

### React & Redux Roles (5)

1. Redux and React serve different roles. Discuss with a partner the role of each in terms of handling:
A) data
B) view
C) logic
D) events

*(
  react: view renders data & events,
  redux: data, logic, events
)*

### Presentational & Container Components (10)

1. Introduce the concept of Presentational & Container components (aka "smart" and "dumb" components).

| Dumb             | Smart                |
| Presentational   | Container            |
| -----------------|----------------------|
| just the view    |  data & view         |
| inherit props    | get props from state |


2. Use an example component tree diagram and have students decide which components need to be **presentational** and which should be **containers**. Justify your answer.

An example:

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

### Coding (40)

[ADP-Redux-Walkthrough](https://github.com/redacademy/adp-redux-walkthrough) - branch "c-react-redux"

1. Use the `<Provider>` tag from "react-redux" to connect the redux store to the app. [Docs](https://github.com/reactjs/react-redux/blob/master/docs/api.md#provider-store)


2. Write `mapStateToProps` to connect a "container" component using "react-redux" & `connect`. [Docs](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)

3. Use `mapDispatchToProps` second parameter to connect dispatched events.

### Group Discussion (15)

In a group, write some guidelines for connecting React & Redux.

Think about:
- mapStateToProps: which components?
- mapDispatchToProps: which components?


---

## Coding Time

Let students code for a bit on their projects before introducing new concepts.

---

## Afternoon Additions

### Router with Redux (20)

Introduce [react-redux-router](https://github.com/reactjs/react-router-redux)

Help students implement react-redux-router in their projects.

### Reselect (25)

Introduce [reselect](https://github.com/reactjs/reselect)

Help students implement reselect in their projects.

### Challenge

4. Use the [shorthand notation](https://egghead.io/lessons/javascript-redux-using-mapdispatchtoprops-shorthand-notation?course=building-react-applications-with-idiomatic-redux) to shorten your connect calls.
