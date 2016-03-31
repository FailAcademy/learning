---
layout: project
title: Project 2 - Instanews
due: Tuesday, May 3 (beginning of class)
---

For Project 2, you're going to create a one-page, responsive website that allows a user to search news story categories via the New York Times API.

You can [download the project files here](https://s3-us-west-2.amazonaws.com/red-wdp/project-files/project-02.zip).

## Design Specifications:

*Updated design specifications TBA.*

- The base font size is `16px` and it HEX code is `#ffffff`
- The body font family is Open Sans Light
- The HEX code for the button colour is `#e2231a`
- The light grey border color is `#dbdbdb`
- The medium grey color of the text in the footer is `#c2c2c2`

## Requirements

To receive a "Pass" grade for this project, your submission will need to satisfy the following criteria:

**Functional requirements:**

Your project must:

- Dynamically fetch photos and populate them in a webpage via the Instagram API based a text string input into a search field
- Resize the header area (i.e. logo plus search input) so that it transitions from occupying `100vh` on page load to only `auto` height after the search form is submitted (you will need jQuery for this)
- Link each returned image to its URL on Instagram

**General requirements:**

Your project must:

- Contain a single `.html` file and an external, minified `.css` file (a CSS reset may be included separately)
- Adequately reflect the designer's vision for the website when built out using HTML & CSS
- Demonstrate effective organization of the project's root directory
- Have a Git repository initialized in its root directory with an appropriately customized `.gitignore` file
- Be pushed to GitHub (with all of your commits synced to it)
- Use Gulp for running build tasks, such as minification, and error checking

**HTML requirements:**

Your project must:

- Uses the HTML5 doctype and semantic, syntactically-correct HTML5
- Include all essential elements covered in class (e.g. `<meta charset="utf-8">`)

**CSS/Sass requirements:**

Your project must:

- Make appropriate use of classes and IDs as selectors
- Use a CSS reset
- Use Sass as a preprocessor, with CSS properly compiled and minified
- Use the `background` property where appropriate
- Implement a mobile-first responsive layout using flexbox (no floats)
- Demonstrate effective use of box model properties
- Demonstrate effective use of CSS properties for altering the visual display of text (e.g. `font-family`, `font-style`, `text-transform`, etc.)
- Incorporate custom fonts using `@font-face`
- Use an icon font

**JS requirements:**

Your project must:

- Use Ajax to fetch data from an Instagram API endpoint
- Transition users between UI states, starting where no photos have been returned, and then subsequently transitioning where photos populate the grid (by incorporating a loading gif)

**RWD requirements:**

Your project must:

- Be responsively designed using a mobile-first approach
- Be optimized for 3 screen sizes: mobile, `min-width: 600px`, and `min-width: 1000px`

**Stretch goals:**

Want to challenge yourself? Your project could also:

- Incorporate pagination and fetch additional photos via the Instagram API when the "Load More" button is clicked
- Incorporate a combination of jQuery and CSS3-based animation to animate the movement of the header on search submit

## Submission Instructions

When you're ready to submit your project, **please email a link to your GitHub repository containing your project** to [mandi@redacademy.com](mailto:mandi@redacademy.com).
