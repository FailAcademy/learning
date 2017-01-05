---
layout: lesson
title: React Router
slides: ['_slides/week-01/04-react-router.md']
lesson_date: 2017-01-12
---

## Pre-work

Prior to class today, be sure to complete this Codeacademy course:

- [Learn ReactJS: Part II](https://www.codecademy.com/pt/learn/react-102)

Also read through these CSS Tricks articles on using container components and React Router:

- [Leveling Up With React: React Router](https://css-tricks.com/learning-react-router/)
- [Leveling Up With React: Container Components](https://css-tricks.com/learning-react-container-components/)

---

## Learning Objectives

- Explain the difference between container components and presentational components.
- Use container components to manage data and behaviour on the front-end of an application, while using presentational components to manage the view.
- Implement React Router on a project and configure basic application routing.
- Use the `IndexRoute` and `Link` components, as well as nested routes and params for a DRYer, more robust routing scheme in an application.
- Implement `browserHistory` with the React Router to managed backward and forward page navigation in an app.

---

## Keywords

- Container component
- Presentational component
- Route
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
- The posts topic pages (`/posts/[topic-name-here]`, but note that this should just load the default `PostList` for now)

---

## Exercise 4

Time to implement switch `hashHistory` to `browserHistory` in your app.

Note that there is already an Express server configured for you in `server/index.js`, so `browserHistory` will (mostly) work out of the box.

---

## Lab Activity

In today's lab we will put the finishing touches on getting the routes working for app.

After that, the remainder of the time this week will be spent putting on the finishing touches on the Week 1 version of REDit. That means fully building out the front-end using Material UI components too!

As a stretch goal for this week, now that you have React Router implemented look into refactoring your `<PostList />` component so a relevant query string is added to the URL when the New or Popular buttons are clicked. Next, use this query string (which will be available in the component props) to re-sort REDit's posts on `componentDidUpdate()` instead.

---

## Additional Resources

A good article explaining the difference between container and presentational components:

- [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.alfgvuedk)

General info on routing in SPAs:

- [Routing URLs in Static Web Apps](https://staticapps.org/articles/routing-urls-in-static-apps/)

A thorough tutorial on React Router:

- [Beginner’s Guide to React Router](https://medium.com/@dabit3/beginner-s-guide-to-react-router-53094349669#.ldpxiu9th)

React Router video tutorials:

- [React Router & Intro to Single Page Apps with React JS](https://www.youtube.com/watch?v=1iAG6h9ff5s)
- [React Router Params & Queries](https://www.youtube.com/watch?v=ZBxMljq9GSE)

From the official `react-router` docs, all about histories:

- [Histories](https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory)
