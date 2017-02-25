---
layout: slidedeck
title: React Native Animation Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# React Native Animations

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Explore the `LayoutAnimation` module
2. Explore the `Animated` module

---
template: inverse

# LayoutAnimation Module

---

# LayoutAnimation

- The **easiest option** for basic animation
- Can get up and running with one line of code, and all the interpolation is taken care of for you
- Great for animating heights and widths, or transitioning between visible "tabs"
- But the [official documentation](https://facebook.github.io/react-native/docs/layoutanimation.html) is a bit sparse [(source code)](https://github.com/facebook/react-native/blob/master/Libraries/LayoutAnimation/LayoutAnimation.js)

---

# An Example

The following code would apply the `spring` animation preset to any layout changes that occur during the next render cycle:

```js
onPress = () => {
  // LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

  LayoutAnimation.spring(); // SHORT-HAND VERSION OF ABOVE LINE
  this.setState({ fontSize: this.state.fontSize * 1.25 });
}

render() {
  return (
    <View>
      <TouchableOpacity onPress={this.onPress}>
        <Text style={% raw %}{{fontSize: this.state.fontSize}}{% endraw %}>Resize me!</Text>
      </TouchableOpacity>
    </View >
  );
}
```


---

# Presets

`LayoutAnimation` comes with three ready-made `Presets`:

- `easeInEaseOut`
- `linear`
- `spring`

*We can roll our own custom animation with this module too...*

---

# Custom Config Object

How to create a custom config object for `LayoutAnimation`:

```js
const animationConfig = {
  duration: 2000,
  update: {
    type: 'spring', 
    springDamping: 0.1, // lower == more dramatic spring 
  },
};

LayoutAnimation.configureNext(animationConfig);
```

The `type` can als be set to `easeIn`, `easeInEaseOut`, `easeOut`, `linear`, or `keyboard`.

---

# Custom Config Object

We can also add `create` and `delete` properties to this object to animate views as they are added or removed:

```js
const animationConfig = {
  duration: 2000,
  create: {
    type: 'spring', 
    property: 'scaleXY',
    springDamping: 0.7,
  },
  delete: {
    type: 'linear',
    property: 'opacity', // also scaleXY
  },
};

LayoutAnimation.configureNext(animationConfig);
```

---

# Config Helper Function

```js
const config = LayoutAnimation.create(400, 'linear', 'opacity');
```

What's stored in `config` would then look like this:

```js
{
  duration: 400,
  create: {
    type: 'linear',
    property: 'opacity',
  },
  update: {
    type: 'linear',
  },
  delete: {
    type: 'linear',
    property: 'opacity',
  },
}
```

---

# On Android

Note that to make our `LayoutAnimation` work on Android, we will need some additional modules and config:

```js
import {
  LayoutAnimation,
  Platform,
  UIManager,
  // ...other imports
} from 'react-native';

constructor() {
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental 
    && UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
```

---

# Exercise 1

Using what you just learned about `LayoutAnimation`, add animation to your About scene to toggle of the visibility of each Code of Conduct item when they are tapped.

Each Code of Conduct item should be closed by default.

Note that you can use one of the built-in `Presets` for this exercise, or create your own custom configuration object to control the animation if you like.

---
template: inverse

# Animated Module

---

# Animated

---

# Interpolation

- How we fill in frames between the "key frames"
- AKA "inbetweening" (the overall process is "keyframe animation")
- The in-betweens are the results of the computer interpreting what needs to be filled in to get this pose that another pose
- Junior animators will fill in the frames between key frames that the master animator had drawn
- Now we have computers for that...
- Key to nice, smooth, natural animation...

---

# What We've Learned

- How to use the `LayoutAnimation` module for basic UI animations
- How to use the `Animated module for more complex animations

---
template: inverse

# Questions?

{% endhighlight %}
