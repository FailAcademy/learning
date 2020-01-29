---
layout: slidedeck
title: Forms with React Slides
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

1.  UX Ground Rules for Web Forms
2.  Controlled vs. Uncontrolled Inputs in React
3.  Using React Final-Form
4.  Material UI Input Components
5.  Validating & Submitting forms (Final-Form / MaterialUI)

---

template: inverse

# UX Ground Rules for Web Forms

---

.left-column[

## Things to remember

]

.right-column[
This is by no means a comprehensive list of **UX**
details to keep in mind, but if you can achieve these you're on your way to providing a frictionless Web Form experience
for your users.

- Forms must provide feedback
- Don't show validation messages when not necessary
- Make sure error messages are descriptive
- Simplify feedback as much as possible (without violating 1 - 3)

]

---

# Think Outside the Box

You're forms don't have to be boring or standard. In fact, there is enough interactivity in the average web form that you could make a product out of it.

This is exactly what [Typeform](https://www.typeform.com/) has done. <br/>

_Head over to typeform.com and play around with their forms!_

---

template: inverse

# Uncontrolled vs. Controlled Inputs in React

---

# Uncontrolled Component (Form)

Uncontrolled components do not have a state to store all the form data (inputs). It relies on the DOM to store the form inputs. Instead of having event handlers to update the component state, the [ref](https://reactjs.org/docs/refs-and-the-dom.html) is used to retrieve form values (input) from the DOM.

---

# Uncontrolled Form

```js
class App extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  onSubmit = () => {
    console.log(this.input.current.value);
  };

  render() {
    return (
      <form>
        <input type="text" placeholder="Your message here.." ref={this.input} />
        <input type="submit" value="submit" onClick={this.onSubmit} />
      </form>
    );
  }
}
```

---

# When to Use `createRef`

When coming from web development without React, accessing DOM elements directly may be a more familiar pattern:

```js
const input = document.getElementById("#some-input");
```

Using React means **_avoiding direct DOM access_**, in favour of the performance gains given by by React's "Virtual DOM".
It's for this reason that when using React we'll prefer using Controlled Components, unless there is a special case where direct DOM access can't be avoided.

---

# Controlled Component (Form)

A controlled component has a `state` to handle the form data. All the form data (inputs) should be stored in this state to make it `the single source of truth`.

---

# Controlled Form

```js
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }
  updateMessage = newText => {
    this.setState({ message: newText });
  };
  render() {
    return (
      <div className="App">
        <input
          type="text"
          placeholder="Your message here.."
          onChange={event => this.updateMessage(event.target.value)}
        />
      </div>
    );
  }
}
```

---

# Exercise 1

### Controlled vs. Uncontrolled Inputs

1. Create a controlled form that takes input of email and password. `Hint:` create `state` and event handlers.
2. Create an uncontrolled form that takes input of email and password. `Hint:` use `Ref`.
3. Find the difference between two forms. `Hint:` [uncontrolled vs controlled forms](https://itnext.io/controlled-vs-uncontrolled-components-in-react-5cd13b2075f9)

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

# Exercise 2

Form Validation is a critical first step in improving the UX of your app. <br/>

`Client-Side validation is never a security measure.`

Create and validate your form that takes input of email and password with Final-Form following this example from the [documentation](https://final-form.org/docs/react-final-form/examples/record-level-validation).

---

#Submitting

Final-Form is controlling your HTML form.

Much like validation, Final-Form lets you determine how to submit data from your form using the `onSubmit` function.
This usually means you'll need to make an AJAX/API request with the form data to your server.

- Will the `onSubmit` function get called if your validation function returns an object containing error messages?

---

template: inverse

# Material UI

---

# Material UI

Working with Material UI components is the same as working with regular inputs. Be sure to pass the input props from your `Field` component using the
technique we described earlier.

```js
{%raw %}
<Field // react-final-form component
  name="description"
  render={({ input, meta }) => (
    // Material UI Component
    <Input
      id="title"
      type="text"
      inputProps={{
        ...input,
        autoComplete: "off"
      }}
      value={input.value}
    />
  )}
/>
{% endraw %}
```

---

#Exercise 3

Now that you know how to build forms using React and React Final-Form, return to the
form you built in _Exercise 2_ and rebuild it using Material UI input components.

- Validate all inputs and display error messages (on submit only. Hint: add a submit button)

- Remove error messages when the user begins to type in the invalid input (Hint: `meta` prop of the `Field` component)

- _Only_ if the form is valid, display the resulting input values in the UI

---

# What We've Learned

- UX Ground Rules for Web Forms
- How to use Uncontrolled vs. Controlled Inputs in React
- The basics of using React Final-Form
- What is meant by "Render Props"
- The basics of Material UI Input Components
- How to Validate & Submit a form (Final-Form / MaterialUI)

---

template: inverse

# Questions?

{% endhighlight %}
