---
layout: lesson
title: Intro to HTML
slides: ['_slides/01-html/01-html-intro.md']
---

## Recommended Reading

From the HTML & CSS textbook:

- Elements and Attributes (p. XX)

## Learning Objectives

- Explore concept of what a markup language is
- Learn the function of HTML as mark-up language and its best practices
- Install a text editor (eg. Sublime Text), use it to open & edit HTML documents
- Learn to write clean HTML, including elements, attributes, and nesting
- Use basic HTML tags including headings, paragraphs, links, and lists
- Recognize key differences between XHTML/HTML5 doctypes and tags (e.g header, section, article, footer)


## Keywords

- [Element](https://developer.mozilla.org/en/docs/Web/HTML/Element)
- [Attribute](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)
- [Doctype](http://www.sitepoint.com/web-foundations/doctypes/)

## HTML Intro
**Hypertext**  is  a  system  of  clickable  text  links  that  let  you  view  information  in  a  non‐linear  way.    The  hypertext term has been updated to also include a non‐text link, such as a image or a button. Note that links  don’t  necessarily  always  get  you  to  another page,  a  hyperlink can also be set-up to run a script that can play a video or sound, or make something happen dynamically.

**Markup** is a term that refers to how text is supposed to be presented in the browser by way of placing different combination of tags around the text.  

### Using HTML Tags

HTML tags are surrounded with square brackets and that is how they are distinguished from the text that we see on a webpage.  HTML tags are what web browsers read to interpret the code into the visual format  and  layout  of  a  web  page.  The  process  of  adding  tags  around  page  elements  to  modify  their  visual properties is called marking up, hence “mark‐up language”.  

**Basic Tags**
<tag>      content      </tag>
start tag 			   end tag

~~~
<p> This is a paragraph </p>
~~~

**Tags with Attributes**
<tag attribute=”value”> content </tag>
       start tag 			    end tag
       
~~~
<p class="red_italics"> content </p>
~~~       

**Nested Tags**
<tag1><tag2> content </tag2></tag1>

### Setting up a Root Folder ###
It  is  a  common  practice  to  create  a  folder  on  your  computer  (in  a  location  that  is  easy  to  access  and  remember)  that  will  contain  ALL  the  files  used  to  build  your  webpage.    This  folder  is  called  the  **Root folder** and can contain any number of sub‐folder in which to organize the web files further.  It is highly recommended  that  you  create  a  new  root  folder  for  every  different  website  that  you’re  working  on.  However, you can continue working with the same root folder when you are building on an existing site. 

Creating HTML webpages requires some planning ahead of time of what you are planning to put in your page, and especially with media files, such as picture, graphics, sound, movies,  they  need  to  be  placed  in  their  respective  folders  or  sub‐folders before you plan to reference/(link) them in your HTML file.  Many linking issues will arise if the desired media file is not placed in the root folder before it is referenced.   


## File & Folder Naming Recommendations ##
- Stick to lowercase consistently
- Do not use SPACES in your file names, instead use hyphens- or underscores_ 
to separate words
- Do not use any symbols (such as #@*&><) in your file name
- Choose a logical, descriptive, and standard convention names
- Stick either to .html or .htm, but don’t flip‐flop between them

## Exercise 1

Work through this activity in class:

Using this *Codepen HTML Exercise 1* (this has the doctype, body, head, title tags all set up, you won't need to add them to the code view), you will add **paragraphs & headers** to modify the text content in the passage. Consider applying italics, strong, and line-breaks for further practice.

<p data-height="268" data-theme-id="0" data-slug-hash="eNpNLw" data-default-tab="html" data-user="redacademy" class='codepen'>See the Pen <a href='http://codepen.io/redacademy/pen/eNpNLw/'>eNpNLw</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

[comment]: <> (This is a comment, it will not be included)


## Exercise 2

Work through this next activity in class:

Using this *[Codepen Exercise 2]* (this has the doctype, body, head, title tags all set up, you won't need to add them to the code view), you will add **examples of links** to modify the text content in the passage. Apply internal, external, email and anchor links to your page for further practice.

<p data-height="268" data-theme-id="0" data-slug-hash="XbmmoR" data-default-tab="result" data-user="redacademy" class='codepen'>See the Pen <a href='http://codepen.io/redacademy/pen/XbmmoR/'>XbmmoR</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


## Afternoon Lab Activity
Using the preset **HTML template** (this has the doctype, body, head, title tags all set up),  markup the text as a HTML5 document using best practices discussed in the morning using a combination of headers, sections, articles, and footer elements, as well as proper nested basic elements. 

*Match the visual example* provided as closely as possible.  You will have a chance to practice using the following tags: paragraphs, headers, line‐breaks, strong, emphasis, links as well as others that the instructor has shown in class today. There are no images are required for this exercise.   
Please save your file as: **firstname_html_assign1.html** 



## Additional Resources

- Go to these websites for more information...
