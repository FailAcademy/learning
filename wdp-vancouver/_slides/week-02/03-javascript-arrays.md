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

1. **Array basics**, what are arrays and how to use them
2. **Interacting with the DOM** gather and create html elements
2. **Using loops** to iterate through arrays
3. **Modify arrays** with built-in methods

---

template: inverse

# Array Basics

---

# What Are Arrays?

Arrays are a special object in JavaScript that store a list of values. 

The key for each value is an **index number**. 

```js
let shoppingList = ["milk", "bread", "eggs"];

// shoppingList[0] = "milk"
// shoppingList[1] = "bread"
// shoppingList[2] = "eggs"
```


---

# Index Numbers?

- Index numbers in an array are like the property key names in regular objects
- Instead of choosing the names, they are always set to numbers in ascending order
- **note** that with JavaScript, counting Arrays always starts at **0**
- Index numbers allow us to assign and access values in arrays

---

# Using Arrays

Add values to an array by separating them with commas:

```js
const products = [
  'Stretch Knit Dress', 
  'Cotton Blue Shirt', 
  'Checked Stretch Dress', 
  'Blue Hipster Backpack'
];
```

Note that you can put **any** JavaScript value into an array, not just strings!

_How do we find out how many products are in the above array?_

???

Be sure to demonstrate how `.length` works here too.

---

# Array Access

Array elements are always stored in the order they were added.

In JS, individual array elements are accessed by their `index` position:

```js
const products = ['Stretch Knit Dress', 'Cotton Blue Shirt', 
'Checked Stretch Dress', 'Blue Hipster Backpack'];

const knitDress = products[0];
const cottonShirt = products[1];
const checkedDress = products[2];
const hipsterBackpack = products[3];
```

_How would we update the third element of the array?_

---

template: inverse

# Interacting with the DOM

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

We can use `querySelectorAll` or `getElementsByClassName` to gather an array of elements:

```js
const bucketListItemEls = document.querySelectorAll('ul li');
// bucketListItemEls is an array of DOM elements!

const importantItemText = bucketListItemEls[2].innerText;
// What is the value of importantItemText?
```

---

# Accessing Elements

In the previous example we've seen how to grab a collection of html elements with `document.querySelectorAll` however there are many other `methods` available with the `document`.

**Here are a few:**

- `document.getElementById('idSelector');`
- `document.getElementsByTagName('tagName');`
- `document.getElementsByClassName('classSelector');`

---

# Creating Elements

We can also create new elements with the document method `document.createElement('tagName');`

For example to create a list item:

```JavaScript
// create a list item
document.createElement('li');

// create a div
document.createElement('div');

// create a paragraph
document.createElement('p');
```

---

# Appending Elements

Creating elements is useful with JavaScript however we still need to append them to our html.

First you need to get an element to append to e.g.

```html
<ul id="bucketList"></ul>
```

We can get the `<ul>` element and store a reference to it in a variable for access later e.g.

```JavaScript
const bucketListUl = document.getElementById('bucketList');
```

---

# Appending Elements

Now that we've stored a reference to the `<ul>` in a variable we can append to this element using the `.append()` method.
First let's create an element to append and add some text to the element.

```JavaScript
// create a new list item
const newListItem = document.createElement('li');
// add some text to the list item
newListItem.innerText = 'Master JavaScript';
```

With the element created we can now append it to the ul.

```JavaScript
bucketListUl.append(newListItem);
```

---

# Exercise 1

Add items to your bucket list array, and write some JS to display each item in an `<li>` appended to the `<ul>`.

