---
layout: lesson
title: React State and Events I
slides: ['_slides/month-04/01-state-events-I.md']
lesson_date: 2019-09-03
---

## Pre-work

Be sure to complete all of the exercises from the previous class.

---

## Learning Objectives

- Describe the difference between one-way data flow in React versus the two-way data binding approach of frameworks such as AngularJS.
- Describe what the state object is in React, what role it serves in applications.
- Describe what "synthetic events" are in React and use them to update a component's state based on user interaction.

---

## Keywords

- State
- One-way data flow
- Two-way data binding

---

## Exercise 1

We want our first placeholder to-do item to be set in our app's initial state (not as a constant inside the `render` method).

Create a constructor in your `App` component and set a property called `todos` to the array of the single placeholder to-do object. Remove the `todos` const from `render`.

Set another property (separate from `todos`) called `lastId` and set to the integer `0`. We will need be using this later.

Once again, our app will be broken now. How do we fix this?

---

## Exercise 2

Now that our `todos` are stored in our `App`'s state, let's make the `ToDoCount`'s `number` prop dynamic.

To do that, we will need to get the length of the array in `this.state.todos` and populate the `number` prop with that count dynamically when the `App` component is rendered.

Try implementing this now.

---

## Exercise 3

Let's write a method for our component to toggle the state of the checkbox when it is clicked (i.e. checked or not checked). To do this you'll need to add a `toggleComplete` method to the `App` component. It should take `item` as a parameter.

Whether a to-do is complete is determined by whether the `complete` property in its state object is `true` or `false`.

Using `.map()` on `this.state.todos`, you will need to selectively set the toggled to-do's `complete` property to the alternative, and then update the component state with the newly mapped array of objects in `todos`.

---

## Exercise 4

In your `App` component, now add a method to remove a to-do item from the list when the garbage can icon is clicked on a given `ToDo` component.

To do this, you will need to add a `removeToDo` prop to your `ToDo` component, and pass in a `removeToDo` method from the `App` component. This method should be called `onClick` on the button wrapping the garbage can icon.

**Hint:** To remove a to-do from the array of to-do objects stored in the state, you will need to call `.filter()` to create a new array of to-dos containing only the items **that are not the current item**, and set that new array to the value of `todos`.

---

## Additional Resources

From the React docs:

- [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)
- [The Component Lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle)

A thorough explanation of how method binding works:

- [Why and how to bind methods in your React component classes?](http://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your-react-component-classes/)
