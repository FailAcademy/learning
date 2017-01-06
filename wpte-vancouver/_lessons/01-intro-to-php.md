---
layout: lesson
title: Intro to PHP
slides: ['_slides/01-intro-to-php.md']
---


# Pre-Work

Review HTML & CSS.
You should have a strong of HTML & CSS and familiarity with JavaScript.


---

## Learning Objectives

- Distinguish the difference between a server-side and client-side programming language.
- Identify the fundamental components of PHP syntax.
- Use statements, variables, loops, operators, conditionals, and arrays in PHP.
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
- Array
- Function
- localhost

---

## Exercise 1

Time to try out some PHP:

- Create an `index.php` file in a sub-directory of the `htdocs` folder in your MAMP installation (e.g. `sandbox`, etc.)
- In that file type `<?php  ?>`
- Between your opening and closing PHP tags type `echo "Hello, world!";`
- Go to http://localhost:8888/[SUB_DIR_NAME]/ (or if you're on port 80, http://localhost/[SUB_DIR_NAME]/)
- Also try running `php index.php` in your CLI...

---

## Exercise 2

Get ready for your second round of FizzBuzz...PHP-style!

You'll complete this exercise inside of your `index.php` file.

For numbers divisible by 3, `echo` **Fizz** instead of the number, and for numbers divisible by 5 (and not 3), `echo` **Buzz** instead.

When you have that working, modify your program to `echo` **FizzBuzz**, for numbers that are divisible by both 3 and 5 (and still `echo` **Fizz** or **Buzz** for numbers divisible by only one of those).

---

## Exercise 3

Let's create a function in PHP that allows us to `print_r` our arrays automatically wrapped in `<pre>` tags.

Refer back to the earlier example of how to do this without a function, and think about what you'll need to pass in as a parameter for this function.

Once you build you function, try it out on the `$months` array.

---

## Project Activity



---

## Additional Resources

[Codeacademy PHP tutorial](https://www.codecademy.com/en/tracks/php)

PHP is a well-documented language and you can find its docs here:

- [Documentation](http://php.net/docs.php)

An awesome, well-written PHP resource:

- [PHP the Right Way](http://www.phptherightway.com/)
- At the very least, [read this chapter](http://www.phptherightway.com/pages/The-Basics.html)

This online book is a bit dated, but the following chapter is still relevant and very explanatory:

- [Hacking with PHP - How PHP is Written](http://www.hackingwithphp.com/2/6/0/how-php-is-written)

Another PHP resource, written with WP devs in mind:

- [WordPress Development for Beginners: Learning PHP](http://premium.wpmudev.org/blog/wordpress-development-beginners-php/)
