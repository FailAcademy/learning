---
layout: lesson
title: Gulp
slides: ['_slides/week-03/03-gulp.md']
lesson_date: 2016-07-20
---

## Pre-Work

Visit **[this GitHub repo](https://github.com/osscafe/gulp-cheatsheet)** and have a look at the **English JavaScript** cheatsheets to get a feeling for what Gulp does, and for the code we'll be writing in today's lesson.

You are encouraged to save these cheatsheets for your own reference.

---

## Learning Objectives

- Explain the benefits of automation in web projects.
- Implement the following automation tasks: `uglification`, `watch`, and `browser-sync`.
- Install Gulp globally and as a project development dependency.
- Install Gulp plugins via the command line, build a `gulpfile.js` file, and run related tasks.
- Distinguish between Gulp and other solutions for managing build/other automation tasks.

---

## Keywords

- npm (Node Package Manager)
- Dependencies
- Automation
- Build task
- File watcher

---

## Exercise 1

Create a new folder in your project called `build` to store the uglified version of your files, then add Gulp to your project and implement the `gulp-uglify` task as demonstrated.

Run the task and see what happens...

---

## Exercise 2

Let's try implementing the BrowserSync plugin in our projects with Gulp.

Learn how to do that here:

**[www.browsersync.io/docs/gulp/](http://www.browsersync.io/docs/gulp/)**

---

## Lab Activity

In addition to working on Project 2 today, you'll also want to implement the following additional Gulp plugins in your project:

- `gulp-plumber`
- `gulp-eslint`

The first plugin will prevent pipe breaking when Gulp encounters an error in your code (e.g. when there's a syntax error in your JS while trying to uglify it). You'll want to incorporate this in your `scripts` task, and the `sass` task that we'll create tomorrow.

The second plugin will allow you to check your JS code style against a styleguide (such as the Airbnb styleguide). You'll want to create a new `eslint` task to implement this plugin.

- https://github.com/adametry/gulp-eslint

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
