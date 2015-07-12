---
layout: lesson
title: Intro to CSS
slides: ['_slides/01-html-css/02-intro-to-css-slides.md']
---

## Recommended Reading

From the HTML & CSS textbook:

- Introducing CSS (pp. 228-244)
- Styling Links (p. 290)
- Responding to Users (p. 291)
- Boxes (pp. 300-318)

## Learning Objectives

- Understand what CSS is in relation to HTML.
- Understand how inheritance and specificity function in CSS.
- Distinguish between uses of CSS as inline styles, internal stylesheets, or referencing external stylesheets.
- Learn what the CSS box model is (including margin, padding, and borders).
- Manipulate styles of basic HTML elements using selectors, including classes, pseudo-classes, and IDs.
- Use browser development tools to view and change styles on webpage.

## Keywords

- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Class](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class)
- [ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)
- [Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model)
- [Web/Page Inspector](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector)

## Exercise 1

Try adding margin, borders, and padding to some HTML elements as instructed below:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/GJEPPJ/?height=268&theme-id=0&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/GJEPPJ/'>GJEPPJ</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

View the [solution](http://codepen.io/redacademy/pen/XbgoLP).

## Exercise 2

Now let's try using CSS class and IDs to style some text elements:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/ZGywWj/?height=268&theme-id=0&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/ZGywWj/'>ZGywWj</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

View the [solution](http://codepen.io/redacademy/pen/EjXryM).

## Exercise 3

Time to explore the developer tools built into your browser.

Go to a website of your choice, open the web inspector, and try altering some of the styles to see what happens.

Also try "forcing element states", editing the content of some of the HTML elements on the screen, and deleting some elements too.

*Remember that you will lose all of the changes you've made inside the web inspector as soon as you refresh the page.*

## Lab Activity

Time to add a bit of style to your resume from the previous lab activity...

You're going to add an **external stylesheet** to your root folder, and link it up in the `head` of your HTML file.

From there, experiment with different CSS properties to override the default styles applied by the browser. For instance, you my try:

- Changing the font size, font family, or colour of the text
- Adjusting the line height
- Changing the colour of links when they are hovered
- Using box model properties to adjust the space between headings and paragraphs

But don't stop there! **Have fun experimenting** with a variety of CSS properties.

And be sure to try applying the styles using the different types of **selectors** we learned:

- Type selectors (e.g. `p`, `h1`)
- Descendant selectors (e.g. `article p`)
- Class and ID selectors (e.g. `.title`, `#masthead`)

## Additional Resources

A quick reference guide for understanding CSS:

- [Syntax - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax)

Some CSS FAQs:

- [Common CSS questions](https://developer.mozilla.org/en-US/docs/Web/CSS/Common_CSS_Questions)
