---
layout: project
title: Project 6 - WP API + AngularJS WordPress Theme
due: Monday, November 16th (beginning of class)
---

For Project 6, you will combine your AngularJS and WordPress skills together to build out the missing functionality for a website called Quotes on Dev.

You can [download the project files here](https://s3-us-west-2.amazonaws.com/red-wdp/project-06.zip).

## Installation Instructions

1. Download and install WP locally:
	- [Download WordPress](https://wordpress.org/download/)
	- Unzip your download and move it to your `htdocs` folder (rename the unzipped `wordpress` folder to `quotesondev`)
	- Go to phpMyAdmin (via MAMP) and create a new database called `quotes_on_dev`
	- Rename wp-config-sample.php to wp-config.php and fill in your database name and MAMP credentials (also set `WP_DEBUG` to `true`)
	- Go to http://localhost/quotesondev/wp-admin/install.php and complete your install
2. Download the [project files](https://s3-us-west-2.amazonaws.com/red-wdp/project-06.zip)
3. Copy the `quotesondev` theme directory and move it into `wp-content/themes/`
4. Activate the Quotes on Dev theme
5. Run `npm install` in your theme directory to get Gulp up and running
6. Go to **Tools > Import** and install the WordPress importer plugin
7. Import the provided XML file
8. Install and activate the Debug Bar and WP REST API plugins

## Requirements:

To receive a "Pass" grade for this project, your submission will need to satisfy the following criteria:

**Functional requirements:**

- Fetch random posts on the homepage
- Accept new quote submissions from the front-end of the site (from logged in users only), and set those submissions to pending

**WordPress requirements:**

- Make use of the [WP REST API (v2)](https://wordpress.org/plugins/rest-api/) plugin to satisfy functional requirements

**AngularJS requirements:**

- Create at least one Angular Directive to encapsulate the UI for displaying and fetching quotes
- Use an external template in your Directive
- Create a service module to encapsulate HTTP request/response functionality
- Enable fetching of random quotes, and fetching individual quotes using the 'slug' property
- Create a controller module to capture user input, perform input validation and handle submitting quotes to the API

## Submission Instructions

When you're ready to submit your project, **please email a link to your GitHub repository containing your project** to [mandi@redacademy.com](mailto:mandi@redacademy.com).
