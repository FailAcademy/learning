---
layout: slidedeck
title: Web Apps and JS Frameworks Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Web Applications & JavaScript Frameworks

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. A brief history of websites
2. PHP and the birth of the dynamic web
3. Enter JavaScript
4. What is a framework?
5. Single Page Applications (SPA)

---
template: inverse

# What is a website?

---

# What Makes a Website

Strictly speaking, a website is a collection of web pages (HTML, CSS, and JavaScript files), that are accessible over the Internet, via HTTP at a given URL.

But this is not a very useful description. The term 'website' has a more subtle meaning to web developers, which we'll discover today.

---
class: center, middle

.large[
   All of the projects we've built so far in class are good examples of traditional *websites*, in that they're main use case is **presentational**.
]

---
class: center, middle

.large[
   They are functionally different from *web applications*, <br />e.g. Slack, Trello.
]

---
class: center, middle

### So, what is a web application?

Hint: It's just a website with benefits.

---
template: inverse

# A Brief History of Websites

---
template: inverse

# Static Sites

---
#Static Sites

In the parlance of web development, sites with so 'server-side' dependency are called 'static' sites, because their content does not change, unless changed by the web developer.

'Static' sites are composed of static assets.

---
template: inverse

# Dynamic sites

---

#Dynamic sites

The term 'dynamic site' encompasses a wide variety of applications. The main characteristic of a dynamic site is that content on them changes based on user interaction.

This is made possible by separate programs running in tandem on the client's computer, and on the server computer that is delivering the website, and will normally always involve a database.

---

# Enter PHP

For our purposes, it serves to start our tour of the dynamic web at **PHP**.

Although there were other languages that could be used to create websites before PHP, such as Perl (Facebook was originally written using Perl), ASP, CGI, etc., the introduction of PHP had a revolutionary effect on the course of the Internet.

---

# What About HTML, CSS and JS?

**PHP is a 'server-side' scripting language** that works alongside these other technologies.

It enables developers to **generate** content based on data in their databases.

---

# PHP in Action

The code inside `<?php ?>` is actually executed by the **server** when the page is requested:

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

This is different from anything we've seen up until now, and it's key to understanding why PHP is important. We're going to learn all about PHP later in the course, so I'll stop there :)

---

# Who Is PHP?

**Facebook is powered by PHP**

*Albeit their own sophisticated implementation...*

**WordPress is powered by PHP**

*WordPress is the single most used platform on the web.*

.footnote[**Terminology:** Platform, Implementation]

---

# The Dynamic Web

PHP ushered in the **dynamic web**.

Suddenly, web pages could do all sorts of interesting things because of this tight integration between the user-interface (web pages in the browser) and the server-side code and hardware.

---

# The Dynamic Web

A number of other factors influenced the popularity of PHP:

- **e-commerce** and the need to collect CC info with web forms
- It's free and easy to install and run (you don't need complicated compilers or proprietary software)
- It's easy to connect to a database (SQL is built in)
- It's easy to learn, **dynamic** language, lets you prototype ideas quickly without worrying about correctness, which is a feature of **static** programming languages.

.footnote[**Terminology:** Static language]

---

### Websites as Software Applications

The power of generative content, powered by server-side languages, especially php, gave us the internet as we know it: A place not just for consuming content, but for **interacting** with content, **creating and publishing content ourselves**, and conducting and orchestrating business.

---
template: inverse

# Enter JavaScript

---

#Why Is JS so Great?

Modern JavaScript is a **powerful programming language** that runs on a large number of platforms.

It has a very **wide user-base** (a lot of people are using it), developing resources, and making improvements to the language and so on.

Like PHP, JS has **low barriers to entry**. It's already running in your browser, so you just have to open your console and start typing!

And, thanks to Node.js, you can run JavaScript outside the browser, directly from your OS!

---

# So...

PHP worked great for creating web content that was dynamic, and enabled revolutionary advancements like e-commerce and self-publishing (blogs).

As websites became more capable in their functionality, so too did the scope of what had to be done in their user interfaces!

The best sites were by their nature highly interactive, and this posed a problem for interface-designers.

---

# So...

The technology for creating user-interfaces on the web is cumbersome, as we've experienced with HTML and CSS.

Advancements in CSS, animations, transitions and 3D have made it possible to do some interactivity, but ultimately, JavaScript must be used to fill in the blanks.

---

# So...

This is where libraries like jQuery come into play. They give us a very useful set of tools for creating interactions in web pages. Responding to events, inserting and removing and animating elements...

jQuery is so popular and effective that developers have created 1000s of useful extensions to its API called jQuery plugins.

