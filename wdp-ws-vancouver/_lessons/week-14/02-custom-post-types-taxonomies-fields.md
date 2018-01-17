---
layout: lesson
title: Custom Post Types, Taxonomies, and Fields
slides: ['_slides/week-14/02-custom-post-types-taxonomies-fields-slides.md']
lesson_date: 2018-05-08
---

## Pre-work

Pre-reading on custom post types, taxonomies, and fields:

* [Creating Custom Content in WordPress: Custom Post Types](http://premium.wpmudev.org/blog/creating-content-custom-post-types/)
* [Creating Custom Content in WordPress: Taxonomies and Fields](http://premium.wpmudev.org/blog/creating-content-taxonomies-and-fields/)

---

## Learning Objectives

* Distinguish the difference between custom post types, custom taxonomies, and custom fields, as well as the particular use cases for each.
* Create custom post types and taxonomies using WordPress functions.
* Create theme files specific for displaying custom post type posts and archives, and custom taxonomy archives.
* Create custom fields using a plugin, and display their data in theme files.

---

## Keywords

* [Custom post type](https://codex.wordpress.org/Post_Types)
* [Custom taxonomy](https://codex.wordpress.org/Taxonomies)
* Custom field / metabox
* [Metadata API](https://codex.wordpress.org/Metadata_API)
* Flushing permalinks

---

## Exercise 1

Time to create a custom post type for our projects...let's build the **Product** custom post type together, and add it to our functionality plugin.

Once we have created our Product custom post type, how we will add its archive page as the "Shop" menu item in the navigation menu?

---

## Exercise 2

Now let's add a custom taxonomy called **Product Type** to our project. We generate the code together, and add it our functionality plugin as well.

---

## Exercise 3

Let's install the [Custom Field Suite](https://en-ca.wordpress.org/plugins/custom-field-suite/) together, take a tour, and try creating a field group.

---

## Homework

Continue working on Project 4 based on what you've learned so far.

Today would be a good day to try adding all of your custom post types, taxonomies, and fields to your project, as well as their corresponding template files.

---

## Additional Resources

Codex function references for adding custom post types and taxonomies:

* [`register_post_type`](https://codex.wordpress.org/Function_Reference/register_post_type)
* [`register_taxonomy`](https://codex.wordpress.org/Function_Reference/register_taxonomy)

Tools for helping you generate the required code for registering custom post types and taxonomies:

* [GenerateWP: Post Type Generator](https://generatewp.com/post-type/)
* [GenerateWP: Taxonomy Generator](https://generatewp.com/taxonomy/)

WordPress plugins that facilitate the addition of custom post types, taxonomies, and fields to the admin area:

* [Custom Post Type UI](https://wordpress.org/plugins/custom-post-type-ui/)
* [Advanced Custom Fields](https://en-ca.wordpress.org/plugins/advanced-custom-fields/)
* [Custom Field Suite](https://en-ca.wordpress.org/plugins/custom-field-suite/)

A more "hands-on" approach to adding custom fields to the WordPress admin area:

* [CMB2](https://github.com/WebDevStudios/cmb2)

A great talk from Karen McGrane on the imperative to build out content and metadata in a modular way in CMSes:

* [Adapting Ourselves to Adaptive Content](https://karenmcgrane.com/2012/09/04/adapting-ourselves-to-adaptive-content-video-slides-and-transcript-oh-my/)
