---
layout: slidedeck
title: React Context (Project code along)
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# React Context (Project code along)

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1.  What's React Context for?
2.  Set-up Context for our project
3.  Connext Context with necessary UI

---

# Exercise 1

1. Create a file called `ItemPreviewProvider.js` in the `context` dir.
2. Create a context object.
3. Create initial state for your context.

---

# Exercise 2

1. Create `ItemPreviewProvider` class and use your `initialState` in the `constructor` of this class. `Hint: this.state = {...};`

2. Create a `Provider` for this context and pass `state` in the `value` prop.

3. Create methods to `update` and `reset` the state (`itemPreview`).

---

# Exercise 3

Wrap your app with the `ItemPreviewProvider` component in the `index.js` (client root) file.

---

# Exercise 4

From the `ShareItemPreview` component subscribe to the `ItemPreviewContext` using the `Consumer` component.

Use the received `itemPreview` data to pass in the `ItemCard` component as prop.

---

# Update context from form

React final form has a component which we can use to send updated form values to the our context state:<br/>
The [FormSpy](https://github.com/final-form/react-final-form#formspy--reactcomponenttypeformspyprops) component.

```js
<FormSpy
  subscription={% raw %}{{ values: true }}{% endraw %}
  onChange={({ values }) => {
    if (values) {
      this.dispatchUpdate(values, tags, updatePreview);
    }
    return "";
  }}
/>

```

---

# Exercise 5

Our form should send the updated values to item preview context, but some of the values may be missing. Like `tags` and `updatePreview`.

How can we get all the `tags` from the server and `updatePreview` method from our context?

`Hint`: use the `<Query />` component in `ShareContainer.js` to query all the `tags` and pass them down to our `ShareItemForm.js`.

`Hint`: To get access to the `updatePreview` method, use the Consumer component and wrap your existing JSX in this class.

---

# Continue...

Let's create a `dispatchUpdate` function that will be responsible for updating our context state.

```js
dispatchUpdate = (values, allTags, updatePreview) => {
  updatePreview({
    ...values,
    tags: this.applyTags(values.tags || [], allTags)
  });
};
```

---

# Handling Tags:

Let's convert this tags into an array of objects.

```js
applyTags = (tags, allTags) => {
  return tags.map(tag => {
    const updatedTag = { title: tag };
    allTags.filter(t => {
      if (t.title === tag) {
        updatedTag.id = t.id;
      }
    });
    return updatedTag;
  });
};
```

---

# Lab Activity

### Finishing up with the addItem Mutation

Now that you've wired up your context and have the necessary information to add an item to your database, complete the `addItem` mutation.

`Hint:` Create `saveItem` method to do the `addItem` mutation.

By the end of the lab you should be able to create items from your UI!
Also, the `ShareItemPreview` should update as the user adds information to the form.

_See lesson page for detailed requirements._

---

# What We've Learned

- How to use context in a React application
- How to use the `FormSpy` component in concert with your context

---

template: inverse

# Questions?

{% endhighlight %}

```

```
