---
layout: slidedeck
title: Intro to PHP - Loops and Functions Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to PHP - Loops and Functions

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1. Loops
2. Functions
3. Including and requiring files

---

template: inverse

# Loops

---

# While Loops

Just like JS, while loops are helpful when you don't know how many times it needs to run:

```php
$i = 0;
$months = array( 'January', 'February', 'March', 'April' );

while ( $i < 4 ) {
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

Back to our months...

```php
$months = array( 'January', 'February', 'March', 'April' );
$total = count( $months );

for ( $i = 0; $i < $total; $i++ ) {
  echo '<p>' . $months[$i] . '</p>';
}
```

---

# Foreach Loops

_Or even better!_

Foreach loops provide a very easy way to iterate over all the items in an array:

```php
$months = array( 'January', 'February', 'March', 'April' );

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

This is a very handy construct for dynamically generating the options and values in a `<select>` menu.

---

# Almost Like JS

The closest JS proxies for PHP loops:

| JS                          | PHP                                |
| --------------------------- | ---------------------------------- |
| for (let i = 0; i < 5; i++) | for ($i = 0; $i < 5; $i++)         |
| for (let prop of iterable)  | foreach ($array as $value)         |
| for (let prop in obj)       | foreach ($array as $key => $value) |
| while (i < 10)              | while ($i < 10)                    |
| array.forEach(callback)     | array_walk($array, $callback)      |

---

# PHP Loops in a Nutshell

* There are multiple ways to get things done in PHP (and in programming in general)
* `foreach` is the most user-friendly
* `while` loops are good for fetching data from a database while a condition is true and until it is false (we'll see this in the famous "Loop" in WP)

---

# Exercise 1

Get ready for your second round of FizzBuzz...PHP-style!

You'll complete this exercise inside of your `index.php` file.

For numbers divisible by 3, `echo` **Fizz** instead of the number, and for numbers divisible by 5 (and not 3), `echo` **Buzz** instead.

When you have that working, modify your program to `echo` **FizzBuzz**, for numbers that are divisible by both 3 and 5 (and still `echo` **Fizz** or **Buzz** for numbers divisible by only one of those).

---

template: inverse

# Functions

---

# Functions

* Remember that the easiest way to think of functions is that they are **reusable chunks of code**
* A function **should do one thing**, i.e. it should not be 50+ lines long (code smell!)

---

# Functions in PHP

The syntax for functions in PHP is very similar to JS:

```php
function say_hello( $name ) {

  // you code goes here...

  // will probably return something here...
  return "Hi there $name!";

}

$greeting = say_hello( 'Joe' );

echo $greeting;
```

---

class: center, middle

.large[
Try adding that code to your `index.php` file...
]

---

class: center, middle

.large[
Now try running calling the function without an argument...
]

---

# Functions in PHP

PHP allows us to provide default values for our function parameters in case the user doesn't provide one (just like ES2015 syntax):

```php
function say_hello( $name = 'Mandi' ) {
  return "Hi there $name!";
}

// Now try calling the function without the argument...

say_hello();
```

---

class: center, middle

### Functions and Scope

In PHP, every function has its own local scope.

Variables defined outside of functions are **not** automatically accessible within them.

---

# Variable Scope

For example, the `$global_var` is not automatically available inside `my_function()` (as it would be in JS):

```php
$global_var = "a global variable";

function my_function() {
   return ucwords($global_var);
}

echo my_function(); // will cause an error notice
```

The code above will result in an "Undefined variable" notice where you would expect the variable to echo out.

---

# Variable Scope

We can address this issue in few different ways. One way is to pass the global variable into the function as an argument when it is called:

```php
$global_var = "a global variable";

function my_function($var) {
   $var = ucwords($var);
   return $var;
}

echo my_function($global_var); // will echo "A Global Variable"
echo $global_var; // will still echo "a global variable"
```

Note that the variable passed as an argument is **passed by value** here. This means that you can modify it within the local scope of the function **without changing its global value**.

---

# Variable Scope

If we need to change the value of the variable in the global space too, we must **pass it by reference** by prepending an ampersand to the function parameter:

```php
$global_var = "a global variable";

function my_function(&$var) {
   $var = ucwords($var);
   return $var;
}

echo my_function($global_var); // will echo "A Global Variable"
echo $global_var; // will also echo "A Global Variable" now
```

---

# Variable Scope

Another approach to accessing global variables in functions is to use the `global` keyword or `$GLOBALS` [superglobal](http://php.net/manual/en/language.variables.superglobals.php).

```php
$global_var = "a global variable";

function my_function() {
   global $global_var;
   $global_var = ucwords($global_var);
   // or $GLOBALS['global_var'] = ucwords($GLOBALS['global_var']);
   return $global_var;
}

echo my_function();
echo $global_var; // will echo "A Global Variable"
```

Using `global`/`$GLOBALS` to modify the value of the variable within the local scope of the function will change the value of the original variable without any function arguments.

---

class: center, middle

## Danger Will Robinson!

Modifying global variables can have intended consequences, especially as your codebase grows!

[WordPress has global variables](https://codex.wordpress.org/Global_Variables) to access all kinds of data, but it's important to remember to access them only for display purposes, and not to modify their values.

---

# Exercise 2

Let's create a function in PHP that allows us to `print_r` our arrays automatically wrapped in `<pre>` tags.

Refer back to the earlier example of how to do this without a function, and think about what you'll need to pass in as a parameter for this function.

Once you build you function, try it out on the `$months` array.

---

template: inverse

# Includes & Requires

---

class: center, middle

.large[
**Problem:** You're creating a multi-page website and you need to add a new stylesheet, script file, etc. to every page...
]

---

# Including & Requiring

PHP allows us to break our web pages into fragments, and dynamically include these fragments in each page:

```php
// in your header.php file

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Website</title>
  </head>
```

```php
// in your index.php file

include( 'header.php' );

  <body>
    <p>My content...</p>
  </body>
</html>
```

---

# Including & Requiring

Which enables...

```php
// in your index.php file

include( 'header.php' );

  <body>
    <p>My content...</p>
  </body>
</html>
```

```php
// in your about.php file

include( 'header.php' );

  <body>
    <h1>My About Page</h1>
    <p>The about content...</p>
  </body>
</html>
```

???
Notice that we use parenthesis here.

However you don't need to use parenthesis

[functions-without-parentheses](http://solidlystated.com/scripting/php-functions-without-parentheses/)

---

class: center, middle

.inline-images[
![Mind blown](/public/img/slide-assets/mind-blown-tim-and-eric.gif)
]

---

class: center, middle

.large[
Much DRYer!
]

---

class: center, middle

.large[
Try it out!
]

---

# Include vs. Requires

We can also use `require()` ... but if the file is missing this will trigger a fatal error (i.e. white screen of death)

And we also have:

* `include_once()` (we can literally only include it once, so you won't be able to include the fragement twice on the same page)
* `require_once()` (is more useful when you start dealing with classes in OOP...because you only want the file to be required one time for the lifecycle of the project)

---

# What We've Learned

* How to loops and functions in PHP
* How to use `include()` and `require()` and save yourself a lot of copying and pasting from now on...

---

template: inverse

# Questions?

{% endhighlight %}
