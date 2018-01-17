---
layout: slidedeck
title: IA for WordPress Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Information Architecture for WordPress

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1. What is information architecture?
2. IA process and deliverables
3. Implementing an IA in WP

---

template: inverse

# What is IA?

---

class: center, middle

.large[
The structural design of shared information environments.
]

---

class: center, middle

.large[
Organizing content into groups that make sense to the people who use it.
]

---

# What IA is NOT

* Visual design
* Interaction design
* Wireframes
* Content strategy/management
* Knowledge management
* Coding

---

# IA vs. Navigation Design

* IA and navigation design are closely related but not the same things!
* Should finalize your IA first

---

class: center, middle

.large[
Why do you think it's important to spend time on IA?
]

---

class: center, middle

.large[
When we talk about IA and content, we are often talking mostly about **metadata.**
]

---

# Types of Metadata

* **Descriptive:** relevant words or phrases that describe the subject matter of the content (e.g. title, tags)
* **Administrative:** information about how the content was created, and how it can and will be used (author, publication date, license)
* **Structural:** expresses the content (e.g. page, post)

---

class: center, middle

.inline-images[
![Metadata on WP post](/public/img/slide-assets/ia-hello-world.png)
]

---

class: center, middle

.inline-images[
![WP post in database table](/public/img/slide-assets/ia-wp-db.png)
]

---

class: center, middle

> "The beginning of all understanding is classification."

&mdash;Hayden White

---

class: center, middle

### Taxonomies == Metadata

Taxonomies are a type of metadata that are specific **classification schemes** that you can apply to your content.

---

class: center, middle

.large[
Taxonomies are a type of **descriptive** metadata.
]

---

# Labelling

* Labels should be chosen based on the **taxonomy** in question and the **mental models** of the user
* They’re meant to help with navigation, identification, and retrieval of content
* Good labels assist with **wayfinding**

???

* Choosing the right labels is harder than it seems
* Implementing the best possible controlled vocabulary is one the hardest parts of IA
* But it’s one of the most essential parts!

---

# Metadata Tips

* Must be applied consistently to be useful
* Must be built into a content workflow
* Must mesh with users’ mental models

---

# Exercise 1

Let's try classifying some data into taxonomies that we design.

[See the lesson page](/lesson/custom-post-types-taxonomies-fields/) for details.

---

template: inverse

# IA Process and Deliverables

---

# IA Toolbox

* Content audits
* Card sorting (open or closed)
* Cluster analysis
* Tree testing

---

class: center, middle

.inline-images[
![Content audit](/public/img/slide-assets/content-audit.png)
]

???

Content audits are and essential first step!

---

class: center, middle

.inline-images[
![Offline card sort test](/public/img/slide-assets/ia-manual-card-sort.jpg)
]

???

Card sorting can be open or closed.

---

class: center, middle

.inline-images[
![Online card sort test](/public/img/slide-assets/ia-online-card-sort.png)
]

---

class: center, middle

.inline-images[
![Cluster analysis from R](/public/img/slide-assets/ia-cluster-analysis.jpg)
]

---

class: center, middle

.inline-images[
![Tree test results](/public/img/slide-assets/ia-tree-test-results.jpg)
]

???

Tree testing can help with testing the findability of content within and IA.

---

class: center, middle

.inline-images[
![Sample IA](/public/img/slide-assets/ia-sample.jpg)
]

???

IAs may be communicated in a variety of different ways, but this type of diagram is a popular option.

---

template: inverse

# Implementing an IA in WordPress

---

class: center, middle

.large[
What tools does WordPress provide us help structure the IA for a website?
]

???

* Custom post types
* Custom taxonomies
* Custom fields
* Navigation menus
* WP template hierarchy

---

class: center, middle

.large[
Custom post types <br />are like **nouns.**
]

---

class: center, middle

.large[
Custom taxonomies <br />are like **adjectives.**
]

---

class: center, middle

.large[
**[WordPress Template Hierarchy](https://wphierarchy.com/)**
]

---

# Exercise 2

Using the sample IA provided, work in a group to decide how you would build that website out using appropriate WordPress APIs. Specifically, determine:

* Can you leverage built-in WP posts, pages, categories or tags in this IA? Where?
* Will you need any custom post type or taxonomies?
* What templates from the Template Hierarchy would you make use of in your theme? What would the files be named?

When done, you will present your rationale to the class.

---

# What We've Learned

* What IA is and why it's important
* What IA looks like in practice
* How to leverage features built-in to WP to structure the IA for website (based on UX deliverables)

---

template: inverse

# Questions?

{% endhighlight %}
