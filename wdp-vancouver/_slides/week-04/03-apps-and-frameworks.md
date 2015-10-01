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
5. Single Page Applications (SPA)
6. Framework sleuth

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
**PHP is a 'server-side' scripting language** that works alongside these other technologies. It enables developers to create 'dynamic' web pages by enabling developers to generate content based on, for example, data in their databases.

.footnote[Terminology: Dynamic, Static, Server-side]



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
The code inside `<?php ?>` is actually executed by the **server** when the page containing this HTML is requested! This is different from anything we've seen in the course up until now, and it's key to understanding why PHP is important.
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

**Facebook is powered by PHP** <br>
(albeit their own sophisticated implementation)
<br>
<br>
**Wordpress is powered by PHP** <br>
Wordpress is the single most used platform on the web.


.footnote[Terminology: Platform, Implementation]

---

###PHP ushered in the 'dynamic web'
Suddenly, web pages could do all sorts of interesting things because of this tight integration between the user-interface (web pages) and the server-side code & hardware.

---

####A number of other factors influenced the popularity of PHP, an thus the dynamic web:
- The introduction of 'e-commerce': the ability to credit cards online via web forms.
- It's free and easy to install and run (you don't need complicated compilers/proprietary software).
- It's easy to connect to a database (SQL is built in)
- It's easy to learn, 'dynamic' language, lets you prototype ideas quickly without worrying about 'correctness', which is a feature of 'static' programming languages.


.footnote[Terminology: Static language]

---

template: inverse

#Enter JavaScript

---

##Why is JavaScript so great?
Modern JavaScript is a powerful programming language that runs on a large number of platforms.
It has a very wide user-base, which means that a lot of people are using it, developing resources, and making improvements to the language and so on.
Similar to PHP, the barriers to entry for starting to program in JavaScript are very low. It's already running in your browser, you just have to open your console and start typing!
And, thanks to Node.js, you can run JavaScript outside the browser, directly from your OS! (Let's install it now!)

---

class: center, middle

###So...
PHP worked great for creating web content that was dynamic, and enabled revolutionary advancements like e-commerce and self-publishing (blogs).
<br>
As websites became more capable in their functionality, so too did the scope of what had to be done in their user interfaces! The best sites were by their nature highly interactive, and this posed a problem for interface-designers.

---

###...
The technology for creating user-interfaces on the web is cumbersome, as we've experienced with HTML and CSS.
Advancements in CSS, animations, transitions and 3D have made it possible to do some interactivity, but ultimately, JavaScript must be used to fill in the blanks.

---

###...
This is where libraries like JQuery come into play. They give us a very useful set of tools for creating interactions in web pages. Responding to events, inserting and removing and animating elements...
JQuery is so popular and effective that developers have created 1000's of useful extensions to it's API called JQuery plugins.
<br>
Lets look at some now! http://www.unheap.com/

.footnote[Terminology: Library, API, Plugin]

---

#### **The Big Problem:**
With PHP, to update your user interface (the view layer) when *data* in your application changes, (for example, when a user sends a message on slack), you have to send a request for the page again, resulting in a reload of all the content (HTML, CSS, Images ..etc) on that page!

.footnote[Terminology: View layer]

---

##`$.ajax`
We've seen how the development of AJAX delivered a solution; we've seen how it can be used to fetch data and add it to our web page without reloading the page.
##Problem solved, <br> let's build web applications!?

.footnote[woaah]

---

####Unsolved mysteries
- What about changing pages, or dealing with links to other content within my application?
- What about managing the state of really complicated widgets?
- Do I always have to manually check for changes to my data and then manually update my HTML if it has?
- My project is going to be large, how should I organize my code?
...

---
template: inverse

#What is a Framework?

---

class: center, middle

These are some of the questions that Frameworks attempt to provide an answer.
JQuery gave us convenient abstractions for working with JavaScript's native DOM manipulation methods and also JavaScript's HTTP functionality.
Frameworks attempt to give us useful abstractions for structuring the code that is necessary to support the optimization and organization of our codebase.

.footnote[Terminology: State, Abstraction]

---

class: center, middle

#### **Generally:** The frameworks we're going to look are called "MVC Frameworks"
MVC is an acronym for **"Model", "View", "Controller"**. It's meant to be a helpful mental-model for thinking about specific areas of important functionality in our application code!


.footnote[This definition is very nuanced, you'll learn]

---

#"M" -> Model

'Model' loosely refers to the data in your application.
<br>
A 'Model' that is common to a wide range of applications is the User model.
<br>
A User Model is a named collection of properties and methods that relate to individual Users inside your application. for example, a User Model might have name, age, and email properties, and *methods* for changing those values.
<br>
Models also allow us to apply *rules for modifying data related to itself*.
<br>
These elements together provide us with a basic understanding of what we mean when talking about Models: **the 'M' in MVC.**

.footnote[Other examples: Account, booking]

---

#"V" -> View

'View' refers to specific user interface stets or elements.
<br>
For example, For our User Model, we have have a number of associated Views:
- The user profile view
- The edit profile view
- The user settings view
<br>
<br>
Views are usually *composable!* Made up of views and sub-views!

---

#"C" - > Controller

'Controller' refers to a specific area in your application, where you're meant to write code to coordinate the values stored in your Model, with the View that is meant to display them.
<br>
Controllers have a number of other characteristics, and the definition if fairly malleable, but for our purposes, it will serve us if we think about controllers as always being **directly associated with a View**.
<br>
For example you would define a controller to manage the User settings View. The code in this Controller would be related to managing updating the basic user settings, and it would be named accordingly, e.g. the User Settings Controller.

---

#Framework of choice

You'll soon learn that there are dozens of JavaScript Frameworks out there, and that there is a culture of hype that surrounds them. These are the heavyweights:
<br>
<br>
**Google** has built a framework: [AngularJS](https://angularjs.org/)<br>
**Facebook** has created a framework: [ReactJS](https://facebook.github.io/react/) <br>
**Ruby on Rails** core have one too: [EmberJS](http://emberjs.com/) <br>
"Everyone knows Backbone": [BackboneJS](http://backbonejs.org/) <br>
... and so on
<br>
<br>
https://en.wikipedia.org/wiki/Comparison_of_JavaScript_frameworks

---

#Exercise

Visit each of the frameworks mentioned in the previous slide. Browse through the documentation and try to discover the tools that are provided for creating Models, Views and Controllers, and how they are meant to be used together.
<br>
You're not expected to produce in depth technical details, just describe things as you see them in your own words and try to be as thorough as possible.

---

class: center, middle

http://www.allenpike.com/2015/javascript-framework-fatigue/

---
class: center, middle

#Opinionated

---
class: center, middle

#Conventional

---

template: inverse

# Questions?

{% endhighlight %}
