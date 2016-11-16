---
layout: slidedeck
title: Navigation and Dependencies Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Navigation and Dependencies

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Reasoning about mobile navigation
2. Navigation options in React Native
3. Using third-party modules and linking dependencies in an RN app

---
template: inverse

# Navigation in Mobile Apps

---

# Browserless Nav

What we don't have:

- The usual back and forward buttons
- Browser history
- Hypertext and URLs

What we do have:

- Established **platform-specific patterns** that people are accustomed to when navigating around native mobile apps

---
class: center, middle

### iOS Human Interface Guidelines:

People tend to be unaware of an app's navigation until it doesn't meet their expectations.

*So while mobile nav may seem simple on the surface, we have to put a bit of thought into it to build it out well.*

---

# Basic Infrastructure

A basic navigation infrastructure for our apps will hold a **navigation stack**.

The stack will hold **screens**, and those screens will hold **components** and **data**.

We can also **nest** navigation stacks within one another.

We may also use **tab bars** and **drawer-style navigation**.

---
class: center, middle

.inline-images[
  ![Nav stack screens](/public/img/slide-assets/nav-stack-screens.png)
]

---
class: center, middle

.inline-images[
  ![Nav stack screens stacked](/public/img/slide-assets/nav-stack-stacked.png)
]

---
class: center, middle

.inline-images[
  ![Tabs can have nav stacks](/public/img/slide-assets/nav-tab-stacks.png)
]

---
template: inverse

# Navigation Components

---
class: center, middle

.large[
  React Native comes with a few built-in navigation components out of the box...
]

---

# NavigatorIOS

