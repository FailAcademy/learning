---
layout: lesson
title: Introducing React Native
slides: ['_slides/week-08/01-intro-to-react-native.md']
lesson_date: 2017-02-27
---

## Pre-work

Prior to class, please install Xcode on your Mac:

- [Xcode](https://developer.apple.com/xcode/)

---

## Learning Objectives

- Explain how React Native is different from other hybrid mobile application frameworks like Cordova.
- Explore strategies for organizing React Native projects.
- Use React Native's basic mobile UI components such as `<View>`, `<Text>`, `<TextInput>`, `<Image>`, `<TouchableOpacity>`, and `<TouchableHighlight>` in an application.
- Use the built-in `<ListView>` UI component to display vertical scrolling lists of dynamic data in a React Native application.
- Populate a `<ListView>` component with data fetched from third-party API.
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
    backgroundColor: '#F5FCFF',
  },
  box: {
    width: 50, 
    height: 50,
  },
  box1: {
    backgroundColor: 'powderblue',
  },
  box2: {
    backgroundColor: 'skyblue',
  },
  box3: {
    backgroundColor: 'steelblue',
  },
  box4: {
    backgroundColor: 'midnightblue',
  },
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

Now you're going to build a slightly more complex `<ListView>` in your `HelloWorld` app to display a list of users.

The URL below contains JSON with data for 100 robot users:

https://raw.githubusercontent.com/redacademy/adp-vancouver/production/public/exercises/listview-data.json?token=ABcsvIa5rKpRui1Pq2cuOpa0cNY7zYi0ks5YJkfNwA%3D%3D

Your goal is to build a `<ListView>` that renders the data like this:

<p style="display: flex; justify-content: center;" }>
  <img src="/public/exercises/rn1-e3.png" alt="Exercise screen cap" style="width: 50%; height: 50%;border: 1px solid #e2e2e2;"/>
</p>

Bonus points if you figure out how to sort the robots alphabetically by first name.

---

## Lab Activity

In today's lab, we're going to start working on the Splashify project.

Begin by creating a new React Native app name `Splashify`. Working from the project's design comps, plan out the directory structure for your app.

You'll also need to [sign-up as a developer](https://unsplash.com/developers) with Unsplash so you can register an application to consume data from its API.

Unsplash provides a JS wrapper to simplify working with its API that you will also want to add to your project:

- [unsplash/unsplash-js](https://github.com/unsplash/unsplash-js)

Your goal for today is to build out the `Random` scene for your app, complete with the photographer's username and avatar overlain on the randomly retrieved image.

When you complete that task, you can begin building out the feed of recently added photos in the `Recent` scene.

---

## Additional Resources

Some general React Native resources:

- [React Native Docs](https://facebook.github.io/react-native/docs/getting-started.html)
- [JS Coach - React Native](https://js.coach/react-native)
- [Awesome React Native](https://github.com/jondot/awesome-react-native)
- [Spencer Carli on Medium](https://medium.com/@spencer_carli)

Tips for configuring eslint with React Native:

- [Getting eslint right in React Native](https://medium.com/the-react-native-log/getting-eslint-right-in-react-native-bd27524cc77b#.g7alsqenx)

A video series on styling components and building layouts with React Native:

- [React Native - Design](https://www.youtube.com/playlist?list=PL7D-0n1z1EbhkundIsOBaN_mlLvV4_hyO)

More on ListViews:

- [React Native Basics: How to Use the ListView Component](https://medium.com/differential/react-native-basics-how-to-use-the-listview-component-a0ec44cf1fe8#.asxki5zib)
- [jsdf/react-native-refreshable-listview](https://github.com/jsdf/react-native-refreshable-listview)
- [FaridSafi/react-native-gifted-listview](https://github.com/FaridSafi/react-native-gifted-listview)

Miscellaneous RN resources:

- [Renaming a React Native Project](http://blog.tylerbuchea.com/renaming-a-react-native-project/)
- [React Native: Idea to Product in One Week](https://medium.com/adjust-creative/prototyping-with-react-native-an-idea-to-production-in-one-week-3a6b4f474897#.ysexqnc13)
- [Building the F8 2016 App](http://makeitopen.com/tutorials/building-the-f8-app/planning/)
