---
layout: slidedeck
title: Intro to WordPress Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to WordPress

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. What is WordPress?
2. Installing WordPress
3. The admin area
4. Plugins
5. Themes

---
template: inverse

# What is WordPress?

---
class: center, middle

.large[
   What is a CMS for?
]

---

# Why WordPress?

- It powers ~25% of the top 10 million websites
- More non-English than English downloads of WP
- Very extendible via many different APIs
- Backward compatibility
- The back-end UI does not suck

---

# Just for Blogs?

- WordPress allows us to create **custom post types** and **custom taxonomies**, and also has a host of other features that make it far more CMS-like than it used to be
- Some people even use it as an application platform...

---

# .org vs. .com

- .com sites are a hosted service offered by Automattic
- .com sites don't offer much in the way of customization
- .org sites are self-hosted by you
- .org sites are entirely customizable via plugins and themes

---
template: inverse

# Installing WordPress

---

# Running WP Locally

- Running a WP site locally on your computer is a bit different from a static HTML site
- We need to use a local server environment to do that (MAMP!)
- MAMP must be running for us to see our site

---

# What Is It All For?

- The **MySQL database** contains all of the data (content and saved settings) for your site
- The **PHP** files generate your site on the server so it can be rendered as HTML in the browser
- You can use PHP to get data our your database and populate your website with it&mdash;this is the difference between **dynamic sites** and static sites

---

# Exercise 1

Let's install Wordpress locally:

1. [Download Wordpress](https://wordpress.org/download/)
2. Unzip your download and move it to your `htdocs` folder (rename the unzipped folder if you like)
3. Go to phpMyAdmin (via MAMP) and create a new database
4. Rename `wp-config-sample.php` to `wp-config.php` and fill in your database name and MAMP credentials
5. Go to http://localhost:8888/YOUR-FOLDER-NAME/wp-admin/install.php and complete your install

---
template: inverse

# WordPress Tour

---
class: center, middle

.large[
   **WP Components**
]
<br /><br />
.inline-images[
   ![WP Database and Core](/public/img/slide-assets/wp-db-core-concept.svg)
]

---
class: center, middle

.large[
   **WP Components**
]
<br /><br />
.inline-images[
   ![WP Front and Back Ends](/public/img/slide-assets/wp-front-back-concept.svg)
]

---

# What's Inside?

Inside your WP installation directory...

Don't touch these core files:

- `wp-admin`
- `wp-includes`

This folder holds our themes, plugins, and media uploads:

- `wp-content`

---

# What's Inside?

This is where you'll keep all of the code and content that's specific to your site:

- `wp-content` directory
- `wp-config.php`
- database

---

# WordPress Dashboard

- Settings
   - General, Reading, Discussion, and Permalinks
- Users ([Roles and Capabilities](https://codex.wordpress.org/Roles_and_Capabilities))
- Appearance
   - Themes, Customize, Widgets, and Menus
- Plugins

---
class: center, middle

.large[
   Don't edit your theme or plugin files with the built-in Editor...
]

---
class: center, middle

.large[
   And don't let other people do that either!!!
]

---

# Creating Content

- Posts
- Categories and tags
- Comments
- Pages
- Media

---
class: center, middle

.large[
   Single vs. Multisite
]

---

# Mini-Exercise

Try creating and new post and page of your own. Create some categories and tags too, and apply them to your new post.

Now check out the front end of your site...do you see your new content?

---
template: inverse

# Plugins & Themes

---

# Plugins

- Plugins add additional functionality to your website
- The [.org plugin repository](https://wordpress.org/plugins/) contains all of the plugins that can be installed via the WordPress dashboard
- You can also create you own custom plugins

---

# Essential Plugins

- Akismet
- Bad Behavior
- Enable Media Replace
- Contact Form 7
- Gravity Forms (paid)
- Google XML Sitemaps

---
class: center, middle

.large[
   Disabling vs. Uninstalling?
]

---

# Themes

- A theme controls the way your website looks
- Themes enable you to use certain features in Wordpress such as widgets and menus
- There's also a [theme repository](https://wordpress.org/themes/) on wordpress.org

---
class: center, middle

.large[
   Every theme is different!
]

---
class: center, middle

.large[
   Child vs. Parent Themes?
]

---
class: center, middle

.large[
   Themes vs. Theme Frameworks?
]

---
class: center, middle

### Themes & Plugins PSA

Quality matters! Poorly-written code in plugins and themes in one of the biggest ways WP gets hacked

---
class: center, middle

.inline-images[
   ![WordPress security](/public/img/slide-assets/wp-secure.jpg)
]

---

# Exercise 2

Let's start customizing our WordPress installation.

Install the [Contact Form 7](https://wordpress.org/plugins/contact-form-7/) plugin and try creating a form. Follow the instructions it provides for including a form in a page (feel free to create a special page for this if you like).

Also try browsing for a new theme to install on your site and activate it. Take a look at the front end of your site to see what effect it had. Did anything weird or unexpected happen?

---

# What Makes a Theme?

Every theme has two required components:

- a `style.css` file with a some special info in a comment at the top
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

---

# In Plain English

*What's happening in the loop...*

- First we check to makes sure we have posts
- Then we begin the loop (it will cycle however many times we've set in **Settings > Reading**)
- We'll show the title of the post and it's full content
- Now we'll end the loop
- If more posts are available we'll show pagination links
- If no posts were found we'll tell people and wrap it up

---

# Things To Do in the Loop

- `the_title()` displays the title of each post
- `the_permalink()` displays the permalink URL for each post
- `the_ID()` displays the ID of each post
- `the_author()` displays the author name for each post

*These are examples of template tags in WordPress.*

---

# Template Tags!

A template tag instructs WP to **do** or **get** something.

In your `header.php` files, you may see something like this:

```php
<h1><?php bloginfo('name'); ?></h1>
```

The `bloginfo()` tag retrieves data you saved on in the WP admin area.

In the example here, the word `name` inside of the single quotes instructs the tag to **get the blog's site name**. This is called a parameter.

---

# Template Tags!

As it turns out, the `bloginfo()` template tag is very handy for retrieving information about our WP sites:

https://codex.wordpress.org/Function_Reference/bloginfo

More on template tags here:

https://codex.wordpress.org/Template_Tags

---

# Exercise 3

Let's create our very first (and a very basic) WordPress theme.

Create a new directory in `wp-content/themes/` and in it save an appropriately formatted `style.css` file, and an `index.php` file.

Take the **[provided HTML template](/public/files/exercises/wp-first-theme.zip)** and place its HTML content in `index.php`. Replace the site title, description, and charset with WP template tags so this information is dynamically gathered from your site's database.

But whoops! How can we link up the `style.css` file now that it's path is broken? Try adding the loop too!

---

# What We've Learned

- How to install a self-hosted copy of WordPress
- The ins and outs of the WP admin area
- How to install plugins and themes
- The basic anatomy of a WordPress theme

---
template: inverse

# Questions?

{% endhighlight %}
