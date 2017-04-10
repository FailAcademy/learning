---
layout: lesson
title: React State and Events
slides: ['_slides/week-01/03-state-events.md']
lesson_date: 2017-04-12
---

## Pre-work

*There is no pre-work for this lesson.*

---

## Learning Objectives

- Describe the difference between one-way data flow in React versus the two-way data binding approach of frameworks such as AngularJS.
- Describe what the state object is in React, what role it serves in applications.
- Describe what "synthetic events" are in React and use them to update a component's state based on user interaction.
- Use the `ref` attribute to reference DOM elements after a component is rendered.
- Explain the special role of each "lifecycle method" in a React component.
- Use an appropriate lifecycle method to dynamically fetch data and update a component's state with that data before re-/rendering it.

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

Today's lab will be spent building out our stateful `PostList` container component.

There are two properties we'll want to keep track of in our app state:

- `posts`: the list of posts (imported from `mock-data.js`)
- `orderBy`: whether they are sorted by date (`newest`, the default) or popularity (`popular`)

The `PostList` component will also require three event handlers to pass as props to child components:

- `sortPopular()` passed to a Material UI `FlatButton`
- `sortNewest()` passed to another Material UI `FlatButton`
- `updateVote()` passed to our `Post` component

We will also use `sortPopular()` and `sortNewest()` to re-sort the posts in the `componentDidUpdate()` React lifecycle method so our component knows to re-render itself after either of the buttons are clicked. Note that both of these methods will need to have `posts` as a parameter.

Lastly, we ill create one helper method to render the posts:

- `renderPosts()` (will take `posts` as a parameter, and map over the results as individual `<Post />` components)

But first, we'll need to fully build out our `Post` component so we can render it as a child of the `PostList`, or course!

---

## Additional Resources

From the React docs:

- [Interactivity and Dynamic UIs](https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html)
- [Refs to Components](https://facebook.github.io/react/docs/more-about-refs.html)
- [Component Specs and Lifecycle](https://facebook.github.io/react/docs/component-specs.html)
- [A Visual Guide to State in React](https://daveceddia.com/visual-guide-to-state-in-react/)
