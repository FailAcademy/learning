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
1. Outside-in
1. Interface Discovery
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

## Exercise: Student Stats

You've just been hired on as a big data consultant for a coding school called Rouge Academie. Management wants to understand more about their students!

Here's their [data set](/public/exercises/bdd-dummy-data.json). Write 2 stories (each w/ at least 2 scenarios) about how you can provide them with insight.

For your reference:

.condensed[
- [What's in a Story?](https://dannorth.net/whats-in-a-story/)
- [A practical blog on how to write Scenarios using BDD](https://elabor8.com.au/a-practical-blog-on-how-to-write-scenarios-using-bdd/)
]
---
class: middle

## What now?

Now that we have our human-readable acceptance criteria, we can start using TDD.
Set up environment:

```sh
mkdir student-stats
cd student-stats

mkdir src
touch src/student-stats.js

mkdir __tests__
touch __tests__/student-stats.spec.js

npm init -y
npm i --save-dev jest-cli
```

```js
// package.json
"scripts": {
  "test": "jest --verbose"
}
```
---
template: inverse

# Outside-in Testing
---
class: middle

## Code Along: Outside-in

This is where TDD gets interesting. We're going to convert our BDD scenarios into unit tests, then write the _minimal possible code_ to make them pass.

.condensed[
- Start with unit tests
- Mock all dependencies
- Make the tests pass
]
---
template: inverse

# Interface Discovery

---
class: middle

## Interface discovery

When we start our implementation by writing tests, we get to iterate on its __interface__ before having to care about its __implementation__.

This is considerably more flexible than iterating on an interface while writing the actual code.

---
class: middle

## Lab Activity

We've defined the __output__ of `processData`. Use TDD to start implementing that function.

Start by choosing just one object property. Write tests, then write the minimal amount of code for it to pass. When you finish, move on to the next property.

We'll review your work in the morning.

{% endhighlight %}
