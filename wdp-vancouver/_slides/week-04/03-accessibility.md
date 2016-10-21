---
layout: slidedeck
title: Web Accessibility Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Web Accessibility

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. What is accessibility?
2. Exploring assistive technologies and testing tools
3. Leveraging semantics
4. Optimizing focus
5. ARIA attributes
6. CSS considerations

---
template: inverse

# Accessibility 101

---
class: center, middle

### What is Accessibility?

Based on the videos you watched for the lesson pre-work, how would you define accessibility?

---
class: center, middle

> "Founded on the principles of **Universal Design**, the goal of accessibility is to create an inclusive society for people with physical, mobility, visual, auditory or cognitive disabilities. This means everyone has equal access to perceive, understand, engage, navigate and interact with all elements of the physical and digital world."

*&mdash;From the [CNIB website](http://www.cnib.ca/en/services/accessibilities/what_is_accesibility/Pages/default.aspx)*

---
class: center, middle

### Web Accessibility (A11Y)

At a high level, you can think of accessibility on the web as making sure that **all of your users** can access **all of the content and essential functionality** on your website.

---

# Some Stats

- 13.7% of the adult population in Canada reported being limited in their daily activities in some way due to a disability (source: [Statistics Canada](http://www.statcan.gc.ca/pub/89-654-x/89-654-x2013002-eng.htm))
- 81.3% of those with disabilities use aids and assistive devices (source: [Statistics Canada](http://www.statcan.gc.ca/pub/89-654-x/89-654-x2013002-eng.htm))
- 100% of us are aging right now!

---

# Why Accessibility on the Web Matters...

- It's the right thing to do (empathy!)
- It's good for business
- It's the law (varies between provinces and countries)

---

# Canadian Laws

- Many provinces ([including BC](http://www2.gov.bc.ca/gov/content/governments/about-the-bc-government/accessibility/accessibility-2024/building-blocks/accessible-internet)) have legislation in place requiring government websites to be accessible
- Ontario takes it a step further with **Accessibility for Ontarians with Disabilities Act (AODA)**, which requires organizations that employ more than 50 people, or are publicly funded, to post accessible content to their website

---

# American Laws

- **Americans with Disabilities Act (ADA)** requires all US-based organizations to provide access to information and data to people with disabilities upon request
- **Section 508** of the U.S. Rehabilitation Act requires federal agencies to provide access to information and data to disabled federal employees, and federal information must be accessible for disabled citizens

---
class: center, middle

.large[
   Knowing this, why might some people still object to making a website accessible?
]

---
class: center, middle

.large[
   Accessibility must be an integral part of the process, not a task bolted-on at the end!
]

---
class: center, middle

.inline-images[
   ![Makeshift and incredibly dangerous wheelchair ramp](/public/img/slide-assets/a11y-makeshift-ramp.jpg)
]

---
class: center, middle

.inline-images[
   ![Robson Square ramp](/public/img/slide-assets/a11y-robson-square.jpg)
]

---

# A11Y Vocabulary

- **W3C-WAI:** the W3C's [Web Accessibility Initiative](https://www.w3.org/WAI/) provide strategies, guidelines, and resources to help make the web more accessible
- **WCAG 2.0:** the W3C-WAI's [Web Content Accessibility Guidelines](https://www.w3.org/WAI/intro/wcag) strive to provide a single shared standard for web content accessibility that meets the needs of individuals, organizations, and governments internationally
- **WAI-ARIA:** the W3C-WAI's [Accessible Rich Internet Applications](https://www.w3.org/TR/wai-aria-1.1/) spec provides guidelines for a framework for improving accessibility of web content and applications, and s special set of HTML attributes to do so

---

# WCAG 2.0 Principles

- **Perceivable:** content and UI must be perceiveable by all users (not just sighted, etc.)
- **Operable:** UI components can be used to navigate the website (for example, what happens to hoverable elements on touch screens?)
- **Understandable:** both the content and the UI must be understandable (at what grade level is your content written?)
- **Robust:** may be consumed a wide variety of user agents and assistive technologies

---

# Exercise 1

The W3C-WAI provides an **[extensive reference guide](https://www.w3.org/WAI/WCAG20/quickref/)** for satisfying WCAG 2.0 Guidelines (which serve as the foundation for much of the legislation mandating web accessibility).

WebAIM has also summarized these guidelines in a [checklist](http://webaim.org/standards/wcag/checklist).

Working in small groups, you will be assigned one of the principles and will put together a short presentation explaining the principle's related guidelines to the class.

Be creative with this! Feel free to use visuals, demos, or other teaching aids for your mini-lesson.

---
template: inverse

# Assistive Technologies and Testing Tools

---
class: center, middle

.large[
   Checklists are an important tool but there's no substitute for real testing!
]

---
class: center, middle

.large[
   First, we must understand what kind of impairments assistive technologies are meant to support...
]

---

# Types of Impairments

- Pain, flexibility, or mobility (over 11% of Canadians experience at least one of these three)
- Dexterity (3.5% of Canadians)
- Visual (2.7% of Canadians)
- Hearing (3.2% of Canadians)
- Memory or learning (2.3% of Canadians for each)

*Source: [Statistics Canada](http://www.statcan.gc.ca/pub/89-654-x/89-654-x2013002-eng.htm)*

---

# Types of Impairments

Note that **not all impairments are permanent!**

Can you think of a recent experience you had where your ability to access a website was compromised due to your environment, or some other temporary type of impairment?

*Optimizing for permanent impairments also empowers those with temporary impairments.*

---

# Assistive Technologies

- Screen readers
- High contrast mode and page zoom
- Track balls, switch devices, and joysticks
- Voice controls
- Braille keyboards
- ...and more!

---
class: center, middle

.large[
   We'll mostly talk about optimizing for screen readers in this lesson, but in doing so we'll also be optimizing for other assistive technologies.
]

---

# Screen Readers

A few popular options:

- VoiceOver (pre-installed on Macs)
- [NVDA](http://www.nvaccess.org/) (Windows screen reader application)
- [Chrome Vox](http://www.chromevox.com/) (Chrome extension)

WebAIM's articles on using screen readers as evaluative tools:

- [VoiceOver](http://webaim.org/articles/voiceover/)
- [NVDA](http://webaim.org/articles/NVDA)


---
class: center, middle

**Basic VoiceOver Keyboard Commands:**

Action               | Keyboard Command
-------------------- | --------------------
Enter/Exit VoiceOver | `⌘ + F5`
Enter Web Page       | `CRTL + ⌥ + ↓`
Exit Page            | `CTRL + ⌥ + ↑`
Read All             | `CTRL + ⌥ + A`
Pause VoiceOver      | `CTRL`

---
class: center, middle

**Web Rotor VoiceOver Keyboard Commands:**

Action                  | Keyboard Command
----------------------- | -------------------
Open Web Rotor          | `CTRL + ⌥ + U `
Change panes            | `←` and `→`
Activate element        | `CTRL + ⌥ + Spacebar`
Move forward by heading | `CTRL + ⌥ + ⌘ + H`
Move back by heading    | `CTRL + ⌥ + ⌘ + ⇧ + H`
Spell a word out        | `CTRL + ⌥ + W`

**[More commands can be found here.](http://accessibility.psu.edu/screenreaders/voiceover/)**

---

# More Tools

Some Chrome extensions and other tools to assist with accessibility testing:

- [Accessibility Developer Tools](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb)
- [Pa11y](http://pa11y.org/)
- [tota11y](http://khan.github.io/tota11y/)

---

# Exercise 2

Let's do some accessibility testing on our Aloha projects.

First follow the instructions to **[add the tota11y script](http://khan.github.io/tota11y/)** on your Aloha site. Also **[install the Accessibility Developer Tools extension](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb)** in Chrome. Run an audit with each tool...what kinds of accessibility issues can you identify?

After running your initial audits, try using **VoiceOver or ChromeVox** to experience you site as someone using a screen reader would. Do you notice any problematic points?

*Jot down a few notes from the above tests and be ready to share them with the class.*

---
template: inverse

# Semantics

---
class: center, middle

### Semantic HTML FTW!

Writing semantic HTML makes your website will be very accessible right out of the box.

---

# DOM Semantics

Many DOM elements already have meaning baked into them. Consider the `label` element:

```html
<label>
   First Name: <input type="text" name="first_name" />
</label>

<label for="terms">I agree to the terms and conditions</label>
<input type="checkbox" name="terms" id="terms" />
```

We could easily use a `p` element instead of a `label` our document would still be valid, but as front-end developer we always want to make sure we pick the most semantically correct tool for the job!

---

# Accessibility Tree

- The **accessibility tree** is a modified version of the DOM tree
- It is the tree of accessible objects that represents the structure of the UI
- Each node in the accessibility tree represents an element in the UI as exposed through the accessibility API (e.g. a button or checkbox)
- You can view the accessibility tree in Chrome here: [chrome://accessibility/](chrome://accessibility/)

---

# Accessible Headings

Some tips for creating accessible headings and sub-headings:

- Headings are essential for good screen reader navigation
- Again, DOM order matters!
- The level of the heading should indicate its actual prominence in the document (and not be selected for style reasons)

---

# Accessible Links

Some tips for creating accessible links:

- Links should be created using `a` elements so they show up in the screen reader's link list
- Links that behave like buttons should just be buttons (e.g. `<a href="#">`)
- Images wrapped in links should have `alt` text
- The purpose of each link should be determinable from the link text alone (e.g. a "Learn More" link doesn't really describe what you're learning more about)

---

# Landmark Elements

Screen readers allow users to browse content by landmark elements. Choose your landmark HTML5 elements wisely:

- `<main>` (should only be one!)
- `<header>` / `<footer>`
- `<nav>`
- `<article>`
- `<section>` (should have a heading)
- `<aside>`

---
class: center, middle

### Text Alternatives

For our websites to be perceivable to those using assistive technologies, we must make sure that we provide text-based alternatives to non-text content.

---

# Using Alt Text

- Make sure you include `alt` text (otherwise a screenreader will say the image file name)
- Alt text should describe the nature or contents of the image
- Note that `alt` ≠ `title` ≠ `<figcaption>`
- Also note that an setting `alt=""` on an image will remove it from the accessibility tree

---

# Other Considerations

- Controls that accept user input should have a name that describes its purpose (so label your form elements!)
- Be careful with CAPTCHA
- Provide captions or transcripts for audio or video recordings
- Don't use images of text where real text can be used
- Purely decorative elements should be hidden from assistive technology (with CSS or using null `alt` text)

---
class: center, middle

.large[
   Considering semantics also means deciding what content should be available to assistive technologies while being removed from the visual display of the page.
]

---

# Screen Reader Text

You may want to create a helper class to make certain text on your webpage only available to those using a non-visual methods to access it (e.g. certain form labels).

This approach is recommended by the [WordPress Core team](https://make.wordpress.org/accessibility/2015/02/09/hiding-text-for-screen-readers-with-wordpress-core/):

```css
.screen-reader-text {
   clip: rect(1px, 1px, 1px, 1px);
   position: absolute !important;
   height: 1px;
   width: 1px;
   overflow: hidden;
}
```

Note that we can't use `display: none;` or `visibility: hidden;` because this would hide the text from all devices.

---

# Screen Reader Text

In some rare cases (one of which we'll see in a moment), it may be necessary to bring your hidden text into view when it receives keyboard focus.

To override your the clipped content styles on focus, target the `:focus` pseudo-class on your screen reader class:

```css
.screen-reader-text:focus {
   clip: auto !important;
   display: block;
   height: auto;
   left: 5px;
   top: 5px;
   width: auto;
   z-index: 100000; /* above all content */
}
```

---

# Generated Content

Use the `content` property to add decorative text-based elements instead of adding them directly to your mark-up. In this example, a screen reader would read this content as "Read more right-pointing triangle":

```html
<a href="/my-blog-post/" class="read-more">Read the article &#9654;</a>
```

Use a pseudo-element for this decorative feature instead:

```html
<a href="/my-blog-post/" class="read-more">Read the article</a>
```

```css
.read-more:after {
   content: "\25b6";
}
```

---

# Mini-Exercise

Add a screen reader helper class (with a `:focus` pseudo-class) to your Aloha project now.

We'll be using this class on a new element that we create in the next part of the lesson.

---

# Exercise 3

In a Codepen, refactor this snippet of code to be more semantic, accessible HTML:

```html
<div>
  <div><strong>All About Kittens</strong></div>
  <img src="http://placekitten.com/300/200" alt="kitten" />
  <div>Learn all you ever wanted to know about kittens and more! <span onclick="location.href='all-about-kittens.html';" style="cursor: pointer; color: blue; text-decoration: underline;">Continue reading &rarr;</span></div>
</div>
```

---
template: inverse

# Focus

---

# What is Focus?

- Focus is **where keyboard events go in the page**
- The `tab` key moves focus forward
- Use `⇧ + tab` to move focus back
- Use the arrow keys to move within a focused element

---

# About Focus

- **Not all elements are focusable** (there's no point focusing an element if the user can't interact with it)
- **DOM order matters** because tab order will correspond to it
- CSS can manipulate the visual order of elements (e.g. using floats or flexbox) so **test your tab order** and make sure it doesn't create any accessibility impediments for your users
- Optimizing focus means that your tab order **must be logical**

---
class: center, middle

### What does `tabindex` do?

By default, the natural tabbing order of a webpage will match the structural order of its DOM elements.

The `tabindex` global attribute will indicate **if an element is focusable** and also defines **the order** that users will follow when they tab through a page.

---

# Modifying Tab Focus

When you need to modify your tab order you can use the `tabindex` attribute for this:

- `tabindex = -1`: can be programmatically focused but removed from the keyboard tab order
- `tabindex = 0`: can be programmatically focused and reachable by the keyboard in the natural tab order
- `tabindex >= 0`: as above but its relative order is defined by the value of the attribute (somewhat of an anti-pattern!)

---

# Focus Best Practices

- ARIA design patterns can help you add keyboard support to your custom components (more on that to come...)
- Watch out for keyboard traps (i.e. when an element becomes focused and there's no way to advance)
- Handle off-screen content appropriately (remember that `display:none` or `visibility:hidden` will stop focus from moving into an element)

---
class: center, middle

### Improving A11Y with Skip Links

The top of webpage often contains a number of elements that a user would need to tab through before reaching the main content (e.g. the site navigation).

**Skip links** can help users bypass long lists of links to access the main content area immediately.

---

# Using Skip Links

To implement a skip link, we'll use what we learned about using a class to hide off-screen content with `tabindex`:

```html
<a class="screen-reader-text" href="#main">Skip to content</a>

<main id="main" class="site-main" tabindex="-1">
   <p>Hello, world!</p>
</main>
```

```css
/* Prevent the default blue outline... */
/* ID selector forces high specificity! */

#main[tabindex="-1"]:focus {
   outline: 0;
}
```

**Question:** Why do we use a `tabindex` of `-1`?

---

# Skip Link Bug Fix

A pure HTML/CSS skip link implementation may be buggy in some browsers (i.e. the browser will not properly focus the target area when the skip link is selected).

To fix properly apply focus to the target content area, we can use this simple jQuery patch:

```js
// Fix "Skip Link" Focus in Webkit

$(function() {
   $("a[href^='#']").not("a[href='#']").click(function() {
      $("#"+$(this).attr("href").slice(1)+"").focus();
   });
});
```

A more robust, [non-jQuery solution may be found here](https://github.com/Automattic/_s/blob/master/js/skip-link-focus-fix.js).

---

# Exercise 4

Now we're going to **implement a skip link** on our Aloha projects.

Implement a skip link as previously instructed, test it, and add a bit of extra CSS to style the link so that it visually matches the site branding when revealed to sighted users.

---
template: inverse

# ARIA

---

# What is ARIA?

- ARIA stands for **Accessible Rich Internet Applications**.
- ARIA is meant to provide a set of tools for developers creating custom web components that will make web content and application functionality more accessible.
- Note that ARIA **does not** add new functionality to a webpage&mdash;it's simply meant to act as an additional descriptive layer for assistive technologies.

---

# Why ARIA?

- Native HTML give us a lot of built-in semantics for free, but it's not always enough (especially when building modern JS-based web applications)
- ARIA helps us **modify the accessibility tree**
- ARIA also allows us to **express more complex relationships** in our code than the typical parent/child/sibling relationships we're used to with HTML

---

# ARIA Attributes

ARIA ultimately consists of **a set of attribute names and values** that allow us to add a descriptive layer to our webpages. Specifically, we have:

- **[Role attributes](http://www.w3.org/TR/wai-aria/roles)**
- **[State and property attributes](http://www.w3.org/TR/wai-aria/states_and_properties)**

---

# Roles

Put plainly, these roles are shorthand for a particular UI pattern. These roles fall into four categories:

- **[Abstract](https://www.w3.org/TR/wai-aria/roles#abstract_roles)** (not used in webpage content)
- **[Widget](https://www.w3.org/TR/wai-aria/roles#widget_roles)** (for naming UI "widgets")
- **[Document Structure](https://www.w3.org/TR/wai-aria/roles#document_structure_roles)** (describe content, and are not usually interactive)
- **[Landmark](https://www.w3.org/TR/wai-aria/roles#landmark_roles)** (for navigational landmarks in the page)

*But we can't invent the roles ourselves&mdash;we have to pick from a finite, set vocabulary...*

---

# Exercise 5

You will be assigned an ARIA role to investigate. Refer to the W3C's documentation (linked in the lesson slides) on ARIA roles to determine:

- What your element is for
- How it can and cannot be used

You will then share your findings with the class.

---

# Using Roles

If we wanted to show a banner on a webpage to let the user know what they are logged in, we could use this code:

```html
<div id="status" role="alert" class="logged-in">
   <p>You are logged in.</p>
</div>
```

Note that we **do not use ARIA roles redundantly** by redefining default semantics. For example:

```html
<!-- DO NOT DO! -->
<main role="main">Main content...</main>

<nav role="navigation">
   <a href="/prev-posts">&larr; Previous Posts</a>
</nav>
```

---

# Properties and States

ARIA properties describe and element's **relationships** with other elements (e.g. `aria-labelledby`). States describe some **dynamic quality** of an element (e.g. `aria-disabled`).

States and properties attributes can be categorized as:

- **[Widget](https://www.w3.org/TR/wai-aria/states_and_properties#aria-expanded)** (attributes specific to common UI elements)
- **[Live Region](https://www.w3.org/TR/wai-aria/states_and_properties#attrs_liveregions)** (used where content may change in real time)
- **[Drag-and-Drop](https://www.w3.org/TR/wai-aria/states_and_properties#attrs_dragdrop)** (for drag and drop interfaces)
- **[Relationship](https://www.w3.org/TR/wai-aria/states_and_properties#attrs_relationships)** (expresses relationships not easily deduced from the document structure)

---

# Using Properties/States

If we wanted to create an accessible hamburger menu icon (from Font Awesome) for a responsively designed website, we could do something like this:

```html
<button aria-label="menu">
   <i class="fa fa-bars" aria-hidden="true"></i>
</button>
```

In this example, what functions do you think `aria-label` and `aria-hidden` serve for us?

---

# Using Properties/States

Another cool feature of ARIA is the ability to "live regions" to our documents so that assistive technology will know to provide an update to the user when its content changes:

```html
<div id="status" role="alert" aria-live="polite" class="online">
	<p>You are online.</p>
</div>
```

You can set the `aria-live` property to be `off`, `polite`, or `assertive`.

---

# Roles and Properties

Roles and properties in action together (from [Bootstrap](http://getbootstrap.com/javascript/#tabs)):

```html
<!-- Nav tabs -->
<ul class="nav nav-tabs" role="tablist">
   <li role="presentation" class="active">
      <a href="#home" aria-controls="home" role="tab">Home</a>
   </li>
   <li role="presentation">
      <a href="#profile" aria-controls="profile" role="tab">Profile</a>
   </li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
   <div role="tabpanel" class="tab-pane active" id="home">...</div>
   <div role="tabpanel" class="tab-pane" id="profile">...</div>
</div>
```

*Describe in words what you think this code does...*

---
class: center, middle

### ARIA Pro Tip

We only need to add ARIA attributes to the parts of the page that actually need to be exposed by accessibility APIs!

---

# Exercise 6

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
template: inverse

# Styling for Accessibility

---

# CSS & Accessibility

Beyond what we've already discussed, there are a few things we'll want to keep in mind when writing CSS for accessible websites:

1. Colour and contrast
2. Optimizing `:focus` styles
3. Using CSS attribute selectors with ARIA
4. Optimizing for mobile

---

# Colour and Contrast

- We need to maintain an adequate **contrast ratio** of at least **4.5:1** for body text and **3:1** for heading text (use a11y dev tools to calculate this)
- **Don't convey meaning with colour alone** as 1/12 men and 1/200 women experience some form of colour blindness (use [No Coffee](https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl) or [Color Oracle](http://colororacle.org/) to simulate these)
- Use **underlines to denote links** in your text.
- Test your website when viewed in **high contrast mode** (use the [High Contrast extension](https://chrome.google.com/webstore/detail/high-contrast/djcfdncoelnlbldjfhinnjlhdjlikmph) for this)

---

# Focus Styles

By default we can override a browser's default focus style with:

```css
*:focus {
   outline: 0; /* major anti-pattern if we don't write alt styles! */
}
```

But if we do this we **must write CSS to add alternative focus styles** that match the branding of the website.

We also need to make sure that we write focus style rules for our various **ARIA states**, and ensure that our custom focus styles are visible to those who are colour blind.

---

# Attribute Selectors

Use attribute selectors to write CSS specific to ARIA attributes:

```css
[role=tab] {
	display: inline-block;
}
[role=tab][aria-selected=true] {
	background: tomato;
}
[role=tabpanel] {
	display: none;
}
[role=tabpanel][aria-expanded=true] {
	display: block;
}
```

Doing so makes for **more semantic CSS rules**, and **cuts down on mark-up bloat** by saving us from adding unnecessary classes or IDs to target the same styles at these elements.


---

# Optimizing for Mobile

**Zooming:**

The `meta` tag we learned about in the RWD lesson is also helpful for users who need to zoom into websites in desktop browsers due to visual impairments:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Also, never set `user-scalable=no` in the `content` attribute. This is bad for accessibility, and UX generally!

---

# Optimizing for Mobile

**Touch Targets:**

- Use appropriately sized touch targets (i.e. buttons, links, tappable icons, etc.) to they are easy to press.
- Touch targets should be at least `48dp` (device-independent pixels). This is ~9mm, or about the size of a finger pad.
- You can add padding around your touch targets if they are smaller than this to increase tappable area.
- Also add at least `32dp` of margin around any touch target.

---

# What We've Learned

- What accessibility is and why it's important
- How assistive technologies work
- How to evaluate the accessibility of our websites
- How to write semantic mark-up with an eye for accessibility
- How to optimize for keyboard tabbing and focus
- What ARIA is and how it works
- How to write CSS with accessibility in mind

---
template: inverse

# Questions?

{% endhighlight %}
