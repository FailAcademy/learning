---
layout: lesson
title: React and Redux
slides: ['_slides/week-07/01-react-and-redux.md']
lesson_date: 2019-11-19
---

## Pre-Work

You'll need to complete the lab activity from the previous lesson (Intro to Redux).

---

## Learning Objectives

- Review how React components interact with pros and state.
- Identify the roles of React and Redux when used together to display views and store state.
- Use Redux to write state-free code in React.
- Use `react-redux`, with `<Provider>` and `connect`
- Use the `dispatch` prop to send actions to the Redux store from a React component.

---

## Keywords

- `Provider`
- `connect`
- `mapStateToProps`
- `mapDispatchToProps`

---

## Exercise 1

**Redux** and **React** serve different roles. Discuss with a partner the role of each in terms of handling:

- Data
- Views
- Logic
- Events

---

## Exercise 2

Before we install `react-redux`, install Redux and Redux dev tools in Boomtown just like we did in the earlier exercises this week.

Create a `redux` directory, and rough out the file and sub-directory structure. Set up your `store.js` just as we did for the grocery store exercise.

What kind of modules (i.e. action and reducer combos) do you think we'll need for this Boomtown?

---

## Exercise 3

Let's build the `shareItemPreview` module together so we can grab this state from the Redux store in our `ShareItemPreview` component instead once we add `react-redux`.

---

## Exercise 4

Wire up the `FormSpy` component. It should send the values from the form to the store, but some of the values may be missing.
Are you able to send the right tags to the store? What about the image preview, how does that work?

In this exercise, we'll use a class method to do the following:

- If the user has selected a a file using the file input, generate a `base64` url of that file.
  (Hint: you'll need to investigate the `btoa` JavaScript global function).
- Dispatch all of the fields you'll need for the addItem mutation to the redux store, including the `base64` url.
- include actions for reseting the form image preview, and reseting the form to it's `initialState`

---

## Lab Activity (Next Class)

### Finishing up with the addItem Mutation

Now that you've wired up your store and have the necessary information to add an item to your database
stored there, complete the `addItem` mutation (Server-Side).

By the end of the lab you should be able to create items from your UI!
Also, the `ShareItemPreview` should update as the user adds information to the form.

Be sure to include:

- Form validation messages
- Upload input should only accept images, under 10mb
- Data validation (Server & Client side)
- Reset the Redux Store and the form when the Mutation is successful
- Redirect to the Items page on complete
- Refetch the `ALL_USER_ITEMS` query with the updated item (Client-Side)

---

## Additional Resources

- [React-Redux Docs](https://github.com/reactjs/react-redux)
- [Egghead.io React-Redux Tutorial](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)
- [Quick Guide to React & Redux](https://www.reax.io/blog/2016/07/07/quick-guide-to-react-and-redux/)
