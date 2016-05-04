---
layout: slidedeck
title: Intro to ES2015 Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to ES2015

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# JavaScript Changes

ECMAScript is the committee in charge of JavaScript.

| Year | Release    |
| ---- |------------|
| 1997 | ES         |
| 1998 | ES2        |
| 1999 | ES3        |
|      |    ?       |
| 2009 | ES5        |
| 2015 | ES6/ES2015 |

---

# ES2015 Compatibility

How well does ES5 work in browsers today?

- [ES5 Compatibility](http://kangax.github.io/compat-table/es5/)

How about ES6?

- [ES6 Compatibility Table](http://kangax.github.io/compat-table/es6/)

---

# How Can We Use ES2015 Today?

Answer:   **Compilation**

Change your ES2015 code to ES5.

- [Babel](https://babeljs.io/)
	* [playground](https://babeljs.io/repl/)
- [TypeScript](http://www.typescriptlang.org/) 		
	* [playground](https://www.typescriptlang.org/play/)

---

template: inverse
class: center, middle

# Dev Environment Setup

---

# Gulp Babel

[**Gulp-Babel**](https://www.npmjs.com/package/gulp-babel)

```js
var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', () => {
	return gulp.src('src/app.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('dist'));
});
```

`> npm install --save-dev gulp-babel babel-preset-es2015`

.link[
	[See An Example](https://github.com/redacademy/red-gulp-babel)
]

---

# Babel 6 Presets

Why use [**Presets**](https://babeljs.io/docs/plugins/preset-es2015/)?

```
babel({
	presets: ['es2015']
})
```

---
template: inverse
class: center, middle

# ES2015 Improvements

---
class: center, middle

# Modules

### `import` & `export`

---

# Modules

### Why modules?

For the same reason an author divides a books into chapters & pages.

---

# ES5 Modules

No Native or agreed upon solution.

- CommonJS
- SystemJS
- RequireJS (AMD)
- more!

---

# ES2015 Modules

ES2015 standardizes modules.

### `import`

```js
import {a} from 'module';
import b from 'module'; // default
import * as c from 'module'; // alias
```
### `export`

```js
export function a() {}
export default function b() {}
```

---

# Challenge

Clone the es2015 repo, and follow the README to get setup.

`> git clone https://github.com/redacademy/red-es2015`

Follow the instructions in "import-export/src/index.js".

---
class: center, middle
# Declarations

### `let` & `const`

---

# Problem

### Hoisting

```js
for (var i = 1; i < 6; i++) {
  $("#" + i)
    .click(function() {
      alert(i);
    });
}
```
.link[
	[Open in CodePen](http://codepen.io/redacademy/pen/pyZpqV)
]


---

# Solution

### Block-Scoped Declarations

### `let`

```js
for (let i = 1; i < 6; i++) {
  $("#" + i)
    .click(function() {
      alert(i);
    });
}
```

---

# Problem

### Avoiding Change

```js
var teachers = [
  'Mandi',
  'Ben',
  'Shawn',
  'Mack',
];
teachers = ['Kyle', 'Kurtis', 'Rony'];
```
.link[
	[Open in CodePen](http://codepen.io/redacademy/pen/jqpYoz)
]


---

# Solution: Constants

### `const`

```js
const teachers = [
  'Mandi',
  'Ben',
  'Shawn',
  'Mack',
];

teachers = ['Kyle', 'Kurtis', 'Rony'];
// TypeError: Assignment to constant variable.
```

---

# Using `const`

### What happens?

##### 1. Reassigning a value

```js
const value = 1;
value = 2;
```

```js
const numbers = [1, 2, 3];
numbers = [4, 5, 6];
```

##### 2. Changing a value

```js
const array = [1, 2, 3];
array.push(4);
```

```js
const object = {a: 1, b: 2};
object['c'] = 3;
```

---
class: center, middle
# Arrow Functions

### `() => true`
### `x => x + 1`

---

### ES5 `function`

```js
function sayHi() { console.log('hi'); }
function addOne(x) { return x + 1; }
function multiply(a, b) { return a * b; }
var multiply = function(a, b) { return a * b; }
```

### ES2015 `=>`

```js
const sayHi = () => console.log('hi');
const addOne = x => x + 1;
const multiply = (a, b) => { return a * b; }
const multiply = (a, b) => a * b
```

---

# Arrow Functions: `this`

```js
function clickMe() {
  const button = document.getElementById('myButton');
  button.addEventListener('click', function() {
    alert('CLICK');
    this.handleClick();
  });
}
```

---

# Problem: `this`

### ES5 Solution

```js
function clickMe() {
  var self = this;
  const button = document.getElementById('myButton');
  button.addEventListener('click', function() {
    alert('CLICK');
    self.handleClick();
  });
}
```

---

# Problem: `this`

### ES2015 Solution

```js
const clickMe = function() {
  const button = document.getElementById('myButton');
  button.addEventListener('click', () => {
    alert('CLICK');
    this.handleClick();
  });
}
```
.link[
  [Open in CodePen](http://codepen.io/redacademy/pen/mPjXVW)
]

---

# Warning

Arrow functions are **anonymous** (unnamed).
Anonymous functions are harder to trace when you have an error.

```js
function hasError() {
  return x;
}
// Error at function hasError. x is not defined.
```

```js
() => x;
// x is not defined.
```

---

template: inverse
class: center, middle

# ES2015 ShortHands

---
class: center, middle
# Template Literals

### <code>{% raw %}\`string\`{% endraw %}</code> (backtick)
### <code>{% raw %}\`${variable}\`{% endraw %}</code>

---

# Template Literals

### ES5
```js
	var name = 'name';
	var city = 'Vancouver';
	var description = name + ' lives in ' + city;
```

### ES2015

```js
let description = `${name} lives in ${city}`;
```

---

# Multiline Strings

Template literals preserve white space.

### ES5
```js
var funkyArrows = '\n-->\n    -->\n        ->\n';
```

### ES2015

```js
let funkyArrows = `
->
	->
		->
`;
```
.link[
	[Open in CodePen](http://codepen.io/redacademy/pen/PNBQvB)
]


---

# Object Literals

### ES5

```js
var name = 'Shawn';
var city = 'Vancouver';
{
	name: name,
	city: city,
}
```

### ES2015

```js
{
	name,
	city,
}
```

---

# Default Params

### ES5

```js
function multiply(a, b) {
	if (typeof b === 'undefined') {
		b = 1;
	}
  return a * b;
}
```

### ES2015

```js
function multiply(a, b = 1) {
	return a * b;
}
```

---

# Destructuring Objects

### ES5

```js
var person = {
	name: 'Shawn',
	city: 'Vancouver',
};

function getName(person) {
	return person.name;
}
```

### ES2015

```js
function getName({name}) {
	return name;
}
```

---

# Destructuring Arrays

### ES5

```js
var winners = ['Sarah', 'Holly', 'Andrew'];
var first = winners[0];
var second = winners[1];
var third = winners[2];
```

### ES2015

```js
let [first, second, third] = winners;
```

---

# Much More

- [Spread Operator](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator)

```js
myFunction(...iterableObj);
```

- [Rest Parameter](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/rest_parameters)

```js
function(a, b, ...theArgs) {
  // ...
}
```
* `for..of`
* iterators & generators

---
template: inverse
class: center, middle

# Class

---

# ES5

```js
function Animal(name) {
  this.name = name;
}

Hello.prototype.speak = function speak() {
  console.log(this.name + ' makes a noise.');
};
```

# ES2015

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}
```

---

# ES2015

### What is the purpose of ...
- the `constructor`
- `this`
- methods

```js
class Animal {
	// constructor runs first
  constructor(name) {
    this.name = name;
  }
	// methods
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}
```

---

# `extends`

```js
class Animal {
  constructor(name) {
    this.name = name;
  }  
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
	speak() {
    super.speak();
    console.log(this.name + ' barks.');
  }
}

let Scruffy = new Dog();
```

---
template: inverse
class: center, middle

# Promises

---

# Promise

1. **Asynchronous** vs. **Blocking**

2. [Promises Explained](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)

---

# Questions?

{% endhighlight %}
