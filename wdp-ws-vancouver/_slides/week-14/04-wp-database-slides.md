---
layout: slidedeck
title: The WordPress Database Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# The WordPress Database

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1. WP Database Tour

---

template: inverse

# WP Database Tour

---

class: center, middle

.large[
Don't worry, back-end devs need not apply here!
]

---

# WP Does Most of the Heavy Lifting

* We don't have to worry too much about database schema because **WP abstracts the direct database interaction away from us** (we use WP functions for that, not direct SQL queries)
* You mostly just have to worry about setting the right database user and password in your `wp-config.php` file

---

class: center, middle

### Getting, Adding & Deleting Data:

`WP_Query`, `WP_User_Query`, `WP_Tax_Query`, `WP_Meta_Query`, `WP_Comment_Query`, `get_posts()`, `get_users()`, `wp_insert_post()`, `wp_update_post()`, `get_adjacent_post()`, `get_metadata()`, `update_post_meta()`, `delete_usermeta()`, `wp_insert_user()`, `delete_term()`, `wp_get_object_terms()`, etc.

---

# Why Do We Care?

* The underlying architecture of WP is less scary when we understand it a bit better
* Easier to debug issues when certain DB-related functions aren't working
* Allows us to solve (and invent) more interesting problems in WordPress &#9786;

---

# About the WP DB

* We know that WP runs on MySQL, which is an open-source **relational database managament system**
* Relational databases organize data into **rows** and **columns**, with a **unique identifier** for each row (which makes it easier to link rows between tables)
* A single-site installation of **WP creates 12 database tables** (but really only 11 that we're worried about)
* `wp_` is the default table prefix, but you should change this for security reasons upon installation

---

# wp\_{object}s Tables

* `wp_posts`
* `wp_comments`
* `wp_users`

---

# wp\_{object}meta Tables

* `wp_postmeta`
* `wp_commentmeta`
* `wp_usermeta`
* `wp_termmeta` (new as of WP 4.4!)

---

# wp_term\* tables

* `wp_terms`
* `wp_term_taxonomy`
* `wp_term_relationships`

---

# Last but not least...

* `wp_options`

For backward compatibility only:

* `wp_links`

---

# Exercise 1

Let's explore WP's database tables in greater depth. You'll be assigned a table, and it's your job to figure out:

* what it's for
* what data is stored in there (the columns!)
* what other tables it's linked to

You will **create a poster** to illustrate what you've discovered.

After you're done researching your table and creating your visual explanation of it, we'll share our findings as a group.

---

class: center, middle

.large[
Let's take a closer look at an actual database...
]

---

# Custom DB Tables?

* Generally discouraged in WP...the existing schema is very flexible so work with it wherever possible
* There are valid use cases for custom tables (e.g. the Posts 2 Posts and Gravity Forms plugins)
* There are tools within WP to make creating custom tables easier, but we're not going to tackle that in this course

---

# What We've Learned

* How to not fear the WP database

---

template: inverse

# Questions?

{% endhighlight %}
