---
layout: lesson
title: Introducing React Native
slides: ["_slides/week-08/01-intro-to-react-native.md"]
lesson_date: 2019-11-18
---

## Pre-work

Prior to class, please install Xcode on your Mac:

- [Xcode](https://developer.apple.com/xcode/)
  - After installation, start Xcode and accept the terms and conditions agreement
- Run "xcode-select --install" in your terminal
  - Start your Xcode again and accept any terms and conditions required to get to the welcome screen of your Xcode.
- Open Xcode, choose `Preferences`, go to `locations` and choose the most recent version in the `Command Line Tools`
- Install [HomeBrew](https://brew.sh/)
- Install watchman `brew install watchman`
- Install cocoapods `sudo gem install cocoapods` (use `sudo` only when you are installing gem)

---

## Learning Objectives

- Explain how React Native is different from other hybrid mobile application frameworks like Cordova.
- Explore strategies for organizing React Native projects.
- Use React Native's basic mobile UI components such as `<View>`, `<Text>`, `<TextInput>`, `<Image>`, `<TouchableOpacity>`, and `<TouchableHighlight>` in an application.
- Use the built-in list view UI components to display vertical scrolling lists of dynamic data in a React Native application.
- Populate a `<FlatList>` component with data fetched from third-party API.
- Explore the smaller subset of CSS permitted by React Native, and add styles to components with `Stylesheet.Create` and inline styles.
- Use React Native's debugging tools to troubleshoot application errors.

---

## Keywords

- Native application
- Hybrid mobile application
- Progressive web application
- `View`
- `Text`
- `Image`
- `ScrollView`
- `ListView`
- `FlatList`
- `SectionList`

---

## Exercise 1

Your turn! Go to the [React Native Docs](https://facebook.github.io/react-native/docs/getting-started.html) and find at least one other mobile component that we haven't discussed yet to try out. Add it to your `HelloWorld` app.

Be creative and come up with a cool demo for the class.

---

## Exercise 2

Time for an RN layout challenge!

Start with this code in your RN app:

```js
<View style={styles.container}>
  <View style={[styles.box, styles.box1]} />
  <View style={[styles.box, styles.box2]} />
  <View style={[styles.box, styles.box3]} />
  <View style={[styles.box, styles.box4]} />
</View>
```

```js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  box: {
    width: 50,
    height: 50
  },
  box1: {
    backgroundColor: "powderblue"
  },
  box2: {
    backgroundColor: "skyblue"
  },
  box3: {
    backgroundColor: "steelblue"
  },
  box4: {
    backgroundColor: "midnightblue"
  }
});
```

Your app should look like the first screenshot below. After adjusting the styles, your app should look like the second screenshot.

**Hint:** Look into React Native's `Dimensions` module to complete this exercise.

<p style="display: flex; justify-content: space-between;" }>
  <img src="/public/exercises/rn1-e2-start.png" alt="Exercise start screen cap" style="width: 48%; height: 48%; border: 1px solid #e2e2e2;"/>
  <img src="/public/exercises/rn1-e2-finish.png" alt="Exercise finish screen cap" style="width: 48%; height: 48%; border: 1px solid #e2e2e2;"/>
</p>

---

## Exercise 3

Now you're going to build a slightly more complex `<FlatList>` in your `HelloWorld` app to display a list of users.

The URL below contains JSON with data for 100 robot users:

https://robot-data.firebaseio.com/robots.json

Your goal is to build a `<FlatList>` that renders the data like this:

<p style="display: flex; justify-content: center;" }>
  <img src="/public/exercises/rn1-e3.png" alt="Exercise screen cap" style="width: 50%; height: 50%;border: 1px solid #e2e2e2;"/>
</p>

Bonus points if you figure out how to sort the robots alphabetically by first name.

---

## Lab Activity

In today's lab, we're going to start working on the R10 project.

Begin by creating a new React Native app name `R10`. Working from the project's design comps, plan out the directory structure for your app.

You will need to **[install Apollo Client](https://www.apollographql.com/docs/react/essentials/get-started.html)** to access the GraphQL API data in your app (remember to use `yarn add` instead of `npm install`).

Your goal for today is to build out and style the `About` screen for your app. Don't worry about adding the toggling animation on the Code of Conduct points yet (we'll work on that at the end of the week). For now, just display all of the Code of Conduct content statically.

Be sure to **add a loading state** to your screen while content is being fetched... in other words, display an `ActivityIndicator` component in the screen until the request to the GraphQL API for the Code of Conduct points is complete.

In preparation for tomorrow's lesson on navigation, you may also want to rough out container components for the app's other screens (i.e. `Schedule`, `Session`, `Speaker`, and `Faves`).

Be sure to set-up all of the colors for your app in an object exported from `config/styles.js` too.

---

## Additional Resources

Some general React Native resources:

- [React Native Docs](https://facebook.github.io/react-native/docs/getting-started.html)
- [JS Coach - React Native](https://js.coach/react-native)
- [Awesome React Native](https://github.com/jondot/awesome-react-native)
- [Spencer Carli on Medium](https://medium.com/@spencer_carli)

Extra RN tools:

- [React Native Tools (for VS Code)](https://github.com/Microsoft/vscode-react-native).
- [React Native Debugger](https://github.com/jhen0409/react-native-debugger)

Tips for configuring eslint with React Native:

- [Getting eslint right in React Native](https://medium.com/the-react-native-log/getting-eslint-right-in-react-native-bd27524cc77b#.g7alsqenx)

A video series on styling components and building layouts with React Native:

- [React Native - Design](https://www.youtube.com/playlist?list=PL7D-0n1z1EbhkundIsOBaN_mlLvV4_hyO)

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
