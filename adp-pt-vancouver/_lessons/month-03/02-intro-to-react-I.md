---
layout: lesson
title: Introducing React I
slides: ['_slides/month-03/01-intro-to-react-I.md']
lesson_date: 2019-08-20
---

## Pre-work

Prior to class, please familiarize yourself with some React fundamentals by watching this short tutorial series:

- [Building a chat app with React.js and Chatkit](https://scrimba.com/g/greactchatkit)

You can pause the video and interact directly with the code editor in the video screen, so please be sure to experiment with the code in the tutorial along the way.

Come to class prepared to share your **top 3 takeaways about React** that you learn by watching this tutorial series.

---

## Learning Objectives

- Identify how a UI/IA can be broken down into a component hierarchy.
- Define what the Virtual DOM is and explain how it helps increase browser performance.
- Build components by extending the React.Component class.
- Use the `ReactDOM.render()` method to render components in a web application.
- Use JSX (JavaScriptXML) to write mark-up for React components.
- Use ES2015 features such as class syntax, imports and exports, and arrow functions in relation to React components and project organization.

---

## Keywords

- Component
- React node
- Virtual DOM
- JavaScriptXML (JSX)
- Babel

---

## Exercise 1

We're going to build a to-do app together with React.

Let's start by determining how to chunk the mock-up into components:

<p style="display: flex; justify-content: center;">
	<img src="/public/exercises/react-todo-mockup.png" alt="To-do mock-up" />
</p>

When determining how to chunk the UI into components, remember that (ideally) a component should only do one thing.

Illustrate your component hierarchy by sketching it out on a sheet of paper, or on a near-by whiteboard wall.

---

## Exercise 2

Your turn! Time to create your first React component...

Open a Codepen and try creating a React Component that simply adds the "So Much To Do" `<h1>` to an app.

Note that in Codepen, you don't explicitly import `React` or `ReactDOM`, but you will need to go to the Settings tab in the JS panel to "Quick-add" these libraries to your pen.

---

## Exercise 3

Open `App.js` in your React app and delete the default content in the `render()`.

In its place, set up an array as a constant called `todos` and add 'Learn React' as the only item.

Next, use what you just learned about `.map()` and iterating over arrays in a component to list the to-do array item inside an unordered list element.

You can also remove the default logo `import` and delete the file too.

---

## Exercise 4

Add CSS to your app by copying the styles from **[the files in this gist](https://gist.github.com/mandiwise/d6c9cb0a6e9edc20e24b6cd973cdb6d7)**, clearing out the default styles in `App.css` and `index.css`, and pasting the copied styles respectively. Also wrap the `<ul>` in a `<div>` with a class of `todo-list` (remember how to treat class attributes in React).

Finally, create a stateless functional component called `ToDo` and move your list item into it, then call `.map()` on the new `<ToDo>` component instead.

Be sure to move the `key` attribute from your `<li>` onto the `<ToDo />` inside the `.map()` function. Your app will be broken now but we'll find out why in a minute!

---

## Additional Resources

From Facebook's official React docs:

- [Official React Docs](https://facebook.github.io/react/docs/getting-started.html)
- [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)

Patterns used in React development:

- [React Patterns](http://reactpatterns.com/)
- [React.js in patterns](http://krasimirtsonev.com/blog/article/react-js-in-design-patterns)
