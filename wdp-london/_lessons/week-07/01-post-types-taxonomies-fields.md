---
layout: lesson
title: Custom Post Types, Taxonomies & Fields
slides:
  [
    "_slides/week-07/01a-ia-for-wp.md",
    "_slides/week-07/01b-post-types-taxonomies-fields.md",
  ]
lesson_date: 2018-11-15
---

## Pre-Work

Pre-reading on custom post types, taxonomies, and fields:

- [Creating Custom Content in WordPress: Custom Post Types](http://premium.wpmudev.org/blog/creating-content-custom-post-types/)
- [Creating Custom Content in WordPress: Taxonomies and Fields](http://premium.wpmudev.org/blog/creating-content-taxonomies-and-fields/)

---

## Learning Objectives

- Distinguish the difference between custom post types, custom taxonomies, and custom fields, as well as the particular use cases for each.
- Determine when a Gutenberg block or a custom field should be implemented to effectively model content and its related metadata in WordPress.
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

## IA: Exercise 1

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

## IA: Exercise 2

Using the sample IA provided, work in a group to decide how you would build that website out using appropriate WordPress APIs. Specifically, determine:

- Can you leverage built-in WP posts, pages, categories or tags in this IA? Where?
- Will you need any custom post type or taxonomies?
- What templates from the Template Hierarchy would you make use of in your theme? What would the files be named?

When done, you will present your rationale to the class.

---

## CPT/CT: Exercise 1

Time to create a custom post type for our projects...let's build the **Product** custom post type together, and add it to our functionality plugin.

Don't forget to flush your permalinks!

Once we have created our Product custom post type, how we will add its archive page as the "Shop" menu item in the navigation menu?

---

## CPT/CT: Exercise 2

Now let's add a custom taxonomy called **Product Type** to our project. We generate the code together, and add it our functionality plugin as well.

Be sure to flush your permalinks again!

---

## CPT/CT: Exercise 3

Let's install the [**Custom Field Suite**](https://en-ca.wordpress.org/plugins/custom-field-suite/) together, take a tour, and try creating a field group store the price of a product.

Once we've created the price custom field, how do we get it to display in a template specific to single product posts? Check the [**WordPress Template Hierarchy**](https://wphierarchy.com/) to find out what template you'll need to create first.

Next, check the [**Custom Field Suite docs**](http://customfieldsuite.com/) to figure out how display your price metadata in the template.

---

## CPT/CT: Exercise 4

Gutenberg allows us to create [**Block Templates**](https://wordpress.org/gutenberg/handbook/templates/) to automatically add predetermined sets of blocks to custom post types (and "lock" the templates so no other blocks can be added, if this is required).

Read the Gutenberg docs to create a block template for products. This template should have one `core/paragraph` block to add the product description. Be sure to add helpful placeholder text for the client in this block.

Also be sure to set `'template_lock' => 'all'` in your product custom post type args so that no additional blocks can be added to the template.

---

## CPT/CT: Exercise 5

We will use our first custom block for the hero image header on the About page.

Download and install the [**Inhabitent Blocks plugin**](https://github.com/redacademy/inhabitent-blocks). Once activated, you can add the Hero Image Block to your About page content. Will you need to make any adjustments to your About page custom template now?

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
