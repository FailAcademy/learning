---
layout: slidedeck
title: Introducing React Native Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Introducing React Native

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1.  What is React Native?
2.  Dev environment config and debugging
3.  Basic mobile components
4.  Styling components
5.  Lists and data
6.  Project organization

---

# What Is React Native?

React Native is an open-source (BSD-licensed) library developed by Facebook.

It uses the same fundamental UI building blocks as regular iOS and Android apps, but we get to **use JS and React to build truly native mobile apps** (instead of Objective-C, Swift, or Java).

On top of that, RN also offers an (arguably) **better developer experience** and **cross-platform potential** than entirely native approaches.

---

# How Does It Work?

RN works because its **bridge** creates an interface between React and the host platform's native UI elements and APIs:

.inline-images[
![React Native bridge diagram](/public/img/slide-assets/rn-bridge.jpg)  
]

???

- The bridge is all about native call JS and JS calling native
- So an RN iOS app, the browser's DOM is replaced with UIKit
- Characteristics of the bridge:
  - Asynchronous
  - Batched (the native calls)
  - Serializable (the messages between JS and native)

---

# Rendering to the DOM

Recall that when we use React, we also need to include the `ReactDOM` module to render our components to the DOM:

```js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return <h1 id="title">Hello, world!</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
```

---

# Rendering with RN

Our approach to building a React Native components is noticeably similar, but we import the `AppRegistry` module instead of `ReactDOM`:

```js
import React, { Component } from "react";
import { AppRegistry, View, Text } from "react-native";

class App extends Component {
  render() {
    return (
      <View>
        <Text>Welcome to React Native!</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent("App", () => App);
```

---

# What is `AppRegistry`?

`AppRegistry` is the JS entry point to running all the React Native apps.

You can register your app's root component with `AppRegistry.registerComponent`, then the native system will run the app when it's ready by calling `AppRegistry.runApplication`.

---

# Why Use React Native?

