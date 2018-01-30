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

1. CSS Grid Basics
2. Columns & Placement
3. Tracks & Lines
4. Developer Tools
5. Rows & Implicit tracks
6. repeat() & minMax()
7. grid-area

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

<iframe height='500' scrolling='no' title='Grid 1' src='//codepen.io/redacademy/embed/yvLPRL/?height=500&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/redacademy/pen/yvLPRL/'>Grid 1</a> by RED Academy (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
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

### grid-template-columns

<iframe height='365' scrolling='no' title='Grid 1: grid-template-columns' src='//codepen.io/redacademy/embed/WMNXYW/?height=365&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/redacademy/pen/WMNXYW/'>Grid 1: grid-template-columns</a> by RED Academy (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
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

# Mini Exercise

After seeing these **responsive units** again, let's take a few minutes and discuss what we know about them and research what we don't.

At your tables discuss with each other your findings. After a few minutes we can take a further look at some examples.

---

**Responsive Units Example**

<iframe height='500' scrolling='no' title='Grid 1: grid-template-columns fr' src='//codepen.io/redacademy/embed/QQWOzX/?height=500&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/redacademy/pen/QQWOzX/'>Grid 1: grid-template-columns fr</a> by RED Academy (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
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

**Element Placement**

<iframe height='500' scrolling='no' title='Grid 1: grid-template-columns fr element placement start' src='//codepen.io/redacademy/embed/MQWQzP/?height=500&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/redacademy/pen/MQWQzP/'>Grid 1: grid-template-columns fr element placement start</a> by RED Academy (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
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

**Element Placement grid-column**

<iframe height='500' scrolling='no' title='Grid 1: grid-template-columns fr element placement end' src='//codepen.io/redacademy/embed/eVYVbx/?height=500&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/redacademy/pen/eVYVbx/'>Grid 1: grid-template-columns fr element placement end</a> by RED Academy (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
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

  You can define **'tracks'** with **grid-template-columns** & rows

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

  You can define **'tracks'** with **grid-template-columns** & rows

  Fill tracks using line numbers e.g. **grid-column**

]
.right-column[
.inline-images[
  ![Grid Tracks](/public/img/slide-assets/css-grid/graphpaper-example-lines.jpg)
]
]

---


### Grid Tracks

A grid track is the space between any two lines on the grid.

<iframe height='365' scrolling='no' title='Grid 1: grid tracks' src='//codepen.io/redacademy/embed/jZOZJK/?height=365&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/redacademy/pen/jZOZJK/'>Grid 1: grid tracks</a> by RED Academy (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

### Grid Lines

We use grid lines as anchor points.

<iframe height='365' scrolling='no' title='Grid 1: grid tracks: lines' src='//codepen.io/redacademy/embed/VQwQNa/?height=365&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/redacademy/pen/VQwQNa/'>Grid 1: grid tracks: lines</a> by RED Academy (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


---

# Grid Dev Tools

Let's take a look at the following link in Firefox:
**<a href="https://codepen.io/redacademy/full/jZOZJK/" target="_blank">Grid Example</a>**

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

![Firefox Grid Waffle](/public/img/slide-assets/css-grid/firefox-grid-waffle.jpg)


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
See if you notice anything interesting.

Discuss the findings with your table.

---

template: inverse

# Up next Grid Rows


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

---

**grid-template-rows**

<iframe height='500' scrolling='no' title='Intro to CSS Grid: 1.2' src='//codepen.io/redacademy/embed/NyWyQY/?height=500&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/redacademy/pen/NyWyQY/'>Intro to CSS Grid: 1.2</a> by RED Academy (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


---

# Implicit & Explicit


Setting **grid-template-rows** & **grid-template-columns** creates **Explicit** tracks.

We **explicity define** the **row and column tracks**.

If more elements are added than you have grid rows defined, they will be placed in what's called **implicit** or *(implied) tracks*.

---

class: center, middle

**Implied tracks allow the grid to expand beyond the defined grid e.g. rows. That way content can continue to flow without hitting any walls.**

.inline-images[
![The Grid, tron](/public/img/slide-assets/css-grid/tron-lightcycle-original.gif)
]

---


# Setting Auto Rows

We can adjust how implicit tracks by setting an auto value.

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
}
```

<a href="https://codepen.io/redacademy/pen/oENMbL" target="_blank">Codepen example</a>

---

class: center, middle

# We've learned the basics

### Next up let's make our lives easier

---

class: center, middle

### Tired of repeating yourself?

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

<a href="https://codepen.io/redacademy/pen/XZWEJv?editors=0100" target="_blank">Codepen example</a>

---
class: center, middle

# Next Up, minMax

.inline-images[
  ![Cat Min Max](/public/img/slide-assets/css-grid/cats-min-max.jpg)
]

---

# minMax()

```css
.grid-container {
  display: grid;
  grid-template-columns: minmax(100px, 1fr) minmax(100px, 1fr);
}
```

<iframe height='265' scrolling='no' title='Grid 1: minmax()' src='//codepen.io/redacademy/embed/oEgoJZ/?height=265&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/redacademy/pen/oEgoJZ/'>Grid 1: minmax()</a> by RED Academy (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---
class: center, middle

### minMax & repeat 😎

---

### minMax & Repeat

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
}
```

<iframe height='265' scrolling='no' title='Grid 1: repeat() & minmax()' src='//codepen.io/redacademy/embed/mXypyL/?height=265&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/redacademy/pen/mXypyL/'>Grid 1: repeat() & minmax()</a> by RED Academy (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---
class: center, middle
### Phew, let's take a break

After we will see the **piece de resistance** of CSS Grid

.inline-images[
  ![Retro Grid](/public/img/slide-assets/css-grid/retro-grid.png)
]

---

# Named Grid Areas

grid-template-areas CSS property specifies named grid areas.

```css
.grid-container {
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "header header header"
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

```text
 ___________________          _-_
 \==============_=_/ ____.---'---`---.____
             \_ \    \----._________.----/
               \ \   /  /    `-_-'
           __,--`.`-'..'-_
          /____          ||
               `--.____,-'
```

<br>
Let's revisit the site we created earlier and use grid areas.

---

**grid-template-areas**

<iframe height='500' scrolling='no' title='Grid 1: grid-template-areas' src='//codepen.io/redacademy/embed/BYyJNG/?height=500&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/redacademy/pen/BYyJNG/'>Grid 1: grid-template-areas</a> by RED Academy (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

# Responsive Grid Areas

We've updated our site to use **named grid areas**.

Now we can start creating some interesting layouts with **@media queries**.

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

**grid-template-areas with @media**

<iframe height='500' scrolling='no' title='Grid 1: grid-template-areas @media' src='//codepen.io/redacademy/embed/QQwapL/?height=500&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/redacademy/pen/QQwapL/'>Grid 1: grid-template-areas @media</a> by RED Academy (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---
class: center, middle

# One Last Thing

### Grid Gap

---

# Grid Gap


**grid-gap** is used to set the gutters between grid rows and columns.

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  /* shorthand property for grid-row-gap and grid-column-gap */
  grid-gap: 1rem;
}
```

Let's take a look at what our demo looks like with grid-gap

---

**grid-gap**

<iframe height='500' scrolling='no' title='Grid 1: grid-template-areas @media grid-gap' src='//codepen.io/redacademy/embed/MQYQYo/?height=500&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/redacademy/pen/MQYQYo/'>Grid 1: grid-template-areas @media grid-gap</a> by RED Academy (<a href='https://codepen.io/redacademy'>@redacademy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

class: center, middle
### You now know how to navigate The Grid

.inline-images[
  ![Navigate The Grid](/public/img/slide-assets/css-grid/navigate-the-grid.gif)
]

---

# Honourable Mentions

Because CSS Grid is massive, we have lot's of options to work with.
We've seen some ways of getting started but to take it further check out the following...

- <a href="https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/" target="_blank">auto-fit & auto-fill</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout" target="_blank">Box alignment in CSS Grid Layout</a>


---

template: inverse

# Questions?

{% endhighlight %}