Lets look at some now: [unheap.com](http://www.unheap.com/)

.footnote[**Terminology:** Library, API, Plugin]

---

# The Big Problem

With PHP, to update your user interface (the view layer) when **data** in your application changes, (e.g. when a user sends a message on Slack), you have to send **another request** for the page, resulting in a reload of all the content (HTML, CSS, Images ..etc) on that page...

.footnote[**Terminology:** View layer]

---

# Ajax

We've seen how the development of Ajax delivered a solution&mdash;we've seen how it can be used to fetch data and add it to our web page without reloading the page.

**Problem solved...let's build web applications!?**

.footnote[Whoa!]

---

# Unsolved Mysteries

- What about changing pages, or dealing with links to other content within my application?
- What about managing the state of really complicated widgets?
- Do I always have to manually check for changes to my data and then manually update my HTML if it has?
- My project is going to be large, how should I organize my code?

---
template: inverse

# What is a Framework?

---

# What Frameworks Do

These are some of the questions to which frameworks attempt to provide an answer.

jQuery gave us convenient abstractions for working with JavaScript's native DOM manipulation methods and also JavaScript's HTTP functionality.

Frameworks attempt to give us useful abstractions for structuring the code that is necessary to support the optimization and organization of our codebase.

.footnote[**Terminology:** State, Abstraction]

---
### A Popular Class of Frameworks

Many web frameworks are designed around the MVC pattern. That is to say, you'll be writing code in a repetitive way. This is done to imporve the learning curve, and allow new developers to ramp-up quickly.

MVC is an acronym for **"Model", "View", "Controller"**.

It's meant to be a helpful mental-model for thinking about specific areas of functionality in our application code!

*This definition is very nuanced, you'll learn...*

---

# M -> Model

**Model** loosely refers to the data in your application.

A common model for many apps is the **User Model**.

A User Model is a named collection of properties and methods that relate to individual users inside your application. A User Model might have name, age, and email properties, and *methods* for changing those values.

Models also allow us to apply *rules for modifying data related to itself*.

.footnote[**Other examples:** Account, Booking]

---

# V -> View

**View** refers to specific user interface stets or elements.

For example, For our User Model, we may have a number of associated views:

- The user profile view
- The edit profile view
- The user settings view
- ...etc

---

# C -> Controller

**Controller** refers to a specific area in your application where you write code to coordinate your application/widget's data with the view that is showing it to the user.

Controllers have a number of other characteristics, and the definition if fairly malleable, but for our purposes, it will serve us if we think about controllers as always being **directly associated with a view**.

For example you would define a controller to manage the User settings view. The code in this controller would be related to managing updating the basic user settings, and it would be named accordingly.

---

# Altogether Now...

Using this pattern, we have a way of separating presentation from the underlying data, so we know where to code, when we want to modify one or the other.

If you want to change the animation timing of an image slider, you'll look in the **view** layer...

If we want to change how our user data is organized, we check the **model**.

Once we're satisfied we pass the data to the **controller**, which acts as a go-between from the view and the model!

---

### Exercise 1

Examine a complex web application (eg, Slack or Invision), and try to identify which parts are or could be components.

Also, consider the MVC pattern and identify where developers might have added a controller, and what the applications various data-models might look like.

---
template: inverse

#Beyond MVC

---

# Beyond MVC

Recently, with smaller *libraries* like **React** gaining wide spread adoption, the web development community has been moving away from strict MVC patterns.

Why? Not every application needs the restrictive structure of MVC.

Client-side web developers are looking for a way to create efficient user interfaces, and they're not as concerned as they once thought they ought to be with managing the 'model layer' or creating large 'monolithic' applications.


---

#Against the Monolith

When using a framework to write a JavaScript applications, you'll make some tradeoffs.
The most conspicuous being that frameworks can't usually be mixed!

You would never add Angular to your Ember or Backbone application. This simply does not make sense since each framework provides roughly the same functionality.

Also, frameworks tend to be 'heavy' in terms of the number of lines of code you'll have to download and run to use them in your web page. For smaller applications, this may be unnecessary and inefficient.

---

### Views / Widgets / Components

Another notion that is slowly replacing.

---

# Framework of Choice

You'll soon learn that there are dozens of JS Frameworks out there, and that there is a culture of hype that surrounds them. These are the heavyweights:

- **Google** has built a framework: [AngularJS](https://angularjs.org/)
- **Facebook** has created a framework (actually just a library): [ReactJS](https://facebook.github.io/react/)
- **Ruby on Rails** core team have one too: [EmberJS](http://emberjs.com/)
- "Everyone Knows Backbone": [BackboneJS](http://backbonejs.org/)
- [...and so on](https://en.wikipedia.org/wiki/Comparison_of_JavaScript_frameworks)

---
class: center, middle

## Framework Fatigue:

[A JS framework on every table](http://www.allenpike.com/2015/javascript-framework-fatigue/)

---
class: center, middle

.large[
   Opinionated.
]

---
class: center, middle

.large[
   Conventional.
]

---

template: inverse

# Questions?

{% endhighlight %}
