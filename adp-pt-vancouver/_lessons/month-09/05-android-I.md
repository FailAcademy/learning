---
layout: lesson
title: Android Apps with React Native
slides: ['_slides/month-09/05-android-I.md']
lesson_date: 2019-07-24
---

## Pre-work

Prior to class, please be sure to complete the following tasks.

(Hint: For sucessful installation follow these instruction carefully and DO NOT update Gradle or Maven if asked by Android Studio.)

### Step 1:

Ensure you have JDK 8 installed on your computer (run `java -version` and ensure you are running 1.8.x).
If JDK is not up to date, [install the latest version](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html), accept the agreement, download JDK and then install latest version provided on this web page.

You will also want to set your `$JAVA_HOME` environment variable in your `.bash_profile` too:

```bash
export JAVA_HOME="/Library/Java/JavaVirtualMachines/[JDK VERSION HERE]/Contents/Home"
```

### Step 2:

Install Android Studio as per the instruction in the React Native docs:

**[Android Development Environment](https://facebook.github.io/react-native/docs/getting-started.html#android-development-environment)**

### Step 3:

Create a new React Native project `react-native init AwesomeProject`.

Set-up an Android emulator as per the instruction in the React Native docs:

**[Preparing the Android Virtual Device](https://facebook.github.io/react-native/docs/getting-started.html#preparing-the-android-device)**

Please note that this must be done from within a project's interface in Android Studio, so you will need to either create an empty project in Android Studio, or open your `android` directory from your RN project (`AwesomeProject`) in Android Studio to access the AVD Manager.

### Step 4:

Run your `AwesomeProject` with your android emulator `react-native run-android` from the project directory.

(Note: Do not start working on your R10 project right away, first, try running `AwesomeProject` with your Android emulator. Do not Update Gradle or Maven for your RN project from Android Studio.)

---

## Learning Objectives

- Configure an Android development environment for use with React Native.
- Build a cross-platform app for iOS and Android designed for maximum code-reuse.
- Use the `Platform` modules to detect platforms and conditionally configure components accordingly.

---

## Keywords

- Android SDK
- Android Studio
- `Platform`

---

## Exercise 1

Using what you learned about the `Platform` modules, make two adjustments to your R10 project:

1.  Conditionally render the heart icon in the Schedule, Session, and Faves screens to use `md-heart` instead of `ios-heart`.
2.  Render fonts by platform. To get Montserrat (Regular) working on Android, you'll need to set your main font to `Montserrat-Regular` for that platform (rather than `Montserrat`, as we did on iOS). Use `Platform.select` for this.

---

## Additional Resources

User guide for Android Studio:

- [Meet Android Studio](https://developer.android.com/studio/intro/index.html)
