---
layout: slidedeck
title: Realm Databases Slides
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

1. Whats and whys of embedded databases
2. Adding Realm to a React Native project and defining schema
3. Saving and retrieving Realm data in an app

---
template: inverse

# Mobile Databases

---
class: center, middle

.large[
  Do you need actually need an embedded database in your mobile app?
]

---

# AsyncStorage

If you just need a basic key-value store for a small amount of data, the `AsyncStorage` [(ref)](https://facebook.github.io/react-native/docs/asyncstorage.html) library built into React Native may do the trick.

Think of `AsyncStorage` as being the React Native equivalent of a web brower's local storage API.

Note that data stored in `AsyncStorage` won't be encrypted.

---

# Use Cases

- Personal preferences and other user-specific data
- Offline data access
- Some kinds of local caching

---

# What's Out There

**SQLite:**

- Popular (fast!) cross-platform embedded database
- Written in C (and must write queries, unless you use a library to abstract this away)

**Core Data:**

- An ORM abstraction on top of SQLite (with a learning curve)
- iOS/Mac Only

---

# So...Realm!

What [Realm](https://realm.io/) is:

- It's **not an ORM** built on something that already exists
- "It's objects all the way down"
- It avoids expensive operations when trying to map a relational model to an object-focused model by design (so it's super fast)
- It was designed specifically to be used in phones and tablets and it's insanely easy to add and use in an app

---
template: inverse

# Setting Up Realm

---

# Installing Realm

There are two steps to add Realm to your project. First, add the npm package:

```bash
npm install --save realm
```

Then link it up:

```bash
react-native link realm
```

Congratulations, you have now added an embedded a mobile database in your app, and linked all of its native dependencies.

---

# Supported Data Types

Realm supports the following basic types: **bool**, **int**, **float**, **double**, **string**, **data**, and **date**:

- `bool` (maps to JavaScript `Boolean` objects)
- `int`, `float`, `double` (maps to JavaScript `Number` objects)
- `string` (maps to `string`)
- `data` (maps to `ArrayBuffer`)
- `date` (maps to `Date`)

---

# Defining Data Models

Creating a new data model with Realm couldn't be easier:

```js
import Realm from 'realm';

const Dog = {
  name: 'Dog',
  properties: {
    id: 'int',
    name:  'string',
    breed: 'string',
    birthday: {type: 'date', optional: true},
  }
};

export default new Realm({schema: [Dog]});
```

---

# Defining Data Models

What else can we do with our model?

- Selectively index properties
- Set a primary key (but no there's auto-incrementing of primary keys out-of-the-box yet...)
- Set a default value

---

# Exercise 1

If you haven't already, create a `config/model.js` file in your Splashify project.

In this file, define the model for a `Fave` object. Our `Fave` objects should have an `id` string property and a `faved_on` data property. 

Set the `id` as the `primaryKey` for your model.

Be sure to initialize your new Realm with its `Fave` model, and export it so its available in your Faves scene later.

---
template: inverse

# Writing, Retrieving, and Displaying Data

---

# Writing

Writing data to your Realm database is easy too. All database writes must be wrapped in the following method:

```js
realm = new Realm({schema: [Dog]});

realm.write(() => {
  // we create/update and delete our data here
});
```

From there, we can call the `realm.create()` and `realm.delete()` methods create/update and delete data from our database.

---

# Creating and Updating

We can use `realm.create()` to both create and update data:

```js
realm = new Realm({schema: [Dog]});

realm.write(() => {
  // Create a dog object
  realm.create('Dog', {id: 1, name: 'Gomez', breed: 'Shih Tzu'});

  // Passing "true" intelligently updates the object keyed off the id
  realm.create('Dog', {id: 1, name: 'Gomer Pile'}, true);
});
```

---

# Deleting

And use `realm.delete()` to remove data:

```js
realm.write(() => {
  let dog = realm.create('Dog', {id: 2, name: 'Dexter', breed: 'Boston'});

  realm.delete(dog); // delete Dexter :(
    
  let allDogs = realm.objects('Dog');
  realm.delete(allDogs); // delete all dogs :( :( :(
});
```

---

# Querying

The final piece of the CRUD puzzle is reading data from the database.

```js
let dogs = realm.objects('Dog'); // get all the dog objects
```

Get specific dog objects with filtering:

```js
let dogId = 1;
let gomez = dogs.filtered('id == $0', dogId);
let dexter = dogs.filtered('breed = "Boston" AND name BEGINSWITH "D"');
```

And sort our results too:

```js
let ascDogs = dogs.sorted('name'); 
let descDogs = dogs.sorted('name', true); // reverses the order 
```

---

# Pro Tip!

You can install **[Realm Browser](https://github.com/realm/realm-browser-osx)** as a GUI for managing your Realm databases.

To find out where your Realm database is stored locally, you can log the path to the file in your console:

```js
realm = new Realm({schema: [Dog]});
console.log('the path is: ', realm.path);
```

---

# Exercise 2

Create a `databaseHelpers.js` file in the `lib` directory of your project now. In it, write two functions: 

1. A function that **checks if a particular photo has been faved**. It should return true or false. We can use it to conditionally render the colour of the star icon in the Photobox scene.
2. A function that **saves or deletes a photo as a fave**. If the photo is already faved it should be deleted from the database, otherwise it should be added to the database. We can use this function to take the appropriate write action when the star icon is tapped in the Photobox scene.

---

# What We've Learned

- What an embedded database is in the context of a mobile app, and when its appropriate to use one
- How to add Realm to a React Native app
- How to define a schema with Realm
- How to perform basic CRUD operations on a Realm database in React Native

---
template: inverse

# Questions?

{% endhighlight %}
