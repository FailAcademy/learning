---
layout: slidedeck
title: Realm Databases II Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Realm Databases

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1.  Use React's context API to manage faves state in our app

---

# Exercise 1

Our `FavesProvider` component doesn't do much for us yet except give us access to an empty array of `faveIds`.

Write a `getFavedSessionIds` method for this class that uses one of your Realm helpers to get the current faves from the database, and then subsequently update the state of the `FavesProvider` with an array of the faved session IDs.

Call this method in `componentDidMount` so that we fetch this data initially as the component mounts.

Lastly, wrap your app in your `FavesProvider` in `App.js`.

---

# Exercise 2

Add `addFaveSession` and `removeFaveSession` methods to the `FavesProvider` component now. These methods should each have a `sessionId` parameter.

Pass these methods along in the `value` prop of `FavesContext.Provider` (along with the `faveIds`).

You will now be able to update your context where you use a `FavesContext.Consumer` component in your app.

---

# What We've Learned

- How to manage UI state in relation to a Realm database

---

template: inverse

# Questions?

{% endhighlight %}
