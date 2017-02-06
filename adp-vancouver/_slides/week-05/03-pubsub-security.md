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

1. Create Meteor Methods
2. Set up Pub/Sub

---
template: inverse

# Meteor Methods

---
class: center, middle

.large[
  At the moment, any user can edit any part of the database from the client side of the app...
]

---

# Getting Started

The first step toward securing our app is to remove the default `insecure` package from the Meteor app:

```bash
meteor remove insecure
```

Congrats! You have now revoked the client-side permissions from your app, and will no longer be able to update your to-dos, or add new ones...let's fix that.

---

# Meteor Methods

Think of Meteor Methods as an **endpoint for your server.**

---

More content probably goes here...

---

# Where to Put Them

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
  "Database everywhere" probably isn't a hot idea in a production app either...
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
