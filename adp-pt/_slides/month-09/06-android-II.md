---
layout: slidedeck
title: Android Apps with React Native II Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Android Apps with React Native

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1.  Use platform-specific file extensions

---

template: inverse

# Platform Specific File Extensions

---

# File Extensions

We can add platform-specific files using infixes like so: <br />`[FILE NAME].ios.js` and `[FILE NAME].android.js`

Each platform specific-file is invisible to the other platform thanks to the infix.

We can extend this pattern to our own components too when our platform-specific code is too complex to manage with the `Platform` module.

---

# File Extensions

What this looks like in practice:

```bash
|-- components/
|   |-- Widget/
|   |   |-- Widget.android.js
|   |   |-- Widget.ios.js
|   |   |-- index.js
|   |   |-- styles.js
```

And in `index.js`:

```js
// automatically imports the right file!
import Widget from './Widget';

export default Widget;
```

---

# Exercise 2

Time to make R10's navigation UI more platform-appropriate for Android.

To do that, you're going to use platform-specific file extensions for the `NavigationLayout` component, and implement `createDrawerNavigator` for Android in lieu of the `createBottomTabNavigator` component that we've used for the iOS app.

Create your platform specific files, and read-up on the `DrawerNavigation` component in the **[React Navigation docs](https://reactnavigation.org/docs/en/drawer-based-navigation.html)** to implement this for Android only.

---

# What We've Learned

- How to use file extensions to build entirely platform-specific components

---

template: inverse

# Questions?

{% endhighlight %}
