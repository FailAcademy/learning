---
layout: slidedeck
title: JavaScript Arrays Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# JavaScript Arrays

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

???

**Important note to instructors:** This lesson should be carried out using JSBin (as noted in the pre-work).

---

layout: false

# Agenda

1. Array basics
2. Use loops to iterate arrays
3. Modify arrays with built-in methods

---

template: inverese

# Array Basics

---

class: center, middle

### What are arrays?

Arrays are special object in JavaScript that store a list of values, but the key for each value is an **index number**.

---

# Index Numbers?

- Index numbers in an array are like the property key names in regular objects
- But instead of choosing the names, they are always set to numbers in ascending order
- **Weirdness alert!** In JavaScript, counting always starts at 0
- Index numbers allow us to assign and access values in arrays

---

# The Syntax of Arrays

Sometimes, you'll need to store a list of values. Instead of declaring a `variable` for each value, we can organize them into a list.

For arrays, we use square brackets (instead of curly braces):

```js
const friends = [
  // your array items will go here...
];
```

---

# Using Arrays

Add values to an array by separating them with commas:

```js
const friends = ["Curie", "Einstein", "Turing", "Tesla"];

const enemies = ["Homework", "Spiders", "Darth Vader", "Hans Gruber"];
```

_How do we find out how many enemies are in the above arrays?_

???

Be sure to demonstrate how `.length` works here too.

---

# Using Arrays

You can put **any** JavaScript value into an array!

```js
const mixedList = [
  function() {}, 
  42, 
  "Bob", 
  [1, 2, 30 - 27], 
  anotherValue
];
```

**Can you think of examples of information (data) in arrays, in the UI of web pages you use every day? 📝**

---

# Array Access

Array elements are _always stored in the order they were added._ 

In JS, individual array elements are accessed by their `index` position:

```js
const rangers = [
  ["Jason", "Triceratops"],
  ["Billy", "Tyrannosaurus"],
  ["Trini", "Sabre-toothed Tiger"],
  ["Kimberly", "Pteradactyl"]
];

const blueRanger = rangers[0];
const redRanger = rangers[1];
const yellowRanger = rangers[2];
const pinkRanger = rangers[3];
```

**How would you access each ranger's dinosaur avatar?**

---

# Arrays of Elements

Sometimes it's useful to think about DOM elements as arrays:

```html
<h2>Bucket List:</h2>
<ul>
  <li>Sneak into Buckingham Palace</li>
  <li>Take chocolate milk bath</li>
  <li>Write manifesto</li>
</ul>
```

There are a few convenient DOM functions you can use to gather an array of elements:

```js
const bucketListItemEls = document.querySelectorAll("ul li");
// bucketListItemEls is an array of DOM elements!

const importantItemText = bucketListItemEls[2].innerText;
// What is the value of importantItemText?
```

---

# Exercise 1

Add items to your bucket list array, and write some JS to display each item in an `<li>` inside of the `<ul>`. 

