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
6. Differences in Doctypes
7. HTML5 Layout Tags
8. Common HTML Tags

---
template: inverse

# What is HTML
##Hyper Text Markup Language
---

## HTML Terminology
**Hypertext**  is  a  system  of  clickable  text  links  that  let  you  view  information  in  a  non‐linear  way.    The  hypertext term has been updated to also include a non‐text link, such as a image or a button. Note that links  don’t  necessarily  always  get  you  to  another page,  a  hyperlink can also be set-up to run a script that can play a video or sound, or make something happen dynamically.

---
## HTML Terminology

**Markup** is a term that refers to how text is supposed to be presented in the browser by way of placing different combination of tags around the text.  
---

## Using HTML Tags

HTML tags are surrounded with square brackets and that is how they are distinguished from the text that we see on a webpage.  HTML tags are what web browsers read to interpret the code into the visual format  and  layout  of  a  web  page.  The  process  of  adding  tags  around  page  elements  to  modify  their  visual properties is called marking up, hence “mark‐up language”.  

---
class: center, middle

### Basic HTML Tags

`<p> content </p>`

This is an example of a basic tag, with its start tag and end tag.
---

class: center, middle

### Tags with Attributes

`<p class="red_italics"> content </p>`

This is an example of a tag with an attribute, note that only the start tag contains the attribute.
---

class: center, middle

### Nested Tags (multiple tags)


`<p><em> content </em></p>`

This is an example of a nested tag. It uses 2 or more tags that are nested together, like the Russian *Matryoshka* dolls.

![Russian Nesting Dolls](../../public/img/slide-assets/russian_nested_dolls.jpg)
---

template: inverse

# Importance of the Root Folder

---
class: center, middle

##One Root Folder = One Site

It  is  a  common  practice  to  create  a  folder  on  your  computer  (in  a  location  that  is  easy  to  access  and  remember)  that  will  contain  **ALL**  the  web files ***(HTML, CSS, images, scripts etc)*** that are used  to  build  your  webpage.    This  folder  is  known as  the  **root folder**. You can name it anything you'd like and it can contain any number of sub‐folder in which to organize the web files further. 

---
class: center, middle

![Root Folders](../../public/img/slide-assets/basic-root-folder.png)

---

## Create New New Root Folder for A Different Website
It is highly recommended  that  you  create  a  new  root  folder  for  every  different  website  that  you’re  working  on.  However, you can continue working with the same root folder when you are building on an existing site.

![Root Folders](../../public/img/slide-assets/two-root-folders.png)

---

template: inverse

# Root Folder Best Practices

---
class: center, middle

##Preparing Content for the Root Folder
Creating HTML webpages requires some planning ahead of time of what you are planning to put in your page, and especially with media files, such as picture, graphics, sound, movies,  they  need  to  be  placed  in  their  respective  folders  or  sub‐folders before you plan to link them in your HTML file.  Many linking issues will arise if the desired media file is not placed in the root folder before it is referenced.

---

## File & Folder Naming Recommendations
- Stick to lowercase consistently
- Do not use SPACES in your file names, instead use hyphens- or underscores_
to separate words
- Do not use any symbols (such as #@*&><) in your file name
- Choose a logical, descriptive, and standard convention names
- Stick either to .html or .htm, but don’t flip‐flop between them


---
template: inverse
#Key Differences in Doctype of XHTML/HTML5
---
class: center, middle

##Differences in Doctype of XHTML/HTML5

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

.inline-images[![HTML5 example layout](../../public/img/slide-assets/html5_semantic_tags.png)]
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
##Block Level Elements
- Notice that when you use paragraphs and headings, they will start on a new line.
<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/WvpzZQ/?height=268&theme-id=0&default-tab=html' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/WvpzZQ/'>WvpzZQ</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

---
##Inline Elements
- Notice that when you use emphasis or bold tags, that this continue on the same line.
- We use tags like bold or italics or **span** tags to apply CSS class properties as inline elements.

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/dovmZg/?height=268&theme-id=0&default-tab=html' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/dovmZg/'>dovmZg</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

---

template: inverse

# Fin!

{% endhighlight %}
