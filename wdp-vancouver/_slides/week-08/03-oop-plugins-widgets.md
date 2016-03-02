---
layout: slidedeck
title: OOP, Plugin Dev and Widget API Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# OOP, Plugin Dev and Widget API Slides

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. PHP OOP Basics
2. Widget API 101

---
template: inverse

# PHP OOP Basics

---

# Essential OOP

- Classes and Objects
- Scope (public, private, protected)
- Inheritance

---
class: center, middle

### Classes, in Plain English

A class is a **blueprint** for creating an object.<br />(And your computer is the construction crew.)

---
class: center, middle

### Objects, in Plain English

A **general model** for something we see in the world,<br />but using code constructs.

---
class: center, middle

.large[
   Insight: Objects are created from classes!
]
---


# Objects, Actually in Relation to English

- An object is the noun
- A property is an adjective
- A method is a verb

---

.half-left-column[
### A Class in PHP

Classes are the blueprints...

```php
class Dog {
   public $name;
   public $breed;
   public $colour;

   public function bark() {
     return 'Woof!';
   }

   public function walk() {
      return 'Happy dog :)';
   }
}
```
]

.half-right-column[
<br /><br />
![Dog class](/public/img/slide-assets/oop-dog-class.svg)
]

---

.half-left-column[
### An Object in PHP

We can create an object from a class...

```php
$dog_1 = new Dog();

$dog_1->name = 'Gomez';
$dog_1->breed = 'Mixed';
$dog_1->colour = 'white';

echo $dog_1->bark();
```
]

.half-right-column[
<br /><br />
![Gomez object](/public/img/slide-assets/oop-object-gomez.jpg)
]

---

.half-left-column[
### Another Object

We can create more than one object from a class too!

```php
$dog_2 = new Dog();

$dog_2->name = 'Dexter';
$dog_2->breed = 'Boston Terrier';
$dog_2->colour = 'tuxedo';

echo $dog_2->walk();
```
]

.half-right-column[
<br /><br />
![Dexter object](/public/img/slide-assets/oop-object-dexter.jpg)
]

---

# A More Salient Example

An example of a simple (non-WP) blog post class:

```php
class Blog_Post {

   private $author;

   private $publish_date;

   private $is_published;

   public function publish() {
      // Publish the article here
   }

   public function delete() {
      // Delete the article here
   }

}
```

---

# Creating the Objects

The act of creating a new objects is known as **instantiation**.

The `new` keyword instructs the computer to instantiate a new object based on the class.

```php
$first_post = new Blog_Post();
$second_post = new Blog_Post();

$first_post->publish();
```

When you have a class, you can have **multiple instances** of objects based on it, and the new objects will have the class properties and methods available to it.


---
class: center, middle

.large[
   What objects do we know and love in WP?
]

---
class: center, middle

