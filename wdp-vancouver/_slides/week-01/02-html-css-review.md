---
layout: slidedeck
title: HTML & CSS Review Slides [Part 2]
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# HTML & CSS Review: Part 2

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. CSS concept review
2. CSS3 properties
3. CSS resets & cross-browser compatibility

---
class: center, middle

.large[
   Block vs. Inline
]

---
class: center, middle

.inline-images[
   ![Block-level element](/public/img/slide-assets/css-block-element.svg)
]

---
class: center, middle

.inline-images[
   ![Inline element](/public/img/slide-assets/css-inline-element.svg)
]

---

# Changing Display

We can override an element default display behaviour using the `display` property in our CSS.

For example:

```css
li {
	display: inline;
}
```

Or:

```css
span {
	display: block;
}
```

---
class: center, middle

### Not that simple!

But there's another distinction to be made...<br />an element can also be **inline-block**.

---

# Display Differences

Block                                 | Inline-block                    | Inline
------------------------------------- | --------------------------------|---------------------------------
Has top/bottom margin & padding       | Has top/bottom margin & padding | No top/bottom margin or padding
Has left/right margin & padding       | Has left/right margin & padding | Has left/right margin & padding
Can have set height and width         | Can have set height and width   | Cannot have set width or height
Forces a line break after the element | Does not a force a line break   | Does not force a line break

---
class: center, middle

.inline-images[
   ![CSS display properties](/public/img/slide-assets/css-display-props.svg)
]

---

# What We've Learned

- Thing 1
- Thing 2

---
template: inverse

# Questions?

{% endhighlight %}
