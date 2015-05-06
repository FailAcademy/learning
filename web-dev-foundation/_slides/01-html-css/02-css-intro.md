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

class: center, middle

### Basic HTML Tags

```html
<p> content </p>
```

This is an example of a basic tag, with its start tag and end tag.
---

class: center, middle

### Tags with Attributes

```html
<p class="red_italics"> content </p>
```
This is an example of a tag with an attribute, note that only the start tag contains the attribute.
---

class: center, middle

### Nested Tags (multiple tags)

```html
<p><em> content </em></p>
```

This is an example of a nested tag. It uses 2 or more tags that are nested together, like the russian *Matryoshka* dolls.

![Russian Nesting Dolls](http://upload.wikimedia.org/wikipedia/commons/7/71/Russian-Matroshka.jpg)
---

template: inverse

# Importance of the Root Folder

---

template: inverse

# Root Folder Best Practices

---
class: center, middle

##Preparing Content in the Root Folder
Creating HTML webpages requires some planning ahead of time of what you are planning to put in your page, and especially with media files, such as picture, graphics, sound, movies,  they  need  to  be  placed  in  their  respective  folders  or  sub‐folders before you plan to reference/(link) them in your HTML file.  Many linking issues will arise if the desired media file is not placed in the root folder before it is referenced.

---



---
template: inverse
#Key Differences in Doctype of XHTML/HTML5
---


class: center, middle

.medium[
   ***XHTML*** 
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">

   ***HTML5*** 
   <!DOCTYPE html>
]

---

template: inverse
#HTML5 Semantic Tags

---
## Useful Layout Tags##
- article
- aside
- footer
- header
- nav
- section

---
(Need graphic to illustrate the previous concept)
---
template: inverse
#Common HTML Tags
---

##Useful Tags in a Basic Page

****h1-h6**** &rarr; headings

****p**** &rarr; paragraphs

****img**** &rarr; images

****ol/ul**** &rarr; order/undordered lists

****a**** &rarr; links

****br**** &rarr; line-breaks

****table**** &rarr; tables

---
template: inverse

# Block Level Vs Inline Elements 

---


##Block Level
- Notice that when you use paragraphs and headings, they will start on a new line.
(show screen cap)
##Inline Level
- Notice that when you use emphasis or bold tags, that this continue on the same line.
(show screen cap) 
---

template: inverse

# Fin!

{% endhighlight %}
