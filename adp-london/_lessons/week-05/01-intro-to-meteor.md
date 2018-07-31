---
layout: lesson
title: Introducing Meteor (with React)
slides: ['_slides/week-05/01-intro-to-meteor.md']
lesson_date: 2018-07-30
---

## Pre-work

Before we begin working with Meteor this week, please read over the [Meteor Guide](https://guide.meteor.com/).

---

## Learning Objectives

- Survey the history and origins of the Meteor project and the MDG.
- Explain why a developer would want to use Meteor to build an application, and what problems it solves for developers.
- Describe Meteor's shared client-server architecture.
- Uncover the component parts of Meteor.
- Install the Meteor Dev Tools Chrome Extension.
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
- Atmosphere
- Galaxy

---

## Exercise 1

**Design an application platform:**

Split into two groups. Imagine you're planning an application platform for _other developers_ to use. Your platform should be geared towards developers who want to create Web Apps and should include all the necessary components. Feel free to **invent or imagine technology or solutions that don't currently exist**

When you've come up with a platform design, then come up with a marketing plan for your platform. When you have a marketing plan, you'll present it to the class. Your plan should highlight all of the reasons developers should choose your platform, over their own custom solution.

---

## Exercise 2

Install Meteor and run `meteor create`.

See if you can add the following features to the example project that is generated:

- A button that decrements the counter
- A text input and button combination. When the user clicks the button, whatever text
  is in the input appears on screen.

Install the Meteor Dev Tools Chrome extension, and observe Meteor's DDP websocket
transport protocol in action! Open the mongoDB shell using the `meteor mongo` command
and take a peek at your new mongoDB database.

---

## Exercise 3

Now that we know a little bit about What Meteor does, watch the following short Video on Fibers & Futures in Node, for some insight on how it does it:

- [Evented Mind, Introducing Fibers in Node](https://www.eventedmind.com/items/nodejs-introducing-fibers).
- [Evented Mind, Using Futures](https://www.eventedmind.com/items/nodejs-using-futures).

---

## Lab Activity

In today's lab, we'll start refactoring our React To-Do app from the the first week into a Meteor app. Please complete the following tasks before tomorrow's class.

### Step 1: Installation

1.  Create new Meteor app by running `meteor create meteor-react-todo`.
2.  Change directory: `cd meteor-react-todo`.
3.  Install React: `meteor npm install react react-dom prop-types --save`.

### Step 2: Copy-Pasta

1.  Copy your existing `index.js` code to `client/main.js`.
2.  Copy your existing `index.css` to `client/main.css`.
3.  Copy `registerServiceWorker.js` to the same destination directory.
4.  Refactor the content in `client/main.html` to only contain the single `<div>` you'll use to render your React app.
5.  Create an `imports/ui/containers/App` directory in your Meteor app and move `App.js` and `App.css` there. Considering following component naming/organization best practices and rename `App.js` to `index.js` and `App.css` to `styles.css` too.
6.  Update all broken file import paths/names everywhere!

### Step 3: Meteor/React Initialization

1.  Add `import { Meteor } from 'meteor/meteor';` to `client/main.js`
2.  Wrap `ReactDOM.render` in `Meteor.startup( /* ... */ );` (because we don't want to try to render anything to the DOM before Meteor is ready!)
3.  Boom! Everything should be working again in your app.

### Step 4: Clean-up

Now would be a good time to consider refactoring some of the 'presentational' components out of the container `App` component...

1.  Move your `ToDoCount`, `ToDoInput`, `ClearButton`, and `ToDoItem` components into `imports/ui/components/<COMPONENT_NAME>` directories.
2.  Now import these components into your main `App` component file instead.

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
