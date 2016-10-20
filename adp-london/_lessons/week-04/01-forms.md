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

Setup the form demos project.

```bash
git clone https://github.com/ShMcK/adp-react-form-demos.git
cd adp-react-form-demos
npm install
npm start
```

---

## Lab Activity

Create the forms that you'll use in your REDit app, using `redux-form`. It should follow the same guidelines as Exercise 2.
You'll need to create both a user (login) form and a form for creating new posts.

---

## Additional Resources

- [Redux Form](http://redux-form.com/)
- [redux-form-material-ui](http://erikras.github.io/redux-form-material-ui/)
