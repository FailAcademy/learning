---
layout: lesson
title: HTML Forms, Audio/Video, and Web Fonts
slides: ['_slides/week-01/04a-html-forms-audio-video.md', '_slides/week-01/04b-web-fonts.md']
lesson_date: 2017-01-12
---

## Pre-Work

Readings from *Learn to Code HTML & CSS*:

- [Building Forms](http://learn.shayhowe.com/html-css/building-forms/)
- [Working with Typography - Embedding Web Fonts](http://learn.shayhowe.com/html-css/working-with-typography/#embedding-web-fonts)

---

## Learning Objectives

- Understand how HTML forms work.
- Build a functional HTML form with a variety of inputs.
- Target form elements using CSS.
- Explore the `<audio>` and `<video>` elements in HTML5.
- Use `@font-face` to incorporate custom typefaces into a webpage.
- Explore third-party services that incorporate custom typefaces on a webpage.
- Learn how to implement an icon font on a website using Font Awesome.

---

## Keywords

- [`form`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- [`input`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
- ['select'](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
- [`textarea`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
- [`label`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
- [`button`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
- [`audio`](https://developer.mozilla.org/en/docs/Web/HTML/Element/audio)
- [`video`](https://developer.mozilla.org/en/docs/Web/HTML/Element/video)
- [`@font-face`](https://developer.mozilla.org/en/docs/Web/CSS/@font-face)
- Icon font
- SVG

---

## Forms: Exercise 1

Build this form!

![HTML form prototype](/public/files/exercises/html-forms-e1.png)

Your cheatsheet:

- The button colour is `#337ab7`
- The border colour of the inputs is `#ddd`
- The typeface is Arial

---

## Web Fonts: Exercise 1

Go to **Font Squirrel** and download the Webfont Kit for the custom typefaces that we'll be using for Project 1: **[Playfair Display](http://www.fontsquirrel.com/fonts/playfair-display)** (Regular and Bold) and **[Raleway](http://www.fontsquirrel.com/fonts/raleway)** (Light and Medium).

You'll need to download both of the weights and their italic versions too for each typeface. Add the contents of your generated web font packages to your project.

You’ll also want to read up on how to **[avoid faux italics and bolding](http://www.metaltoad.com/blog/how-use-font-face-avoid-faux-italic-and-bold-browser-styles)** with your `@font-face` typefaces, and adjust your CSS accordingly.

---

## Web Fonts: Exercise 2

We're going to use Font Awesome to add the social media icons in the footer of the Project 1 website.

Download Font Awesome and add the font files and minified CSS file to your project (unless you choose to link to the CDN resource).

Be sure to hook up the stylesheet in the `<head>` of your website too!

To add the social media icons, check out Font Awesome's [Brand Icons](https://fortawesome.github.io/Font-Awesome/icons/#brand).

---

## Lab Activity

We'll continue to work on Project 1 in today's lab.

This is the homestretch! You now have all the HTML/CSS knowledge you'll need to finish building out Project 1. Wherever you hit a stumbling block, be sure to ask Google, check Stack Overflow, or ask a classmate.

---

## Additional Resources

An intro to building HTML forms and styling them with CSS:

- [My first HTML form](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/My_first_HTML_form)

Open-source font resources:

- [fontsquirrel.com](http://www.fontsquirrel.com/)
- [fontex.org](http://www.fontex.org/)
- [openfontlibrary.org](http://openfontlibrary.org/)
- [Google Fonts](https://www.google.com/fonts#)

Avoiding faux italics and bolding with your `@font-face` fonts:

- [Stack Overflow - How to add multiple font files for the same font?](http://stackoverflow.com/questions/2436749/how-to-add-multiple-font-files-for-the-same-font)

Some Google Font design inspiration:

- [Google Font Pairing](http://femmebot.github.io/google-type/)

Free icon fonts to use on your websites:

- [Font Awesome](http://fortawesome.github.io/Font-Awesome/)
- [Icomoon](https://icomoon.io/)

Feeling ambitous? You can create your own icons fonts too:

- [Creating and Using a Custom Icon Font - CSS Tricks Video](https://css-tricks.com/video-screencasts/113-creating-and-using-a-custom-icon-font/)
