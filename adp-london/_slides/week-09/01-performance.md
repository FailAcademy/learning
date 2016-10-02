---
layout: slidedeck
title: Performance Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Performance

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false
class: center, middle

# Performance

What is performance?

---
template: inverse

# Micro Perf

---

```js
function run() {
  let total = 0;
  for (let i = 1; i < 100000; i++) {
    total += i;
  }
  return total;
}

run();
```

---

# Performance.now() 

Performance measuring function.

```js
performance.now();
```

Note: browser only.

---

# Measuring Performance

Write a function to measure how long a given function takes to run.

```js
function measurePerf(fn) {
  // measure time here
}
```

---

# Measuring Performance

```js
function measurePerf(fn) {
  const start = performance.now();
  fn();
  const end = performance.now();
  const duration = end - start;
  return duration;
}
```

---

# Basic Setup 

```html
  <h3>Measuring Performance</h3>
  <button id="run">Run</button>
  <span id="perfTime"></span>
```

```js
document.getElementById("run")
  .addEventListener("click", () => {
    document.getElementById('perfTime').innerText = measurePerf(run);
  });
```

---

# Margin of Error

Run the performance measurer multiple times.

Compare your results with another student.

Why might the numbers be different?

---

# Median

Change your function to calculate the "median".

---

# Median

```js
const runs = [];

function measurePerf(fn) {
  /* ... */
  runs.push(duration);
}

function medianPerf(list) {
  let middleIndex = Math.floor(list.length / 2);
  return list[middleIndex];
}

document.getElementById("run")
  .addEventListener("click", () => {
    measurePerf(run);
    document.getElementById('perfTime').innerText = medianPerf(runs);
  });
```

---

# Performance Testing

Take a minute and discuss the following issues:

- reliability of performance testing
- when to do performance testing
- what to do with performance testing results

---
template: inverse

# Macro Perf

---

# Big O

"Big O" is a simplified performance algorithm.

It gives programmers an idea of how long a program will take under the slowest condition.

```
O(n)    <( "Order n" )
O(n^2)  <( "Order n squared" )
```

---

# O(1)

Imagine we have a phone book with one name. Whenever we look up that name it will always take us 1 try.

We call this "order 1", or "O(1)". 

---

# O(n)

Imagine now our phone book has 100 names.

If we are looking for "Xavier Zyskowski", it might take us a while.

`O(100) = O(n)`

For "n" number of items, it will take you a maximum amount of "n" tries.

---

# O(n)

In code, "O(n)" is just a loop:
  - `for`
  - `while`
  - `forEach`
  - `map`
  - `find`
  - etc.

```js
let names = [/* 100 names */];
names.find(name => name === 'Xavier Zyskowsi');
```

---

# O(n+1) = O(n)

As we add items, instead of saying "O(n + 1)", we just keep saying "O(n)".

**Big O** is not concerned with small things like addition or subtraction.

Big O is focused on how each additional data point might make our program continually slower.


---

# Better Strategies

O(n) is not great, depending on the problem.

What might be a better strategy to look up a name in a phone book?

*Keep in mind that a phone book is ordered alphabetically.*

*Describe your algorithm in a way a computer might understand.* 

---

# O(log n)

Divide the phone book in half.
Select the half that alphabetically contains your name.
Continue.

---

# O(log n)

This algorithm is often called "binary search".

```js
function binarySearch(arr, i) {
    var mid = Math.floor(arr.length / 2);

    if (arr[mid] === i) {
        return arr[mid];
    } else if (arr[mid] < i && arr.length > 1) {
        binarySearch(arr.splice(mid, Number.MAX_VALUE), i);
    } else if (arr[mid] > i && arr.length > 1) {
        binarySearch(arr.splice(0, mid), i);
    } else {
        return -1;
    }
}
binarySearch(names, names.length);
```

---

# Optimal

O(log n) is only possible when data is sorted.

An unsorted phone book would still be, at best, O(n). 

Big O is helpful because it can give us a rough idea of what the fastest algorithm might be for a given situation.

---

# O(n^2)

If O(n) is a single loop, what is O(n^2)?

---

# Big O in Practice

Remove all duplicates from a list.

