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
    </View>
  );
}
```

---

# Presets

`LayoutAnimation` comes with three ready-made `Presets`:

- `easeInEaseOut`
- `linear`
- `spring`

_We can roll our own custom animation with this module too..._

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

Using what you just learned about `LayoutAnimation`, add animation to your About screen to toggle of the visibility of each Code of Conduct item when they are tapped.

Each Code of Conduct item should be closed by default.

Note that you can use one of the built-in `Presets` for this exercise, or create your own custom configuration object to control the animation if you like.

---

template: inverse

# Animated Module

---

# Animated

- Allows more complex, finer-grained animation than `LayoutAnimation`
- Some knowledge of how CSS animation works can be helpful, as we will be animating style properties
- Great for animating anything that you would animate with a CSS transform (e.g. `rotate`, `translateX`, or `translateY`, `scale`, etc.)

---

# Animation Types

React Native support three different **animation types**:

- `spring`: simple spring physics model that you can set `friction` (bounciness) and `tension` (speed) on
- `decay`: starts with an initial velocity and slows to a stop, and you can set the `velocity` (required) and `deceleration` (rate of decay)
- `timing`: maps time range to easing value, and allows you to set the `duration` (default is 500ms), `easing` (type of curve), and `delay` (in milliseconds)

---

# Animated Components

RN also supports three types of **animated UI components**:

- `<Animated.View />`
- `<Animated.Image />`
- `<Animated.Text />`

There's also an easy way to turn any component into an animated component:

```js
let AnimatedButton = Animated.createAnimatedComponent(Button);
```

---

# Basic Example

**Step 1:** Add a new `Animated.ValueXY()` to our state

```js
this.state = {
  translateValue: Animated.ValueXY(),
};
```

Note that `Animated.ValueXY` is **for vectors only** (in other words, 2D animations, and it works well when responding to gestures with the `PanResponder` module).

We will use `Animated.Value()` for animating all other types of values (more on that to come...).

---

# Basic Example

**Step 2:** Create an animation method

```js
animateCircle = () => {
  Animated.spring(this.state.translateValue, {
    toValue: { x: 50, y: 100 },
  }).start();
};
```

Note that the first argument to `Animated.spring()` is the value we want to drive, and the second is the configuration for the animation.

---

# Basic Example

**Step 3:** Update the `render` method

```js
render() {
  let animatedStyles = {
    transform: [
      { translateX: this.state.translateValue.x },
      { translateY: this.state.translateValue.y }
    ]
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={this.onCirclePress}>
        <Animated.View style={[styles.circle, animatedStyles]} />
      </TouchableWithoutFeedback>
    </View>
  );
}
```

---

class: center, middle

.large[
Now let's animate different styles at the same time...
]

---

# Parallel Animations

Set a new `Animated.Value()` in the `constructor`:

```js
this.state = {
  translateValue: new Animated.ValueXY(),
  color: new Animated.Value(0),
};
```

What you pass into `Animated.Value()` can range from `0` to `1`. This value represents the percentage of the animation's completion (from 0% to 100%).

---

# Parallel Animations

To animate the colour of the component at the same time as the translate animation, we can use `Animated.parallel()`:

```js
Animated.parallel([
  Animated.spring(this.state.translateValue, { toValue: { x: 50, y: 100 } }),
  Animated.timing(this.state.color, {
    toValue: 1,
    duration: 600,
  }),
]).start();
```

---

# Parallel Animations

Then update the `render` method again:

```js
render() {
  let color = this.state.color.interpolate({
    inputRange: [0, 1],
    outputRange: ['red', 'pink']
  });

  let animatedStyles = {
    transform: [
      { translateX: this.state.translateValue.x },
      { translateY: this.state.translateValue.y }
    ],
    backgroundColor: color
  };

  // our other code...
}

```

---

# Interpolation?

- How we fill in frames between the "key frames"
- Also known as "inbetweening" (the overall process is "keyframe animation")
- Historically, junior animators would fill in the frames between key frames that the master animator had drawn
- Today, the in-betweens are the results of the computer interpreting what needs to be filled in between key frames
- Key to nice, smooth, natural animation

---

# Interpolation

The `.interpolate` method creates a new animation based on an existing one by mapping its values to a different range. We define how a style property is changed in our `render` method using `interpolate()`.

We can map an `inputRange` of `[0, 1]` to an `outputRange` of `[0, 100]`, or map strings like degrees of rotation, or even colours like `['red', 'pink']`:

```js
const spin = this.state.spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg'],
});
```

---

# Make it Loop!

```js
animateCircle = () => {
  this.state.translateValue.setValue({ x: 0, y: 0 });
  this.state.color.setValue(0);

  Animated.parallel([
    Animated.spring(this.state.translateValue, { toValue: { x: 50, y: 100 } }),
    Animated.timing(this.state.color, {
      toValue: 1,
      duration: 600,
    }),
  ]).start(animation => {
    if (animation.finished) {
      this.animateCircle();
    }
  }); // just pass a callback in here and recursively call the method
};
```

---

# Sequenced Animations

Rather than running our animation at the same time, we can run the one after another using `Animated.sequence()`:

```js
Animated.sequence([
  Animated.spring(this.state.translateValue, { toValue: { x: 50, y: 100 } }),
  Animated.timing(this.state.color, {
    toValue: 1,
    duration: 600,
    easing: Easing.linear,
  }),
]).start();
```

---

# Exercise 2

Using what you just learned about the `Animated` module, create a `spin` method in your Code of Conduct item component to rotate the "+" sign 360 degrees when the item is toggled open using `Animated.timing()`.

Be sure to also change the "+" to a "-" when the item toggles open (and back again when it is closed).

---

# What We've Learned

- How to use the `LayoutAnimation` module for basic UI animations
- How to use the `Animated module` for more complex animations

---

template: inverse

# Questions?

{% endhighlight %}
