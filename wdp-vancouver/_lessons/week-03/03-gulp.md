---
layout: lesson
title: Gulp
slides: ['_slides/week-03/03-gulp.md']
lesson_date: 2016-04-27
---

## Pre-Work

Visit [this site](https://github.com/osscafe/gulp-cheatsheet) and have a look at the **'English JavaScript'** cheatsheets, to get a feeling for what Gulp does, and for the code we'll be writing in todays lesson.

Feel free to save these cheatsheets for your own reference!

---
## Learning Objectives

- Explain the benefits of automation in web projects.
- Learn how to implement the following automation tasks: `uglification`, `watch`, `browser-sync`
- Install Gulp globally and as a project dependency.
- Install Gulp plugins via the command line, then build a `gulpfile.js` file, and run related tasks.
- Distinguish between Gulp and other solutions for managing build/other automation tasks.

---

## Keywords

- Automation
- Pre-processor
- Build task
- File Watcher

---

## Exercise 1

Create a new folder in your project called `build` to store the uglified version of your files, then add Gulp to your project and implement the `gulp-uglify` task as demonstrated.

Run the task and see what happens...

---

## Exercise 2

Let's try implementing the BrowserSync plugin in our projects with Gulp.

Learn how to do that here:

http://www.browsersync.io/docs/gulp/

---

## Exercise 3

We'll implement all of the plugins we'll need to build out second project!

- `gulp-plumber`
- `gulp-notify`
- `gulp-rename`
- `jscs`
- `jshint`

---

## Lab Activity

In addition to working on Project 3 today, you'll also want to implement the following additional Gulp tasks in your project:

- `gulp-jscs`
- `gulp-jshint`

You'll also need to create two files, `.jshintrc` and `.jscsrc`, and use the following for the content of these configuration files:

- https://github.com/airbnb/javascript/blob/master/linters/jshintrc
- https://github.com/jscs-dev/node-jscs/blob/master/presets/airbnb.json

---

## Additional Resources

Links to Gulp specific pages for reference:

- [Gulp homepage](http://gulpjs.com/)
- [Gulp plugins directory](http://gulpjs.com/plugins/)
- [Gulp API documentation](https://github.com/gulpjs/gulp/blob/master/docs/API.md)

Get to know other popular JavaScript task runners:

- [Grunt](http://gruntjs.com/)
- [Brocolli](http://broccolijs.com/)
