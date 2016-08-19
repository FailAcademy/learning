---
layout: slidedeck
title: React and Redux
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# React & Redux

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
class: middle
layout: false

Redux and React serve different roles. Discuss with a partner the role of each in terms of handling:
- data
- view
- logic
- events

---

### Presentational vs. Container

Components can be categorized as either:

- **Presentational**: *dumb* components
- **Container**: *smart* components

---

### Presentational vs. Container

Based on the following tree structure, discuss with a partner which components should be of each type. Justify your reasons.

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

# Coding:

Install and setup your "Worst Pokemon" react-redux demo.

```shell
git clone https://github.com/redacademy/adp-redux-walkthrough
cd adp-redux-walkthrough
git checkout c-react-redux
npm install
```

---

# Install Deps

`npm install --save react-redux`

---

# Provider

Use the [`<Provider>`](https://github.com/reactjs/react-redux/blob/master/docs/api.md#provider-store) tag from "react-redux" to connect the redux store to the app.

---

# Connect

Use [`connect`](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options) to create ("smart") container components.

---

# MapStateToProps

Write [`mapStateToProps`](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options) to connect a "container" component using "react-redux" & `connect`.

---

# MapDispatchToProps

Write [`mapDispatchToProps`](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options) to connect a component actions to redux.

Checkout the [shorthand notation](https://egghead.io/lessons/javascript-redux-using-mapdispatchtoprops-shorthand-notation).

---

# Presentational vs. Container

Now that you've had some practice, let's return to our component architecture.

Read [React with Redux](http://redux.js.org/docs/basics/UsageWithReact.html).

In a group, write some guidelines for connecting React & Redux.

How can we tell which components should be "presentational" or "container" components?

---

# React Redux Router

Why might we want to use [react-redux-router](https://github.com/reactjs/react-router-redux)?

---

# Reselect

Why might you want to use [reselect](https://github.com/reactjs/reselect).


{% endhighlight %}
