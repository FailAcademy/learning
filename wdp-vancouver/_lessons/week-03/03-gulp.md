---
layout: lesson
title: Gulp
slides: ['_slides/week-03/03-gulp.md']
date: 2015-10-07
---

## Learning Objectives

- Explain the benefits of automation in web projects.
- Learn how to implement the following automation tasks:
	- uglification
	- watch
	- browser-sync

- Install Gulp globally and as a project dependency.
- Install Gulp plugins via the command line; build a `gulpfile.js` file, and run related tasks.
- Distinguish between Gulp and other solutions for managing build / other automation tasks.

---

## Keywords

- Automation
- Pre-processor
- Build task
- File Watcher

---

## Exercise 1

Install Gulp, globally and in your project, and implement 'gulp-uglify'.

---

## Exercise 2

Implement the browser-sync plugin, in your project. <br>
http://www.browsersync.io/docs/gulp/

---

## Exercise 3

Look for 2 interesting Gulp tasks, in the Gulp plugin registry and implement them in your project.
Visit [Gulp Recipies](https://github.com/gulpjs/gulp/tree/master/docs/recipes) for inspiration.

---

## Lab Activity

Implement the following Gulp tasks in your project:

- `gulp-jscs`
- `gulp-jshint`

Create 2 files: .jshintrc, .jscsrc and use the following configuration files:

- https://github.com/airbnb/javascript/blob/master/linters/jshintrc
- https://github.com/jscs-dev/node-jscs/blob/master/presets/airbnb.json

---

## Additional Resources

Links to Gulp specific pages for refrence:

- [Gulp homepage](http://gulpjs.com/)
- [Gulp plugins directory](http://gulpjs.com/plugins/)
- [Gulp API documentation](https://github.com/gulpjs/gulp/blob/master/docs/API.md)

Get to know other popular JavaScript task runners:

- [Grunt](http://gruntjs.com/)
- [Brocolli](http://broccolijs.com/)
