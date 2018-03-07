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

1.  What is CSS Grid?
2.  Columns and placement
3.  Tracks and lines
4.  Developer Tools
5.  Rows and implicit tracks
6.  `repeat()` and `minMax()`
7.  `grid-area`

---

template: inverse

# What is CSS Grid?

---

class: center, middle

> "Grid Layout gives us a method of creating grid structures that are described in CSS and not in HTML. It helps us to create layouts that can be redefined using Media Queries and adapt to different contexts"

&mdash; Rachel Andrew - [Grid by Example](https://gridbyexample.com/what/)

---

template: inverse

# CSS Grid Basics

---

# Enable CSS Grid

To use the new CSS Grid **layout modules** you must set an element's `display` property to `grid`:

```html
<div class="grid-container">
  <!-- grid items go here... -->
</div>
```

```css
.grid-container {
  display: grid;
}
```

---

class: center, middle

<iframe height='500' scrolling='no' title='Grid 1' src='//codepen.io/redacademy/embed/yvLPRL/?height=500&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/redacademy/pen/yvLPRL/'>Grid 1</a> by RED Academy (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

class: center, middle

**Our job is done!** 😎

.inline-images[
![Good News](/public/img/slide-assets/css-grid/tron-sunset.gif)
]

---

template: inverse

# Columns & Placement

---

# Exciting...kinda?

We enabled grid but somehow ended up with rows only???

Because we haven't set any columns yet.

The CSS property is `grid-template-columns`:

```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 200px 100px;
}
```

---

class: center, middle

`grid-template-columns`

<iframe height='365' scrolling='no' title='Grid 1: grid-template-columns' src='//codepen.io/redacademy/embed/WMNXYW/?height=365&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/redacademy/pen/WMNXYW/'>Grid 1: grid-template-columns</a> by RED Academy (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

# Responsive Units

We can use responsive units such as:

`%`, `em`, `rem`, `auto`, `vw`, `vh`, `vmin`, and `vmax`

We also have a new unit to work with specific to grid, `fr`, which essentially means **fraction**.

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 1/3 of grid width each */
}
```

---

# Exercise 1

`%`, `em`, `rem`, `auto`, `vw`, `vh`, `vmin`, and `vmax`

After seeing these **responsive units** again, let's take a few minutes and discuss what we know about them and research what we don't.

At your tables discuss with each other your findings. After a few minutes we can take a further look at some examples.

---

class: center, middle

**Responsive units example:**

<iframe height='500' scrolling='no' title='Grid 1: grid-template-columns fr' src='//codepen.io/redacademy/embed/QQWOzX/?height=500&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/redacademy/pen/QQWOzX/'>Grid 1: grid-template-columns fr</a> by RED Academy (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

# Element Placement

Until now our example HTML has been just for visual demonstration purposes.

Let's update our mark-up to represent a more realistic website:

```html
<div class="grid-container">
  <header>Header</header>
  <main>Main</main>
  <aside>Aside</aside>
  <footer>Footer</footer>
</div>
```

---

class: center, middle

**Element placement set-up:**

<iframe height='500' scrolling='no' title='Grid 1: grid-template-columns fr element placement start' src='//codepen.io/redacademy/embed/MQWQzP/?height=500&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/redacademy/pen/MQWQzP/'>Grid 1: grid-template-columns fr element placement start</a> by RED Academy (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

# Place Our Elements

Using a new property `grid-column`, we can have our elements span columns:

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

class: center, middle

**Element placement with `grid-column`:**

<iframe height='500' scrolling='no' title='Grid 1: grid-template-columns fr element placement end' src='//codepen.io/redacademy/embed/eVYVbx/?height=500&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/redacademy/pen/eVYVbx/'>Grid 1: grid-template-columns fr element placement end</a> by RED Academy (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

class: center, middle

### Congrats! You've made a CSS Grid website.

.inline-images[
![Good News](/public/img/slide-assets/css-grid/tron-lightbike.gif)
]

But what just happened??? 😔

---

template: inverse

# Tracks & Lines

---

class: middle

.half-left-column[

### Grid Tracks

A grid is similar to a piece of graph paper like this:
]
.half-right-column[
.inline-images[
![Graph paper image](/public/img/slide-assets/css-grid/graphpaper.jpg)
]
]

---

class: middle

.half-left-column[

### Grid Tracks

You can define **tracks** with `grid-template-columns` and `grid-template-rows`.

]
.half-right-column[
.inline-images[
![Graph paper image](/public/img/slide-assets/css-grid/graphpaper-example-filled.jpg)
]
]

---

class: middle
.half-left-column[

### Grid Tracks

You can fill tracks using line numbers with `grid-column`.

]
.half-right-column[
.inline-images[
![Graph paper image](/public/img/slide-assets/css-grid/graphpaper-example-lines.jpg)
]
]

---

class: center, middle

A **grid track** is the space between any two lines on the grid:

<iframe height='365' scrolling='no' title='Grid 1: grid tracks' src='//codepen.io/redacademy/embed/jZOZJK/?height=365&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/redacademy/pen/jZOZJK/'>Grid 1: grid tracks</a> by RED Academy (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

class: center, middle

We use **grid lines** as anchor points:

<iframe height='365' scrolling='no' title='Grid 1: grid tracks: lines' src='//codepen.io/redacademy/embed/VQwQNa/?height=365&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/redacademy/pen/VQwQNa/'>Grid 1: grid tracks: lines</a> by RED Academy (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

template: inverse

# Developer Tools

---

# Grid Dev Tools

Take a look at the following link in Firefox: **[Grid Example](https://codepen.io/redacademy/full/jZOZJK/)**

If you don't have the developer version of this browser already, [please download it now](https://www.mozilla.org/en-US/firefox/developer/).

.inline-images[
![Firefox Developer](/public/img/slide-assets/css-grid/firefox-dev.png)
]

---

# Grid Dev Tools

Open your dev tools in Firefox and look for the class `grid-container`, as you would in Chrome:

.inline-images[
![Firefox Grid Container](/public/img/slide-assets/css-grid/firefox-grid-container.jpg)
]

---

# Grid Dev Tools

Now look in the **rules** panel for the selected element.

Click on the **waffle looking icon** in between `display: grid`:

.inline-images[
![Firefox Grid Waffle](/public/img/slide-assets/css-grid/firefox-grid-waffle.jpg)
]

---

# Grid Dev Tools

Select the layout tab and check the following boxes:

.inline-images[
![Firefox Grid Layout](/public/img/slide-assets/css-grid/firefox-layout.jpg)
]

---

# Grid Dev Tools

Try inspecting the grid. You should see something like this:

.inline-images[
![Firefox Grid Screenshot](/public/img/slide-assets/css-grid/firefox-grid-screenshot.jpg)
]

---

# Exercise 2

Take a look at some of the grid examples on [GridByExample.com](https://gridbyexample.com/examples/).

Inspect the site with Firefox dev tools. See if you notice anything interesting. How could you apply what you see here to previous project you've worked on?

Discuss your findings with a partner or in small groups.

---

template: inverse

# Rows & Tracks

---

# Grid Rows

Now that we have some columns, let's try adding some rows.

The property for this is `grid-template-rows`:

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px 1fr 200px;
}
```

---

class: center, middle

`grid-template-rows`

<iframe height='500' scrolling='no' title='Intro to CSS Grid: 1.2' src='//codepen.io/redacademy/embed/NyWyQY/?height=500&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/redacademy/pen/NyWyQY/'>Intro to CSS Grid: 1.2</a> by RED Academy (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

# Implicit & Explicit

Setting `grid-template-rows` and `grid-template-columns` creates **explicit** tracks.

We **explicitly define** the row and column tracks.

If more elements are added than you have grid rows defined, they will be placed in **implicit tracks** (or _implied tracks_).

---

class: center, middle

Implied tracks allow the grid to expand beyond the defined grid so content can continue to flow without hitting any walls:

.inline-images[
![The grid in Tron](/public/img/slide-assets/css-grid/tron-lightcycle-original.gif)
]

---

# Setting Auto Rows

We can adjust how implicit tracks by setting an auto value:

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
}
```

See the [Codepen example](https://codepen.io/redacademy/pen/oENMbL).

---

template: inverse

# repeat & minmax

---

class: center, middle

.large[
**We've mastered grid basics...**
]

---

class: center, middle

.large[
Now let's make our lives easier!
]

---

class: center, middle

### Tired of repeating yourself?

We might enjoy typing, but writing the same value over and over isn't the best use of our time...

---

class: center, middle

.inline-images[
![Good News](/public/img/slide-assets/goodnews.webp)
]

---

# `repeat`

Grid provides a `repeat()` function that works as follows:

**repeat( # of times to repeat, unit of measurement )**

To use it in our previous example:

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
```

See the [Codepen example](https://codepen.io/redacademy/pen/XZWEJv?editors=0100).

---

class: center, middle

**But wait, there's more! (And it's called `minmax`)**

.inline-images[
![Large and small cats together](/public/img/slide-assets/css-grid/cats-min-max.jpg)
]

---

# `minmax()`

The `minmax()` CSS function defines a size range greater than or equal to _min_ and less than or equal to _max_:

```css
.grid-container {
  display: grid;
  grid-template-columns: minmax(100px, 1fr) minmax(100px, 1fr);
}
```

---

class: center, middle

`minmax()` in use:

<iframe height='265' scrolling='no' title='Grid 1: minmax()' src='//codepen.io/redacademy/embed/oEgoJZ/?height=265&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/redacademy/pen/oEgoJZ/'>Grid 1: minmax()</a> by RED Academy (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

class: center, middle

`minmax()` and `repeat()` together:

<iframe height='265' scrolling='no' title='Grid 1: repeat() & minmax()' src='//codepen.io/redacademy/embed/mXypyL/?height=265&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/redacademy/pen/mXypyL/'>Grid 1: repeat() & minmax()</a> by RED Academy (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

class: center, middle

### Phew, let's take a break!

After, we will see the **pièce de résistance** of CSS Grid...

.inline-images[
![Retro Grid](/public/img/slide-assets/css-grid/retro-grid.png)
]

---

template: inverse

# Grid Areas

---

# Named Those Areas!

The `grid-template-areas` property allows naming of areas:

```css
.grid-container {
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "header header header"
    "main main main"
    "footer footer footer";
}

header {
  grid-area: header;
}

main {
  grid-area: main;
}

footer {
  grid-area: footer;
}
```

---

# Named Grid Areas

The way we write template areas is also referred to as the **ascii-art method**

```
 ___________________          _-_
 \==============_=_/ ____.---'---`---.____
             \_ \    \----._________.----/
               \ \   /  /    `-_-'
           __,--`.`-'..'-_
          /____          ||
               `--.____,-'
```

_Let's revisit the site we created earlier and use grid areas now..._

---

class: center, middle

`grid-template-areas`

<iframe height='500' scrolling='no' title='Grid 1: grid-template-areas' src='//codepen.io/redacademy/embed/BYyJNG/?height=500&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/redacademy/pen/BYyJNG/'>Grid 1: grid-template-areas</a> by RED Academy (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

# Responsive Grid Areas

We've updated our site to use **named grid areas**.

Now we can create some interesting layouts with **media queries**:

```css
@media (min-width: 600px) {
  .grid-container {
    grid-template-areas:
      "header header aside"
      "main main aside"
      "main main aside"
      ". footer footer";
  }
}
```

---

class: center, middle

`grid-template-areas` with `@media`:

<iframe height='500' scrolling='no' title='Grid 1: grid-template-areas @media' src='//codepen.io/redacademy/embed/QQwapL/?height=500&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/redacademy/pen/QQwapL/'>Grid 1: grid-template-areas @media</a> by RED Academy (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

template: inverse

# One More Thing... <br />Grid Gap

---

# Grid Gap

The `grid-gap` property is used to set the gutters between grid rows and columns:

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  /* shorthand property for grid-row-gap and grid-column-gap */
  grid-gap: 1rem;
}
```

_Let's take a look at what our demo looks like with `grid-gap`..._

---

class: center, middle

`grid-gap`

<iframe height='500' scrolling='no' title='Grid 1: grid-template-areas @media grid-gap' src='//codepen.io/redacademy/embed/MQYQYo/?height=500&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/redacademy/pen/MQYQYo/'>Grid 1: grid-template-areas @media grid-gap</a> by RED Academy (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

class: center, middle

### You now know how to navigate The Grid!

.inline-images[
![Navigate the grid](/public/img/slide-assets/css-grid/navigate-the-grid.gif)
]

---

# Honourable Mentions

Because CSS Grid spec is massive, we have a lot of options to work with.

We now know how to get started with grid, but be sure to check out the following:

* [auto-fit & auto-fill](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/)
* [Box alignment in CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)

---

# What We've Learned

* What CSS Grid is and how to use many of it's essential properties and values
* The difference between tracks and lines
* How to use Firefox Developer Edition dev tools to debug grid layouts
* How to use `repeat()` and `minmax()` to write efficient grid code
* How to use grid areas for fine-tuned grid-based layouts

---

template: inverse

# Questions?

{% endhighlight %}
