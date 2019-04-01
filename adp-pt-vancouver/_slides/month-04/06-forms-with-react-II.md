---
layout: slidedeck
title: Forms with React II Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Forms with React

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1.  Using React Final-Form
2.  Material UI Input Components
3.  Validating & Submitting forms (Final-Form / MaterialUI)

---

template: inverse

#Using React Final-Form

---

#The `Form` Component

First, wrap your HTML form in the `Form` component:

```jsx
<Form
  /* Some important props are missing */
  render={() => (
    <form
      onSubmit={() => {
        /* We're going to replace this */
      }}
    >
      /* Inputs here... */
    </form>
  )}
/>
```

React final form makes use of the **Render Prop** pattern. Where else have we seen this pattern?

---

#The `Form` Component

Now, add the necessary props:

```js
<Form
  onSubmit={onSubmit}
  validate={validate}
  render={({ handleSubmit, pristine, invalid }) => (
    <form onSubmit={handleSubmit}>/* Inputs here... */</form>
  )}
/>
```

What is the value of `onSubmit` and `validate` ? <br/>
What are the values passed to the render prop ? <br/>

---

#The `Form` Component

The `validate` and `onSubmit` functions will be defined as class methods on the containing component,
or as named functions in the scope of the component that is rendering the form, for example:

```js
// Both get called with values from wrapped fields!
const validate = values => {};
const onSubmit = values => {};

const myForm = () => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit, pristine, invalid }) => (
      <form onSubmit={handleSubmit}>/* Inputs here... */</form>
    )}
  />
);
```

---

#The `Field` Component

Once you've wrapped your form, you'll do the same with the HTML inputs, for example:

```js
<Field
  render={({ input, meta }) => (
    <div>
      <label>Bio</label>
      <textarea {...input} />
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </div>
  )}
/>
```

What is the `meta` argument? <br/>
Where do the `meta` and `input` parameters get their value?

---

#Passing props

You may have noticed this code on the last slide:

```jsx
//...
render={({ input, meta }) => (
    // ...
    <textarea {...input} />
)
// ...
```

The `input` argument passed to the `Field` render prop contains all the necessary props for controlling the input it's wrapping.
Don't forget to pass these to your wrapped inputs, or your form will not track input values like you expect. Using the
**Object Spread** operator is a convenient way of transferring all props.

---

#Form Validation

Form validation is a critical first step in improving the UX of your app. <br/>

## Client-Side validation is never a security measure.

Validating forms with Final-Form couldn't be easier.
Be sure to [check the documentation](https://github.com/final-form/react-final-form#examples).

---

#Submitting

Final-Form is controlling your HTML form. Be sure to remove the `action` attribute from your HTML `form` tag. <br/>
Much like validation, Final-Form lets you determine how to submit data from your form using the `onSubmit` function you defined earlier.
This usually means you'll need to make an AJAX request with the form data as JSON.

- Will the `onSubmit` function get called if your validation function returns an object containing error messages?

---

template: inverse

# Material UI

---

# Material UI

Working with Material UI components is the same as working with regular inputs. Be sure to pass the input props from your `Field` component using the
technique we described earlier.

---

#Exercise 3

Now that you know how to build forms using React and React Final-Form, return to the
form you built in _Exercise 2_ and rebuild it using React Final-Form and Material UI input components.

- Validate all inputs and display error messages (on submit only. Hint: add a submit button)
- Remove error messages when the user begins to type in the invalid input (Hint: `meta` prop of the `Field` component)
- _Only_ if the form is valid, display the resulting input values in the UI

---

# What We've Learned

- The basics of using React Final-Form
- What is meant by "Render Props"
- How to Validate & Submit a form (Final-Form / MaterialUI)

---

template: inverse

# Questions?

{% endhighlight %}
