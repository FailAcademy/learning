# Lesson: Functional Programming (3hrs)

## Intro (5)

There are two pillars of programming in Javascript:

- Functional
- Object Oriented

Any idea of the difference between the two?

*( OOP: inheritance, Functional: pure functions )*

Can anyone name a functional programming language?

*( Elm, Elixir, Scala, etc. )*

In some languages you can only write pure functions, but JavaScript is a flexible programming language. In Javascript we have to try harder to write functional code.

## Pure or Impure

### Discussion (10)

Discussion: What is a pure or impure function?

Example:
a) toaster(bread) { return _____; } // ex: toast + heat = pure
b) human(toast) { return _____; } // ex: run, jump, talk = impure


Write: Pure functions are ______. // predictable, encapsulated, free of side effects

### Game (15)

Pure or Impure game. Write a function and ask students to discuss if it is "Pure" or "Impure".

a)
```js
function addOne(x) {
  return x + 1;
}
```

*( pure )*

b)
```js
function addOne(x) {
  console.log(x + 1);
}
```

*( impure, side effects )*

c)
```js
let x = 0
function addOne(x) {
  x += 1;
  return x;
}
```

*( impure, side effects, not encapsulated )*

d)
```js
const addOne = (function() {
  let x = 0;
  return function() {
    return x += 1;
  }
})();
```

*( pure, encapsulated )*
*( note: wrapping an impure function in a pure function creates a pure function )*


### Review (5)

Why prefer pure functions? Ask students to fill in the blank.

Write: "_________ability"

*( ex: reusability, predictability, testability, readability )*


## Higher Order Functions

### Types of Functions (20)

Pure functions have three parts. Can you guess what they are?

*( inputs -> transformation -> output )*

Ask students: in JS, can a function be:

a. an input be another function?

Ask students to write an example to demonstrate a function that takes a function.

```js
function addOneToFunction(fn) {
	return fn() + 1;
}
function getOne() { return 1; }
addOneToFunction(getOne);
```

b. Can a function output be another function?

Ask students to write an example to demonstrate a function that outputs a function.

Explain this is called a "thunk", more on this later in the week.

c. Can a function input & output be the function itself?

Ask students to write an example that doesn't crash.

Explain this is called "recursion", a function that calls itself.

## Array Methods

### Filter (20)

```js
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

Write a function called "filter" that takes a list of integers and returns only the even numbers.

// example
```js
filter(list) {
  const output = [];
  for(let i =0; i <= list.length; i++) {
    const item = list[i];
    if (item % 2) {
      output.push(item)
    }
  }
  return output;
}
```

With array methods, this is greatly simplified.

```js
list.filter(x => x % 2);
// same as filter(function(x) { return x % 2; })
```

### Lesson (5-10)

In a console, type "Array.prototype." and see what autocomplete options come up. Which "array methods" do you see? What do you think they do?

// example: sort, filter, concat, push, every, some, find, forEach, map, reduce, includes, reverse, etc.

Ask students if "prototype" relates to "Functional" or "OOP".

Also checkout "String.prototype", "Boolean.prototype", etc.

### Reverse (5)

Using Array methods, make the list look like this: [9, 8, 7, 6, 5, 4, 3, 2, 1]

Answer: `list.reverse()`

### Chaining (5-10)

Make the list look like this: [8, 6, 4, 2];

Answer: `list.filter(x => x % 2).reverse();`

This is called chaining.

Chaining is often structured in rows

```js
list.filter(x => x % 2)
    .reverse();
```

### Sort (5)

What happens when we add `sort()` on the end?

```js
list.filter(x => x % 2)
    .reverse()
    .sort();
// [2, 4, 6, 8]
```

Note add "10" to your list. What happens when you sort it now? Why?


##### Other Functions (20)

With a partner, compare and categorize the following array methods. Experiment and test with them.

a) .forEach & .map
b) .concat & .push

// Example answer

| Pure    | Impure  |
|---------|----------|
| map     | forEach |
| concat | push    |

- Discuss when to use map, when to use forEach.

[source](https://ryanpcmcquen.org/javascript/2015/10/25/map-vs-foreach-vs-for.html)

- Say we want to add one to each number in an array

```js
[1, 2, 3].map(x => x + 1);
// [2, 3, 4]

let list = [];
[1, 2, 3].forEach(x => {
  list.push(x)
});
// forEach cannot return anything.
// forEach can only cause effects through side effects
```

- Why use forEach? Let's try to write a "filter" function.
The filter function has two inputs: array, condition
and returns an array of items that match the condition.

```js
function filter(array, condition) {
  //
}

filter([1, 2, 3], function(x) { return x  % 2; });
// result: [2]
```

Answer:

```js
function filter(array, condition) {
  let result = [];
  array.forEach(x => {
    if (condition(x)) {
      result.push(x);
    }
  });
  return result;
}
````

Can we write a filter function using map?

*( No. map returns the same number of items that go in. )*


Check that students understand the difference between concat and push.

```js
let a = [1, 2];
a.concat(3);

console.log(a); // [1, 2] // Why?

// solution, create a new array
a = a.concat(3);
```

### Practice (25)

[Netflix Functional Tutorial](http://reactivex.io/learnrx/)


## Spread, Object.assign, Reduce (30)

##### Group Work

Each group will get a topic. You have 30 minutes to understand the concept and teach it to the class using examples.

- Spread (...)
- Object.assign
- Reduce
- Destructuring