.large[
   **[Check out the class!](https://github.com/WordPress/WordPress/blob/master/wp-includes/class-wp-post.php)**
]

---

# Properties in Classes

- Properties exist at the **class level**
- They can be used in any of the functions defined in the class (and don't have to be passed as parameters)
- How they are set is done in a special function known as a **constructor**

---

# The Constructor

In PHP classes, the constructor function is always named `__construct`:

```php
class Blog_Post {

   private $author;

   private $publish_date;

   private $is_published;

   function __construct() {
      $this->author = '';
      $this->publish_date = null;
      $this->is_published = false;
   }

   // Class methods here...
}
```

---

# $this again?

Using the `$this` keyword is what differentiates properties from other variables in the class.

Just like in JS, `$this` is a **reference to the current object**.

---
class: center, middle

### Scope

Scope refers to how variables and functions can be access from third-party objects or child objects within the program.

We can deliberately set the scope of properties and methods in our classes.

---

# Scope in PHP

We can have `public`, `protected`, or `private` scope:

- `public` properties and methods are available to every type of object that's attempting to access the variable or the function
- `protected` properties and methods are available within the context of the class in which they are defined, but not for third-party objects (i.e. can't be used by other objects of classes, but they can be used by sub-classes)
- `private` properties and methods are locked into the class in which they're defined (can't even be used by sub-classes)

---

# In Action

Let's take a look at an `Author` class that could go with our `Blog_Post` class and see how scope is being leveraged:

```php
class Author {

   protected $first_name;

   protected $last_name;

   public function get_first_name() {
      return $this->first_name;
   }

   public function get_last_name() {
      return $this->last_name;
   }

}
```

---

# Properties & Scope

You're not likely to see many attributes marked `public`.

You are likely to see them marked `protected` so they may also be used by subclasses, or `private` so that they may only be accessed internally.

*These are simple concepts on the surface, but can often be difficult to strategically implement!*

---

# In a Nutshell

Classes should organize information so that:

- information that should only be accessible and relevant to it should remain `private`
- information that should be accessible by itself and its subclasses should be `protected`
- information that should be accessible by third-party objects should be `public`

---
template: inverse

# Widget API 101

---

# Plugin Refresher

- A theme controls the **presentation** of content
- A plugin is used to control the **behavior and features** of your WordPress site
- Themes should not add critical functionality to your site

---

# Plugin Refresher

- Plugins are found in `wp-content/plugins/`
- Can be a single file or a directory with multiple files (where the main plugin file and the directory will usually share the same name)
- Plugin names should be unique

---

# Plugin Refresher

Recall that we need some implementation of the following comment block at the top of our main plugin file:

```php
/*
 * Plugin Name: My Plugin Name
 * Description: A description of my plugin...
 * Version:     1.0.0
 * Author:      Your Name
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
*/

if ( ! defined( 'WPINC' ) ) {
    die; // so the plugin file can't be accessed directly in browser
}
```

---

# WordPress APIs

WordPress provides us with [many APIs](https://codex.wordpress.org/WordPress_APIs) to extend its functionality, and do really (amazing!) custom things to our individual sites.

One of those APIs is the **[Widgets API](https://codex.wordpress.org/Widgets_API)**, which allows us to create custom widgets for our sites by **extending** the `WP_Widget` class.

---
class: center, middle

.large[
   Extending?
]

---
class: center, middle

### Another OOP Concept: Inheritance

*When one class acts as parent for another child class.*

The parent provide properties and methods, but the child has the ability to introduce its own too.

Like people, children inherit from their parents, but parents do not inherit from their children!

---

# Basic Example:

```php
class My_Widget extends WP_Widget {

   // Sets up the widgets name, etc.
   public function __construct() {

   }

   // Outputs the content of the widget
   public function widget( $args, $instance ) {

   }

   // Outputs the options form on admin
   public function form( $instance ) {

   }

   // Processing widget options on save
   public function update( $new_instance, $old_instance ) {

   }
}
```

---

# Using Hooks with OOP

Important note&mdash;when you use OOP in WP, we need to call our actions or filters a bit differently:

```php
class RF_General {

   public function __construct() {
      // Admin bar and menus customization
      add_action( 'admin_init', array( $this, 'remove_submenus' ) );
   }

   // Remove unnecessary sub-menu links from admin area
   public function remove_submenus() {
      remove_submenu_page( 'themes.php', 'theme-editor.php' );
      remove_submenu_page( 'plugins.php', 'plugin-editor.php' );
   }

}
```

*There are two things to note here...*

---

# Using Hooks with OOP

First, we **call actions and filters in the constructor function** for the class.

Also notice that the second argument is now **an array**, not just a function name:

```php
add_action( 'admin_init', array( $this, 'remove_submenus' ) );
```

WP has to know where to call the `remove_submenus` method. Since it lives within our class, we have to tell WordPress to call the method on an instance of our class.

---

# Exercise 1

Let's build a widget together!

To do this, you'll need to download and unzip a copy of the **[RED Widget Boilerplate](https://github.com/redacademy/red-widget-boilerplate/archive/master.zip)**.

Once you've downloaded and unzipped it, move the directory to `wp-content/plugins/` and rename both the directory and the main plugin file `business-hours-widget`.

The rest of the exercise will be a code-along...

---

# What We've Learned

- Some basic OOP concepts in relation to PHP
- How to build a basic custom widget plugin using the WP Widget API

---
template: inverse

# Questions?

{% endhighlight %}
