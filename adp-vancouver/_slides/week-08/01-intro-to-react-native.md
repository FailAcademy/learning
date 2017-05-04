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

1. What is React Native?
2. Dev environment config and debugging
3. Basic mobile components
4. Styling components
5. ListViews and data
6. Project organization

---
template: inverse

# What Is React Native?

---

# What It Is Not...

RN is **not like Cordova** (PhoneGap, Ionic, etc.), which allows you to build something that looks like a native app wrapped in a headless web browser in webview inside of a native app (these are known as hybrid apps).

RN is also **not an HTML5 app or progressive web app**.

And it's **not the only non-webview-based cross-platform** game in town, for example, you could also use also NativeScript (AngularJS/free), Xamarin (#C/freemium), and Appcelerator (JS/paid).

---

# So What Is It?

React Native is an open-source (BSD-licensed) framework developed by Facebook.

It uses the same fundamental UI building blocks as regular iOS and Android apps, but we get to **use JS and React to build truly native mobile apps** (instead of Objective-C, Swift, or Java).

On top of that, RN also offers an (arguably) **better developer experience** and **cross-platform potential** than entirely native approaches.

---

# How Does It Work?

RN works because its **bridge** creates an interface between React and the host platform's native UI elements and APIs:

.inline-images[
  ![React Native bridge diagram](/public/img/slide-assets/rn-bridge.jpg)  
]

---

# Rendering to the DOM

