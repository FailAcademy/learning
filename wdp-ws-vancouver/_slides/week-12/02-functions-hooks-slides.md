---
layout: slidedeck
title: WordPress Functions and Hooks Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# WordPress Functions and Hooks

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1. Hooks (aka actions and filters)
2. Your theme's `functions.php` file
3. Using a functionality plugin

---

template: inverse

# Hooks: Actions & Filters

---

class: center, middle

.large[
First, some vocabulary words...
]

---

class: center, middle

.large[
WordPress is **not** MVC...
]

---

class: center, middle

.inline-images[
![MVC architecture](/public/img/slide-assets/mvc-architecture.png)
]

.footnote.right[Image credit: [Tomm McFarlin](https://tommcfarlin.com/wordpress-and-mvc/)]

---

class: center, middle

.inline-images[
![Event-driven architecture](/public/img/slide-assets/event-driven-architecture.png)
]

.footnote.right[Image credit: [Tomm McFarlin](https://tommcfarlin.com/wordpress-and-mvc/)]

---

class: center, middle

.large[
So how do we tap into this?
]

---

class: center, middle

### The WordPress Page Lifecycle

A page life cycle is nothing more than a combination of the **events** that take place from when a browser requests a page to when the server returns the page to the browser.

---

# Events in WP

When a page is loaded on a WP site, many things happen during the page lifecycle:

* Plugins are loaded
* The active theme is initialized
* WP figures out if a user is authenticated
* Data is queried from the database and rendered
* _And so on..._

---

class: center, middle

.large[
**[This diagram.](/public/img/slide-assets/wp-core-load-lifecycle.png)**
]

---

class: center, middle

### Hooks

Hooks enable us to literally **hook into parts of the WordPress page lifecycle** to retrieve, insert, or modify data.

They allow us to take certain actions behind the scenes.

There are **two types of hooks** in WP...

---

class: center, middle

### Actions

Actions are **events in the WordPress page lifecycle** when certain things have occurred, certain resources are loaded (or before they are loaded), and certain facilities are available.

---

class: center, middle

### Filters

Filters are functions that WordPress **passes data through during certain points of the page lifecycle**.

They are primarily responsible for intercepting, managing, and returning data before rendering it to the browser or saving data from the browser to the database.

---

class: center, middle

.large[
 **Huh?**
]

---

# Difference = Use Cases

**Filters:**

* Change something you're pulling out of WP (e.g. the content)
* Change something you're putting in the WP database

**Actions:**

* Tying into existing WP processes, like saving a post or change a post status
* Add an action to your plugin/theme to allow other devs to manipulate it without hacking

---

# Actions vs. Filters

| Actions                                      | Filters\*                                 |
| -------------------------------------------- | ----------------------------------------- |
| Used when something has to be **added/done** | Used when something has to be **changed** |
| Declared with `do_action()`                  | Declared with `apply_filters()`           |
| Used with `add_action()`                     | Used with `add_filter()`                  |

.footnote[.red[* ] A function that grabs onto a filter must explicity `return` something!]

---

# Why Do We Need Them?

Without actions and filters, we would need to hack themes, plugins, and the WordPress core to change the way things are displayed or add/remove functionality from our WP sites.

.inline-images[
![Don't hack core](/public/img/slide-assets/wp-hack-core.jpg)
]

---

class: center, middle

### Basic Hook Anatomy<br /><br />

.inline-images[
![Hook anatomy](/public/img/slide-assets/wp-hook-anatomy.svg)
]

---

# An Example

What if we wanted to **remove the Editor links** from the Appearance/Plugins sub-menus so no internal end user can mess with code from inside WP?

```php
// Remove "Editor" links from sub-menus

function inhabitent_remove_submenus() {
	remove_submenu_page( 'themes.php', 'theme-editor.php' );
	remove_submenu_page( 'plugins.php', 'plugin-editor.php' );
}
add_action( 'admin_menu', 'inhabitent_remove_submenus', 110 );
```

The **priority number** is an optional integer value on a scale of `1` to `999` that determines the priority of order for functions tied to that specific hook.

---

# Exercise 1

Time to learn more about WP actions and filters!

You'll be assigned one of the following hooks to investigate... see the [lesson page](/lesson/wordpress-functions-hooks-debugging/) for more details.

Specifically, figure out if your assigned hooks is an action or filter. What does it do? When does it fire or what does it modify? What is it good for?

Provide an example of it's usage too!

---

class: center, middle

.large[
So how and where do we use these actions and filters?
]

---

template: inverse

# functions.php

---

class: center, middle

### Theme Functions

The `functions.php` file is like a little WordPress plugin inside your theme (and specifically for your theme).

---

# What's It For?

* You can use it to call WordPress functions
* You can define your own functions in there too
* You can include other PHP files using `include()` or `require()` in it

---

class: center, middle

| functions.php                                              | Separate Plugin                                     |
| ---------------------------------------------------------- | --------------------------------------------------- |
| requires no unique header text                             | requires specific, unique header text               |
| stored in **wp-content/themes** in a theme's sub-directory | stored in **wp-content/plugins** in a sub-directory |
| executes only when in the active theme's sub-directory     | only executes on page load when activated           |
| applies only to that theme                                 | applies to all themes                               |
| can have many blocks of code used for different purposes   | should have a single purpose (e.g SEO)              |

---

# What Goes In There?

If you need to use a hook to modify some behaviour in your theme, it needs to go in `functions.php` (although we're going to qualify that in a bit...).

Anything you need to help bootstrap your theme and its features into existence should go in there.

For example, from the `redstarter` theme:

```php
function red_starter_scripts() {
	wp_enqueue_style( 'red-starter-style', get_stylesheet_uri() );
}
add_action( 'wp_enqueue_scripts', 'red_starter_scripts' );
```

---

# Prefixing Functions

**Play it safe, prefix all the things!**

Anything you create in the global namespace has the potential to conflict with a theme, another plugin, and the WordPress core itself.

```php
// This:
function red_starter_scripts() {
	wp_enqueue_style( 'red-starter-style', get_stylesheet_uri() );
}

// Is better than this:
function scripts() {
	wp_enqueue_style( 'red-starter-style', get_stylesheet_uri() );
}
```

Let's try this in our project with Font Awesome!

---

class: center, middle

.large[
**PSA!**
]

---

class: center, middle

.large[
&#8220;Just paste it into your functions.php file...&#8221;
]

---

class: center, middle

.large[
Wrong! Sooo wrong.
]

---

class: center, middle

### Keeping It Organized

This is largely a matter of personal preference, but let's do ourselves a favour and plan to keep our code organized right from the get-go...

---

# File Organization

You'll see in `redstarter` that basic theme bootstrapping functions are in `functions.php` (e.g. adding theme support for menus, enqueuing stylesheets and scripts, etc.).

BUT all other functions are abstracted into their own PHP files, then required at the bottom of `functions.php`...

```php
// All of the functions.php stuff above...

// Custom template tags for this theme.
require get_template_directory() . '/inc/template-tags.php';

// Custom functions that act independently of the theme templates.
require get_template_directory() . '/inc/extras.php';
```

---

# Exercise 2

Let's head over the `/inc/extras.php` file in our starter theme and add two functions (with the appropriate hooks) to do the following:

1. Change the logo on the WP login screen to be Inhabitent's logo
2. Update the URL that the logo points to be the site's homepage URL (instead of wordpress.org).

---

template: inverse

# Using a Functionality Plugin

---

class: center, middle

### What's functionality plugin?

A functionality plugin is just a plugin like any other plugin, but the main difference is that it's **not publicly distributed** and it's meant to be one custom plugin to **encompass all of the custom functionality** for your site.

---

class: center, middle

.large[
Why do we care about this?
]

---

# What Goes In It?

* Code that creates your custom post types
* Code that creates your custom taxonomies
* Code that creates your custom meta boxes
* Code that adds/adjusts user roles
* ...anything that should continue to exist on your site regardless of what theme is activated

_We'll create our own functionality plugin for our projects next class we talk about custom post types, etc..._

---

# What We've Learned

* What hooks are and the two different types in WP
* How to (sanely) use and manage a `functions.php` file
* When and how to use a functionality plugin

---

template: inverse

# Questions?

{% endhighlight %}