**Use JSBin to complete this exercise:<br />[https://jsbin.com/?html,js,output](https://jsbin.com/?html,js,output)**

```js
const bucketList = [
  // Add your items here
];

// Write JS to append each array item to the DOM here
```

```html
<h2>Bucket List:</h2>
<ul id="bucketList">
  <!-- Append your items using JS here -->
</ul>
```

---
template: inverse

# Using Loops with Arrays

---
class: center, middle

### What are loops?

Loops are an important construct in programming that allow you to run the same code over and over again until a certain condition is met.

*Why would these be helpful when working with arrays?*

---

# While Loops

While loops are helpful when you don't know how many times it needs to run:

```js
let i = 0;
let score = 0;

while (i < 5) {
  score = i;
  console.log('Your score : ' + score);
  i++;
}
```

_What do you think the final score will be after this loop runs?_

---

# For Loops

For loops allow you to set a specific number of times that the loop will run:

```js
let count = 0;

for (let i = 1; i < 5; i++) {
  count = i;
  console.log('Current count: ' + count);
}
```

You will likely find yourself using for loops most often with "arrays" (we'll get to those shortly...).

---

# Arrays and Loops

Let's take our friend list array and print it out in a list:

```js
const friends = ["Curie", "Einstein", "Turing", "Tesla"];

// Remember how we manually set the max. number of loops before?
// We can use the array "length" to get the number automatically:

const totalFriends = friends.length;

for (let i = 0; i < totalFriends; i++) {
  console.log(friends[i]);
}
```

---

# Arrays and Loops

Often, you'll need to perform an operation on an array that involves _every element in the array_.

We can use **built-in loop functions** to **loop over** each element in our arrays, and run a function with that element is in scope:

```js
const bucketList = [
  "Bend a spoon using only mind",
  "Achieve PEGOT",
  "Learn Esperanto"
];

// Access each item and that item's index position.
bucketList.forEach(function(listItem, index) {
  console.log("Item at index:", index, "is:", listItem);
});
```

.footnote[_* More on looping later..._]

---

# Exercise 2

Take the code you wrote in the previous exercise, and re-write your solution using the `forEach` function. Add an `id` to each `li` and set the value of the `id` to the item's index <br/> (eg. `<li id="2">Item</li>`). Good luck!

```js
const bucketList = [
  // Add your items here
];

// Use "forEach" to append each item to the DOM and add an id
```

```html
<h2>Bucket List:</h2>
<ul id="bucketList">
  <!-- Append your items here -->
</ul>
```

---

template: inverse

# Modifying Arrays

---

# More Array Methods

While `forEach` is helpful, and there are quite a few more built-in array functions (typically called array **methods**).

Have a 👀 at the many **[built-in array methods on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#)**.

**In groups, can you discover which method should you use to:**

```md
- Add an element to the start (head) of an array?
- Add an element to the end (tail) of an array?
- Remove an element from the head of an array?
- Remove an element from the tail of an array?
- Remove an element from the middle of an array?
- Merge two arrays together?
```

Create examples of each method in use as you discover them.

???

Give 10 minutes for group work, and then prompt groups to demo their findings.

Students can use the `friends` and `enemies` arrays for this.

---

# Exercise 3

See the [lesson page](/lesson/04-javascript-arrays/) for further instructions.

???

This exercise will be difficult. Give students adequate time to try things on their own, before demoing the solution.

Team students up in pairs to code together may also be helpful!

---

# Searching Arrays

JavaScript has some useful built-in functions for searching through arrays. Here are the most common:

```js
const items = ["first", 2, "third"];

const indexOfFirstString = items.indexOf(function(item) {
  return typeof item === "string";
});

const found = items.find(function(item) {
  return item === "third";
});

const hasNumber = items.some(function(item) {
  return typeof item === "number";
});
```

**What are the values of the variables assigned here?**

???

Ask students to determine the value of each variable. Demonstrate if necessary.

---

# Exercise 4

See the [lesson page](/lesson/04-javascript-arrays/) for further instructions.

---

# Sorting Arrays

**⚠️ JavaScript "gotcha" ahead ⚠️**

JavaScript provides some default sorting conditions for you to easily sort your arrays:

```js
const numbers = [1, 100000, 30, 4, 21];
numbers.sort();
console.log(numbers); // Not what you expected?
```

Or, you may provide your own sorting logic, using a `function` that returns `true` or `false`:

```js
const numbers = [1, 100000, 30, 4, 21];
numbers.sort((a, b) => a < b);
console.log(numbers); // Again, not what you expected?
```

???

Be sure to explain why sorting numbers does not do what it should.

---
class: center, middle

.large[
  Modifying array items the hard way...
]

---

# Filtering Arrays

Sometimes you'll need to take an array and **filter** out certain values. Here is how you could do it, using a `function` and a `for of` loop. How does this code work?

```js
function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}
```

☝️ This function returns a **new array** leaving the original in-tact.

.footnote[Source - Eloquent JavaScript]

???

Solicit students for an explanation of this code.

Optionally, students can be put into groups to come up with an explanation collaboratively.

Also be sure to highlight the use of this new kind of loop.

---

# Transforming Arrays

Another operation you'll often perform is taking one array, and modifying the contents of each item, depending on a specific condition. Take a close look at this code and try to reason about how it works:

```js
function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}
```

☝️ This function returns a **new array** leaving the original in-tact.

.footnote[Source - Eloquent JavaScript]

---
class: center, middle

.large[
  Modifying array items the easier way...
]

---

# Array `filter` and `map`

You'll filter and transform arrays _so often_, there are JavaScript built-in array methods that you can (and will often) use to perform both **[filtering]((https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)** and **[mapping](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)** arrays:

```js
const rangers = [
  ["Jason", "Triceratops"],
  ["Billy", "Tyrannosaurus"],
  ["Trini", "Sabre-toothed Tiger"],
  ["Kimberly", "Pteradactyl"]
];

const rangerNames = rangers.map(ranger => ranger[0]);

const femaleRangers = rangers.filter(
  ranger => ranger[0] === "Trini" || ranger[0] === "Kimberly"
);
```

☝️ **Note**: `map` and `filter` create a **new array** too.

???

Be sure to review "implicit return" syntax and arrow functions.

It may also be worth discussing at this point why/when it's useful to leave original arrays in-tact.

---

# What We've Learned

- How to work with arrays and their items in JS
- How to iterate over arrays with `for` loops and the built-in `.forEach()` method
- How to sort and modify arrays with other built-in methods

---

template: inverse

# Questions?

{% endhighlight %}
