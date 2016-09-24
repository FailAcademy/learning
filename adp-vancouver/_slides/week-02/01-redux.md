---
layout: slidedeck
title: Redux Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Redux

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false
class: center, middle

Fill in the blank.
### Good application design is ______________.

---

class: middle

### Give an example of each in an application:

##### a. data
##### b. view
##### c. logic
##### d. event

---

class: center, middle

### Which application design patterns are you familiar with?

---
name: inverse
class: center, middle

# MVC
model - view - controller

---
name: inverse
class: center, middle

# Flux
unidirectional data architecture

---
name: inverse
class: center, middle

# Redux
a predictable state container

---
class: middle

### Redux vs. Flux

1. a single source of truth for all state
2. all changes are pure functions
3. middleware

---
class: center, middles
# [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

![Redux Devtools](/public/img/slide-assets/ReduxDevTools.gif)

---
class: middle

### TodoMVC Demo

Clone and install the TodoMVC demo.

You must install dependencies at both the root and example level.

```shell
git clone https://github.com/gaearon/redux-devtools
cd redux-devtools
npm install
cd examples/todomvc
npm install
npm start
```

[Install](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) and Open up your Redux DevTools.

---

# Redux: The Play

Each group will choose a different app from the examples [here](http://redux.js.org/docs/introduction/Examples.html).

Prepare a play to demonstrate how your app works.

Consider the different **roles** in your app.

- action creator
- reducer
- store
- view

---

# Create: Worst Pokemon App

Vote up your choice of the worst Pokemon from a list.

Discuss:
- which actions will we need?
- what will the state look like?

---

![Worst Pokemon App](../../public/img/slide-assets/worstPokemonApp.png)

---

# Worst Pokemon: Setup

Use "create-react-app" to create a new project.

```shell
npm install -g create-react-app

create-react-app worst-pokemon
cd worst-pokemon
npm install
npm start
```

---

# Review

- Good application design is ______________.
- MVC, Flux, Redux
- Flux vs. Redux
- What is the role of each in Redux:
  - action creator
  - reducer
  - store
  - view




{% endhighlight %}
