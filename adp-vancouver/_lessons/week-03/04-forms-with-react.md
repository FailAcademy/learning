---
layout: lesson
title: Forms with React
slides: ["_slides/week-03/04-forms-with-react.md"]
lesson_date: 2020-1-30
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

### Controlled vs. Uncontrolled Inputs

1. Create a controlled form that takes input of email and password. `Hint:` create `state` and event handlers.
2. Create an uncontrolled form that takes input of email and password. `Hint:` use `Ref`.
3. Find the difference between two forms. `Hint:` [uncontrolled vs controlled forms](https://itnext.io/controlled-vs-uncontrolled-components-in-react-5cd13b2075f9)

---

## Exercise 2

Form Validation is a critical first step in improving the UX of your app. <br/>

`Client-Side validation is never a security measure.`

Create and validate your form that takes input of email and password with Final-Form following this example from the [documentation](https://final-form.org/docs/react-final-form/examples/record-level-validation).

---

## Exercise 3

### A "Final" Rebuild

Now that you know how to build forms using React and React Final-Form, return to the
form you built in _Exercise 2_ and rebuild it using Material UI input components.

- Validate all inputs and display error messages (on submit only. Hint: add a submit button)

- Remove error messages when the user begins to type in the invalid input (Hint: `meta` prop of the `Field` component)

- _Only_ if the form is valid, display the resulting input values in the UI

---

## Lab Activity

Start to write share Item form that you'll use in your Boomtown app, using the [React Final Form](https://github.com/final-form/react-final-form) library.

---

## Additional Resources

- [In Search of the Ultimate User Experience](https://www.typeform.com/blog/human-experience/in-search-of-the-ultimate-user-experience/) (Typeform blog)
- [React Final Form Examples](https://github.com/final-form/react-final-form#examples
