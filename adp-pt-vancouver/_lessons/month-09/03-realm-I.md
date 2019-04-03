---
layout: lesson
title: Realm Databases
slides: ['_slides/month-09/01-realm-I.md']
lesson_date: 2019-07-22
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

## Additional Resources

Latest Realm docs for React Native and related tutorials:

- [Realm Mobile Database - React Native](https://realm.io/docs/react-native/latest/)
- [Realm Academy](https://academy.realm.io/)
