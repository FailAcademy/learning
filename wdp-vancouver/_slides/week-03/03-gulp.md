---
layout: slidedeck
title: Gulp Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Gulp 

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Introduce & Install Gulp
2. Set up Gulp in your project
3. Understand the benefits of automation
4. Install Gulp tasks in our project!

---
class: center, middle

### Install Gulp in your Project 2 directory
**Visit:** [https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) and follow the instructions listed there.

---

template: inverse

##Anatomy of a Gulpfile
---
###Basic Gulp

- Require the Gulp module
- Define a **Gulp Task**
- Write some code to run when that task is called

```js
	var gulp = require('gulp'); // Require Gulp!

	// This is a very basic Gulp task,
	// with a name and some code to run
	// when this task is called:
	gulp.task('default', function(){
		console.log('Hello world');
	});
```

---

template: inverse

##Common automation tasks with Gulp plugins
http://gulpjs.com/plugins/

---
###`gulp-uglify`

- `npm install --save-dev gulp-uglify`

```js
	var gulp = require('gulp'); // Load Gulp!

    // Now that we've installed the uglify package
    // we can require it!
    var uglify = require('gulp-uglify');

	gulp.task('default', function(){
		gulp.src('js/*.js') // What files do we want gulp to consume?
			.pipe(uglify()) // Call the uglify function on these files
			.pipe(gulp.dest('js')) // Where do we put the result?
	});
```
In this simple example we can see the magic of Gulp at work: **gulp.task**, **gulp.src**, **.pipe**, and **gulp.dest**!

---

template: inverse

##Named Gulp tasks

---
class: center, middle

**Best practice**: you're default Gulp task should contain a refrence to other names tasks.
You may not want to run all of the tasks you define at the same time!

---
### Creating a named Gulp task

```js
	var gulp = require('gulp');
    var uglify = require('gulp-uglify');

	gulp.task('scripts', function(){
		gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('js'))
	});

	gulp.task('say_hello', function(){
		console.log('Hello!');
	});
	// Modify our default task method by passing an array of task names
	// instead of a callback function (tasks must be defined).
	gulp.task('default', ['say_hello', 'scripts']);
```
Running `gulp` will execute both tasks in sequence. <br>
To run an individual task, use the task name: e.g. `gulp scripts` or `gulp say_hello`.

---

#Exercise 1

Add Gulp to your project and implement the `gulp-uglify` task.
Create a new folder in your project called 'build' to store the uglified version of your files.
---

class: center, middle

Automatically run Gulp tasks when files in your project change:
#`gulp watch`

---

### `gulp watch`

```js
	var gulp = require('gulp');
    var uglify = require('gulp-uglify');

	gulp.task('scripts', function(){
		gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('build'))
	});

	gulp.task('watch', function(){
		// Watch the folder specified in our 'scripts' task
		gulp.watch('js/*.js', ['scripts'])
	});

	// Compile our scripts, and start the watcher!
	gulp.task('default', ['scripts', 'watch']);
```
To initiate the `watch` task, run `gulp watch` from the command line.
Modify some files in the folder you specified and *watch* what happens!

---
class: center, middle

Automatically reload the browser when you save changes to files in your project:
<br>
http://www.browsersync.io/docs/gulp/

---
#Exercise 2

Implement the browser-sync plugin, in your project.

---
template: inverse

#Automate all the things!


{% endhighlight %}
