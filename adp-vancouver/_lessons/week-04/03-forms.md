---
layout: lesson
title: Forms
slides: ['_slides/week-04/03-forms.md']
lesson_date: 2016-10-19
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

Setup the form demos project.

```bash
git clone https://github.com/ShMcK/adp-react-form-demos.git
cd adp-react-form-demos
npm install
npm start
```

---

## Lab Activity

1. Create a form in your "REDit" project. Include:
  - saving data to the Redux store
  - validation of fields
  - styled components
  - error feedback
  - a disabled submit button when the form is invalid

---

## Lab Activity

Create a form in your REDit app using `redux-form`. It should follow the same guidelines as Exercise 2.

---

## Additional Resources

- [Redux Form](http://redux-form.com/)
- [redux-form-material-ui](http://erikras.github.io/redux-form-material-ui/)
