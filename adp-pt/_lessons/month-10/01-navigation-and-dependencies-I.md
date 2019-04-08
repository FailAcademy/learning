---
layout: lesson
title: Navigation and Dependencies
slides: ['_slides/month-10/01-navigation-and-dependencies-I.md']
lesson_date: 2020-03-03
---

## Pre-work

Complete all of the exercises from the previous lessons.

---

## Learning Objectives

- Distinguish how navigation in a mobile application is different from a web application.
- Explore built-in navigation options options in React Native.
- Add a the `react-navigation` module to a React Native app as an all-in-one, cross-platform tab bar, drawer, and navigator solution.

---

## Keywords

- Navigation stack
- Push
- Pop
- Navigator
- Tab bar

---

## Exercise 1

First, install `react-navigation` in your R10 project. Next, create a `navigation` sub-directory in the `js` directory of R10. Add a file called `RootStackNavigator.js` to it.

Import `createStackNavigator` from `react-navigation` in this new file, and use it to create a stack navigator with your About screen as its only route (you will need to import it!). Make this your default export from `RootStackNavigator.js`.

Finally, import your new `RootStackNavigator` component into `App.js`, and nest it inside your `ApolloProvider` (removing the`About` component now). Does it work? How do you add a title to the navigation bar?

---

## Exercise 2

Read through the **[Tab navigation docs](https://reactnavigation.org/docs/en/tab-based-navigation.html)** learn how to add your new About stack to your `createBottomTabNavigator`. If you have created other screens already, create stacks for those those as well and add them to the tab navigator.

Next, instead of using your About screen directly inside your `RootStackNavigator`, use `NavigationLayout` instead.

But we have a problem now! There are two navigation bars at the top of the app (one for the root stack, the other for the nested stack). You can find a hint for hiding the nav bar for the `RootStackNavigator` **[in this example in the docs](https://reactnavigation.org/docs/en/stack-navigator.html#modal-stacknavigator-with-custom-screen-transitions)**.

---

## Exercise 3

Add **[some tab bar options](https://reactnavigation.org/docs/en/tab-navigator.html#tabbaroptions-for-tabbarbottom-default-tab-bar-on-ios)** to configure its style.

Tab bar options are passed into `createBottomTabNavigator` as its second argument, e.g.:

`{ tabBarOptions: { /* your options here... */ } }`

Set the `activeTintColor` (white), `inactiveTintColor` (medium grey), the font size to `10` using `labelStyle`, and the background color (black) using `style`.

We'll add the icons next!

---

## Additional Resources

React Native docs on navigation:

- [Navigation](https://facebook.github.io/react-native/docs/navigation.html)

React Navigation documentation:

- [React Navigation (v2)](https://reactnavigation.org/)
