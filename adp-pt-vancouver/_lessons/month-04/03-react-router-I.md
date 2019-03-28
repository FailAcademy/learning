---
layout: lesson
title: React Router
slides: ['_slides/week-05/02-react-router.md']
lesson_date: 2019-05-08
---

## Pre-work

_There is no pre-work for this lesson._

---

## Learning Objectives

- Implement React Router on a project and configure basic application routing.
- Use the `Switch`, `Link`, and `NavLink` components, as well as nested routes and params for a DRYer, more robust routing scheme in an application.{% comment %}
- Parse URL query strings when using React Router 4 with the help of additional libraries.
  {% endcomment %}
- Explain the difference between schemes for keeping track of browser history using different top-level router components.

---

## Keywords

- Routing
- Browser History API

---

## Exercise 1

Visit **[Reddit](http://reddit.com)**. Click on several links and map out how the urls are structured:

- hot posts
- new posts
- submitting posts
- comment on posts
- a subReddit
- showing posts only posted in the past hour

---

## Exercise 2

Add routes to your project in `client/routes/Layout.js`:

- The Items List page (`/items`)
- The Home page (`/welcome`)
- The Share page (`/share`)
- The current viewer Profile page (`/profile`)
- The user Profile pages (`/profile/[ID_HERE]`)

Also, provide a wildcard redirect to `/items` for any undefined route using `<Redirect />`.

---

## Lab Activity

In today's lab we will finish setting up the routes for our app.

---

## Additional Resources

A good article explaining the difference between container and presentational components:

- [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.alfgvuedk)

Official React Router v4 docs:

- [React Router](https://reacttraining.com/react-router/)

General info on routing in SPAs:

- [Routing URLs in Static Web Apps](https://staticapps.org/articles/routing-urls-in-static-apps/)

From the official `react-router` docs, all about histories:

- [History](https://reacttraining.com/react-router/web/api/history)
