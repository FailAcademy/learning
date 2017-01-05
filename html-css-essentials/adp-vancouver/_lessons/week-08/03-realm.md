---
layout: lesson
title: Realm Databases
slides: ['_slides/week-08/03-realm.md']
lesson_date: 2017-03-01
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
- Populate a `<ListView>` component with data fetched a Realm database.
- Sync application UI state as data is added and removed from a Realm database.

---

## Keywords

- Embedded database
- [`AsyncStorage`](https://facebook.github.io/react-native/docs/asyncstorage.html)

---

## Exercise 1

If you haven't already, create a `config/model.js` file in your Splashify project.

In this file, define the model for a `Fave` object. Our `Fave` objects should have an `id` string property and a `faved_on` data property. 

Set the `id` as the `primaryKey` for your model.

Be sure to initialize your new Realm with its `Fave` model, and export it so its available in your Faves scene later.

---

## Exercise 2

Create a `databaseHelpers.js` file in the `lib` directory of your project now. In it, write two functions: 

1. A function that **checks if a particular photo has been faved**. It should return true or false. We can use it to conditionally render the colour of the star icon in the Photobox scene.
2. A function that **saves or deletes a photo as a fave**. If the photo is already faved it should be deleted from the database, otherwise it should be added to the database. We can use this function to take the appropriate write action when the star icon is tapped in the Photobox scene.

---

## Lab Activity

In today's lab, we'll work on building out the Faves scene. The Faves scene will list all of our currently faved photos in a grid format, and if a user taps any of the photo thumbnails in the grid our app will pop it into a Photobox scene on the top-level stack.

To build out our Faves scene, we'll need to retrieve a list of faved photos from the database, sorted in descending order by date. We'll need to map over our list of faves to extract the IDs from each photo, which we can then use to fetch each corresponding photo object from the Unsplash API. We can then populate the successful response returned from the Promise into `<ListView>` component, and style it accordingly.

One gotcha is that we'll need to keep the UI state of our Faves scene in sync with the writes we make to the database from the Photobox scene (i.e. when tapping the star icon to fave or unfave a photo).

To do this, we'll need to research how **[change events](https://realm.io/docs/react-native/latest/#change-events)** work in Realm, and add one of these to our Faves container components constructor, and update our UI whenever a photo is added or removed as a fave.

---

## Additional Resources

Latest Realm docs for React Native:

- [Realm Mobile Database - React Native](https://realm.io/docs/react-native/latest/)

A GUI app for working with your Realm databases:

- [Realm Browser](https://github.com/realm/realm-browser-osx)
