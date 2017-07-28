---
layout: slidedeck
title: Pub-Sub and Security in Meteor Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Pub-Sub and Security in Meteor

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Create Meteor Methods & DDP
2. Set up Pub/Sub

---
template: inverse

# Meteor Methods

---
class: center, middle

.large[
  Think of Meteor Methods as an **API for your server**.
]

???

- Methods are Meteor’s remote procedure call (RPC) system, used to save user input events and data that come from the client
- You can think of them like POST requests to your server, but with many nice features optimized for building a modern web application
- At its core, a Method is an API endpoint for your server
- Methods is usually capitalized to distinguish from JS methods

---

# Typical Client/Server Relationship

- Server implements a REST API in language X
- Someone has to write a library for accessing that API in the client's language
- The client uses the library to interact with the server

---

# Meteor Client/Server Relationship

- Methods are written on the server
- Client uses the Meteor interface to call the Method

---

# DDP

- Stands for **D**istributed **D**ata **P**rotocol
- **Server:** define a realtime queries using `Meteor.publish`
- **Client:** you call `Meteor.subscribe` to connect to a publication endpoint
- DDP then intelligently polls your database to pick up changes and push them down to the client

???

- DDP is a standard way to solve the biggest problem facing client-side JavaScript developers: querying a server-side database, sending the results down to the client, and then pushing changes to the client whenever anything changes in the database
- Uses websockets
- DDP messages are JSON objects

---
class: center, middle

.inline-images[
  ![Meteor pub/sub diagram](/public/img/slide-assets/meteor-pub-sub.png)
]

.footnote.right[
  Source: [GeekyAnts](https://blog.geekyants.com/meteor-react-native-simplicity-productivity-a62559a1a570)
]

---
class: center, middle

.large[
  Our app is insecure right now. Why?
]

---

# Getting Started

The first step toward securing our app is to remove the default `insecure` package from the Meteor app:

```bash
meteor remove insecure
```

Congrats! You have now revoked the client-side permissions from your app, and will no longer be able to update your to-dos, or add new ones...let's fix that.

---

# Where to Put Methods

In our `imports/api/todos.js` we'll make a call to `Meteor.methods()`. Add a Method for `toggleComplete`:

```js
// in todos.js...

Meteor.methods({
  'todos.toggleComplete' (todo) {
    if (todo.owner !== this.userId) {
      throw new Meteor.Error('todos.toggleComplete.not-authorized',
        'You are not allowed to update to-dos for other users.');
    }

    ToDos.update(todo._id, {
      $set: { complete: !todo.complete },
    });
  },
});
```

---

# Use the Method

To use the new toggling Method, we'll use `Meteor.call()` in our component:

```js
// in App.js...

toggleComplete(todo) {
  // REMOVE THIS!
  // ToDos.update(todo._id, {
  //   $set: { complete: !todo.complete },		
  // });

  Meteor.call('todos.toggleComplete', todo); // NEW!
}
```

---

# Exercise 1

Your turn! Add Meteor Methods for `addToDo`, `removeToDo`, and `removeCompleted` now.

Call these new Methods in your `App` component where appropriate. When you're done, all of your `App` component's methods should work again as they did before.

---
template: inverse

# Publications and Subscriptions in Meteor

---
class: center, middle

.large[
  &ldquo;Database everywhere&rdquo; probably isn't a hot idea in a production app either...
]

---

# Data on the Client

We will want to a little more explicit about what data the server sends to the client in our app. To begin, start by removing this default Meteor package:

```bash
meteor remove autopublish
```

Congrats again! You can no longer view your to-dos, even when logged into your account. Let's also fix this...

---

# Simple Fix: Part 1

On the server side, we'll need to create a publication for our to-dos in `imports/api/todos.js`

```js
// in todos.js again...

if (Meteor.isServer) {
  Meteor.publish('todos', function todosPublication() {
    return ToDos.find({ owner: this.userId });
  });
}
```

---

# Simple Fix: Part 2

One last step...we must subscribe to our publication within our the HOC wrapping the `App` component:

```js
export default createContainer(() => {
  Meteor.subscribe('todos'); // NEW!

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    todos: ToDos.find({}).fetch()
  };
}, App);
```

**Note:** We can now remove the call to `filter()` in our `App` component's render method as the server will only provide us with the to-do documents for the currently logged-in user now.

---

# What We've Learned

- How Methods allow us to securely create endpoints on our server to complete various actions in our app
- How to use publications and subscriptions in Meteor to selectively choose what data is made available to the the client, and then import that data into a React component as props

---
template: inverse

# Questions?

{% endhighlight %}
