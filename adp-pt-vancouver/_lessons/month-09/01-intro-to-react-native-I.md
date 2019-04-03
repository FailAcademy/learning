---
layout: lesson
title: Introducing React Native I
slides: ['_slides/month-09/01-intro-to-react-native-I.md']
lesson_date: 2019-07-15
---

## Pre-work

Prior to class, please install Xcode on your Mac:

- [Xcode](https://developer.apple.com/xcode/)
  - After installation, start Xcode and accept the terms and conditions agreement
- Run "xcode-select --install" in your terminal
  - Start your Xcode again and accept any terms and conditions required to get to the welcome screen of your Xcode.
- Install [HomeBrew](https://brew.sh/)

---

## Learning Objectives

- Explain how React Native is different from other hybrid mobile application frameworks like Cordova.
- Use React Native's basic mobile UI components such as `<View>`, `<Text>`, `<TextInput>`, `<Image>`, `<TouchableOpacity>`, and `<TouchableHighlight>` in an application.
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
