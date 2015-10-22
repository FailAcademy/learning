---
layout: project
title: Project 5 - Custom WordPress Theme
due: Monday, November 9th (beginning of class)
---

For Project 5, you will create a multi-page website with a blog for a bakery using WordPress as a CMS.

You can [download the project files here](https://s3-us-west-2.amazonaws.com/red-wdp/project-05.zip).

## Design Specifications:

- This fixed width website is `1024px` wide
- The base font size is `16px` and its HEX code is `#222222`
- The accent font family is Overlock (for headings, etc.)
- The main background colour is `#ffffff` and the HEX code for the secondary off-white background colour is `#fafafa`
- The HEX code for the red brand colour is `#db272a`
- The HEX code for the brown brand colour is `#400c0d`
- The HEX code for the light grey brand colour is `#a1a1a1`
- The HEX code for the medium grey brand colour is `#808080`
- The HEX code for the dark grey brand colour is `#333333`
- The HEX code for the near black brand colour is `#222222`
- The base spacing unit is `1.5rem`
- The solid border is `1px solid #e1e1e1`
- The dashed border is `1px dashed #d2d2d2`

## Requirements

To receive a "Pass" grade for this project, your submission will need to satisfy the following criteria:

**Functional requirements:**

Your project must:

- Be built using WordPress as CMS
- Contain a custom static homepage About page, Contact page (with a functioning contact form)
- Contain a blog post index page and a single view for blog posts
- Contain a product index, a product type index page, and single view for products
- Contain a search results page and 404 page

**General requirements:**

Your project must:

- Adequately reflect the designer's vision for the website when built out using HTML & CSS
- Demonstrate effective organization of the project's root directory
- Have a Git repository initialized in it
- Be pushed to GitHub (with all of your commits synced to it and ONLY necessary files pushed)
- Use Gulp for running build tasks, such as minification and error checking

**WordPress requirements:**

Your project must:

- Use the `redstarter` WordPress theme as a base for building your project
- Support default Posts, Pages, and Comments (one-level deep only)
- Use a WordPress menu (configured through the admin interface) for the main site navigation
- Include a custom post type for "Products" inside of a functionality plugin (not the theme files)
- Include a custom taxonomy for "Product Type" inside of a functionality plugin (not the theme files)
- Include applicable custom fields for additional metadata where required (using the Custom Field Suite plugin)
- Include a custom widget plugin to allow business hours to easily be edited in the sidebar by the client
- Include a widgetized area in the sidebar
- Properly enqueue CSS and JS files in the theme's `functions.php` file
- Leverage the WP template hierarchy to generate required layouts for the website
- Be validated with Theme Check

**HTML requirements:**

Your project must:

- Use the HTML5 doctype and semantic, syntactically-correct HTML5
- Include all essential elements covered in class (e.g. `<meta charset="utf-8">`)

**CSS/Sass requirements:**

Your project must:

- Make appropriate use of classes and IDs as selectors
- Use a CSS reset (normalize.css is included with the `restarter` theme)
- Use Sass as a preprocessor, with CSS properly compiled and minified
- Use the `background` property where appropriate
- Implement a layout using Flexbox (no floats)
- Demonstrate effective use of box model properties
- Demonstrate effective use of CSS properties for altering the visual display of text (e.g. `font-family`, `font-style`, `text-transform`, etc.)
- Incorporate custom fonts using `@font-face`
- Use an icon font

**Stretch goals:**

Want to challenge yourself? Your project could also:

- Create an additional custom post type for "Testimonials" inside of your functionality plugin (rather than statically coding them into the `front-page.php` template file)
- Redirect single Testimonial pages to the Testiomonials archive page (because the client doesn't want to show individual testimonials)
- Add appropriate dashicons to customize the CPT menu items in the WP admin menu
- Include a custom screenshot for your theme

## Submission Instructions

When you're ready to submit your project, **please email a link to your GitHub repository containing your project** to [mandi@redacademy.com](mailto:mandi@redacademy.com).
