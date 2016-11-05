---
layout: lesson
title: Introducing React
slides: ['_slides/week-01/02-intro-to-react.md']
lesson_date: 2016-09-27
---

## Pre-work

Prior to class today, be sure to complete this Codeacademy course:

- [Learn ReactJS: Part I](https://www.codecademy.com/pt/learn/react-101)

---

## Learning Objectives

- Identify how a UI/IA can be broken down into a component hierarchy.
- Define what the Virtual DOM is and explain how it helps increase browser performance.
- Build components by extending the React.Component class.
- Use the `ReactDOM.render()` method to render components in a web application.
- Use JSX (JavaScriptXML) to write mark-up for React components.
- Use ES2015 features such as class syntax, imports and exports, and arrow functions in relation to React components and project organization.
- Describe the role of the props object in React, and pass arguments into React components using props like HTML attributes.
- Dynamically create an array of components and their props using data stored in an array of objects along with the `.map()`, `.sort()`, and `.filter()` functions.
- Explain why it is essential to supply a unique "key" for each item in an array containing dynamic child components.
- Write `Proptype` declarations to catch invalid props.
- Use CSS modules to apply styles to React components.

---

## Keywords

- Component
- React node
- Virtual DOM
- JavaScriptXML (JSX)
- Babel
- Props
- Proptype

---

## Exercise 1

We're going to build a to-do app together with React.

Let's start by determining how to chunk the mock-up into components:

<p style="display: flex; justify-content: center;" }>
	<img src="/public/exercises/react-todo-mockup.png" alt="To-do mock-up" />
</p>

When determining how to chunk the UI into components, remember that (ideally) a component should only do one thing.

Illustrate your component hierarchy by sketching it out on a sheet of paper, or on a near-by whiteboard wall.

---

## Exercise 2

Your turn! Time to create your first React component...

Open a Codepen and try creating a React Component that simply adds the "So Much To Do" `<h1>` to an app.

Note that in Codepen, you don't explicitly import `React` or `ReactDOM`, but you will need to go to the Settings tab in the JS panel to "Quick-add" these libraries to your pen.

---

## Exercise 3

Open `App.js` in your React app and delete the default content in the `render()`.

In it's place, set up an array as a constant called `todos` and add 'Learn React' as the only item.

Next, use what you just learned about `.map()` and iterating over arrays in a component to list the to-do array item inside an unordered list element.

You can also remove the default logo `import` and delete the file too.

---

## Exercise 4

