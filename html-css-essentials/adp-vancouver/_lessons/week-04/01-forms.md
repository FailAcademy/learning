---
layout: lesson
title: Forms
slides: ['_slides/week-04/03-forms.md']
lesson_date: 2016-10-17
---

## Pre-Work

Prior to class, read through the following documentation:

- [React Docs on Forms](https://facebook.github.io/react/docs/forms.html)

---

## Learning Objectives

- Create form elements for text fields, text areas, numbers, and select menus.
- Compare and contrast controlled and uncontrolled components.
- Use `redux-form` for handling form functionality in an application.
- Provide error feedback on invalid input.
- Disable the submit button when input is invalid.
- Use form elements from the Material-UI library.

---

## Keywords

- Controlled component
- Uncontrolled component
- `onChange`
- `onSubmit`
- `defaultValue`
- `handleSubmit`
- Validation

---

## Exercise 1

Write a basic form in HTML only that alerts the value of an input.

---

## Exercise 2

Setup the form demos project.

```bash
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

- show an error message if the password is shorter than 5 characters
- make it impossible for a user to type a username longer than 8 characters
- validate that a username does not contain any capital letters
- disable the submit button if any of the fields are invalid

---

## Lab Activity

1. Create a form in your "REDit" project. Include:
  - saving data to the Redux store
  - validation of fields
  - styled components
  - error feedback
  - a disabled submit button when the form is invalid

---

## Additional Resources

- [Redux Form](http://redux-form.com/)
- [redux-form-material-ui](http://erikras.github.io/redux-form-material-ui/)
