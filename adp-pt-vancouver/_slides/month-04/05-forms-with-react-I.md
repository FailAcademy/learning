---
layout: slidedeck
title: Forms with React I Slides
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
2.  Review: HTML Forms
3.  Controlled vs. Uncontrolled Inputs in React

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

# Exercise 1

### Think Pair Share

Typeform built a business out of exceptional form UX. How did they do it? <br/>

Partner up and come up with at least 5 ways Typeform breaks with the typical conventions we're used to, when
it comes to the design of Web Forms. <br/>

In 15 minutes we'll discuss what you came up with.

---

template: inverse

# Review: HTML5 Forms

---

# The Form Element

All forms on the web use the `<form>` element:

```html
<form action="submit.php" method="get">
  <!-- The form inputs go here... -->
</form>
```

The `action` attribute defines the location (an URL) where the form's collected data should be sent.

The `method` attribute defines which HTTP method to use to send the data (can be `get` or `post`).

---

# Input Element

We can use the `<input>` element inside a form to create a variety of different form controls:

```html
<form action="submit.php" method="post">
  <input type="text" name="username" size="12" maxlength="12" />
  <input type="checkbox" name="registered" checked="checked" />
</form>
```

By specifying the `type` attribute, the browser will know **what kind of input to display**.

Common input types include `text`, `checkbox`, `radio`, and `submit`. HTML5 introduced a number of [more specific form input types](http://html5doctor.com/html5-forms-input-types/) as well.

---

# Input Element

To create radio inputs, we simply create multiple `<input>` elements with a type of `radio`:

```html
<form action="submit.php" method="post">
  <input type="radio" name="gender" value="male" id="male" />Male
  <input type="radio" name="gender" value="female" id="female" />Female
</form>
```

Radio buttons that have the same value for the `name` attribute are in the same **radio button group**.

Only one radio button in a group can be selected at a time.

---

# Input Element

The `password` input type will obfuscate the characters that a user types into it:

```html
<input type="password" name="password" size="8" minlength="6" maxlength="8" />
```

Note that while the characters are hidden this doesn't mean that the entered data is secure when sent to the server!

It's best to use [SSL/TLS certificates](https://letsencrypt.org/) to send requests securely.

---

# Textarea Element

A `<textarea>` element will create a multi-line text input:

```html
<form action="submit.php" method="post">
  <textarea name="message" cols="10" rows="4">
      Enter your message...
   </textarea
  >
</form>
```

Using the `cols` and `rows` attributes you can specify the size of the `<textarea>` box.

---

# Select Element

The `<select>` element is a special form element that will create a drop-down menu based on the `<option>` elements nested inside:

```html
<form action="submit.php" method="get">
  <select>
    <option value="mac" selected="selected">Mac</option>
    <option value="pc">PC</option>
  </select>
</form>
```

The `selected` attribute will set a option to be selected by default.

---

# Label Element

The `<label>` tag is used to describe what an input is for, and helps with accessibility for vision-impaired users.

It can be used by either wrapping the `<input>` element it pertains to, or by giving it a `for` attribute that matches the `id` of the input it's labeling:

```html
<label> First Name: <input type="text" name="first_name" /> </label>

<label for="terms">I agree to the terms and conditions</label>
<input type="checkbox" name="terms" id="terms" />
```

---

# Button Element

Last but not least, you're probably going to want some way for the user to submit the data in your form.

For that, we have the `<button>` element:

```html
<button type="submit">Submit Form</button>
```

It's optional to specify `type="submit"` because this is the default. Other types for the `<button>` element include `reset` and `button`.

---

# Button vs. Input

In lieu of a `<button>` element, you can may also see an `<input>` element with `type="submit"`:

```html
<input type="submit" name="submit" value="Submit Form" />
```

The main difference between `<button>` and `<input type="submit" />` is that the input element is self-closing, while the button can contain content.

_Functionally they are the same if their types are the same._

---

template: inverse

# Controlled vs. Uncontrolled Inputs in React

---

# Exercise 2

### Controlled vs. Uncontrolled Inputs

In this course we'll learn how to build amazing Web Forms using React. Before we start there a few
basics we'll need to understand when it comes to working with forms in React.

[![CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/y3vv68m9j9)
Click the button above and follow the instructions in the `@TODO` to learn the basics of how React handles form inputs.

---

# When to Use `createRef`

When coming from web development without React, accessing DOM elements directly may be a more familiar pattern:

```js
const input = document.getElementById('#some-input');
```

Using React means **_avoiding direct DOM access_**, in favour of the performance gains given by by React's "Virtual DOM".
It's for this reason that when using React we'll prefer using Controlled Components, unless there is a special case where direct DOM access can't be avoided.

---

# What We've Learned

- UX Ground Rules for Web Forms
- How to use Controlled vs. Uncontrolled Inputs in React

---

template: inverse

# Questions?

{% endhighlight %}
