---
layout: lesson
title: React Native Animation
slides: ['_slides/week-17/01-animation.md']
lesson_date: 2020-01-27
---

## Pre-work

_There is no pre-work for this lesson._

---

## Learning Objectives

- Use React Native's `LayoutAnimation` module to add basic animation to an app's UI, including animated toggling of a component's visibility.
- Use React Native's `Animated` module to add more complex animation to an app's UI by targeting specific style properties and adding custom interpolation between key frames.

---

## Keywords

- `LayoutAnimation`
- `Animated`
- `UIManager`
- Interpolation

---

## Exercise 1

Using what you just learned about `LayoutAnimation`, add animation to your About screen to toggle of the visibility of each Code of Conduct item when they are tapped.

Each Code of Conduct item should be closed by default.

Note that you can use one of the built-in `Presets` for this exercise, or create your own custom configuration object to control the animation if you like.

---

## Exercise 2

Using what you just learned about the `Animated` module, create a `spin` method in your Code of Conduct item component to rotate the "+" sign 360 degrees when the item is toggled open using `Animated.timing()`.

Be sure to also change the "+" to a "-" when the item toggles open (and back again when it is closed).

---

## Lab Activity

In today's lab, you'll continue work on Project 4.

---

## Additional Resources

Official React Native documentation:

- [LayoutAnimation](https://facebook.github.io/react-native/docs/layoutanimation.html)
- [Animated](https://facebook.github.io/react-native/docs/animated.html)
- [Animations](https://facebook.github.io/react-native/docs/animations.html)

A few helpful examples of how to add animation to a React Native app:

- React Native animations revisited:
  - [ Part I: Simple and pretty LayoutAnimation](https://blog.callstack.io/react-native-animations-revisited-part-i-783143d4884#.z360di9va)
  - [ Part II: Amazing Animated API](https://blog.callstack.io/react-native-animations-revisited-part-ii-8314a97162b0#.z6mmo24o8)
  - [Part III: How to handle gestures with PanResponder](https://blog.callstack.io/react-native-animations-revisited-part-iii-41ed43d1ce2e#.dzx6snym1)
- [React Native’s LayoutAnimation is Awesome](https://medium.com/@Jpoliachik/react-native-s-layoutanimation-is-awesome-4a4d317afd3e#.cbt1y3a1w)
- [Animate Your React Native App](https://code.tutsplus.com/tutorials/working-with-animations-in-react-native--cms-27328)
