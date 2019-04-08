---
layout: slidedeck
title: Navigation and Dependencies II Slides
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

1.  Implement React Navigation in an app
2.  Use third-party modules with native dependencies

---

template: inverse

# Linking Dependencies

---

# Dependencies

Sometimes we need to install additional libraries in our apps, and these libraries will have native dependencies.

There are two way we can do this:

1.  Automatic linking with `react-native link`
2.  Manual linking (in Xcode or the Android directory)

---

# Automatic Linking

RN now has a built-in way to link dependencies from the CLI (was previously a separate package called `rnpm`).

To use it, you'll need to install a package that requires linking:

```bash
yarn add <library-with-native-dependencies>
```

React Native will link your libs based on `dependencies` and `devDependencies` in your `package.json` file. Then you can link up your dependencies for iOS and Android by running:

```bash
react-native link
```

Voila! That's it.

---

# Exercise 4

Our app is going to need some icons, so for that we're going to add the **[React Native Vector Icons package](https://github.com/oblador/react-native-vector-icons)**. Note that this package's native dependencies can be automatically linked with `react-native link`.

Next, import Ionicons into `NavigationLayout.js`. Add a `navigationOptions` key to your tab bar config object, and render the correct icon for each tab. An icon should be `white` if selected, and medium grey if not.

**[Use this example from the React Navigation docs](https://reactnavigation.org/docs/en/tab-based-navigation.html#customizing-the-appearance)** to help complete this exercise.

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
  "assets": [ "js/assets/fonts" ]
}
```

Move your project's fonts into the above directory and run `react-native link` again, then restart your app.

Use Montserrat as the `fontFamily` for the tab bar labels now to test it out.

---

class: center, middle

.large[ Finishing touches...]

---

# Gradient Header

R10 has a linear gradient background in the navigation bar. We will need another package (with native dependencies) for that.

Install `react-native-linear-gradient`, then `react-native link`, and restart your app again.

Add a `config.js` file to the `navigation` directory with this:

```js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

// ...more to come here!
```

---

# Gradient Header

Next, in `config.js` create the component that we will use as the navigation bar background:

```js
// ...

const GradientHeader = props => (
  <View style={% raw %}{{ backgroundColor: 'white', overflow: 'hidden' }}{% endraw %}>
    <LinearGradient
      colors={['#cf392a', '#9963ea']}
      start={% raw %}{{ x: 0.0, y: 1.0 }}{% endraw %}
      end={% raw %}{{ x: 1.0, y: 0.0 }}{% endraw %}
      style={[StyleSheet.absoluteFill, { height: 64, width: '100%' }]}
    />
    <Header {...props} />
  </View>
);
```

---

# Navigation Options

Lastly, create `sharedNavigationOptions` in `config.js` and set the custom background there:

```js
// ...

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: 'transparent',
  },
});
```

You can also **set the style of the navigation bar text** to white and use Montserrat here as well. (Hint: Check the docs!)

---

# Navigation Options

Finally, use your `sharedNavigationOptions` in `NavigationLayout.js`:

```js
// ADD THIS!
import { sharedNavigationOptions } from './config';

const AboutStack = createStackNavigator(
  {
    About: AboutScreen,
  },
  // AND THIS!
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);
```

---

# What We've Learned

- How to add third-party libraries and link their dependencies both automatically and manually

---

template: inverse

# Questions?

{% endhighlight %}
