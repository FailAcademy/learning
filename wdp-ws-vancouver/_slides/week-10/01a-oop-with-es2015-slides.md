---
layout: slidedeck
title: Object-Oriented Programming in JS Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Object-Oriented Programming in JS

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1. What is OOP?
2. ES2015 class syntax

---

template: inverse

# What is OOP?

---

class: center, middle

### What is object-oriented programming?

**Object-oriented programming** (OOP) is a style of programming where you group code into **encapsulated** and **reusable** objects.

---

class: center, middle

### Objects, in Plain English

A **general model** for something we see in the world,<br />but using code constructs.

---

# Objects, Actually in Relation to English

We already know that objects can have properties (variables) and methods (functions). Thinking about objects in relation to the real world, we can say that:

* An object is the **noun**
* A property is an **adjective**
* A method is a **verb**

---

class: center, middle

### Classes, in Plain English

A class is a **blueprint** for creating an object.<br />(And your computer is the construction crew.)

---

# Encapsulation

**Encapsulation** means that we bundle related code together with the same object:

```js
// Without an object:

let firstName = "Joe";
let lastName = "Schmo";
function fullName() {
  return `${firstName} ${lastName}`;
}

// With an object:

let Person = {
  firstName: "Joe",
  lastName: "Schmo",
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
};
```

---

class: center, middle

.large[
**Insight:** Classes will help us easily bundle this related code into reusable objects.
]

---

# Exercise 1

Imagine you want to create an **object-oriented model of a soccer game**&mdash;what kind of class "blueprints" would you need to create to represent all of the elements of the game as objects (e.g. a player, the ball, etc.)?

What kinds of **properties** (i.e. adjectives/traits) would be needed to describe each object, and what kinds of **methods** (i.e. verbs/actions) would be available to each object?

Work in groups to create a **poster-based representation** your object-oriented soccer game, and present your work to the class.

---

template: inverse

# ES2015 Classes

---

# Thinking About Classes

A `class` is an object with some special features (more on this to come...)

Think about grouping your code by **nouns**. These will become your classes:

```js
class Person {}

class Student {}

class WebDevStudent {}
```

Also be sure to name classes with a **capital letter**.

---

# ES5 Prototypes

In ES5, we use `Function.prototype` to simulate classes:

```js
// We call this type of function a constructor...
// It's job is to initialize new objects:

var Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

// Add a fullName() method to the Person prototype property:

Person.prototype.fullName = function() {
  return this.firstName + "  " + this.lastName;
};

// Create a new object with the Person() constructor:

var joe = new Person("Joe", "Schmo");

console.log(joe.fullName());
```

---

# ES2015 Classes

Classes work the same in ES2015, but with cleaner syntax:

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let joe = new Person("Joe", "Schmo");
console.log(joe.fullName());
```

**Keywords:** `constructor`, `this`, method, instance

---

# Instance

Instances let you create **reusable** structured data. Think of a `class` like a factory that creates instances by using the word `new`. This is called **instantiation**.

```js
let joe = new Person("Joe", "Schmo");
let mary = new Person("Mary", "Jones");
let al = new Person("Barrack", "Obama");
```

In this example, `joe`, `mary`, and `al` are instances of `Person`.

**Keywords:** `new`

---

# Properties

**Properties** are variables attached to a class or object.

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
```

In this example, `firstName` is a property of `Person`.

**Note:** The `constructor` method allows you to perform actions when an instance of a class is instantiated, so this our opportunity to initially define properties.

---

# Methods

**Methods** are functions attached to a class or object.

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet() {
    console.log("hello");
  }
}
```

In this example, `greet` is a method of `Person`.

**Note:** We don't need to use the `function` keyword when defining our class methods.

---

# Quiz 1

The `constructor` is a special method. Why?

**A)** It is necessary to construct a `class`

**B)** It runs first when a `class` is created

**C)** It's not actually special, but I am

---

# Quiz 2

What does `this` refer to in the previous example?

**A)** The `Person` class

**B)** The instance of `Person` called `joe`

**C)** `that`

---

# Exercise 2

Pick one of the classes your group modelled in the previous soccer game exercise, and use that to **write your first ES2015 class**.

Ensure that you set all the appropriate **properties** in the `constructor` and create all the required **methods** for your class.

---

template: inverse

# Imports & Exports

---

# Exporting & Importing

Just like functions, classes can be imported and exported from module:

```js
// In "Person.js" file

export default class Person {
  //...class code here
}
```

```js
// In "class.js" file

import Person from "./person.js";

let Joe = new Person("Joe", "Schmo");
```

The `default` keyword allows this class to be set to any variable name when it's imported.

---

# Named Exports

We can also use **named exports** with class modules. Here you must make sure that the script loading the module uses the same variable name as the class name:

```js
// In "person.js" file

class Person {
  //...class code here
}

export { Person };
```

```js
// In "class.js" file

import { Person } from "./person.js"; // must be called "Person"

let Joe = new Person("Joe", "Schmo");
```

---

# Quiz 3

How do we import `hello` from `file.js` into a another file in the same directory?

```js
// the file that contains this code is called "file.js"

export default const hello = 'world'
```

**A)** `import { hello } from './file'`

**B)** `import something from './file'`

**C)** `import { hello } from 'file'`

---

# What We've Learned

* Basic concepts of object-oriented programming
* How to use the new ES2015 class syntax

---

template: inverse

# Questions?

{% endhighlight %}