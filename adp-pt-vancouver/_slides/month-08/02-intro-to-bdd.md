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

# Agenda

1. TDD versus BDD
2. Stakeholders
3. Stories
4. Outside-in
5. Interface discovery
6. Practice!

---
template: inverse

# TDD versus BDD

---
class: center, middle

.large[
  Step. Away. From. Computer.
]

???

- BDD allows us to think about our functionality in terms of how it affects our users. 
- It is a plain-text formalized method for describing how we expect our code to work.

---
class: center, middle

.large[
  In order for software to be meaningful, its features have to provide benefit to its stakeholders.
]

---

template: inverse

# Stakeholders

---
class: center, middle

.large[
  Believe it or not, programmers don't call all the shots
]

???

- CEOs, product managers, CTOs, designers, sales, marketing, etc. all have their needs, too!

---

# BDD

A way of writing human-readable tests in the form of **stories**.

BDD stories have a recognizable structure:

- Title
- Narrative
- Scenarios

---

# BDD

**Title:**

```bash
A [stakeholder] performs some action.
```

**Narrative:**

```bash
As a [stakeholder] I want [feature] so that [benefit].
In order to [benefit], a [stakeholder] wants [feature].
```

**Scenario:**
```sh
Given [some environment]
When [something happens]
And [optionally something else happens]
Then [expected result]
And [optionally more things are expected]
```

---
class: center, middle

.large[
  Iteration *before* coding.
]

???

Let's practice with an example. Remember that we want to be able to understand our functionality before we start implementing.

---

# Exercise 1

You've just been hired on as a big data consultant for a coding school called Rouge Academie. Management wants to understand more about their students!

Here's their **[data set](/public/exercises/bdd-dummy-data.json)**. Write 2 stories (each with at least 2 scenarios) about how you can provide them with insight.

For your reference:

.condensed[
- [What's in a Story?](https://dannorth.net/whats-in-a-story/)
- [A practical blog on how to write Scenarios using BDD](https://elabor8.com.au/a-practical-blog-on-how-to-write-scenarios-using-bdd/)
]

???

- Get the students to look at each property of each student's data object
- What might we want to know the average of? (Age, Experience)
- Would we want to know the percentage passing each project?
- How about the satisfaction of those who pass vs the satisfaction of those who fail?
- We could also look at years experience vs. pass percentage to see if there's a correlation
- **Note:** The solutions are in the `adp-exercise-solutions` repo in the [`bdd-student-stats`](https://github.com/redacademy/adp-exercise-solutions/tree/master/bdd-student-stats) directory. Solutions were written to process average age, average experience, the pass/fail percentage for each project, the satisfaction of those who passed, and the satisfaction of those who failed. Fill your boots!

---

# What Now?

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
npm install --save-dev jest-cli
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

???

- What is the difference between outside-in and inside-out approaches?
- Inside out gets us to start with the smallest possible functions and build outwards
- Outside in gets us to mock dependencies as we work our way in

---

# Code Along: Outside-in

This is where TDD gets interesting. We're going to convert our BDD scenarios into unit tests, then write the _minimal possible code_ to make them pass.

Our process will be:

- Start with unit tests
- Mock all dependencies
- Make the tests pass

???

- Outside-in allows us to start coding from the perspective of the user - in this case, our tests best represent the user
- We start with the functions that user events might trigger

For the code along:

- See the `student-stats.spec.js` file for guidance
- The key here is that we're ONLY building the interface, and mocking the actual data processing to start
- Talk about the interface. Should we make a class, a function?
- Let's make a class called StudentStats. What's the interface? `.get`? `.process`?
- What about `getAverageAge`? or `getAverageSatisfaction`?
- Make sure to iterate on the interface while writing the tests.

NOTE: The solution passes in a data object, mocks the `processData` function, and exposes the `queryCohort`, `queryExperience` and `queryProject` methods.

---
template: inverse

# Interface Discovery

???

- What is an interface?
- An interface is what we're given to interact with another class, object, function, etc.
- A good metaphor is the pedals and wheel of a car. Through that interface we're able to control the complex machinery of the car.

---

# Interface Discovery

When we start our implementation by writing tests, we get to iterate on its **interface** before having to care about its **implementation**.

This is considerably more flexible than iterating on an interface while writing the actual code.

---
class: center, middle

### Now, let's implement!

The trick is to write the smallest amount of code possible to allow the tests to pass.

???

Start by building an object of what you'd expect the processed data to look like. It'll probably be something like:

```js
const processedData = {
  demographics: {
    averageAge: 32,
    averageExperience: 3.2,
  },
  projects: {
    [projectName]: {
      passPercentage: 56,
      passSatisfaction: 5.6,
      failSatisfaction: 3.1,
    }
  }
}
```

Then we can make sure that the `processData` method returns that object using `jest.mock` (see solution file). After that, we write the simplest possible code to get those tests to pass.

---

# ProcessData TDD

We've defined the **output** of `processData`.

Let's use TDD to start implementing that function.

???

For the code-along:

- Solutions in the `process-data.spec.js` file.
- Write the tests first
- The function we are testing, `processData`, will take the data object and return another object with processed data.
- The key here is to make a mock data object of only 3-4 students. That way it is easy to calculate the expected processed results.
- `processData` should return an object with a couple properties, `demographics` and `projects`.
- Start with `demographics`, it's much easier
- Once you've written a reasonable amount of tests, do the skeleton of the actual function, and make a few tests pass. They'll do the rest in the lab.

---

# What We've Learned

- What BDD is in relation to TDD
- Who stakeholders are and what stories are
- What outside-in testing is
- What interface discovery is

{% endhighlight %}
