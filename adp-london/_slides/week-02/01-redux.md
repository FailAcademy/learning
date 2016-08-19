---
layout: slidedeck
title: Redux
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

# [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

![Redux Devtools](https://camo.githubusercontent.com/a0d66cf145fe35cbe5fb341494b04f277d5d85dd/687474703a2f2f692e696d6775722e636f6d2f4a34476557304d2e676966)

---
class: middle

### TodoMVC Demo

Clone and install the TodoMVC demo.

```shell
git clone https://github.com/reactjs/redux/tree/master/examples/todomvc
cd todomvc
npm install
npm start
```

Open up your Redux DevTools.

---

# Redux: The Play

Each group will choose a different app from [examples](http://redux.js.org/docs/introduction/Examples.html).

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

Clone and install the starter for your App.

```shell
git clone https://github.com/redacademy/adp-redux-walkthrough.git
cd adp-redux-walkthrough
git reset --hard e823513
npm install
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
