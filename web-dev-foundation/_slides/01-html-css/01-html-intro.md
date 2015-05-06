---
layout: slidedeck
title: Intro to HTML Slideshow
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to HTML

.title-logo[![Red logo](../../public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. What is a Mark-up Language
2. HTML Tags and Syntax
3. Tags with Attributes/ Nested Tags
4. Importance of Root Folder
5. File & Folder Naming Recommendations
6. Doctypes
7. Role of Browser

---
template: inverse

# What is HTML
Hyper Text Markup Language
---

## HTML Terminology
**Hypertext**  is  a  system  of  clickable  text  links  that  let  you  view  information  in  a  non‐linear  way.    The  hypertext term has been updated to also include a non‐text link, such as a image or a button. Note that links  don’t  necessarily  always  get  you  to  another page,  a  hyperlink can also be set-up to run a script that can play a video or sound, or make something happen dynamically.

---
## HTML Terminology

**Markup** is a term that refers to how text is supposed to be presented in the browser by way of placing different combination of tags around the text.  
---
template: inverse
class: center, middle

## Using HTML Tags

HTML tags are surrounded with square brackets and that is how they are distinguished from the text that we see on a webpage.  HTML tags are what web browsers read to interpret the code into the visual format  and  layout  of  a  web  page.  The  process  of  adding  tags  around  page  elements  to  modify  their  visual properties is called marking up, hence “mark‐up language”.  

---
class: center, middle

### Basic HTML Tags

```html
<p> content </p>
```

---


class: center, middle

### Tags with Attributes

```html
<p class="reditalics"> content </p>
```

---

class: center, middle

### Nested Tags (multiple tags)

```html
<p><em> content </em></p>
```

---

template: inverse

# Why Should I Use JavaScript?

---
class: center, middle

> "There are two answers. The first is that you don't have a choice...The other answer is that, despite it's deficiencies, *JavaScript is really good*."

From "JavaScript: The Good Parts"

---
template: inverse

# But What Is It for Exactly?

---
class: center, middle

.large[
   **HTML** &rarr; the content layer

   **CSS** &rarr; the presentation layer

   **JS** &rarr; the behaviour layer
]

---

(Need graphic to illustrate the previous concept)

---

# Client-side / Server-side

- Client-side scripts run in the **browser**
- For the most part, JS is the only client-side script today
- Server-side scripts run on a **server**
- PHP, Ruby, and Python run on the server side
- But JS can run server-side as well today using Node.js...

---

template: inverse

# Fin!

{% endhighlight %}
