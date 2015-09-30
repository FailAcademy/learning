---
layout: slidedeck
title: Web Apps and JS Frameworks Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Web Applications & Javascript Frameworks

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. A brief history of websites
2. PHP and the birth of the dynamic web
3. Enter Javascript
4. What is a Framework?
5. Framework sleuth

---
template: inverse

#What is a website?
---
class: center, middle

Strictly speaking, a website is a collection of web pages (HTML, CSS, and JavaScript files), that are accessible over the Internet, via HTTP at a given URL.
<br><br>
But this is not a very useful description. The term 'website' has a more subtle meaning to web developers, which we'll discover today.

---
class: center, middle

###All of the projects we've built so far in class are good examples of traditional 'websites', in that they're main use case is presentational.
<br>
###They are functionally different from 'web applications', e.g. Slack.

---

class: center, middle

# So, what is a Web Application?
(hint: it's just a website)

---

template: inverse

#A Brief History of Websites

---

#Enter `<?php ?>`
For our purposes, it serves to start our tour at PHP. Although there were other languages that could be used to create websites before PHP, such as Perl (Facebook was originally written using Perl), asp, cgi ...etc, the introduction of PHP had a revolutionary effect on the course of the Internet.

---
class: center, middle

###What about HTML, CSS and JS ?
PHP is a 'server-side' scripting language that works alongside these other technologies and allows for the creation of 'dynamic' web pages by enabling developers to generate content based on, for example, data in their databases.

---
#Example
```html
<html>
 <head>
  <title>PHP Test</title>
 </head>
 <body>
 <?php echo '<p>Hello World</p>'; ?>
 </body>
</html>
```
The code inside `<?php ?>` is actually executed by the **server** when the page containing this html is requested! This is different from anything we've seen in the course up until now, and it's key to understanding why php is important.
<br>
We're going to learn all about PHP later in the course, so I'll stop there :)

---

Let's get a feeling for client-server communication.
We'll need voulenteers:
- PHP enabled server
- Database
- Client
- User
- Web request
- Web response
- Mr. Data

---
#Who is PHP?

Facebook is powered by PHP <br>
(albeit their own sophisticated version)
<br>
<br>
Wordpress is powered by PHP. <br>
The development of WOrkdpress is undoubtedly responsible for the popularity and widespread use of php.

---

###PHP ushered in the 'dynamic web'
Suddenly, web pages could do all sorts of interesting things because of this tight integration between the user-interface (web pages) and the server-side code & hardware.

---

####A number of other factors influenced the popularity of PHP, an thus the dynamic web:
- The introduction of 'e-commerce': the ability to credit cards online via web forms.
- It's free and easy to install and run (you don't need complicated compilers/proprietary software).
- It's easy to connect to a database (SQL is built in)
- It's easy to learn, 'dynamic' language, lets you prototype ideas quickly without worrying about 'correctness', or type systems ... etc which are components of other popular 'static' programming languages.

---

template: inverse

#Enter JavaScript

---

template: center, middle

PHP worked great for creating web content that was dynamic, and enabled revolutionary advancements like e-commerce and self-publishing (blogs), but as websites became more capable in their functionality, so too did the scope of what had to be done in their user interfaces! The best sites were by their nature highly interactive, and this posed a problem for interface-designers.

---

template: center, middle

---
.left-column[
  ## Column Layout
]

.right-column[
You can make two-column layouts as well.red[*] in a slideshow!

A sample unordered list:

- List item 1
- List item 2
- List item 3

.footnote[.red[*] And add footnotes too]
]

---

# Syntax Highlighting

```html
<!-- A bit of sample HTML with syntax highlighting-->

<html>
   <head>
      <title>An Awesome Website</title>
   </head>
   <body>
      <h1>Hello world again!</h1>
      <p class="my-class">Just a little bit of sample code.</p>
   </body>
</html>
```

---

.left-column[
  ## Remark How-tos
]

.right-column[
   This slideshow is based on [remark.js](https://github.com/gnab/remark).

   To learn more about building a slideshow with remark, check out:

   - [The remark formatting guide](https://github.com/gnab/remark/wiki/Formatting)
   - [The remark Markdown guide](https://github.com/gnab/remark/wiki/Markdown)
]

---

# What We've Learned

- Thing 1
- Thing 2

---
template: inverse

# Questions?

{% endhighlight %}
