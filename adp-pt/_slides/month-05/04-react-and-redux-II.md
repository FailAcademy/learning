---
layout: slidedeck
title: React and Redux II Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# React & Redux II

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1.  Refactor state-related code into Redux modules
2.  Write all of the code for adding an item from the UI of Boomtown!

---

# Exercise 1

updating our Redux store. Wire up the `FormSpy` component. It should send the values from the form to the store, but some of the values may be missing. Like `tags` and `updateNewItem`.

How can we get all the `tags` from the server and `updateNewItem` function from our redux store?

`Hint`: use the `<Query />` component in `ShareContainer.js` to query all the `tags` and pass them down to our `ShareItemForm.js`.

---

# Continue...

Let's create a `dispatchUpdate` function that will be responsible for updating our Redux store.

```js
dispatchUpdate(values, tags, updateNewItem) {
    if (!values.imageurl && this.state.fileSelected) {
      this.getBase64Url().then(imageurl => {
        updateNewItem({
          imageurl
        });
      });
    }

    updateNewItem({
      ...values,
      tags: this.applyTags(tags)
    });
  }
```

???

Form gets updated every time a user changes any value. If condition here will make sure that we will convert an image into base64Url only once.

`updateNewItem` function will take care of updating Redux store for any changes we make in the share item form.

---

# Ref and State

```js
this.fileInput = React.createRef();

this.state = {
  fileSelected: false,
  done: false,
  selectedTags: [],
};
```

Can you create two methods, `handleSelectTag` and `handleSelectFile` to change the values of our state?

`Hint:` Use the Ref we just created with `handleSelectFile` method.

---

# Handling Tags:

Let's convert this tags into an array of objects.

```js
applyTags(tags) {
    return (
      tags &&
      tags
        .filter(t => this.state.selectedTags.indexOf(t.id) > -1)
        .map(t => ({ title: t.title, id: t.id }))
    );
  }
```

???

It will be easier this way to store them in to the database we created.

---

# getBase64Url()

Convert the selected image into a base64 string so that we can store it our database.

```js
getBase64Url() {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = e => {
        resolve(
          `data:${this.state.fileSelected.type};base64, ${btoa(
            e.target.result
          )}`
        );
      };
      reader.readAsBinaryString(this.state.fileSelected);
    });
  }
```

---

# Exercise 5

Write a `resetFileInput` function that can reset the image preview and set state to initial values.

`Hint:` Use `resetNewItemImage` function from our Redux store.

???

```js
resetFileInput() {
this.fileInput.current.value = '';
this.props.resetNewItemImage();
this.setState({ fileSelected: false });
}
```

---

# Lab Activity

### Finishing up with the addItem Mutation

Now that you've wired up your store and have the necessary information to add an item to your database
stored there, complete the `addItem` mutation (Server-Side).

By the end of the lab you should be able to create items from your UI!
Also, the `ShareItemPreview` should update as the user adds information to the form.

_See lesson page for detailed requirements._

---

# What We've Learned

- How to refactor local state into Redux modules in a React application
- How to use the `FormSpy` component in concert with your Redux store

---

template: inverse

# Questions?

{% endhighlight %}

```

```
