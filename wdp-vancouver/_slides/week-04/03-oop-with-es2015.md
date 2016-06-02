---
layout: slidedeck
title: OOP with ES2015
---

{% highlight html %} name: inverse layout: true class: center, middle, inverse

---

# OOP with ES2015

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# OOP

**Object Oriented Programming** (OOP) is a common way of programming.

OOP is about grouping code into similar, reusable objects.

---

# Why Objects?

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

A `class` is a special object with additional features.

Think about grouping your code by *noun*'s. These will become your classes.

---

# Classes

Keywords: `prototype`, instance

## ES5

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

# Classes

Keywords: `constructor`, `this`, method, instance

## ES2015

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

* The `constructor` is a special method. Why?
  - A) it is necessary to construct a `class`
  - B) it runs first when a `class` is created
  - C) it's not actually special

* What does `this` refer to in the previous example?
  - A) the *Student* `class`
  - B) the instance of *Student* called *joe*
  - C) the scope of the function outside of the `class`


---

# Instance

Instances let you create **reusable** structured data.

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

*`firstName` is a property of Person.*

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

*`greet` is a method of Person.*

---

# Inheritance

```js
class Person {
  greet() {
    console.log('hello');
  }
}

class Student extends Person {}

*`Student` extends `Person`*
*`Student` is a subclass of `Person`.*
*`Student` inherits from `Person`*

```

---

# Extends

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
  }
}

let Joe = new Student();
Joe.greet(); // hello
```

---

# Review

1. What is a **constructor**? What does it do?
1. What is a **method**? What is a **property**?
1. What does **this** refer to?
1. What is an **instance**? How do you make one?
1. How two things do you need to do to **inherit** from another class?

---

# Why Classes?

- reusable instances
- organized code
- encapsulated
- inheritance

---

## Exercise 1 - Classes

Model the classroom using classes. Instantiate your classmates as `new WebDevStudent()`. Include at least three properties and 1 method on each class. Use the following classes:

- Clazz *(note: class is a keyword in JavaScript)*
- Person
- Student
- WebDevStudent

---
