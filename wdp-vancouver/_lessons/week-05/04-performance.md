---
layout: lesson
title: Performance and Optimization
slides: ['_slides/week-05/04-performance.md']
lesson_date: 2020-02-13
---

## Pre-Work

Before today's class, ensure that you have deployed your Project 1 (Aloha homepage) as a GitHub page.

- [Web optimization a secret world to unleash](https://www.freecodecamp.org/news/web-optimization-a-secret-world-to-unleash-5fbdf1065945/)

---

## Learning Objectives

- Describe what website performance is and why it matters.
- Define what the "critical rendering path" is, and describe how to best load website resources within it to optimize perceived performance.
- Use an array of online tools and browser extensions to test page speed.
- Describe methods for compressing image files and how to choose the best image format for a particular use case.
- Describe what performance consideration must be made when building "mobile-first" websites.

---

## Keywords

- Performance
- Optimization
- Page speed
- Page weight
- Network requests
- [Critical rendering path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/?hl=en)
- Jank
- `async`
- `defer`
- Font loading API
- Minification
- gzipping
- `srcset`
- [`<picture>`](https://developer.mozilla.org/en/docs/Web/HTML/Element/picture)

---

## Exercise 1

Go to one of your favourite websites and do the following:

- Use the Network tab in your dev tools to determine how many requests are made, its page weight, how long it takes to load, and whether its CRP appears to be optimized.
- Use the Performance tab in your dev tools to record and identify possible issues.
- Run the website URL through Google PageSpeed Insights and see what recommendations for desktop and mobile.

Be prepared to share your insights with the class!

---

## Exercise 2

Go to [Unsplash](https://unsplash.com/) and pick a photo that you like. Using an image optimizing tool (or tools) of your choice, optimize the image for display on a website with a maximum width of `800px`.

See how many KBs you can strip out of the image while still maintaining an acceptable level of image fidelity.

Try doing a side-by-side comparison in a browser window of the original image (scaled down with code) and the optimized image (optimized to fit). Can you tell the difference?

---

## Exercise 3

Let's better optimize the CSS and JS on our Aloha websites.

First, analyze the current state of your CSS. Run your CSS code through the **[CSS Stats](https://cssstats.com/stats/?link=https://redacademy.github.io/aloha-apparel/build/css/style.min.css)** and **[CSS Specificity Graph Generator](https://jonassebastianohlsson.com/specificity-graph/)** tools. Can you now see any obvious places where you could improve your CSS performance?

Next, adjust your `<script>` tags so they can no longer block content rendering on the page.

---

## Exercise 4

To get started, **[download the exercise files here](/public/files/exercises/picture-element.zip)**.

The exercise files contain three different images with regular and hi-res versions of each (6 images total).

Inside the `index.html` file, add a `<picture>` element that loads the `pug-portrait.jpg` for mobile, `pug-square.jpg` for `min-width: 420px`, and `pug-landscape.jpg` for `min-width: 1024px`.

Be sure to include the hi-res versions in the `srcset` attributes for high-density pixel displays, and use `pug-square.jpg` as a fallback for browsers that don't support `<picture>`.

---

## Lab Activity

Continue working on Instanews, be sure to **validate your HTML using the W3C Validator**.

Validating HTML that's being appended using JavaScript/jQuery is a bit trickier, **please see the video below on how to do this**.

<video controls width="100%">
    <source src="/public/videos/validate-html-js.mp4"
            type="video/mp4">

    Sorry, your browser doesn't support embedded videos.

</video>

---

## Additional Resources

A free online screencast series about website performance tips:

- [LevelUpTuts - Website Performance Tutorials](https://www.youtube.com/playlist?list=PLLnpHn493BHGpGXukqYsxwQw3ziW3uti6)

A free online book on website performance:

- [Designing for Performance](http://designingforperformance.com/)

A deep dive into how webpages are rendered by browsers:

- [What Every Frontend Developer Should Know About Webpage Rendering](http://frontendbabel.info/articles/webpage-rendering-101/)

A collection of resources to help you solve various "jank" issues:

- [Jank Free](http://jankfree.org/)

A detailed explanation on how to interpret Google PageInsights recommendations:

- [
  PageSpeed Insights Rules](https://developers.google.com/speed/docs/insights/rules)

A cool Gulp plugin for measuring and visualizing site performance metrics:

- [PerfTool](http://performance-tool.devbridge.com/)

A tool to help you load CSS asynchronously:

- [filamentgroup/loadCSS](https://github.com/filamentgroup/loadCSS)

A nice visual guide to understanding how `async` vs. `defer` work:

- [async vs defer attributes](http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)

More on strategic web font loading:

- [A Comprehensive Guide to Font Loading Strategies](https://www.zachleat.com/web/comprehensive-webfonts/)

A great CSS Tricks article explaining the difference between how minification and gzipping work:s

- [The Difference Between Minification and Gzipping](https://css-tricks.com/the-difference-between-minification-and-gzipping/)

Gzipping resources:

- [gzipWTF](http://gzipwtf.com/)
- [Apache Module mod_deflate](http://httpd.apache.org/docs/current/mod/mod_deflate.html)
- [Module ngx_http_gzip_module](http://nginx.org/en/docs/http/ngx_http_gzip_module.html)

Some case studies and articles on RWD and performance:

- [Improving Smashing Magazine’s Performance: A Case Study](https://www.smashingmagazine.com/2014/09/improving-smashing-magazine-performance-case-study/)
- [How we make RWD sites load fast as heck](https://www.filamentgroup.com/lab/performance-rwd.html)

More on implementing responsive images:

- [Responsive Images Done Right: A Guide To &lt;picture&gt; And srcset](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/)
- [How to Build Responsive Images with srcset](https://www.sitepoint.com/how-to-build-responsive-images-with-srcset/)

Caching for different types of web servers:

- [Caching Guide - Apache HTTP Server Version 2.2](http://httpd.apache.org/docs/2.2/caching.html)
- [What Is Caching? Local Storage of Popular Content | NGINX](https://www.nginx.com/resources/admin-guide/caching/)
