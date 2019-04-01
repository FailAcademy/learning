---
layout: slidedeck
title: Intro to SVGs Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to SVGs

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

- Learn how to build SVGs from scratch

---

template: inverse

# SVGs

---

class: center, middle

.large[
**Review time!**

What is an SVG?<br /> What do they do for us?
]

---

# SVG Features

- **Solid browser support** (standard was developed in 1999)
- **Scales like a champ**, so SVGs look great on high-density pixel displays...but they're small! (best of both worlds)
- You can **embed them directly in an HTML document** (as inline SVGs) and target CSS or JS at them just like normal DOM elements (and animate them!)
- You can include them in the `src` attribute of an `<img>` element (as we have done), but you won't be able to target CSS or JS directly at them

---

# SVG vs. HTML5 Canvas?

- SVG is for rendering vector graphics, while canvas renders raster graphics
- Canvas requires a single DOM element, `<canvas>`, that we draw a picture into (using JS)
- After canvas draws the picture, it has no memory of what the pixels represent (so to create animations, you clear out the canvas element, then re-draw it)

---

# How Do We Make One?

SVGs look a lot like HTML elements:

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  viewBox="0 0 100 100"
  width="100"
  height="100"
>
  <rect x="0" y="0" width="50" height="50" />
</svg>
```

**Note:** SVG files aren't actually HTML, they are XML. The `xmlns` attribute changes the the `<svg>` element (and it's children) to a different namespace, so we can use elements like `<rect>` that don't exist in HTML.

The `version="1.1"` attribute refers to the version of the SVG spec we're using.

---

# SVG Workspace

- **Viewport**: The viewport **defines visible area of the SVG**.The canvas where an SVG is drawn is conceptually infinite in both dimensions, but parts of the SVG that lie beyond the viewport are clipped off. The `width` and `height` attributes on an `<svg>` define the viewport dimenions.
- **Viewbox**: The `viewBox` defines the coordinate system we will use to draw SVGs onto the canvas. Think of it as a **nested coordinate system** that can be larger or smaller than the viewport. The first two coordinates define the top/left `x` and `y` values of the `viewBox`, the last two define the height and width.

---

# Try It Out

Paste the SVG example (two slides back) into a Codepen...

- Change the `viewBox` to `0 0 50 50`. What happens?
- Now try `0 0 200 200`. What do you observe?
- Next, try `25 25 100 100`. What happens to the rectangle now? Is this what you expect?
- Finally, add `preserveAspectRatio="none"` as a new attribute on the SVG element, and change the `viewBox` value to `0 0 100 200`. How do you explain this behaviour?

---

# More on Rectangles

We have seen how we can specify the top-left coordinates and width/height of rectangle.

We can also specific the border radius of the corners with `rx` and `ry` attributes, change the fill colour, or add a `stroke`:

```html
<rect
  x="0"
  y="0"
  width="50"
  height="50"
  fill="#FFFFFF"
  stroke="#000000"
  stroke-width="5"
/>
```

What happens to the stroke in relation to the viewport?

**Try it with CSS!** Add an `id` to the `<rect>` and set `stroke`, `stroke-width`, and `fill` as CSS properties instead.

---

# All Shapes and Sizes

We can make much more than rectangles in SVGs:

```html
<circle cx="50" cy="50" r="10" />
```

```html
<ellipse cx="50" cy="50" fill="blue" rx="15" ry="30" />
```

```html
<line x1="50" y1="0" x2="50" y2="100" stroke="black" />
```

```html
<text x="50" y="50" text-anchor="middle">SVG</text>
```

```html
<polygon points="50,20 20,80 80,80" />
```

---

# Leveling Up...

We can also group elements together:

```html
<g transform="translate(10, 10)">
  <circle cx="50" cy="30" r="10" />
  <circle cx="50" cy="70" r="10" />
</g>
```

And draw paths to create more complicated SVGs&mdash;this will look familiar to you if you've ever opened an SVG exported from Illustrator, etc.:

```html
<path d="M50,20 L50,20 L20,80 L80,80 Z"></path>
```

---

# Exercise 1

Use `<circle>`, `<rect>`, and `<line>` elements to draw an old-timey radio. The viewport and `viewBox` should be `400` by `260` pixels. All elements have a `stroke-width` of `5`:

<img src="/public/files/exercises/svg-radio-mockup.jpg" alt="SVG radio mock-up" style="display: block; margin: 0 auto;" />

---

# What We've Learned

- What elements exist in the SVG namespace, and how to use them
- What attributes can be applied to these elements

---

template: inverse

#Questions?

{% endhighlight %}
