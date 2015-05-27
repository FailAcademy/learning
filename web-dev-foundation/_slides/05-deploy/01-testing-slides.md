---
layout: slidedeck
title: Front-end Testing Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Front-end Testing

.title-logo[![Red logo](../../public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Front-end testing...why do it?
2. Validating your code
3. Cross-browser testing
4. Website performance
5. Accessibility

---
template: inverse

# Testing: Why Do It?

---
class: center, middle

### Why We Test

As the complexity of your code increases, it's easy for small changes and feature additions to have unexpected impacts.

---
class: center, middle

### Why We Test

...and to ensure that the users who need to access our website can do that in a browser and on a device of their choosing.

---

# What We Test

When we test a website, we want to make sure:

- Our code is **valid**
- Our website works across different browsers (and also looks as it should)
- Our website loads quickly and makes optimal use of bandwidth
- Our website and its content can be accessed by people who use assistive technologies to browse the web

---
class: center, middle

### A Ongoing Process, Not a Checklist

Front-end testing isn't something to simply worry about before you launch a website. It's an ongoing process!

---

# A Plan for Testing

A basic plan of attack for testing your front-end website code:

- Validate first
- Cross-browser test
- Test page performance
- Verify accessibility

---
template: inverse

# Validating Your Code

---

# What is Validation?

Validating your code simply means that you make sure it conforms to the norms and standards set forth by various organizations.

Valid code will help ensure your website universally understood.

---

# Validation Tools

There many are different validation tools available for validating your HTML, CSS, and JS code.

Some recommended tools include:

- [W3C Mark-up Validation Service](https://validator.w3.org/)
- [W3C CSS Validation Service](http://jigsaw.w3.org/css-validator/)
- [JS Hint](http://jshint.com/)

*Also use the developer tools in your browser to ensure there are no obvious JS errors or broken links to files and images.*

---
template: inverse

# Cross-Browser Testing

---

# Cross-Browser Testing

Cross-browser testing means exactly that...

You're going to check to makes sure that your website **code**, its **design**, and **functional features** have been optimized for the array of browsers and devices that you need to support.

*And yes, this can be a very tedious task...*

You also have to make decisions about whether you will provide **full** or **partial** support.

---
class: center, middle

![Browser wars illustration](../../public/img/slide-assets/browser-war-illustration.jpg)

---

# Know Your Audience

To know what browsers and devices you need to support, you need to **know who your target audience is**.

Analytics can provide some insight into this, but should be treated with caution.

Conducting real user research is best!

---

# Brass Tacks

The array of browsers and devices you provide support for and test on will also be determined by:

- Your project's budget
- Available timeline
- Planned scope of support

---

# Make Informed Choices

Making smart choices about the way you write your code up-front can save you a massive headache when it comes time to cross-browser test:

- Progressive enhancement vs. graceful degradation
- Save yourself the guess work and research HTML elements and CSS properties and selectors on [Can I use...](http://caniuse.com/) beforehand

---

# Browser Testing Tools

There are many (mostly paid) tools that can assist with cross-browser testing:

- [BrowserStack](https://www.browserstack.com/)
- [Browserling](https://www.browserling.com/)
- [BrowserShots](http://browsershots.org/)

These tools can be a little slow and/or janky...you've been warned!

---
class: center, middle

### Nothing Beats the Real Thing

Wherever you can, test using **real browsers and devices**. But of course, there's this problem again...

---
background-image: url(../../public/img/slide-assets/rwd-device-proliferation.jpg)

.footnote.white[
   Image Credit: [Luke Wroblewski](https://www.flickr.com/photos/lukew/10430507184/)
]

---

# Testing Tips for IE & Mobile Devices

To test on multiple version of IE, checkout the Windows "Virtual Machines" available at [modern.ie](http://dev.modern.ie/tools/vms/).

You can also use a device rental service such as [Wavefront](http://www.wavefrontac.com/national-device-library-rental/) to test on a broad variety of mobile devices.

---
template: inverse

# Page Performance

---
class: center, middle

### Why Performance Matters

Your website doesn't have a lot of time to make a first impression on user.

---

class: center, middle

### Why Performance Matters

Your users also likely won't be very happy if loading your homepage on their phone consumes 100MB of their data plan.

---

# Testing Performance

To test page load speed, page size, and learn about other points of optimization, check out:

- [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
- [Pingdom Website Speed Test](http://tools.pingdom.com/)

---
template: inverse

# Accessibility

---
class: center, middle

### Accessibility = Websites for Everyone

All too often, dealing with accessibility concerns is left until the end of project, or simply is seen as an add-on. It's not.

---
template: inverse
class: center, middle

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">Accessibility is not something we add to a website, but something we start with and risk losing with each enhancement. It is to be retained.</p>&mdash; Scott Jehl (@scottjehl) <a href="https://twitter.com/scottjehl/status/411237303579721728">December 12, 2013</a></blockquote>

---

# Testing Accessibility

So good accessibility is something start with and retain, rather than add-on!

Some tools to test how accessible your website is include:

- [AChecker](http://achecker.ca/checker/index.php)
- [Colorblind Web Page Filter](http://colorfilter.wickline.org/)

And [many others...](http://www.w3.org/WAI/ER/tools/)

---
class: center, middle

.large[
   And one of the best accessibility testing tools of them all...
]

---
class: center, middle

.large[
   Your own browser...with all CSS and JS turned off!
]

---

# Exercise 1

Time to put your own project under the microscope!

Take some of the recommended testing tools (code validators, performance testers, etc.) for spin with your own project.

---
template: inverse

# Fin!

{% endhighlight %}
