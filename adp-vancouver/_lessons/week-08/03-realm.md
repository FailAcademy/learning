---
layout: lesson
title: Realm Databases
slides: ["_slides/week-08/03-realm.md"]
lesson_date: 2018-08-22
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
- Manage application UI state with React's context API as data is queried, added, and removed from a Realm database.

---

## Keywords

- Embedded database
- [`AsyncStorage`](https://facebook.github.io/react-native/docs/asyncstorage.html)

---

## Exercise 1

If you haven't already, create a `config/model.js` file in your project.

In this file, define the model for a `Fave` object. Our `Fave` objects should have an `id` string property and a `faved_on` data property.

Set the `id` as the `primaryKey` for your model.

Be sure to initialize your new Realm with its `Fave` model, and export it so its available in your Faves screen later.

---

## Exercise 2

Inside your `config/models.js` file, write three functions (which you will export) to perform CRUD operations in related "faves" action creators later:

1.  A function that **adds a Fave object** to the database
2.  A function that **removes a Fave object** from the database
3.  A function that **queries** the database for **all Fave objects**

_Where (and how) will you use these functions?_

---

## Exercise 3

Our `FavesProvider` component doesn't do much for us yet except give us access to an empty array of `faveIds`.

Write a `getFavedSessionIds` method for this class that uses one of your Realm helpers to get the current faves from the database, and then subsequently update the state of the `FavesProvider` with an array of the faved session IDs.

Call this method in `componentDidMount` so that we fetch this data initially as the component mounts.

Lastly, wrap your app in your `FavesProvider` in `App.js`.

---

## Exercise 4

Add `addFaveSession` and `removeFaveSession` methods to the `FavesProvider` component now. These methods should each have a `sessionId` parameter.

Pass these methods along in the `value` prop of `FavesContext.Provider` (along with the `faveIds`).

You will now be able to update your context where you use a `FavesContext.Consumer` component in your app.

---

## Lab Activity

You'll need to use a `FavesContext.Consumer` component anywhere you need to have access to `faveIds`, `addFaveSession`, or `removeFaveSession` from the faves context in your app. Specifically, you will want to add the consumer to your Schedule, Faves, and Session container components (nest them right inside your `Query` components for these screens).

Once you've set this up for the Session screen and you've added a button component to toggle faving for given particular session, you can wire the button up with the `addFaveSession` and `removeFaveSession` functions to test out if your Realm helpers and faves context are actually writing data to your database (finally!).

Once you can see that data is writing to your database when the "Add to / Remove from Faves" button is tapped in a Session (use the Realm Browser for this!), work on building out your Faves screen to display just the sessions that a user has faved inside a `SectionList` component.

To build out the Faves screen, we'll need to filter the sessions we fetch from the API and check to see if they have a `session_id` that corresponds to one of the IDs in the array of Fave objects retrieved from Realm before we pass them to the schedule list for this screen.

The Faves screen will be built similarly to the Schedule screen. Reuse presentational components between the two wherever possible!

One gotcha is that we'll need to keep the UI state of our Faves screen in sync with the writes we make to the database from the Session screen (i.e. when tapping the button to fave or unfave a session).

To do this, we'll need to research how **[change events](https://realm.io/docs/javascript/latest/#realm-notifications)** work in Realm, and add one of these to our `FavesProvider` constructor, so it will update our UI whenever a session is added or removed as a fave.

---

## Additional Resources

Latest Realm docs for React Native and related tutorials:

- [Realm Mobile Database - React Native](https://realm.io/docs/react-native/latest/)
- [Realm Academy](https://academy.realm.io/)

A GUI app for working with your Realm databases:

- [Realm Studio](https://realm.io/products/realm-studio/)
