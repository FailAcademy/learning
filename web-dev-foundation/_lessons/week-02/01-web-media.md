---
layout: lesson
title: Using Media on the Web
slides: ['_slides/week-02/01-web-media-slides.md']
---

## Pre-work

Readings from *Learn to Code HTML & CSS*:

- [Adding Media](http://learn.shayhowe.com/html-css/adding-media/)
- [Setting Backgrounds and Gradients](http://learn.shayhowe.com/html-css/setting-backgrounds-and-gradients/)

And from CSS Tricks:

- [A Nerd’s Guide to Color on the Web](https://css-tricks.com/nerds-guide-color-web/)

---

## Learning Objectives

- Understand web-friendly image formats (JPG, PNG, GIF, and SVG).
- Explore what tools are available for image editing (such as Photoshop or Gimp).
- Learn how to load an image in an image editor, crop it, and size it.
- Explore the `img` element and its attributes in depth.
- Explore free stock photography resources.
- Discuss basic copyright concerns, the public domain, and Creative Commons.
- Use hexadecimal and RGBa to set the colours and background colours of HTML elements.
- Use CSS background properties to set background colors and images.
- Explore the `audio` and `video` elements in HTML5.

---

## Keywords

- JPG, GIF, PNG, and SVG
- Optimization
- Hexadecimal
- RGBa
- HSLa
- [Background](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
- [audio](https://developer.mozilla.org/en/docs/Web/HTML/Element/audio)
- [video](https://developer.mozilla.org/en/docs/Web/HTML/Element/video)
- Creative Commons
- Public domain

---

## Exercise 1

If you haven't done so already, download and install an image editing application such as Adobe Photoshop or Gimp.

Next, download **[this image](https://www.flickr.com/photos/jdhancock/12708712045/)**, open it in the image editor, and try:

- Resizing the image to be a maximum of 800px wide
- Cropping the image to have a 4:3 aspect ratio
- Saving the image to be optimized for web (can you make it less than 70KB without sacrificing too much quality?)

If you have additional time, explore other tools inside the image editor, like the rotate tool or text tool.

---

## Exercise 2

Try adding some color to your site. Referencing the design specification on the Project 1 page, change the colour of:

- The `body` font
- The medium grey `headings`
- The orange links (including the hover state)
- The black header background and the white text inside it
- The dark grey footer background and the white text inside it

---

## Exercise 3

Add the hero image to your banner area using the `background` property shorthand.

Note that your background should "cover" the available area, it should **not** repeat, and it should be fixed in place so that content below it scrolls over top of it.

---

## Exercise 4

Try out the `audio` and `video` elements for yourself:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/QbBaGE/?height=268&theme-id=0&default-tab=html' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/QbBaGE/'>QbBaGE</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

View the [solution](http://codepen.io/redacademy/pen/zGLpoR)

---

## Homework

For today's homework, you're going to **practice your image-optimizing skills**.

You can either use images/graphics that you own, or you can explore sources for Creative Commons-licensed and public domain images/graphics.

**Choose at least three images/graphics** and experiment with the different editing tools you just learned. You are encouraged to explore a different file format for each.

**Note:** The assets you downloaded for Project 1 include already cropped/optimized images, so there's no need for further optimization here. **However,** do make sure you have added all of the images to the project before next class (including the SVG logo).

---

## Additional Resources

A list of predefined web colours:

- [Web colors](http://en.wikipedia.org/wiki/Web_colors)

Some Creative Commons-licensed image and icon sources:

- [Flickr CC search](https://www.flickr.com/search/?license=2%2C3%2C4%2C5%2C6%2C9)
- [The Stocks](http://thestocks.im/)
- [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)
- [The Noun Project](https://thenounproject.com/)

Some best practices for saving SEO-friendly images:

- [Web Images Best Practices](http://www.commercev3.com/website-images-best-practices-2014-seo/)

An in-depth explanation the PNG image format in relation other formats:

- [Web Designer’s Guide to PNG Image Format](http://sixrevisions.com/web_design/web-designers-guide-to-png-image-format/)

More on the various Creative Commons Licenses:

- [About The Licenses](https://creativecommons.org/licenses/)

Just for fun, the history of the `img` tag:

- [How Did We Get Here?](http://diveintohtml5.info/past.html)
