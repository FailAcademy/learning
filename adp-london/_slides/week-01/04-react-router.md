---
layout: slidedeck
title: React Router Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# React Router

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Introduction
2. Deep-dive
3. ...

---


# Why the Diff?

As we build out the to-do app (and the first part of Project 1), we'll see that it's very easy to mix code that controls the behaviour of our app with code that renders the view.

As a result, our code will become more tightly coupled than it should be. This makes are components less modular and harder to reuse.

To avoid this, we will use ES2015 classes to create **Container Components** and the stateless functional approach to create **Presentational Components**.

---

# Things to Note

- Presentational components should never change prop data
- Presentational components should format the data for the view only

---

# What We've Learned

---
template: inverse

# Questions?

{% endhighlight %}
