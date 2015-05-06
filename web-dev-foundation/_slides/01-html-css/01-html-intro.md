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

class: center, middle

## Using HTML Tags

HTML tags are surrounded with square brackets and that is how they are distinguished from the text that we see on a webpage.  HTML tags are what web browsers read to interpret the code into the visual format  and  layout  of  a  web  page.  The  process  of  adding  tags  around  page  elements  to  modify  their  visual properties is called marking up, hence “mark‐up language”.  

---
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
class: center, middle

> It  is  a  common  practice  to  create  a  folder  on  your  computer  (in  a  location  that  is  easy  to  access  and  remember)  that  will  contain  ALL  the  files  used  to  build  your  webpage.    This  folder  is  called  the  *Root folder* and can contain any number of sub‐folder in which to organize the web files further. 


---
class: center, middle
> It is highly recommended  that  you  create  a  new  root  folder  for  every  different  website  that  you’re  working  on.  However, you can continue working with the same root folder when you are building on an existing site.

---

template: inverse

# Root Folder Best Practices

---

>Creating HTML webpages requires some planning ahead of time of what you are planning to put in your page, and especially with media files, such as picture, graphics, sound, movies,  they  need  to  be  placed  in  their  respective  folders  or  sub‐folders before you plan to reference/(link) them in your HTML file.  Many linking issues will arise if the desired media file is not placed in the root folder before it is referenced.

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
