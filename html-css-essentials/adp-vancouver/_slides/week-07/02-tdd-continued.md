---
layout: slidedeck
title: Coding Interview - TDD Continued
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# The Coding Interview
## (TDD Continued)

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Review of yesterday's lab
1. More TDD Practice
1. Time complexity
1. Big O
1. Using data structures to increase performance
1. MORE TDD Practice

---
template: inverse

## Review: String Compression Lab

---
class: middle

## Exercise: First Unique Character

Using TDD, write a function that returns the first unique character in a string.

Examples:

```js
'dddeeefggghhh' => 'f'
'terfg' => 't'
'frof' => 'r'
'ttttt' => undefined
```

???

The most obvious way to solve this problem is by using a nested loop. For each character (c) in the string, check every other character in the string to see if c is unique.

This has a big O if n^2. [Solution](https://github.com/redacademy/adp-exercise-solutions/blob/master/adp-testing-week/lib/first-unique.js)

---
template: inverse

# Time Complexity
#### How long did your algorithm take to execute?

???

- They won't know what this means!
- Might be helpful to write out the function's output by hand, or in the console, so we can count iterations. [Example](https://github.com/redacademy/adp-exercise-solutions/blob/master/adp-testing-week/lib/first-unique.js)
- We should be able to show n^2 iterations for a nested loop


---

## Time Complexity

Counts the (worst case) number of operations

```js
const numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.length; // 7

// 1 operation
return numbers[0];

// n (7) operations
numbers.forEach(number => {
  console.log(number);
});

//  n^2 (49) operations
numbers.forEach(number => {
  console.log(`outer: ${number}`);

  numbers.forEach(number => {
    console.log(`inner: ${number}`);
  });
});
```

???

- Differentiate between __worst case__ and __average case__ scenarios
- Worst case: everything goes wrong so every iteration has to occur
- Average case: most of the time a medium amount of operations occurs
- Best case: nailed it.

---
## Time Complexity

Grouped by orders of magnitude. Defined using Big O Notation.

.condensed[
- Constant __O(1)__
- N Operations __O(n)__
- N*N Operations __O(n^2)__
- N^N Operations __O(n^n)__
- N! Operations __O(n!)__
]

We read O(1) as "has an O of 1", O(n) as "has an O of n", etc.

???

Use the whiteboard to show how orders of magnitude differ as iterations approach infinity. [Figure 2 in Prework](https://justin.abrah.ms/computer-science/big-o-notation-explained.html)

---
class: middle

## Exercise: First Unique Character

What's the time complexity of your solution?

???

- It will be n^2 because of the nested loop

---
class: middle

## Strategies for Handling Time Complexity

__Using data structures for counting__

What if the first thing you do when iterating over an array is to 'count' the elements within it? How could this apply to the __First Unique Character__ problem?

???

- What would be useful to count for solving this problem? (number of instances of any character)
- How might we do that?

---
class: middle

## Exercise: First Unique Character

Refactor for O(n).

???

[Solution](https://github.com/redacademy/adp-exercise-solutions/blob/master/adp-testing-week/lib/first-unique.js)

---
class: middle

## Exercise: Missing Integer

Write a function that, given an array of `n` integers, returns the minimal positive integer (greater than 0) that does not occur in the array.

For example, given:

```
[1, 3, 6, 4, 1, 2]
```

The function should return 5.

???

Start with the __Brute Force__ method. [Solution](https://github.com/redacademy/adp-exercise-solutions/blob/master/adp-testing-week/lib/missing-integer.js).

---
class: middle

## Code Along: Missing Integer

__Using data structures for counting__

.condensed[
- Iterate over array, counting the occurence of each integer
- Store the count in an array
- The index of the array element is the number being counted
]

What's our new time complexity?

???

[Solution](https://github.com/redacademy/adp-exercise-solutions/blob/master/adp-testing-week/lib/missing-integer.js).

---

## Lab Activity: One Away

There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if that are one (or zero) edits away.

Example:
```
pale, ple => true
pales, pale => true
pale, bale => true
pale, bake => false
face, facts => false
```

What is the time complexity of your solution? Could it be better?

???

- This will probably melt their heads a bit, but worth a shot

[Solution](https://github.com/redacademy/adp-exercise-solutions/blob/master/adp-testing-week/lib/one-away.js)


{% endhighlight %}
