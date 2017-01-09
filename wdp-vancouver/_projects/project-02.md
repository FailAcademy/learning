---
layout: project
title: Project 2 - Instanews App
due: Tuesday, January 31st (beginning of class)
---

For Project 2, you're going to create a one-page, responsive website that allows a user to filter top news story categories via the [New York Times API](http://developer.nytimes.com/docs/top_stories_api/).

You can [download the project files here](https://s3-us-west-2.amazonaws.com/red-wdp/project-files/project-02.zip).

## Design Specifications:

- The base font size is `16px` and it HEX code is `#ffffff`
- The body font family is Open Sans Light
- The medium grey colour of the text in the footer is `#c2c2c2`

## Requirements

To receive a "Pass" grade for this project, your submission will need to satisfy the following criteria:

**Functional requirements:**

Your project must:

- Dynamically fetch story data and populate it in a webpage via the Top Stories API based a user's selection from a `<select>` field
- Resize the header area (i.e. logo plus `<select>`) so that it transitions from occupying the entire screen on page load to only `auto` height after the `<select>` field is changed (you will need jQuery for this)
- Link each returned image to its URL on the NYT website

**General requirements:**

Your project must:

- Contain a single `.html` file and an external, minified `.css` file
- Adequately reflect the designer's vision for the website when built out using HTML and CSS
- Demonstrate effective organization of the project's root directory
- Have a Git repository initialized in its root directory with an appropriately customized `.gitignore` file
- Be pushed to GitHub (with all of your commits synced to it)
- Contain a `README.md` file describing the project (e.g. technologies used, personal learnings, etc.)
- Use Gulp for running build tasks, such as minification, Sass compilation, and error checking

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

**JS requirements:**

Your project must:

- Use Ajax to fetch data from the NYT Top Stories endpoint
- Only display a maximum of 12 stories in the grid, and only display a story if it has a photo associated with it
- Transition users between UI states, starting where no stories have been returned, and then subsequently transitioning where stories populate the grid (by incorporating a loading gif)

**RWD requirements:**

Your project must:

- Be responsively designed using a mobile-first approach
- Be optimized for 3 screen sizes: mobile, `min-width: 600px`, and `min-width: 1000px`

**Additional requirements:**

- Be sure to **test** your project completely in **all major browsers** (Chrome, Firefox, Safari, Opera, IE11/Edge) when you think you're finished

**Stretch goals:**

Want to challenge yourself? Your project could also:

- Incorporate a `<select>` field with custom styles applied (you will need a jQuery plugin for this such as [Heapbox](https://github.com/FilipBartos/heapbox))
- Incorporate a combination of jQuery and CSS3-based animation to animate the movement of the header on the `<select>` change
- Use CSS3 transitions to show and hide the article abstract on hover

## Submission Instructions

When you're ready to submit your project, **please email a link to your GitHub repository containing your project** to [mandi@redacademy.com](mailto:mandi@redacademy.com).
