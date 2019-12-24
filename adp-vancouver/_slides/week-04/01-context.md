---
layout: slidedeck
title: Context Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# React Context

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1.  What is Context?
2.  Why and When use Context?
3.  Context Provider
4.  Context Consumer

---

template: inverse

# What is Context?

---

class: center, middle

It manages application state for React applications. It provides a way to pass data through the component tree without having to pass any props.

???

- That also uses one-way data flow!
- Get students to discuss what they think this means in plain English

---

Application state can be stored in a state and passed down to any children that require that information. Other components that are not children of this component can not access that data.

Think of a stateful component that holds a state that can be accessed by any component in the tree. That's Context!

---

.inline-images[
![Context](https://miro.medium.com/max/3472/1*Jx8BCxZFN2SCuhQtZqfgMQ.jpeg)
]

---

# API Implementation

Let's create a Context that holds a user's information

Create a file `UserContext` in the `Context` dir.

```js
// UserContext.js
import React, { createContext } from 'react';

// create Context
const UserContext = createContext();
```

Every Context object comes with a provider component and a consumer component. Provider component provides the information, and the consumer component consumes the information. Like Pub/Sub.

---

# Context.Provider

```js
// UserContext.js

export default class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: 'James Bond',
        age: 35,
        code: 'OO7'
      }
    };
  }

  render() {
    <UserContext.Provider value={/* pass value to be consumed */}>
      {this.props.children}
    </UserContext.Provider>;
  }
}
```

---

class: center, middle

`Note:` Provider component accepts a value prop that will be consumed by the Consumer component.

---

In this example, we will pass user state as value prop in the `UserContext.Provider` component.

```js
// UserContext.js
render() {
        <UserContext.Provider value={this.state.user}>
        {this.props.children}
        </UserContext.Provider>
    }
```

---

class: center, middle

Whenever the Provider's value prop changes, the consumer will re-render with the updated data.

---

# Hold on

before using Context, wrap your app with the Context Component. So that all the children component of this wrapper can access Context data directly.

```js
// index.js
improt React from "React"
import UserProvider from "./Context/UserContext"

const App = () => (
    <UserProvider>
        <RouteLayout /> // next root component of your app
    </UserProvider>
)

export default App
```

---

# Context Consumer

This React component lets you subscribe to the Context. Any changes in the Context will re-render this component with the updated data.

```js
// ProfileContainer.js
import React, { Component } from 'react';
import { UserContext } from '../../Context/UserContext';
import Profile from './Profile';

class ProfileContainer extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ user }) => <Profile user={user} />}
      </UserContext.Consumer>
    );
  }
}

export default ProfileContainer;
```

---

`Note:` Context.Consumer requires a function as a child that takes current Context value as an input and gives React node as an output.

That's it. That's how to implement Context API in a React App. Context API is useful when a React Application requires a global state that can be accessed by all the components in the component tree. Easy to use, easy to implement.

---

# What We've Learned

- What is Context and what problem it solves
- Context Provider
- Context Consumer

---

template: inverse

# Questions?

{% endhighlight %}
