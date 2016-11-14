---
layout: lesson
title: Navigation and Dependencies
slides: ['_slides/week-08/02-navigation-and-dependencies.md']
lesson_date: 2016-11-15
---

## Pre-work

*There is no pre-work for this lesson.*

---

## Learning Objectives

- Distinguish how navigation in a mobile application is different from a web application.
- Explore built-in navigation options options in React Native.
- Add a the `ex-navigator` module to a React Native app as a cross-platform tab bar, drawer, and navigator solution.
- Add vector-based icon fonts to a React Native app using `react-native-vector-icons`.
- Use `react-native link` to link native dependencies in a application, and manually link native dependencies where `react-native link` cannot be used.
- Manually link native dependencies (such as the `CameraRoll`) directly inside of Xcode.

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

Follow the [installation instructions](https://github.com/exponentjs/ex-navigation#installation) for ExNavigation and add it to your project.

Define your routes in `navigation/routes.js`. Define `static route = {}` in each of your scene container components to configure a nav bar title for each scene.

In your `app/index.js` file, add the `<NavigationProvider>` with a single `<StackNavigation>`, and set the `initialRoute` to your Recent scene.

Try swapping your `initialRoute` to your Random scene and see if it works also.

---

## Exercise 2

Time to add a tab bar to our iOS app. Create a file called `NavigationLayout.js` in your `app/navigation` directory. Use this file to build out a component where the `render` function returns ExNavigator's `<TabNavigation>` component.

Create a `<TabNavigationItem>` for your Recent and Random routes (you can rough out your Faves and About scene components as well now if you like). What do you need to change in your top-level `initialRoute` now?

Thinking ahead, each `<TabNavigationItem>` should have its own `<StackNavigation>` component nested inside of it too.

---

## Exercise 3

Our app is going to need some icons, so for that we're going to add the **[React Native Vector Icons package](https://github.com/oblador/react-native-vector-icons)**.

Note that this package's native dependencies can be automatically linked with `react-native link`.

Once this is done, write yourself a helper `renderIcon` function in your `NavigationLayout.js` to render the appropriate Octicon icon for each of the tabs in your tab bar. An icon should be `black` if selected, and `#999999` if not.

Add your helper function as the `renderIcon` prop on each `<TabNavigationItem>`.

---

## Exercise 4

Following the **[instructions for manual linking](https://facebook.github.io/react-native/docs/linking-libraries-ios.html#manual-linking)** in the React Native docs, add the `CameraRoll` library to your project.

You will need to library later in order to build out all of the functionality for the Photobox scene.

**Note:** You will also need to update your `info.plist` files as per **[these instructions](https://github.com/facebook/react-native/issues/10115)** to avoid fatal app crashes when saving to the camera roll for iOS 10.

---

## Lab Activity

We've come a long way building out the navigation scheme for our iOS app, but we still haven't added the ability to push scenes onto or pop scenes off of our nested stacks inside of the tab bar.

During today's lab, focus on fully building out Recent scene, as well as the related Photobox (lightbox) and User scenes.

### Task 1:

First tackle the User scene. When a given username inside the photo feed of the Recent scene is tapped, you'll want to pop the User scene (populated with the user's specific data) on top of that nested stack. You will need to write **[corresponding functions for pushing and popping routes](https://github.com/exponentjs/ex-navigation#push-and-popping-routes)** and **[pass some params into your route](https://github.com/exponentjs/ex-navigation#passing-params-to-a-route)** in order for this to work.

Looking ahead, you may consider creating a `navigationHelpers.js` file in your project, so that your pushing and popping methods can be imported and reused throughout your app.

### Task 2:

Second, build out the Photobox scene to showcase a single photo in lightbox format when tapped.

But there's a catch with how you will pop this scene onto a navigation stack...if we pop it onto a stack nested within the tab bar, the Photobox scene will have the tab bar over it (as there is currently now way to selectively shut this off within a stack in ExNavigation). This doesn't match up with what's in the prototypes.

To work around this, we will need to pop the Photobox onto the **top-level stack**.

To push on to the top-level stack, you will need to implement something that looks like this in the function were you pop the Photobox route onto the stack:

```js
this.props.navigation.getNavigator('YOUR TOP-LEVEL STACK ID HERE')
.push(Router.getRoute('ROUTE NAME HERE', {/* params go here */}));
```

Remember that you will also need to pass some params into the Photobox route as well (so it knows which specific photo to display).

---

## Additional Resources

React Native docs on navigation:

- [Navigation](https://facebook.github.io/react-native/docs/navigation.html)

More on using the built-in navigation components in RN:

- [Navigator Comparison](https://github.com/ericvicenti/navigation-rfc/blob/master/Docs/NavigationOverview.md)
- [Routing and Navigation in React Native](http://blog.paracode.com/2016/01/05/routing-and-navigation-in-react-native/)

Best practices for mobile nav on iOS or Android:

- [iOS Human Interface Guidelines - Navigation](https://developer.apple.com/ios/human-interface-guidelines/interaction/navigation/)
- [Material Design - Navigation](https://material.google.com/patterns/navigation.html)
