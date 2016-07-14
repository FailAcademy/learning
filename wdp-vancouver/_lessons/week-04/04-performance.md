---
layout: lesson
title: Performance and Optimization
slides: ['_slides/week-04/04-performance.md']
lesson_date: 2016-07-28
---

## Pre-Work

*There is no pre-work for this lesson.*

---

## Learning Objectives

- Describe what website performance is and why it matters.
- Define what the "critical rendering path" is, and describe how to best load website resources within it to optimize perceived performance.
- Use an array of online tools and browser extensions to test page speed.
- Describe methods for compressing image files and how to choose the best image format for a particular use case.
- Describe what performance consideration must be made when building "mobile-first" websites.
- Create a performance budget for a website.
- Use the service worker API to reduce network requests for certain assets.

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
- Performance budget
- Service worker API

---

## Exercise 1

Exercise details TBA.

---

## Exercise 2

Exercise details TBA.

---

## Exercise 3

Exercise details TBA.

---

## Exercise 4

Exercise details TBA.

---

## Exercise 5

Exercise details TBA.

---

## Lab Activity

Lab details TBA.

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

A nice visual guide to understanding how `async` vs. `defer` work:

- [async vs defer attributes](http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)

A great CSS Tricks article explaining the difference between how minification and gzipping work:s

- [The Difference Between Minification and Gzipping](https://css-tricks.com/the-difference-between-minification-and-gzipping/)

Gzipping resources:

- [gzipWTF](http://gzipwtf.com/)
- [Apache Module mod_deflate](http://httpd.apache.org/docs/current/mod/mod_deflate.html)
- [Module ngx\_http\_gzip\_module](http://nginx.org/en/docs/http/ngx_http_gzip_module.html)

Some case studies and articles on RWD and performance:

- [Improving Smashing Magazine’s Performance: A Case Study](https://www.smashingmagazine.com/2014/09/improving-smashing-magazine-performance-case-study/)
- [How we make RWD sites load fast as heck](https://www.filamentgroup.com/lab/performance-rwd.html)

More on implementing responsive images:

- [Responsive Images Done Right: A Guide To &lt;picture&gt; And srcset](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/)
- [How to Build Responsive Images with srcset](https://www.sitepoint.com/how-to-build-responsive-images-with-srcset/)

Caching for different types of web servers:

- [Caching Guide - Apache HTTP Server Version 2.2](http://httpd.apache.org/docs/2.2/caching.html)
- [What Is Caching? Local Storage of Popular Content | NGINX](https://www.nginx.com/resources/admin-guide/caching/)
