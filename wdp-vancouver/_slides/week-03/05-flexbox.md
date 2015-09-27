---
layout: slidedeck
title: Introduction to Flexbox Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Introduction to Flexbox

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Why Flexbox?
2. Discover basic Flexbox layout techniques.
3. Create some functional Flexbox layouts.
4. Create SASS Helpers to make working with Flexbox faster & more efficient.

---

.left-column[
  ## Why Flexbox?
]

.right-column[

Makes common web-page layout requirements easy to code: 

- Equal height columns
- Equally distributed containers
- Vertical centering
- "Sticky" footer
- Input "add-ons"
- and more ...

]

---
template: inverse

# NO MORE FLOAT BASED LAYOUTS!

---
class: center, middle

### Before we continue:

https://css-tricks.com/snippets/css/a-guide-to-flexbox/
http://learnlayout.com/flexbox.html

---

http://www.sketchingwithcss.com/samplechapter/cheatsheet.html

### What does Flexbox look like!?
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
###Try it!

---
template: inverse

# Wait, what?

---
class: center, middle

Once again, CSS has found a way to make things less obvious than they should be. But fear not, Flexbox is still incredibly useful for layout...

---
class: center, middle

### Suddenly, A wild display property appears:
#`display:flex;`

---
class: center, middle

##Did I mention: <br> 
#no more floats, or % based layouts!
---
class: center, middle

###Terminology: **flex-item**

---
class: center, middle

###Terminology: **main-axis**, **cross-axis**

---
###Enough, lets code.
###`flex-direction`
<br>
```css
.container {
  flex-direction:row; /*(default)*/
  /* flex-direction:column; */
}
```
Set these properties on the **flex-container** to set the layout behavior of the **flex-items** within.

`flex-direction:row;` main axis is horizontal. <br>
`flex-direction:column;` main axis is vertical.

---

###`justify-content`
<br>
```css
.container {
  justify-content:flex-start;` /*(default)*/
  /*
    justify-content:flex-end;
    justify-content:center;
    justify-content:space-between;
    justify-content:space-around;
  */
}
```

Applied on the **flex container**, This property determines how **flex-items** are aligned along the **main-axis**.

---

###`align-items`
<br>
```css
.container {
  align-items:stretch;` /*(default)*/
  /*
   align-items: flex-start;
   align-items: flex-end;
   align-items: center;
   align-items: baseline;
  */
}
```
Applied on the **flex container**, This property determines how **flex-items** are aligned along the **cross-axis**.
.footnote[.red[*] flex- container must have a height set for this to work!]

---

# Exercise 1

In this exercise, you're going to use what you've learned about flexbox to recreate the vertical centering layout fuound here:
<br>
[Solved by Flexbox, 'Vertical centering'](https://philipwalton.github.io/solved-by-flexbox/demos/vertical-centering/)

---

###`align-content`
<br>
```css
.container {
  align-content:stretch;` /*(default)*/
  /*
   align-content:flex-end;
   align-content:center;
   align-content:space-between;
   align-content:space-around;
  */
}
```
Applied on the **flex container**, This property determines how  *all* of the **flex-items** are aligned along the **cross-axis**.
.footnote[.red[*]  you must have multiple rows of content (`flex-wrap:wrap;`) for this to work!]

---

###`align-self`
<br>
```css
.box { 
  /*
   align-self:stretch;
   align-self: flex-start;
   align-self: flex-end;
   align-self: center;
   align-self: baseline;
  */
}
```
Applied on the **flex item**, This property overrides the **flex container**'s `align-items` property.
---

###`flex`
"What do we do with the extra space, or when there is not enough space?"
<br>
```css
.box { 
    /* flex: [number]; */
}
```
Applied on the **flex item**, This property sets a proportion of the **flex-item** in relation to the other **flex-items**.

---

# Exercise 2

Create the “Holy Grail Layout” layout from the Solved by Flexbox site:
<br>
[Solved by Flexbox, 'Holy Grail'](https://philipwalton.github.io/solved-by-flexbox/demos/vertical-centering/)


---

# Exercise 3

See if you can recreate all of the demos on the Solved by Flexbox site!
<br>
[Solved by Flexbox](https://philipwalton.github.io/solved-by-flexbox/)


---
template: inverse

# Questions?

{% endhighlight %}
