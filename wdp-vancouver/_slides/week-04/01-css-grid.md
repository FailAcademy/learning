---
layout: slidedeck
title: CSS Grid Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# CSS Grid

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. What is CSS Grid?
2. CSS Grid Basics
3. Grid Developer Tools
4. Explict & Inplicit Grid
5. Basic Layouts
6. Advanced Grid

---
template: inverse

# What is CSS Grid?

---
class: center, middle

> "Grid Layout gives us a method of creating grid structures that are described in CSS and not in HTML. It helps us to create layouts that can be redefined using Media Queries and adapt to different contexts"

&mdash; Rachel Andrew

<a href="https://gridbyexample.com/what/" target="_blank">Grid by example</a>

---
template: inverse

# CSS Grid Basics

---

# Enable CSS Grid

To use the new CSS Grid feautures, we start by setting the **display** property to **grid**.

```css
.grid-container {
  display: grid;
}
```

Ok that's easy however nothing changed visually?
That's because we haven't set our columns or rows yet.

Next we will setup our **grid columns**.

---

# Grid Columns

To set grid columns we use the property 

**grid-template-columns**

Each value will create a column, and the column size can be different units of measurement e.g. **px**, **rem**, **%**, **auto**, and a newer unit specific to grid **fr**.

```css
.grid-container {
  display: grid;
  grid-template-columns: auto 1fr auto;
}
```
Try it out <a href="https://codepen.io/Onomicon/pen/5211db77b1ccabe811673cb75ba29869/?editors=1100" target="_blank">Codepen example</a>

---

## Notice anything interesting?

The first thing you may notice is that for each unit of measurement we enter we get a new column, that's pretty neat!

Ok but what's the difference between **auto** and **fr**?

**Auto** basically trys to fill the available space based on the content
**fr** fills a fraction of the column width e.g. if each column is set to 1fr then each is 1/3rd of the available space.

Try changing the middle column to 1fr and the outer columsn to auto.

---

# Grid Rows

Now that we have some columns let's try adding some rows.

The property for this is **grid-template-rows**

Let's also change the columns to 2 and set their value to 1fr.

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}
```

<a href="https://codepen.io/Onomicon/pen/cd058fd2bd5422818ca70b7d831c6134?editors=1100" target="_blank">Codepen example</a>

---
class: center, middle
### Feel like you're repeating yourself?

Maybe we enjoy typing but it seems that writing the same value over and over isn't the best. 

---
class: center, middle

.inline-images[
  ![Good News](/public/img/slide-assets/goodnews.webp)
]
---

# Introducing Repeat

Good News, Everyone! there's a handy property **repeat()**

The syntax is basically... 

**repeat( number of times to repeat , unit of measurement )**

Here is same css using repeat()

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
```

<a href="https://codepen.io/Onomicon/pen/5ccd5b9c24e8abe81cb39733995090f8?editors=1100" target="_blank">Codepen example</a>

---

# Placing Grid Items

So far we've just been working with setting up rows and columns.
Let's try placing an element at a specific section of our grid. There are a couple of properties we can try:

- `grid-column-start`
- `grid-column-end`

```css
.grid-item:nth-of-type(1) {
  grid-column-start: 1;
  grid-column-end: 3;
}
```

<a href="https://codepen.io/Onomicon/pen/c18911b2854e5fa2b34340e8f7a1598f?editors=1100" target="_blank">Codepen example</a>

---

# Grid Lines

You may be wondering why we set grid-column-end to 3 when we only have 2 columns.

This is because we are actually refering to what's called a **grid line**

Fear not if this is confusing, Mozilla has create a very useful grid inspector.

Let's try it out <a href="https://www.mozilla.org/en-US/firefox/developer/" target="_blank">Firefox Developer edition</a> to dig deeper.



---

class: center, middle

### CSS Grid Slide

This is where some text would go.

---
class: center, middle

.large[
   This is a large text slide
]

---

# Exercise 1

An example of an exercise slide.


---
template: inverse

# CSS Grid Developer Tools

---

# CSS Grid

Well aside from our brains there's really only one new dev tool at the moment worth using...

- <a href="https://www.mozilla.org/en-US/firefox/developer/" target="_blank">Firefox Quantum Developer Edition</a>

---

# CSS Grid

- Another slide here
- This is a bulleted list

---

# Exercise 2

Another exercise.

---
template: inverse

# Explict & Inplicit Grid

---

# What We've Learned

- PLACEHOLDER: Recap goes here
- PLACEHOLDER: Recap goes here
- PLACEHOLDER: Recap goes here
- PLACEHOLDER: Recap goes here


---
template: inverse

# Questions?

{% endhighlight %}
