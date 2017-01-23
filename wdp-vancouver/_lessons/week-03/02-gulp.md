---
layout: lesson
title: Gulp
slides: ['_slides/week-03/02-gulp.md']
lesson_date: 2017-01-24
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

Create a new folder in your project called `build` to store the uglified version of your files, then add Gulp to your project and implement the `gulp-uglify` task as demonstrated.

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

1. Create a named `lint` task in your `gulpfile.js`
2. Add the `lint` task as a dependency for the `scripts` task

---

## Lab Activity

To begin the lab today, you'll want to implement the following additional Gulp plugins in your project:

- [`gulp-plumber`](https://www.npmjs.com/package/gulp-plumber)
- [`gulp-notify`](https://www.npmjs.com/package/gulp-notify)

The first plugin will prevent pipe breaking when Gulp encounters an error in your code (e.g. when there's a syntax error in your JS while trying to uglify it). The second plugin will notify us with a helpful error message when that happens.

Be sure to require these new modules in your project:

```js
var gulp = require('gulp'),
  // ...other already required plugins!!
  plumber = require('gulp-plumber'),
  notify = require('gulp-notify');
```

When you set-up `gulp-plumber` in your `gulpfile.js`, take advantage of the option to pass in a function as an argument that will act as an **error handler** (which makes use of the `gulp-notify` plugin).

To do that, include this function underneath the required modules in your `gulpfile.js` and pass it in as an argument whenever you call `plumber()`:

```js
var plumberErrorHandler = {
  errorHandler: notify.onError({
    title: 'Gulp',
    message: 'Error: <%= error.message %>'
  })
};
```

You'll want to incorporate `plumber` in your `scripts` task...and the `sass` task that we'll create tomorrow.

After you add the `gulp-plumber` and `gulp-notify` plugins successfully in your project, continue working on the rest of Instanews for the remainder of the day.

---

## Additional Resources

Links to Gulp specific pages for reference:

- [Gulp homepage](http://gulpjs.com/)
- [Gulp plugins directory](http://gulpjs.com/plugins/)
- [Gulp API documentation](https://github.com/gulpjs/gulp/blob/master/docs/API.md)
- [Browsersync + Gulp.js](https://www.browsersync.io/docs/gulp/)

Get to know other popular JavaScript task runners:

- [Grunt](http://gruntjs.com/)
- [Brocolli](http://broccolijs.com/)
