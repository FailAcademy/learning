---
layout: lesson
title: Introducing React Native II
slides: ['_slides/month-09/02-intro-to-react-native-II.md']
lesson_date: 2020-02-06
---

## Pre-work

Please ensure you have completed the exercises from the previous class.

---

## Learning Objectives

- Use the built-in list view UI components to display vertical scrolling lists of dynamic data in a React Native application.
- Populate a `<FlatList>` component with data fetched from third-party API.
- Explore strategies for organizing React Native projects.

---

## Keywords

- `ListView`
- `FlatList`
- `SectionList`

---

## Exercise 1

Now you're going to build a slightly more complex `<FlatList>` in your `HelloWorld` app to display a list of users.

The URL below contains JSON with data for 100 robot users:

https://robot-data.firebaseio.com/robots.json

Your goal is to build a `<FlatList>` that renders the data like this:

<p style="display: flex; justify-content: center;" }>
  <img src="/public/exercises/rn1-e3.png" alt="Exercise screen cap" style="width: 50%; height: 50%;border: 1px solid #e2e2e2;"/>
</p>

Bonus points if you figure out how to sort the robots alphabetically by first name.

---

## Lab Activity (Next Class)

In today's lab, we're going to start working on the R10 project.

Begin by creating a new React Native app name `R10`. Working from the project's design comps, plan out the directory structure for your app.

You will need to **[install Apollo Client](https://www.apollographql.com/docs/react/essentials/get-started.html)** to access the GraphQL API data in your app (remember to use `yarn add` instead of `npm install`).

Your goal for today is to build out and style the `About` screen for your app. Don't worry about adding the toggling animation on the Code of Conduct points yet (we'll work on that at the end of the week). For now, just display all of the Code of Conduct content statically.

Be sure to **add a loading state** to your screen while content is being fetched... in other words, display an `ActivityIndicator` component in the screen until the request to the GraphQL API for the Code of Conduct points is complete.

In preparation for tomorrow's lesson on navigation, you may also want to rough out container components for the app's other screens (i.e. `Schedule`, `Session`, `Speaker`, and `Faves`).

Be sure to set-up all of the colors for your app in an object exported from `config/styles.js` too.

---

## Additional Resources

More on list view-type components:

- [Using List Views](http://facebook.github.io/react-native/docs/using-a-listview.html)
- [How to use the FlatList Component — React Native Basics](https://medium.com/react-native-development/how-to-use-the-flatlist-component-react-native-basics-92c482816fe6)
- [React Native Basics: How to Use the ListView Component](https://medium.com/differential/react-native-basics-how-to-use-the-listview-component-a0ec44cf1fe8#.asxki5zib)

Miscellaneous RN resources:

- [React Native: Idea to Product in One Week](https://medium.com/adjust-creative/prototyping-with-react-native-an-idea-to-production-in-one-week-3a6b4f474897#.ysexqnc13)
- [Building the F8 2016 App](http://makeitopen.com/tutorials/building-the-f8-app/planning/)

Resources for adding custom app splash screens and icons:

- [iOS Human Interface Guidelines - App Icon](https://developer.apple.com/ios/human-interface-guidelines/graphics/app-icon/)
- [iOS Human Interface Guidelines - Launch Screen](https://developer.apple.com/ios/human-interface-guidelines/graphics/launch-screen/)
- [MapAppIcon](https://makeappicon.com/)
- [iPhone X Launch Image Sizes (+ other sizes)](http://www.steventso.com/posts/iphone-x-app-icon-size-other-sizes/)
- [How to Add a Splash Screen to a React Native App (iOS and Android)](https://medium.com/handlebar-labs/how-to-add-a-splash-screen-to-a-react-native-app-ios-and-android-30a3cec835ae)
- [Splash Screen Pro](https://splashscreen.pro/) (a paid resource, but worth it!)
