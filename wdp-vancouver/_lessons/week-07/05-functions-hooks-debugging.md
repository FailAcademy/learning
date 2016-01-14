---
layout: lesson
title: WordPress Functions, Hooks & Debugging
slides: ['_slides/week-06/05-functions-hooks-debugging.md']
date: 2015-10-30
---

## Pre-Work

Some pre-reading on using "hooks" in Wordpress:

- [WordPress Hooks: Actions, Filters, and Examples](http://blog.teamtreehouse.com/hooks-wordpress-actions-filters-examples)

Some pre-reading on adding CSS and JS files to a Wordpress theme:

- [Adding Scripts and Styles to WordPress the Right Way With Enqueueing](http://premium.wpmudev.org/blog/adding-scripts-and-styles-wordpress-enqueueing/)

---

## Learning Objectives

- Include CSS and JS files in WordPress the right way.
- Use the `functions.php` file to customize or change the behaviour of a theme.
- Define the two different types of WordPress hooks&mdash;actions and filters&mdash;and use them in the `functions.php` file.
- Use developer-focused plugins for debugging purposes and to improve development workflows.

---

## Keywords

- WordPress page lifecycle
- Hooks
- [Action](http://codex.wordpress.org/Plugin_API/Action_Reference)
- [Filter](http://codex.wordpress.org/Plugin_API/Filter_Reference)

---

## Exercise 1

Time to learn more about WP actions and filters!

You'll be assigned one of the following hooks to investigate:

- `after_setup_theme`
- `after_switch_theme`
- `body_class`
- `excerpt_length`
- `init` / `admin_init`
- `login_head` / `login_headerurl`
- `next_posts_link_attributes` / `previous_posts_link_attributes`
- `pre_get_posts`
- `post_updated_messages`
- `save_post`
- `template_redirect`
- `tiny_mce_before_init` / `mce_buttons`
- `transition_post_status`
- `wp_enqueue_scripts`
- `wp_head` / `wp_footer`

Specifically, figure out if your assigned hooks is an action or filter? What does it do? When does it fire or what does it modify? What is it good for?

Provide an example of it's usage too!

---

## Exercise 2

Let's head over the `/inc/extras.php` file in our starter theme and add two functions (with the appropriate hooks) to do the following:

1. Change the logo on the WP login screen to be Le Red Bread's logo
2. Update the URL that the logo points to be the site's homepage URL (instead of wordpress.org).

---

## Exercise 3

Time to add some version control to your project.

Initialize a git repository in the root of your project's WP installation in MAMP, at the `.gitignore` file as recommended, stage your files, make your commit, add a remote from GitHub, and push your code!

---

## Lab Activity

Today's lab activity time will be dedicated to continuing to work on Project 5.

---

## Additional Resources

Some WordPress plugins that are helpful for debugging:

- [Debug Bar](https://wordpress.org/plugins/debug-bar/)
- [Query Monitor](https://wordpress.org/plugins/query-monitor/)
- [Theme Check](https://wordpress.org/plugins/theme-check/)
