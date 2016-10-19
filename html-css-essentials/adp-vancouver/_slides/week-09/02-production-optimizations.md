---
layout: slidedeck
title: Production Optimizations Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Production Optimizations

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Introduction
2. Deep-dive
3. ...

---

# Production

- How is **production** different from **development**?
- Which production improvements do you need to make?

---
template: inverse

# Images

---

# Images

Read [Image Optimizations](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization?hl=en).
Be prepared to discuss the following:

- dimensions
- optimize size
- vector vs. raster

---
template: inverse

# Minifying code

---

# Minimizing Build

`webpack --display-modules --sort-modules-by size`

---

# Webpack Require Modules

Limit your modules by requiring only specific paths.

```js
import { x } from 'lib'
// loads the entire library in the build

import x from 'lib/x'
// loads only x in the build
```

---

# Module Partials

Some modules are broken down into their element modules.

[lodash modules](https://www.npmjs.com/browse/keyword/lodash-modularized).

If a package is popular enough, there may even be a plugin to serve the minimum modules.

[lodash-webpack-plugin](https://www.npmjs.com/package/lodash-webpack-plugin)

---

# Minify

- JS
- CSS
- HTML

---
template: inverse

# SEO

---

# SEO

- sitemap
- etc.

{% endhighlight %}
