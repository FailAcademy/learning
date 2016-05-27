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

# Object Oriented Programming


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

let Joe = new Student('Joe', 'Schmo');
console.log(Joe.fullName());
```

---

# Instance

Instances let you create structured data.

```js
let Joe = new Student('Joe', 'Schmo');
let Mary = new Student('Mary', 'Jones');
let Al = new Student('Barrack', 'Obama');
```

---

# Extends

`Student` is a subclass of `Person`.

Keywords: `extends`, `super`

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greet() {
    console.log('hello');
  }
}

class Student extends Person {
  constructor(...props) {
    super(props);
  }
}

let Joe = new Student('Joe', 'Schmo');
Joe.greet();
```

---

# Review

1. What is a **constructor**? What does it do?
1. What is a **method**?
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

Model the classroom using classes. Use the following classes. Instantiate your classmates as `new WebDevStudent()`. Include at least three properties and 1 method on each class.

- Clazz *(note: class is a keyword in JavaScript)*
- Person
- Student
- WebDevStudent

---
