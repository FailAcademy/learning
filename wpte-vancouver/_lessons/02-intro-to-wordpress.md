---
layout: lesson
title: Intro to WordPress
slides: ['_slides/02-intro-to-wordpress.md']
---

## Pre-Work

If you've never seen the WordPress admin interface before, watch this series of videos on Level Up Tutorials to familiarize yourself with its features before class:

- [WordPress Basics](https://leveluptutorials.com/tutorials/wordpress-basics/series-introduction)
- [Create Content in WordPress With Posts and Pages](https://code.tutsplus.com/courses/create-content-in-wordpress-with-posts-and-pages)

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

We can also install WP locally using MAMP:

1. [Download WordPress](https://wordpress.org/download/)
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

## Project Activity

Let's start our WordPress theme project.

Using the steps peviously, create a new WordPress install. 

Create a new directory in `wp-content/themes/` and in it save an appropriately formatted `style.css` file, and an `index.php` file.

Take the **[provided HTML template](/public/files/exercises/wp-first-theme.zip)** and place its HTML content in `index.php`. Replace the site title, description, and charset with WP template tags so this information is dynamically gathered from your site's database.

But whoops! How can we link up the `style.css` file now that it's path is broken? Try adding the loop too!

---

## Additional Resources

Bookmark these WP resources!

- [Codex](https://codex.wordpress.org/)
- [Code Reference](https://developer.wordpress.org/reference/)
- [Getting Started with WordPress](https://codex.wordpress.org/Getting_Started_with_WordPress)
- [WordPress.tv](http://wordpress.tv/)

A brief history of some of WordPress' major milestones since 2003:

- [History - WordPress Codex](https://codex.wordpress.org/History)

- [Zac Gordon: PHP for WordPress](http://wordpress.tv/2015/09/20/zac-gordon-php-for-wordpress/)