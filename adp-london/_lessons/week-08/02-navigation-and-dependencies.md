---
layout: lesson
title: Navigation and Dependencies
slides: ['_slides/week-08/02-navigation-and-dependencies.md']
lesson_date: 2017-08-22
---

## Pre-work

*There is no pre-work for this lesson.*

---

## Learning Objectives

- Distinguish how navigation in a mobile application is different from a web application.
- Explore built-in navigation options options in React Native.
- Add a the `ex-navigation` module to a React Native app as an all-in-one, cross-platform tab bar, drawer, and navigator solution.
- Integrate Redux into a React Native app and use it to manage navigation state.
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

Follow the [installation instructions](https://github.com/expo/ex-navigation#installation) for ExNavigation and add it to your project.

Define your routes in `navigation/routes.js`. Define `static route = {}` in each of your scene container components to configure a nav bar title for each scene.

In your `app/index.js` file, add the `<NavigationProvider>` with a single `<StackNavigation>`, and set the `initialRoute` to your Schedule scene.

Try swapping your `initialRoute` to your About scene and see if it works also.

---

## Exercise 2

Now set up the `reducers.js` file in the `redux` directory.

Be sure to import `combineReducers` into this file, as well as the named `NavigationReducer` export from ExNavigation. Export your combined reducers from this file.

Next, provide the `NavigationContext`, directly to the `NavigationProvider` component in your app's main `index.js` file. You'll also need to wrap everything in the `Provider` component from `react-redux`, just like usual.

Please refer to the **[ExNavigation docs](https://github.com/expo/ex-navigation#integrate-with-your-existing-redux-store)** for assistance completing this exercise.


---

## Exercise 3

Time to add a tab bar to our iOS app. Create a file called `NavigationLayout.js` in your `js/navigation` directory. Use this file to build out a component where the `render` function returns ExNavigator's `<TabNavigation>` component.

Create a `<TabNavigationItem>` for your About and Schedule routes. What do you need to change in your top-level `initialRoute` now?

Thinking ahead, each `<TabNavigationItem>` should have its own `<StackNavigation>` component nested inside of it too.

---

## Exercise 4

Our app is going to need some icons, so for that we're going to add the **[React Native Vector Icons package](https://github.com/oblador/react-native-vector-icons)**.

Note that this package's native dependencies can be automatically linked with `react-native link`.

Once this is done, write yourself a helper `renderIcon` function in your `NavigationLayout.js` to render the appropriate Octicon icon for each of the tabs in your tab bar. An icon should be `white` if selected, and `#999999` if not.

Add your helper function as the `renderIcon` prop on each `<TabNavigationItem>`.

---

## Exercise 5

We want to use Montserrat as a custom font in our app, and `react-native link` can help with this too.

Inside of the app's `package.json` file, add the following:

```js
"rnpm": {
  "assets": [
    "js/assets/fonts"
  ]
}
```

Move your project's fonts into the above directory and run `react-native link` again. You should now be able to set the `fontFamily` to `Montserrat` and `Montserrat-Light` in your app...without crashing it :)

---

## Lab Activity

We've come a long way building out the navigation scheme for our iOS app, but we still haven't added the ability to push scenes onto or pop scenes off of our nested stacks inside of the tab bar.

During today's lab, **focus on fully building out the Schedule scene**, as well as the related Session and Speaker scenes (in that order). 

And don't forget to **use Redux** to manage all state-related concerns when fetching data from the Firebase endpoints!

### Task 1:

Before you jump into building out the Schedule, Session, and Speaker scenes, **refactor your About scene to use Redux** to manage the state of the Code of Conduct points fetched from Firebase. 

Define your Code of Conduct actions and action creators, and add its reducer to your `reducer.js` file.

Next, wrap your `AboutContainer` component in the `connect` HOC and pass the appropriate state information into your `AboutContainer` as props.

Repeat this pattern for all other scene container components you build for the rest of the week.

### Task 2:

Build out the schedule `ListView` now with session data fetched from Firebase. Use the `formatSessionData` function in the following Gist to help format your Firebase data for your `ListView` component, with time-based section headers:

**https://gist.github.com/mandiwise/bda1b921e12817373560d626970d630d**

**[Check out this article](https://medium.com/@darylrowland/reactnative-listview-with-section-headers-99a6714282c3#.piq7ar67t)** for help figuring how to instantiate and populate a `ListView.DataSource` to include section headers in your Schedule list.

### Task 3:

Now tackle the Session scene. When a session item is tapped in the Schedule scene, you'll want to pop the Session scene (populated with the session's specific details) on top of that nested stack.

You will need to write **[corresponding functions for pushing and popping routes](https://github.com/expo/ex-navigation#perform-navigation-actions-from-outside-of-a-component)** when storing navigation state in your Redux store, and **[pass some params into your route](https://github.com/expo/ex-navigation#passing-params-to-a-route)** in order for this to work.

As an example, your helper for pushing a Session scene on top of your Schedule's stack might look like this:

```js
import { NavigationActions } from '@expo/ex-navigation';
import Store from '../redux/store';
import Router from '../navigation/router';

export const goToSession = (currentNavigatorUID, sessionData) => {
  Store.dispatch(NavigationActions.push(
    currentNavigatorUID, 
    Router.getRoute('session', { sessionData })
  ));
}
```

Consider creating a `navigationHelpers.js` file in your project, so that your pushing and popping methods can be imported and reused throughout your app.

Using the params you pass into the Session route, you'll be able to populate this data into the scene from the component's props.

### Task 4:

Lastly (if there's still time!), work on the Speaker scene.

But there's a catch with how you will pop this scene onto a navigation stack...if we pop it onto a stack nested within the tab bar, the Speaker scene will have the tab bar over it (as there is currently no way to selectively hide a tab bar on an individual scene within a tab bar-enabled stack in ExNavigation). This doesn't match up with what's in the prototypes.

To work around this, we will need to **push the Speaker onto the top-level stack**.

To push the Speaker on to the top-level stack, you will need to implement something that looks like this in your `navigationHelpers.js` file:

```js
export const goToSpeaker = (speakerData) => {
  Store.dispatch(NavigationActions.push(
    'root', 
    Router.getRoute('speaker', { speakerData })
  ));
}
```

It's up to you to figure out how to write a function to pop it off the stack when the "X" is tapped in the Speaker scene...

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
