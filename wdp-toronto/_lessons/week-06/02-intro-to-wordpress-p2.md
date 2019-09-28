---
layout: lesson
title: Intro to WP - P2
slides: ['_slides/week-06/03-intro-to-wordpress-p2.md']
lesson_date: 2019-10-30
---

## Pre-Work

If you've never seen the WordPress admin interface before, watch this series of videos on Level Up Tutorials to familiarize yourself with its features before class:

- [WordPress Basics](https://leveluptutorials.com/tutorials/wordpress-basics/series-introduction)
- [Create Content in WordPress With Posts and Pages
  ](https://code.tutsplus.com/courses/create-content-in-wordpress-with-posts-and-pages)

---

## Learning Objectives

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

Let's start customizing our WordPress installation.

Install the [Contact Form 7](https://wordpress.org/plugins/contact-form-7/) plugin and try creating a form. Follow the instructions it provides for including a form in a page (feel free to create a special page for this if you like).

**Hint:** You'll need to use a shortcode block to add the form to the page.

Also try browsing for a new theme to install on your site and activate it. Take a look at the front end of your site to see what effect it had. Did anything weird or unexpected happen?

---

## Exercise 2

Let's create our very first (and a very basic) WordPress theme.

Create a new directory in `wp-content/themes/` and in it save an appropriately formatted `style.css` file, and an `index.php` file.

Take the **[provided HTML template](/public/files/exercises/wp-first-theme.zip)** and place its HTML content in `index.php`. Replace the site title, description, and charset with WP template tags so this information is dynamically gathered from your site's database.

But whoops! How can we link up the `style.css` file now that it's path is broken? Try adding the loop too!

---

## Lab Activity

Apply some of the skills you learned earlier today by styling up a slightly more (Medium-inspired!) complex theme than what we built in Exercise 3.

To start, you can **[download the lab files here](/public/files/labs/wp-theme-lab.zip)**.

Next, using either the WP installation you set up earlier today or a fresh install (using the installation steps at the beginning of the slide deck), move the `median` directory into the `wp-content/themes` directory for that site.

From there, your task is to style the theme as per the included design comps. Here are some design specs to help you out:

- The width of the content area is `700px`
- The `body` font family is **Merriweather**
- The headings font family is **Lato**
- The font family used for the buttons, post metadata, and footer text is **Helvetica Neue** (or Arial)
- The HEX code of the links is `#00ab6b` and the hover state colour is `#1c9963`
- The RGBa values of the medium grey-coloured text is `rgba(0, 0, 0, .5)`

**Note:** The custom fonts (Merriweather and Lato) have already been imported into your stylesheet as Google Fonts, so you don't need to worry about generating web font kits. Font Awesome has already been imported too.

**Also note:** Feel free to use the included `hello-world.jpg` image as a featured image to test with one of your posts, or use an image of your own.


## Additional Resources

Bookmark these WP resources!

- [Codex](https://codex.wordpress.org/)
- [Code Reference](https://developer.wordpress.org/reference/)
- [Getting Started with WordPress](https://codex.wordpress.org/Getting_Started_with_WordPress)
- [WordPress.tv](http://wordpress.tv/)

A brief history of some of WordPress' major milestones since 2003:

- [History - WordPress Codex](https://codex.wordpress.org/History)
