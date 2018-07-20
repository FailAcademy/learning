---
layout: lesson
title: Forms with React
slides: ['_slides/week-03/04-forms-with-react.md']
lesson_date: 2018-07-19
---

## Pre-Work

Prior to class, read through the following documentation:

- [React Docs on Forms](https://facebook.github.io/react/docs/forms.html)

---

## Learning Objectives

- Use form components from third-party libraries including React Final Form and Material UI.
- Describe UX best practices for implementing client-side validation.
- Use a library for handling form validation and submission in an application.
- Provide error feedback on invalid input.
- Distinguish between controlled and uncontrolled components.

---

## Keywords

- Client-side validation
- Controlled component
- Uncontrolled component
- Render prop

---

## Exercise 1

### Think Outside the Box.

Typeform built a business out of exceptional form UX. How did they do it?

Partner up and come up with at least 5 ways Typeform breaks with the typical conventions we're used to, when it comes to the design of Web Forms.

In 15 minutes we'll discuss what you came up with.

---

## Exercise 2

### Controlled vs. Uncontrolled Inputs

In this course we'll learn how to build amazing Web Forms using React. Before we start there a few
basics we'll need to understand when it comes to working with forms in React.

[![CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/y3vv68m9j9)
Click the button above and follow the instructions in the `@TODO` to learn the basics of how React handles form inputs.

---

## Exercise 3

### A "Final" Rebuild

Now that you know how to build forms using React and React Final-Form, return to the
form you built in _Exercise 2_ and rebuild it using React Final-Form and Material UI input components.

- Validate all inputs and display an error messages (on submit only. Hint: add a submit button)
- Remove error messages when the user begins to type in the invalid input (Hint: `meta` prop of the `Field` component)
- _Only_ if the form is valid, display the resulting input values in the UI

---

## Lab Activity

Start to write share Item form that you'll use in your Boomtown app, using the [React Final Form](https://github.com/final-form/react-final-form) library.

---

## Additional Resources

- [In Search of the Ultimate User Experience](https://www.typeform.com/blog/human-experience/in-search-of-the-ultimate-user-experience/) (Typeform blog)
- [React Final Form Examples](https://github.com/final-form/react-final-form#examples
