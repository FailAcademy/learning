---
layout: lesson
title: Realm Databases
slides: ['_slides/week-08/03-realm.md']
lesson_date: 2017-11-22
---

## Pre-work

For a heads up on what we'll be diving into with Realm, watch this video:

- [Introducing Realm: A Modern, Local Database Framework for Apps (/dev/world/2015)](https://www.youtube.com/watch?v=doCOxzl8CFM)

And if you're interested in taking a deeper dive into what's going on under the hood, watch this video:

- [A Look Into Realm's Core DB Engine](https://realm.io/news/jp-simard-realm-core-database-engine/)

---

## Learning Objectives

- Define what a mobile database is, and why one may be needed in a native mobile application.
- Explain how Realm is different from other mobile database options.
- Integrate a Realm database into a React Native application.
- Define schema within a React Native application.
- Leverage React Component Lifecycle methods to perform CRUD operations on the database base in relation user interactions.
- Populate a `<SectionList>` component with data fetched a Realm database.
- Sync application UI state as data is added and removed from a Realm database.

---

## Keywords

- Embedded database
- [`AsyncStorage`](https://facebook.github.io/react-native/docs/asyncstorage.html)

---

## Exercise 1

If you haven't already, create a `config/model.js` file in your project.

In this file, define the model for a `Fave` object. Our `Fave` objects should have an `id` string property and a `faved_on` data property. 

Set the `id` as the `primaryKey` for your model.

Be sure to initialize your new Realm with its `Fave` model, and export it so its available in your Faves scene later.

---

## Exercise 2

Inside your `config/models.js` file, write three functions (which you will export) to perform CRUD operations in related "faves" action creators later:

1. A function that **adds a Fave object** to the database
2. A function that **removes a Fave object** from the database
3. A function that **queries** the database for **all Fave objects**

*Where (and how) will you use these functions?*

---

## Lab Activity

In today's lab we'll work on putting our new Fave CRUD operations to use in relevant action creators, and dispatch those actions when the "Add to Faves" or "Remove from Faves" button is tapped in the Session scene.

Once you can see that data is writing to your database when the button is tapped (use the Realm Browser for this!), work on building out your Faves scene to display just the sessions that a user has faved inside a `SectionList` component.

To build out the Faves scene, we'll need to filter the sessions we fetch from Firebase and check to see if they have a `session_id` that corresponds to one of the IDs in the array of Fave objects retrieved from Realm. Use this array of sessions to populate your Redux store, and pass it into your `FavesContainer` as a prop.

The rest of the Faves scene will be built similarly to the Schedule scene. Reuse presentational components between the two wherever possible!

One gotcha is that we'll need to keep the UI state of our Faves scene in sync with the writes we make to the database from the Session scene (i.e. when tapping the button to fave or unfave a session).

To do this, we'll need to research how **[change events](https://realm.io/docs/javascript/latest/#realm-notifications)** work in Realm, and add one of these to our Faves and Session container component constructors, and update our UI whenever a session is added or removed as a fave.

---

## Additional Resources

Latest Realm docs for React Native and related tutorials:

- [Realm Mobile Database - React Native](https://realm.io/docs/react-native/latest/)
- [Realm Academy](https://academy.realm.io/)

A GUI app for working with your Realm databases:

- [Realm Studio](https://realm.io/products/realm-studio/)
