# Forms

## Setup

```shell
git clone https://github.com/ShMcK/adp-react-form-demos.git
cd adp-react-form-demos
npm install
npm start
```

Forms in React are not as intuitive as you might expect.

Try the following input.

```html
  <input
    type="text"
    value="expected"
  />
```

-- Why does the value not update?

*( There are no events attached to change the value. The value is static. )*

-- How can we make the input react to changes?

Change value to `defaultValue`.

```html
  <input
    type="text"
    defaultValue="expected"
  />
```

## Controlled & Uncontrolled

In React, form elemets are considered "controlled" or "uncontrolled".
Read [React Forms](https://facebook.github.io/react/docs/forms.html).

-- With a partner, compare the "controlled" and "uncontrolled" input.
-- Act out the differences, with one is a "controlled" input with a component parent, and the other "uncontrolled" with a parent.

See the example for help.

Controlled inputs hold state within the component, while uncontrolled inputs hold their own state. Controlled inputs give us more "control", hence the name.


## React Form Events

React has two major form events you should know:

- `onChange`
- `onSubmit`

### onChange

```html
<input onChange={(value) => console.log(value)} />
```

`onChange` is attached to an input and called every time an inputs value changes.

-- In controlled components, what do we use `onChange` for?

Updating the state of the component with the new input values.

### Form Values

Form values are collected inside of an object. The keys pair up with the "name" given to the inputs.

```html
<input name="title" defaultValue="React Forms"/>
<input name="description" defaultValue="Some practice"/>
```

These inputs will result in the following **values**:

```js
{
  title: "React Forms",
  description: "Some practice"
}
```

### onSubmit

`onSubmit` is attached to a form, and called every time a "submit" event is triggered.

```html
<form onSubmit={(values) => console.log(values)}>
  {/* ... inputs ... */}
</form>
```

-- How can we trigger an `onSubmit` event?

We can trigger an `onSubmit` event by setting the type of a button or input to "submit".

```html
<form onSubmit={(values) => console.log(values)}>
  {/* ... inputs ... */}
  <button type="submit">Submit</button>
</form>
```

## Controlled vs. Uncontrolled

A quick review.

| Controlled               | Uncontrolled             |
|--------------------------|--------------------------|
| onSubmit -> get state    | onSubmit -> get refs     |
| onChange -> update state | nothing                  |

### Bind

-- The following code will throw an error on submit. Why?

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

`onSubmit` does not have the correct `this` context, so it can't find `this.setState`.

-- How can we fix this?

```html
<form onSubmit={this.onSubmit.bind(this)}></form>
```

Now onSubmit passes the correct context. Also not that we don't have to pass the `values` param on, as it is automatically called with the param.

## Redux-Form

Redux form is a popular library for... well... using forms with Redux.

[Redux-Form](http://redux-form.com/6.0.1/).

- form state props (valid)
- saves state to Redux store
- validation helpers (error messages)

### Setup

[Docs: Getting Started](http://redux-form.com/6.0.2/docs/GettingStarted.md/)

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

### reduxForm


```js
class FormComponent extends React.Component {/* ... */}

FormComponent = reduxForm({
  form: 'form1'
})(FormComponent);
```

[Docs:reduxForm](http://redux-form.com/6.0.2/docs/api/ReduxForm.md/)

### Props

Which props are added by `reduxForm`.

```js
class FormComponent extends React.Component {
  render() {
    console.log(this.props);
    return <form></form>
  }
}
```

### Props

What might we use these props for?

* pristine / dirty
* valid / invalid
* submitting
* error

[Docs:Props](http://redux-form.com/6.0.2/docs/api/Props.md)

### Field

Field's require a **name** and **component**.

```html
<Field
  name="myField"
  component="input"
/>
```

See other optional properties: [Docs:Field](http://redux-form.com/6.0.2/docs/api/Field.md/)

### Creating a Field

Create your own custom `<Field />` components.

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

### handleSubmit

Redux-Form adds a `handleSubmit` prop, which can be added to your form.

`handleSubmit`, as the name implies, calls a function when data is submitted.

```html

<form onSubmit={
  this.props.handleSubmit((values) => console.log(values))
}>
```

### connect

"react-redux" can be called after "redux-form" is applied.

This allows us to connect our redux **state** and **dispatch** to the component.

```js
FormComponent = reduxForm({ form: 'form1' })(FormComponent);
FormComponent = connect(mapStateToProps, mapDispatchToProps)(FormComponent);
```

### submit

We can pass a

```js
import submit from './submit';

/*... */
<form onSubmit={handleSubmit(submit)}>
```

[Docs:Submit](http://redux-form.com/6.0.2/examples/submitValidation/)


### Submit Function

```js
import store from '../store';

function submit(values) {
  // save!
  store.dispatch(saveForm(values));
}
export default submit;
```

### Validation Error

Validation errors can be handled with `SubmissionError`.

```js
import { SubmissionError } from 'redux-form';
import store from '../store';

function submit(values) {
    // no name is added
   if (!values.length) {
     throw new SubmissionError({
       name: 'Name does not exist',
       _error: 'Must include a name'
     });
   } else {
     // save!
     store.dispatch(saveForm(values));
   }
}
export default submit;
```

[Docs:SubmissionError](http://redux-form.com/6.0.2/docs/api/SubmissionError.md/)

### Displaying errors

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

### Disabled Button

How can we disable the submit button when the form is invalid or is submitting?

### Using Meta Props

We can use the "meta" props:

- invalid
- submitting

```html
<button
  type="submit"
  disabled={invalid || submitting}
>Submit</button>
```

### Performance Experiment

Add the following code to the top of your form.

When is a form re-render triggered?

```js
render() {
  console.log('rendered');
}
```

### Material-UI

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

### Custom Components

Material-UI components are created with a simple [wrapper component](https://github.com/erikras/redux-form-material-ui/blob/master/src/createComponent.js).

```js
export default function createComponent(MaterialUIComponent, mapProps) {
  class InputComponent extends Component {
    getRenderedComponent() {
      return this.refs.component;
    }
    render() {
      return createElement(MaterialUIComponent, {
        ...mapProps(this.props),
        ref: 'component'
      })
    }
  }
  InputComponent.displayName = `ReduxFormMaterialUI${MaterialUIComponent.name}`
  return InputComponent
}
```
