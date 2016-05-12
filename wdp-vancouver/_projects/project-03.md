---
layout: project
title: Project 3 - Mars Quiz App
due: Monday, May 16th (beginning of class)
---

## Design Specifications:

- The base font size is `16px` and it HEX code is `#ffffff`
- The body font family is Open Sans Light
- The HEX code for the button colour is `#e2231a`
- The light grey border color is `#dbdbdb`
- The medium grey color of the text in the footer is `#c2c2c2`

## Requirements

To receive a "Pass" grade for this project, your submission will need to satisfy the following criteria:

**Functional requirements:**

Your project must:


**General requirements:**

Your project must:

- Contain a single `.html` file and an external, minified `.css` file (a CSS reset may be included separately)
- **Adequately reflect the designer's vision for the website when built out using HTML & CSS**
- Demonstrate effective organization of the project's root directory
- Have a Git repository initialized in its root directory with an appropriately customized `.gitignore` file
- Be pushed to GitHub (with all of your commits synced to it)
- Use Webpack for running build tasks, such as React transformation, and error checking

**HTML requirements:**

Your project must:

- Uses the HTML5 doctype and semantic, *syntactically-correct HTML5*
- Include all essential elements covered in class (e.g. `<meta charset="utf-8">`)

**CSS/Sass requirements:**

Your project must:

- Make appropriate use of classes and IDs as selectors
- Use a CSS reset
- Minify your css using Webpack
- Demonstrate effective use of box model properties (Must use flexbox)
- Use an icon font
- Use a `linear-gradient` background
- Create a 3D effect on the Rocket icon using the `text-shadow` property
- Create a glowing effect on the counter using the `text-shadow` property
- Apply the `rotate` transform to the sidebar text so it displays at 90deg
- Apply the `letter-spacing` property to the sidebar text
- The project should contain at least 20% original CSS, not specified by the project example.
(The look ad feel is up to you!)

**JS requirements:**

Your project must:

- Implement React and the related Webpack loader plugins for transforming React code into ES5 JavaScript
- Be composed of at least 3 React Components, other than the Parent Component.
- Components must be written in separate files, and bundled together into a single file. This should be accomplished using `require` or `import`.

*Components* (React requirements)

- All components must correctly implement interactivity using `state` and `props`
- Quiz page: There should be a page-level component, containing the other components on the page.
- Counter: The counter should visually count down, in minutes, from a number specified on the counter component instance via `props`, e.g. `<Counter countdownMinutes={2} />`
- Quiz Form: This component should capture user input, check some criteria for correctness of the input and display feedback to the user, once the user *submits* the form. This should be done by modifying the state of the parent component from the child (Quiz Form) component.
- If the user does not submit a correct answer before the countdown timer has reached 0:00, then the application should remove the form and show some feedback indicating that the user has failed.
- Once the user has answered correctly, they should not be able to reset the quiz.
- If the user fails, the quiz should reset.

## Submission Instructions

When you're ready to submit your project, **please email a link to your GitHub repository containing your project** to [mackenzie@redacademy.com](mailto:mackenzie@redacademy.com).
