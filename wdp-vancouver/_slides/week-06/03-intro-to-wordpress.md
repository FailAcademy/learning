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

# Components of WP

Diagram that conceptualizes a WP install...(core files, database, back end, front end).

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
- Users
- Appearance
- Plugins

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
   Permalinks?
]

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
   Themes vs. Theme Frameworks?
]

---
class: center, middle

### A Word on Themes & Plugins

Quality matters! Poorly-written code in plugins and themes in one of the biggest ways WP gets hacked

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

# Beyond the Basics

- `bloginfo()`
- `functions.php`
- `screenshot.png`

---

# The WordPress Loop

```php
// The Loop
if (have_posts()) : while (have_posts()) : the_post();
...
endwhile; else:
...
endif;
```

---

# In Plain English

Adapted from Digging into WordPress (p. 68)...

---

# Exercise 3

Let's create our very first (and a very basic) WordPress theme.

Create a new directory in `wp-content/themes/` and in it save an appropriately formatted `style.css` file, and an `index.php` file.

Take the provided HTML template and place its content in `index.php`. Replace the site title, description, and charset with WP template tags so this information is dynamically gathered from your site's database.

Lastly, enqueue you your stylesheet in your `functions.php` file.

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
