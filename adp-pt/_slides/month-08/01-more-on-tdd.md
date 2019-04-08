---
layout: slidedeck
title: More on TDD Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# More on TDD

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1. Review of yesterday's lab
2. More TDD practice
3. Time complexity
4. Big O
5. Using data structures to increase performance
6. EVENT MORE TDD PRACTICE!

---

template: inverse

# Review: <br />String Compression Lab

---

template: inverse

# More TDD Practice

---

# Exercise 1

Using TDD, write a function that **returns the first unique character** in a string.

Examples:

- `'dddeeefggghhh'` => `'f'`
- `'terfg'` => `'t'`
- `'frof'` => `'r'`
- `'ttttt'` => `undefined`

???

The most obvious way to solve this problem is by using a nested loop. For each character (c) in the string, check every other character in the string to see if c is unique.

This has a big O if n^2. [The solution is here.](https://github.com/redacademy/adp-exercise-solutions/blob/master/adp-testing-week/lib/first-unique.js)

---

template: inverse

# Time Complexity & Big O Notation

---

class: center, middle

.large[
How long did your algorithm take to execute?
]

???

- They won't know what this means!
- Might be helpful to write out the function's output by hand, or in the console, so we can count iterations
- [Example](https://github.com/redacademy/adp-exercise-solutions/blob/master/adp-testing-week/lib/first-unique.js)
- We should be able to show n^2 iterations for a nested loop

---

# Time Complexity

Counts the (worst case) number of operations:

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

- Differentiate between **worst case** and **average case** scenarios
- Worst case: everything goes wrong so every iteration has to occur
- Average case: most of the time a medium amount of operations occurs
- Best case: nailed it.

---

# Time Complexity

Grouped by orders of magnitude, defined using **Big O Notation**:

- Constant `O(1)`
- N Operations `O(n)`
- N\*N Operations `O(n^2)`
- N^N Operations `O(n^n)`
- N! Operations `O(n!)`

We read O(1) as "has an O of 1", O(n) as "has an O of n", etc.

???

- Use the whiteboard to show how orders of magnitude differ as iterations approach infinity.
- [Figure 2 in lesson pre-work](https://justin.abrah.ms/computer-science/big-o-notation-explained.html)

---

# Exercise 2

Figure out the time complexity of your solution to Exercise 1.

???

- It will be n^2 because of the nested loop

---

template: inverse

# Strategies for Handling Time Complexity

---

# Using Data Structures for Counting

What if the first thing you do when iterating over an array is to 'count' the elements within it?

How could this apply to the **First Unique Character** problem?

???

- What would be useful to count for solving this problem? (number of instances of any character)
- How might we do that?

---

# Exercise 3

Refactor your Exercise 1 solution for O(n).

???

- [The solution is available here](https://github.com/redacademy/adp-exercise-solutions/blob/master/adp-testing-week/lib/first-unique.js)

---

# Exercise 4

Write a function that, given an array of `n` integers, returns the minimal positive integer (greater than 0) that does not occur in the array.

For example, given:

```
[1, 3, 6, 4, 1, 2]
```

The function should return `5`.

???

- Start with the **Brute Force** method.
- [The solution is available here](https://github.com/redacademy/adp-exercise-solutions/blob/master/adp-testing-week/lib/missing-integer.js).

---

# Lab (Next Class)

**Using data structures for counting:**

- Iterate over array, counting the occurrence of each integer
- Store the count in an array
- The index of the array element is the number being counted

_What's our new time complexity?_

???

- [The solution is available here](https://github.com/redacademy/adp-exercise-solutions/blob/master/adp-testing-week/lib/missing-integer.js).

---

# What We've Learned

- What time complexity is
- How to use Big O Notation
- How to use data structure to improve performance

{% endhighlight %}
