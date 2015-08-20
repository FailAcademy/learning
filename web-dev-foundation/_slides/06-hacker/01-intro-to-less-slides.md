---
layout: slidedeck
title: Intro to Less Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to Less

.title-logo[![Red logo](../../public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. What is a preprocessor?
2. Less vs. Sass
3. Less features
4. Using Less on a project
5. Compiling Less into CSS

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

- [Less](http://lesscss.org/)
- [Sass](http://sass-lang.com/)
- [Stylus](https://learnboost.github.io/stylus/)
- [Myth](http://www.myth.io/)

---

# Less vs. Sass vs. etc.

Less and Sass are the most widely used of the preprocessor options today.

The main differences between these two preprocessor options are their **installation processes** and the **syntax** you use to write your code.

Both libraries offer similar essential features that you would want in a CSS preprocessor though.

---
class: center, middle

### But how do I pick one!?!

It depends...sometimes it's a matter of taste, other times it's what your team is most accustomed to using.

---
class: center, middle

.inline-images[
   ![Less logo](../../public/img/slide-assets/less-logo.svg)
]

---
template: inverse

# Less Features

---

# Less Features

Less has some cool features compared to plain vanilla CSS:

- Nested rules
- Variables
- Mixins
- Operations
- Functions
- JS-style comments

---

# Nested Rules

One of the handiest features of Less is the ability to nest your CSS selectors. For instance, instead of writing this:

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

You can write the same code this way with Less:

```less
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

```less
a {
   color: blue;

   &:hover {
      text-decoration: underline;
   }
}
```

Or add a parent selector from inside of child:

```less
h3 {
   font-size: 1.5em;

   .widget & {
      font-size: 1.25em;
   }
}
```

---

# Variables

Less also allows you to define variables (much like in JS!), which can help you standardize properties and save time if you ever need to update a property globally.

In Less you define variables as follows:

```less
@brand-red: #ed4343;

a {
   color: @brand-red;
}
```

You'll want to make sure you choose intuitive, semantic variables names.

---

# Mixins

Mixins little bundles that allow you to group properties together and apply them to a selector:

```less
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}

.call-out {
  color: red;
  .bordered();
}
```

---

# Mixins

You can even pass parameters into your mixins (just like you can with a function in JS):

```less
.border-radius( @radius ) {
   -webkit-border-radius: @radius;
   -moz-border-radius:    @radius;
   border-radius:         @radius;
}

button {
   .border-radius( 5px );
}
```

---

# Operations

With Less, you can do math right in your CSS! For example:

```less
@base-margin: 1.5em;

select {
   margin-bottom: @base-margin * 2;
}
```

When this Less is compiled, the resulting margin will be `3em`.

---

# Operations

Keep in mind that order of operations apply!

```less
@base-margin: 1.5em;

select {
   margin-bottom: @base-margin * 2 + 3; /* will equal 6 */
}

select {
   margin-bottom: @base-margin + (2 * 3); /* will equal 7.5 */
}
```

---

# Functions

Less has a number of built-in functions that assist with doing math, manipulating colours, and more.

For example:

```less
@color: #ed4343;
@color-hover: lighten(@color, 10%);

a {
  color: @color;

  &:hover {
    color: @color-hover; /* will compile to #f17272 */
  }
}
```

You can check-out the full [Less function reference here](http://lesscss.org/functions/).

---

# Comments

Finally, Less allows you to use both block-style and inline comments:

```less
/* One big, fat
block-style comment! */
@var: red;

// Get in line!
@var: white;
```

Note that when you compile Less, the inline comments will not be included in the final output CSS file.

---
class: center, middle

.large[
   But with great power...
]

---

# Exercise 1

Let's refactor some plain vanilla CSS in to Less:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/NqdjQP/?height=268&theme-id=0&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/NqdjQP/'>NqdjQP</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

---
template: inverse

# Using Less

---

# Using Less

For development purposes, you can include a Less file just like CSS as long as you include the `less.min.js` library in the `head` tag of your webpage:

```html
<link rel="stylesheet/less" type="text/css" href="style.less" />
<script src="less.min.js" type="text/javascript"></script>
```

You can download a copy of the latest version **[here](https://github.com/less/less.js/tree/master/dist)**.

On a live website, you'll want to compile your Less code and include it as actual CSS, but more on that in a second...

---

# Organizing Less Files

You'll likely find many projects that use Less organize their code into many specific **partials** and import them into a `style.less` file.

For example, for a project with a `less` sub-folder and `style.less` file at the root, you would like find a list of `@import` statements inside `style.less` file:

```less
@import 'less/variables';
@import 'less/mixins';
@import 'less/reset';
@import 'less/base';
// and so on...
```

---

# Organizing Less Files

Note that you can add of leave off the `.less` extension the file names, and also import CSS files as-is too:

```less
@import 'foo';      // foo.less is imported
@import 'foo.less'; // foo.less is imported
@import 'foo.css';  // statement left in place, as-is
// and so on...
```

---
template: inverse

# Compiling Less

---
class: center, middle

### What does it mean to compile code?

When you compile code, you convert it from one form (that you have written) to another form (that the machine can read).

---

# How to Compile Less

While Less can be included as a JS file and compiled on the fly in many browsers, this is not recommended for production environments.

After you write your Less code, you need to convert that code into regular CSS for your browser to read.

---

# How to Compile Less

You have two different options for compiling Less:

1. Install [Node.js](https://nodejs.org/), [npm](https://www.npmjs.com/), an use [the command line](http://lesscss.org/#using-less-installation) to install and compile your code
2. Use a GUI such as [Prepos](https://prepros.io/) to compile your code

---
class: center, middle

.large[
   Option 1: Install Node.js & npm, commence scowling
]

.inline-images[
   ![Rob Swanson stare](../../public/img/slide-assets/ron-swanson-stare.gif)
]

---
class: center, middle

.large[
   Option 2: Use a GUI
]

---
class: center, middle

.inline-images[
   ![Prepos launch screenshot](../../public/img/slide-assets/prepos-launch-screenshot.png)
]

---
class: center, middle

.inline-images[
   ![Prepos options screenshot](../../public/img/slide-assets/prepos-options-screenshot.png)
]

---
class: center, middle

.inline-images[
   ![Prepos processed screenshot](../../public/img/slide-assets/prepos-processed-screenshot.png)
]

---

# Exercise 2

Let's take the Less that you wrote in Exercise 1 and practice compiling it using Prepos.

To do that, you'll need:

1. Download and install [Prepos](https://prepros.io/)
2. Download the zip file of your solution on Codepen for Exercise 1, or download the zip of the provided solution
3. Extract the zip file and set-up a new project in Prepos with the resulting folder
4. Compile away!

---

# What We've Learned

- What a preprocessor is and how to use one
- How to use Less to turbo-charge (and organize!) your CSS development
- How to compile Less

---
template: inverse

# Questions?

{% endhighlight %}
