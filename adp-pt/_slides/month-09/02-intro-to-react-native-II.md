---
layout: slidedeck
title: Introducing React Native II Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Introducing React Native II

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1.  Lists and data
2.  Fetching Data
3.  Project Organization

---

template: inverse

# Lists and Data

---

# Lists and RN

React Native provides three different components for tranforming data into lists in your app UI:

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
constructor() {
  super();

  this.state = {
    data: [],
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
    { title: 'ADP', data: ['Bob', 'Alice'] },
    { title: 'WDP', data: ['Anne', 'Mary', 'Joe'] },
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

We won't want to depend on `index.js` exclusively as our app grows. Let's add a directory to house all of our RN code called `app`:

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

In `index.js`:

```js
import { AppRegistry } from 'react-native';
import App from './js/App';

AppRegistry.registerComponent('HelloWorld', () => App);
```

In `js/App.js`:

```js
import React, { Component } from 'react';
import { View, Text } from 'react-native';

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

# Scenes

Each screen of your app will be a container/presentational component combo:

```bash
|-- screens/
|   |-- About
|   |   |-- index.js
|   |   |-- styles.js
|   |   |-- About.js <-- (Stateless) Markup only
|   |   |-- AboutContainer.js <-- (Stateful) Logic and state
```

And in the `index.js` we follow this pattern:

```js
import AboutContainer from './AboutContainer';
import About from './About';

export { About };
export default AboutContainer;
```

---

# Components

We can use a similar directory structure for our reusable, stateless UI components:

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
