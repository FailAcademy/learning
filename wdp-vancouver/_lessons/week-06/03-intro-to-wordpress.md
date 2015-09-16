---
layout: lesson
title: Intro to WordPress
slides: ['_slides/week-06/03-intro-to-wordpress.md']
date: 2015-10-28
---

## Pre-Work

*There is no pre-work for this lesson.*

---

## Learning Objectives

- Describe what a content management system is and its role in managing a website.
- Identify the difference between [wordpress.org](https://wordpress.org/) and [wordpress.com](https://wordpress.com/).
- Install WordPress in a local server environment.
- Identify the essential components of a WordPress theme, including the loop.
- Navigate the WordPress admin area to create posts and pages, and install plugins and themes.

---

## Keywords

- Content management system (CMS)
- Theme
- Plugin
- Multisite
- Permalink

---

## Exercise 1

Let's install Wordpress locally:

1. [Download Wordpress](https://wordpress.org/download/)
2. Unzip your download and move it to your `htdocs` folder (rename the unzipped folder if you like)
3. Go to phpMyAdmin (via MAMP) and create a new database
4. Rename `wp-config-sample.php` to `wp-config.php` and fill in your database name and MAMP credentials
5. Go to http://localhost:8888/YOUR-FOLDER/wp-admin/install.php and complete your install

---

## Exercise 2

Let's start customizing our WordPress installation.

Install the [Contact Form 7](https://wordpress.org/plugins/contact-form-7/) plugin and try creating a form. Follow the instructions it provides for including a form in a page (feel free to create a special page for this if you like).

Also try browsing for a new theme to install on your site and activate it. Take a look at the front end of your site to see what effect it had. Did anything weird or unexpected happen?

---

## Exercise 3

Let's create our very first (and a very basic) WordPress theme.

Create a new directory in `wp-content/themes/` and in it save an appropriately formatted `style.css` file, and an `index.php` file.

Take the provided HTML template and place its content in `index.php`. Replace the site title, description, and charset with WP template tags so this information is dynamically gathered from your site's database.

Lastly, enqueue you your stylesheet in your `functions.php` file.

---

## Lab Activity

*Lab activity TBA...*

---

## Additional Resources

Bookmark these WP resources!

- [Codex](https://codex.wordpress.org/)
- [Code Reference](https://developer.wordpress.org/reference/)
- [Getting Started with WordPress](https://codex.wordpress.org/Getting_Started_with_WordPress)
- [WordPress.tv](http://wordpress.tv/)
