---
layout: lesson
title: Collections and Accounts
slides: ['_slides/week-05/02-collections-accounts.md']
lesson_date: 2019-07-30
---

## Pre-Work

Make sure you have MongoDB installed before you come to class:

```bash
brew update
brew install mongodb
```

Also consider installing [Mongo Compass](https://www.mongodb.com/download-center#compass) [RoboMongo](https://robomongo.org/) for a nice GUI for navigating your Mongo databases.

---

## Learning Objectives

- Explore MongoDB as a popular option for NoSQL databases.
- Explain the difference between JSON and BSON, and their relevance to MongoDB.
- Explain the difference between a database, collection, and document.
- Use the Mongo Shell to the MongoDB query language to perform basic CRUD operations on a data set.
- Explore MongoDB collections as a way to persist data in a Meteor application.
- Explain Minimongo's relation to MongoDB in Meteor.
- Create collections and user accounts using MongoDB in a Meteor application.
- Perform basic CRUD operations on data in a Meteor application.

---

## Keywords

- MongoDB
- NoSQL
- CRUD
- Normalization
- Collection
- Document
- Embedded document
- Minimongo

---

## Exercise 1

Let's practice importing and querying data in MongoDB. Outside of the Mongo shell, import the **[sample data set](/public//exercises/people.json).**

- How many people are humans from Tatooine?
- How many people appear in The Empire Strikes Back?
- How many people are taller than than 170cm?
- How many people fly some form of X-Wing?
- Return the names and masses of humans, ordered in descending order by known mass. Skip the first two results and limit your results to only four people.

---

## Exercise 2

Anywhere you are working with `todos` in your state object, change that to work with the `todos` in your `App` component `props`.

Be sure to remove any remaining references to `id` in your `App` code (as we will use the document `_id` now instead).

Don't forget to add some prop type validation as we are now passing collection data into our component as a prop.

You may also want to set `defaultProps` for `todos` as an empty array so your app doesn't break when there's no todos in the database.

---

## Exercise 3

Now refactor the `toggleComplete()`, `removeToDo()`, and `removeCompleted()` methods to contain the `update()` and `remove()` methods, however appropriate.

The `removeCompleted()` method will be the trickiest...how will you check to see which to-dos are marked as complete now, and then remove those to-dos from the database based on their `_id`?

---

## Exercise 4

Import the `<AccountsUIWrapper />` component into `App.js`.

Add this component to the top of your `App` `render` method. Wrap it in a `<div>` with a class of `login-wrapper`.

Now wrap your existing to-do list `<div>` and your new accounts component in a new parent `<div>` will a class of `app-wrapper` (we'll need this for the CSS...).

Now **[add this CSS](https://gist.github.com/mandiwise/29e4be3fbb737b883042ce7c92a87176)** to your `<AccountsUIWrapper />` component.

---

## Exercise 5

Let's wrap all of the components in our to-do list that should only be visible to logged in users (i.e. the input, to-do list, the to-do count, and clear button). Leave the `<h1>` visible.

When a user is not logged in, alternatively display the following:

```html
<div className="logged-out-message">
  <p>Please sign in to see your todos.</p>
</div>
```

---

## Lab Activity

In today's lab, continue working with your group members to plan your self-directed Meteor app.

---

## Additional Resources

Official MongoDB docs worth bookmarking:

- [MongoDB CRUD Operations](https://docs.mongodb.com/manual/crud/#write-operations-overview)

Official Meteor documentation on collections and accounts:

- [Collections - Meteor Docs](https://docs.meteor.com/api/collections.html)
- [Collections - Meteor Guide](http://guide.meteor.com/collections.html)
- [Accounts - Meteor Docs](https://docs.meteor.com/api/accounts.html)
- [Users and Accounts - Meteor Guide](https://guide.meteor.com/accounts.html)
