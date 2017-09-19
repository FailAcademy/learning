---
layout: lesson
title: Webforms using React & Redux
slides: ['_slides/week-04/02-forms-react-redux.md']
lesson_date: 2017-07-26
---

## Pre-Work

Prior to class, read through the following documentation:

- [React Docs on Forms](https://facebook.github.io/react/docs/forms.html)
- [Redux-Form Documentation](http://redux-form.com/7.0.1/)

---

## Learning Objectives

- Understand the key differences between client- and server-side validation
- Understand UX best practices for implementing client-side validation
- Compare and contrast controlled and uncontrolled components.
- Use a library for handling client-side form validation in an application
- Provide error feedback on invalid input
- Use form elements from 3rd party sources like Material-UI
- Implement a form using Redux-Form

---

## Keywords

- Controlled component
- Uncontrolled component
- Client-side validation
- Server-side validation
- Debounce

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

Add an extra field to either your **controlled** or  **uncontrolled** form.

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

Create the forms that you'll use in your Boomtown app, using the [Redux Form](http://redux-form.com) library.
You'll need to create both a user (login) form and a form for adding new Items.

Be sure to include:
  - Saving data to the Redux store
  - Validation of fields
  - Styled components
  - Error feedback

---

## Additional Resources

- [Material UI](https://github.com/callemall/material-ui)
- [Semantic UI](http://react.semantic-ui.com/)

