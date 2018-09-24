---
layout: lesson
title: Accessibility
slides: ["_slides/week-08/01-accessibility-slides.md"]
lesson_date: 2018-11-19
---

## Pre-Work

Prior to class, watch these videos for a primer on accessibility and why it's important:

- [Stephanie Hobson: Accessibility With CSS – Making Websites Better for Everyone
  ](http://wordpress.tv/2014/09/02/stephanie-hobson-accessibility-with-css-making-websites-better-for-everyone/)

Also, be sure to **bring headphones** to class today as we will be using screen reader software in class.

---

## Learning Objectives

- Define accessibility in a web-based context and why it's important.
- Describe various impairments that should be considered when building accessible websites and applications.
- Identify various assistive technologies and use them along with other accessibility evaluation tools to audit the accessibility of a website.
- Describe best practices around semantic mark-up to improve the accessibility of a website.
- Use the `tabindex` attribute to optimize the tab order for logical keyboard navigation of a website.
- Use ARIA attributes to augment the accessibility of an HTML element.
- Describe best practices when writing CSS to prevent styles and layout from hampering the accessibility of a website.

---

## Keywords

- [Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Web Accessibility Initiative (W3C-WAI)](https://www.w3.org/WAI/)
- [Web Content Accessibility Guidelines (WCAG 2.0)](https://www.w3.org/WAI/intro/wcag)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/TR/wai-aria-1.1/)
- Assistive technology
- [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)

---

## Exercise 1

The W3C-WAI provides an **[extensive reference guide](https://www.w3.org/WAI/WCAG20/quickref/)** for satisfying WCAG 2.0 Guidelines (which serve as the foundation for much of the legislation mandating web accessibility).

WebAIM has also summarized these guidelines in a **[checklist](http://webaim.org/standards/wcag/checklist)**.

Working in small groups, a scenario will be described and as a group you must come up with way to ensure accessibility.

Accesibility decisions should be backed by the reference guide (W3C-WAI) and/or checklist (WebAIM).

---

## Exercise 2

Let's to do some accessibility testing on our Aloha projects.

First follow the instructions to **[add the tota11y script](http://khan.github.io/tota11y/)** on your Aloha site. Also **[install the Accessibility Developer Tools extension](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb)** in Chrome. Run an audit with each tool...what kinds of accessibility issues can you identify?

After running your initial audits, try using **VoiceOver or ChromeVox** to experience you site as someone using a screen reader would. Do you notice any problematic points?

_Jot down a few notes from the above tests and be ready to share them with the class._

---

## Exercise 3

In a Codepen, refactor this snippet of code to be more semantic, accessible HTML:

```html
<div>
  <div><strong>All About Kittens</strong></div>
  <img src="http://placekitten.com/300/200" alt="kitten" />
  <div>Learn all you ever wanted to know about kittens and more! <span onclick="location.href='all-about-kittens.html';" style="cursor: pointer; color: blue; text-decoration: underline;">Continue reading &rarr;</span></div>
</div>
```

---

## Exercise 4

Now we're going to **implement a skip link** on our Aloha projects.

Implement a skip link as previously instructed, test it, and add a bit of extra CSS to style the link so that it visually matches the site branding when revealed to sighted users.

---

## Exercise 5

You will be assigned an ARIA role to investigate. Refer to the W3C's documentation (linked on the previous slide) on ARIA roles to determine:

- What your element is for
- How it can and cannot be used

You will then share your findings with the class.

---

## Exercise 6

Refactor the following code to use the appropriate ARIA role for the tooltip text and appropriate ARIA property to relate that tooltip text to its sibling `<input>`.

```html
<form action="">
   <div>
      <label for="username">Your username</label>
      <input type="text" id="username" required />
      <div id="username-tip">Your username is your email address</div>
   </div>
   <div>
      <label for="password">Your password</label>
      <input type="text" id="password" required />
      <div id="password-tip">If you forgot your password, you may reset it</div>
   </div>
</form>
```

---

## Lab Activity (Next Class)

**Task 1:**

In this lab, you will trade Aloha websites with a classmate and evaluate their project using the [WebAIM's WCAG 2.0 Checklist](http://webaim.org/standards/wcag/checklist) ([PDF version](http://webaim.org/standards/wcag/WCAG2Checklist.pdf)).

To complete this evaluation, you will need to use a combination of:

- Chrome's accessibility developer tools
- The pa11y JS plugin
- VoiceOver, NVDA, or the ChromeVox Chrome extension
- Color Oracle or the No Coffee Chrome extension
- The High Contrast Chrome extension

In addition to evaluating their project, you will also need to provide **at least three individual recommendations** (in the form of pull requests) to address accessibility issues. To do this, you will need to fork their repo, make adjusts to the code, and submit pull requests based on your individual commits.

**Task 2:**

Once you finish the first task, use you the WebAIM checklist and the evaluation tools to perform an accessibility audit of one of your favourite websites. Write up a set of recommendations for what the owner of the website could do to improve overall accessibility.

Have your evaluations prepared for tomorrow morning, and we'll review a selection of the audits and recommendations together.

---

## Additional Resources

Tools to help you evaluate and visualize how accessible a website is:

- [Accessibility Developer Tools](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb)
- [Pa11y](http://pa11y.org/)
- [tota11y](http://khan.github.io/tota11y/)
- [Web Accessibility Evaluation Tools List](https://www.w3.org/WAI/ER/tools/)

Some accessibility testing checklists:

- [How to Meet WCAG 2.0](https://www.w3.org/WAI/WCAG20/quickref/)
- [WebAIM's WCAG 2.0 Checklist](http://webaim.org/standards/wcag/checklist)
- [Section 508 Checklist](http://webaim.org/standards/508/checklist)

Some screen reader apps and extensions:

- [NVDA Screen Reader](http://www.nvaccess.org/)
- [ChromeVox](http://www.chromevox.com/)

Tools and tips to assist with colour-related accessibility testing:

- [Color Oracle](http://colororacle.org/)
- [Color Oracle - Design Tips](http://colororacle.org/design.html)
- [High Contrast](https://chrome.google.com/webstore/detail/high-contrast/djcfdncoelnlbldjfhinnjlhdjlikmph)
- [No Coffee](https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl)

From Udacity, an incredibly thorough (free!) course on web accessibility:

- [Web Accessibility](https://www.udacity.com/course/web-accessibility--ud891)

A community-driven effort to make web accessibility easier:

- [The A11Y Project](http://a11yproject.com/)

More on ARIA:

- [Getting started with ARIA](http://a11yproject.com/posts/getting-started-aria)

Extend accessibility best practices to your SVG mark-up:

- [Making SVG Accessible](http://thenewcode.com/1026/Making-SVG-Accessible)

WordPress plugins for accessibility testing:

- [WP Accessibility](https://wordpress.org/plugins/wp-accessibility/)
- [Access Monitor](https://wordpress.org/plugins/access-monitor/)

Information on Canadian laws regarding web accessibility:

- [About accessibility laws | Ontario](https://www.ontario.ca/page/about-accessibility-laws)
- [Accessible Internet - Province of British Columbia](http://www2.gov.bc.ca/gov/content/governments/about-the-bc-government/accessibility/accessibility-2024/building-blocks/accessible-internet)

An article more on "compatibility" than "accessibility" but still a good, relevant read:

- [Make the Web Work For Everyone](https://hacks.mozilla.org/2016/07/make-the-web-work-for-everyone/)

Use CSS to lint your HTML and make it more accessible:

- [Linting HTML using CSS](https://bitsofco.de/linting-html-using-css/)
- [Alix for Chrome](https://chrome.google.com/webstore/detail/alix-for-chrome/aepmadgjacfjcneccddiccnkbpimobge)
