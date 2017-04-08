---
layout: project
title: Project 5 - Mars Colony App
due: Monday, June 5th (beginning of class)
---

For Project 5, you're going to create a web-based application for Earth colonists exploring Mars using Angular 2.

## Requirements

To receive a "Pass" grade for this project, your submission will need to satisfy the following criteria:

**Functional requirements:**

- Implement `GET` and `POST` HTTP requests using Angular's HTTP service to:
	- Save a new Colonist's information
	- Save a new Alien encounter
	- Fetch a list of recent Alien encounters
	- Create a new Encounter Report

**General requirements:**

Your project must:

- Create aesthetically-relevant styles to build out a "Mars" theme for the app (have fun with this!)
- Demonstrate effective organization of the project’s root directory
- Have a Git repository initialized in its root directory with an appropriately customized `.gitignore` file
- Be pushed to GitHub (with all of your commits synced to it)
- Contain a `README.md` file describing the project (e.g. technologies used, personal learnings, etc.)

**Angular 2 requirements:**

Your project must:

- Implement the [Angular 2 Router](https://angular.io/docs/ts/latest/guide/router.html)
- Contain pages and routes for all of the views in the specification
- Implement `ngForm` and validate user input, and prevent forms from sending invalid API requests
- Implement the appropriate user feedback when components and data are loading (for example, a loading/text indicator showing that data is being loaded and that disappears when loading is finished)
- Implement the following Angular built-in directives: `ngFor`, `ngIf`, `ngClass`, and `ngModel`
- Implement the `OnInit` Class interface
- Implement the following additional Angular features:
	- Class (to represent form data)
	- Decorator (`@Component`, `@Routes`, etc.)
	- Interface (to represent API Data)
	- Component

**CSS requirements:**

Your project must:

- Make appropriate use of classes and IDs as selectors
- Use a CSS reset
- Implement a mobile-first responsive layout using Flexbox
- Incorporate styles elements (including SCSS variables and mixins) into a `_theme.scss` file
- Use Angular Component scope styling and the `@import` directive

**Stretch goals:**

- Save the Colonist object in local storage:
	- When the user submits the registration form, the API will return a Colonist object in the response to the `POST` request
	- You'll need to save this new Colonist object using `localStorage`, and retrieve it later in the Encounters Component
	- You'll also need to send a colonist ID when `POST`-ing an encounter

- WordPress integration with the WP REST API (v2):
	- Create a blog Component/Route and display posts from by Mars Colonists in your app
	- The URL of the Mars Commander's log is http://fourth.academy.red/
	- The documentation for accessing the posts route may be found here: http://v2.wp-api.org/reference/posts/

## Submission Instructions

When you're ready to submit your project, **please email a link to your GitHub repository containing your project** to [mackenzie@redacademy.com](mailto:mackenzie@redacademy.com).
