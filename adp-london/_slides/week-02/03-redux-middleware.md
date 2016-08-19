---
layout: slidedeck
title: Redux Middleware
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Redux Middleware

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false
class: middle, center

### Where is the middleware?

View -> Action -> Reducer -> Store -> View

---
class: middle

# Middleware

```js
// store has access to `getState` & `dispatch`
const middleware = store => next => action => {
  // do something here
  next(action);
};
```

---
class: middle

# Setting up Redux Middleware

```shell
git clone https://github.com/redacademy/adp-redux-walkthrough
cd adp-redux-walkthrough
git checkout b-middleware
npm install
```

---
class: center, middle

# Redux Logger

Setup ["redux-logger"](https://github.com/evgenyrodionov/redux-logger) middleware in your "Worst Pokemon" app.

---
class: center, middle

# Redux Thunk

Setup ["redux-thunk"](https://github.com/gaearon/redux-thunk) middleware in your "Worst Pokemon" app.
---

# Redux-Thunk: Multiple Actions

Redux-Thunk allows us to dispatch multiple actions in order.

```js
const action = () => (dispatch) => {
  dispatch({ type: ACTION_1 });
  dispatch(action2());
}
```

Why is this important?

---

# Redux-Thunk: Action Creators

Redux thunk allows you to access state in action creators.

```js
const action = () => (dispatch, getState) => {
  const { id } = getState();
  dispatch({ type: ACTION_1, payload: { id }});
}
```

Why is this important?


---

# Notes

- What happens when "redux-logger" isn't called last by `applyMiddleware`.

```js
const store = createStore(
  reducers,
  applyMiddleware(logger, thunk)
);
```

Why does this happen?

---

# Group-Work

With a partner, choose an additional middleware to implement in your "Worst Pokemon" app. Some suggestions:

- [Redux LocalStorage](https://github.com/elgerlambert/redux-localstorage)
- [Toast Error Messages](See the bottom of https://www.codementor.io/reactjs/tutorial/beginner-s-guide-to-redux-middleware)
- Redux-Debounce / Redux-Throttle
- [Redux-Authentication](https://github.com/Jackong/redux-authentication)

Other suggestions found [here](https://github.com/xgrommx/awesome-redux#react---a-javascript-library-for-building-user-interfaces).

{% endhighlight %}
