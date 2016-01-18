---
layout: slidedeck
title: Flexbox Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Flexbox

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Why Flexbox?
2. Flexbox layout techniques
3. Try some flexbox layouts

---

# Why Flexbox?

Flexbox Makes common web-page layout requirements easy to code:

- Equal height columns
- Evenly spaced containers
- Vertical centering
- Sticky footers
- ...and more!

---
class: center, middle

.large[
   NO MORE FLOAT BASED LAYOUTS!
]

---
class: center, middle

### Bookmark this resource right now:

[CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---



---

# What does it look like!?

Here is how create a vertically centered element using flexbox:

```css
.vertical-container {
  height: 300px;
  display: -webkit-flex;
  display:         flex;
  -webkit-align-items: center;
          align-items: center;
  -webkit-justify-content: center;
          justify-content: center;
}
```

Try it out...

---
class: center, middle

.large[
   Wait, what?
]

---
class: center, middle

.large[
   Once again, CSS has found a way to make things less obvious than they should be.
]

---
class: center, middle

.large[
   But fear not, flexbox is still incredibly useful for layout...
]

---
template: inverse

# Flexbox Techniques & Layouts

---
class: center, middle

### Suddenly, a wild display property appears:

.large[
   `display: flex;`
]

---
class: center, middle

### Did I mention?

No more floats, or % based layouts!

---
class: center, middle

.large[
   Terminology: **flex-item**
]

---
class: center, middle

.large[
   Terminology:<br>**main-axis**, **cross-axis**
]

---
class: center, middle

.large[
   Enough, let's code!
]

---

# `flex-direction`

```css
.container {
  flex-direction: row; /* default */
  /* flex-direction: column; */
}
```

Set these properties on the **flex-container** to set the layout behavior of the **flex-items** within.

With `flex-direction: row;` main axis is horizontal.

With `flex-direction: column;` main axis is vertical.

---

# `justify-content`

```css
.container {
   justify-content: flex-start;` /* default */
   /*
      justify-content: flex-end;
      justify-content: center;
      justify-content: space-between;
      justify-content: space-around;
   */
}
```

Applied on the **flex container**, this property determines how **flex-items** are aligned along the **main-axis**.

---

# `align-items`

```css
.container {
   align-items: stretch; /* default */
   /*
      align-items: flex-start;
      align-items: flex-end;
      align-items: center;
      align-items: baseline;
   */
}
```

Applied on the **flex container**, This property determines how **flex-items** are aligned along the **cross-axis**.

.footnote[.red[* ] `flex-` container must have a height set for this to work!]

---

# `align-content`

```css
.container {
  align-content: stretch;` /* default */
  /*
   align-content: flex-end;
   align-content: center;
   align-content: space-between;
   align-content: space-around;
  */
}
```

Applied on the **flex container**, this property determines how  *all* of the **flex-items** are aligned along the **cross-axis**.

.footnote[.red[* ] you must have multiple rows of content (`flex-wrap: wrap;`) for this to work!]

---

# `align-self`

```css
.box {
  /*
   align-self: stretch;
   align-self: flex-start;
   align-self: flex-end;
   align-self: center;
   align-self: baseline;
  */
}
```

Applied on the **flex item**, This property overrides the **flex container**'s `align-items` property.

---

# `flex`

*What do we do with the extra space, or when there is not enough space?*

```css
.box {
    /* flex: [number]; */
}
```

Applied on the **flex item**, This property sets a proportion of the **flex-item** in relation to the other **flex-items**.

---
template: inverse

# Questions?

{% endhighlight %}
