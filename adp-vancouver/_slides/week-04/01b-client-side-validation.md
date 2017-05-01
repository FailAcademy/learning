---
layout: slidedeck
title: Client-Side Validation

---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---
template: inverse

# Client-Side Validation

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. UX Guest Speaker
1. Client vs Server Validation
1. Controlled vs Uncontrolled Components
1. Form Validation in Redux
1. Implement a form using the `Gandalf` library

---

template: inverse

# Client vs Server Validation

---
class: middle

## Exercise:

Split into two groups.

- Group 1: Research client-side validation
- Group 2: Research server-side validation

You have 10 minutes, then we'll present.

???

Essential differences:

- Client-side validation is inherently insecure
- Client-side validation makes an app seem faster
- Server-side validation is absolutely required
- Client-side validation is for the user's convenience, but can also save a huge amount of resources. Ie. Picture 1,000,000 requests that are poorly formed. Client-side validation stops them from happening altogether.
- In short,eEvery app needs both client and server-side validation


---

template: inverse

# Controller vs Uncontrolled Components

---
class: middle

## Exercise:

Back into two groups.

- Group 1: Research controlled components
- Group 1: Research uncontrolled components

You have 10 minutes, then we'll present.

???

Controlled components are controlled by React. That means we have programatic access to their values without having to interact with the DOM.

Uncontrolled components rely on the DOM to store their state. This is inefficient in the long wrong, and contrary to React/Redux principles.

---

template: inverse

# Form Validation in React/Redux

---

class: middle

## Discuss:

Where should form state exist in a React/Redux application?

- Think of the pros and cons of local state vs Redux state
- Is invalid state still state?

It might help to look up 'Ephemeral' state  

???

Hopefully this will lead to them understanding:

- Form state is ephemeral, which means that it isn't meaningful to the application until it is validated.
- We don't want to be updating redux with every key stroke. That will be very inefficient, as we'll be firing our pure reducer functions to make state that might not even be valid.

---

class: middle

## Exercise

2 new groups!

Draw how an application might handle client-side form validation.

You have 15 minutes.

???

This is an example of where will be good to use component-level state in React/Redux. The form component should own the state for all of its inputs, but we shouldn't pass any of it to Redux (and our servers) until we know that the form is completely valid.

---
template: inverse

# Lab

{% endhighlight %}
