---
layout: project
title: Project 4 - Inhabitent Site
due: Monday, November 14th (beginning of class)
---

For Project 4, you will create a multi-page website with a blog for a camping supply company called Inhabitent Camping Supply Co. using WordPress as a content management system.

You can [download the project files here](https://s3-us-west-2.amazonaws.com/red-wdp/project-files/project-04.zip).

## Design Specifications

### Structure:

- This fixed width website is `1120px` wide
- The base spacing unit is `1.5rem`
- The solid border is `1px solid #e1e1e1`
- The dashed border is `1px dashed #c8c8c8`

### Typography:

- The base font size is `16px` and its HEX code is `#404040`
- The base line-height for the site is `1.75`
- The main font family is Merriweather
- The accent font family is Novovento Sans Web (for headings, etc.)

### Colors:

- The main background colour is `#ffffff`
- The HEX code for the green brand colour is `#248A83`
- The HEX code for the purple brand colour is `#2f1339`
- The HEX code for the orange brand colour is `#d99054`
- The HEX code for the yellow brand colour is `#f0e4d1`
- The HEX code for the light grey brand colour is `#a1a1a1`
- The HEX code for the medium grey brand colour is `#808080`

## Requirements

To receive a "Pass" grade for this project, your submission will need to satisfy the following criteria:

**Functional requirements:**

Your project must:

- Be built using WordPress as CMS
- Contain a custom static homepage, About page, Contact page (with a functioning contact form)
- Contain a blog post index page and a single view for blog posts
- Contain a product archive, a product type archive page, and single template for products
- Contain a search results page and 404 page

**General requirements:**

Your project must:

- Adequately reflect the designer's vision for the website
- Demonstrate effective organization of the project's custom theme and plugin directories
- Have a Git repository initialized in its root directory with an appropriately customized `.gitignore` file
- Be pushed to GitHub (with all of your commits synced to it)
- Contain a `README.md` file describing the project (e.g. technologies used, personal learnings, etc.)
- Use Gulp for running build tasks, such as minification and error checking

**WordPress requirements:**

Your project must:

- Use the `redstarter` WordPress theme as a base for building your project
- Support default Posts, Pages, and Comments (one-level deep only)
- Use a WordPress menu (configured through the admin interface) for the main site navigation
- Use a custom page template for the "About" page where a hero image can be dynamically added through a custom field
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
- Include all essential elements covered in class (e.g. `<meta charset="utf-8">`), and be dynamically populated with WordPress template tags where appropriate

**CSS/Sass requirements:**

Your project must:

- Make appropriate use of classes and IDs as selectors
- Use a CSS reset (normalize.css is included with the `redstarter` theme)
- Use Sass as a preprocessor, with CSS properly compiled and minified
- Use the `background` property where appropriate
- Implement a layout using flexbox (no floats)
- Demonstrate effective use of box model properties
- Demonstrate effective use of CSS properties for altering the visual display of text (e.g. `font-family`, `font-style`, `text-transform`, etc.)
- Incorporate custom fonts using `@font-face`
- Use an icon font

**JS requirements:**

- Add a toggle-able search form to the site header where the search input is automatically focused when the form is toggled open

**Additional requirements:**

- Be sure to **test** your project completely in **all major browsers** (Chrome, Firefox, Safari, Opera, IE11) when you think you're finished

**Stretch goals:**

Want to challenge yourself? Your project could also:

- Create an additional custom post type for "Adventures" inside of your functionality plugin (rather than statically coding them into the `front-page.php` template file)
- Build out an archive template for the adventures post type, as well as single template for individual adventures
- Add dashicons to customize the CPT menu items in the WP admin menu
- Include a custom screenshot for your theme
- Use jQuery to alter the style of the header to be absolutely positioned with a reverse colour scheme on pages with hero images at the top, and transition to the standard site header once the user has scrolled past the hero image to the rest of the page content

## Submission Instructions

**How to export your database:**

Once you have finished working on your site, please export your database by following these instructions:

1. Add Mandi as an Administrator to your site (username: mandi / password: mandi / email: mandi@redacademy.com)
2. Install the WP Migrate DB plugin
3. Go to Tools > Migrate DB in the WordPress admin area
4. Change the "Replace" fields so that the first field contains `//localhost/student` and the second contains `/Applications/MAMP/htdocs/student`
5. Click the Migrate button to export your DB

**Submitting your project:**

When you're ready to submit your project, **please email a link to your GitHub repository containing your project** with your **database file attached** to [mandi@redacademy.com](mailto:mandi@redacademy.com).
