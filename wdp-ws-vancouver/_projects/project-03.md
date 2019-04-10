---
layout: project
title: Project 3 - Instanews App
due: Monday, June 17th (beginning of class)
---

For Project 2, you're going to create a one-page, responsive website that allows a user to filter top news story categories via the [New York Times API](http://developer.nytimes.com/docs/top_stories_api/).

You can [download the project files here](https://s3-us-west-2.amazonaws.com/red-wdp/project-files/project-02.zip).

## Design Specifications:

- The base font size is `16px` and it HEX code is `#ffffff`
- The body font family is Open Sans Light
- The medium grey colour of the text in the footer is `#c2c2c2`

## Requirements

To receive a “Complete” for this project, your submission will need to satisfy the following criteria:

### Peer Review Requirements

You must:

- Complete peer evaluation form
- Post at least three issues on partner's repo
- Submit one specific pull request where appropriate to patch an issue

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

### CSS Requirements

Your project must:

- Translate the designer's overall vision for the website into code
- Use Sass a pre-processor and make effective use of variables, mixins, and partials
- Use appropriate CSS selectors (e.g. classes instead of IDs, no overly-specific selectors, etc.)
- Use a CSS reset
- Demonstrate effective use of box model properties and values
- Demonstrate effective use of typographic properties and values (e.g. `font-family`, `font-style`, `text-transform`, etc.)
- Demonstrate effective use of flexbox properties and values for layout
- Incorporate custom fonts using `@font-face`
- Implement a mobile-first responsive layout
- Optimize layout for all required breakpoints

### JavaScript Requirements

Your project must:

- Define variables where needed with `let` and `const`
- Use functions to effectively organize code
- Use consistent, descriptive variable and function names
- Check for strict equality with comparison operators
- Demonstrate effective use of control flow (loops, conditionals, etc.)
- Use objects and arrays (and their built-in methods) to effectively work with data

### jQuery Requirements

Your project must:

- Wrap jQuery code in document-ready (use short-hand)
- Use variables to store references to DOM elements wrapped in the jQuery object that are accessed more than once
- Add event listeners with jQuery and respond to events appropriately in callbacks
- Use jQuery to selectively add/remove or show/hide DOM elements
- Use jQuery's `ajax` method to make asynchronous requests to APIs and handle success/failure responses appropriately

### Functional Requirements

Your project must:

- Contain a single `.html` file and an external `.css` file (CSS reset may be included in a separate file)
- Fetch data from the Top Stories v2 NYT API endpoint
- Only display a maximum of 12 stories in the grid and only display a story if it has a photo associated with it
- Transition users between UI states, beginning where no stories have been returned, and then subsequently appending stories to populate the grid (incorporate a loader GIF)

### Stretch Goals

Want to challenge yourself? Your project could also:

- Incorporate a select element with custom styles applied (you will need a jQuery plugin for this)
- Incorporate a combination of jQuery and CSS3-based animation to animate the movement of the header on search submit
- Use CSS3 transitions to show and hide the article abstract on hover

## Submission Instructions

When you're ready to submit your project, **please email a link to your GitHub repository containing your project** to [zareef.baksh@redacademy.com](zareef.baksh@redacademy.com).
