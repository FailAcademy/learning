---
layout: project
title: Project 5 - Quotes on Dev
due: Monday, August 27th (beginning of class)
---

For Project 5, you will combine your JavaScript and WordPress skills together to build out the functionality for a website called Quotes on Dev using the WordPress REST API.

You can [download the project files here](https://s3-us-west-2.amazonaws.com/red-wdp/project-files/project-05.zip).

## Set-up Instructions

1.  Download and install a fresh copy of WordPress locally
2.  Download the [`quotesondev-starter`](https://github.com/redacademy/quotesondev-starter) repo, move it into `wp-content/themes/`, then follow the installation instructions in the `README`
3.  Activate the Quotes on Dev theme
4.  [Download the project files](https://s3-us-west-2.amazonaws.com/red-wdp/project-files/project-05.zip)
5.  In WordPress, go to Tools > Import and install the WordPress importer plugin
6.  Import the provided XML file to populate the site with content
7.  Start themin'!

## Design Specifications

### Structure:

* This fixed width website is `1080px` wide
* The base spacing unit is `1.5rem`
* The dashed border is `1px dashed #ffffff`

### Typography:

* The base font size is `16px` and its HEX code is `#ffffff`
* The base line-height for the site is `1.5`
* The main font family is Exo Web

### Colors:

* The main background colour is `#222222`
* The HEX code for the green brand colour is `#00cc00`

## Requirements

To receive a "Pass" grade for this project, your submission will need to satisfy the following criteria:

**Functional requirements:**

Your project must:

* Be built using WordPress as CMS
* Contain a About page, an Archives page, and Submit a Quote page
* Contain a blog post index page and a single view for blog posts
* Contain a search results page and 404 page
* Fetch an initial random post on the front page
* Fetch additional random posts on the front page using the WP API
* Display one item per page for the blog index and author archives, five items per page for category and tag archives, and ten items per page for search results
* Accept new quote submissions from the front-end of the site using WP API (for logged in users only), and set those submissions to pending by default
* Show a message to unauthenticated users on the "Submit a Quote" page that informs them they must log in to submit a new quote

**General requirements:**

Your project must:

* Adequately reflect the designer's vision for the website
* Demonstrate effective organization of the project's custom theme directory
* Have a Git repository initialized in its root directory with an appropriately customized `.gitignore` file
* Be pushed to GitHub (with all of your commits synced to it)
* Contain a `README.md` file describing the project (e.g. technologies used, personal learnings, etc.)
* Use Gulp for running build tasks, such as minification and error checking

**WordPress requirements:**

Your project must:

* Use the `quotesondev-starter` WordPress theme as a base for building your project
* Support default Posts and Page (no Comments)
* Use a WordPress menu (configured through the admin interface) for the main site navigation
* Include a custom page template for the "Archives" page that displays post, category, and tag archives
* Include a custom page template for the "Submit a Quote" page
* Properly enqueue CSS and JS files in the theme's `functions.php` file
* Leverage the WP template hierarchy to generate required layouts for the website
* Be validated with Theme Check

**HTML requirements:**

Your project must:

* Use the HTML5 doctype and semantic, syntactically-correct HTML5
* Include all essential elements covered in class (e.g.`<meta charset="utf-8">`), and be dynamically populated with WordPress template tags where appropriate

**CSS requirements:**

Your project must:

* Make appropriate use of classes and IDs as selectors
* Use a CSS reset (normalize.css is included with the `quotesondev-starter` theme)
* Use Sass as a preprocessor, with CSS properly compiled and minified
* Implement a layout using flexbox (no floats)
* Demonstrate effective use of box model properties
* Demonstrate effective use of CSS properties for altering the visual display of text (e.g. `font-family`, `font-style`, `text-transform`, etc.)
* Incorporate custom fonts using `@font-face`

**JS requirements:**

* Make a `GET` request to a WP API endpoint using Ajax to dynamically add a new quote to the front page, and corresponding update the URL using the History API
* Make a `POST` request to a WP API endpoint using Ajax to submit a new quote to the quote to the site
* Clear the quote submission form and show an affirmative message when a quote is successfully submitted to the database
* Show an error message when a quote is not successfully submitted to the database

**RWD requirements:**

Your project must:

* Be responsively designed using a mobile-first approach
* Be optimized for 3 screen sizes: mobile, `min-width: 620px` and `min-width: 1080px`

**Additional requirements:**

* Be sure to test your project completely in all major browsers (Chrome, Firefox, Safari, Opera, Edge) when you think you’re finished

**Stretch goals:**

Want to challenge yourself? Your project could also:

* Create a custom WP API endpoint with your custom field data included, rather than modifying the exist `post` endpoint (this would be considered a better practice)

## Submission Instructions

Once you have finished working on your site, please export your database by following these instructions:

**Note:** Please ensure browser sync is OFF before proceeding with the steps below. VERY IMPORTANT.

1.  Add Rose as an Administrator to your site (username: `rose` / password: `rose` / email: rose.cass@redacademy.com)
2.  Install the WP Migrate DB plugin
3.  Go to Tools > Migrate DB in the WordPress admin area
4.  Change the "Replace" fields so that the first field contains `//localhost/student` and the second contains `/Applications/MAMP/htdocs/student`
5.  Click the Migrate button to export your DB

**Submitting your project:**

When you're ready to submit your project, **please email a link to your GitHub repository containing your project** with your **database file attached** to [rose.cass@redacademy.com](mailto:rose.cass@redacademy.com).
