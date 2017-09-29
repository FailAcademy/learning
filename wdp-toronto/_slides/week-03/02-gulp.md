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

1. Introduce Node.js and npm
1. Introduce and install Gulp
2. Set up Gulp in your project
3. Create named tasks
4. Add ESLint to our project

---
template: inverse

# Node.js and npm

---
class: center, middle

.large[
    Node is a cross-platform JavaScript runtime environment built on Chrome's V8 JavaScript engine. 
]

---

# Huh?

Some vocabulary words:

- **Runtime**: Think of this as the code that runs your JS code in a programming environment.
- **JavaScript engine**: The thing that compiles and executes JavaScript source code, handles memory allocation for objects, takes care of garbage collection, etc.
- **V8**: This is Google's open-source JS engine that is used in Google Chrome (written in C++).

---
class: center, middle

<iframe width="640" height="360" src="https://www.youtube.com/embed/ztspvPYybIY?rel=0" frameborder="0" allowfullscreen></iframe>

---

# Dependencies

The term **dependencies** is generally used to refer to any code your project **depends** on in order to work.

Our projects can have dependencies that are specific to our dev environments only (appropriately named **development dependencies**).

We'll use the **Node Package Manager (npm)** to install 3rd party dependencies (other people's code designed to be **modular**), into our project automatically.

---

# npm

**[Node Package Manager (npm)](https://www.npmjs.com/)** is a tool that was built to help Node.js developers distribute and use modules of code in the Node.js environment.

It's the largest ecosystem of open source libraries in the world.

Initially npm was only useful to developers working in Node.js (i.e. not in the browser, like us) environments.

However, since it's release, npm has become widely used to distribute modules for all JavaScript environments, thanks to tools like **[Browserify](http://browserify.org/)** and **[webpack](https://webpack.github.io/)** (more on those later).

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

Your `package.json` file is a list of all of the third party modules your project needs to run.

It's important that you keep this file up to date; npm does most of this automatically, but there may be times when you need to manually edit your `package.json` file to accurately reflect the dependencies for your project.

Every time we install a new dependency for our project, it will be added to this file automatically.

---

# Why Is This Awesome?

By tracking our dependencies (and dev dependencies) in a `package.json` file, that means we don't need to version-control these packages with our project code.

We'll see that our `node_modules` directory can get quite large, and there's also no need to version-control other people's packages (presumably, they are doing this on their end).

With an up-to-date `package.json` file, another dev can simply download our project files, run `npm install`, and automatically install all of the project dependencies from the npm plugin repository. Magic!

---
class: center, middle

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">If at first you don&#39;t succeed, try `rm -rf node_modules &amp;&amp; npm install`</p>&mdash; I Am Devloper (@iamdevloper) <a href="https://twitter.com/iamdevloper/status/733581051440697344">May 20, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

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
    .pipe(rename({ extname: '.min.js' })) // Rename the uglified file
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

Let's implement BrowserSync in our projects with Gulp.

Learn how to do that here: **[www.browsersync.io/docs/gulp/](http://www.browsersync.io/docs/gulp/)**

**Hint:** We're already watching our JS source files, uglifying them, and moving the newly minified files into the `build` directory. Think about what file will we want to watch for changes on, and subsequently reload the browser afterward.

---
template: inverse

# ESLint

---

# What is Linting?

Linting is a way for us to **check problematic patterns** in our code and make sure that it **adheres to certain style guidelines** for our project.

Essentially, it's a way for you to set-up some rules about **how you want your code to always look**. You can then check your code again these rules, and ensure that you're following them.

*Why should we care about doing this?*

---

# ESLint

**[ESLint](http://eslint.org/)** is a popular tool for checking our JS code against whatever styleguide/rules we choose.

*And we have control over exactly what to check!*

Once we set our styleguide/rules, ESLint will help us find potential issues in our JS code without needing to execute that code first.

---

# How It Works

First, we need an `.eslintrc` file to **configure** the rules against which to check our code. 

Create that file now in the root of your project directory:

```bash
touch .eslintrc
```

**Note:** You may also configure ESLint rules in `package.json`, but we'll use a separate config file for Project 2.

---

# How It Works

We need to format our config file in a specific way (see below). We will use the `eslint:recommended` rules instead of a separate styleguide.

```js
{
  "extends": "eslint:recommended",
  "rules": {
    // our rules will go here...
  },
  "globals": {
    // any globals we want to allow will go here
  },
  "env": {
    "browser": true
  }
}
```

Take a look at the **[default ESLint config rules](http://eslint.org/docs/rules/)**.

---

# Rules

How rules work in ESLint:

- `off` or `0`: turn the rule off
- `warn` or `1`: turn the rule on as a warning
- `error` or `2`: turn the rule on as an error

*In other words:*

```js
"no-alert": 0 // This is totally OK!
"no-alert": 1 // Should avoid this, so warn me about it in the console.
"no-alert": 2 // So bad. Shut it down. Throw an error. Boom.
```

---

# Add Some Rules!

Add these rules to your `.eslintrc` file:

```js
//...
"rules": {
  "no-alert": 1,
  "camelcase": 1,
  "curly": 1,
  "eqeqeq": 1,
  "no-console": 1,
  "guard-for-in": 1,
  "no-empty": 1,
  "no-param-reassign": 1,
  "no-unused-vars": 1,
  "quotes": [ 1, "single"]
},
//...
```

---

# Globals

The `no-undef` rule will warn on variables that are accessed but not defined within the same file. If you are using global variables inside of a file, then you'll want to add them to `globals` in your `.eslintrc`:

```js
//...
"globals": {
	"jQuery": false,
	"$": false
},
//...
```

Setting `true` will allow the variable to be overwritten, and setting false will disallow overwriting.

---

# Exercise 3

Add ESLint as a part of your build process with Gulp. Begin by installing [`gulp-eslint`](https://www.npmjs.com/package/gulp-eslint).

We have already created our `.eslintrc` files as part of the lesson, so now it's up to you to:

1. Create a named `lint` task in your `gulpfile.js`
2. Add the `lint` task as a dependency for the `scripts` task


---

# What We've Learned

1. What Gulp is for and how we install it
2. How to set up Gulp in our project
3. How to create named tasks
4. How to set-up ESLint in our project
5. Why automation is important

---
template: inverse

# Questions?

{% endhighlight %}
