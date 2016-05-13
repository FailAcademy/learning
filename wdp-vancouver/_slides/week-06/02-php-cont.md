---
layout: slidedeck
title: More on PHP Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# More on PHP

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Cool PHP functions
2. More on truthy/falsey
3. Alternative syntax
4. Ternary Operators
5. Handling arrays like a boss

---
template: inverse

# Cool PHP Functions

---


# Your PHP Toolbox

PHP has a lot of cool function built right into it.

We've already seen:

- `var_dump()`
- `print_r()`

---

# Your PHP Toolbox

We can also generate random numbers with PHP:

```php
echo rand(); // generate any random number
echo rand(5, 15); // a number between 5 and 15 inclusive
```

Or strip all of the HTML tags out of string:

```php
$message = "<p>This is my bio</p>";
echo strip_tags($message); // Will echo "This is my bio"
```

Or automatically put a range of numbers or letters in an array:

```php
range(0, 10); // array( 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 )
range('a', 'f'); // array( 'a', 'b', 'c', 'd', 'e', 'f' );
```

---

# Your PHP Toolbox

PHP is also a champ when it comes to formatting text for us.

You can convert a string of text to all lower case letters:

```php
$my_string = 'Hello There!';
echo strtolower( $my_string ); // output: hello there!
```

Or convert the first letter of every word in a string to uppercase:

```php
$my_string = 'hello there!';
echo ucwords( $my_string ); // output: Hello There!

```

---
class: center, middle

.large[
  Seems kind of random...why do these functions matter?
]

---
class: center, middle

.large[
  Much work has been done for you...check the docs!
]

---

# Date Function

We can use PHP to format our dates in specific ways:

```php
// format the current date/time
$my_date = date('F j, Y');

// format a specific date
$halloween = date('F j, Y', 1446249600);
```

You can format times with this function too!

Find out more on the [allowed format date/time parameters](http://php.net/manual/en/function.date.php).

---

# Exercise 1

Let's use the PHP `date()` function to convert the dates as they appear in the JSON file to be be formatted as pictured in the design comp on our blog.

---
template: inverse

# Checking for <br />Truthiness and Falsiness

---

# Check Truthy/Falsey

PHP also makes it easy to check for truthiness and falsiness.

We can use `isset()` to check if a variable has a value including (`false`, `0`, or an empty string), not `NULL`:

```php
$my_var = false;

if ( isset( $my_var ) ) {
  echo "It's set!";
} else {
  echo "It's not set.";
}
```

It will return `true` if the variable exists, and `false` otherwise.

---

# Check Truthy/Falsey

The `empty()` function checks if the variable is an empty string, `0`, `NULL`, or `false`.

```php
$my_var = false;

if ( empty( $my_var ) ) {
  echo "It's empty!";
} else {
  echo "It's not empty.";
}
```

It will return `false` if the variable has a non-empty and non-zero value.

---
template: inverse

# Alternative Syntax

---

# Conditionals

You may often see loops written in a slightly different way from what we've seen so far:

```php
if ( $color == 'blue' ) {
  echo '<p>The color is blue.</p>';
} elseif ( $color == 'red' ) {
  echo '<p>The color is red.</p>';
} else {
  echo '<p>The color is not blue or red.</p>';
}
```

```html
<?php if ( $color == 'blue' ) :?>
  <p>The color is blue.</p>
<?php elseif ( $color == 'red' ) : ?>
  <p>The color is red.</p>
<?php else : ?>
  <p>The color is not blue or red.</p>
<?php endif; ?>
```

---

# For Loops

And we use similar syntax `while` and `foreach` loops too:

```php
foreach ( $months as $month ) {
  echo '<li>' . $month . '</li>';
}
```

```html
<?php foreach( $months as $month ) : ?>
  <li><?php echo $month; ?></li>
<?php endforeach; ?>
```

---
template: inverse

# Ternary Operators

---

# Ternary Operators

Ternary operators are like shorthand for `if/else`.

So this:

```php
$username = 'mandi';

$message = isset( $username ) ? 'Hello ' . $username : 'Hello guest';
```

Is the same as this:

```php
$username = 'mandi';

if ( isset( $username ) ) {
  $message = 'Hello ' . $username;
} else {
  $message = 'Hello guest';
}
```

---

# Ternary Operators

**Why use them?**

- Makes coding simple if/else logic quicker
- Makes code shorter (less typing)
- So...job security!?

**Downsides?**

- Less readable
- Can be a bit confusing when they get complex

---
template: inverse

# Handling Arrays in PHP Like a Boss

---

# Arrays &harr; String

PHP provides us with some functions for converting arrays to strings and vice versa.

And these functions happen to have awesome names...

- `implode()`
- `explode()`

---

# Array Items to String

To convert array items into a comma-separated string, use the `implode()` function:

```php
$skills = array( 'html', 'css', 'js', 'php' );
$comma_separated = implode(',', $array);

echo $comma_separated; // output: html,css,js,php
```

Check out the [implode docs](http://php.net/manual/en/function.implode.php).

---

# String to Array

You can also convert a string to an array using the `explode()` function:

```php
$skills = 'html css js php';
$skills_array = explode( ' ', $skills );

print_r( $skills_array );
// output: Array ( [0] => html [1] => css [2] => js [3] => php )
```

Check out the [explode docs](http://php.net/manual/en/function.explode.php).

---

# Sorting by a Key's Value

This is getting really fancy, but you'll need for your lab activity...

To sort a multi-dimensional array based on the value of particular key, you can use `usort` with an anonymous callback function (in PHP 5.3+):

```php
usort($blog_posts, function($a, $b) {
  return $a['date'] - $b['date'];
});
```

---

# Exercise 2

Time for an array scavenger hunt!

See the [lesson page](/lesson/more-on-php/) for more details.

---

# What We've Learned

- PHP functions such as `range()` and `date()`
- Checking for truthiness and falsiness
- Alternative syntax for loops and conditionals
- WTF ternary operators
- Array function magic

---
template: inverse

# Questions?

{% endhighlight %}