Add CSS to your app by copying the styles from **[the files in this gist](https://gist.github.com/mandiwise/d6c9cb0a6e9edc20e24b6cd973cdb6d7)**, clearing out the default styles in `App.css` and `index.css`, and pasting the copied styles respectively. Also wrap the `<ul>` in a `<div>` with a class of `todo-list` (remember how to treat class attributes in React).

Finally, create a stateless functional component called `ToDo` and move your list item into it, then call `.map()` on the new `<ToDo>` component instead.

Be sure to move the `key` attribute from your `<li>` onto the `<ToDo />` inside the `.map()` function. Your app will be broken now but we'll find out why in a minute!

---

## Exercise 5

Based on what you just learned about props, fix the reference error in the `ToDo` component.

Specifically, think about how you will pass the `todo` item from the the `App` component to the `ToDo` component as a prop called `item`.

Try using the **destructuring approach** when accessing the `item` prop in the `ToDo` component.

While you're at it, add `<h1>So Much To Do</h1>` to the top of your to-do list to give it a title.

---

## Exercise 6

Our to-do items will need to be a bit more complex than they are. Rather being derived from a simple array of string values, they will need to be derived from an **array of objects** where each object has an `id`, `title`, and `complete` property.

```js
render() {
   // const todos = ['Learn React']; REMOVE THIS!
   const todos = [
      { id: 0, title: 'Learn React', complete: false }
   ];
   // ...
}
```

Make this change. Your app will be broken again...what needs to be updated in your `ToDo` component now?

---

## Exercise 7

Our app needs a couple more props. First, create a `ToDoCount` component with a `number` prop to display the number of to-dos in the list **with** the word "todo" or "todos" displayed depending on how many items are present.

Next, create a `ClearButton` component with `removeCompleted` prop. This component's prop will be set to function that will fire on the button's `onClick` event.

Once you've created your new components, add them to your `App` inside of a `<div>` with a class of `todo-admin`. You can pass any integer for the `number` prop and an empty string for the `removeCompleted` prop for now.

---

## Exercise 8

Add proptypes for the `ToDo`, `ToDoCount`, and `ClearButton` components.

We need our `todo` prop to be an object with a specific set of properties, so you will need to use `PropTypes.shape()` for that. Use the React doc's reference on **[Prop Validation](https://facebook.github.io/react/docs/reusable-components.html#prop-validation)** to find out how to do this.

Make all of the props for all components **required**.

**Note:** You will end up with a warning in your console for one of your props if you successfully completed the exercise. Why does this happen?

---

## Lab Activity

In today's lab we will begin working on the the REDit application.

### Set-up

REDit will require a more complicated set-up than what we get with Create React App, so you'll need to begin by downloading the **[RED React Seed](https://github.com/redacademy/red-react-seed)** instead. Follow the installation instructions in the README.

Take a look at the directory structure inside RED React Seed&mdash;again, it's a bit more complex than what we've seen with the to-do app. Pay particular attention to how the sample components are organized into named sub-directories with `index.js` files. This is the pattern we will follow to build out all of the components the application, so be sure you thoroughly understand what's going on here.

**Note:** RED React Seed has sub-directories for **components** and **containers**. Don't worry about how to differentiate between the two yet, just put everything into `/components` for now and we'll have a deeper discussion about this during the React Router lesson.

### Styles

We will primarily use **[Material UI](http://www.material-ui.com/#/)** to style our REDit app. Spend some time reviewing the Material UI docs site and jot down some notes about what components you think you'll need to use from this library in the REDit app.

Material UI has already been added as project dependency in the RED React Seed, but you should also take some time to review **[its GitHub repo README](https://github.com/callemall/material-ui)**  too.

We will still need to write some extra CSS for our app, and to do that we'll be using [CSS modules](https://github.com/css-modules/css-modules). For all additional component-specific CSS that you need to write for your app, you'll want to follow the example set out in the `App` component in the RED React Seed.

### Code

The remainder of today's lab will be spend roughing-out the component structure for the REDit app. Ultimately, we will need to create the following component structure for our app:

```
<Layout />
|- <HeaderBar />
|- <App />
   |- <Categories />
      |- <Week />
   |- <Welcome />
   |- <LoginForm />
   |- <CreatePost />
   |- <PostList />
      |- <Post />
```

During Week 1, the only component that will use an ES2015 class will be the `PostList` component. The rest will all be **functional stateless components**.

Knowing this, rough-out the directory/component structure for all of the required components for this app.

---

## Additional Resources

From Facebook's official React docs:

- [Official React Docs](https://facebook.github.io/react/docs/getting-started.html)
- [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)

Patterns used in React development:

- [React Patterns](http://reactpatterns.com/)
- [React.js in patterns](http://krasimirtsonev.com/blog/article/react-js-in-design-patterns)

Some other helpful React tutorials and ebooks:

- [Plotly Academy](http://academy.plot.ly/)
- [React Enlightenment](http://www.reactenlightenment.com/)

Recorded talks from React.js Conf:

- [React.js Conf 2016](https://www.youtube.com/playlist?list=PLb0IAmt7-GS0M8Q95RIc2lOM6nc77q1IY)

More about CSS Modules:

- [CSS Modules: Welcome to the Future](https://glenmaddern.com/articles/css-modules)

Helpful resource for understanding the difference between `.map()`, `.filter()`, and `.reduce()`:

- [Array Map, Filter and Reduce in JS](http://atendesigngroup.com/blog/array-map-filter-and-reduce-js)
