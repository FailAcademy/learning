---
layout: lesson
title: Intro to PHP
slides: ['_slides/week-06/01-intro-to-php.md']
date: 2015-10-26
---

## Pre-Work

Install MAMP (Mac or Windows version) on your computer:

- [MAMP](https://www.mamp.info/en/downloads/)

Work through the following sections of the [Codeacademy PHP tutorial](https://www.codecademy.com/en/tracks/php):

- Introduction to PHP
- Conditionals and Control Flow
- Arrays
- For Loops in PHP
- While Loops in PHP

---

## Learning Objectives

- Distinguish the difference between a server-side and client-side programming language.
- Identify the fundamental components of PHP syntax.
- Use statements, variables, loops, operators, conditionals, and arrays in PHP.
- Install PHP and configure a development environment.
- Use functions to create reusable blocks of DRY code.
- Distinguish the difference between indexed and associative arrays.
- Dynamically generate a webpage using `include()` or `require()`.

---

## Keywords

- Statement
- Variable
- Boolean
- Loop
- Conditional
- Operator
- Concatenate
- Function
- localhost

---

## Exercise 1

Time to try out some PHP:

- Create an `index.php` file in your `htdocs` directory (or `www` dir if using WAMP)
- In that file write `<?php  ?>` so Apache knows it needs to parse it
- Between your opening and closing PHP tags write `echo "Hello world!";`
- Go to http://localhost:8888 and check it out

---

## Exercise 2

Get ready for your second round of FizzBuzz...PHP-style!

You'll complete this exercise inside of your `index.php` file.

For numbers divisible by 3, `echo` **Fizz** instead of the number, and for numbers divisible by 5 (and not 3), `echo` **Buzz** instead.

When you have that working, modify your program to `echo` **FizzBuzz**, for numbers that are divisible by both 3 and 5 (and still `echo` **Fizz** or **Buzz** for numbers divisible by only one of those).

---

## Exercise 3

Let's create a function in PHP that allows us to `print_r` our arrays automatically wrapped in `<pre>` tags.

Refer back to the earlier example of how to do this without a function, and think about what you'll need to pass in as a parameter.

Once you build you function, try it out on the `$months` array.

---

## Lab Activity

*Lab activity TBA...*

---

## Additional Resources

PHP is a well-documented language and you can find its docs here:

- [Documentation](http://php.net/docs.php)

This online book is a bit dated, but the following chapter is still relevant and very explanatory:

- [Hacking with PHP - How PHP is Written](http://www.hackingwithphp.com/2/6/0/how-php-is-written)
