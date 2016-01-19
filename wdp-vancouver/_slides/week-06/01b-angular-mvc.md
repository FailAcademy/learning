---
layout: slidedeck
title: Intro to MVC in Angular Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to MVC in Angular

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

class: center, middle

### Review: Generally, the frameworks we're going to look are called "MVC Frameworks"

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

Views are usually **composable** (i.e. they are made up of views and sub-views).

---

# C -> Controller

**Controller** refers to a specific area in your application where you write code to coordinate the values stored in your model with the view that is meant to display them.

Controllers have a number of other characteristics, and the definition if fairly malleable, but for our purposes, it will serve us if we think about controllers as always being **directly associated with a view**.

For example you would define a controller to manage the User settings view. The code in this controller would be related to managing updating the basic user settings, and it would be named accordingly.

---

# Altogether Now...

Using this pattern, we shave a way of separating presentation from the underlying data, so we know where to code, when we want to modify one or the other.

If you want to change the behavior of an image slider, you'll look in the **view** layer...

If we want to change how our user data is organized, we check the **model**.

Once we're satisfied we pass the data to the **controller**, which acts as a go-between from the view and the model!

---
template: inverse

# Angular specific MVC

---

template: inverse

# Questions?

{% endhighlight %}