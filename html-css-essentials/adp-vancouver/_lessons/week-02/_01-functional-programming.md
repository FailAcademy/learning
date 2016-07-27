# Lesson: Functional Programming

## Topics

- pure & impure
- higher order functions


## Pure or Impure

##### Discussion

Discussion: What is a pure or impure function?

Example:
a) toaster(bread) { return _____; } // ex: toast + heat = pure
b) human(toast) { return _____; } // ex: run, jump, talk = impure


Write: Pure functions are ______. // predictable, encapsulated, free of side effects

##### Game

Pure or Impure game. Write a function and ask students to discuss if it is "Pure" or "Impure".

a)
```js
function addOne(x) {
  return x + 1;
}
```
// pure

b)
```js
function addOne(x) {
  console.log(x + 1);
}
```
// impure, side effects

c)
```js
let x = 0
function addOne(x) {
  x += 1;
  return x;
}
```
// impure, side effects, not encapsulated

d)
```js
const addOne = (function() {
  let x = 0;
  return function() {
    return x += 1;
  }
})();
```
// pure, encapsulated
// wrapping an impure function in a pure function creates a pure function


##### Check

Why prefer pure functions? Ask students to fill in the blank.

Write: _________ability
// ex: reusability, predictability, testability, readability


## Higher Order Functions

##### Lesson

Functions have inputs and outputs. Ask students: can a function be:

a. an input be another function?

```js
function addOneToFunction(fn) {
	return fn() + 1;
}
function getOne() { return 1; }
addOneToFunction(getOne);
```

b. Can a function output be another function?
// thunk, more on this later

c. Can a function input & output be the function itself?
// recursion, a function that calls itself

## Array Methods

##### Lesson

In a console, type `Array.prototype`2

Array Methods - functions that take a function

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

##### Filter

a. write a function called "filter" that takes a list of integers and returns only the even numbers.

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

In a console, type "Array.prototype." and see what autocomplete options come up. Which "array methods" do you see? What do you think they do?

// example: sort, filter, concat, push, every, some, find, forEach, map, reduce, includes, reverse, etc.

b. Using Array methods, make the list look like this: [9, 8, 7, 6, 5, 4, 3, 2, 1]

// list.reverse()


c. Make the list look like this: [8, 6, 4, 2];

// list.filter(x => x % 2).reverse();

This is called chaining.

Chaining is often structured in rows

```js
list.filter(x => x % 2)
    .reverse();
```


d. What happens when we add `sort()` on the end?

```js
list.filter(x => x % 2)
    .reverse()
    .sort();
// [2, 4, 6, 8]
```

##### Other Functions

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

// answer

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

The filter function cannot be created with map. Why?
// map returns the same number of items that go in


```js
let a = [1, 2];
a.concat(3);

console.log(a); // [1, 2] // Why?

// solution, create a new array
a = a.concat(3);
```

##### Group Work

Each group will get a topic. You have 30 minutes to understand the concept and teach it to the class using examples.

- Spread (...)
- Object.Assign
- Reduce
- ?
