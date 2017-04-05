---
layout: lesson
title: React Router
slides: ['_slides/week-01/04-react-router.md']
lesson_date: 2017-01-12
---

## Pre-work

Prior to class today, watch the videos in this tutorial:

- [Add routing to React apps using React Router v4](https://egghead.io/courses/add-routing-to-react-apps-using-react-router-v4)

Also read through this CSS Tricks articles on using container components:

- [Leveling Up With React: Container Components](https://css-tricks.com/learning-react-container-components/)

---

## Learning Objectives

- Explain the difference between container components and presentational components.
- Use container components to manage data and behaviour on the front-end of an application, while using presentational components to manage the view.
- Implement React Router on a project and configure basic application routing.
- Use the `Switch`, `Link`, and `NavLink` components, as well as nested routes and params for a DRYer, more robust routing scheme in an application.
- Parse URL query strings when using React Router 4 with the help of additional libraries.
- Explain the difference between schemes for keeping track of browser history using different top-level router components.

---

## Keywords

- Container component
- Presentational component
- Routing
- Query string
- [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
- Browser History API

---

## Exercise 1

Review the components that you have created for the REDit app so far. What should be classified as a container component, and what should be classified as a presentational component?

Do some project reorganization based on these observations. Remember that your `import` file paths will likely break when you do this and you'll need to fix them!

---

## Exercise 2

Visit **[Reddit](http://reddit.com)**. Click on several links and map out how the urls are structured:

- hot posts
- new posts
- submitting posts
- comment on posts
- a subReddit
- showing posts only posted in the past hour

---

## Exercise 3

Based on what you just learned in the preceding examples, apply this to your project now. You will need to create routes that point users to:

- The Welcome page (`/`)
- The Login page (`/login`)
- The New Post page (`/posts/new`)
- The posts topic pages (`/posts/[ID_HERE]`, but note that this should just load the default `PostList` for now)
- A 404 page

---

## Lab Activity

In today's lab we will finish setting up the routes for our app.

After that, the remainder of the time this week will be spent putting on the finishing touches on the Week 1 version of REDit. That means fully building out the front-end using Material UI components too!

As a stretch goal for this week, now that you have React Router implemented look into refactoring your `PostList` container component so a relevant query string is added to the URL when the Newest or Popular buttons are clicked in the `PostToolbar`.

Next, use this query string (which will be available in the `location` prop for the component) to re-sort REDit's posts on `componentWillUpdate()` instead. 

There is no built-in way to parse a query string in React Router anymore, so you'll need to use `URLSearchParams` for that, and be sure to add a polyfill for browsers that don't support it yet.

Lastly, by default `?sort=newest` should be set for your route so you'll need to use a `Redirect` component to add this default query string whenever someone navigates directly to `/posts/:id/`.

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
