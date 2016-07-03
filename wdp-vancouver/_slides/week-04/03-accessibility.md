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
3. Optimizing focus
4. Leveraging semantics
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

Working in small groups, you will be assigned one of the principles and put together a short presentation explaining the principle's related guidelines to the class.

Be creative with this! Feel free to use visuals, demos, or other teaching aids for your mini-lesson.

---
template: inverse

# Assistive Technologies and Testing Tools

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
- High contrast mode
- Track balls
- Joystick
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

# Other Tools

Some Chrome extensions to assist with accessibility testing:

- [Accessibility Developer Tools](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb)
- [Pa11y](http://pa11y.org/)
- [tota11y](http://khan.github.io/tota11y/)

---

# Exercise 2

Let's to do some accessibility testing on our Aloha projects.

First follow the instructions to **[add the tota11y script](http://khan.github.io/tota11y/)** on your Aloha site. Also **[install the Accessibility Developer Tools extension](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb)** in Chrome. Run an audit with each tool...what kinds of accessibility issues can you identify?

After running your initial audits, try using **VoiceOver or ChromeVox** to experience you site as someone using a screen reader would. Do you notice any problematic points?

*Jot down a few notes from the above tests and be ready to share them with the class.*

---
template: inverse

# Semantics

---
template: inverse

# Focus

---

# What is Focus?

- Focus is where keyboard events go in the page
- The `tab` key moves focus forward
- Use `⇧ + tab` to move focus back
- Use the arrow keys to move within a focused element

---

# Notes on Focus

- Not all elements are focusable (there's no point focusing an element if the user can't interact with it)
- DOM order matters because tab order will correspond to it
- CSS can manipulate the visual order of elements (e.g. using floats or flexbox) so test your tab order and make sure it doesn't create any accessibility impediments for your users

---

# Modifying Tab Focus

Sometimes you need to modify your tab order&mdash;we can use the `tabindex` attribute for this:

- `tabindex = -1`: can be focused but removed from the keyboard tab order
- `tabindex = 0`: can be focused and reachable by the keyboard in the natural tab order
- `tabindex >= 0`: as above but its relative order is defined by the value of the attribute (somewhat of an anti-pattern!)

---

Optimizing focus means that your tab order must be logical

---

Testing the tab order of your headings

```js
for (var i = 0, headings = $$('h1,h2,h3,h4,h5,h6');

i < headings.length; i++) {
   console.log(headings[i].textContent.trim() + " " +  
      headings[i].tagName,
      headings[i]);
}
```

---
class: center, middle

.large[
   Checklists are an important tool but there's no substitute for real testing!
]

---
template: inverse

# ARIA

---
template: inverse

# Styling for Accessibility

---

# What We've Learned

- Thing 1
- Thing 2

---
template: inverse

# Questions?

{% endhighlight %}
