---
layout: project
title: Project 3 - Instagrid
due: Monday, October 19th (beginning of class)
---

For Project 3, you're going to create a one-page, responsive website that allows a user to search for a hashtag via the Instagram API.

You can [download the project files here](/public/files/projects/project-03.zip).

## Design Specifications:

- The base font size is `12px` and its HEX code is `#2e2e2e`
- The body font family is Open Sans Light
- The font family for the usernames is Open Sans Bold
- The HEX code for the button colour is `#e24420`
- The HEX code for the border around the grid is `#c2c2c2`
- The HEX code for the border around the images and the text inside the search box is `#dbdbdb`

## Requirements

To receive a "Pass" grade for this project, your submission will need to satisfy the following criteria:

**Functional requirements:**

Your project must:

- Dynamically fetch photos and populate them in a webpage via the Instagram API based a text string input into a search field

**General requirements:**

Your project must:

- Contain a single `.html` file and an external `.css` file (a CSS reset may be included separately)
- Adequately reflect the designer's vision for the website when built out using HTML & CSS
- Demonstrate effective organization of the project's root directory
- Have a Git repository initialized in its root directory
- Be pushed to GitHub (with all of your commits synced to it)
- Use Gulp for running build tasks, such as minification and error checking

**HTML requirements:**

Your project must:

- Use the HTML5 doctype and semantic HTML5 mark-up
- Include all essential elements covered in class (e.g. `<meta charset="utf-8">`)

**CSS/Sass requirements:**

Your project must:

- Make appropriate use of classes and IDs as selectors
- Use a CSS reset
- Use Sass as a preprocessor, with CSS properly compiled and minified
- Use the `background` property where appropriate
- Implement a mobile-first responsive layout using Flexbox
- Demonstrate effective use of box model properties
- Demonstrate effective use of CSS properties for altering the visual display of text (e.g. `font-family`, `font-style`, `text-transform`, etc.)
- Incorporate custom fonts using `@font-face`
- Use an icon font

**RWD requirements:**

Your project must:

- Be optimized for 3 screen sizes: mobile, `min-width: 600px`, and `min-width: 1000px`

**JS requirements:**

Your project must:

- Use Ajax to fetch data from an Instagram API endpoint
- Transition users between UI states, starting where no photos have been returned, and then subsequently transitioning where photos populate the grid

**Stretch goals:**

Want to challenge yourself? Your project could also:

- Incorporate pagination and fetch additional photos via the Instagram API when the "Load More" button is clicked

## Submission Instructions

When you're ready to submit your project, **please email a link to your github repository containing your project** to [mackenzie@redacademy.com](mailto:mackenzie@redacademy.com).