- You can build **cross-platform** native apps using your existing JS/React skills (no Objective-C, Swift, or Java required!)
- Maximizes potential **code re-use** (even between web apps)
- There's a large (and growing!) **community** around it
- RN lets you iterate at lightning speed. You can see your changes as soon as you save them.
- You can still **drop into native code** if you need to (e.g. to leverage APIs that aren't exposed in RN by default)

---

template: inverse

# Dev Environment Config and Debugging

---

# Dev Environment

Before we can create our first React Native app, we must ensure we have the following tools installed:

`Note:` Install stable versions of the following, not latest.

1.  [Xcode](https://developer.apple.com/xcode/)
2.  [Homebrew](http://brew.sh/)
3.  [Node](https://nodejs.org/en/)

You will likely also want to install a VS Code extension called **[React Native Tools](https://github.com/Microsoft/vscode-react-native)** and the **[React Native Debugger](https://github.com/jhen0409/react-native-debugger)**.

---

# Your First RN App

Then we can run:

```bash
brew install watchman # a tool for watching changes in the filesystem
npm install -g react-native-cli # the React Native CLI
```

Now we're ready to create our first RN app!

```bash
react-native init HelloWorld # go get a coffee now...
cd HelloWorld
```

---

# Your First RN App

From your terminal go to your project directory and run:

```bash
react-native run-ios
```

You can also add the `--simulator="iPhone SE"` flag to that command to launch your app on a specific device.

???

- The "packager" is a Node.js server (on localhost:8081 by default)
- It's is a local dev server that serves all of the JS you need to run your app
- Because you don't need to rebuild the native code in your app when you make a change to your JS, this approach allows you to rebundle and refresh your app very quickly

---

# What's in There?

The generated directory structure for your project will include:

```bash
|-- __tests__        # for Jest tests
|-- android/         # boilerplate for Android
|-- App.js           # where the top-level App component lives
|-- index.js         # entry point for your app
|-- ios/             # boilerplate for iOS
|-- node_modules     # yes, we can use npm packages with RN!
|-- package.json     # obviously...don't leave home without it
|-  # ...            # other RN config files...
```

For now, we will work primarily in `index.js`, but will talk more in depth about project organization later in the lesson.

---

# Digging Deeper

But how does RN know what component to bind to the view when our app launches? In our `index.js` file we have:

```js
AppRegistry.registerComponent("HelloWorld", () => HelloWorld);
```

And if we look in `ios/HelloWorld/AppDelegate.m` we'll see:

```objective-c
RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
  moduleName:@"HelloWorld"
  initialProperties:nil
  launchOptions:launchOptions];
```

For Android, we would see the Java equivalent in the `MainActivity.java` file.

---

# Debugging Tools

.left-column[
![React Native debugging](/public/img/slide-assets/rn-ios-debugging.png)
]

.right-column[
React Native provides a handy suite of built-in dev tools.

By pressing `⌘ + D` inside of the iOS simulator, you'll see that you can enable remote JS debugging (in Chrome). Go to [localhost:8081/debugger-ui](localhost:8081/debugger-ui) and open your browser dev tools to view the console output.
]

---

# Debugging Tools

- RN has a built-in inspector, perf monitor, etc.
- To view iOS simulator logs from the CLI, you can run `react-native log-ios`
- The red screen of death will often point you in the right direction...but not always
- Check your bundler terminal for more details on the error. It usually leads towards a possible solution.
- The third-party [React Native Debugger](https://github.com/jhen0409/react-native-debugger) is essential for debugging your React and Redux code

---

template: inverse

# Basic Mobile Components

---

# Mobile Components

In React, we can use any HTML element we like to structure our components. But with RN we are no longer dealing with the browser DOM. We must use RN's special, built-in components to create mobile interface elements, such as:

- `<View>` (like `<div>`)
- `<Image>` (like `<img>`)
- `<Text>` (like `<p>` or `<span>`)
- [...and more!](https://facebook.github.io/react-native/docs/getting-started.html)

---

# Mobile Components

_Before we proceed..._

Unlike HTML elements, RN's built-in mobile UI components are modules we must selectively import from `react-native` wherever we want to use them in our own components:

```js
import React, { Component } from "react";
import { Image, Text, View } from "react-native";

// ...your component goes here
```

---

# View and Text

The `<View>` [(ref)](https://facebook.github.io/react-native/docs/view.html) component is a general container to support layout, while `<Text>` [(ref)](https://facebook.github.io/react-native/docs/text.html) is an all-purpose component for displaying text.

```js
<View>
  <Text>RN for life.</Text>
</View>
```

Note that there are no analogous components for `<em>` and `<strong>`, so adding bold and italics to text will require the application of actual styles (more on that to come...)

---

# Image

The `source` prop of an `<Image>` [(ref)](https://facebook.github.io/react-native/docs/image.html) component can point to an image asset bundled with your app, or an external image.

Be sure to supply `@2x` and `@3x` versions if possible for static image resources. For network images **you must specify the height and width**.

```js
<Image
  style={% raw %}{{ width: 300, height: 200, }}{% endraw %}
  resizeMode={'contain'}
  source={% raw %}{{uri:'https://unsplash.it/600/400/?random'}}{% endraw %}
  // source={require('./img/puppies.png')} A LOCAL IMAGE!
/>
```

**[Read more on using images in RN here.](https://facebook.github.io/react-native/docs/images.html)**

---

# TextInput

We may also want users to enter text into a `<TextInput>` [(ref)](https://facebook.github.io/react-native/docs/textinput.html) at some point...

```js
<TextInput
  style={% raw %}{{ height: 30, width: 100, borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.5)'}}{% endraw %}
  placeholder={'Type here'}
  placeholderTextColor={'rgba(198,198,204,1)'}
  onChangeText={(text) => {this.setState({text})}}
  onSubmitEditing={() => {this.setState({text: ''})}}
  value={(this.state && this.state.text) || ''}
/>
```

Notice the built-in props that are available on listening to changes on the component.

---

# TouchableOpacity

To change reduce an element's opacity on press, `<TouchableOpacity>` [(ref)](https://facebook.github.io/react-native/docs/touchableopacity.html):

```js
<TouchableOpacity onPress={() => {}} activeOpacity={0.75}>
  <Text>Press me!</Text>
</TouchableOpacity>
```

---

# TouchableHighlight

To highlight an element on press, use `<TouchableHighlight>` [(ref)](https://facebook.github.io/react-native/docs/touchablehighlight.html):

```js
<TouchableHighlight
  onPress={() => {}}
  activeOpacity={75 / 100}
  underlayColor={"rgb(210,210,210)"}
>
  <Text>Press me!</Text>
</TouchableHighlight>
```

This differs from `<TouchableOpacity>` because an underlay colour is added that tints the view. The underlay comes from adding a view to the view hierarchy, which can cause visual weirdness sometimes.

---

# ScrollView

By default your views will not be scrollable (i.e. they will be limited to the fixed size of the mobile device screen).

You will need a `<ScrollView>` [(ref)](https://facebook.github.io/react-native/docs/scrollview.html) component to create scrolling views:

```js
<ScrollView>
  <Text style={% raw %}{{fontSize:96}}{% endraw %}>Scroll me plz</Text>
  <Text style={% raw %}{{fontSize:96}}{% endraw %}>i haz</Text>
  <Text style={% raw %}{{fontSize:96}}{% endraw %}>so much big txt</Text>
</ScrollView>
```

**[Read more on using scrolling containers in RN here.](https://facebook.github.io/react-native/docs/using-a-scrollview.html)**

---

# Exercise 1

Your turn! Go to the [React Native Docs](https://facebook.github.io/react-native/docs/getting-started.html) and find at least one other mobile component that we haven't discussed yet to try out. Add it to your `HelloWorld` app.

Be creative and come up with a cool demo for the class.

---

template: inverse

# Styling Components

---

# How Styles Work

There is no CSS in RN per se&mdash;but we will style components using JS that looks a lot like the CSS we're used to though.

RN also supports a **smaller subset of properties** than normal CSS. You can see a [list of those properties here](https://github.com/vhpoet/react-native-styling-cheat-sheet).

In RN, we have a few options for adding styles to components:

- Inline styles
- Styling with objects
- `StyleSheet.create`

---

# Inline Styles

We can use inline styles with RN just as we can with React:

```js
render() {
  return (
    <View style={% raw %}{{flex: 1, alignItems: 'center'}}{% endraw %}>
      <Text>Hello, world!</Text>
    </View>
  );
}
```

Generally, inline styles should be **avoided as much as possible** because they are less efficient than other options (as these styles will be recreated with each render pass).

---

# Styling with Objects

We can also create objects that contain blocks of re-usable styles to keep things more organized and modular:

```js
let styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
}

<View style={styles.container}>
  <Text>Hello, world!</Text>
</View>
```

---

# StyleSheet.create

RN also provides us `StyleSheet.create` as bit of optional syntactic sugar for creating our style objects (but this is likely the way we'll usually want to do it).

The previous style objects occasionally offer an advantage over the `StyleSheet.create` though, because style objects allow our style to be mutable (which may be desirable when using modules such as the `PanResponder`).

---

# StyleSheet.create

**Example:**

```js
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
```

---

# Layouts with RN

RN supports Flexbox for layouts, with some small differences:

- `flexDirection` column defaults to `column` (not `row`)
- `alignItems` defaults to `stretch` (not `flex-start`)
- the `flex` property only supports a single number (e.g. `flex: 1`)

We also use CSS positioning in our layouts (e.g. `absolute`), but floats are not supported. The usual box model properties are available as well.

Check out this **[Flexbox Cheat-Sheet](https://medium.com/wix-engineering/the-full-react-native-layout-cheat-sheet-a4147802405c)** and **[see the official docs](https://facebook.github.io/react-native/docs/flexbox.html)**.

---

# Exercise 2

Time for an RN layout challenge!

See the [lesson page](/lesson/01-intro-to-react-native/) for more details...

---

template: inverse

# Lists and Data

---

# Lists and RN

React Native provides several different components for transforming data into lists in your app UI:

- [FlatList](https://facebook.github.io/react-native/docs/flatlist.html) (simpler)
- [SectionList](https://facebook.github.io/react-native/docs/sectionlist.html) (more features)

---

# FlatList & SectionList

A list view (generally) is a common UI pattern in mobile apps. Think of it like a `<ScrollView>` with benefits.

The `<FlatList>` [(ref)](https://facebook.github.io/react-native/docs/flatlist.html) or `<SectionList>` [(ref)](https://facebook.github.io/react-native/docs/sectionlist.html) expects you to insert some kind of (potentially very large) data blob into it, and it will display that data much more efficiently than a basic `<ScrollView>` could. Performance FTW.

To use either, you will need some data (in array format), a component to render each list item, and way to apply a unique key to each list item.

---

class: center, middle

<iframe width="640" height="360" src="https://www.youtube.com/embed/-VPM6ICgCk8?rel=0" frameborder="0" allowfullscreen></iframe>

---

# FlatList

Setting up `<FlatList>` in a component:

```js
constructor() {
  super();
  this.state = { data: ['Thing 1', 'Thing 2'] };
}

render() {
  return (
    <FlatList
      data={this.state.data}
      renderItem={({ item }) => <View><Text>{item}</Text></View>}
      keyExtractor={(item, index) => index}
    />
  );
}
```

Note that `item` is destructured out of the **[info object parameter](http://facebook.github.io/react-native/docs/flatlist.html#renderitem)** of `renderItem`.

---

# Fetching Data

We often want to populate a list view with external data.

Let's start by setting a state property to hold the data for the `FlatList` once fetched:

```js
constructor(props) {
  super(props);
  this.state = {
    data: [],
    isLoading: false,
  };
}
```

---

# Fetching Data

Then we'll fetch our data, and update state with it:

```js
componentDidMount() {
  let endpoint = 'https://api.github.com/users/octocat/repos';
  this.setState({loading: true})

  fetch(endpoint)
    // if fetch is successful, read our JSON out of the response
    .then(response => response.json())
    .then(data => {
      this.setState({ data, isLoading:false });
    })
    .catch(error => console.log(`Error fetching JSON: ${error}`));
}
```

---

# Fetching Data

Finally, we'll render our data in our component:

```js
render() {
 if (this.state.isLoading) {
  return (
   <ActivityIndicator animating={true} size="small" color="black" />
  );
 } else {
  return (
   <FlatList
    data={this.state.data}
    renderItem={({ item }) => <View><Text>{item.name}</Text></View>}
    keyExtractor={item => item.id}
   />
  );
 }
}
```

---

# Other Features

Customizable things in a `<FlatList>` (or `<SectionList>`):

- Add a separator (between list items, excluding the last)
- Add a header (or sticky header) to the top of your list (a search box maybe?)
- Add a footer (perhaps a Load More button?)
- Add pull to refresh or scroll loading functionality
- `SectionList` only: add a sticky header for each section of your list (where have we seen this pattern?)

---

# SectionList Data

The `<SectionList>` component is very similar to the `<FlatList>`, but the data will need to be a different shape, and will be set on the `sections` prop instead:

```js
<SectionList
  sections={[
    { title: "ADP", data: ["Bob", "Alice"] },
    { title: "WDP", data: ["Anne", "Mary", "Joe"] },
  ]}
  renderItem={({ item }) => <Text>{item}</Text>}
  renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
/>
```

---

# Exercise 3

Now you're going to build a slightly more complex `<FlatList>` in your `HelloWorld` app to display a list of users.

See the [lesson page](/lesson/01-intro-to-react-native/) for more details...

---

template: inverse

# Project Organization

---

# Thinking Ahead

Our project organization plan of attack:

- Reuse as much code as possible (esp. cross-platform)
- Keep configuration out of code
- Follow the container/presentational component pattern and keep our components as dumb as possible

---

# Project Folder

We won't want to depend on `index.js` exclusively as our app grows. Let's add a directory to house all of our RN code called `js`:

```bash
|-- __tests__
|-- android/
|-- App.js
|-- js/ # <----------- ADD THIS DIR!
|-- index.js
|-- ios/
|-- node_modules
|-- package.json
|-- # ...other config files
```

---

# Project Folder

Inside the `js` folder...

```bash
|-- js/
|   |-- components # smaller chunks of reusable, stateless UI
|   |-- config     # keep configuration out of code!
|   |-- assets     # static image assets and custom fonts
|   |-- lib        # general functions (code re-use FTW!)
|   |-- context    # create context and providers here
|   |-- navigation # define routes and nav components
|   |-- screens    # container components that render each screen
|   |-- App.js     # move App.js here!
```

You will import `js/App.js` into the root `index.js` of your project and pass your top-level component into `AppRegistry.registerComponent()` to register your app.

---

# Example

```js
// index.js

import { AppRegistry } from "react-native";
import App from "./js/App";

AppRegistry.registerComponent("HelloWorld", () => App);
```

```js
// js/App.js

import React, { Component } from "react";
import { View, Text } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>Welcome to React Native!</Text>
      </View>
    );
  }
}
```

---

# Configuration

What to put in your `config` folder:

```bash
|-- config/
|   |-- models.js # for defining our Realm db schema later
|   |-- api.js    # for API details, etc.
|   |-- styles.js # for shared styles (typography, colours, etc.)
```

**Note:** In RN, we typically want to **reuse styled components**, rather than reusing styles.

However, it usually make sense to set some base styles for our colours and typography (etc.) that can be imported into components throughout our app.

---

# Screens

Each screen of your app will be a container/presentational component combo:

```bash
|-- screens/
|   |-- About
|   |   |-- index.js
|   |   |-- styles.js
|   |   |-- About.js <-- Stateless component
|   |   |-- AboutContainer.js <-- Stateful component
```

And in the `index.js` we follow this pattern:

```js
import AboutContainer from "./AboutContainer";

export default AboutContainer;
```

---

# Components

We can use a similar directory structure for our reusable, stateless UI components:

```bash
|-- components/
|   |-- Loader
|   |   |-- index.js
|   |   |-- styles.js
|   |   |-- Loader.js
```

In `index.js`:

```js
import Loader from "./Loader";

export default Loader;
```

---

# What We've Learned

- What React Native is and why it is awesome
- How to configure our dev environments and debug RN apps
- How to use and style RN's mobile UI components
- How to use list components to display fetched data
- How to organize an RN project effectively

---

template: inverse

# Questions?

{% endhighlight %}
