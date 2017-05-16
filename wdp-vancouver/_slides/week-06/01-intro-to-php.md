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
2. Running PHP locally with MAMP
3. Expressions, variables, and comments
4. Operators and conditionals
5. Arrays
6. Functions
7. Including and requiring files

---

template: inverse

# What is PHP?

???
Based on your prework, write down the characterists of php
---

class: center, middle

.large[
   Client-side vs. server-side?
]

---

# PHP vs. HTML

- HTML is static, PHP is dynamic
- HTML is a mark-up language, PHP is a programming language
- PHP never displays in your browser dev tools
- PHP needs a server to run (you can't open PHP files directly in a browser)

---
class: center, middle

![HTTP request diagram](/public/img/slide-assets/http-request-diagram.svg)

---

# Why PHP?

- It's been around for a long time
- It powers a large portion of the web
- Used in many popular CMSes like WordPress :)
- It can be mixed with HTML
- Still under active development (PHP7 was released in November 2015 with big performance improvements)

---
template: inverse

# Running PHP Locally

---

# Installing PHP

- PHP comes pre-installed on Macs (run `php -v` to see)
- But we're also going to need **MySQL** and **Apache** too...
- [MAMP](https://www.mamp.info/en/), [WAMP](http://www.wampserver.com/en/), or [XAMPP](https://www.apachefriends.org/index.html) makes it easy to get up and running with all three
- This is known as a **LAMP stack** (we can also run WordPress on a LEMP stack which uses *nginx* instead of Apache as a web server)

---
class: center, middle

### Linux?

Linux is a free and open-source Unix-like operating system that powers everything from personal computers to servers to super-computers.

---
class: center, middle

### Apache? nginx?

Apache is the **web server**. It's responsible for parsing the PHP that we write and rendering in the web browser as HTML.

The Apache HTTP Server is the most popular web server on the public internet currently, but another web server called **nginx** may be used to power WordPress-based sites too.

---
class: center, middle

### MySQL

We use MySQL **databases** to store data that can be queried in order to dynamically generate content on our websites.

---

class: center, middle

.large[
   Let's try out PHP... <br />
   start your MAMP servers.
]

---

# Exercise 1

Time to try out some PHP:

- Create an `index.php` file in a sub-directory of the `htdocs` folder in your MAMP installation (e.g. `sandbox`, etc.)
- In that file type `<?php  ?>`
- Between your opening and closing PHP tags type `echo "Hello, world!";`
- Go to http://localhost:8888/[SUB_DIR_NAME]/ (or if you're on port 80, http://localhost/[SUB_DIR_NAME]/)
- Also try running `php index.php` in your CLI...

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

In you `php.ini` file (we'll check `phpInfo` to find it):

- set `error_reporting = E_ALL`
- set `display_errors = On`

Restart Apache in MAMP for the changes to take effect. Now you will be able to see fatal errors and notices when you make a mistake in your code.

---

# White Screen of Death

- Try intentionally adding some syntax errors in between the opening and closing PHP tags in your `index.php` file and see what happens...
- *This is why we never cowboy code on production servers!*
- The errors appear on the screen because error reporting is turned on in the server's PHP configuration file(s)
- We wouldn't want to display errors in a production environment though...

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
   `echo 'Hello, World!';`
]

---
class: center, middle

.large[
   `$a = 1;`
]

---

# Variables

In PHP, unlike JS, we use `$` to define our variables.

We can define variables as strings (including HTML tags):

```php
$color = 'red';
$heading = '<h1>Page Heading</h1>';
$number_string = '10';

$question = 'What\'s your name?';
```

Strings must be wrapped in quotes (single or double), and quotes within a string must be "escaped" with a backslash.

On style...WP coding standards advise **underscores** in variable names, as opposed to the camelCase we use in JS.

---

# Single or Double?

You can wrap your string variables in single or double quotes in PHP, but there is a subtle difference between using one type of quote over the other.

Strings wrapped in **single quotes will not be parsed**. These strings do not parse any variables or special characters contained within.

Strings wrapped in **double quotes will be parsed**, so they can contain variables, array values, and object variables.

Read about **[variable parsing](http://php.net/manual/en/language.types.string.php#language.types.string.parsing)** in the PHP docs for more info.

---

# Variables

In PHP we can also **concatenate** strings together, but with a `.` instead of a `+`:

```php
$salutation = 'Ms.';
$addressee = 'Dear ' . $salutation . ' Sunshine:';
```

Again, if we use double quotes to wrap a string variable, we can embed another variable directly in it:

```php
$salutation_1 = "Ms.";
$addressee_1 = "Dear $salutation_1 Sunshine:";

$salutation_2 = "Mr";
$addressee_2 = "Dear {$salutation_2}. Sunshine";
```

The second approach is called **interpolation**.

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

# Mini-Exercise

Try out a variable in your PHP file:

- Define a string variable called `$name` and set the value to your own name
- Remove the word "World", and concatenate or interpolate the string to show your name instead when displayed in the browser

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

Remember from JS that operators allow us to create a single value from multiple values.

We can use `+`, `-`, `/`, and `*` to calculate values and store them in variables:

```php
$quantity = 7 + 8;
$total = (8 - 2) * 3;
```

*What will the above variables equal?*

---

# Arithmetic Operators

We can also **increment** and **decrement** values just like JS:

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

*What will the above variables equal?*

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

[More on truthy and falsey values in the PHP docs...](http://php.net/manual/en/types.comparisons.php)

---

# Conditional Statements

Conditional statements in PHP look exactly as they do in JS:

```php
$score = 51;

if ( $score > 50 ) {
   echo 'You passed!';
} elseif ( $score == 50 ) {
   echo 'You just made it.'
} else {
   echo 'Keep trying...';
}
```

**Note:** In PHP we can use `else if` or `elseif`.

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

# Creating Arrays

Just like JS, PHP has arrays that allow us to store multiple values in a variable.

But the basic syntax for arrays in PHP is a bit different:

```php
$months = array( 'January', 'February', 'March', 'April' );
```

However, in PHP 5.4+ you can use JS-style syntax for arrays:

```php
$months = ['January', 'February', 'March', 'April'];
```

---

# Working with Arrays

Arrays in PHP are **zero-indexed** just like JS.

The syntax to get a specific item in an array should be familiar:

```php
$months = ['January', 'February', 'March', 'April'];

$single_month = $months[1];
```

What will the value of `$single_month` be?

---

# Working with Arrays

We can print out the content of an array in PHP using the following functions:

```php
echo '<pre>';
var_dump($months);
echo '</pre>';

echo '<pre>';
print_r($months);
echo '</pre>';
```

Note that you'll probably want to wrap the output of `var_dump()` or `print_r()` in `<pre>` tags before you echo it out in your browser.

---

# Modifying Arrays

Just like JS, we can easily modify arrays after we create them.

```php
$months = array( 'January', 'February', 'March', 'April' );
```

To **add** a new month to the **end** of the array:

```php
array_push( $months, 'May' );

// or...

$months[] = 'May';
```

---

# Modifying Arrays

To **remove** the last item from the **end**:

```php
array_pop( $months );
```

And if we store `array_pop()` in a variable, we can re-use the removed value later on if we need to:

```php
$removed_month = array_pop( $months );
```

---

# Modifying Arrays

To **remove** the **first item** from the array:

```php
$removed_month = array_shift( $months );
```

To **add** a new item **to the beginning** of the array:

```php
$removed_month = array_unshift( $months );
```

And to **remove** an item at a particular **index**:

```php
unset( $months[2] );
```

---
class: center, middle

.large[
  There are DOZENS of functions related to arrays in PHP...you don't need to memorize them all.
]

---

# Associative Arrays

Associative arrays in PHP are *sort of* like objects in JS (not exactly though...).

In fact, arrays in PHP are really **ordered maps**, so they're more closely aligned with the new Map type in ES2015.

```php
$person = array(
  'gender' => 'woman',
  'name' => 'Mandi'
);
```

Like objects/Maps in JS, we must specify a **key** and a **value** when creating an associative array in PHP.

---

# Arrays in Arrays!

PHP also lets us create arrays within our arrays.

These are know as **multi-dimensional** arrays:

```php
$people = array(
  array(
    'gender' => 'woman',
    'name' => 'Mandi'
  ),
  array(
    'gender' => 'man',
    'name' => 'Mackenzie'
  )
);
```

---

# JSON to Array

PHP also allows us to take a JSON-formatted string and convert into an array:

```js
{
  "gender": "woman",
  "name": "Mandi"
}
```

```php
$json = file_get_contents( 'my-data.json' );

// "true" makes it an associative array
$person = json_decode( $json, true );

print_r( $person );
// output: Array ( [gender] => woman [name] => Mandi )
```

*Magic!*

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

*Or even better!*

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

JS                          | PHP
--------------------------- | ------------------------------------
for (let i = 0; i < 5; i++) | for ($i = 0; $i < 5; $i++)
for (let prop of iterable)  | foreach ($array as $value)
for (let prop in obj)       | foreach ($array as $key => $value)
while (i < 10)              | while ($i < 10)
array.forEach(callback)     | array_walk($array, $callback)

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

# Functions

- Remember that the easiest way to think of functions is that they are **reusable chunks of code**
- A function **should do one thing**, i.e. it should not be 50+ lines long (code smell!)

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

# Exercise 3

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

---
class: center, middle

.inline-images[
  ![Mind blown](/public/img/slide-assets/mind-blown.gif)
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

- `include_once()` (we can literally only include it once, so you won't be able to include the fragement twice on the same page)
- `require_once()` (is more useful when you start dealing with classes in OOP...because you only want the file to be required one time for the lifecycle of the project)

---

# What We've Learned

- What PHP is and how to run it locally
- How PHP syntax compares to JS
- How to create arrays, loops, and functions in PHP
- How to use `include()` and `require()` and save yourself a lot of copying and pasting from now on...

---
template: inverse

# Questions?

{% endhighlight %}
