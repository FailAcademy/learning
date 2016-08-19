## Lesson: Redux Middleware (3 hrs)

### Discussion (5)

Where is the middleware?

View -> Action -> Reducer -> Store -> View

*(between Reducer and Store. You can see this when you run Redux middleware)*


What is the role of middleware?

*( triggers an action when a change occurs )*

Think of a real world example of middleware:

Every time I do **A**, **B** happens first.

*( every time I eat lunch, I take a photo of it first. I have photo taking middleware. )*

What does middleware look like?

```js
// store has access to `getState` & `dispatch`
const middleware = store => next => action => {
  // do something here
  next(action);
};
```


### Coding (30)

[ADP-Redux-Walkthrough](https://github.com/redacademy/adp-redux-walkthrough) - branch "b-middleware"

1. Setup Redux Logger together. (https://github.com/evgenyrodionov/redux-logger)

2. Setup Redux Thunk together.
(https://github.com/gaearon/redux-thunk)


### Group Work (30)

Each group must setup a different middleware, and explain how it works to the class. Choose one of the following:

  A) [Redux LocalStorage](https://github.com/elgerlambert/redux-localstorage)
  B) [Toast Error Messages](See the bottom of https://www.codementor.io/reactjs/tutorial/beginner-s-guide-to-redux-middleware)
  C) Redux-Debounce / Redux-Throttle
  D) Redux-Authentication (https://github.com/Jackong/redux-authentication)

Group presentations. Students should follow along and ask questions.


## Curry (25)

- Read and discuss [Curry](https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/ch4.md)

## Compose (25)

- Read and discuss [Compose](https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/ch5.md)

## How Redux Middleware Works (20)

- Read and discuss [Understanding Redux Middleware](https://medium.com/@meagle/understanding-87566abcfb7a#.5hyd3zale)

Dissect how curry and compose are used in Redux Middleware.

## Immutable Data (25)

- Read and discuss [Why immutable?](https://auth0.com/blog/2016/03/23/intro-to-immutable-js/)

Discuss the benefits and uses of Immutable data structures.

Options: Immutable.js, seamless-immutable

What are some drawbacks to using immutable data structures?

*( code becomes bound to immutable library )*

## If Time

### Challenge

1. Implement immutable data in your app
2. Discuss other patterns such as Redux Saga
