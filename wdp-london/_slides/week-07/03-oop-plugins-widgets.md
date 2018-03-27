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

1. Objects and classes
2. Scope (public, private, protected)
3. Widget API 101 (and inheritance in OOP)

---

template: inverse

# Objects and Classes

---

class: center, middle

### OOP Vocabulary Refresher: Objects

A **general model** for something we see in the world,<br />but using code constructs.

---

class: center, middle

### OOP Vocabulary Refresher: Classes

A class is a **blueprint** for creating an object.<br />(And your computer is the construction crew.)

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

# Objects in PHP

We can create an object from a class:

```php
$dog_1 = new Dog();

$dog_1->name = 'Rex';
$dog_1->breed = 'Poodle';
$dog_1->colour = 'white';

echo $dog_1->bark();
```

We can create more than one object from a class too!

```php
$dog_2 = new Dog();

$dog_2->name = 'Buster';
$dog_2->breed = 'Great Dane';
$dog_2->colour = 'grey';

echo $dog_2->walk();
```

---

# A More Salient Example

An example of a simple (non-WP) blog post class:

```php
class Blog_Post {

   public $author;

   public $publish_date;

   public $is_published;

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

When you have a class, you can have **multiple instances** of objects based on it, and the new objects will have the publicly-available class properties and methods available to it.

---

class: center, middle

.large[
What objects do we already know and love in WP?
]

---

class: center, middle

.large[
**[Check out the class!](https://github.com/WordPress/WordPress/blob/af885f45cf0f16e2c8c609786991c0fe2c148af5/wp-includes/class-wp-query.php#L18)**
]

---

class: center, middle

.large[
**[See it in action...](https://github.com/WordPress/WordPress/blob/fe0b8a2aaf49ff5f33a866309ed8730fd7675674/wp-includes/post.php#L1661)**
]

---

# Properties in Classes

* Properties exist at the **class level**
* They can be used in any of the functions defined in the class (and don't have to be passed as arguments)
* We can set our property values on the **class definition** or in a special function known as a **constructor**

---

# The Constructor

In PHP classes, the constructor function is always named `__construct`:

```php
class Blog_Post {

   public $author;

   public $publish_date;

   public $is_published = false;

   function __construct() {
      $this->author = '';
      $this->publish_date = null;
   }

   // Other class methods here...
}
```

---

# $this again?

Using the `$this` keyword is what differentiates properties from other variables in the class.

Just like in JS, `$this` is a **reference to the current object**.

---

template: inverse

# Scope

---

class: center, middle

### Scope

Scope refers to how properties and methods can be accessed from third-party objects or child classes within our PHP code.

We can deliberately set the scope of properties and methods in our classes using **visibility markers**.

---

# Scope in PHP

We can have `public`, `protected`, or `private` scope:

| `public`                     | `private`                        | `protected`                      |
| ---------------------------- | -------------------------------- | -------------------------------- |
| Visible to the outside world | Not visible to the outside world | Not visible to the outside world |
| Available to child classes   | Not accessible to child classes  | Accessible to child classes      |

**Note:** If you leave off the visibility marker for a property or method it will be `public`.

---

# Why Limit Visibility?

Why would you want to hide properties and methods from the outside world (i.e. objects instantiated from from the class)?

* To **encapsulate the data handling** within your objects
* An **object should be a black box** where you feed arguments into your object and you get a response in return
* This pattern makes your object **more independent** from the rest of your application, so you can change all of the internals of the object and it won't break your application

---

# In Action

Let's take a look at a `User` class that could go with our `Blog_Post` class and see how scope is being leveraged:

```php
class User {

   private $first_name = 'John';

