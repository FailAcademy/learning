---
layout: project
title: Project 5 - Quotes on Dev
due: Monday, March 16th (beginning of class)
---

For Project 5, you will combine your JavaScript and WordPress skills together to build out the functionality for a website called Quotes on Dev using the WordPress REST API.

## Set-up Instructions

1. [Download the project files here](https://s3-us-west-2.amazonaws.com/red-wdp/project-files/project-05.zip).

2. [Download this starter theme to get going](https://github.com/robhyrk/wp-starter.git). Add this to your themes folder, rename it, and activate it within the WP dashboard. Update gulpfile.js proxy to match your environment.

3. [Download the `quotesondev-starter`](https://github.com/redacademy/quotesondev-starter). Copy only the 'inc' folder AND functions.php file, then add these to your starter theme from step 2.

## Design Specifications

### Structure

- This fixed width website is `1080px` wide
- The base spacing unit is `1.5rem`
- The dashed border is `1px dashed #ffffff`

### Typography

- The base font size is `16px` and its HEX code is `#ffffff`
- The base line-height for the site is `1.5`
- The main font family is Exo Web

### Colors

- The main background colour is `#222222`
- The HEX code for the green brand colour is `#00cc00`

## Requirements

To receive a “Complete” for this project, your submission will need to satisfy the following criteria:

### Development Workflow Requirements

- Demonstrate effective organization of the project's root directory
- Have a Git repository initialized in the theme directory which is pushed to GitHub
- Use a .gitignore to exclude unnecessary files/folders, and ensure that no unnecessary files/folders are erroneously committed to the repository
- Contain an appropriate number of commits for the scope of the project
- Contain a README.md file describing the project (e.g. technologies used, personal learnings, installation instructions, etc.) and is appropriately formatted with Markdown
- Remove extraneous code and comments from files
- Use Gulp for running build tasks such as minification, Sass compilation, and error checking
- Contain a build directory with CSS and JS correctly compiled/transpiled and minified for production
- Contain a package.json with all applicable fields completed

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
- Demonstrate effective use of typographic properties and values (e.g. font-family, font-style, text-transform, etc.)
- Demonstrate effective use of flexbox properties and values for layout
- Incorporate custom fonts using @font-face
- Use Sass a pre-processor and make effective use of variables, mixins, and partials
- Implement a mobile-first responsive layout
- Optimize layout for all required breakpoints

### JavaScript Requirements

Your project must:

- Define variables where needed with let and const
- Use functions to effectively organize code
- Use consistent, descriptive variable and function names
- Demonstrate effective use of control flow (loops, conditionals, etc.)
- Use objects and arrays (and their built-in methods) to effectively work with data

### jQuery Requirements

Your project must:

- Wrap jQuery code in document-ready (use short-hand)
- Use variables to store references to DOM elements wrapped in the jQuery object that are accessed more than once
- Add event listeners with jQuery and respond to events appropriately in callbacks
- Use jQuery to selectively add/remove or show/hide DOM elements
- Use jQuery's "ajax" method to make asynchronous requests to APIs and handle success/failure responses appropriately

### WordPress Requirements

Your project must:

- Use WordPress as a content management system (CMS)
- Use a provided starter theme as the base for building a custom theme
- Fill in all applicable fields in the comment block that describes a specific theme or plugin in the admin interface
- Use a WordPress menu (configured through the admin interface) for the main site navigation
- Use Gutenberg blocks to support content layout for all post types
- Enqueue CSS and JS files properly in the theme's functions.php file
- Leverage the WP template hierarchy to generate all required templates for the website
- Wrap jQuery code in an IIFE to make "\$" available in no-conflict mode
- Validate theme files with Theme Check

### Functional Requirements

Your project must:

- Contain a static "About" page, styled appropriately (page.php)
- Contain a Submit a Quote page with a functioning submission form for new quotes (page-submit.php)
- Contain a blog post index assigned as the front page, styled appropriately (home.php)
- Contain a single blog post view without comments, styled appropriately (single.php)
- Contain a general archive (for categories, tags, etc.), styled appropriately (archive.php)
- Contain a search results page, styled appropriately (search.php)
- Contain a 404 page, styled appropriately (404.php)
- Fetch an initial random post on the homepage, and fetch a new random post on the homepage on a button click using the WP REST API
- Display one item per page for the blog index and author archives, five items per page for category and tag archives, and ten items per page for search results
- Accept new quote submissions from the front-end of the site using WP REST API (for logged in users only), and set those submissions to pending by default
- Show a message to unauthenticated users on the “Submit a Quote” page that informs them they must log in to submit a new quote
- Make a GET request to a WP REST API endpoint using Ajax to dynamically add a new quote to the front page, and corresponding update the URL using the History API
- Make a POST request to a WP REST API endpoint using Ajax to submit a new quote to the site
- Clear the quote submission form and show an affirmative message when a quote is successfully submitted to the database
- Show an error message when a quote is not successfully submitted to the database

### Stretch Goals

Want to challenge yourself? Your project could also:

Create a custom WP API endpoint with your custom field data included, rather than modifying the exist post endpoint (this would be considered a better practice)

## Submission Instructions

**Note:** Please ensure browser sync is OFF before proceeding with the steps below.

1.  Add your instructor as an Administrator to your site (username: `instructor` / password: `instructor` / email: rob.hyrkiel@redacademy.com)
2.  Install the All-In-One Migration plugin
3.  Run the plugin within the WP dashboard and export as a file [important: remove node_modules from within your themes folder temporarily when running the plugin]
4.  Send the exported file to your instructor via Slack.
