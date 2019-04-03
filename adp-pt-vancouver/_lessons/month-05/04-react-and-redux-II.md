---
layout: lesson
title: React and Redux II
slides: ['_slides/month-05/04-react-and-redux-II.md']
lesson_date: 2019-05-21
---

## Pre-Work

You'll need to complete the lab activity from the previous lesson (Intro to Redux).

---

## Learning Objectives

- Use Redux to write state-free code in React.
- Use `react-redux`, with `<Provider>` and `connect`
- Use the `dispatch` prop to send actions to the Redux store from a React component.

---

## Keywords

- `Provider`
- `connect`

---

## Exercise 1

Wire up the `FormSpy` component. It should send the values from the form to the store, but some of the values may be missing.
Are you able to send the right tags to the store? What about the image preview, how does that work?

In this exercise, we'll use a class method to do the following:

- If the user has selected a a file using the file input, generate a `base64` url of that file.
  (Hint: you'll need to investigate the `btoa` JavaScript global function).
- Dispatch all of the fields you'll need for the addItem mutation to the redux store, including the `base64` url.
- include actions for reseting the form image preview, and reseting the form to it's `initialState`

---

## Exercise 2

Write a `resetFileInput` function that can reset the image preview and set state to initial values.

`Hint:` Use `resetNewItemImage` function from our Redux store.

???

```js
resetFileInput() {
this.fileInput.current.value = '';
this.props.resetNewItemImage();
this.setState({ fileSelected: false });
}
```

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
- Re-fetch the `ALL_USER_ITEMS` query with the updated item (Client-Side)

---

## Additional Resources

- [Egghead.io React-Redux Tutorial](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)
