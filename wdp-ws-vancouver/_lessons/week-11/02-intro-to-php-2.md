---
layout: lesson
title: Intro to PHP - Loops and Functions
slides: ["_slides/week-11/02-intro-to-php-2-slides.md"]
lesson_date: 2018-04-17
---

## Pre-work

_If you already finished watching all of the videos about arrays from the PHP Practitioner series, there's no additional pre-work for this lesson._

---

## Learning Objectives

- Use different types of loops in PHP.
- Use functions to create reusable blocks of DRY code.
- Distinguish the difference between indexed and associative arrays.
- Dynamically generate a webpage using `include()` or `require()`.

---

## Keywords

- Loop
- Function

---

## Exercise 1

Get ready for your second round of FizzBuzz...PHP-style!

You'll complete this exercise inside of your `index.php` file.

For numbers divisible by 3, `echo` **Fizz** instead of the number, and for numbers divisible by 5 (and not 3), `echo` **Buzz** instead.

When you have that working, modify your program to `echo` **FizzBuzz**, for numbers that are divisible by both 3 and 5 (and still `echo` **Fizz** or **Buzz** for numbers divisible by only one of those).

---

## Exercise 2

Let's create a function in PHP that allows us to `print_r` our arrays automatically wrapped in `<pre>` tags.

Refer back to the earlier example of how to do this without a function, and think about what you'll need to pass in as a parameter for this function.

Once you build you function, try it out on the `$months` array.

---

## Lab Activity (Today + Next Class)

During this lab, we'll build a pseudo-blog in PHP called **Space Blog**.

We're calling this a "pseudo-blog" because you won't actually be creating a database or a UI for adding new content to the site (phew!). You will instead parse some provided post-like JSON-formatted data in PHP to create a site that looks like a blog.

To get started, **[download the lab files](/public/files/labs/php-lab.zip)**.

Inside the lab folder, you'll find comps illustrating what the home page and about page should look like, and a zip file containing a boilerplate file structure to help get you started.

The only file in the boilerplate that contains any code is the `posts.json` file&mdash;this is the file from which you will be dynamically displaying your "blog" content.

What you need to do to complete this lab:

- Create a blog index page to display all the posts (by parsing the JSON data in PHP)
- Create an About page for the blog
- Dynamically include a `header.php`, `sidebar.php`, and `footer.php` file in each of the site's pages (instead of including this mark-up statically on each page)
- Format the post data as per the design comp (e.g. posts will be displayed in reverse chronological order, categories name will be capitalized, and dates will be converted from Unix time to human-readble time)
- Abstract the functions you create into a `functions.php` file, and `require` it where needed (views are dumb...we don't want any logic in our views!)
- Adequately reflect the designer's vision for this site

**Hint!** You can include the Roboto font on your site by adding this snippet to the `<head>` element:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,400italic,700,700italic">
```

**Extra hint!** The content area is `1000px` wide.

---

## Additional Resources

Another PHP resource, written with WP devs in mind:

- [WordPress Development for Beginners: Learning PHP](http://premium.wpmudev.org/blog/wordpress-development-beginners-php/)
