---
layout: lesson
title: Performance & Optimization
slides: ['_slides/week-07/05-performance.md']
lesson_date: 2017-05-26
---

## Pre-work

Find five ways to improve the performance of your app. Be prepared enough to explain your findings to the class.

Read this [Google Developer article on Performance](https://developers.google.com/web/fundamentals/performance/?hl=en). 

---

## Learning Objectives

- Use `performance.now()` to calculate the average duration of code.
- Estimate the scalability of functions using Big O.
- Become familiar with browser performance measuring tools such as Timeline and Sources. 
- Calculate time to first paint and re-render time for your site or app.
- Describe the **critical render path** and its role in **render blocking**.
- Understand **jank** and how it can be prevented.
- Explain the benefits of using HTTP/2.

---

## Keywords

- performance.now
- Big O
- First paint time
- Re-render time
- Render blocking
- Deferred scripts
- HTTP/2

---

## Exercise 1

Create your own testing tool using `performance.now()`.

It should be a function that takes a function as a parameter and outputs the total duration of that function.

---

## Exercise 2

With a partner, calculate the Big O of given functions.

Choose three additional functions from your code and try to calculate the 'Big O' of each. Compare your estimation with another student.

---

## Exercise 3

Prepare a list of performance improvements based on the reading from [Google Developer: Performance](https://developers.google.com/web/fundamentals/performance/?hl=en).

Compare your list with your group.

---

## Lab Activity

Apply various performance improvements to your projects.

---

## Additional Resources

- [Performance](https://developers.google.com/web/fundamentals/performance/?hl=en)
- [Measuring JS Function Performance](https://www.sitepoint.com/measuring-javascript-functions-performance/)
- [Big O](https://www.interviewcake.com/article/java/big-o-notation-time-and-space-complexity)
- [HTTP/2](https://blog.newrelic.com/2016/02/09/http2-best-practices-web-performance/)
- [Udacity: Website Performance Optimization](https://www.udacity.com/course/website-performance-optimization--ud884)
- [Jank Invaders](http://jakearchibald.github.io/jank-invaders/)
