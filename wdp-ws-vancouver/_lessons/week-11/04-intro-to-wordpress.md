---
layout: lesson
title: Intro to WordPress
slides: ['_slides/week-11/04-intro-to-wordpress-slides.md']
lesson_date: 2018-04-21
---

## Pre-Work

If you've never seen the WordPress admin interface before, watch this series of videos on Level Up Tutorials to familiarize yourself with its features before class:

* [WordPress Basics](https://leveluptutorials.com/tutorials/wordpress-basics/series-introduction)
* [Create Content in WordPress With Posts and Pages
  ](https://code.tutsplus.com/courses/create-content-in-wordpress-with-posts-and-pages)

---

## Learning Objectives

* Describe what a content management system is and its role in managing a website.
* Identify the difference between [wordpress.org](https://wordpress.org/) and [wordpress.com](https://wordpress.com/).
* Install WordPress in a local server environment.
* Identify the essential components of a WordPress theme, including the loop.
* Navigate the WordPress admin area to create posts and pages, and install plugins and themes.

---

## Keywords

* Content management system (CMS)
* Theme
* Plugin
* Multisite
* Permalink

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

## Exercise 3

Let's create our very first (and a very basic) WordPress theme.

Create a new directory in `wp-content/themes/` and in it save an appropriately formatted `style.css` file, and an `index.php` file.

Take the **[provided HTML template](/public/files/exercises/wp-first-theme.zip)** and place its HTML content in `index.php`. Replace the site title, description, and charset with WP template tags so this information is dynamically gathered from your site's database.

But whoops! How can we link up the `style.css` file now that it's path is broken? Try adding the loop too!

---

## Lab Activity (Today)

**Complete all incomplete lab activity tasks for homework before the next class!**

### Task 1:

Today's lab is primarily dedicated to getting comfortable with the WordPress admin area and WP-style PHP before we jump into the project tomorrow.

To begin, watch this video to further clarify how WordPress uses PHP with this video:

* [Zac Gordon: PHP for WordPress](http://wordpress.tv/2015/09/20/zac-gordon-php-for-wordpress/)

### Task 2:

Next, apply some of the skills you learned earlier today by styling up a slightly more (Medium-inspired!) complex theme than what we built in Exercise 3.

To start, you can **[download the lab files here](/public/files/labs/wp-theme-lab.zip)**.

Next, using either the WP installation you set up earlier today or a fresh install (using the installation steps at the beginning of the slide deck), move the `median` directory into the `wp-content/themes` directory for that site.

From there, your task is to style the theme as per the included design comps. Here are some design specs to help you out:

* The width of the content area is `700px`
* The `body` font family is **Merriweather**
* The headings font family is **Lato**
* The font family used for the buttons, post metadata, and footer text is **Helvetica Neue** (or Arial)
* The HEX code of the links is `#00ab6b` and the hover state colour is `#1c9963`
* The RGBa values of the medium grey-coloured text is `rgba(0, 0, 0, .5)`

**Note:** The custom fonts (Merriweather and Lato) have already been imported into your stylesheet as Google Fonts, so you don't need to worry about generating web font kits. Font Awesome has already been imported too.

**Also note:** Feel free to use the included `hello-world.jpg` image as a featured image to test with one of your posts, or use an image of your own.

### Task 3:

Finally, if you're a rockstar and blast through the first two tasks, check out this video on the Underscores starter theme (as we'll be using a "fork" of Underscores to build out Project 4):

* [Morten Rand-Hendriksen: Building Themes From Scratch Using Underscores (\_S)](http://wordpress.tv/2015/06/09/morten-rand-hendriksen-building-themes-from-scratch-using-underscores-_s/)

Lastly, be sure to spend some time with the WordPress admin area adding content, installing plugins, and generally familiarizing yourself with what's there!

---

## Additional Resources

Bookmark these WP resources!

* [Codex](https://codex.wordpress.org/)
* [Code Reference](https://developer.wordpress.org/reference/)
* [Getting Started with WordPress](https://codex.wordpress.org/Getting_Started_with_WordPress)
* [WordPress.tv](http://wordpress.tv/)

A brief history of some of WordPress' major milestones since 2003:

* [History - WordPress Codex](https://codex.wordpress.org/History)
