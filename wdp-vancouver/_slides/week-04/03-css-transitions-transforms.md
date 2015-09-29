---
layout: slidedeck
title: CSS3 Transitions & Transforms
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Making things move with CSS
####Transitions, transforms & animations

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. CSS Transitions
2. CSS Transforms
3. CSS Animations
4. Use SASS to go fast!

---

template: inverse

#CSS Transitions

---

### Browser support for CSS Transitions
![CSS browser support](/public/img/slide-assets/browser-support-transitions.png)
(Watch out for IE)
---

### On the element you want to animate, add the following CSS:

```css
.my-awesome-div {
  -webkit-transition: all 1s ease-in-out 1.5s;
  -moz-transition: all 1s ease-in-out 1.5s;
  -o-transition: all 1s ease-in-out 1.5s;
  transition: all 1s ease-in-out 1.5s;
}
```
**CSS Transition syntax consist of the following properties:** <br>
`all` : The property you want to animate <br>
`1s` : The duration of your animation <br>
`ease-in-out` : The 'timing function' of your animation <br>
`1.5s` : Delay time, before the animation starts

---

### Each of these properties can be added individually:
```css
.my-awesome-div {
    transition: all;
    transition-duration: 1s;
    transition-timing-function: 'ease-in-out';
    transition-delay: 1.5s
}
```
.footnote[.red[*](Vendor prefixes left out for brevity)]

---

### This allows us to create interesting animations of multiple properties!

```css
.super-div {
  transition-property: top, left, border-radius, background-color;
  transition-duration: 2s, 1s, 0.5s, 0.5s;
  transition-delay: 0s, 0.5s, 1s, 1.5s;
}
```

---
class: center, middle

# What can be animated? <br>
http://www.w3.org/TR/css3-transitions/#properties-from-css-

---

#Exercise 1
###Create and demo:
Lets animate some things using what we've learned. Be creative!

---

template: inverse

#CSS Transforms

---

class: center, middle


### **CSS Transforms come in 2 flavours:**

  ###2D Transforms
  ###3D Transforms
---

###Browser support

2D Transforms: ![CSS browser support](/public/img/slide-assets/browser-support-2d-transforms.png)
3D Transforms: ![CSS browser support](/public/img/slide-assets/browser-support-3d-transforms.png)

---

#2D Transforms

Here is the syntax for performing 2D transforms in CSS:

```css
.skew {
  transform:skew(35deg);
}

.scale {
  transform:scale(1,0.5);
}

.rotate {
  transform:rotate(45deg);
}

.translate {
  transform:translate(10px, 20px);
}

.rotate-skew-scale-translate {
  transform:skew(3deg) scale(1.1,1.1) rotate(4deg) translate(1px, 2px);
}
```

---

### 3D Transforms are more complex, and consist of the following CSS functions:


These properties are the same as their 2D counterparts:
`rotateX( deg )` <br>
`rotateY( deg )` <br>
`rotateZ( deg )` <br>

The 3D functions require values for 3 dimensions!
`rotate3d(x, y, z, deg)` <br>
`translate3d( x, y, z)` <br>
`scale3d( x, y, z)`


---
# Get 3D with it
To activate 3D space, an element needs perspective.  This can be applied in two ways: using the `transform` property, with the perspective as a functional notation.

#### `transform: perspective( 600px );`
or
#### `perspective: 600px;`

<br>
The perspective property should apply to the parent element. All Children will share the same 3D space.

.footnote[.red[*](Vendor prefixes left out for brevity)]
---
class: center, middle

The perspective property effects how the 3D transform will look. A larger perspective value will produce a less dramatic result. A smaller value produces a more dramatic 3D effect.

---

template: inverse

#CSS Animations

---

###Browser support
![CSS browser support](/public/img/slide-assets/browser-support-css-animations.png)

---

#Try it!

```css
@keyframes resize {
  0% {
    padding: 0;
  }
  50% {
    padding: 0 20px;
    background-color:rgba(255,0,0,0.2);
  }
  100% {
    padding: 0 100px;
    background-color:rgba(255,0,0,0.9);
  }
}

.box {
  animation-name: resize;
  animation-duration: 1s;
  animation-iteration-count: 4;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
}
```

---
class: center, middle

### You can create as many intervals and as many keframes as you like!
---

#Exercise 2
###Create and demo part 2:
Lets create some other animated css elements using the techniques you've learned!

---
template: inverse

#Questions?

{% endhighlight %}
