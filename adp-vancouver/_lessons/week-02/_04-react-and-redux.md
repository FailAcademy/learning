# Lesson: React & Redux

##### Discussion

1. Redux and React serve different roles. Discuss with a partner the role of each in terms of handling:
A) data
B) view
C) logic
D) events


2. Introduce the concept of Presentational & Container components (aka "smart" and "dumb" components).

| Presentational | Container                  |
| -----------------|-------------------------|
| just the view    |  data & view              |
| inherit props    | get props from state |


3. Use an example component tree diagram and have students decide which components need to be **presentational** and which should be **containers**.

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

##### Demo

1. Use the `<Provider>` tag from "react-redux" to connect the redux store to the app. [Docs](https://github.com/reactjs/react-redux/blob/master/docs/api.md#provider-store)



2. Write 'mapStateToProps` to connect a "container" component using "react-redux" & `connect`. [Docs](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)

3. Use `mapDispatchToProps` second parameter to connect dispatched events.

4. Use the [shorthand notation](https://egghead.io/lessons/javascript-redux-using-mapdispatchtoprops-shorthand-notation?course=building-react-applications-with-idiomatic-redux) to shorten your connect calls.
