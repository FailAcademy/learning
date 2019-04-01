---
layout: slidedeck
title: Developing with ES2015 & Webpack Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Developing with ES2015 & Webpack

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1.  ES2015 Modules
2.  What is Webpack?
3.  How to use Webpack

---

template: inverse

# ES2015 Modules

---

class: center, middle

### Why Modules?

For the same reason an author divides a books into chapters. (Helps us keep things organized!)

---

# Problem: Global Vars

Modularizing code in ES5 often meant polluting the global namespace. For example, here the jQuery library is added to the global namespace:

```html
<!DOCTYPE html>
<body>
  <p>Hello, world!</p>
  <script src="./jquery.js"></script>
  <script src="./my-script.js"></script>
</body>
```

`$` is now a global variable, which can cause naming conflicts:

```js
// in my-script.js...

let hello = $("p").css("color", "red");
```

---

# Modules in ES5

No native or agreed upon solution in ES5:

- CommonJS
- SystemJS
- RequireJS (AMD)
- ...and more!

---

# ES2015 Modules

ES2015 standardizes modules!

Run: `npm install --save jquery`

```html
<!DOCTYPE html>
<body>
  <p>Hello, world!</p>
  <script src="./my-script.js"></script>
</body>
```

```js
// in my-script.js...
import $ from "jquery";

let hello = $("p").css("color", "red");
```

All the code in the jQuery package is completely trapped inside of this module and does not pollute the global namespace.

---

# ES2015 Modules

Using modules requires using `import`/`export` keywords:

`import`

```js
import { a } from "module";
import b from "module"; // default
import * as c from "module"; // alias
```

`export`

```js
export function a() {}
export default function b() {}
```

---

template: inverse

# Webpack

---

# What is Webpack?

Webpack is a JavaScript **module bundler**.

It's an open-source project released by Facebook.

Before we begin to use Webpack, we need to put it in context. To understand why it was created and how it works, read the [Getting Started](https://webpack.js.org/concepts/) section of the Webpack documentation.

---

# What is Webpack?

Now that we have some context for what Webpack is and what it does vs. other tools, follow the [Getting Started](https://webpack.js.org/concepts/)
tutorial. Once completed we should be able to explain the following terms:

- Module loader
- Module bundler

How does Webpack treat CSS files? How is this different from the more traditional inclusion techniques we've seen so far in the course?

---

# Exercises 1-5

Now, we're ready to install Webpack in a new project.

Follow the exercise instructions found on the [lesson page](/lesson/developing-with-es-next-webpack/).

---

# What We've Learned

- How to use `import` and `export` with ES2015 modules
- How to set-up Webpack in a project
- How to bundle our JS and use Webpack
- How to compile Sass with Webpack
- How to make our code easier to debug with source maps in Webpack

---

template: inverse

# Questions?

{% endhighlight %}
