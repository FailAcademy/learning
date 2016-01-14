---
layout: lesson
title: HTML Forms, Audio/Video, and Web Fonts
slides: ['_slides/week-01/04a-html-forms-audio-video.md', '_slides/week-01/04b-web-fonts.md']
date: 2016-01-21
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
- Explore the `audio` and `video` elements in HTML5.
- Use `@font-face` to incorporate custom typefaces into a web page.
- Explore third-party services that incorporate custom typefaces on a web page.
- Discover how to combine typefaces together in effective combinations.
- Learn how to implement icon fonts on a website using Font Awesome.

---

## Keywords

- [Form](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- [Input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
- [Select](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
- [Textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
- [Label](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
- [Button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
- [audio](https://developer.mozilla.org/en/docs/Web/HTML/Element/audio)
- [video](https://developer.mozilla.org/en/docs/Web/HTML/Element/video)
- [@font-face](https://developer.mozilla.org/en/docs/Web/CSS/@font-face)
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

Go to **Font Squirrel** and download the Webfont Kit for **[Open San](http://www.fontsquirrel.com/fonts/open-sans)**, the custom font that we'll be using for Project 1.

Project 1 uses two different weights of Open Sans&mdash;**Normal** and **Bold**. You'll need to download both of those weights, and their italic versions too. Use the contents of your downloaded font package to add the required font files and CSS to your project.

You’ll also want to read up on how to **[avoid faux italics and bolding](http://stackoverflow.com/questions/2436749/how-to-add-multiple-font-files-for-the-same-font)** with your `@font-face` typefaces, and adjust your CSS accordingly.

---

## Web Fonts: Exercise 2

We're going to use Font Awesome to add the social media icons in the footer of the Project 1 website.

Download Font Awesome and add the font files and minified CSS file to your project. Be sure to hook up the stylesheet in the `<head>` of your website too!

To add the social media icons, check out Font Awesome's [Brand Icons](https://fortawesome.github.io/Font-Awesome/icons/#brand).

---

## Lab Activity

We'll continue to work on Project 1 in today's lab.

This is the homestretch! You now have all the knowledge you'll need to finish building out Project 1. Wherever you hit a stumbling block, be sure to ask Google, check Stack Overflow, or ask a classmate.

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

- [Stack Overflow](http://stackoverflow.com/questions/2436749/how-to-add-multiple-font-files-for-the-same-font)

Some Google Font design inspiration:

- [Google Font Pairing](http://femmebot.github.io/google-type/)

Free icon fonts to use on your websites:

- [Font Awesome](http://fortawesome.github.io/Font-Awesome/)
- [Icomoon](https://icomoon.io/)

Feeling ambitous? You can create your own icons fonts too:

- [Creating and Using a Custom Icon Font - CSS Tricks Video](https://css-tricks.com/video-screencasts/113-creating-and-using-a-custom-icon-font/)
