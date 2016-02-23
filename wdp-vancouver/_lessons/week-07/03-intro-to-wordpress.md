---
layout: lesson
title: Intro to WordPress
slides: ['_slides/week-07/03-intro-to-wordpress.md']
date: 2016-03-02
---

## Pre-Work

Prior to this lesson, you'll need to set up a new WordPress-friendly Vagrant box based on the [Varying Vagrant Vagrants (VVV)](https://github.com/Varying-Vagrant-Vagrants/VVV) configuration.

You already have VirtualBox and Vagrant installed, so you can start with Step 4 in the **[VVV First Vagrant Up instructions](https://github.com/Varying-Vagrant-Vagrants/VVV#the-first-vagrant-up)**.

Lastly, you need to set-up [Variable VVV (VV)](https://github.com/bradp/vv), which is the site creation wizard we'll use to rapidly set-up WP dev sites locally. The **[VV installation instructions](https://github.com/bradp/vv#installation)** will help you with this.

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

Let's set up a fresh WP installation using Variable VVV (VV). Run the following command:

```bash
vv create --name demo_wp --username your_name --password your_password --email email@email.com
```

Check out your new WP site at http://demo_wp.dev when VV is done doing its thing.

You can log into the back-end of your WP new site at http://demo_wp.dev/wp-admin with the credentials that you set running the above command.

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

## Lab Activity

Today's lab is dedicated to getting comfortable with the WordPress admin area and WP-style PHP before we jump into custom theming tomorrow.

Start wrapping your head around how WordPress uses PHP with this video:

- [Zac Gordon: PHP for WordPress](http://wordpress.tv/2015/09/20/zac-gordon-php-for-wordpress/)

Finally, if you're a rockstar and blast through the first two tasks, check out this video on the Underscores starter theme (as we'll be using a "fork" of Underscores to build out Project 5):

- [Morten Rand-Hendriksen: Building Themes From Scratch Using Underscores (_S)](http://wordpress.tv/2015/06/09/morten-rand-hendriksen-building-themes-from-scratch-using-underscores-_s/)

Be sure to spend some time with the WordPress admin area adding content, installing plugins, and generally familiarizing yourself with what's there!

---

## Additional Resources

Bookmark these WP resources!

- [Codex](https://codex.wordpress.org/)
- [Code Reference](https://developer.wordpress.org/reference/)
- [Getting Started with WordPress](https://codex.wordpress.org/Getting_Started_with_WordPress)
- [WordPress.tv](http://wordpress.tv/)

A brief history of some of WordPress' major milestones since 2003:

- [History - WordPress Codex](https://codex.wordpress.org/History)
