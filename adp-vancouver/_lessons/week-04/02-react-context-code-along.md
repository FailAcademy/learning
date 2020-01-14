---
layout: lesson
title: React Context (project code along)
slides: ["_slides/week-04/02-react-context-code-along.md"]
lesson_date: 2020-2-4
---

## Pre-Work

- Finish mark up for the `shareItemForm` and `shareItemPreview`. From your `Share.js` file call these two components to render on the share page.

- Read the [React Context](https://reactjs.org/docs/context.html)

---

## Learning Objectives

- Review how React components interact with pros and state.
- Identify the role of React context to store global state.
- Use Context to write state-free code in React.
- Use React context, provider, and consumer.

---

## Keywords

- `React Context`
- `Context provider`
- `Context consumer`

---

# Exercise 1

1. Create a file called `ItemPreviewProvider.js` in the `context` dir.
2. Create a context object.
3. Create initial state for your context.

# Exercise 2

1. Create `ItemPreviewProvider` class and use your `initialState` in the `constructor` of this class. `Hint: this.state = {...};`

2. Create a `Provider` for this context and pass `state` in the `value` prop.

3. Create methods to `update` and `reset` the state (`itemPreview`).

# Exercise 3

Wrap your app with the `ItemPreviewProvider` component in the `index.js` (client root) file.

# Exercise 4

From the `ShareItemPreview` component subscribe to the `ItemPreviewContext` using the `Consumer` component.

Use the received `itemPreview` data to pass in the `ItemCard` component as prop.

# Exercise 5

Our form should send the updated values to item preview context, but some of the values may be missing. Like `tags` and `updatePreview`.

How can we get all the `tags` from the server and `updatePreview` method from our context?

`Hint`: use the `<Query />` component in `ShareContainer.js` to query all the `tags` and pass them down to our `ShareItemForm.js`.

`Hint`: To get access to the `updatePreview` method, use the Consumer component and wrap your existing JSX in this class.

## Lab Activity

### Finishing up with the addItem Mutation

Now that you've wired up your store and have the necessary information to add an item to your database
stored there, complete the `addItem` mutation (Server-Side).

By the end of the lab you should be able to create items from your UI!
Also, the `ShareItemPreview` should update as the user adds information to the form.

Be sure to include:

- Form validation messages
- Data validation (Server & Client side)
- Reset the context state and the form when the Mutation is successful
- Redirect to the Items page on complete
- Refetch the `ALL_USER_ITEMS` query with the updated item (Client-Side)

---

## Additional Resources

- [Getting Started with React Context](https://www.taniarascia.com/using-context-api-in-react/)

- [Working with React Context](https://www.toptal.com/react/react-context-api)
