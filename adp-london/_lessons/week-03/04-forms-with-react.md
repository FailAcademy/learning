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

---

## Exercise 1

Write a basic form in HTML that alerts the value of an input.

---

## Exercise 2

Install a repo of React-Form demos.

```shell
git clone https://github.com/redacademy/adp-react-forms.git
cd adp-react-form-demos
npm install
npm start
```

---

## Exercise 3

Add an extra field to either your **controlled** or **uncontrolled** form.

The output data should be in JSON, like the following:

```json
{
  "username": "name",
  "password": "pass"
}
```

---

## Exercise 4

Add any of the following to a form of your choosing:

- Show an error message if the password is shorter than 5 characters
- Make it impossible for a user to type a username longer than 8 characters
- Validate that a username does not contain any capital letters
- Disable the submit button if any of the fields are invalid

---

## Lab Activity

Create the forms that you'll use in your Boomtown app, using the [React Final Form](https://github.com/final-form/react-final-form) library.

You'll need to create both a user (login) form and a form for adding new Items.

Be sure to include:

- Validation of fields
- Styled components
- Error feedback

---

## Additional Resources

_Additional resources TBA._
