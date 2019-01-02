---
layout: lesson
title: React State and Events
slides: ["_slides/week-03/02-state-events.md"]
lesson_date: 2019-01-22
---

## Pre-work

Prior to class, read through the following documentation:

- [Apollo Client Docs (Intro and Essentials sections)](https://www.apollographql.com/docs/react/)

---

## Learning Objectives

- Describe the difference between one-way data flow in React versus the two-way data binding approach of frameworks such as AngularJS.
- Describe what the state object is in React, what role it serves in applications.
- Describe what "synthetic events" are in React and use them to update a component's state based on user interaction.
- Use the `ref` attribute to reference DOM elements after a component is rendered.
- Explain the special role of each "lifecycle method" in a React component.
- Explain the difference between container components and presentational components.
- Add Apollo Client to a React application to fetch data from a GraphQL API.

---

## Keywords

- State
- One-way data flow
- Two-way data binding
- Synthetic events
- Ref
- Component lifecycle methods

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

## Exercise 5

Now add a `hasCompleted` method to the `App` component to conditionally display the "Clear completed" button.

**Hint:** You're going to need to use `.filter()` again to determine if there are any to-do items in the `todos` array that have `complete` set to `true`, and conditionally display the button based on the length of that filtered array.

How can you use this new method to conditionally render the `ClearButton` component in the `App` component now?

**Note:** The `hasCompleted` method isn't an event handler, so it doesn't need to be bound in the constructor (or elsewhere).

---

## Exercise 6

Last but not least, we want to improve the UX of our to-do app and automatically focus the `<input>` element when the app is rendered.

To do that, we'll need to use one of React's lifecycle methods. It's up to you to pick the right one and implement the code within it to focus the `<input>`.

---

## Lab Activity

Continue working on the client side of your Boomtown application now that you are able to load data from your server in it.

Use the new container pattern that we learned today to make API calls to your GraphQL server using `<Query />` component to load data in your pages.

**Tip!** In addition to the Material UI components, **[react-gravatar](https://github.com/KyleAMathews/react-gravatar)** to load user profile images based on their email addresses. This package is already installed in the Boomtown Stater&mdash;you simply need to read its docs and use it.

---

## Additional Resources

From the React docs:

- [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)
- [The Component Lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle)

A thorough explanation of how method binding works:

- [Why and how to bind methods in your React component classes?](http://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your-react-component-classes/)

The Apollo Client docs for React:

- [Apollo Client - React & React Native](https://www.apollographql.com/docs/react/)

More on the "render props" pattern used by Apollo Client:

- [React Docs - Render Props](https://reactjs.org/docs/render-props.html)
- [Tutorial: Render Props in React Apollo 2.1](https://www.prisma.io/blog/tutorial-render-props-in-react-apollo-2-1-199e9e2bd01e/)
