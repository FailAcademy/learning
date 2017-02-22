---
layout: lesson
title: Android Apps with React Native
slides: ['_slides/week-08/04-android.md']
lesson_date: 2017-03-02
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

Install [Android Studio](https://developer.android.com/studio/install.html). This is the official IDE for Android development, but for our purposes will mostly provide us with a GUI for the SDK Manager.

### Step 3:

Open Android Studio and install the Android SDK as per these screen caps:

![Android Studio Menu](/public/img/slide-assets/android-studio-menu.png)

![Android Studio Menu](/public/img/slide-assets/android-sdk-install.png)

Note that you may also need to install "Android SDK Platform 23" and "Sources for Android 23" if you get build errors related to this later on, but test out a build first after you've installed an emulator.

### Step 4:

Add the following lines to your `~/.bash_profile`:

```bash
export ANDROID_HOME=~/Library/Android/sdk
export PATH=${PATH}:${ANDROID_HOME}/tools
export PATH=${PATH}:${ANDROID_HOME}/platform-tools
```

### Step 5:

We still have to install an emulator (aka an "Android Virtual Device") to run our React Native app on. To do that, run the following command to open the AVD Manager:

```bash
android avd
```

To create an emulator, select "Create" and fill in the following details:

![Android Studio Menu](/public/img/slide-assets/android-create-avd.png)

Now try starting your new emulator and see if it powers up.

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
2. Render fonts by platform. To get Monserrat (Regular) working on Android, you'll need to set your main font to `Monserrat-Regular` for that platform (rather than `Monserrat`, as we did on iOS). Use `Platform.Select` for this.

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
