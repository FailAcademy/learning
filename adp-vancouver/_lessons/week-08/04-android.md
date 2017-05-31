---
layout: lesson
title: Android Apps with React Native
slides: ['_slides/week-08/04-android.md']
lesson_date: 2017-06-01
---

## Pre-work

Prior to class, please be sure to complete the following tasks.

### Step 1:

Ensure you have JDK 8 installed on your computer (run `java -version` and ensure you are running 1.8.x). If JDK is not up to date, [install the latest version](https://docs.oracle.com/javase/8/docs/technotes/guides/install/mac_jdk.html). You can also do this with Homebrew if you like.

You will also want to set your `$JAVA_HOME` environment variable in your `.bash_profile` too:

```bash
export JAVA_HOME="/Library/Java/JavaVirtualMachines/[JDK VERSION HERE]/Contents/Home"
```

### Step 2:

Install Android Studio as per the instruction in the React Native docs:

**[Android Development Environment](https://facebook.github.io/react-native/docs/getting-started.html#android-development-environment)**


### Step 3:

Set-up an Android emulator as per the instruction in the React Native docs:

**[Starting the Android Virtual Device](https://facebook.github.io/react-native/docs/getting-started.html#starting-the-android-virtual-device)**

Please note that this must be done from within a project's interface in Android Studio, so you will need to either create an empty project in Android Studio, or open your `android` directory from your RN project in Android Studio to access the AVD Manager.

---

## Learning Objectives

- Configure an Android development environment for use with React Native.
- Build a cross-platform app for iOS and Android designed for maximum code-reuse.
- Use the `Platform` modules to detect platforms and conditionally configure components accordingly.
- Use platform-specific file extensions to split more complex code into multiple files.  

---

## Keywords

- Android SDK
- Android Studio
- `Platform`

---

## Exercise 1

Using what you learned about the `Platform` modules, make two adjustments to your R10 project:

1. Conditionally render the heart icon in the Schedule, Session, and Faves scenes to use `md-heart` instead of `ios-heart`.
2. Render fonts by platform. To get Monserrat (Regular) working on Android, you'll need to set your main font to `Monserrat-Regular` for that platform (rather than `Monserrat`, as we did on iOS). Use `Platform.select` for this.

---

## Exercise 2

Time to make R10's navigation UI more platform-appropriate for Android.

To do that, you're going to use platform-specific file extensions for the `NavigationLayout` component, and implement `DrawerNavigation` (from the ExNavigation module) for Android in lieu of the `TabNavigation` component that we've used for the iOS app.

Create your platform specific files, and read-up on the `DrawerNavigation` component in the **[ExNavigation docs](https://github.com/exponentjs/ex-navigation#drawernavigation)** to implement this for Android only.

---

## Lab Activity

In today's lab, thoroughly review your app in an Android emulator to ensure it behaves as you would expect and adequately resembles the Splashify's prototypes.

From there, the rest of class time this week may be spent on finishing building out any remaining requirements for your Splashify project. Don't forget to take a look at the stretch goals!

---

## Additional Resources

User guide for Android Studio:

- [Meet Android Studio](https://developer.android.com/studio/intro/index.html)

More on building cross-platform components:

- [Better Cross-Platform React Native Components](https://medium.com/differential/better-cross-platform-react-native-components-cb8aadeba472#.jyrww11oo)

UX and Android navigation:

- [Bye, Bye Burger!](https://medium.com/startup-grind/bye-bye-burger-5bd963806015#.rbncat6ic)
