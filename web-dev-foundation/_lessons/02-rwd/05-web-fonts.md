---
layout: lesson
title: Custom Web Fonts
slides: ['_slides/02-rwd/05-web-fonts-slides.md']
---

## Recommended Reading

From the HTML & CSS textbook:

- More Font Choice (p. 277)
- Understanding Font Formats (p. 278)

## Learning Objectives

- Explore `@font-face` to incorporate custom typefaces into a web page.
- Use Google Fonts as an option for using custom typefaces on a web page.
- Discover how to combine typefaces together in effective combinations.

## Keywords

- [@font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face)
- [Google Fonts](https://developers.google.com/fonts/docs/getting_started)

## Exercise 1

Go to **[Font Squirrel](http://www.fontsquirrel.com/)** and pick a font that you like that offers an @font-face kit. Download the font package.

Set-up an `index.html` file in a root folder, and from the package you just downloaded copy in the `stylesheet.css` file and all of the different font formats to as well.

In the `stylesheet.css` file, set the name of your new font as the `font-family` value for the body element.

Now add some copy to your webpage and load it in a browser.

Hint: Link to your external stylesheet in the `<head>`!

## Exercise 2

Now try adding custom web fonts using Google Fonts:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/vONZxd/?height=268&theme-id=0&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/vONZxd/'>vONZxd</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

View the [solution](http://codepen.io/redacademy/pen/GJOBYv).

## Lab Activity

Now that we've learned the technical implementation details of how to use `@font-face` to add custom typefaces, let's learn how to choose typefaces that are suitable for a website's subject matter, and how to effectively pair different typefaces together.

To do that, try out the free **[Typeface Classifications level](http://design.codeschool.com/levels/1/challenges/1)** on Code School. Watch the video and work through the exercises.

Once you've completed the level, return to Font Squirrel and **download a custom font to use for Project 2**. Add the font package to your project and include an `@font-face` rule in your project's main stylesheet so you can use it on your website. Try out multiple fonts to compare which one feels best.

You'll also want to read up on how to **[avoid faux italics and bolding](http://stackoverflow.com/questions/2436749/how-to-add-multiple-font-files-for-the-same-font)** with your `@font-face` typefaces, and adjust your CSS accordingly.

You may select more than one font to include using `@font-face` for Project 2, but you are encouraged to pair your typefaces thoughtfully if you do!

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
- [Fontdeck](http://fontdeck.com/)

An article series on web typography basics:

- [A-Z of Web Typography](http://webdesign.tutsplus.com/series/a-z-of-web-typography--webdesign-11706)

Some tips for setting digital type (not web-specific, but some general, adaptable rules):

- [26 digital typography rules for beginners](https://medium.com/product-design-ux-ui/26-digital-typography-rules-for-beginners-a04c6a5aaff3)
