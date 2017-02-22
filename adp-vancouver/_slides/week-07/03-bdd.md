---
layout: slidedeck
title: Behaviour Driven Development
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Behaviour Driven Development

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false
class: middle

# Agenda

1. TDD vs BDD
1. Stakeholders
1. Stories
1. Interface Discovery
1. Craftsmanship
1. Why isn't everything tested?
---
template: inverse

# TDD vs BDD
.large[Step. Away. From. Computer.]

---
class: middle

.large[
In order for software to be meaningful, its features have to provide benefit to its stakeholders.
]

---

template: inverse

# Stakeholders
.large[Believe it or not, programmers don't call all the shots]

---

## BDD

A way of writing human-readable tests in the form of _stories_.

BDD stories have a recognizable structure:

- Title
- Narrative
- Scenarios

---

## BDD

Title:
```sh
A [stakeholder] performs some action.
```

Narrative:
```sh
As a [stakeholder] I want [feature] so that [benefit].

In order to [benefit], a [stakeholder] wants [feature].
```

Scenario:
```sh
Given [some environment]
When [something happens]
And [optionally something else happens]
Then [expected result]
And [optionally more things are expected]
```

---
template: inverse

# Iteration _before_ coding
---
class: middle

## Exercise

Write a story for some aspect of your Meteor project. Include at least 2 scenarios.

For your reference:
- [What's in a Story?](https://dannorth.net/whats-in-a-story/)
- [A practical blog on how to write Scenarios using BDD](https://elabor8.com.au/a-practical-blog-on-how-to-write-scenarios-using-bdd/)

---
template: inverse

# Interface Discovery

---
class: middle

## Interface discovery

- BDD helps us understand applications outside of the context of code.
- Tests help us define the expected programtic behaviour of our code.

__What role could documentation play?__

---
class: middle

## Interface Discover _via_ Documentation

Markdown allows us to easily combine plain English with code examples,
making it a low-risk, easily iterable place to discovery interfaces.

---

## Lab Activity

We're going to write tests and some new features for the Gandalf library.
Here's how we'll do it:

```
# Code Along
- Prep Gandalf for unit tests using Jest
- Write a couple unit tests for existing functionality

# On your own
- Use BDD to define some new features
- Use documentation to discover the interface for these new features
- Use TDD to implement the new features
```

When we're done, we'll have useful, documented, and tested new code.

---

template: inverse

.large[
  Ultimately, this is about Craftsmanship
]

---
class: center, middle

## Why isn't everything tested?

{% endhighlight %}