See the docs: [NavigatorIOS](https://facebook.github.io/react-native/docs/navigatorios.html)

- Integrated with UIKit (leverages its animation)
- Built on top of `UINavigationController`
- Uses routes to represent scenes
- Very stateful
- No Android support

---

# Navigator

See the docs: [Navigator](https://facebook.github.io/react-native/docs/navigator.html)

- Pure JS implementation of a nav stack (so you may bump into performance issues in some implementations)
- Cross-platform
- Also uses routes to represent scenes
- Also very stateful

---

# NavigationExperimental

See the docs: [NavigationExperiemental](https://facebook.github.io/react-native/docs/navigation.html#navigationexperimental)

- Uses a Redux-like pattern for managing navigator state
- Cross-platform
- Allows more complex navigation animations than Navigator 
- Supports the tab bar
- Supports nested navigation
- But API is kind of scary

---

# Third-Party Solutions

Some of third-party solutions wrap the JS navigator or `NavigationExperimental`, others expose the platform's native navigation. Some popular options include:

- [wix/react-native-navigation](https://github.com/wix/react-native-navigation)
- [aksonov/react-native-router-flux](https://github.com/aksonov/react-native-router-flux)
- [exponentjs/ex-navigation](https://github.com/exponentjs/ex-navigation)

---
class: center, middle

.large[
  So what do we use...?
]

---

# What We Want

Ideally, we want an all-in-one navigation solution with:

- Support for **Android back button**
- Integration with the a (potentially cross-platform) **tab bar**
- Support for **nested nav stacks** without creating state management headaches for ourselves
- Good **performance** (uses native animation)

---

# ExNavigation

- A higher level of abstration on `NavigationExperimental`
- Provides a set of defaults that can be customized
- Supports tab navigation, sliding drawer navigation, the Android back button, and modals
- Your routes are your React Components
- Easily nests stack navigation within tab navigation
- Can integrate its navigation state with your own Redux store if you want (but this is totally optional)

---

# Configuration

- `createRouter` will be used to map route name to components
- the `<NavigationProvider>` will wrap our navigation scheme at the top level of our app only
- `<StackNavigation>` represents a single stack of screens (and each tab in a tab bar can contain its own stack)
- we define our route configuration with the component itself using `static route = {}`

See the **[minimal navigation set up example](https://github.com/exponentjs/ex-navigation#a-minimal-navigation-set-up).**

---

# Exercise 1

Follow the [installation instructions](https://github.com/exponentjs/ex-navigation#installation) for ExNavigation and add it to your project.

Define your routes in `navigation/routes.js`. Define `static route = {}` in each of your scene container components to configure a nav bar title for each scene.

In your `app/index.js` file, add the `<NavigationProvider>` with a single `<StackNavigation>`, and set the `initialRoute` to your Recent scene.

Try swapping your `initialRoute` to your Random scene and see if it works also.

---

# Next Steps

For our purposes it will be best to leave this navigator defined at the highest level of our app, and then nest our tab bar navigation (or drawer navigation for Android) within it.

Why do it this way? Eventually, when we add our lightbox-style scene for viewing one photo at a time, we will need to push this scene onto our top-level `StackNavigation`.

If we were to simply push this scene onto the stack inside the tab bar, we would have tab fixed on top of the lightbox (which does not adhere to the prototype).

---

# Exercise 2

Time to add a tab bar to our iOS app. Create a file called `NavigationLayout.js` in your `app/navigation` directory. Use this file to build out a component where the `render` function returns ExNavigator's `<TabNavigation>` component.

Create a `<TabNavigationItem>` for your Recent and Random routes (you can rough out your Faves and About scene components as well now if you like). What do you need to change in your top-level `initialRoute` now?

Thinking ahead, each `<TabNavigationItem>` should have its own `<StackNavigation>` component nested inside of it too.

---
template: inverse

# Linking Dependencies

---

# Dependencies

Sometimes we need to install additional libraries in our apps, and these libraries will have native dependencies.

There are two way we can do this:

1. Automatic linking with `react-native link`
2. Manual linking (in Xcode)

---

# Automatic Linking

RN now has a built-in way to link dependencies from the CLI (was previously a separate package called `rnpm`).

To use it, you'll need to install a package that requires linking:

```bash
npm install <library-with-native-dependencies> --save
```

React Native will link your libs based on `dependencies` and `devDependencies` in your `package.json` file. Then you can link up your dependencies for iOS and Android:

```bash
react-native link
```

Voila! That's it.

---

# Exercise 3

Our app is going to need some icons, so for that we're going to add the **[React Native Vector Icons package](https://github.com/oblador/react-native-vector-icons)**.

Note that this package's native dependencies can be automatically linked with `react-native link`.

Once this is done, write yourself a helper `renderIcon` function in your `NavigationLayout.js` to render the appropriate Octicon icon for each of the tabs in your tab bar. An icon should be `black` if selected, and `#999999` if not.

Add your helper function as the `renderIcon` prop on each `<TabNavigationItem>`.

---

# Manual Linking

Sometimes we may need to manually link native dependencies in Xcode.

For instance, React Native includes a `CameraRoll` module bundled with it, but if we want to use this library (to allow users to save Unsplash images to their camera roll) we'll need to manually link it.

To do that, we'll need to open our project folder and navigate to `node_modules/react-native/Librares/...` and also open Xcode.

---

# Exercise 4

Following the **[instructions for manual linking](https://facebook.github.io/react-native/docs/linking-libraries-ios.html#manual-linking)** in the React Native docs, add the `CameraRoll` library to your project.

You will need this library later in order to build out all of the functionality for the Photobox scene.

**Note:** You will also need to update your `info.plist` file as per **[these instructions](https://github.com/facebook/react-native/issues/10115)** to avoid fatal app crashes when saving to the camera roll for iOS 10.

---

# What We've Learned

- Special considerations for building out user-friendly navigation in mobile apps
- What navigation options are built into React Native, and what third-party options are available
- How to use a navigator and tab bar
- How to add third-party libraries and link their dependencies both automatically and manually

---
template: inverse

# Questions?

{% endhighlight %}