Recall that when we use React, we also need to include the `ReactDOM` module to render our components to the DOM:

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
   render() {
      return (
         <h1 id="title">Hello, world!</h1>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

---

# Rendering with RN

Our approach to building a React Native components is noticeably similar, but we import the `AppRegistry` module instead of `ReactDOM`:

```js
import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';

class App extends Component {
  render() {
    return (
      <View>
        <Text>Welcome to React Native!</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
```

---

# Why Do It This Way?

- You can build **cross-platform** native apps using your existing JS/React skills (no Objective-C, Swift, or Java required!)
- Maximizes potential **code re-use** (even between web apps)
- There's a large (and growing!) **community** around it
- RN allows you to **recompile your apps instantly** (With HMR! And a better debugging experience!!)
- You can still **drop into native code** if you need to (e.g. to leverage APIs that aren't exposed in RN by default)

---
template: inverse

# Dev Environment Config and Debugging

---

# Dev Environment

Before we can create our first React Native app, we must ensure we have the following tools installed:

1. [Xcode](https://developer.apple.com/xcode/)
2. [Homebrew](http://brew.sh/)
3. [Node](https://nodejs.org/en/)

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

You're now ready to open your new project in VS Code.

You can start the RN Packager Server from with VS Code by typing `⌘ + ⇧ + P` and picking **React Native: Start Packager**.

From your project directory, now run:

```bash
react-native run-ios
```

You can also add the `--simulator="iPhone SE"` flag to that command to launch your app on a specific device.

---

# What's in There?

The generated directory structure for your project will include:

```bash
|-- __tests__        # for Jest tests
|-- android/         # boilerplate for Android
|-- index.android.js # entry point for your app
|-- index.ios.js     # entry point for your app
|-- ios/             # boilerplate for iOS
|-- node_modules     # yes, we can use npm packages with RN!
|-- package.json     # obviously...don't leave home without it
|-  # ...            # other RN config files...
```

For now, we will work primarily in `index.ios.js`, but will talk more in depth about project organization later in the lesson.

---

# Digging Deeper

But how does RN know what component to bind to the view when our app launches? In our `index.ios.js` file we have:

```js
AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
```

And if we look in `ios/AppDelegate.m` we'll see:

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

*Before we proceed...*

Unlike HTML elements, RN's built-in mobile UI components are modules we must selectively import from `react-native` wherever we want to use them in our own components:

```js
import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

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
  resizeMode={"contain"}
  source={% raw %}{{uri:'https://unsplash.it/600/400/?random'}}{% endraw %}
  // source={require('./img/puppies.png')} A LOCAL IMAGE!
/>
```

**[Read more on using images in RN here.](https://facebook.github.io/react-native/docs/images.html)**

---

# Image

Also note that `<Image>` components do not need to be self-closing in RN! 

You wrap opening and closing `<Image>` tags around another component, then easily absolutely position the inner component on top of the image.

```js
<Image
  style={% raw %}{{ width: 300, height: 200, }}{% endraw %}
  source={% raw %}{{uri:'https://unsplash.it/600/400/?random'}}{% endraw %}
>
  <Text>Some text...</Text>
</Image>
```

---

# TextInput

We may also want users to enter text into a `<TextInput>` [(ref)](https://facebook.github.io/react-native/docs/textinput.html) at some point...

```js
<TextInput
  style={% raw %}{{
      height: 30,
      width: 100,
      borderWidth: 1,
      borderColor: "rgba(0,0,0,0.5)",
  }}{% endraw %}
  placeholder={'Type here'}
  placeholderTextColor={"rgba(198,198,204,1)"}
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
<TouchableOpacity
  onPress={() => {}}
  activeOpacity={75 / 100}>
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
- `StyleSheet.Create`

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

# StyleSheet.Create

RN also provides us `StyleSheet.Create` as bit of optional syntactic sugar for creating our style objects (but this is likely the way we'll usually want to do it).

The previous style objects occasionally offer an advantage over the `StyleSheet.Create` though, because style objects allow our style to be mutable (which may be desirable when using modules such as the `PanResponder`).

---

# StyleSheet.Create

**Example:**
 
```js
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
    alignItems: 'center',
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

**[You can read more on layouts here.](https://facebook.github.io/react-native/docs/flexbox.html)**

---

# Exercise 2

Time for an RN layout challenge!

See the [lesson page](/lesson/01-intro-to-react-native/) for more details...

---
template: inverse

# ListViews Components and Data

---

# ListView

The `<ListView>` [(ref)](https://facebook.github.io/react-native/docs/listview.html) component is like a `<ScrollView>` with benefits.

A `<ListView>` expects you to insert some kind of (potentially very large) data blob into it, and it will display that data much more efficiently than a basic `<ScrollView>` could. Performance FTW.

To use a `<ListView>` component you need at least two things: `ListView.DataSource` (in array format, set as the `dataSource` prop) and a `renderRow` prop that returns a component.

---
class: center, middle

<iframe width="640" height="360" src="https://www.youtube.com/embed/-VPM6ICgCk8?rel=0" frameborder="0" allowfullscreen></iframe>

---

# ListView

Setting up `<ListView>` in a component:

```js
constructor() {
  super();

  this.ds = 
    new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  this.state = {
    dataSource: this.ds.cloneWithRows(['Thing 1', 'Thing 2']),
  };
}
  
render() {
  return (
    <ListView
      dataSource={this.state.dataSource}
      renderRow={(data) => <View><Text>{data}</Text></View>}
    />
  );
}
```

---

# ListView

What's going on with this syntax?

```js
this.ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

this.state = {
  dataSource: this.ds.cloneWithRows(['Thing 1', 'Thing 2']),
};
```

The `rowHasChanged` change function is responsible for detecting changes in our `<ListView>`.

The `cloneWithRows` method allows us to actually pass some data into our `<ListView>` for rendering.

---

# ListView

Other things we can customize in a `<ListView>`:

- Add a separator (between list items, excluding the last)
- Add a header (or sticky header) to the top of your list (a search box maybe?)
- Add a sticky header for each section of your list (where have we seen this pattern?)
- Add a footer (perhaps a Load More button?)

---

# Fetching Data

We often want to populate a `<ListView>` with external data.

Let's start by creating our new `ListView`, but we won't put any data in it with `cloneWithRows` just yet...

```js
constructor() {
  super();
  
  this.ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });

  this.state = {
    dataSource: this.ds,
    isLoading: true,
  };
}
```

---

# Fetching Data

Then we'll fetch our data, and update state with it:

```js
componentDidMount() {
  let endpoint = 'https://api.github.com/users/octocat/repos';

  fetch(endpoint)
    // if fetch is successful, read our JSON out of the response
    .then((response) => response.json())
    .then((result) => {
      this.setState({ dataSource: this.ds.cloneWithRows(result) });
    })
    .catch(error => console.log(`Error fetching JSON: ${error}`));
}

componentDidUpdate() {
  if ( this.state.dataSource && this.state.isLoading ) {
    this.setState({ isLoading: false, });
  }
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
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(data) => <View><Text>{data.name}</Text></View>} 
      />
    );
  }
}
```

---

# Exercise 3

Now you're going to build a slightly more complex `<ListView>` in your `HelloWorld` app to display a list of users.

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

We won't want to depend on `index.ios.js` and `index.android.js` exclusively as our app grows. Let's add a directory to house all of our RN code called `app`:

```bash
|-- __tests__
|-- android/
|-- js/ # <----------- ADD THIS DIR!
|-- index.android.js
|-- index.ios.js
|-- ios/
|-- node_modules
|-- package.json
```

---

# Project Folder

Inside the `app` folder...

```bash
|-- js/
|   |-- components # smaller chunks of reusable, stateless UI
|   |-- config     # keep configuration out of code!
|   |-- assets     # static image assets and custom fonts
|   |-- lib        # general functions (code re-use FTW!)
|   |-- redux      # store and reducers go here
|   |-- navigation # define routes and nav components
|   |-- scenes     # container components that render each scene
|   |-- index.js   # single entry point of a cross-platform app
```

You will import `index.js` into `index.ios.js` and `index.android.js` and pass your top-level component into `AppRegistry.registerComponent()` to register your app.

---

# Example

In `index.ios.js` and `index.androids.js`:

```js
import { AppRegistry } from 'react-native';
import HelloWorld from './app';

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
```

In `app/index.js`:

```js
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class HelloWorld extends Component {
  render() {
    return (
      <View><Text>Welcome to React Native!</Text></View>
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

# Scenes

Each scene of your app will be a container/presentational component combo:

```bash
|-- scences/
|   |-- User
|   |   |-- index.js
|   |   |-- styles.js
|   |   |-- User.js
|   |   |-- UserContainer.js
```

And in the `index.js` we follow this pattern:

```js
import UserContainer from './UserContainer';
import User from './User';

export { User };
export default UserContainer;
```

---

# Components

Use can use a similar directory structure for our reusable, stateless UI components:

```bash
|-- components/
|   |-- UserAvatar
|   |   |-- index.js
|   |   |-- styles.js
|   |   |-- UserAvatar.js
```

In `index.js`:

```js
import UserAvatar from './UserAvatar';

export default UserAvatar;
```

---

# What We've Learned

- What React Native is and why it is awesome
- How to configure our dev environments and debug RN apps
- How to use and style RN's mobile UI components
- How to use the ListView component to display fetched data 
- How to organize an RN project effectively

---
template: inverse

# Questions?

{% endhighlight %}
