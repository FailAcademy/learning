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
3. Managing state with Redux in React Native (with a navigator!)
4. Using third-party modules and linking dependencies in an iOS RN app

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
- But API is kind of scary (and is deprecated)

---

# Third-Party Solutions

Some of third-party solutions wrap the JS navigator or `NavigationExperimental`, others expose the platform's native navigation. Some popular options include:

- [wix/react-native-navigation](https://github.com/wix/react-native-navigation)
- [aksonov/react-native-router-flux](https://github.com/aksonov/react-native-router-flux)
- [expo/ex-navigation](https://github.com/expo/ex-navigation)
- [react-community/react-navigation](https://github.com/react-community/react-navigation) (still beta...)

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

- A higher level of abstraction on `NavigationExperimental`
- Provides a set of defaults that can be customized
- Supports tab navigation, sliding drawer navigation, the Android back button, and modals
- Your routes are your React Components
- Easily nests stack navigation within tab navigation
- Can integrate its navigation state with your own Redux store if you want (but this is totally optional)

---

# Configuration

- `createRouter` will be used to map route name to components
- The `<NavigationProvider>` will wrap our navigation scheme at the top level of our app only
- `<StackNavigation>` represents a single stack of screens (and each tab in a tab bar can contain its own stack)
- We define our route configuration with the component itself using `static route = {}`

See the **[minimal navigation set up example](https://github.com/expo/ex-navigation#a-minimal-navigation-set-up).**

---

# Exercise 1

Follow the [installation instructions](https://github.com/expo/ex-navigation#installation) for ExNavigation and add it to your project.

Define your routes in `navigation/routes.js`. Define `static route = {}` in each of your scene container components to configure a nav bar title for each scene.

In your `js/App.js` file, add the `<NavigationProvider>` with a single `<StackNavigation>`, and set the `initialRoute` to your Schedule scene.

Try swapping your `initialRoute` to your About scene and see if it works also.

---
class: center, middle

.large[
  Adding Redux...<br />worth the effort.
]

---

# Install Redux

We can use Redux in a React Native app just like a regular web-based React app.

Begin by installing Redux and related dependencies:

```bash
npm install --save redux react-redux redux-thunk
```

We will use the `redux-thunk` middleware make it possible to do asynchronous work in our action creators.

Next, we'll create our `store.js` file in a `redux` directory...

---

# The Store

```js
import { createNavigationEnabledStore } from '@expo/ex-navigation';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers'; // we haven't made these yet...

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // definitely enable Redux dev tools!

const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation',
}); // as per the ExNavigation docs...

const store = createStoreWithNavigation(
  rootReducer,
  {}, // initial state
  composeEnhancers(
    applyMiddleware(thunk)
  ) // enhancers
);

export default store;
```

---

# Exercise 2

Now set up the `reducers.js` file in the `redux` directory.

Be sure to import `combineReducers` into this file, as well as the named `NavigationReducer` export from ExNavigation. Export your combined reducers from this file.

Next, provide the `NavigationContext`, directly to the `NavigationProvider` component in your `js/App.js` file. You'll also need to wrap everything in the `Provider` component from `react-redux`, just like usual.

Please refer to the **[ExNavigation docs](https://github.com/expo/ex-navigation#integrate-with-your-existing-redux-store)** for assistance completing this exercise.

---

# Next Steps

For our purposes it will be best to leave this navigator defined at the highest level of our app, and then nest our tab bar navigation (or drawer navigation for Android) within it.

Why do it this way? Eventually, when we add our lightbox-style scene for viewing one photo at a time, we will need to push this scene onto our top-level `StackNavigation`.

If we were to simply push this scene onto the stack inside the tab bar, we would have tab fixed on top of the lightbox (which does not adhere to the prototype).

---

# Exercise 3

Time to add a tab bar to our iOS app. Create a file called `NavigationLayout.js` in your `js/navigation` directory. Use this file to build out a component where the `render` function returns ExNavigator's `<TabNavigation>` component.

Create a `<TabNavigationItem>` for your About and Schedule routes. What do you need to change in your top-level `initialRoute` now?

Thinking ahead, each `<TabNavigationItem>` should have its own `<StackNavigation>` component nested inside of it too.

---
template: inverse

# Linking Dependencies

---

# Dependencies

Sometimes we need to install additional libraries in our apps, and these libraries will have native dependencies.

There are two way we can do this:

1. Automatic linking with `react-native link`
2. Manual linking (in Xcode or the Android directory)

---

# Automatic Linking

RN now has a built-in way to link dependencies from the CLI (was previously a separate package called `rnpm`).

To use it, you'll need to install a package that requires linking:

```bash
npm install <library-with-native-dependencies> --save
```

React Native will link your libs based on `dependencies` and `devDependencies` in your `package.json` file. Then you can link up your dependencies for iOS and Android by running:

```bash
react-native link
```

Voila! That's it.

---

# Exercise 4

Our app is going to need some icons, so for that we're going to add the **[React Native Vector Icons package](https://github.com/oblador/react-native-vector-icons)**.

Note that this package's native dependencies can be automatically linked with `react-native link`.

Once this is done, write yourself a helper `renderIcon` function in your `NavigationLayout.js` to render the appropriate Ionicon icon for each of the tabs in your tab bar. An icon should be `white` if selected, and `#999999` if not.

Add your helper function as the `renderIcon` prop on each `<TabNavigationItem>`.

---

# Manual Linking

Sometimes we may need to manually link native dependencies in Xcode.

For instance, React Native includes a `CameraRoll` module bundled with it, but if we want to use this library (to allow users to save images from the app to their camera roll) we need to manually link it. To do that, we need to open our project folder and navigate to `node_modules/react-native/Librares/...` and also open Xcode.

**[Instructions for manual linking](https://facebook.github.io/react-native/docs/linking-libraries-ios.html#manual-linking)** are available in the React Native docs.

---

# Exercise 5

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

# What We've Learned

- Special considerations for building out user-friendly navigation in mobile apps
- What navigation options are built into React Native, and what third-party options are available
- How to Redux-ify our React Native app
- How to use a navigator and tab bar
- How to add third-party libraries and link their dependencies both automatically and manually

---
template: inverse

# Questions?

{% endhighlight %}
