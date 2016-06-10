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

1. Introduce npm
1. Introduce and install Gulp
2. Set up Gulp in your project
3. Create named tasks
4. Add more Gulp tasks to our projects!

---
template: inverse

# Node Package Manager (npm)

---

# Dependencies

The term **dependencies** is generally used to refer to any code your project **depends** on in order to work.

Our projects can have dependencies that are specific to our dev environments only (appropriately named **development dependencies**).

We'll use the **Node Package Manager** to install 3rd party dependencies (other people's code designed to be **modular**), into our project automatically.

---

# npm

**[Node Package Manager (npm)](https://www.npmjs.com/)** is a tool that was built to help Node.js developers distribute and use modules of code in the Node.js environment.

Initially npm was only useful to developers working in Node.js (i.e. not in the browser, like us) environments.

However, since it's release, NPM has become widely used to distribute modules for all JavaScript environments, thanks to tools like **[Browserify](http://browserify.org/)** and **[webpack](https://webpack.github.io/)** (more on those later).

---
class: center, middle

### Using npm

Run `npm init` from your project directory to start using it.

This commant will help us generate a `package.json` file for our project.

---
template: inverse

# Installing Gulp

---
class: center, middle

### Installing npm Modules

The command `npm install` will automatically install plugins from the npm plugin repository that are listed as dependencies in our `package.json` file.

(But we don't have any packages listed in there quite yet...)

---

# The package.json File

Your `package.json` file is a list of all of the 3rd party modules your project needs to run.

It's important that you keep this file up to date&mdhash;npm does most of this manually, but there may be time when you need to manually edit your `package.json` file to accurately reflect the dependencies for your project.

Every time we install a new dependency for our project, it will be added to this file automatically.

---

# Why Is This Awesome?

By tracking our dependencies (and dev dependencies) in a `package.json` file, that means we don't need to version-control these packages with our project code.

We'll see that our `node_modules` directory can get quite large, and there's also no need to version-control other people's packages (presumably, they are doing this on their end).

With an up-to-date `package.json` file, amother dev can simply download our project files, run `npm install`, and automatically install all of the project dependencies from the npm plugin repository. Magic!

---

class: center, middle

### Install Gulp in your Project 2 directory:

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

gulp.task('default', function() {
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

# gulp-uglify

`npm install --save-dev gulp-uglify gulp-rename`

```js
var gulp = require('gulp'); // Load Gulp!

// Now that we've installed the uglify package we can require it:
var uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('default', function(){
    gulp.src('./js/*.js') // What files do we want gulp to consume?
      .pipe(uglify()) // Call the uglify function on these files
      .pipe(rename({ extname: '.min.js' })) //  Rename the uglified file
      .pipe(gulp.dest('./build/js')) // Where do we put the result?
});
```

In this simple example we can see the magic of Gulp at work: `gulp.task`, `gulp.src`, `.pipe`, and `gulp.dest`!

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
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
	 rename = require('gulp-rename');

gulp.task('scripts', function(){
    gulp.src('./js/*.js')
      .pipe(uglify())
      .pipe(rename({ extname: '.min.js' }))
      .pipe(gulp.dest('./build/js'))
});

gulp.task('say_hello', function(){
	console.log('Hello!');
});
// Modify our default task method by passing an array of task names
gulp.task('default', ['say_hello', 'scripts']);
```

Running `gulp` will execute both tasks in sequence. To run an individual task, use the task name: e.g. `gulp scripts`.

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

# gulp.watch()

We can create a `watch` task and call `gulp.watch()` within it to have Gulp watch certain files and automatically run tasks when those files change. For example:

```js
gulp.task('watch', function() {
   gulp.watch('js/*.js', ['scripts']);
});
```

The first argument is a string or array of files we want to watch, and the second is the named Gulp task that we want to run when Gulp sees a change made to one of those files.

---
class: center, middle

.large[
	Better still...how about automatically reloading our webpage in the browser?
]

---
class: center, middle

### Browsersync to the rescue!

You can automatically reload your browser when you save changes to files in your project by adding Browsersync.

---

# Exercise 2

Let's try implementing the BrowserSync plugin in our projects with Gulp.

Learn how to do that here:

**[www.browsersync.io/docs/gulp/](http://www.browsersync.io/docs/gulp/)**

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
