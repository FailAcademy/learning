---
layout: slidedeck
title: Android Apps with React Native Slides
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

1.  Set up our Android dev environment
2.  Explore RN's cross-platform capabilities
3.  Use the `Platform` module
4.  Use platform-specific file extensions

---

template: inverse

# Android Dev Environment

---

# Set-up

Developing React Native apps for Android takes a bit more set-up work than installing Xcode.

To begin, please ensure that you have completed all of the **[pre-work for this lesson](/lesson/04-android/)**, including installing/upgrading Java, installing Android Studio and the Android SDK, and adding at least one emulator.

---

# Starting Your App

Before you can run your app, you need to power up the emulator to run it on. You must launch an Android emulator from **within Android Studio first**.

Finally, you can `cd` into your RN app directory and run:

```bash
react-native run-android
```

---

# Debugging Tools

.left-column[
![React Native debugging](/public/img/slide-assets/rn-android-debugging.png)
]

.right-column[
We have a similar set of RN dev tools available when running the Android emulator.

However, we will have to press `⌘ + M` to open them. To manually reload an app in the emulator, press `R + R`.
]

---

# Debugging Tools

Debugging Android-related issues may often require looking at some logs. To dump a log of all system messages (including stack traces and errors) run:

```bash
adb logcat
```

To view your RN-related console logs run:

```bash
react-native log-android
# or run: adb logcat *:S ReactNative:V ReactNativeJS:V
```

---

template: inverse

# Cross-Platform Capabilities

---

# The Beauty of RN

React Native makes very easy to build cross-platform apps, basically by default.

With that in mind, we'll want to **re-use as much code as possible** when building a cross-platform app.

When we view the [React Native Components and APIs](https://facebook.github.io/react-native/docs/components-and-apis.html) we can see that most of the components and APIs listed there are inherently cross-platform.

---

# Be A Little More Specific

But sometimes the occasion rises to run code on only iOS **or** Android devices.

Luckily, RN provides with two different ways to do this:

1.  The `Platform` module
2.  Platform-specific file extensions

---

template: inverse

# The Platform Module

---

# Platform Module

We can use the `Platform` modules to conditionally render components or styles for our components. For example:

```js
import { Platform, Text, View } from "react-native";

const App = () => {
  return (
    <View>
      <Text>I can be seen an all platforms.</Text>
      {Platform.OS === "ios" && <Text>You'll only see me on iOS devices.</Text>}
      {Platform.Version === 24 && (
        <Text>And I'm only on Android devices running Nougat.</Text>
      )}
    </View>
  );
};
```

---

# Platform Module

We also have access to a `Platform.select` method:

```js
import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: "red"
      },
      android: {
        backgroundColor: "blue"
      }
    })
  }
});
```

This method will return the value for the platform you are on.

---

# Exercise 1

Using what you learned about the `Platform` modules, make two adjustments to your R10 project:

1.  Conditionally render the heart icon in the Schedule, Session, and Faves screens to use the Ionicon `md-heart` instead of `ios-heart`.
2.  To get Montserrat (Regular) working on Android, you'll need to set your main font to `Montserrat-Regular` for that platform (rather than `Montserrat`, as we did on iOS). Use `Platform.select` for this.

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
import Widget from "./Widget";

export default Widget;
```

---

# Exercise 2

Time to make R10's navigation UI more platform-appropriate for Android.

To do that, you're going to use platform-specific file extensions for the `NavigationLayout` component, and implement `createDrawerNavigator` for Android in lieu of the `createBottomTabNavigator` component that we've used for the iOS app.

Create your platform specific files, and read-up on the `DrawerNavigation` component in the **[React Navigation docs](https://reactnavigation.org/docs/en/drawer-based-navigation.html)** to implement this for Android only.

---

# What We've Learned

* How to configure a dev environment for Android development
* How to use the `Platform` module in React Native components
* How to use file extensions to build entirely platform-specific components

---

template: inverse

# Questions?

{% endhighlight %}
