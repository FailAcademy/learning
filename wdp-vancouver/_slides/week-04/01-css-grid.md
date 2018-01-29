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

To use the new CSS Grid 'layout module'... <br>
Start by setting an elements **display** property to **grid**.

```css
/* Html element that will be the 'parent' of our grid items */
.grid-container {
  display: grid;
}
```

---

<iframe height='500' scrolling='no' title='Grid 1' src='//codepen.io/Onomicon/embed/yvBwmO/?height=500&theme-id=light&default-tab=result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Onomicon/pen/yvBwmO/'>Grid 1</a> by Onomicon (<a href='https://codepen.io/Onomicon'>@Onomicon</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

class: center, middle

**Our job is done** 😎

.inline-images[
  ![Good News](/public/img/slide-assets/css-grid/tron-sunset.gif)
]

---

### Exciting... Kinda?

We enabled grid and ended up with rows?<br>
That's because we haven't set any columns yet.

The CSS property is **grid-template-columns**

```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 200px 100px;
}
```


---


<iframe height='500' scrolling='no' title='Grid 1: grid-template-columns' src='//codepen.io/Onomicon/embed/PQYgXP/?height=500&theme-id=light&default-tab=result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Onomicon/pen/PQYgXP/'>Grid 1: grid-template-columns</a> by Onomicon (<a href='https://codepen.io/Onomicon'>@Onomicon</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


---

# Responsive Units

We can use responsive units such as:<br> **%, em, rem, auto, vw, vh, vmin, vmax**<br>

However there's a new unit specific to grid. Which is **fr**

**fr** is basically a fraction.


```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 1 / 3rd */
}
```

---


<iframe height='500' scrolling='no' title='Grid 1: grid-template-columns fr' src='//codepen.io/Onomicon/embed/qxWwwg/?height=500&theme-id=light&default-tab=result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Onomicon/pen/qxWwwg/'>Grid 1: grid-template-columns fr</a> by Onomicon (<a href='https://codepen.io/Onomicon'>@Onomicon</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



---

# Element Placement

Until now our example html has been just for visual purposes.

Let's update our html to look more like a website.

```html
<div class="grid-container">
  <header>Header</header>
  <main>Main</main>
  <aside>Aside</aside>
  <footer>Footer</footer>
</div>
```

---

<iframe height='500' scrolling='no' title='Grid 1: grid-template-columns fr element placement start' src='//codepen.io/Onomicon/embed/YeKMbm/?height=500&theme-id=light&default-tab=result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Onomicon/pen/YeKMbm/'>Grid 1: grid-template-columns fr element placement start</a> by Onomicon (<a href='https://codepen.io/Onomicon'>@Onomicon</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

### Let's place our elements

Using a new property **grid-column** we can have our elements span columns e.g.

```css
header {
  grid-column: 1 / 4;
}

main {
  grid-column: 1 / 3;
}

aside {
  grid-column: 3 / 4;
}

footer {
  grid-column: 1 / 4;
}
```

---


<iframe height='500' scrolling='no' title='Grid 1: grid-template-columns fr element placement end' src='//codepen.io/Onomicon/embed/xYKNKm/?height=500&theme-id=light&default-tab=result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Onomicon/pen/xYKNKm/'>Grid 1: grid-template-columns fr element placement end</a> by Onomicon (<a href='https://codepen.io/Onomicon'>@Onomicon</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


---

class: center, middle

### You've made a CSS Grid website!

.inline-images[
  ![Good News](/public/img/slide-assets/css-grid/tron-lightbike.gif)
]

But what just happend? 😔

---

.left-column[
  ### Grid Tracks
  A grid is similar to a piece of graph paper.
]
.right-column[
.inline-images[
  ![Grid Tracks](/public/img/slide-assets/css-grid/graphpaper.jpg)
]
]

---

.left-column[
  ### Grid Tracks
  A grid is similar to a piece of graph paper.

  You can define **'tracks'** with **grid-template-columns**

]
.right-column[
.inline-images[
  ![Grid Tracks](/public/img/slide-assets/css-grid/graphpaper-example-filled.jpg)
]
]

---

.left-column[
  ### Grid Tracks
  A grid is similar to a piece of graph paper.

  You can define **'tracks'** with **grid-template-columns**

  & fill areas with track lines e.g. **grid-column**

]
.right-column[
.inline-images[
  ![Grid Tracks](/public/img/slide-assets/css-grid/graphpaper-example-lines.jpg)
]
]

---


### Grid Tracks

Tracks are lines created with **grid-template-columns & rows**

<iframe height='365' scrolling='no' title='Grid 1: grid tracks' src='//codepen.io/Onomicon/embed/LQPKER/?height=365&theme-id=light&default-tab=result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Onomicon/pen/LQPKER/'>Grid 1: grid tracks</a> by Onomicon (<a href='https://codepen.io/Onomicon'>@Onomicon</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



---
### Grid Lines

Are the tracks lines & what we use to position elements.


<iframe height='365' scrolling='no' title='Grid 1: grid tracks: lines' src='//codepen.io/Onomicon/embed/NyKZxO/?height365&theme-id=light&default-tab=result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Onomicon/pen/NyKZxO/'>Grid 1: grid tracks: lines</a> by Onomicon (<a href='https://codepen.io/Onomicon'>@Onomicon</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


---

# Grid Dev Tools

Let's take a look at the following link in Firefox:
**<a href="https://codepen.io/Onomicon/full/LQPKER/" target="_blank">Grid Example</a>**

If you dont' have the developer version

<a href="https://www.mozilla.org/en-US/firefox/developer/" target="_blank">
![Firefox Developer](/public/img/slide-assets/css-grid/firefox-dev.png)
</a>

---

# Grid Dev Tools

Open dev tools by right clicking or **command option i**

Inspect, like you would with chrome, and look for the class **grid-container**

![Firefox Grid Container](/public/img/slide-assets/css-grid/firefox-grid-container.jpg)

---

# Grid Dev Tools

Now look in the **rules** panel for the selected element.

Click on the **waffle looking icon** in between **display grid**.

![Firefox Grid Container](/public/img/slide-assets/css-grid/firefox-grid-waffle.jpg)



---

# Grid Dev Tools

Select the layout tab and check the following boxes.

![Firefox Grid Layout](/public/img/slide-assets/css-grid/firefox-layout.jpg)


---

# Grid Dev Tools

You should see something like this. Try inspecting the grid.

![Firefox Grid Screenshot](/public/img/slide-assets/css-grid/firefox-grid-screenshot.jpg)



---

# Exercise 1

Take a look at some of the grid examples at <a href="https://gridbyexample.com/examples/" target="_blank">GridByExample.com</a>

Inspect the site with Firefox Dev Tools.
See if you notice anything intersting.

Discuss the findings with your table.

---

# Grid Rows

Now that we have some columns let's try adding some rows.

The property for this is **grid-template-rows**

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px 1fr 200px;
}
```

<a href="https://codepen.io/Onomicon/pen/cd058fd2bd5422818ca70b7d831c6134?editors=0100" target="_blank">Codepen example</a>

---
# Implicit & Explicit

When you set **grid-template-rows** even when you only set a few values the grid still continues.

If you add more items to your grid they will be placed in the column tracks and in the default **implied** rows.

This is a confusing thing to try to explain. Let's see an example.


---
class: center, middle

<iframe height='565' scrolling='no' title='grid unsplash' src='//codepen.io/Onomicon/embed/2b0928031b0a3662740229ee30275fc2/?height=565&theme-id=light&default-tab=result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Onomicon/pen/2b0928031b0a3662740229ee30275fc2/'>grid unsplash</a> by Onomicon (<a href='https://codepen.io/Onomicon'>@Onomicon</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

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

<a href="https://codepen.io/Onomicon/pen/5ccd5b9c24e8abe81cb39733995090f8?editors=0100" target="_blank">Codepen example</a>

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

<a href="https://codepen.io/Onomicon/pen/c18911b2854e5fa2b34340e8f7a1598f?editors=0100" target="_blank">Codepen example</a>

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
