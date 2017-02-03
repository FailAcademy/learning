---
layout: lesson
title: Introducing Meteor (with React)
slides: ['_slides/week-05/01-intro-to-meteor.md']
lesson_date: 2017-02-06
---

## Pre-work

Before we begin working with Meteor this week, please read over the [Meteor Guide](https://guide.meteor.com/).

---

## Learning Objectives

- Survey the history and origins of the Meteor project and the MDG.
- Explain why a developer would want to use Meteor to build an application, and what problems it solves for developers.
- Describe Meteor's shared client-server architecture.
- Uncover the component parts of Meteor.
- Use AtmosphereJS, Meteor's package system.
- Describe some potential drawbacks of using Meteor.
- Deploy a Meteor App using `meteor-now`.
- Refactor our React To-Do app into a Meteor app.

---

## Keywords

- Application platform
- Developer experience
- Universal JavaScript
- Reactivity / Reactive programming
- Fibers and the Event Loop
- Optimistic UI
- MDG
- AtmosphereJS
- Galaxy

---

## Exercise 1

**Design an application platform:**

Split into two groups and create your ideal application platform, on paper. Your platform should be geared towards developers who want to create Web Apps and should include all the necessary components.

When you've come up with a platform design, then come up with a marketing plan for your platform. When you have a marketing plan, you'll present it to the class. Your plan should highlight all of the reasons developers should choose your platform, over their own custom solution.

---

## Exercise 2

*How do desktop apps perform versus browser-based apps?*

In a group, discuss the main differences in user experience between desktop apps and web apps.

---

## Exercise 3




---

## Lab Activity

In today's lab, we'll start refactoring our React To-Do app from the the first week into a Meteor app. Please complete the following tasks before tomorrow's class.

### Step 1: Installation

1. Create new Meteor app by running `meteor create meteor-react-todo`.
2. Also install React: `meteor npm install react react-dom`.

### Step 2: Copy-Pasta

1. Move your existing `index.js` code to `client/main.js`.
2. Move your existing `index.css` to `client/main.css`.
3. Refactor the content in `client.html` to only contain the single `<div>` you'll use to render your React app.
4. Create an `imports/ui/containers/App` directory in your Meteor app and move `App.js` and `App.css` there. Considering following component naming/organization best practices and rename `App.js` to `index.js` and `App.css` to `styles.css` too.
5. Update all broken file import paths/names everywhere!

### Step 3: Meteor/React Initialization

1. Add `import { Meteor } from 'meteor/meteor';` to `client/main.js`
2. Wrap `ReactDOM.render` in `Meteor.startup( /* ... */ );` (because we don't want to try to render anything to the DOM before Meteor is ready!)
3. Boom! Everything should be working again in your app.

### Step 4: Clean-up

Now would be a good time to consider refactoring some of the presentational components out of the container `App` component...

1. Move your `ToDoCount`, `ToDoInput`, `ClearButton`, and `ToDoItem` components into `imports/ui/components/<COMPONENT_NAME>` directories. 
2. Now import these components into your main `App` component file instead.

---

## Additional Resources

From the official Meteor docs:

- [Application Structure](https://guide.meteor.com/structure.html)

A Google Chrome extension with some Meteor dev tools:

- [Meteor DevTools](https://chrome.google.com/webstore/detail/meteor-devtools/ippapidnnboiophakmmhkdlchoccbgje)

The best user guide for Meteor, and one of the best Documentations projects for any software platform:

- [Discover Meteor](https://www.discovermeteor.com/)

Meteor ecosystem's own package manager. It is functionally similar to NPM:

- [AtmosphereJS](https://atmospherejs.com/)

A fantastic resource for JavaScript news, with a focus on whats new with Meteor:

- [Crater.io](https://crater.io/)

Meteor's Paid Hosting Solution:

- [Meteor Galaxy](https://www.meteor.com/hosting/)
