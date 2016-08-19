---
layout: lesson
title: Redux
slides: ['_slides/week-02/01-redux.md']
lesson_date: 2016-10-03
---

## Objectives

- Distinguish between MVC and Flux patterns
- Identify the benefits of using Flux or Redux to model state
- Identify the roles of Redux 'store', 'reducers', 'actions', 'action-creators' and 'action-types'
- Setup a basic project using Redux in raw Javascript
- Create structured actions following [Flux Stand Actions](https://github.com/acdlite/flux-standard-action)
- Explain the results of calling dispatch(action) and getState()

## Pre-Work

- Read the [Redux Introduction](http://redux.js.org/docs/introduction/index.html)

## Keywords

- [Flux](http://redux.js.org/index.html)
- [Redux](http://redux.js.org/index.html)
- [store](http://redux.js.org/docs/basics/Store.html)
- [dispatch](http://redux.js.org/docs/api/Store.html#dispatch)
- [reducer](http://redux.js.org/docs/basics/Reducers.html)
- [action](http://redux.js.org/docs/basics/Actions.html)

## Active Learning

1. Create a diagram or chart to explain each of the following:
  a. MVC
  b. Flux
  c. Redux

2. Download the [Redux DevTools Chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en).

3. Each group will choose a different app from [examples](http://redux.js.org/docs/introduction/Examples.html).

Prepare a play to demonstrate how your app works.

Consider the different **roles** in your app.

- action creator
- reducer
- store
- view

3. Create a Redux data layer for your "Worst Pokemon" voting app.

```shell
git clone https://github.com/redacademy/adp-redux-walkthrough.git
cd adp-redux-walkthrough
git reset --hard e823513
```

4. Setup Redux for your Project #1.

## Resources

- [Scotch.io: Getting Started with Redux](https://scotch.io/bar-talk/getting-started-with-redux-an-intro)
- [Redux without Profanity](https://tonyhb.gitbooks.io/redux-without-profanity/content/index.html)
- [Cartoon guide to Redux](https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6#.56hltw7kz)
- [Egghead Tutorial](https://egghead.io/courses/getting-started-with-redux)
