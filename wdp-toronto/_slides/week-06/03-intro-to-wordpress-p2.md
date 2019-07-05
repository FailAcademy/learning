---
layout: slidedeck
title: Intro to WordPress Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to WordPress - Part 2

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1.  Plugins
2.  Themes

---

template: inverse

# Plugins & Themes

---

# Plugins

- Plugins add additional functionality to your website
- The [.org plugin repository](https://wordpress.org/plugins/) contains all of the plugins that can be installed via the WordPress dashboard
- You can also create your own custom plugins

---

# Essential Plugins

- Akismet
- Bad Behavior
- Enable Media Replace
- Contact Form 7
- Gravity Forms (paid)
- Google XML Sitemaps

???

Share Gravity Forms plugin in slack

---

class: center, middle

.large[
Disabling vs. Uninstalling?
]

???

* Disabling is just making the plugin inactive, uninstalling is removing the actual files. Mention researching plugins a little bit and their removal, where DB tables are concerned. "Does this plugin remove its data on uninstall?" This can be found on the development page of some or most plugins

* You can read more here: [proper removal of wordpress plugins](https://kinsta.com/blog/uninstall-wordpress-plugin)

---

# Themes

- A theme controls the way your website looks
- Themes enable you to use certain features in WordPress such as sidebar widgets and navigation menus
- There's also a [theme repository](https://wordpress.org/themes/) on wordpress.org

---

class: center, middle

.large[
Every theme is different!
]

---

class: center, middle

### Themes & Plugins PSA

Quality matters! Poorly-written code in plugins and themes is one of the biggest ways WP gets hacked

---

class: center, middle

.inline-images[
![WordPress security](/public/img/slide-assets/wp-secure.jpg)
]

---

# Exercise 2

Let's start customizing our WordPress installation.

Install the [Contact Form 7](https://wordpress.org/plugins/contact-form-7/) plugin and try creating a form. Follow the instructions it provides for including a form in a page (feel free to create a special page for this if you like).

**Hint:** You'll need to use a shortcode block to add the form to the page.

Also try browsing for a new theme to install on your site and activate it. Take a look at the front end of your site to see what effect it had. Did anything weird or unexpected happen?

---

# What Makes a Theme?

Every theme has two required components:

- a `style.css` file with some special info in a comment at the top
- an `index.php` file

The rest is up to you!

---

# Theme Description

At the top of your `style.css` file:

```css
/*
Theme Name: RED Starter Theme
Theme URI: http://underscores.me/
Author: RED Academy
Author URI: http://www.redacademy.com/
Description: A WordPress start theme for RED Academy students.
Version: 1.0.0
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
*/
```

???

[Theme Handbook](https://developer.wordpress.org/themes/basics/main-stylesheet-style-css/)

---

# The WordPress Loop

A basic implementation of the famous **WordPress loop**:

```php
<?php if ( have_posts() ) : ?>

   <?php while ( have_posts() ) : the_post(); ?>

      <h2><?php the_title(); ?></h2>
      <?php the_content(); ?>

   <?php endwhile; ?>

   <?php the_posts_navigation(); ?>

<?php else : ?>

   <h2>Nothing found!</h2>

<?php endif; ?>
```

You will likely (and should!) see something very similar to this in any theme's `index.php` file.

???

Before proceeding ahead, get them to try to make sense of the code above with a partner.

---

# In Plain English

_What's happening in the loop..._

- First we check to make sure we have posts
- Then we begin the loop (it will cycle however many times we've set in **Settings > Reading**)
- We'll show the title of the post and its full contents
- Now we'll end the loop
- If more posts are available we'll show pagination links
- If no posts were found we'll tell people and wrap it up

---

# Things To Do in the Loop

- `the_title()` displays the title of each post
- `the_permalink()` displays the permalink URL for each post
- `the_ID()` displays the ID of each post
- `the_author()` displays the author name for each post
- `the_content()` displays the content of the post

_These are examples of template tags in WordPress._

---

# Template Tags!

A template tag instructs WP to **do** or **get** something.

In your `header.php` files, you may see something like this:

```php
<h1><?php bloginfo('name'); ?></h1>
```

The `bloginfo()` tag retrieves data you saved on in the WP admin area.

In the example here, the word `name` inside of the single quotes instructs the tag to **get the blog's site name**. This is called a parameter.

???

[Theme Handbook: Template Tags](https://developer.wordpress.org/themes/basics/template-tags/)

---

# Template Tags!

As it turns out, the `bloginfo()` template tag is very handy for retrieving information about our WP sites:

https://codex.wordpress.org/Function_Reference/bloginfo

More on template tags here:

https://codex.wordpress.org/Template_Tags

**Note:** Many template tags only work in the loop, while some are global and can be used anywhere on your site.

???

<a href="https://codex.wordpress.org/Global_Variables" target="_blank">WP Global_Variables</a>

---

# A Dynamic Metadata

Template tags are great for dynamically adding metadata and other information to our WordPress sites:

```html
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
      <meta charset="<?php bloginfo( 'charset' ); ?>">
	</head>
   <body>
      <h1 class="site-title"><?php bloginfo( 'name' ); ?></h1>
      <p class="description"><?php bloginfo( 'description' ); ?></p>
```

The `bloginfo()` template tag will pull this data out of the `wp_options` table in the database (which would have been saved in your **Settings** via the WordPress admin area).

---

# Subtle Difference

Some template tags are prefixed with `get_`, e.g.:

```php
the_permalink();

// vs.

get_permalink();
```

`the_permalink()` echoes out the permalink.

`get_permalink()` returns the permalink, but does not echo it out in the template.

---

class: center, middle

.inline-images[
![WP Database and Core](https://productiveprogrammer.io/wp-content/uploads/2016/10/wordpress-winning-meme.jpg)
]

---

# Exercise 3

Let's create our very first (and a very basic) WordPress theme.

Create a new directory in `wp-content/themes/` and in it save an appropriately formatted `style.css` file, and an `index.php` file.

Take the **[provided HTML template](/public/files/exercises/wp-first-theme.zip)** and place its HTML content in `index.php`. Replace the site title, description, and charset with WP template tags so this information is dynamically gathered from your site's database.

But whoops! How can we link up the `style.css` file now that it's path is broken? Try adding the loop too!

???

Give class ( ~20-30 mins) to try the exercise.

Recommend students come up and share their answer and correct as a class if necessary.

---

# What We've Learned

- How to install plugins and themes
- The basic anatomy of a WordPress theme

???

**Review Activity**

Before end-of-day standup (after lab time), in groups of 3-4 talk about the components

---

template: inverse

# Questions?

{% endhighlight %}
