---
layout: lesson
title: Custom WordPress Theming
slides: ['_slides/week-06/04-custom-wordpress-theming.md']
lesson_date: 2016-05-19
---

## Pre-Work

Prior to jumping into theming class, you'll want to make sure you've wrapped your head around some important Wordpress jargon:

- [WordPress Semantics](https://codex.wordpress.org/WordPress_Semantics)

*Explore the links within that Codex entry for further clarification where needed!*

---

## Learning Objectives

- Distinguish the difference between a child theme, parent theme, and starter theme.
- Use a variety of templates to dynamically construct a website in WordPress.
- Leverage the WordPress template hierarchy to customize page layouts.
- Develop custom page templates and apply them to pages via the WordPress admin area.
- Customize comment display, widgetized areas, and navigation menus in a theme.

---

## Keywords

- [Child theme](https://codex.wordpress.org/Child_Themes)
- Parent theme
- Starter theme
- [Templates](https://codex.wordpress.org/Templates)
- [Template tags](https://codex.wordpress.org/Template_Tags)
- [Template hierarchy](https://developer.wordpress.org/themes/basics/template-hierarchy/)

---

## Exercise 1

Let's demystify the [WordPress Template Hierarchy](https://developer.wordpress.org/themes/basics/template-hierarchy/) together.

Based on the questions posed, determine what will be the correct template file to select...

---

## Exercise 2

Let's explore the `redstarter` theme together...

You can [download a copy here](https://github.com/redacademy/redstarter/archive/master.zip) and add it to your `wp-content/themes` directory to follow along.

---

## Lab Activity

In today's lab, we're going to dive into Project 5 and use what we learned about custom WordPress theming to begin building out Le Red Bread's website.

Copy the starter theme into the WP installation on your computer where you are going to build out your project, and **rename** the folder something a bit more descriptive (e.g. `leredbread`).

Next, to get your project set-up, you'll want to run `npm install` in the root of the theme directory so you can get Gulp up and running.

In the [project folder](https://s3-us-west-2.amazonaws.com/red-wdp/project-05.zip) you'll also find all of the content for the site. You'll need to add the content to your site via the WP admin area. **Start with posts!** You will find the featured image for each post in `_assets/images/blog-photos/`.

We'll learn about how to create a custom post type for the product content next week.

---

## Additional Resources

The basic components of a WordPress theme, visualized:

- [The anatomy of a WordPress theme](https://yoast.com/wordpress-theme-anatomy/)

An interactive visual representation of the WordPress template hierarchy:

- [The WordPress Template Hierarchy](http://wphierarchy.com/)
