---
layout: lesson
title: Ajax in WordPress & WP API
slides: ['_slides/week-08/01-wp-ajax-api.md']
date: 2015-11-09
---

## Pre-Work

*There is no pre-work for this lesson.*

---

## Learning Objectives

- Create Ajax requests using Ajax-specific functions in WordPress.
- Use "nonces" to securely make Ajax requests in WordPress.
- Use the `wp_localize_script` function to pass data via PHP to make it available to JS scripts.
- Identify the purpose of the WP API plugin, install it, and use it to randomly populate post data from the front-end of website via an Ajax request.

---

## Keywords

- Ajax
- [Nonce](https://codex.wordpress.org/WordPress_Nonces)

---

## Lab Activity

In today's lab, we'll work together to build out the jQuery required to add the required WP API-related functionality for the Quotes on Dev site.

Specifically, we'll fetch data from WP using the REST API plugin and dynamically populate it in the site, and we'll create a basic form to accept front-end post submissions via the API too.

More details on this mini-project and its supporting files can be found [here](/project/project-6-wp-api-angularjs-wordpress-theme/).

---

## Additional Resources

From the codex, all about nonces in WordPress:

- [WordPress Nonces](https://codex.wordpress.org/WordPress_Nonces)

Documentation for WP API v2:

- [WP REST API](http://v2.wp-api.org/)
