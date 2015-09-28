---
layout: slidedeck
title: Intro to PHP Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to PHP

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. What is PHP?
2. Running PHP locally
3. Expressions, variables, and comments
4. Operators and conditionals
5. Arrays
6. Loops
7. Functions

---

template: inverse

# What is PHP?

---

class: center, middle

.large[
   Client-side vs. server-side?
]

---
class: center, middle

![HTTP request diagram](/public/img/slide-assets/http-request-diagram.svg)

---

# Why PHP?

- It's been around for a long time
- It powers a large portion of the web
- Used in many popular CMSes like WordPress :)
- It can be mixed with HTML
- Still under active development (PHP7 is slated to be released in November 2015)

---
template: inverse

# Running PHP Locally

---

# Installing PHP

- PHP comes pre-installed on Macs (run `php -v` to see)
- But we're also going to need **MySQL** and **Apache** too...
- [MAMP](https://www.mamp.info/en/), [WAMP](http://www.wampserver.com/en/), or [XAMPP](https://www.apachefriends.org/index.html) makes it easy to get up and running with all three

---
class: center, middle

### Apache?

Apache is the **web server**. It's responsible for parsing the PHP that we write and rendering in the web browser as HTML.

---
class: center, middle

### MySQL

We use MySQL **databases** to store data that can be queried in order to dynamically generate content on our websites.

---
class: center, middle

.large[
   MAMP installed?
]

---
class: center, middle

.inline-images[
   ![MAMP app](/public/img/slide-assets/mamp-app.png)
]

---
class: center, middle

.large[
   Let's open the start page...
]

---
class: center, middle

.inline-images[
   ![htdocs folder](/public/img/slide-assets/mamp-htdocs.png)
]

---
class: center, middle

.large[
   Let's try out PHP...
]

---

# Exercise 1

Time to try out some PHP:

- Create an `index.php` file in your `htdocs` directory (or `www` dir if using WAMP)
- In that file write `<?php  ?>` so Apache knows it needs to parse it
- Between your opening and closing PHP tags write `echo "Hello world!";`
- Go to http://localhost:8888 and check it out

---

# PHP & HTML

- PHP allows us to mix HTML in our PHP files
- Let's try echoing **Hello World!** inside of a properly structured webpage in your `index.php` now...
- Note that you don't need to add the closing `?>` at the end of a PHP file if it's meant specifically for PHP, not HTML

---

# What's Happening Here?

- Apache looks at the `index.php` file and executes the code between `<?php  ?>` so it can be displayed in the web browser
- Simply typing out **Hello World!** in our mark-up would obviously have the same effect...
- Why would we do it this way?

---

# Errors

We want to make sure errors are displayed in case we make a goof in our syntax (will give us a hint about the mistake and the line number).

In you `php.ini` file, you want to:

- set `error_reporting = E_ALL`
- set `display_errors = On`

Restart Apache in MAMP for the changes to take effect. Now you will be able to see fatal errors and notices when you make a mistake in your code.

---
template: inverse

# Expressions, Variables & Comments

---
class: center, middle

### Statements vs. Expressions

Statements are commands, expressions are requests (i.e. anything that has a value to be evaluated).

---
class: center, middle

.large[
   `$a = 1;`
]

---

# Variables

In PHP, unlike JS, we use `$` to define our variables.

We can define variables as strings (with HTML tags):

```php
$color = 'red';
$heading = '<h1>Page Heading</h1>';
$number_string = '10';

$question = 'What\'s your name?';
```

Strings must be wrapped in quotes (single or double), and quotes within a string must be "escaped" with a backslash.

---

# Variables

Like JS, variables can also be integers or booleans too:

```php
$height = 7;
$width = 5;

$alive_and_well = true;
```

Again, integers and booleans do not need to be wrapped in quotes, only strings do.

---

# Variables

In PHP we can also concatenate string together, but with a `.` instead of a `+`:

```php
$salutation = 'Ms.';
$addressee = 'Dear ' . salutation . ' Sunshine:'
```

Alternatively, if we use double-quotes to wrap a string variable, we can embed another variable directly in it:

```php
$salutation = "Ms.";
$addressee = "Dear $salutation Sunshine:";
```

The second approach is called **interpolation**.

---

# Mini-Exercise

Try out a variable in your PHP file:

- Define a string variable called `$name` and set the value to your own name
- Remove the word "World", and concatenate or interpolate the string to show your name instead when displayed in the browser.

---

# Comments

We can also write comments in our PHP just like we do in JS:

```php
$foo = "Hello World;"

// Add a single line comment with 2 forward slashes

/*
   Add a multi-line comment like this
*/

echo $foo;
```

Side note: PHP is **not whitespace-dependent**.

---
template: inverse

# Operators & Conditionals

---

# Arithmetic Operators

Remember from JS that operators allow us to create a single value from multiple values. We can use `+`, `-`, `/`, and `*` to calculate values and store them in variables:

```php
$quantity = 7 + 8;
$total = (8 - 2) * 3;
```

*What will the above variables return?*

---

# Arithmetic Operators

We can also increment and decrement values just like JS:

```php
$i = 5;
$i++;

$k = 5;
$k--;
```

And use the modulus operator too to find a remainder:

```php
$remainder_1 = 15 % 4;
$remainder_2 = 9 % 3;
```

*What will the above variables return?*

---

# Comparison Operators

We can also compare values and evaluate their result:

```php
3 > 2

3 >= 2

3 < 2

3 == 2

3 === '3'

3 != '3'

3 !== 2
```

*What will the above expressions return?*

---

# Truthy and Falsey

- `0` is a falsey value, but a negative integer isn't
- `==` tests value only, `===` tests strict equality

---

# Conditional Statements

Conditional statements in PHP look exactly as they do in JS:

```php
var $score = 51;

if ( $score > 50 ) {
   echo 'You passed!';
} elseif ( $score == 50 ) {
   echo 'You just made it.'
} else {
   echo 'Keep trying...';
}
```

**Note:** In PHP we can use `else if` of `elseif`.

---

# Logical Operators

Like JS, we can use **logical operators** to ensure that a more complex selection of conditions are satisfied:

```php
$a = 42;
$b = 0;

if ( $a && $b ) {
   echo "Both a and b are true.";
} else {
   echo "Either a or b is false.";
}

if ( $a || $b ) {
   echo "Either a or b is true.";
} else {
   echo "Both a and b are false.";
}
```

---
template: inverse

# Arrays

---



---
template: inverse

# Loops

---

# While Loops

Just like JS, while loops are helpful when you don't know how many times it needs to run:

```php
$i = 0;
$months = array( 'January', 'February', 'March' );

while ( $i < 5 ) {
   echo $months[$i];
   $i++;
}
```

Remember to iterate the counter, otherwise you may cause an infinite loop!

---

# For Loops

For loops are great for running a block of code a specific number of times:

```php
for ( $i = 0; $i < 10; $i++ ) {
	echo "<p>$i</p>";
}
```

Alternatively:

```php
$months = array( 'January', 'February', 'March' );
$total = count($months);

for ( $i = 0; $i < $total; $i++ ) {
	echo '<p>' . $months[$i] . '</p>';
}
```

---

# Foreach Loops

*Or even better!*

Foreach loops provide a very easy way to iterate over all the items in an array:

```php
$months = array( 'January', 'February', 'March' );

foreach ( $months as $month ) {
   echo "<p>$month</p>";
}
```

---

# Foreach Loops

Foreach loops also work on more complex associative arrays:

```php
$teachers = array(
	'WordPress' => 'Mandi',
	'AngularJS' => 'Mackenzie'
);

foreach ( $teachers as $skill => $name ) {
	echo '<p>' . $name . ' teaches ' . $skill . '</p>';
}
```

---

# Almost Like JS

The JS proxies for PHP loops:

JS                          | PHP
--------------------------- | ------------------------------------
for (var i = 0; i < 5; i++) | for ($i = 0; $i < 5; $i++)
for (var prop in obj)       | foreach ( $array as $key => $value )
while ( i < 10 )            | while ( $i < 10 )

---

# PHP Loops in a Nutshell

- There are multiple ways to get things done in PHP (and in programming in general)
- `foreach` is the most user-friendly
- `while` loops are good for fetching data from a database while a condition is true and until it is false (we'll see this in the famous "Loop" in WP)

---

# Exercise 2

Get ready for your second round of FizzBuzz...PHP-style!

You'll complete this exercise inside of your `index.php` file.

For numbers divisible by 3, `echo` **Fizz** instead of the number, and for numbers divisible by 5 (and not 3), `echo` **Buzz** instead.

When you have that working, modify your program to `echo` **FizzBuzz**, for numbers that are divisible by both 3 and 5 (and still `echo` **Fizz** or **Buzz** for numbers divisible by only one of those).

---
template: inverse

# Functions

---

# What We've Learned

- Thing 1
- Thing 2

---
template: inverse

# Questions?

{% endhighlight %}
