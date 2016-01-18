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

1. Introduce NPM
1. Introduce and install Gulp
2. Set up Gulp in your project
3. Create named tasks
4. More Gulp tasks in our project!

---

#Introducing NPM

---

#Installing dependencies

---

# Maintaining a package.json file

---

template: inverse

# Installing Gulp

---

class: center, middle

### Install Gulp in your Project 3 directory

Visit [Gulp's Getting Started page](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) and follow the instructions.

---
template: inverse

# Set Up Gulp

---

# Anatomy of a Gulpfile

1. Require the Gulp module
2. Define a **Gulp Task**
3.  Write some code to run when that task is called

```js
// Require Gulp first!

var gulp = require('gulp');

// This is a very basic Gulp task,
// with a name and some code to run
// when this task is called:

gulp.task('default', function(){
	console.log('Hello world');
});
```

---
class: center, middle

### Gulp is better with plugins!

Check out common automation tasks with Gulp plugins:

**http://gulpjs.com/plugins/**

We can add Gulp plugins to our project using npm...

---

# `gulp-uglify`

`npm install --save-dev gulp-uglify`

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

# Named Gulp Tasks

---
class: center, middle

### Best Practice:

You're `default` Gulp task should contain a reference to other specific **named tasks**.

---
class: center, middle

.large[
	Why? Because you may not want to run all of the tasks you define at the same time!
]

---

# Creating a Named Task

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

Running `gulp` will execute both tasks in sequence. To run an individual task, use the task name: e.g. `gulp scripts` or `gulp say_hello`.

---

# Exercise 1

Create a new folder in your project called `build` to store the uglified version of your files, then add Gulp to your project and implement the `gulp-uglify` task as demonstrated.

Run the task and see what happens...

---
template: inverse

# More Gulp Tasks

---

class: center, middle

### Have our computers do the work...

Wouldn't it be nice if we could automatically run Gulp tasks when files in your project change?

---

# `gulp watch`

To initiate the `watch` task, run `gulp watch` from the CLI. Modify some files in the folder you specified and *watch* what happens!

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

---
class: center, middle

.large[
	Better still...how about automatically reloading our webpage in the browser?
]

---
class: center, middle

### BrowserSync

Automatically reload the browser when you save changes to files in your project:

http://www.browsersync.io/docs/gulp/

---

# Exercise 2

Let's try implementing the BrowserSync plugin in our projects with Gulp.

Learn how to do that here:

http://www.browsersync.io/docs/gulp/

---
class: center, middle

.large[
	 Automate all the things!
]

---

# Exercise 3

Look for two interesting Gulp tasks in the Gulp plugin registry, and implement them in your project.

Visit [Gulp Recipes](https://github.com/gulpjs/gulp/tree/master/docs/recipes) for inspiration.

---

# What We've Learned

1. What Gulp is for and how we install it
2. How to set up Gulp in our project
3. How to create named tasks
4. Why automation is important

---
template: inverse

# Questions?

{% endhighlight %}