```js
const list = [1, 2, 3, 4, 5, 3, 7, 2, 1, 1];
function removeDups(list) {
  let output = [];
  list.forEach(item => {
    if (!output.includes(item)) {
      output.push(item);
    }
  });
  return output;
}
```

What is the big O of the above function?

---

# Big O in Practice

There are actually two loops.

1. `list.forEach(item => { ... });`

2. `output.includes(item)` 

Big O = O(n^2)

If all items are unique([ 1, 2, 3, 4, 5, ...])
1000 items will take up to 1,000,000 operations.

Can this be improved?

---

# Big O in Practice

Remove all duplicates from a list.

```js
const list = [1, 2, 3, 4, 5, 3, 7, 2, 1, 1];
function removeDups(list) {
  let output = [];
  let items = {};
  list.forEach(item => {
    if (!items[item]) {
      output.push(item);
    }
    items[item] = true;
  });
}
```

What is the big O of the following?

---

# Big O in Practice

There is a single loop.

1. `list.forEach(item => { ... })`

We run two operations in each loop.

1. `if (!items[item]) { ... }`

Big O = 2n

---

# Comparing

Which is faster?

- O(n^2)
- O(2n)

Calculate the number of operations for a list of 1000 items.

---

# Big O

Take a minute and discuss with a partner.

- Would you like to learn more about "big O"? Why or why not?

- How might you apply "big O" algorithms to improving your code?

---
template: inverse

# Browser Perf

---

# Content Efficiency

Read [Content Efficiency](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/?hl=en).

- What points can you take from this article?
- How will you use this information to improve your app or site?

---

# Critical Rendering Path

Read [CRP](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/?hl=en)

Make sure you get a solid understanding of **critical rendering path**, **render blocking** & **jank**.

---

# Critical Render Path (CRP)

The CRP is the order of operations the browser takes to render a page.

```
DOM -> CSSOM -> Render Tree -> Layout -> Paint
  |                 ^
  |---> JS ---------|
```

Understanding CRP order is "critical" for finding performance improvements.

---

# Render-Blocking

**Render Blocking** refers to time the user must wait while the browser does a blocking operation. 

These can include:

- waiting for the DOM to load
- waiting for the CSS to load
- waiting for scripts in the `<head>` to load

How can we use our knowledge of render blocking to improve performance?

---

# Jank

- What is **jank**?
- Does your app show any instances of jank?
- How often do devices refresh their screen?
- How can you avoid jank?

---

# Jank

To avoid jank, bring your rendering below **10ms**.

---

# Avoiding Jank

- optimize JS
- reduce elements rendered
- reduce elements styled
- reduce css rules. Use CSS Modules or BEM.
- use **flexbox** over complex layout
- reduce **thrashing**
- simplify animations and layout
- **debounce** inputs & scrolling


---
template: inverse

# HTTP

---

# HTTP

HTTP is a common format for communicating between the client & server.

Your images, data, scripts, CSS & HTML are all loaded over HTTP.

```
SERVER <- HTTP -> CLIENT 
```

How might you improve HTTP performance?

---

# HTTP Caching

**HTTP Caching** refers to saving loaded files in the browser. 

Previously made requests can be loaded, and don't need to go over the wire.

---

# Cache: ETags

Provide a use case for each of the following:

- "no-cache" vs. "no-store"
- "public" vs. "private"
- "max-age"

---

# Cache: Max-Age

max-age=86400 = 1 day (60 sec * 60 mins * 24 hours)

max-age=300 = ?

max-age=604800 = ?

---

# Cache Manager

- [React-Lazy-Cache](https://github.com/erikras/react-lazy-cache)
- [Facebook: DataLoader](https://github.com/facebook/dataloader)
- [Node-Cache](https://github.com/mpneuried/nodecache)

---

# HTTP/2

Read [HTTP/2](https://blog.newrelic.com/2016/02/09/http2-best-practices-web-performance/).

- What are the benefits of using HTTP/2 over HTTP/1.1?
- Are there any downsides to using HTTP/2?
- How can you setup HTTP/2?

---

# HTTP/2

- creates a single connection between the client and server
- multiple requests at the same time
- allows prioritizing resources
- uses fewer server resources

---

# Review

- What were some of your favorite performance improvements?
- Which performance improvements did were missing from today?
- Which performance improvements will you implement?
- How will you use "big O" to improve your code?

{% endhighlight %}
