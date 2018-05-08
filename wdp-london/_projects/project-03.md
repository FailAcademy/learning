---
layout: project
title: Project 3 - Beer Listing
due: Monday, May 14th (beginning of class)
---

For Project 3, you're going to create a listing of beers from the BrewDog Punk API. You can [download the project starter files here](https://drive.google.com/file/d/1AyPhlj8n_bCKlxRBaSzU313BsSfgHYCK/view?usp=sharing).

## Requirements

To receive a "Pass" grade for this project, your submission will need to satisfy the following criteria:

**Functional requirements:**

Your project must:

* Implement the [BrewDog Punk API](https://punkapi.com/documentation/v2) to fetch data about beer
* Contain a listing section, with pagination, of beers (this is the default view)
* Be able to show one beer at a time when 'quick find' is clicked - and have a button to get a new one
* Display a form when 'pick a beer' is clicked
* Implement a modal to view the ingredients of an individual beer

**General requirements:**

Your project must:

* Contain a `build` directory for ES6 compiled into ES5 using Babel
* Contain an appropriate `package.json` file
* Demonstrate effective organization of the project’s root directory
* Have a Git repository initialized in its root directory with an appropriately customized `.gitignore` file
* Be pushed to GitHub (with all of your commits synced to it)
* Contain a `README.md` file describing the project (e.g. technologies used, personal learnings, etc.)

**HTML requirements:**

Your project must:

* Pass a validation check

**JS requirements:**

Your project must:

* Use default `import` and `export`
* Use an ES2015 class `constructor` and methods
* Instantiate new objects using `new`
* Use of `this` appropriately within classes
* Use the [promise-based HTTP request library, axios](https://github.com/axios/axios)
* Be written in an object-oriented style using classes

**SASS requirements:**

Note that responsive media queries are optional - there should be plenty to keep you busy!

Your project must:

* Include a reset
* Use CSS grid, with named areas
* Implement some SASS functions to darken hoverable elements
* Use @import to help organize your code into multiple files

HEX Codes for pH levels:

< 4.6  

**#FBBA00**

4.6 - 5.0  

**#DF932C**

5.4 - 5.8  

**#D96A38**

5.8 - 6.2

**#9E2C1D**

**Stretch goals:**

Want to challenge yourself? Your project could also:

* Implement a [range slider](https://github.com/Stryzhevskyi/rangeSlider) for the ABV, IBU and EBC in the form
* Apply ARIA roles and attributes to all of the interactive elements of the page
* Add the ability for a user to save their favourite beers, using the sessionStorage API 
* Add the ability to filter by 'all', 'keg only', and 'bottle only' on the listing


## Submission Instructions

When you're ready to submit your project, **please email a link to your GitHub repository containing your project** to [carlos@redacademy.com](mailto:carlos@redacademy.com).
