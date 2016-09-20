---
layout: slidedeck
title: Design Toolbox Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---
template: inverse

# Design Toolbox

.title-logo[![Red logo](../../public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. What is design?
2. Elements of design
3. Colour Theory
4. Principles of design
5. What's a wireframe?
6. Tools and techniques
7. Wireframing for different screen sizes

---
template: inverse

# What Is Design?

---
class: center, middle

.large[
   Design is not art.
]

---
class: center, middle

> "Design is concerned with how things work, how they are controlled, and the nature of interaction between people and technology."

&mdash;Donald A. Norman, *The Design of Everyday Things*

---
class: center, middle

.large[
   But how is design done?
]

---
template: inverse

# Elements of Design

---

# Elements of Design

1. Line
2. Shape
3. Form
4. Texture
5. Colour

---

# Line

- Line is the lifeline of our civilization
- When we organize lines we get alphabets
- The character of a line can be changed by varying its width

---

# Line

Other qualities of a line that affect its character:

- Classical (vertical and horizontal) lines are stable
- Flowing horizontal lines are peaceful
- Zigzags are exciting
- Spiral suggests infinity
- Swirling linear lines remind us of nature

---
class: center, middle

.inline-images-border[
   [![The Supply screenshot](../../public/img/slide-assets/design-supply-co-sc.png)](http://www.thesupply.com/)
]

---
class: center, middle

.inline-images-border[
   [![WCM Fest screenshot](../../public/img/slide-assets/design-wmcfest-sc.png)](http://wmcfest.com/)
]

---
class: center, middle

.inline-images-border[
   [![Web Stock 2015](../../public/img/slide-assets/design-webstock-sc.png)](http://www.webstock.org.nz/15/)
]

---

# Shape

- When you close a line, you get a shape
- Shapes control and attract our attention

---

# Shape

Shapes also have character:

- **Biomorphic/Organic** shapes are inspired by nature

- **Geometric** shapes are precise

- **Decorative** shapes applied to the surface of another shape

---
class: center, middle

### Shape is related to space

.inline-images[
   ![Figure and ground example](../../public/img/slide-assets/figure-ground-01.jpg)  
]

*Negative and positive space are equally important.*

---
class: center, middle

.inline-images-border[
   [![Newton Running](../../public/img/slide-assets/design-newton-running-sc.png)](http://runbetter.newtonrunning.com/menu)
]

---
class: center, middle

.inline-images-border[
   [![Navy Design](../../public/img/slide-assets/design-navy-sc.png)](http://www.navydesign.com.au/)
]

---
class: center, middle

.inline-images-border[
   [![Big Cartel](../../public/img/slide-assets/design-big-cartel-sc.png)](http://recap.bigcartel.com/2014/)
]

---

# Form

- Forms are three-dimensional objects
- They can be geometric or biomorphic/organic
- They have shadows on their surfaces and cast shadows
- Can be illustrated or constructed

---
class: center, middle

.inline-images-border[
   [![CSS Tricks](../../public/img/slide-assets/design-css-tricks-sc.png)](https://css-tricks.com/)
]

---
class: center, middle

.large[
   **[CSS Tetrahedron Experiment](http://paulrhayes.com/experiments/pyramid/)**
]

---

# Texture

- Real texture is the visual surface of an object (can be simulated or implied)
- Visual texture can also be simulated or implied
- **Skeuomorphism** is when web design takes cues from the physical world

---
class: center, middle

.inline-images-border[
   [![Jack Johnson Music](../../public/img/slide-assets/design-jack-johnson-sc.png)](http://jackjohnsonmusic.com/)
]

---
class: center, middle

.inline-images-border[
   [![La Maddalena](../../public/img/slide-assets/design-lamaddalena-sc.png)](http://www.lamaddalena.pl/index-low.html)
]

---

# Texture

- When we organize the visual feel of an object, we end up with **pattern**
- Pattern has to do with repetition
- We can use colour or texture to create a pattern
- All patterns have texture, not all textures have patterns
- Simplest design of a pattern is a **motif**

---
class: center, middle

.inline-images-border[
   [![Michi Ramen](../../public/img/slide-assets/design-michiramen-sc.png)](http://www.michiramen.com/)
]

---
class: center, middle

.large[
   That just leaves colour...
]

---
template: inverse

# Colour Theory

---

# Colour 101

Colour has three characteristics:

1. Hue
2. Value (aka Lightness or Brightness)
3. Saturation

---

# Hue

What we refer to as colour is technically referred to **hue**.

Hues can be **chromatic** or **achromatic**.

Hues can be **neutral** (white, black, or grey) or **near-neutral** (beige or off-white).

---
class: center, middle

.inline-images[
   ![Hue](/public/img/slide-assets/color-hue.png)  
]

.footnote.right[
   *Source: [Designing for the Web](http://www.designingfortheweb.co.uk/part4/part4_chapter17.php)*
]

---
# Value

Value is the potential for a colour to be light or dark.

**High value** colours have white added to them.

**Low value** colours have black added to them.

---
class: center, middle

.inline-images[
   ![High value](/public/img/slide-assets/color-value-high.png)  
]

.inline-images[
   ![Low value](/public/img/slide-assets/color-value-low.png)
]

.footnote.right[
   *Source: [Designing for the Web](http://www.designingfortheweb.co.uk/part4/part4_chapter17.php)*
]

---

# Saturation

Saturation is the brightness or dullness of a hue.

Colours can be **high chroma** (full intensity).

Colours can be **low chroma** (made dull by adding a complement).

---

class: center, middle

.inline-images[
   ![Saturation](/public/img/slide-assets/color-saturation.png)  
]

.footnote.right[
   *Source: [Designing for the Web](http://www.designingfortheweb.co.uk/part4/part4_chapter17.php)*
]

---
class: center, middle

.inline-images[
   ![Hue saturation value model](/public/img/slide-assets/color-hue-sat-val.png)  
]

.footnote.right[
   *Source: [Designing for the Web](http://www.designingfortheweb.co.uk/part4/part4_chapter17.php)*
]

---
class: center, middle

.large[
   But how do we know which colours go best together?
]

---
class: center, middle

.inline-images[
   ![Colour wheel gradient](../../public/img/slide-assets/color-wheel-gradient.png)
]

---

# The Colour Wheel

The Prang colour wheel is a mechanical arrangement that has 12 basic hues:

- Start with **primaries** (red, blue, yellow)
- Mix those to create **secondaries** (orange, purple, green)
- Then make **tertiaries** (belongs to primary family and a secondary family)

Using this wheel, we can create **colour harmonies**.

---
class: center, middle

.inline-images[
   ![Primary colours](../../public/img/slide-assets/color-wheel-primaries.svg)
]

---
class: center, middle

.inline-images[
   ![Secondary colours](../../public/img/slide-assets/color-wheel-secondaries.svg)
]

---
class: center, middle

.inline-images[
   ![Tertiary colours](../../public/img/slide-assets/color-wheel-tertiaries.svg)
]

---
class: center, middle

### Monochromatic Harmony

.inline-images[
   ![Monochromatic colour harmony](../../public/img/slide-assets/color-harmony-monochromatic.svg)
]

---
class: center, middle

.inline-images-border[
   [![Studio D](../../public/img/slide-assets/design-studio-d-sc.png)](http://studiodyxe.com/)
]

---

class: center, middle

### Complementary Harmony

.inline-images[
   ![Complementary colour harmony](../../public/img/slide-assets/color-harmony-complementary.svg)  
]

---
class: center, middle

.inline-images-border[
   [![Spotify House](../../public/img/slide-assets/design-spotify-house-sc.png)](http://spotifyhouse.com/)
]

---

class: center, middle

### Analogous Harmony

.inline-images[
   ![Analogous colour harmony](../../public/img/slide-assets/color-harmony-analogous.svg)
]

---
class: center, middle

.inline-images-border[
   [![Danne Olsson](../../public/img/slide-assets/design-danne-olsson-sc.png)](http://www.danneolsson.se/)
]

---
class: center, middle

.inline-images-border[
   [![Koa](../../public/img/slide-assets/design-drink-koa-sc.png)](http://www.drinkkoa.com/#top)
]

---
class: center, middle

### Split Complementary Harmony

.inline-images[
   ![Split complementary colour harmony](../../public/img/slide-assets/color-harmony-split-comp.svg)
]

---
class: center, middle

.inline-images-border[
   [![Magnet Co.](../../public/img/slide-assets/design-magnet-sc.png)](http://magnet.co/)
]

---

class: center, middle

### Triad Harmony

.inline-images[
   ![Triad colour harmony](../../public/img/slide-assets/color-harmony-triad.svg)
]

---
class: center, middle

.inline-images-border[
   [![Cake PHP](../../public/img/slide-assets/design-cake-php-sc.png)](http://cakephp.org/)
]

---

class: center, middle

### Tetrad Harmony

.inline-images[
   ![Tetrad colour harmony](../../public/img/slide-assets/color-harmony-tetrad.svg)
]

---
class: center, middle

.inline-images-border[
   [![Twitch TV](../../public/img/slide-assets/design-twitch-tv-sc.png)](http://www.twitch.tv/year/2014)
]

---

# Colour Quick Tips

- Colours "vibrate" when placed next to their colour partners
- Primary colours draw our attention
- Grey will pick-up whatever colour it's next to
- Colour has powerful emotional qualities and cultural connotations
- Colours have weight (yellow is the lightest, blue and purple are the heaviest)

---

# Exercise 1

Let's try creating colour palettes based on the colour harmony rules we just learned.

If you haven't done so already, create an **[Adobe Color CC](https://color.adobe.com/)** account and create at least five different colour palettes each based on a different colour harmony rule.

Don't limit yourself based on the built-in colour rules in the web app&mdash;be sure to try out some of the others you just learned too.

---
template: inverse

# Principles of Design

---
class: center, middle

.large[
   The **principles** of design are applied to the **elements** of design to bring our designs together.
]

---

# Principles of Design

1. Unity
2. Variety
3. Dominance
4. Balance
5. Scale/Proportion
6. Space

---

# Unity

- All elements working together to support the design as a cohesive whole
- Related to repetitions&mdash;which occur when repeating lines, shapes, colours, patterns, etc.
- Unity is related to Gestalt theory of perception
- "The whole is greater than the sum of its parts."

---
class: center, middle

.inline-images-border[
   [![Caava Design](../../public/img/slide-assets/design-caava-design-sc.png)](http://caavadesign.com/)
]

---

# Variety

- A dash or pause, in grammatical terms
- Variety makes design interesting
- Variety &ne; Chaos
- It's about creating variations on a theme
- Related to contrast&mdash;which is achieved using colour, tone/value, size/shape, and direction

---
class: center, middle

.inline-images-border[
   [![Divide by Two](../../public/img/slide-assets/design-dividebytwo-sc.png)](http://dividebytwo.pt/)
]

---

# Dominance

- What's different?
- What's bigger?
- What draws attention?
- More important elements usually receive special emphasis

---
class: center, middle

.inline-images-border[
   [![We Make Awesome Websites](../../public/img/slide-assets/design-wemakeawesomesh-sc.png)](http://wemakeawesomesh.it/)
]

---

# Balance

- Formal balance (symmetrical)
- Informal balance (asymmetrical)
- Radial symmetry (like bike spokes)
- The Golden Ratio
- White space leaves breathing room

---
class: center, middle

.inline-images-border[
   [![Giang Nguyen](../../public/img/slide-assets/design-giang-nguyen-sc.png)](http://giangnguyendesign.com/)
]

---

# Scale/Proportion

- Scale and proportion are related to size
- Scale is an outside measure ("this is to that")
- Proportion is an inside measure ("size of parts to whole")
- Visual hierarchy communicates priority

---
class: center, middle

.inline-images-border[
   [![Loubsol](../../public/img/slide-assets/design-loubsol-sc.png)](http://loubsol.com/)
]

---

# Space

- In two-dimensional design (like on the web), space creates the illusion of a third dimension
- As shapes move back in space they appear to get smaller
- Overlap creates the illusion of space
- Aerial perspective (the misty horizon effect)
- Hard lines help create contrast in space
- Space can be shallow or deep

---
class: center, middle

.inline-images-border[
   [![Fast Forwrd Labs](../../public/img/slide-assets/design-fast-forward-labs-sc.png)](http://www.fastforwardlabs.com/)
]

---
class: center, middle

.large[
   Rules, rules, rules!
]

---
class: center, middle

.large[
   Knowing the rules lets you know when to break them.
]

---

# Exercise 2

Go to **[Unmatched Style](http://unmatchedstyle.com/)** and find an example of what you think is a well-designed website.

Jot down some notes about how it uses the elements and principles of design in terms of its layout and overall visual design.

After a few minutes evaluating your chosen website, team up with another class member and exchange your observations.

---
template: inverse

# What's a Wireframe?

---
class: center, middle

### A Definition

A wireframes is a simple representation of a website in simple visual blocks. It's like a blueprint showing where elements will be situated on the page, without any styling.

---
class: center, middle

.inline-images[
   ![Wireframe example](../../public/img/slide-assets/wireframe-sample-01.png)
]

.footnote.right[
   Image Credit: [Rob Enslin](https://www.flickr.com/photos/doos/4689874175/)
]

---
class: center, middle

.inline-images[
   ![Sketched wireframe example](../../public/img/slide-assets/wireframe-sample-02.jpg)
]

.footnote.right[
   Image Credit: [Mike Rohde](https://www.flickr.com/photos/rohdesign/3307873748/)
]

---
class: center, middle

.inline-images[
   ![Tablet-drawn wireframe example](../../public/img/slide-assets/wireframe-sample-03.jpg)
]

.footnote.right[
   Image Credit: [baldiri](https://www.flickr.com/photos/baldiri/5734993652/)
]

---
class: center, middle

# Why do we wireframe?

---
class: center, middle

.large[
   Clarifies features early on.
]

---
class: center, middle

.large[
   Exposes navigation & usability issues up front.
]

---
class: center, middle

.large[
   Makes the design process more iterative.
]

---
class: center, middle

.large[
   Saves time.
]

---

# What to include?

Elements commonly found in wireframes include:

- Header (logo), headings, and sub-headings
- Navigation menus
- Search field
- Body content
- Share buttons
- Footer

---
class: center, middle

## What to leave out?

Wireframing is mostly about roughing-out the user interface and the prioritization of content, not the design.

---

# Exercise 3

Go to **[Unmatched Style](http://unmatchedstyle.com/)** again and pick a website to reductively transform into a wireframe.

Using some of the provided wireframe sketch paper, sketch what you think a wireframe should look like for the desktop width of that website.

If you have time, try sketching out wireframes for its mobile phone and tablet widths too.

Tip: Choose a website with some interesting layout features!

---
template: inverse

# Tools & Techniques

---
background-image: url(../../public/img/slide-assets/sketchbook-and-pen.jpg)

.footnote[
   Image Credit: [Startup Stock Photos](http://startupstockphotos.com/)
]

---

# Online Tools

These are just a few of the online wireframing tools available:

- [Balsamiq](http://www.balsamiq.com)
- [Mockingbird](http://www.gomockingbird.com)
- [wireframe.cc](https://wireframe.cc/)

---
class: center, middle

.large[
   ...or any tool that will let you draw lines and boxes!
]

---
template: inverse

# Wireframing Responsively

---
class: center, middle

.large[
   Wireframes are a great place to start working out how to responsively design a website.
]

---
class: center, middle

.inline-images[
   ![Responsive wireframes](../../public/img/slide-assets/responsive-wireframe-sketch.jpeg)
]

.footnote.right[
   Image Credit: [Juan Arreguin](https://dribbble.com/shots/185755-Media-Queries)
]

---

# Exercise 4

Try out one of the recommended wireframing tools for this lesson, and quickly mock-up a wireframe based on the desktop sketch that you produced in the last exercise.

---

# What We've Learned

- The difference between design and art
- The elements and principles of design
- The difference between hue, value, saturation
- How to create colour harmonies
- How to create wireframes to plan website projects

---
template: inverse

# Questions?

{% endhighlight %}
