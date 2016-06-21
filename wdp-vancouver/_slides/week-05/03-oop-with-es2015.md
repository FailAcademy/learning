---
layout: slidedeck
title: OOP with ES2015
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

# OOP

**Object Oriented Programming** (OOP) is a style of programming where you group code into **encapsulated** & **reusable** objects.

---

# Encapsulation

Encapsulation is about attaching similar code to the same object.

```js
// without any object
let firstName = 'Joe';
let lastName = 'Schmo';
function fullName() {
  return firstName + ' ' + lastName
}

// with an object
let Person = {
  firstName: 'Joe',
  lastName: 'Schmo',
  fullName: () => this.firstName + ' ' + this.lastName
}
```

---

# Class

A `class` is an object with special features (*more on this later*)

Think about grouping your code by *noun*'s. These will become your classes.

```js
class Person {}

class Student {}

class WebDevStudent {}
```

---

# ES5 Prototypal Classes

In ES5, we use *Function.prototype* to simulate classes.
Name classes with a **Capital Letter**.

Keywords: `prototype`, instance

```js
var Student = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Student.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
}

var Joe = new Student('Joe', 'Schmo');
console.log(Joe.fullName());
```

---

# ES2015 Classes

ES2015 classes work the same as in ES5, but have a cleaner syntax.

Keywords: `constructor`, `this`, method, instance

```js
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let joe = new Student('Joe', 'Schmo');
console.log(Joe.fullName());
```

---

# Quiz

The `constructor` is a special method. Why?
- A) it is necessary to construct a `class`
- B) it runs first when a `class` is created
- C) it's not actually special, but I am

What does `this` refer to in the previous example?
- A) the *Student* `class`
- B) the instance of *Student* called *joe*
- C) `that`

---

# Instance

Instances let you create **reusable** structured data. Think of a `class` like a factory that creates instances with the word `new`.

Keywords: `new`

```js
let Joe = new Student('Joe', 'Schmo');
let Mary = new Student('Mary', 'Jones');
let Al = new Student('Barrack', 'Obama');
```

*`Joe` is an instance of `Student`*

---

# Properties

**Properties** are variables attached to a class or object.

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.money = 20.00;
  }
}
```

*`firstName` is a property of `Person`.*

---

# Methods

**Methods** are functions attached to a class or object.

```js
class Person {
  constructor() {
    this.money = 20.00;
  }
  greet() {
    console.log('hello');
  }
  payBill(cost) {
    this.money -= cost;
    if (this.money < 0) {
      this.money = 0;
      this.declareBankruptcy();
    }
  }
  declareBankruptcy() {
    alert('I\'m broke!');
  }
}
```

*`greet` is a method of `Person`.*

---

# Inheritance

A class can **inherit** properties and methods from another classes.

```js
class Person {
  greet() {
    console.log('hello');
  }
}

class Student extends Person {}
```

*`Student` extends `Person`.*<br />
*`Student` is a subclass of `Person`.*<br />
*`Student` inherits from `Person`.*

---

# Extends

Use `super` to specify which properties will be inherited.
The *spread operator* (`...`), will collect all properties.

Keywords: `extends`, `super`, subclass

```js
class Person {
  greet() {
    console.log('hello');
  }
}

class Student extends Person {
  constructor(...props) {
    super(props);
    this.hasPencil = true;
  }
}

let Joe = new Student();
Joe.greet(); // hello
```

---

# Review

1. What is a **method**? What is a **property**?
1. What is an **instance**? How do you make one?
1. How 2 things do you need to do to **inherit** from another class?

---

## Exercise 1 - Classes

Model the classroom using classes. Include at least three properties and 1 method on each class. Use the following classes:

- Clazz *(note: class is a keyword in JavaScript)*
- Person
- Student
- WebDevStudent

Instantiate your classmates using `new WebDevStudent()`.

{% endhighlight %}

---
