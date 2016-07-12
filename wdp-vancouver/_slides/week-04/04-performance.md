---
layout: slidedeck
title: Performance and Optimization Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Performance and Optimization

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. What is performance?
2. All about page speed
3. Optimizing images
4. Optimizing code
5. Mobile-first performance
6. Setting performance budgets
7. Caching with service workers

---
template: inverse

# What is Performance?

---
class: center, middle

.large[
   What do you think **performance** means in the context of a website?
]

---

# Why It Matters

- Brand implications
- Mobile users
- SEO and A11Y implications

---
class: center, middle

### Performance is (mostly) on you!

Load time is typically 20% dependent on back-end activities (...so the DNS look-up, connecting to the server, SSL negotiation, and then content retrieval).

The other 80% is dependent on what happens in the front-end **after the HTML document has arrived** in the browser.

---

# What Makes a Website Appear Performant?

- **Page speed** (how fast does your page and its related resources load?)
- **Perceived performance** (often more important than the actual page speed!)

---
class: center, middle

### Perceived Performance

Perceive performance is how fast a user *thinks* a site loads.

---

# Response Times

According to [Jakob Nielsen](https://www.nngroup.com/articles/response-times-3-important-limits/):

- **0.1 second** is about the limit for having the user feel that the system is reacting instantaneously.
- **1.0 second** is about the limit for the user's flow to stay uninterrupted, even though the user will notice the delay.
- **10 seconds** is about the limit for keeping the user's attention focused. Commence tab switching...

*This from a book published in 1993&mdash;it's likely that people's maximum attention spans are shorter than 10 seconds today!*

---

# Critical Rendering Path

Optimizing the critical rendering path refers to prioritizing the display of content that relates to the current user action.

---

# Time to Interactivity

- Asynchronously load content
- Prioritize "above the fold" requests
- Follow best practices for loading CSS and JS assets
- Cache assets for returning users
- Optimize images
- Ensure that primary actions for the pages are ready as soon as possible.

---

# Jank

**Jank** is stuttering or skipping as you scroll down the page. It happens when the browser's rendering slows down below 60fps.

**Cause of jankiness:** Changing visual properties or the visibility of elements trigger a **repaint** and/or **reflow** in the browser&mdash;these are expensive operations!

---
class: center, middle

<iframe width="640" height="480" src="https://www.youtube.com/embed/ZTnIxIA5KGw" frameborder="0" allowfullscreen></iframe>

---
template: inverse

# Page Speed

---

# How to Optimize Page Speed

- Number of requested resources
- Files sizes (of images and code files)

---

# Other Factors that Impact Page Speed

- Geography (consider using a CDN)
- Network (mobile, rural areas)
- Browsers ([not everyone](https://hacks.mozilla.org/2016/07/make-the-web-work-for-everyone/) is using the latest version of Chrome)

---

# How to Test Page Speed






---
template: inverse

# Optimizing Images

---

Format | Best For	Optimization Options
--------------------------------------
JPEG   | Photos, images with many colours
GIF    | Animations vertical noise
PNG-24 | Partial transparency
SVG    | Graphics that need to scale

---
template: inverse

# Optimizing Code

---

Start with valid code

---

Simplify your CSS selectors...good for performance and maintainability
Don't go crazy on media queries

---

Add styles to the head and scripts before the closing body tag

---

# Minification vs. Gzipping

Minification does things like removing whitespace, removing comments, removing non-required semicolons, reducing hex code lengths...


Gzipping finds all repetitive strings and replaces them with pointers to the first instance of that string.


https://css-tricks.com/snippets/htaccess/active-gzip-compression/

Gzipping is far more effective. Doing both is ideal.

http://httpd.apache.org/docs/current/mod/mod_deflate.html
http://nginx.org/en/docs/http/ngx_http_gzip_module.html

http://gzipwtf.com/

---
template: inverse

# Mobile-first Performance

---
template: inverse

# Performance Budgets

---
template: inverse

# Caching with Service Workers

---

<!--

---

# Caching

http://httpd.apache.org/docs/2.2/caching.html

https://www.nginx.com/resources/admin-guide/caching/

-->

---

# What We've Learned

- Thing 1
- Thing 2

---
template: inverse

# Questions?

{% endhighlight %}
