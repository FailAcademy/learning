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

### Perceived Performance?

Perceived performance is how fast a user *thinks* a site loads.

---

# Response Times

According to [Jakob Nielsen](https://www.nngroup.com/articles/response-times-3-important-limits/):

- **0.1 second** is about the limit for having the user feel that the system is reacting instantaneously.
- **1.0 second** is about the limit for the user's flow to stay uninterrupted, even though the user will notice the delay.
- **10 seconds** is about the limit for keeping the user's attention focused. Commence tab switching...

*This from a book published in 1993&mdash;it's likely that people's maximum attention spans are shorter than 10 seconds today!*

---

# Critical Rendering Path

Optimizing the **critical rendering path** pertains to prioritizing the display of content that relates to the current user action:

.inline-images[
   ![Progressive rendering](/public/img/slide-assets/progressive-rendering.png)
]

.footnote[Image credit: [Google](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/?hl=en)]

---

# How a Page Loads

1. The browser **fetches the HTML document** from the server and constructs the DOM
2. As the browser reads the HTML it retrieves the linked stylesheets&mdash;the browser **pauses everything to fetch the stylesheets** and then constructs the CSSOM
3. The browser uses the DOM and CSSOM create the **render tree** (computes the size and position of all visible elements)
4. The browser **paints** the final render tree and renders the pixels on the screen

---
class: center, middle

<iframe width="640" height="480" src="https://www.youtube.com/embed/ZTnIxIA5KGw" frameborder="0" allowfullscreen></iframe>

---

# Optimizing CRP

To optimize the critical rendering path we must ensure that **primary actions are ready as soon as possible**, but this will require some planning:

- Prioritize "above the fold" requests
- Follow best practices for loading CSS and JS assets
- Cache assets for returning users
- Optimize images and other assets

*More on this to come...*

---

# Jank

**Jank** is stuttering or skipping as you scroll down the page.

It happens when the browser's rendering slows **below 60fps**.

**Cause of jankiness:** Changing visual properties or the visibility of elements trigger a **repaint** and/or **reflow** in the browser&mdash;these are expensive operations!

Jank is ultimately the result of the browser taking too long to make the frames (due to inefficient animations, too many repaints, etc.).

---
class: center, middle

.large[
   Resource: **[Jank Free](http://jankfree.org/)**
]

---
template: inverse

# Page Speed

---
class: center, middle

.large[
   What do we mean by<br />**page speed**?
]

---

# Loading Pages Faster

Improving the loading speed of a page boils down to two (seemingly) simple tasks:

- Reducing the number of requested resources and optimizing how they are loaded
- Reducing file sizes (of files containing code, images, etc.)

---

# Other Factors that Impact Page Speed

- Geography (but CDNs can help)
- Network (mobile, rural areas, etc.)
- Browsers ([not everyone](https://hacks.mozilla.org/2016/07/make-the-web-work-for-everyone/) is using the latest version of Chrome)

---

# Testing Page Speed

- [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
- [WebPageTest](http://www.webpagetest.org/)
- [YSlow](http://yslow.org/) browser extension
- Your Chrome dev tools! (use the Network and Performance tabs)

---
class: center, middle

.inline-images[
   ![Network tab in Chrome dev tools](/public/img/slide-assets/chrome-dev-tools-network.png)
]

**Timeline is now in the Performance tab**

---
class: center, middle


.inline-images[
   ![Performance tab in Chrome dev tools](/public/img/slide-assets/chrome-dev-tools-timeline.png)
]

---

# Exercise 1

Go to one of your favourite websites and do the following:

- Use the Network tab in your dev tools to determine how many requests are made, its page weight, how long it takes to load, and whether its CRP appears to be optimized.
- Use the Performance tab in your dev tools to identify possible source of jank on the page.
- Run its URL through Google PageSpeed Insights and see what recommendations for desktop and mobile.

Be prepared to share your insights with the class!

---
template: inverse

# Optimizing Images

---
class: center, middle

### Impact of Images

Images account for **most of page weight**, <br />so big performance gains can be made easily here!

---

# How to Optimize Images

- Use SVGs (can be embedded directly in HTML)
- Use icon fonts (customize with only the icons you need)
- Create image sprites ([with SVGs](https://24ways.org/2014/an-overview-of-svg-sprite-creation-techniques/))
- Use CSS3 properties where you can
- "Save for Web/Devices" using Photoshop, Gimp, or [Photopea](https://www.photopea.com/)
- Compress/minify your images with [imagemin](https://github.com/sindresorhus/gulp-imagemin), [Compressor.io](https://compressor.io/compress) in your build tooling or the [ImageOptim](https://imageoptim.com/mac) app
- Choose the right image format for the job...

---
class: center, middle

Format | Best For
-------|---------------------------------
JPEG   | Photos, images with many colours
GIF    | Animations, simple graphics
PNG-24 | Partial transparency
SVG    | Graphics that need to scale

---

# Image Optimization Checklist

1. Have I picked the right image format?
2. Have I run all of my images through a compression tool?
3. Can I (reasonably) use CSS or an SVG for this?

**Note:** Image optimization isn't something you only do before you launch a website...there needs to be a long-term strategy in place for site editors!

---

# Exercise 2

Go to [Unsplash](https://unsplash.com/) and pick a photo that you like. Using an image optimizing tool (or tools) of your choice, optimize the image for display on a website with a maximum width of `800px`.

See how many KBs you can strip out of the image while still maintaining an acceptable level of image fidelity.

Try doing a side-by-side comparison in a browser window of the original image (scaled down with code) and the optimized image (optimized to fit). Can you tell the difference?

---
template: inverse

# Optimizing Code

---
class: center, middle

### Rule No. 1 of Optimizing Code:

**Start with valid, error-free code!**

---

# Optimizing HTML

Optimizing your mark-up is as simple as following the basic best practices we already know:

- Don't use inline styles on your elements
- Avoid div-itis (important for a11y too)
- Remove commented-out code in production environments

---
class: center, middle

.large[
   **Rules to live by:**<br />
   Load CSS in the `<head>`<br />
   Load JS right before `</body>`
]
<br />
(Except when we shouldn't...)

---
class: center, middle

.large[
   Why do we do this?<br />
   When do we not do this?
]

---

# Optimizing CSS

CSS **performance** and **maintainability** are two peas in a pod:

- Make as few requests to stylesheets as possible, but consider using page-specific styles for larger sites
- Keep selector specificity under control
- Clean up unused styles
- Remove redundancies (modular classes FTW!)
- Ask yourself if you really need Bootstrap, etc.
- Be smart about how you write you media queries

---

# Optimizing JS

JS resources can significantly impact the CRP because they block DOM construction.

We can add the `async` or `defer` attributes on individual `<script>` elements to selectively prevent blocking:

```html
<body>
   <h1>Hello, world!</h1>
   <!-- All the site content... -->
   <script defer src="firstScript.js"></script>
   <script async src="secondScript.js"></script>
</body>
```

**Note:** Any JS that loads late and affects page layout can cause the content to shift though!

---
class: center, middle

&nbsp;                 | `async`                                 | `defer`
-----------------------|-----------------------------------------|-------------------------------------------------
**Executes when?**     | At the first available opportunity      | In the order it occurs in the document
**Before what event?** | Before the `window`'s `load` event      | Before the `document`’s `DOMContentLoaded` event
**When to use it?**    | When it doesn't rely on other scripts   | When it relies on or is relied upon by other scripts

---

# Optimizing Fonts

Modern browsers are smart about only loading the font files they need, but we still need to think about optimizing them:

- Add only the fonts you truly need to a website
- Only add the weights and subsets that you need (easily customized with Google Fonts or Font Squirrel)
- Make sure your fonts are cached (they rarely change!)
- Use the [Font Loading API](https://drafts.csswg.org/css-font-loading/) to optimize text rendering in the CRP (fonts are lazyloaded by default, so the browser won't paint text pixels until the required fonts are available)

---

# Third-Party Content

Third-party content/scripts such as ad servers or social buttons can be performance liabilities on your site because:

- They will require additional DNS look-ups
- They will have page weight implications for your website

*Be smart about how you load third-party content!*

Would click rates improve if you allow ads, etc. to block rendering (so they are visible when the content loads), or defer loading of ads so the user sees the content sooner?

---

# Minification & Gzipping

Minification does things like removing whitespace, comments, and non-required semicolons, and reducing hex code lengths. We already do this to our CSS and JS with Gulp!

Gzipping finds all repetitive strings and replaces them with pointers to the first instance of that string. It must be done at the server level (and how you do will depend on what kind of web server you're using).

Gzipping is far more effective for improving performance. **Doing both is ideal.**

---

# Exercise 3

Let's better optimize the CSS and JS on our Aloha websites.

First, analyze the current state of your CSS. Run your CSS code through the **[CSS Stats](http://cssstats.com/stats?link=http%3A%2F%2Fredacademy.github.io%2Faloha-apparel-pt2%2Fcss%2Fstyle-stretch.css)** and **[CSS Specificity Graph Generator](https://jonassebastianohlsson.com/specificity-graph/)** tools. Can you now see any obvious places where you could improve your CSS performance?

Next, adjust your `<script>` tags so they can no longer block content rendering on the page.

---
template: inverse

# Mobile-first Performance

---
class: center, middle

.large[
   Mobile-first is about more than how you write media queries.
]

---

# Thinking Mobile-first

Thinking mobile-first requires asking some key questions:

- *What is the main purpose of this page?*
- *What's the most important functionality or content?*
- *How do we optimize this for slower or less capable devices?*

**Don't assume that users need to see fewer things because they are on mobile devices.**

If you find yourself making judgements like this, then you should be asking why that content is there at all!

---
class: center, middle

### Optimized Image Loading FTW

We already know that we can make big performance gains by optimizing our images, but **how we load them** in our HTML and CSS for different screen sizes/types can do even more to improve site performance on mobile devices.

**TL;DR:** Load appropriately sized images for a given context.

---

# Background Images

**Pro-tip:** If you have a large background image you need to hide in your CSS, you must set `display: none` on the parent to prevent the browser from downloading the image anyway:

```html
<div class="parent">
    <div class="child"></div>
</div>
```

```css
.child {
   background-image: url('images/cat.png');
}

@media all and (max-width: 600px) {
   .parent {
      display: none;
   }
}
```

---

# Background Images

**Pro-tip:** Remember that you can write resolution-dependent media queries to selectively load high resolution images:

```css
.hero {
   background-image: url('images/hero.png');
   width: 1600px;
   height: 300px;
}

/* loads for HiDPI screens only */
@media
(-webkit-min-device-pixel-ratio: 2),
(min-resolution: 192dpi) {
   .hero {
      background-image: url('images/hero-hires.png');
      width: 1600px;
      height: 300px;
   }
}
```

---

# Using srcset

We can also use the `srcset` attribute on an `<img>` element, which takes a comma-separated list of image URLs. Using the `x` descriptor allows you to load different versions of the same image for high-density displays:

```html
<img src="puppy.jpg"
   srcset="puppy.jpg 1x, puppy-large.jpg 2x"
   alt="An adorable puppy"/>
```

Using the `sizes` attribute with the `w` descriptor allow you to customize the size of the image based on the viewport:

```html
<img src="puppy.jpg" sizes="(max-width: 40em) 100vw, 50vw"
   srcset="puppy.jpg 200w, puppy-large.jpg 400w, puppy-hd.jpg 600w"
   alt="An adorable puppy"/>
```

---

# Picture Elements

Where more **art direction** is needed (i.e. we want to load completely different images depending on the screen context), we can use the `<picture>` and `<source>` elements with `srcset`:

```html
<picture>
   <source media="(max-width: 20em)" srcset="puppy-portrait.jpg 1x,
   puppy-portrait-large.jpg 2x, puppy-portrait-hd.jpg 3x" />

   <source media="(max-width: 40em)" srcset="puppy-landscape.jpg 1x,
   puppy-landscape-large.jpg 2x, puppy-landscape.jpg-hd.jpg 3x" />

   <img src="puppy-landscape.jpg" alt="An adorable puppy" />
</picture>
```

---

# Exercise 4

To get started, **[download the exercise files here](/public/files/exercises/picture-element.zip)**.

The exercise files contain three different images with regular and hi-res versions of each (6 images total).

Inside the `index.html` file, add a `<picture>` element that loads the `pug-portrait.jpg` for mobile, `pug-square.jpg` for `min-width: 420px`, and `pug-landscape.jpg` for `min-width: 1024px`.

Be sure to include the hi-res versions in the `srcset` attributes for high-density pixel displays, and use `pug-square.jpg` as a fallback for browsers that don't support `<picture>`.

---
template: inverse

# Performance Budgets

---

# Aesthetics versus Performance

Modern HTML/CSS/JS and web browsers are very powerful, but we must always be sure to ask **what impact a given choice** has on page weight, additional HTTP requests, and perceived performance.

For example, what is the performance cost of adding a hero image, a hi-res video, another font file, an image slider, etc.?

**We must find a happy medium balancing aesthetics with performance and make decisions that support the brand!**

---

# Creating and Using a Performance Budget

- A performance budget is a set of targets related to site performance that you do not want to exceed (e.g. page weight, total number of requests, load times)
- It should be set early on in a project, and as a project evolves can help you make decisions around what you do or do not add to a page
- How you set your targets will depend on your project... benchmarking "competitors" can be a good place to start

---

# Exercise 5

Run the deployed version of your Aloha site through [WebPageTest](http://www.webpagetest.org/) and determine the current **Start Render**, **Document Complete**, and **Fully Loaded** times for your site. Also look in the Network tab of your dev tools and get the **page weight** and **number of requests** for your site.

Compare these numbers with two of your classmates. Pick the top speeds and lowest page weight and number requests in your group, and then **subtract 20%**. This will be your target performance budget for your site.

Based on what you've learned so far, what optimizations could you make to load the site and its assets within this budget?

---

# What We've Learned

- What it means for a website to be performant
- How to test page speed
- How to optimize images and code
- How to think about performance in a "mobile-first" way
- What a performance budget is

---
template: inverse

# Questions?

{% endhighlight %}
