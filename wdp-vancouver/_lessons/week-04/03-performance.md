---
layout: lesson
title: Performance and Optimization
slides: ['_slides/week-04/03-performance.md']
lesson_date: 2018-05-03
---

## Pre-Work

Before today's class, ensure that you have deployed your Project 1 (Aloha homepage) as a GitHub page.

---

## Learning Objectives

* Describe what website performance is and why it matters.
* Define what the "critical rendering path" is, and describe how to best load website resources within it to optimize perceived performance.
* Use an array of online tools and browser extensions to test page speed.
* Describe methods for compressing image files and how to choose the best image format for a particular use case.
* Describe what performance consideration must be made when building "mobile-first" websites.
* Create a performance budget for a website.

---

## Keywords

* Performance
* Optimization
* Page speed
* Page weight
* Network requests
* [Critical rendering path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/?hl=en)
* Jank
* `async`
* `defer`
* Font loading API
* Minification
* gzipping
* `srcset`
* [`<picture>`](https://developer.mozilla.org/en/docs/Web/HTML/Element/picture)
* Performance budget

---

## Exercise 1

Go to one of your favourite websites and do the following:

* Use the Network tab in your dev tools to determine how many requests are made, its page weight, how long it takes to load, and whether its CRP appears to be optimized.
* Use the Performance tab in your dev tools to identify possible source of jank on the page.
* Run its URL through Google PageSpeed Insights and see what recommendations for desktop and mobile.

Be prepared to share your insights with the class!

---

## Exercise 2

Go to [Unsplash](https://unsplash.com/) and pick a photo that you like. Using an image optimizing tool (or tools) of your choice, optimize the image for display on a website with a maximum width of `800px`.

See how many KBs you can strip out of the image while still maintaining an acceptable level of image fidelity.

Try doing a side-by-side comparison in a browser window of the original image (scaled down with code) and the optimized image (optimized to fit). Can you tell the difference?

---

## Exercise 3

Let's better optimize the CSS and JS on our Aloha websites.

First, analyze the current state of your CSS. Run your CSS code through the **[CSS Stats](http://cssstats.com/stats?link=http%3A%2F%2Fredacademy.github.io%2Faloha-apparel-pt2%2Fcss%2Fstyle-stretch.css)** and **[CSS Specificity Graph Generator](https://jonassebastianohlsson.com/specificity-graph/)** tools. Can you now see any obvious places where you could improve your CSS performance?

Next, adjust your `<script>` tags so they can no longer block content rendering on the page.

---

## Exercise 4

To get started, **[download the exercise files here](/public/files/exercises/picture-element.zip)**.

The exercise files contain three different images with regular and hi-res versions of each (6 images total).

Inside the `index.html` file, add a `<picture>` element that loads the `pug-portrait.jpg` for mobile, `pug-square.jpg` for `min-width: 420px`, and `pug-landscape.jpg` for `min-width: 1024px`.

Be sure to include the hi-res versions in the `srcset` attributes for high-density pixel displays, and use `pug-square.jpg` as a fallback for browsers that don't support `<picture>`.

---

## Exercise 5

Run the deployed version of your Aloha site through [WebPageTest](http://www.webpagetest.org/) and determine the current **Start Render**, **Document Complete**, and **Fully Loaded** times for your site. Also look in the Network tab of your dev tools and get the **page weight** and **number of requests** for your site.

Compare these numbers with two of your classmates. Pick the top speeds and lowest page weight and number requests in your group, and then **subtract 20%**. This will be your target performance budget for your site.

Based on what you've learned so far, what optimizations could you make to load the site and its assets within this budget?

---

## Lab Activity

In today's lab, we'll be combining many of the techniques from the lesson to make a webpage as performant as possible

**[Download the lab files here](/public/files/labs/performance-lab.zip).**

_Be sure to run `npm install` after you download and extract the files!_

Review the code in the downloaded files and determine how you can optimize for the fewest number of network requests, lightest page weight, and fastest load time.

For example:

* Is there anything you can minify?
* Can you reduce the sizes of any of the images or load them more responsively?
* Can you reduce the number of requests you make for various image assets?
* Can you reduce CSS selector specificity or the number of media queries used?
* Is there a better way to load the script files?
* How can you better optimize the critical rendering path?
* _...and so on!_

The catch with this lab is that **there must be no discernible difference** between the original visual appearance of the page and optimized visual appearance of the page.

The student who manages to reduce the network requests, page weight, and load time by the widest margin by the end of class will win a prize :)

---

## Additional Resources

A free online screencast series about website performance tips:

* [LevelUpTuts - Website Performance Tutorials](https://www.youtube.com/playlist?list=PLLnpHn493BHGpGXukqYsxwQw3ziW3uti6)

A free online book on website performance:

* [Designing for Performance](http://designingforperformance.com/)

A deep dive into how webpages are rendered by browsers:

* [What Every Frontend Developer Should Know About Webpage Rendering](http://frontendbabel.info/articles/webpage-rendering-101/)

A collection of resources to help you solve various "jank" issues:

* [Jank Free](http://jankfree.org/)

A detailed explanation on how to interpret Google PageInsights recommendations:

* [
  PageSpeed Insights Rules](https://developers.google.com/speed/docs/insights/rules)

A cool Gulp plugin for measuring and visualizing site performance metrics:

* [PerfTool](http://performance-tool.devbridge.com/)

A tool to help you load CSS asynchronously:

* [filamentgroup/loadCSS](https://github.com/filamentgroup/loadCSS)

A nice visual guide to understanding how `async` vs. `defer` work:

* [async vs defer attributes](http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)

More on strategic web font loading:

* [A Comprehensive Guide to Font Loading Strategies](https://www.zachleat.com/web/comprehensive-webfonts/)

A great CSS Tricks article explaining the difference between how minification and gzipping work:s

* [The Difference Between Minification and Gzipping](https://css-tricks.com/the-difference-between-minification-and-gzipping/)

Gzipping resources:

* [gzipWTF](http://gzipwtf.com/)
* [Apache Module mod_deflate](http://httpd.apache.org/docs/current/mod/mod_deflate.html)
* [Module ngx_http_gzip_module](http://nginx.org/en/docs/http/ngx_http_gzip_module.html)

Some case studies and articles on RWD and performance:

* [Improving Smashing Magazine’s Performance: A Case Study](https://www.smashingmagazine.com/2014/09/improving-smashing-magazine-performance-case-study/)
* [How we make RWD sites load fast as heck](https://www.filamentgroup.com/lab/performance-rwd.html)

More on implementing responsive images:

* [Responsive Images Done Right: A Guide To &lt;picture&gt; And srcset](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/)
* [How to Build Responsive Images with srcset](https://www.sitepoint.com/how-to-build-responsive-images-with-srcset/)

Caching for different types of web servers:

* [Caching Guide - Apache HTTP Server Version 2.2](http://httpd.apache.org/docs/2.2/caching.html)
* [What Is Caching? Local Storage of Popular Content | NGINX](https://www.nginx.com/resources/admin-guide/caching/)
