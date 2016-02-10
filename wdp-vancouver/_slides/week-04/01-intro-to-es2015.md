---
layout: slidedeck
title: Intro to ES2015 Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to ES2015

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
template: inverse

# The Bad Parts

---
layout: false

#Bad Parts - Review

When writing JavaScript, you should know:

```js
'' == '0' // false
0 == ''   // true
0 == '0'  // true

false == 'false' // false
false = '0'  // true

false === undefined // false
false === null // false
null === undefined // false
```
---
#Bad Parts - Review

**Falsy Values**:

```js
0
NaN
undefined
null
''
```
... You can use any of these to trigger false from a conditional!

---

#Bad Parts - Review

#### Immutable Data & Globals

The JavaScript language depends on global variables, and this is considered bad.
Why?

**Globals can be overwritten from anywhere in your program!**

---

<img width="500" src="http://pre05.deviantart.net/ce84/th/pre/i/2013/105/f/7/genius_in_hd_by_lemmino-d61sxub.png"/>

---
template: inverse

# Review

<!-- - End this section with block-scope and `this`
- Transition to ES2015 with premise: Making JavaScript Better
- Mention JavaScript is highly transitional, and this is causing problems we'll see with React. -->

---

# Main improvements

- Global scope
- `this`
- Inheretance (class)
- Block scope
- Immutable values!

---

template: inverse

# Questions?

{% endhighlight %}
