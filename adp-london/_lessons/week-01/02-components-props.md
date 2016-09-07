---
layout: lesson
title: React Components, State & Events
slides: ['_slides/week-01/02-components-props.md']
lesson_date: 2016-09-27
---

## Pre-work

From the HTML & CSS textbook:

- A Closer Look at Tags (pp. 23-24)

---

## Learning Objectives

- Identify how a UI/IA can be broken down into a component hierarchy.
- Define what the Virtual DOM is and explain how it helps increase browser performance.
- Describe the difference between one-way data flow in React versus the two-way data binding approach of frameworks such as AngularJS.
- Build components by extending the React.Component class.
- Use the `ReactDOM.render()` method to render components in a web application.
- Use JSX (JavaScriptXML) to write mark-up for React components.
- Use ES2015 features such as class syntax, imports and exports, and arrow functions in relation to React components and project organization.
- Describe the role of the props object in React, and pass arguments into React components using props like HTML attributes.
- Dynamically create an array of components and their props using data stored in an array of objects along with the `.map()`, `.sort()`, and `.filter()` functions.
- Explain why it is essential to supply a unique "key" for each item in an array containing dynamic child components.
- Write `Proptype` declarations to catch invalid props.
- Use React inline style syntax to create encapsulated components inside of a single nested object.

---

## Keywords

- Component
- React node
- Virtual DOM
- JavaScriptXML (JSX)
- Babel
- Props
- Proptype

---

## Exercise 1

We're going to build a to-do app together with React.

Let's start by determining how to chunk the mock-up into components:

![To-do mock-up](/public/img/slide-assets/react-todo-mockup.png)

When determining how to chunk the UI into components, remember that (ideally) a component should only do one thing.

Illustrate your component hierarchy by sketching it out on a sheet of paper, or on a near-by whiteboard wall.

---

## Exercise 2

Your turn! Time to create your first React component...

Open a Codepen and try creating a React Component that simply adds the "So Much To Do" `<h1>` to an app.

Note that in Codepen, you don't explicitly import `React` or `ReactDOM`, but you will need to go to the Settings tab in the JS panel to "Quick-add" these libraries to your pen.

---

## Exercise 3

*Exercise TBA..*

---

## Lab Activity

*Lab activity TBA...*

---

## Additional Resources


- [React Patterns](http://reactpatterns.com/)
- [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)

- [Code Academy](http://www.codecademy.com/learn)
