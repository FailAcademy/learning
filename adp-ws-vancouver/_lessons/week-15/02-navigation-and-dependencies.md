---
layout: lesson
title: Navigation and Dependencies
slides: ['_slides/week-15/02-navigation-and-dependencies.md']
lesson_date: 2020-01-15
---

## Pre-work

_There is no pre-work for this lesson._

---

## Learning Objectives

- Distinguish how navigation in a mobile application is different from a web application.
- Explore built-in navigation options options in React Native.
- Add a the `react-navigation` module to a React Native app as an all-in-one, cross-platform tab bar, drawer, and navigator solution.
- Add third-party package to a React Native app, such as `react-native-vector-icons` and `react-native-linear-gradient`.
- Use `react-native link` to link native dependencies in a application, and manually link native dependencies where `react-native link` cannot be used.

---

## Keywords

- Navigation stack
- Push
- Pop
- Navigator
- Tab bar
- Sliding drawer

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

## Exercise 4

Our app is going to need some icons, so for that we're going to add the **[React Native Vector Icons package](https://github.com/oblador/react-native-vector-icons)**. Note that this package's native dependencies can be automatically linked with `react-native link`.

Next, import Ionicons into `NavigationLayout.js`. Add a `navigationOptions` key to your tab bar config object, and render the correct icon for each tab. An icon should be `white` if selected, and medium grey if not.

**[Use this example from the React Navigation docs](https://reactnavigation.org/docs/en/tab-based-navigation.html#customizing-the-appearance)** to help complete this exercise.

---

## Exercise 5

We want to use Montserrat as a custom font in our app, and `react-native link` can help with this too.

Inside of the app's `package.json` file, add the following:

```js
"rnpm": {
  "assets": [ "js/assets/fonts" ]
}
```

Move your project's fonts into the above directory and run `react-native link` again, then restart your app.

Use Montserrat as the `fontFamily` for the tab bar labels now to test it out.

---

## Lab Activity

We've come a long way building out the navigation scheme for our iOS app, but we still haven't added the ability to push screens onto or pop screens off of our nested stacks inside of the tab bar.

During today's lab, **focus on fully building out the Schedule screen**, as well as the related Session and Speaker screens (in that order).

### Task 1:

Build out the Schedule's `SectionList` now with session data fetched from the GraphQL API. Use the `formatSessionData` function in the following Gist to help format your data for your `SectionList` component, with time-based section headers:

**https://gist.github.com/mandiwise/bda1b921e12817373560d626970d630d**

Be sure to refer to the React Native docs to check out all of the options you have available for formatting your `SectionList`.

### Task 2:

Now tackle the Session screen. When a session item is tapped in the Schedule screen, you'll want to push the Session screen (populated with the session's specific details) on top of that nested stack navigator.

For each `TouchableHighlight` component you use to wrap each item in your Schedule list, you will need to pass its `onPress` prop **[a function that will push the Session screen on top](https://reactnavigation.org/docs/en/navigating.html)**. You will also need to add the Session screen to Schedule stack navigator config for this to work first!

Wondering how will you get access to these navigation props within presentational components (or any component that DOES NOT directly correspond to the screen in the stack navigator)? Look into the **[`withNavigation` higher-order component.](https://reactnavigation.org/docs/en/with-navigation.html)**.

Lastly, because you have already fetched the data for each individual session in the Schedule list, you don't need to query it again for the next screen. Rather, **[use route params](https://reactnavigation.org/docs/en/params.html)** to pass that already-retrieved data along to the Session screen, and only query the API for the additional data you need there (i.e. the speaker data!).

### Task 3:

Lastly (if there's still time!), work on the Speaker screen.

But there's a catch with where you will push this screen onto a navigation stack...if we push it onto a stack nested within the tab bar, the Speaker screen will have the tab bar over it (as there is currently no way to selectively hide a tab bar on an individual screen within a tab bar-enabled stack in React Navigation). This doesn't match up with what's in the prototypes.

To work around this, we will need to **push the Speaker on the top-level root stack**.

Remember, you already have the Speaker data at this point, so you don't need to re-fetch it. Pass it along as a route param.

You will also need to figure out how to pop the Speaker modal off the root stack when the "X" is tapped in the Speaker screen...

---

## Additional Resources

React Native docs on navigation:

- [Navigation](https://facebook.github.io/react-native/docs/navigation.html)

React Navigation documentation:

- [React Navigation (v2)](https://reactnavigation.org/)

Best practices for mobile nav on iOS or Android:

- [iOS Human Interface Guidelines - Navigation](https://developer.apple.com/ios/human-interface-guidelines/interaction/navigation/)
- [Material Design - Navigation](https://material.google.com/patterns/navigation.html)
