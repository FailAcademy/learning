---
layout: lesson
title: More on PHP
slides: ['_slides/week-06/02-php-cont.md']
lesson_date: 2020-02-12
---

## Pre-Work

_If you already finished watching all of the videos about arrays from the PHP Practitioner series, there's no additional pre-work for this lesson._

---

## Learning Objectives

- Build and interact with multi-dimensional arrays.
- Explore PHP functions such as `rand()`, `range()`, and `date()`.
- Implement advanced techniques for dealing with arrays of data.
- Explore alternative syntax for conditional statements and loops.

---

## Keywords

- Built-in function
- Multi-dimensional arrays
- Ternary operators

---

## Exercise 1

Let's use the PHP `date()` function to convert the dates as they appear in the JSON file to be formatted as pictured in the design comp on our blog.

---

## Exercise 2

[Time for an array scavenger hunt!](/public/files/exercises/php-array-scavenger-hunt.pdf)

Below we have two arrays containing similarly formatted data representing two movies.

Your task is to search the [PHP documentation](http://php.net/manual/en/ref.array.php) for array functions and figure out what built-in function (or combination of functions) will return the data formatted as required by each of the challenges.

Paste this code into an `index.php` file (between `<?php ?>` tags of course!) to get started...
￼

```php
$movies_1 = array(
   array(
      'ID'    => 1,
      'title' => 'Jurassic Park',
      'genre' => 'Adventure',
      'year'  => '1993',
      'stars' => array( 'Sam Neill', 'Laura Dern', 'Jeff Goldblum' )
   ),
   array(
      'ID'    => 2,
      'title' => 'Back to the Future',
      'genre' => 'Sci-fi',
      'year'  => '1985',
      'stars' => array( 'Michael J. Fox', 'Christopher Lloyd' )
   )
);

$movies_2 = array(
  array(
       'ID'    => 3,
       'title' => 'Die Hard',
       'genre' => 'Action',
       'year'  => '1988',
       'stars' => array( 'Bruce Willis', 'Alan Rickman' )
  ),
  array(
       'ID'    => 4,
       'title' => 'The Breakfast Club',
       'genre' => 'Drama',
       'year'  => '1985',
       'stars' => array( 'Emilio Estevez', 'Judd Nelson', 'Molly Ringwald' )
  ),
);
```

---

## Lab Activity

Today we'll use our lab time to wrap up building our Space Blog sites.

Incorporate some of what you learned in class today about PHP's **built-in functions**, **alternative syntax**, and **built-in array functions** when putting the finishing touches on the blog.

---

## Additional Resources

A short screencast series on what's new in PHP7:

- [PHP7 Up and Running](https://laracasts.com/series/php7-up-and-running)
