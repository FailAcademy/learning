---
layout: slidedeck
title: Two-way Data-binding and Forms
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# 2-way Data binding and forms

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. What is 2-way data-binding?
2. Forms in Angular (ngForm)
3. Form validation techniques in Angular (FormController)

---

template: inverse

#2-Way Data Binding

---

class: center-middle

In Angular, 2-way data binding refers to the ability to change the value of $scope properties from angular code or, in the 'other direction' via logic in our DOM.

---

template: inverse

#Forms

---

class: center, middle

Angular gives front end developers powrful tools for working with forms in HTML.

https://docs.angularjs.org/api/ng/directive/form

---

#Exercise

Create and style a voter registration form!
Using what you know about Angular and CSS, create a form with the following fields:

- First name (max-length 140)
- Last name (max-length 140)
- Age (must be number)
- Gender (radio buttons)
- House # (must be number)
- Street address
- Province (select menu)
- Accept voter responsibility (checkbox)

All of the fields should be required, and the form should indicate to the user if they try to submit the form with empty fields.

---

template: inverse

# Questions?

{% endhighlight %}
