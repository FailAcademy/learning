---
layout: slidedeck
title: Intro to CSS Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to CSS

.title-logo[![Red logo](../../public/img/red-logo-white.svg)]

---
layout: false

# Agenda
1. What is CSS?
2. Writing CSS Statements
3. What is Cascading Order/Specificity Mean?
4. CSS Selectors
5. CSS Classes and IDs
6. Browser Development Tools
7. What is the CSS box model 

---
template: inverse

# What is CSS?
##Cascading Style Sheets
---

## Definition
**CSS** is the code that styles HTML elements in webpages, specifying their visual appearance and positioning.

---
template: inverse

# Writing CSS Statements
---

## CSS Statement Example

```css

p {
font-family: Helvetica, Arial, sans-serif;
color: blue;
}

```
---
template: inverse

# Cascading Order

---
Use image to illustrate previous topic.
---
template: inverse

# Internal vs External CSS

---
## Internal CSS
- This type of style is applied to just single pages
- The style is placed within the head section of the html page

## External CSS
- This type of stylesheet is applied to multiple pages in the same site
- Allows for easy updating site wide
- Content is clearly separated from style

---
## Specificity

The more specific rules will take priority over the more general css rules. 
- !Important overrides previous same style
- Inline styles
- Selector Specificity
- Last Rule

---

## Inheritance

Inheritance is when styles get **inherited** by child elements from the parent element. This saves a lot of time rather than specifying the same styles for every element used. 

---
# CSS Selectors


---
# CSS Custom Classes 
---

# CSS IDs

---
template: inverse

# Title

---

---

template: inverse

# Fin!

{% endhighlight %}
