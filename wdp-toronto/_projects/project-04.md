---
layout: project
title: Project 4 - Inhabitent Site
due: Tuesday, November 20th (beginning of class)
---

For Project 4, you will create a multi-page website with a blog for a camping supply company called Inhabitent Camping Supply Co. using WordPress as a content management system.

You can [download the project files here](https://s3-us-west-2.amazonaws.com/red-wdp/project-files/project-04.zip).

## Design Specifications

### Structure

- This fixed width website is `1120px` wide
- The base spacing unit is `1.5rem`
- The solid border is `1px solid #e1e1e1`
- The dashed border is `1px dashed #c8c8c8`

### Typography

- The base font size is `16px` and its HEX code is `#404040`
- The base line-height for the site is `1.75`
- The main font family is Merriweather
- The accent font family is Novovento Sans Web (for headings, etc.)

### Colors

- The main background colour is `#ffffff`
- The HEX code for the green brand colour is `#248A83`
- The HEX code for the purple brand colour is `#2f1339`
- The HEX code for the orange brand colour is `#d99054`
- The HEX code for the yellow brand colour is `#f0e4d1`
- The HEX code for the light grey brand colour is `#a1a1a1`
- The HEX code for the medium grey brand colour is `#808080`

## Requirements

To receive a “Complete” for this project, your submission will need to satisfy the following criteria:

### Development Workflow Requirements

Your project must:

- Demonstrate effective organization of the project's root directory
- Have a Git repository initialized in its root directory which is pushed to GitHub
- Use a `.gitignore` to exclude unnecessary files/folders, and ensure that no unnecessary files/folders are erroneously committed to the repository
- Contain an appropriate number of commits for the scope of the project
- Contain a `README.md` file describing the project (e.g. technologies used, personal learnings, installation instructions, etc.) and is appropriately formatted with Markdown
- Remove extraneous code and comments from files
- Resolve all errors and warnings that appear in the browser console
- Use Gulp for running build tasks such as minification, Sass compilation, and error checking
- Contain a build directory with CSS and JS correctly compiled/transpiled and minified for production
- Contain a `package.json` with all applicable fields completed

### HTML Requirements

Your project must:

- Contain syntactically-valid HTML5 code
- Include all essential elements in the `<head>` of the document (e.g. doctype, title, charset, etc.)
- Use semantically-appropriate HTML elements
- Use an icon font

### CSS Requirements

Your project must:

- Translate the designer's overall vision for the website into code
- Use appropriate CSS selectors (e.g. classes instead of IDs, no overly-specific selectors, etc.)
- Use a CSS reset
- Demonstrate effective use of box model properties and values
- Demonstrate effective use of typographic properties and values (e.g. `font-family`, `font-style`, `text-transform`, etc.)
- Demonstrate effective use of flexbox properties and values for layout
- Demonstrate effective use of grid properties and values for layout
- Incorporate custom fonts using `@font-face`
- Use Sass a pre-processor and make effective use of variables, mixins, and partials

### JavaScript Requirements

Your project must:

- Define variables where needed with `let` and `const`
- Use functions to effectively organize code
- Use consistent, descriptive variable and function names
- Demonstrate effective use of control flow (loops, conditionals, etc.)

### jQuery Requirements

Your project must:

- Wrap jQuery code in document-ready (use short-hand)
- Use variables to store references to DOM elements wrapped in the jQuery object that are accessed more than once
- Add event listeners with jQuery and respond to events appropriately in callbacks
- Use jQuery to selectively add/remove or show/hide DOM elements

### WordPress Requirements

Your project must:

- Use WordPress as a content management system (CMS)
- Use a provided starter theme as the base for building a custom theme
- Fill in all applicable fields in the comment block that describes a specific theme or plugin in the admin interface
- Use a WordPress menu (configured through the admin interface) for the main site navigation
- Use custom post types for additional content types where required (using a functionality plugin)
- Use custom taxonomies for additional metadata where required (using a functionality plugin)
- Use custom fields for additional metadata where required (using the Custom Field Suite plugin)
- Use Gutenberg blocks to support content layout for all post types
- Include a widgetized area in the sidebar
- Enqueue CSS and JS files properly in the theme's functions.php file
- Leverage the WP template hierarchy to generate all required templates for the website
- Wrap jQuery code in an IIFE to make `$` available in no-conflict mode
- Validate theme files with Theme Check

### Functional Requirements

Your project must:

- Contain a static homepage, styled appropriately (`front-page.php`)
- Contain a static "About" page that uses the "Inhabitent Blocks" plugin to add a custom hero header block to the page, styled appropriately (custom page template)
- Contain a static "Find Us" page with an embeded Google Map and functioning contact form, styled appropriately (`page.php`)
- Contain a "Journal" page assigned as the blog post index, styled appropriately (`home.php`)
- Contain a single blog post view with a comments form and list, styled appropriately (`single.php`)
- Contain a product archive called "Shop" that displays 16 posts per page in descending order by title, styled appropriately (`archive-product.php`)
- Contain a product type archive that displays 16 posts per page in descending order by title, styled appropriately (`product_type-taxononomy.php`)
- Contain a single product view, styled appropriately (`single-product.php`)
- Contain a general archive (for authors, categories, etc.), styled appropriately (`archive.php`)
- Contain a search results page, styled appropriately (`search.php`)
- Contain a 404 page, styled appropriately (`404.php`)
- Include a custom widget plugin that allows business hours to easily be edited in the sidebar
- Add a toggle-able search form to the site header where the search input is automatically focused when the form is toggled open, and closed when the input is blurred if it is empty

### Stretch Goals

Want to challenge yourself? Your project could also:

- Create an additional custom post type for "Adventures" inside your functionality plugin
- Build out an archive template for the adventures post type, as well as single template for individual adventures
- Include a custom screenshot for your theme
- Use jQuery to alter the style of the header to be absolutely positioned with a reverse colour scheme on pages with hero images at the top, and transition to the standard site header once the user has scrolled past the hero image to the rest of the page content

## Submission Instructions

**How to export your database:**

Once you have finished working on your site, please export your database by following these instructions:

**Note:** Please ensure browser sync is OFF before proceeding with the steps below. VERY IMPORTANT.

1.  Add your instructor as an Administrator to your site (username: `instructor` / password: `instructor` / email: dev@redacademy.com)
2.  Install the WP Migrate DB plugin
3.  Go to Tools > Migrate DB in the WordPress admin area
4.  Change the "Replace" fields so that the first field contains `//localhost/student` and the second contains `/Applications/MAMP/htdocs/student`
5.  Click the Migrate button to export your DB

**Submitting your project:**

When you're ready to submit your project, **please email a link to your GitHub repository containing your project** to [miraz@redacademy.com](mailto:miraz@redacademy.com).