**Use [JSBin](https://jsbin.com/?html,js,output) or [CodePen](https://codepen.io/) to complete this exercise**

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

_Why would these be helpful when working with arrays?_

---

# While Loops

While loops are helpful when you don't know how many times it needs to run:

```js
let i = 0;
let max = 5;
let score = 0;

while (i < max) {
  score += i;
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

Let's take our products list array and print it out in a list:

```js
const products = ['Stretch Knit Dress', 'Cotton Blue Shirt', 
'Checked Stretch Dress', 'Blue Hipster Backpack'];
```

Remember how we manually set the maximum number of loops before? We can use the `length` array method to get the number automatically:

```js
const totalProducts = products.length;

for (let i = 0; i < totalProducts; i++) {
  console.log(products[i]);
}
```

---

# Arrays and Loops

Often, you'll need to perform an operation on an array that involves _every element in the array_.

We can use **built-in loop functions** to **loop over** each element in our array, with a callback function for each element:

```js
const products = ['Stretch Knit Dress', 'Cotton Blue Shirt', 
'Checked Stretch Dress', 'Blue Hipster Backpack'];

// Access each item and that item's index position.
products.forEach(function(listItem, index) {
  console.log('Item at index:', index, 'is:', listItem);
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

Have a look at the many **[built-in array methods on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#)**.

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

See the [lesson page](/lesson/03-javascript-arrays/) for further instructions.

???

This exercise will be difficult. Give students adequate time to try things on their own, before demoing the solution.

Team students up in pairs to code together may also be helpful!

---

# Searching Arrays

JavaScript has some useful built-in functions for searching through arrays. Here are the most common:

```js
const items = ['first', 2, 'third'];

const indexOfFirstString = items.indexOf('first');

const found = items.find(function(item) {
  return item === 'third';
});

const hasNumber = items.some(function(item) {
  return typeof item === 'number';
});
```

**What are the values of the variables assigned here?**

???

Ask students to determine the value of each variable. Demonstrate if necessary.

---

# Exercise 4

See the [lesson page](/lesson/03-javascript-arrays/) for further instructions.

---

# Sorting Arrays

JavaScript provides some default sorting conditions for you to easily sort your arrays:

```js
const numbers = [1, 100000, 30, 4, 21];
numbers.sort();
console.log(numbers); // Not what you expected?
```

Or, you may provide your own sorting logic, using a function that returns a negative, positive or zero value:

```js
const numbers = [1, 100000, 30, 4, 21];

numbers.sort((a, b) => a < b);
console.log(numbers); // Again, not what you expected?

numbers.sort((a, b) => a - b);
console.log(numbers); // How about now? Why does this work?
```

???

Be sure to explain why sorting numbers does not do what it should.

---

# Array `filter` and `map`

You'll filter and transform arrays _so often_, there are JavaScript built-in array methods that you can (and will often) use to perform both **[filtering](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)** and **[mapping](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)** of Arrays

- **filter** - allows us to filter an array so only certain elements are included. 

- **map** - allows us to perform an operation on each element of the array. 

**Note**: `map` and `filter` both create a **new array**.
---

# Array `filter`


```js
const products = [
  ['Stretch Knit Dress', 169.00],
  ['Cotton Blue Shirt', 89.00],
  ['Checked Stretch Dress', 129.00],
  ['Blue Hipster Backpack', 69.00],
];

const underOneHundred = products.filter(function(product) {
  if(product[1] < 100.00) return true;
});
```

`filter` applies the callback function to each element of the array, only elements where the callback returns `true` are included in the resulting array. 

_What will `underOneHundred` contain?_

???

It may also be worth discussing at this point why/when it's useful to leave original arrays in-tact.

---

# Array `map`

```js
const products = [
  ['Stretch Knit Dress', 169.00],
  ['Cotton Blue Shirt', 89.00],
  ['Checked Stretch Dress', 129.00],
  ['Blue Hipster Backpack', 69.00],
];

const productNames = products.map(function(product) { 
  return product[0];
});
```

`map` applies the callback function to each element of the array and creates a new array based on the return values of the callback. 

_What will `productNames` contain?_
 
---

# What We've Learned

- How to work with arrays and their items in JS
- How to iterate over arrays with `for` loops and the built-in `.forEach()` method
- How to sort and modify arrays with other built-in methods

---

template: inverse

# Questions?

{% endhighlight %}
