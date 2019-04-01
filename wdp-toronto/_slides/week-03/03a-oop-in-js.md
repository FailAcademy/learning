---
layout: slidedeck
title: Object Oriented Programming in JS Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# OOP with ES2015

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1. What is OOP?
2. ES2015 class syntax
3. Inheritance
4. ES2015 Modules

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

Imagine you want to create an **object-oriented model of a tennis game**&mdash;what kind of class "blueprints" would you need to create to represent all of the elements of the game as objects (e.g. a player, the ball, etc.)?

What kinds of **properties** (i.e. adjectives/traits) would be needed to describe each object, and what kinds of **methods** (i.e. verbs/actions) would be available to each object?

Work in groups to create a **poster-based representation** your object-oriented game, and present your work to the class.

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

# Review: Prototypes

In ES5, we use `Function.prototype` in lieu of classes:

```js
// We call this type of function a constructor...
// It's job is to initialize new objects:

const Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

// Add a fullName() method to the Person prototype property:

Person.prototype.fullName = function() {
  return this.firstName + "  " + this.lastName;
};

// Create a new object with the Person() constructor:

const joe = new Person("Joe", "Schmo");

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

**C)** Both A and B

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

# Inheritance

---

# Inheritance

A class can **inherit** properties/methods from other classes:

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

class Student extends Person {}
```

In this example `Student` extends `Person`, which means it is a **subclass** of `Person` and therefor **inherits** all of the properties and methods from the `Person` class.

---

# Extends

Use `super` to specify which properties will be inherited.

```js
class Person {
  constructor(name) {
    this.name = name;
  }
}

class Student extends Person {
  constructor(prop) {
    // pass name in
    super(prop); // pass name to parent constructor
    this.hasPencil = true;
  }
}

let Joe = new Student("Joe");
Joe.name; // Joe
```

---

# Review Time!

1. What is a **method**? What is a **property**?
1. What is an **instance**? How do you make one?
1. What two things do you need to do to **inherit** from another class?

---

# Exercise 3

Now model our own classroom using the following classes. Note that `WebDevStudent` should be a subclass of `Student` and `Student` should be a subclass of `Person`. Create at least **three properties** and **one method** on each class.

- Clazz (`class` is a reserved keyword in JS)
- Person
- Student
- WebDevStudent

**Instantiate your classmates** using `new WebDevStudent()`.

---

template: inverse

# ES2015 Modules

---

class: center, middle

### Why Modules?

For the same reason an author divides a books into chapters. (Helps us keep things organized!)

---

# Problem: Global Vars

Modularizing code in ES5 often meant polluting the global namespace. For example, here the jQuery library is added to the global namespace:

```html
<!DOCTYPE html>
<body>
  <p>Hello, world!</p>
  <script src="./jquery.js"></script>
  <script src="./my-script.js"></script>
</body>
```

`$` is now a global variable, which can cause naming conflicts if another library uses the `$` as a global as well.

???

**Note:** Students haven't see jQuery yet but this is a simple enough example that it shouldn't be an issue.

---

# Modules in ES5

No native or agreed upon solution in ES5:

- CommonJS
- SystemJS
- RequireJS (AMD)
- ...and more!

---

# ES2015 Modules

ES2015 standardizes modules!

Run: `npm install --save jquery`

```html
<!DOCTYPE html>
<body>
  <p>Hello, world!</p>
  <script src="./my-script.js"></script>
</body>
```

```js
// in my-script.js...
import $ from "jquery";

let hello = $("p").css("color", "red");
```

All the code in the jQuery package is completely trapped inside of this module and does not pollute the global namespace.

---

# Exporting & Importing

Using modules requires using `import`/`export` keywords:

`import`

```js
import { a } from "module";
import b from "module"; // default
import * as c from "module"; // alias
```

`export`

```js
export function a() {}
export default function b() {}
```

---

# Works Classes Too

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

# But There's a Catch!

Browser support for ES2015-style modules has improved significantly over recent years.

However, we will still want to use a **bundler** like **[Webpack](https://webpack.js.org/)** or **[Parcel](https://parceljs.org/)** to bundle and optimize code for the browser.

Bonus! Both Webpack and Parcel have **dev servers** built in, so that means we can stop loading our `index.html` file directly from our file system in the browser (which has advantages...).

???

**Note:** Mention which bundler will be used on the Pong project. When introducing students to the project starter, be sure to walk them through any configuration for the bundler, how npm scripts work, `start`/`dev` vs `build` scripts, and Babel.js.

Also note that a bundler can do helpful things like minify our code, and "transpile" any bleeding edge ES201X code into a format that current browsers will understand (so we can use the new language features today in our code).

Why loading `index.html` (etc.) directly from the filesystem is problematic:

- Browser want to protect our computers from potentially malicious scripts ([same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy))
- If we load `index.html` directly, we don't want an evil script to have free-run of our file system (so the browser prevents this)
- Browsers will also limit the use of other APIs (like Ajax) when using the `file://` scheme

---

# What We've Learned

- Basic concepts of object-oriented programming
- How to use the new ES2015 class syntax
- How inheritance works with subclasses
- How to turn classes into modules and export and import them

---

template: inverse

# Questions?

{% endhighlight %}
