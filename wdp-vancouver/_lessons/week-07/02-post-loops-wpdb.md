---
layout: lesson
title: Custom Post Loops & the WP Database
slides: ["_slides/week-07/02-post-loops-wpdb.md"]
lesson_date: 2018-11-14
---

## Pre-Work

Some pre-reading on creating customized post loops in WordPress:

- [4 Ways to Loop with WordPress](https://digwp.com/2011/05/loops/)
- [Mastering WP Query](http://code.tutsplus.com/series/mastering-wp_query--cms-818)

More pre-reading on the WordPress database:

- [Tour of the WordPress Database](https://deliciousbrains.com/tour-wordpress-database/)
- [Beginner’s Guide to WordPress Database Management with phpMyAdmin](http://www.wpbeginner.com/beginners-guide/beginners-guide-to-wordpress-database-management-with-phpmyadmin/)

---

## Learning Objectives

- Distinguish between the four different methods for getting posts in WordPress&mdash;the default loop, `query_posts`, `WP_Query`, and `get_posts`.
- Identify additional development concerns related to custom loops, including setting up and resetting post data, and pagination quirks.
- Navigate the WordPress database with confidence and understand how certain actions in WordPress add, update, and delete this data.

---

## Keywords

- [`WP_Query`](https://codex.wordpress.org/Class_Reference/WP_Query)
- [`get_posts`](https://developer.wordpress.org/reference/functions/get_posts/)
- Relational database
- MySQL
- Table

---

## Exercise 1

Let's try building a custom post loop for Project 4 by building the news feed on the homepage.

You'll need to decide whether to use `WP_Query` or `get_posts` first, then you need to create and pass in an array of the appropriate arguments, and finally figure out how to display the returned data on your homepage.

Don't worry about styling yet, just grab the data!

---

## Exercise 2

Let's explore WP's database tables in greater depth. You'll be assigned a table, and it's your job to figure out:

- what it's for
- what data is stored in there (the columns!)
- what other tables it's linked to

You will **create a poster** to illustrate what you've discovered.

After you're done researching your table and creating your visual explanation of it, we'll share our findings as a group.

---

## Lab Activity

Today's lab time will be spent working on Project 4. Based on what you learned today, you can create and finish styling the custom post loop to show the latest posts on the homepage (and the latest Adventures if you're going for the stretch goal).

---

## Additional Resources

Easily manage your MySQL databases using a GUI-based app:

- [Sequel Pro](http://www.sequelpro.com/) (Mac only)
- [MySQL Workbench](http://www.mysql.com/products/workbench/)

A tool to help you generate the required code for creating custom loop queries:

- [GenerateWP: WP_Query Generator](https://generatewp.com/wp_query/)

More info on the WP database:

- [Understanding and Working with Data in WordPress](https://code.tutsplus.com/series/understanding-and-working-with-data-in-wordpress--cms-670)

Everything you wanted to know about `WP_Query` and didn't know to ask:

- [Mastering WP_Query](https://code.tutsplus.com/series/mastering-wp_query--cms-818)

More on the new `wp_termmeta` database table:

- [Introducing Term Meta Data In WordPress And How To Use Them](https://www.smashingmagazine.com/2015/12/how-to-use-term-meta-data-in-wordpress/)
