---
layout: slidedeck
title: SASS / CSS Pre-processors Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to SASS

.title-logo[![Red logo](../../public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. What is a preprocessor?
2. SASS vs. LESS
3. SASS features
4. Using SASS on a project
5. Compiling SASS into CSS

---
template: inverse

# Preprocessors

---
class: center, middle

### What is a preprocessor?

A preprocessor is a program that takes one type of data and coverts it into a another type of data.

---

# CSS Preprocessors

CSS preprocessors allow you to write CSS in a unconventional (but usually more intuitive) way in order to speed up your front-end development.

Today, there are a few CSS preprocessors in popular use:

- [SASS](http://sass-lang.com/)
- [LESS](http://lesscss.org/)
- [Stylus](https://learnboost.github.io/stylus/)
- [Myth](http://www.myth.io/)

---

# Less vs. Sass vs. etc.

SASS and LESS are the most widely used of the preprocessor options today.

The main differences between these two preprocessor options are their **installation processes** and the **syntax** you use to write your code.

Both libraries offer similar essential features that you would want in a CSS preprocessor though.

---
class: center, middle

### But how do I pick one!?!

It depends...sometimes it's a matter of taste, other times it's what your team is most accustomed to using.

---
class: center, middle

.inline-images[
   ![SASS logo](http://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png)
]

---
template: inverse

# SASS Features

---

# SASS Features

SASS has some cool features compared to plain vanilla CSS:

- Nested rules
- Variables
- Mixins
- Operations
- Functions

---

# Nested Rules

One of the handiest features of SASS is the ability to nest your CSS selectors. For instance, instead of writing this:

```css
.main-navigation {
   margin-left: 0;
}

.main-navigation li {
   color: red;
}
```

---

# Nested Rules

You can write the same code this way with SASS:

```css
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

```css
a {
   color: blue;

   &:hover {
      text-decoration: underline;
   }
}
```

Or add a parent selector from inside of child:

```css
h3 {
   font-size: 1.5em;

   .widget & {
      font-size: 1.25em;
   }
}
```

---

# Variables

SASS also allows you to define variables (much like in JS!), which can help you standardize properties and save time if you ever need to update a property globally.

In Less you define variables as follows:

```css
$brand-red: #ed4343;

a {
   color: $brand-red;
}
```

You'll want to make sure you choose intuitive, semantic variables names.

---
# Operations

With SASS, you can do math right in your CSS! For example:

```css
$base-margin: 1.5em;

select {
   margin-bottom: $base-margin * 2;
}
```

When this Less is compiled, the resulting margin will be `3em`.

---

# Operations

Keep in mind that order of operations apply!

```css
$base-margin: 1.5em;

select {
   margin-bottom: $base-margin * 2 + 3; /* will equal 6 */
}

select {
   margin-bottom: $base-margin + (2 * 3); /* will equal 7.5 */
}
```
---

# `@function`

SASS has a number of built-in functions that assist with doing math, manipulating colours, and more.

You can also write your own functions:

```css
$grid-width: 40px;
$gutter-width: 10px;

@function grid-width($n) {
  @return $n * $grid-width + ($n - 1) * $gutter-width;
}

#sidebar { width: grid-width(5); }
```

You can check-out the full [SASS function reference here](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#function_directives).

---

# `@mixin`

Mixins little bundles that allow you to group properties together and apply them to a selector:

```css
@function calculateRem($size) {
  $remSize: $size / 16px;
  @return $remSize * 1rem;
}

@mixin font-size($size) {
  font-size: $size;
  font-size: calculateRem($size);
}

p {
  @include font-size(14px);
}
```

---

# `@extend`

You can 'extend' functionality of your CSS classes like so:

```css
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

# `@content`

 This SASS directive allows us to pass a content block into a mixin.

```css
@mixin apply-to-ie6-only {
  * html {
    @content
  }
}

@include apply-to-ie6-only {
  #logo {
    background-image: url(/logo.gif);
  }
}
```
---

#Media query example using `@content`

```css
@mixin media($width) {
  @media only screen and (max-width: $width) {
    @content;
  }
}

@include media(320px) {
  background: red;
}
```
---
class: center, middle

.large[
   But with great power...
]

---

# Exercise 1

Let's refactor some plain vanilla CSS in to SCSS:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/NqdjQP/?height=268&theme-id=0&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/NqdjQP/'>NqdjQP</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

---
template: inverse

# Using SCSS

---

# Using SCSS

---

# Organizing SCSS Files

You'll likely find many projects that use SASS organize their code into many specific **partials** and import them into a `style.scss` file.

For example, for a project with a `scss` sub-folder and `style.scss` file at the root, you would like find a list of `@import` statements inside `style.scss` file:

```css
@import 'scss/variables';
@import 'scss/mixins';
@import 'scss/reset';
@import 'scss/base';
// and so on...
```

---

# Organizing SCSS Files

Note that you can add of leave off the `.scss` extension the file names, and also import CSS files as-is too:

```css
@import 'foo';      // foo.scss is imported
@import 'foo.scss'; // foo.scss is imported
@import 'foo.css';  // statement left in place, as-is
// and so on...
```

CSS from the imported files is added in place, so the order of your imports matters.

---

# Organizing SCSS Files

When creating partials, name your partial files beginning with an underscore:
e.g. `_typography.scss`

Using an underscore tells the SASS compiler that the file is a partial.

---
template: inverse

# Compiling SCSS

---
class: center, middle

### What does it mean to compile code?

When you compile code, you convert it from one form (that you have written) to another form (that the machine can read).

---

# How to Compile Less

Let's create a Gulp task to compile SASS for our project:
Here is an example of a basic gulp task for compiling SASS
```js
// ...

var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

// ...
```

---

# Exercise 2

In this exercise we’ll create media query helpers inside your project using SASS mixins and the `@content` directive, for common breakpoints. We’ll then discuss, how this techniques saves time when developing responsive websites.

---
template: inverse

#BONUS ROUND

---

class: center, middle

Implement SASS sourcemaps using Google Chrome:

https://github.com/dlmanning/gulp-sass
https://github.com/floridoo/gulp-sourcemaps

---

# What We've Learned

- What a preprocessor is and how to use one
- How to use SASS to turbo-charge (and organize!) your CSS development
- How to compile SASS

---
template: inverse

# Questions?

{% endhighlight %}
