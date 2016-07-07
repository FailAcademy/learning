---
layout: lesson
title: Custom Post Types, Taxonomies & Fields
slides: ['_slides/week-07/01-post-types-taxonomies-fields.md']
lesson_date: 2016-08-15
---

## Pre-Work

Pre-reading on custom post types, taxonomies, and fields:

- [Creating Custom Content in WordPress: Custom Post Types](http://premium.wpmudev.org/blog/creating-content-custom-post-types/)
- [Creating Custom Content in WordPress: Taxonomies and Fields](http://premium.wpmudev.org/blog/creating-content-taxonomies-and-fields/)

---

## Learning Objectives

- Distinguish the difference between custom post types, custom taxonomies, and custom fields, as well as the particular use cases for each.
- Create custom post types and taxonomies using WordPress functions.
- Create theme files specific for displaying custom post type posts and archives, and custom taxonomy archives.
- Create custom fields using a plugin, and display their data in theme files.

---

## Keywords

- [Custom post type](https://codex.wordpress.org/Post_Types)
- [Custom taxonomy](https://codex.wordpress.org/Taxonomies)
- Custom field / metabox
- [Metadata API](https://codex.wordpress.org/Metadata_API)
- Information architecture
- Flushing permalinks

---

## Exercise 1

Time to create a custom post type for our projects...let's build the **Product** custom post type together, and add it to our functionality plugin.

Once we have created our Product custom post type, how we will add its archive page as the "Shop" menu item in the navigation menu?

---

## Exercise 2

Work in groups to sort the films below based on a taxonomy of your own design.

After you’re done, try to brainstorm at least five other ways to classify the films that are not topic-based.

- The Godfather
- The Dark Knight
- Fight Club
- Lord of the Rings
- Schindler’s List
- Inception
- The Empire Strikes Back
- Good Fellas
- The Matrix
- It’s a Wonderful Life
- Jurassic Park
- Psycho
- The Sixth Sense
- Raiders of the Lost Ark
- Back to the Future
- The Lion King
- The Shining
- Braveheart
- To Kill a Mockingbird
- Scarface
- The Great Escape
- Die Hard
- Gone with the Wind
- Into the Wild
- Dial M for Murder
- Toy Story
- Saving Private Ryan
- Annie Hall
- The Avengers
- Gandhi
- Jaws
- Groundhog Day
- Rocky
- Harry Potter
- Casablanca
- 2001: A Space Odyssey
- Kill Bill

---

## Exercise 3

Now let's add a custom taxonomy called **Product Type** to our project. We generate the code together, and add it our functionality plugin as well.

---

## Exercise 4

Let's install the [Custom Field Suite](https://en-ca.wordpress.org/plugins/custom-field-suite/) together, take a tour, and try creating a field group.

---

## Lab Activity

Today's lab time will be spent working on Project 4. Today would be a good day to try adding all of your custom post types, taxonomies, and fields to your project, as well as their corresponding template files.

---

## Additional Resources

Codex function references for adding custom post types and taxonomies:

- [`register_post_type`](https://codex.wordpress.org/Function_Reference/register_post_type)
- [`register_taxonomy`](https://codex.wordpress.org/Function_Reference/register_taxonomy)

Tools for helping you generate the required code for registering custom post types and taxonomies:

- [GenerateWP: Post Type Generator](https://generatewp.com/post-type/)
- [GenerateWP: Taxonomy Generator](https://generatewp.com/taxonomy/)

WordPress plugins that facilitate the addition of custom post types, taxonomies, and fields to the admin area:

- [Custom Post Type UI](https://wordpress.org/plugins/custom-post-type-ui/)
- [Advanced Custom Fields](https://en-ca.wordpress.org/plugins/advanced-custom-fields/)
- [Custom Field Suite](https://en-ca.wordpress.org/plugins/custom-field-suite/)

A more "hands-on" approach to adding custom fields to the WordPress admin area:

- [CMB2](https://github.com/WebDevStudios/cmb2)

A great talk from Karen McGrane on the imperative to build out content and metadata in a modular way in CMSes:

- [Adapting Ourselves to Adaptive Content](https://karenmcgrane.com/2012/09/04/adapting-ourselves-to-adaptive-content-video-slides-and-transcript-oh-my/)
