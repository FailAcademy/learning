---
layout: project
title: Mars Colony App
due: Tuesday, November 14th (beginning of class)
---

For Project 5, you're going to create a web-based application for Earth colonists exploring Mars using React.

## Requirements

To receive a "Pass" grade for this project, your submission will need to satisfy the following criteria:

**Functional requirements:**

- Implement `GET` and `POST` HTTP requests using Axios to:
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

**React requirements:**

Your project must:
- Implement React Router
- Contain routes for all the views
- Implement appropriate user feedback when a component is loading
- Utilize stateful/stateless components

**CSS requirements:**

Your project must:

- Make appropriate use of classes and IDs as selectors
- Use a CSS reset
- Implement a mobile-first responsive layout using Flexbox
- Incorporate styles elements (including SCSS variables and mixins) into a `_theme.scss` file

**Stretch goals:**

- Save the Colonist object in local storage:
- When the user submits the registration form, the API will return a Colonist object in the response to the `POST` request
- You'll need to save this new Colonist object using `localStorage`, and retrieve it later in the Encounters Component
- You'll also need to send a colonist ID when `POST`-ing an encounter


