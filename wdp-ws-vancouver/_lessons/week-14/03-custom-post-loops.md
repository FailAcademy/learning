---
layout: lesson
title: Custom Post Loops
slides: ['_slides/week-14/03-custom-post-loops-slides.md']
lesson_date: 2018-05-10
---

## Pre-work

Some pre-reading on creating customized post loops in WordPress:

* [4 Ways to Loop with WordPress](https://digwp.com/2011/05/loops/)
* [Mastering WP Query](http://code.tutsplus.com/series/mastering-wp_query--cms-818)

---

## Learning Objectives

* Distinguish between the four different methods for getting posts in WordPress&mdash;the default loop, `query_posts`, `WP_Query`, and `get_posts`.
* Identify additional development concerns related to custom loops, including setting up and resetting post data, and pagination quirks.

---

## Keywords

* [`WP_Query`](https://codex.wordpress.org/Class_Reference/WP_Query)
* [`get_posts`](https://developer.wordpress.org/reference/functions/get_posts/)

---

## Exercise 1

Let's try building a custom post loop for Project 4 by building the news feed on the homepage.

You'll need to decide whether to use `WP_Query` or `get_posts` first, then you need to create and pass in an array of the appropriate arguments, and finally figure out how to display the returned data on your homepage.

Don't worry about styling yet, just grab the data!

---

## Homework

Based on what you learned today, you can create and finish styling the custom post loop to show the latest posts on the homepage (and the latest Adventures if you're going for the stretch goal).

---

## Additional Resources

A tool to help you generate the required code for creating custom loop queries:

* [GenerateWP: WP_Query Generator](https://generatewp.com/wp_query/)

Everything you wanted to know about `WP_Query` and didn't know to ask:

* [Mastering WP_Query](https://code.tutsplus.com/series/mastering-wp_query--cms-818)
