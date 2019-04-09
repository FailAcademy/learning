---
layout: lesson
title: React Router II
slides: ['_slides/month-04/04-react-router-II.md']
lesson_date: 2019-09-17
---

## Pre-work

_There is no pre-work for this lesson._

---

## Learning Objectives

- Parse URL query strings when using React Router 4 with the help of additional libraries.
- Explain the difference between schemes for keeping track of browser history using different top-level router components.

---

## Keywords

- Routing
- Browser History API

---

## Exercise 1

Add routes to your project in `client/routes/Layout.js`:

- The Items List page (`/items`)
- The Home page (`/welcome`)
- The Share page (`/share`)
- The current viewer Profile page (`/profile`)
- The user Profile pages (`/profile/[ID_HERE]`)

Also, provide a wildcard redirect to `/items` for any undefined route using `<Redirect />`.

---

## Lab Activity (Next Class)

In today's lab we will finish setting up the routes for our app.

---

## Additional Resources

General info on routing in SPAs:

- [Routing URLs in Static Web Apps](https://staticapps.org/articles/routing-urls-in-static-apps/)

From the official `react-router` docs, all about histories:

- [History](https://reacttraining.com/react-router/web/api/history)
