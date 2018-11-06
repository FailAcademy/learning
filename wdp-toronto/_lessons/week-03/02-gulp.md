---
layout: lesson
title: Gulp
slides: ["_slides/week-03/02-gulp.md"]
lesson_date: 2018-10-17
---

## Pre-Work

### Software Installation:

Prior to class, please download and install Node.js:

- [Node.js website](https://nodejs.org/en/)

**Note:** If you are working on a Mac, [consider installing Homebrew first](http://brew.sh/), then use Homebrew to install Node instead by running:

`brew install node`

### Reading:

Visit **[this GitHub repo](https://github.com/osscafe/gulp-cheatsheet)** and have a look at the **English JavaScript** cheatsheets to get a feeling for what Gulp does, and for the code we'll be writing in today's lesson.

You are encouraged to save these cheatsheets for your own reference.

---

## Learning Objectives

- Explain what it means to install a JavaScript runtime on your computer, or a server.
- Explain the benefits of automation in web projects.
- Implement the following automation tasks: `uglification`, `watch`, and `browser-sync`.
- Install Gulp globally and as a project development dependency.
- Install Gulp plugins via the command line, build a `gulpfile.js` file, and run related tasks.
- Distinguish between Gulp and other solutions for managing build/other automation tasks.
- Set-up ESLint to run as a Gulp task to check JavaScript code against specific style rules.

---

## Keywords

- Node.js
- npm (Node Package Manager)
- Dependencies
- Automation
- Build task
- File watcher
- Linting

---

## Exercise 1

Add Gulp to your project and implement the `gulp-terser` task as demonstrated.

Run the task and see what happens...

---

## Exercise 2

Let's implement BrowserSync in our projects with Gulp.

Learn how to do that here: **[www.browsersync.io/docs/gulp/](http://www.browsersync.io/docs/gulp/)**

**Hint:** We're already watching our JS source files, uglifying them, and moving the newly minified files into the `build` directory. Think about what file will we want to watch for changes on, and subsequently reload the browser afterward.

---

## Exercise 3

Add ESLint as a part of your build process with Gulp. Begin by installing `gulp-eslint`:

- [`gulp-eslint`](https://www.npmjs.com/package/gulp-eslint)

We have alread created our `.eslintrc` files as part of the lesson, so now it's up to you to:

1.  Create a named `lint` task in your `gulpfile.js`
2.  Add the `lint` task as a dependency for the `scripts` task

---

## Lab Activity

Now that you have Gulp and ESLint successfully configured for your project, continue working on Instanews for the remainder of the day.

---

## Additional Resources

Udacity Course by Google:

- [Web Tooling & Automation Course](https://www.udacity.com/course/web-tooling-automation--ud892)

Links to Gulp specific pages for reference:

- [Gulp homepage](http://gulpjs.com/)
- [Gulp plugins directory](http://gulpjs.com/plugins/)
- [Gulp API documentation](https://github.com/gulpjs/gulp/blob/master/docs/API.md)
- [Browsersync + Gulp.js](https://www.browsersync.io/docs/gulp/)

Get to know other popular JavaScript task runners:

- [Grunt](http://gruntjs.com/)
- [Brocolli](http://broccolijs.com/)
