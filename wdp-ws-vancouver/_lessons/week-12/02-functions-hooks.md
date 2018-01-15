---
layout: lesson
title: WordPress Functions and Hooks
slides: ['_slides/week-12/02-functions-hooks-slides.md']
lesson_date: 2018-04-25
---

## Pre-Work

Some pre-reading on using "hooks" in WordPress:

* [WordPress Hooks: Actions, Filters, and Examples](http://blog.teamtreehouse.com/hooks-wordpress-actions-filters-examples)

Some pre-reading on adding CSS and JS files to a WordPress theme:

* [Adding Scripts and Styles to WordPress the Right Way With Enqueueing](http://premium.wpmudev.org/blog/adding-scripts-and-styles-wordpress-enqueueing/)

---

## Learning Objectives

* Include CSS and JS files in WordPress the right way.
* Use the `functions.php` file to customize or change the behaviour of a theme.
* Define the two different types of WordPress hooks&mdash;actions and filters&mdash;and use them in the `functions.php` file.

---

## Keywords

* WordPress page lifecycle
* Hooks
* [Action](http://codex.wordpress.org/Plugin_API/Action_Reference)
* [Filter](http://codex.wordpress.org/Plugin_API/Filter_Reference)

---

## Exercise 1

Time to learn more about WP actions and filters!

You'll be assigned one of the following hooks to investigate:

* `after_setup_theme`
* `after_switch_theme`
* `body_class`
* `excerpt_length`
* `init` / `admin_init`
* `login_head` / `login_headerurl`
* `next_posts_link_attributes` / `previous_posts_link_attributes`
* `pre_get_posts`
* `post_updated_messages`
* `save_post`
* `template_redirect`
* `tiny_mce_before_init` / `mce_buttons`
* `transition_post_status`
* `wp_enqueue_scripts`
* `wp_head` / `wp_footer`
* `the_content`
* `stylesheet_uri`
* `publish_post`

Specifically, figure out if your assigned hooks is an action or filter. What does it do? When does it fire or what does it modify? What is it good for?

Provide an example of it's usage too!

---

## Exercise 2

Let's head over the `/inc/extras.php` file in our starter theme and add two functions (with the appropriate hooks) to do the following:

1. Change the logo on the WP login screen to be Inhabitent's logo
2. Update the URL that the logo points to be the site's homepage URL (instead of wordpress.org).

---

## Homework

Continue working on Project 4 based on what you've learned about WordPress so far.

---

## Additional Resources

Two very readable articles on WP's event-driven architecture:

* [Using WordPress for Web Application Development: The Conceptual Model](https://code.tutsplus.com/articles/using-wordpress-for-web-application-development-the-conceptual-model--wp-34095)

More on actions and filters:

* [WordPress Actions and Filters: What's the Difference?](https://code.tutsplus.com/articles/wordpress-actions-and-filters-whats-the-difference--cms-25700)
* [Using WordPress for Web Application Development: Understanding Events, Actions, and Filters](https://code.tutsplus.com/tutorials/using-wordpress-for-web-application-development-understanding-events-actions-and-filters--wp-34113)