   private $last_name = 'Smith';

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

We can see why marking all properties as `public` may not be ideal here.

You are likely to see them marked `protected` so they may also be used by subclasses, or `private` so that they may only be accessed internally.

_These are simple concepts on the surface, but can often be difficult to strategically implement!_

---

# Recapping...

Classes should organize information so that:

* information that should only be accessible and relevant to it should remain `private`
* information that should be accessible by itself and its subclasses should be `protected`
* information that should be accessible by third-party objects and subclasses should be `public`

---

template: inverse

# Widget API 101

---

# Plugin Refresher

* A theme controls the **presentation** of content
* A plugin is used to control the **behaviour and features** of your WordPress site
* Themes should not add critical functionality to your site

---

# Plugin Refresher

* Plugins are found in `wp-content/plugins/`
* Can be a single file or a directory with multiple files (where the main plugin file and the directory will usually share the same name)
* Plugin names should be unique

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

### Another Key OOP Concept: Inheritance

_When one class acts as parent for another child class._

In OOP, as with people, children inherit from their parents, but parents do not inherit traits back from their children!

---

# About Inheritance

* When you create a child class from parent class, the child class inherits all the properties and methods of the parent class
* Child classes cannot access `private` properties or methods of the parent
* When we use the `protected` keyword that means that the given property or method is not available to the outside world, but it is available to child classes

---

# Why Do We Bother?

_Why bother extending a class in the first place?_

Creating a child class allows us to **extend** the properties and methods of the parent class.

The parent provides properties and methods, but the child has the ability to introduce its own too.

Properties and methods in child classes can even **override** those in the parent class too.

And we will do exactly that with the **[WP_Widget class](https://github.com/WordPress/WordPress/blob/master/wp-includes/class-wp-widget.php).**

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

Important note&mdash;when you use OOP with WP hooks, we need to call our actions or filters a bit differently:

```php
class My_Plugin {

   public function __construct() {
      // Admin bar and menus customization
      add_action( 'admin_menu', array($this, 'remove_submenus'), 110 );
   }

   // Remove unnecessary sub-menu links from admin area
   public function remove_submenus() {
      remove_submenu_page( 'themes.php', 'theme-editor.php' );
      remove_submenu_page( 'plugins.php', 'plugin-editor.php' );
   }

}
```

_There are two things to note here..._

---

# Using Hooks with OOP

First, we often see **actions and filters called in the constructor function** for a class.

Also notice that the second argument is now **an array**, not just a function name:

```php
add_action( 'admin_menu', array($this, 'remove_submenus'), 110 );
```

WP has to know where to call the `remove_submenus` method.

Since it lives within our class, we have to tell WordPress to **call the method on the particular instantiated object** with which we are concerned.

---

# Sidebar: Best Practice

Calling hooks in your constructor isn't ideal&mdash;it leads to **tight coupling** between WordPress and the code in your class.

Placing hooks in a class constructor means that you can't create an instance of your class without loading WordPress (makes unit testing messy, if not impossible).

The `__construct` method should only be in charge of setting the internal state of a new object and **WP hooks don't have anything to do with setting up a new object's internal state**.

---

# Sidebar: Best Practice

That's better!

```php
class My_Plugin {

   public function init() {
      add_action( 'wp_loaded', array($this, 'on_loaded') );
   }

   public function on_loaded() {
      add_action( 'admin_menu', array($this, 'remove_submenus'), 110 );
   }

   public function remove_submenus() {
      remove_submenu_page( 'themes.php', 'theme-editor.php' );
      remove_submenu_page( 'plugins.php', 'plugin-editor.php' );
   }

}

$my_plugin = new My_Plugin();
$my_plugin->init();
```

---

# Exercise 1

Let's build a widget together!

To do this, you'll need to download and unzip a copy of the **[RED Widget Boilerplate](https://github.com/redacademy/red-widget-boilerplate/archive/master.zip)**.

Once you've downloaded and unzipped it, move the directory to `wp-content/plugins/` and rename both the directory and the main plugin file `business-hours-widget`.

The rest of the exercise will be a code-along...

---

# What We've Learned

* Some basic OOP concepts in relation to PHP
* How to build a basic custom widget plugin using the WP Widget API

---

template: inverse

# Questions?

{% endhighlight %}
