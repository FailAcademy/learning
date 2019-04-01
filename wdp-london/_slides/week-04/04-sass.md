---
layout: slidedeck
title: Sass / CSS Preprocessors Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to Sass

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

???

##### Gulp Review:

In groups, discuss the function of each:

- package.json
- node_modules folder
- gulpjs.file

Gulpjs.file:

- Where are the required modules?
- What are the tasks?

How does the 'scripts' task work?

- In groups get them to draw out from working file to production file.

---

layout: false

# Agenda

1. What is a preprocessor?
2. Sass vs. Less
3. Sass features
4. Using Sass on a project
5. Compiling Sass into CSS

???
Slide 2 Notes

---

template: inverse

# Preprocessors

---

class: center, middle

### What is a preprocessor?

A preprocessor is a program that takes one type of data and converts it into a another type of data.

---

# CSS Preprocessors

CSS preprocessors allow you to write CSS in a unconventional (but usually more intuitive) way in order to speed up your dev.

Today, there are a few CSS preprocessors in popular use:

- [Sass / SCSS](http://sass-lang.com/)
- [Less](http://lesscss.org/)
- [Stylus](https://learnboost.github.io/stylus/)
- [Myth](http://www.myth.io/)

---

# Less vs. Sass vs. etc.

Sass (or in our case, SCSS) and Less are the most widely used of the preprocessor options today.

The main differences between these two preprocessor options are their **installation processes** and the **syntax** you use to write your code.

Both libraries offer similar essential features that you would want in a CSS preprocessor though.

---

class: center, middle

### But how do I pick one!?!

It depends...sometimes it's a matter of taste, other times it's what your team is most accustomed to using.

---

class: center, middle

.inline-images[
![Sass logo](/public/img/slide-assets/sass-lang.png)
]

---

template: inverse

# Sass Features

---

# Sass Features

Sass has some cool features compared to plain vanilla CSS:

- Nested rules
- Variables
- JS-style comments
- Mixins
- Operations
- Functions

---

# Nested Rules

One of the handiest features of Sass is the ability to nest your CSS selectors. For instance, instead of writing this:

```sass
.main-navigation {
   margin-left: 0;
}

.main-navigation li {
   color: red;
}
```

---

# Nested Rules

You can write the same code this way with Sass:

```sass
.main-navigation {
   margin-left: 0;

   li {
      color: red;
   }
}
```

---

# Nested Rules

You can nest pseudo-classes too using an ampersand:

```sass
a {
   color: blue;

   &:hover {
      text-decoration: underline;
   }
}
```

Or add a parent selector from inside of child:

```sass
h3 {
   font-size: 1.5em;

   .widget & {
      font-size: 1.25em;
   }
}
```

---

# Variables

Sass also allows you to define variables (much like in JS!), which can help you standardize properties and save time if you ever need to update a property globally.

In Sass you define variables as follows:

```sass
$brand-red: #ed4343;

a {
   color: $brand-red;
}
```

You'll want to make sure you choose intuitive, semantic variable names.

???

Ask them for some examples of good and bad variable names.

---

# Comments

Sass allows you to use both block-style and inline comments:

```sass
/* A big, fat block-style comment! */
$var: red;

// Get in line!
$var: white;
```

Note that when you compile Sass, the inline comments will not be included in the final output CSS file.

---

# Operations

With Sass, you can do math right in your CSS! For example:

```sass
$base-margin: 1.5em;

select {
   margin-bottom: $base-margin * 2;
}
```

When this Sass is compiled, the resulting margin will be `3em`.

---

# Operations

Keep in mind that order of operations apply!

```sass
$base-margin: 1.5em;

select {
   margin-bottom: $base-margin * 2 + 3; /* will equal 6 */
}

select {
   margin-bottom: $base-margin + (2 * 3); /* will equal 7.5 */
}
```

???

BEDMAS

---

# Functions

Sass has a number of built-in functions that assist with doing math, manipulating colours, and more:

```sass
$link-colour: #800800;

a {
   color: $link-colour;

   // Darken a colour
   &:hover {
      color: darken($link-colour, 20%);
   }

   // Mix two colours together
   &:visited {
      color: mix($link-colour, #000, 50%);
   }
}
```

---

# @function

You can also write your own Sass functions: <a href="https://codepen.io/redacademy/pen/zaVgbZ?editors=1100" target="_blank">Codepen</a>

```sass
$text-color: red;

@function set-contrast-color($color) {
  @if (lightness($color) > 50) {
    @return #000; // Lighter background, return dark color
  } @else {
    @return #fff; // Darker background, return light color
  }
}

h1 {
  color: $text-color;
  background: set-contrast-color($text-color);
}
```

<a href="http://thesassway.com/advanced/pure-sass-functions" target="_blank">More about using @function</a>

---

# @extend

Using `@extend` lets you share a set of CSS properties from one selector to another:

```sass
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}

.error {
  @extend .message;
  border-color: red;
}
```

---

# @extend

We can also use a **placeholder** selector with `@extend`:

```sass
%base-border {
   border: 1px solid #ccc;
   padding: 10px;
   color: #333;
}

.message {
   @extend %base-border;
}

.success {
   @extend %base-border;
   border-color: green;
}

.error {
   @extend %base-border;
   border-color: red;
}
```

---

# @mixin

Mixins are little bundles that allow you to group properties together and apply them to a selector:

```sass
// EXAMPLE 1:
@mixin primary-links {
   color: blue;
   text-decoration: none;
}

a { @include primary-links; } // use @include to call the mixin

// EXAMPLE 2:
@mixin secondary-links {
   a {
      color: red;
      text-decoration: none;
   }
}

@include secondary-links;
```

---

# @mixin

Where mixins really shine is their ability to have **parameters**:

```sass
// EXAMPLE 1:
$base-color: pink;

@mixin headline($color, $size) {
  color: $color;
  font-size: $size;
}

h1 {
   @include headline($base-color, 12px);
}

// EXAMPLE 2:
@mixin dashed-border($width, $color) {
   border: $width $color dashed;
}

p { @include dashed-border(1px, #000); }
```

---

class: center, middle

### When to use @extend or @mixin?

Use `@extend` for static blocks of shared properties.

use `@mixin` when you want the output CSS to change depending on how you call it (i.e. by passing arguments or using an `@content` block...).

---

# Smarter Media Queries

The `@content` directive allows us to pass a content block into a mixin:

```sass
$desktop-width: 1000px;

@mixin desktop {
  @media (min-width: $desktop-width) {
    @content;
  }
}

li {
   flex: 0 1 100%;

   @include desktop {
      flex: 0 1 50%;
   }
}
```

---

class: center, middle

### Why does this work?

`@media` directives in Sass work just as they do in plain CSS, with one extra capability: **they can be nested in CSS rules**.

If an `@media` directive appears within a CSS rule, it will be bubbled up to the top level of the stylesheet, putting all the selectors along the way inside the rule.

---

# Smarter Media Queries

```sass
/* So this SCSS... */

li {
   flex: 0 1 100%;

   @include desktop {
      flex: 0 1 50%;
   }
}
```

```css
/* Compiles to this CSS... */

li {
  flex: 0 1 100%;
}

@media (min-width: 1000px) {
  li {
    flex: 0 1 50%;
  }
}
```

---

class: center, middle

.large[
But with great power...
]

---

# Exercise 1

In this exercise, we'll refactor some CSS into SCSS, using the basic functionality we've learned.

See the [lesson page](/lesson/sass-css-preprocessors/) for more details.

---

template: inverse

# Using Sass/SCSS

---

# Organizing SCSS Files

You'll likely find that many projects using Sass have organized their code into many specific **partials** and import them into a `style.scss` file.

For example, for a project with a `scss` sub-folder and `style.scss` file at the root, you would likely find a list of `@import` statements inside `style.scss` file:

```sass
@import 'scss/variables';
@import 'scss/mixins';
@import 'scss/reset';
@import 'scss/base';
// and so on...
```

---

# Organizing SCSS Files

Note that you can add or not add the `.scss` extension the file names, and also import CSS files as-is too:

```sass
@import 'foo';      // foo.scss is imported
@import 'foo.scss'; // foo.scss is imported
@import 'foo.css';  // statement left in place, as-is
// and so on...
```

CSS from the imported files is **added in place**, so the order of your imports matters.

---

# Organizing SCSS Files

When creating **partials**, name your partial files beginning with an underscore. For example:

```sass
// In a style.scss file, we can import _typography.scss...

@import 'typography';
```

Using an underscore tells the Sass compiler that the file is a partial, and should be compiled into `style.css`.

Without the underscore, Sass would compile that file into a stand-alone `typography.css` file, rather than importing it into the compiled `style.css` file.

---

template: inverse

# Compiling SCSS <br />(the easy way)

---

class: center, middle

### What does it mean to compile code?

When you compile code, you convert it from one form (that you have written) to another form (that the machine can read).

---

# How to Compile Sass

Let's create a Gulp task to compile Sass for our project:

```js
const sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  cssnano = require('gulp-cssnano'),
  rename = require('gulp-rename');

gulp.task('sass', function() {
  return gulp
    .src('./sass/style.scss')
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions'],
      }),
    )
    .pipe(gulp.dest('./build/css'))
    .pipe(cssnano())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./build/css'));
});
```

---

# Nicer Error Reporting

We can add easier-to-read error messages into our Gulp set-up to let us know when we have syntax error in our Sass. To do that, we'll have to [install and add](https://www.npmjs.com/package/gulp-prettyerror) `gulp-prettyerror`:

```js
gulp.task('sass', function() {
  return gulp
    .src('./sass/style.scss')
    .pipe(prettyError()) // ADD THIS LINE
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions'],
      }),
    )
    .pipe(gulp.dest('./build/css'))
    .pipe(cssnano())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./build/css'));
});
```

---

# Exercise 2

In this exercise we’ll create media query helpers inside your project using Sass mixins and the `@content` directive, for common breakpoints. We’ll then discuss, how this techniques saves time when developing responsive websites.

---

# What We've Learned

- What a preprocessor is and how to use one
- How to use Sass to turbo-charge (and organize!) your CSS development
- How to compile Sass with Gulp

---

template: inverse

# Questions?

{% endhighlight %}
