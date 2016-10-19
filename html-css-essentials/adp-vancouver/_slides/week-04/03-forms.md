---
layout: slidedeck
title: Forms in React Slides

---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---
# Forms in React

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

## Exercise 1

Write a basic form in HTML only that alerts the value of an input.

---

# Basic Form

`onSubmit` will be triggered when the button with type `submit` is clicked.

```html
<form onSubmit="alert(document.getElementById('name').value)">
  <input id="name" type="text" />
  <button type="submit">Submit</button>
</form>
```

We can capture the input value using a selector.

---

# Agenda

Building forms in React

1. Controlled vs. Uncontrolled components
2. React form events
3. Redux-Form
4. Form validation
5. Displaying errors


---

# Exercise 2

Install a repo of React-Form demos.

```shell
git clone https://github.com/ShMcK/adp-react-form-demos.git
cd adp-react-form-demos
npm install
npm start
```

---

# React Forms

Forms in React are not as intuitive as you might expect.

Try the following input.

```html
  <input
    type="text"
    value="expected"
  />
```

- What happens? Why?

---

# Controlled & Uncontrolled

In React, form elements are considered "controlled" or "uncontrolled".
Read [React Forms](https://facebook.github.io/react/docs/forms.html).

- With a partner, compare the "controlled" and "uncontrolled" input.
- Act out the differences, one person is a "controlled" input with a component parent, and the other "uncontrolled" with a parent.

---

# React Form Events

React has two major form events you should know:

- `onChange`
- `onSubmit`

---

# onChange

`onChange` is attached to an input and called every time an input value changes.

```html
<input onChange={(value) => console.log(value)} />
```

- What might we use `onChange` for?

---

# onChange

`onChange` is attached to an input and called every time an input value changes.

```html
<input onChange={(value) => console.log(value)} />
```

- What might we use `onChange` for?

Updating an input's value every time the value changes.

---

# Controlled

A controlled components handles it's own component state.

1. `onChange` calls `handleChange` method
2. `handleChange` updates component `state`
3. `state` change updates component view

---

# Form Values

Form values create an object with keys matching the "name" given to the inputs.

```html
<input name="title" defaultValue="React Forms"/>
<input name="description" defaultValue="Some practice"/>
```

Data:

```js
{
  title: "React Forms",
  description: "Some practice"
}
```

---

# onSubmit

`onSubmit` is attached to a form, and called every time a "submit" event is triggered.

```html
<form onSubmit={(values) => console.log(values)}>
  {/* ... inputs ... */}
</form>
```

- How can we trigger an `onSubmit` event?

---

# onSubmit

We can trigger an `onSubmit` event by setting the type of a button or input to "submit".

```html
<form onSubmit={(values) => console.log(values)}>
  {/* ... inputs ... */}
  <button type="submit">Submit</button>
</form>
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

# A Common Issue

The following code will throw an error on submit. Why?

```js
constructor(props) {
  super(props);
  this.state = { values: '' };
}
onSubmit(values) {
  this.setState({ values });
}
render() {
  return <form onSubmit={this.onSubmit}>
    {/* ... */}
  </form>
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
template: inverse
# Redux Form

---

# Redux Form

Redux form is a popular library for... well... using forms with Redux.

- form state props (valid)
- saves state to Redux store
- validation helpers (error messages)

[Docs: Redux-Form](http://redux-form.com/6.0.1/).

---

# Setup

Add a formReducer for Redux form.

```js
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const reducers = {
  // ... your other reducers here ...
  form: formReducer     // <---- Mounted at 'form'
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)
```

[Docs: Getting Started](http://redux-form.com/6.0.2/docs/GettingStarted.md/)

---

# reduxForm

Connect a component to reduxForm. Add a unique form name.

```js
class FormComponent extends React.Component {/* ... */}

FormComponent = reduxForm({
  form: 'form1'
})(FormComponent);
```

[Docs: reduxForm](http://redux-form.com/6.0.2/docs/api/ReduxForm.md/)

---

# State

The **form name** corresponds to a **key** in your redux store.

```js
console.log(store.getState());

/*
{
  form: {
    form1: {
      // your form data here
    }
  }
}
*/
```

---

# Props

A component connected with `reduxForm` passes in several props.

```js
class FormComponent extends React.Component {
  render() {
    console.log(this.props);
    return <form></form>
  }
}
```

- Which props are added by Redux Form?

---

# Props

What might we use each of these props for?

- dispatch
- pristine / dirty
- valid / invalid
- submitting
- error

[Docs: Props](http://redux-form.com/6.0.2/docs/api/Props.md)

---

# Field

Field's are input components used with "redux-form".

```html
<Field
  name="myField"
  component="input"
/>
```

Field's require a **name** and **component**.

See other optional properties: [Docs: Field](http://redux-form.com/6.0.2/docs/api/Field.md/)

---

# Custom Field's

You can create your own custom `<Field />` components.

```js
// outside your render() method
const myCustomField = (field) => (
  <div className="input-row">
    <input {...field.input} type="text"/>
    { field.meta.touched &&
      field.meta.error &&
      <span className="error">{field.meta.error}</span>
    }
  </div>
);
```

---

# handleSubmit

Redux-Form adds a `handleSubmit` prop, which can be added to your form.

```html

<form onSubmit={
  this.props.handleSubmit((values) => console.log(values))
}>
```

`handleSubmit`, as the name implies, calls a function when data is submitted.

---

# connect

"react-redux" can be called after "redux-form" is applied.

```js
FormComponent = reduxForm({ form: 'form1' })(FormComponent);
FormComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormComponent);
```

`connect` connects the redux **state** and **dispatch** to the component.

---

# Submit Function

We can pass a submit function to our `handleSubmit`.

```js
import submit from './submit';

/*... */
<form onSubmit={handleSubmit(submit)}>
```

[Docs: Submit](http://redux-form.com/6.0.2/examples/submitValidation/)

---

# Submit Function

The submit function can be used to update the state.

```js
import store from '../store';

function submit(values) {
  // save!
  store.dispatch(saveForm(values));
}
export default submit;
```

---

# Validation Errors

Validation errors can be handled with `SubmissionError`.

```js
import { SubmissionError } from 'redux-form';

function submit(values) {
   if (!values.length) {
     throw new SubmissionError({
       name: 'Name does not exist',
       _error: 'Must include a name'
     });
   } else {
     store.dispatch(saveForm(values));
   }
}
export default submit;
```

[Docs: SubmissionError](http://redux-form.com/6.0.2/docs/api/SubmissionError.md/)

---

# Displaying Errors

`touched` & `error` are both props passed in by "redux-form".

When does the following error get displayed?

```js
const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)
```

---

# Disabled Button

We know how to disable a button in HTML.

```html
<button type="submit" disabled={true}>Submit</button>
```

- How can we *disable* the submit button when the form is **invalid** or is **submitting**?

---


# Using Meta Props

We can use the "meta" props to specify our disable property.

- invalid: true
- submitting: true

```html
<button
  type="submit"
  disabled={invalid || submitting}
>Submit</button>
```

---

# Performance Experiment

- How often do you think your form component is re-rendered?

---

# Performance Experiment

Add the following code to the top of your form.

```js
render() {
  console.log('rendered');
}
```
- When is a form re-render triggered?


---

# Material-UI

We can use "material-ui" form components easily by using [redux-form-material-ui](http://erikras.github.io/redux-form-material-ui/).

```html
 <Field
  name="name"
  component={TextField}
  hintText="Name"
  floatingLabelText="Name"
/>
```

[Docs: MaterialUi](http://redux-form.com/6.0.2/examples/material-ui/)

---

# Custom Components

Material-UI components are created with a simple [wrapper component](https://github.com/erikras/redux-form-material-ui/blob/master/src/createComponent.js).

Feel free to create your own wrapper for any other UI library.

---

# Review

1. Controlled vs. Uncontrolled components
2. React Form events
3. Redux Form
4. Form validation
5. Displaying errors

---

## Challenge

Create a form in your "REDit" project. Include:
  - saving data to the Redux store
  - validation of fields
  - styled components
  - error feedback
  - a disabled submit button when the form is invalid


{% endhighlight %}
