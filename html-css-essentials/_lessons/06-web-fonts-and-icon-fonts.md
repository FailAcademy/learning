---
layout: lesson
title: Custom Web Fonts and Icon Fonts
slides: ['_slides/06-web-fonts-and-icon-fonts-slides.md']
---

## Pre-work

Readings from *Learn to Code HTML & CSS*:

- [Working with Typography - Embedding Web Fonts](http://learn.shayhowe.com/html-css/working-with-typography/#embedding-web-fonts)

A quick primer on using icon fonts:

- [An Introduction to Icon Fonts with Font Awesome and IcoMoon](http://www.sitepoint.com/introduction-icon-fonts-font-awesome-icomoon/)

---

## Learning Objectives

- Use `@font-face` to incorporate custom typefaces in a webpage.
- Explore third-party services that incorporate custom typefaces in a webpage.
- Discover how to combine typefaces together in effective combinations.
- Learn how to implement an icon font on a website using Font Awesome.

---

## Keywords

- [@font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face)
- [Google Fonts](https://developers.google.com/fonts/docs/getting_started)
- Icon font

---

## Exercise 1

Go to **[Font Squirrel](http://www.fontsquirrel.com/)** and generate the Webfont Kits for the custom typefaces that we'll be using for Project 1: **Karla** (Regular and Bold) and **Pacifico** (Regular only).

You'll need to download both of the weights and their italic versions too for the Karla typeface. Add the contents of your generated web font packages to your project's CSS (but only the required files).

You’ll also want to read up on how to **[avoid faux italics and bolding](http://www.metaltoad.com/blog/how-use-font-face-avoid-faux-italic-and-bold-browser-styles)** with your `@font-face` typefaces, and adjust your CSS accordingly.

---

## Exercise 2

Add Font Awesome to your Project 1 (using the CDN option).

Once you have successfully added it to your project, try adding the social media icons to your site's `footer`.

Now that you have the icons added, how will you get the social network names to appear and disappear at the various breakpoints?

---

## Homework

Now that you have added the custom fonts and Font Awesome to your project, you will have some adjustments to make your CSS to get the designer's vision for the typography right.

For homework, spend some time refactoring your CSS to get the typography for your project site as close to the design comps as possible (at all screen widths). 

---

## Additional Resources

Open-source font resources:

- [fontsquirrel.com](http://www.fontsquirrel.com/)
- [fontex.org](http://www.fontex.org/)
- [openfontlibrary.org](http://openfontlibrary.org/)
- [Google Fonts](https://www.google.com/fonts#)

Avoiding faux italics and bolding with your `@font-face` fonts:

- [Stack Overflow](http://stackoverflow.com/questions/2436749/how-to-add-multiple-font-files-for-the-same-font)

Some Google Font design inspiration:

- [Google Font Pairing](http://femmebot.github.io/google-type/)

Subscription-based web font services:

- [Typekit](https://typekit.com/)
- [Hoefler & Co.](http://www.typography.com/cloud/welcome/)
- [Webtype](http://www.webtype.com/)

An article series on web typography basics:

- [A-Z of Web Typography](http://webdesign.tutsplus.com/series/a-z-of-web-typography--webdesign-11706)

Some tips for setting digital type (not web-specific, but some general, adaptable rules):

- [26 digital typography rules for beginners](https://medium.com/product-design-ux-ui/26-digital-typography-rules-for-beginners-a04c6a5aaff3)

Free icon fonts to use on your websites:

- [Font Awesome](http://fortawesome.github.io/Font-Awesome/)
- [Icomoon](https://icomoon.io/)

Feeling ambitious? You can create your own icons fonts too:

- [Creating and Using a Custom Icon Font - CSS Tricks Video](https://css-tricks.com/video-screencasts/113-creating-and-using-a-custom-icon-font/)

