---
layout: lesson
title: Android Apps with React Native
slides: ['_slides/month-09/06-android-II.md']
lesson_date: 2020-02-25
---

## Pre-work

Complete all of the exercises from the previous lesson.

---

## Learning Objectives

- Use platform-specific file extensions to split more complex code into multiple files.

---

## Keywords

- `Platform`

---

## Exercise 1

Time to make R10's navigation UI more platform-appropriate for Android.

To do that, you're going to use platform-specific file extensions for the `NavigationLayout` component, and implement `createDrawerNavigator` for Android in lieu of the `createBottomTabNavigator` component that we've used for the iOS app.

Create your platform specific files, and read-up on the `DrawerNavigation` component in the **[React Navigation docs](https://reactnavigation.org/docs/en/drawer-based-navigation.html)** to implement this for Android only.

---

## Lab Activity (Next Class)

In today's lab, thoroughly review your app in an Android emulator to ensure it behaves as you would expect and adequately resembles the R10's prototypes.

From there, the rest of class time this week may be spent on finishing building out any remaining requirements for your R10 project. Don't forget to take a look at the stretch goals!

---

## Additional Resources

More on building cross-platform components:

- [Better Cross-Platform React Native Components](https://medium.com/differential/better-cross-platform-react-native-components-cb8aadeba472#.jyrww11oo)

UX and Android navigation:

- [Bye, Bye Burger!](https://medium.com/startup-grind/bye-bye-burger-5bd963806015#.rbncat6ic)
