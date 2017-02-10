---
layout: slidedeck
title: Collections and Accounts Slides

---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Collections and Accounts

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Intro to MongoDB
2. Using Collections in Meteor
3. Adding user accounts to a Meteor app

---
template: inverse

# Intro to MongoDB

---
class: center, middle

.large[
  What do we know about MongoDB already?
]

---

# About MongoDB

- Stores data in rich documents (use arrays, embedded documents, etc.)
- Uses JSON to format the documents
- Schema-free by default
- Allows us to design data models to support common access patterns (compared to a relational design that may require joins across tables)
- Makes it way easier to shard data across servers (scale out instead of up!)

---

# DB Jargon

A loose comparison of SQL vs. MongoDB terminology:

```
  SQL          |  MongoDB
-----------------------------------------
  Database     |  Database

  Table        |  Collection

  Index        |  Index

  Row          |  Document

  Column       |  Field

  Primary Key  |  Primary Key (_id)

  Joining      |  Linking or Embedding
```

---

# JSON and MongoDB

Recall that these value types are supported by JSON (and MongoDB!):

- object (nested documents!)
- array (with any combo of legal values)
- string
- number
- boolean
- null

---

# BSON?

Any valid JSON can be easily imported and queried in MongoDB. It also **[supports additional data types too](https://docs.mongodb.com/manual/reference/operator/query/type/#available-types)**, like a date field. 

But ultimately, MongoDB stores data as **BSON** (binary JSON).

BSON is **a binary serialization of JSON-like objects**. Documents are essentially JSON objects that MongoDB stores in binary.

Luckily, MongoDB drivers take care of automatically converting and storing data in BSON for you.

---

# Get Started

To start-up the MongoDB server, enter this in your terminal:

```bash
mongod
```

**Open another terminal window** and type the following to launch the Mongo shell:

```bash
mongo
```

Try typing `help` in the Mongo shell to see what you can do now that you're in there...

---

# Mongo Shell

The Mongo shell is a fully functional Mongo client application, so all CRUD operations are supported here.

In the shell, the `db` variable is global variable that refers to the database we are currently using. To use a database, type:

```
use <DB_NAME>
```

The database will now be accessible through the `db` variable.

We can even `use` a database that doesn't exist yet, and MongoDB will lazily create it when we insert our first document in there.

---

# Basic CRUD

MongoDB allows us to perform all essential CRUD operations on a database:

- Create (**insert** documents)
- Read (**query** documents)
- Update (**update** or **upsert** documents)
- Delete (**remove** documents)

---

# Inserting Documents

**Create a document:**

```bash
use adp
db.students.insertOne({name: "Bob", cohort: 6, passing: true});
```

We get a **return document** showing us our new document's ID.

Every document is assigned a unique ID in a Mongo database in the `_id` field. We can manually set this ID if we want to (but no dupes allowed!).

---

# Inserting Documents

Add a couple more documents to your `students` collection that adhere to this field pattern now...

Note that you can also use `insertMany()` and pass it an array of documents to insert multiple documents at once:

```bash
db.students.insertMany([
  {name: "Anne", cohort: 6, passing: true},
  {name: "Joe", cohort: 6, passing: false, teachers: ['Jill', 'Mary']},
]);
```

---

# Querying Documents

**Read a document:**

Try running each of the following commands. What can you infer is happening with each?

```bash
db.students.find();
db.students.find().pretty();
db.students.findOne();
db.students.find({name: "Anne"});
db.students.find({cohort: 6, passing: true});
```

In MongoDB, the first argument passed to `.find()` is known as the **query document**, which specifies the shape of the documents we want to find. If we specify no constraints, the we get back all documents.

---

# Sidebar: Cursors

Note that what `.find()` returns isn't actually an array of documents, it's a **cursor**. The cursor is **what we use to extract results** from the database (because loading all results into memory right away wouldn't be efficient). 

We **[call methods on our cursor](https://docs.mongodb.com/manual/reference/method/js-cursor/)** to actually extract results and do things with those results. Try one out:

```bash
db.students.find().forEach( (doc) => print( doc.name ) );
```

A cursor will typically retrieve a **batch of up to 101 results** for you to iterate through before retrieving another batch (or 20 results in the shell if not assigned to a variable).

---

# Querying Documents

**Comparison Operators:**

`$eq`, `$gt`, `$gte`, `$lt`, `$lte`, `$ne`, `$in`, and `$nin`

```bash
db.students.find({ cohort: { $gte: 5 } });

db.students.find({ cohort: { $in: [5, 6] } });
```

Note that `db.students.find({ cohort: { $eq: 6 } });` is the same as `db.students.find({ cohort: 6 });`.

Also note the `$in` operator selects the documents where the value of a field equals any value in the specified array. 

---

# Querying Documents

**Logical Operators**

`$and`, `$or`, `$not`, and `$nor`

```bash
# These do the same thing...

db.students.find({ $and: [ { cohort: 6 }, { passing: true } ] });
db.students.find({ cohort: 6, passing: true }); # implicit $and

# These also do the same thing...

db.students.find({ $or: [ { name: "Bob" }, { name: "Anne" } ] });
db.students.find({ name: { $not: { $eq: "Joe" } } });
```

---

# Querying Documents

**Finding Matching Elements in Arrays:**

The `$elemMatch` operator matches documents that contain an array field with at least one element that matches all the specified query criteria:

```bash
db.students.find(
   { teachers: { $elemMatch: { $eq: "Mary", $eq: "Jill" } } }
);
```

---

# Sidebar: Projections

As a second argument to `.find()` we can pass another object known as a **projection**.

```bash
db.students.find({ cohort: 6, passing: true }, { _id: 0, name: 1 });
```

Projections allow us to only request the fields/data we need from a document over the wire&mdash;performance FTW.

The `_id` field is **included by default**, and must be explicitly set to `0` to exclude it. All other fields must be implicitly included by setting them to `1`.

---

# Sidebar: Skip, Limit, Sort

MongoDB provides cursor methods for skipping, limiting, and sorting results:

```bash
var cursor = db.students.find();

cursor.skip(3); # skip the first three results
cursor.limit(10); # then get the next 10 only
cursor.sort({ cohort: 1 }); # -1 for descending
```

We can also pass an array of sort criteria to `.sort()`.

**Note:** It doesn't matter what order you call these methods on a cursor. Sort will always be applied first, skip will be applied second, and limit will be applied last.

---

# Updating Documents

**Update a document:**

We can also `updateOne()` and `updateMany()` in MongoDB:

```bash
db.students.updateMany(
  { name : "Bob" },
  { $set: { passing : false } }
);

db.students.updateOne(
  { name : "Alice" },
  { $set: { cohort: 6, passing: true } },
  { upsert: true }
);
```

Update commands can also results in documents being created in the database. These commands are called **upserts**.

---

# Deleting Documents

**Delete a document:**

Lastly, we have `deleteOne()` and `deleteMany()` to remove documents:

```bash
# Will delete the first document that matches
db.students.deleteOne({ _id : ObjectId("5892ce85ebd5c3837116cdec") });

# Delete all the Joes!
db.students.deleteMany({ name : "Joe" });
```

You can use `db.students.drop()` to drop the entire collection. But use with caution!

---

# Shell DB Cheatsheet

A few helpful commands to use the Mongo shell:

```bash
show dbs           # show all databases
use <DB_NAME>      # assign database to db global
db                 # show me which db I'm using
show collections   # show all collections in db
db.dropDatabase(); # delete a database (make sure it's the right one!)
```

Quickly import a JSON file as a MongoDB:

```bash
# Use the --jsonArray flag if you are importing an array of objects
mongoimport --drop -d adp -c students students.json --jsonArray
```

---

# Exercise 1

Let's practice importing and querying data in MongoDB. Outside of the Mongo shell, import the **[sample data set](/public//exercises/people.json).**

- How many people are humans from Tatooine?
- How many people appear in The Empire Strikes Back?
- How many people are taller than than 170cm?
- How many people fly some form of X-Wing?
- Return the names and masses of humans, ordered in descending order by known mass. Skip the first two results and limit your results to only four people.

---
template: inverse

# Using Mongo Collections in Meteor

---

# Mongo in Meteor

MongoDB collections are Meteor's way to **persist data in the application**.

The cool thing about Meteor though is that collections are available on both the client and the server.

---

# Minimongo?

While Meteor gives **the database everywhere**, on the client side of an app you actually interacting with a cache of the database.

This is made possible by **Minimongo**, which is an in-memory, all JS implementation of the MongoDB API.

The way we get data from the server is through Meteor's pub/sub system, and we write it back with Meteor methods (more on that tomorrow).

---

# Create a Collection

Create a new file `api/imports/todo.js` and add this code:

```js
import { Mongo } from 'meteor/mongo';

export const ToDos = new Mongo.Collection('todos');
```

But this isn't doing much for us yet! Create another file `api/imports/start-up/server/index.js` and import it into `server/main.js` (the main server entry point for our app).

Create another file in `api/imports/start-up/server/` called `register-api.js` and import your `todos.js` there.

In `api/imports/start-up/server/index.js`, now import `register-api.js`. Done, phew!

---

# Meteor Mongo Shell

Meteor has it's own implementation of the Mongo shell. To enter it, run:

```bash
meteor mongo
```

Try adding a todo:

```bash
db.todos.insert({ id: 0, title: 'Learn React', complete: false });
```

Run `db.todos.find()`. What do you notice about the `id`?

Let's remove our manually generated IDs everywhere now, and just use the ID Mongo generates for each to-do document.

---

# Cleaning Up

Once this is done, stop your Meteor server and run:

```bash
meteor reset # blows up your database!
```

Then add your to-do again in the `meteor mongo` shell:

```bash
meteor mongo
db.todos.insert({ title: 'Learn React', complete: false });
```

Run `db.todos.find()` to confirm everything is OK.

---

# Meteor/React Set-up

In order to use our `ToDos` collection data inside of a React component and take advantage of Meteor's reactivity, we need to install a couple new packages:

```bash
# magical reactive pixie dust for our components
meteor add react-meteor-data

# dep of react-meteor-data
meteor npm install --save react-addons-pure-render-mixin 
```
 
---

# Using Collection Data

Next, we need to import our `ToDos` collection into our `App` component, and wrap `App` in the `createContainer` HOC:

```js
import { ToDos } from '../../../api/todos';

// ...other code

export default createContainer(() => {
  return {
    todos: ToDos.find({}).fetch()
  };
}, App);
```

Notice **[the method](https://docs.meteor.com/api/collections.html#Mongo-Cursor-fetch)** we are calling on our cursor.

---

# CRUD, etc. in Meteor

We don't have all of the same CRUD methods and cursor methods available in Meteor's implementation of Mongo. Let's compare and contrast:

- [MongoDB CRUD Operations](https://docs.mongodb.com/manual/crud/)
- [Meteor Guide - Collections](https://docs.meteor.com/api/collections.html)

---

# Exercise 2

Anywhere you are working with `todos` in your state object, change that to work with the `todos` in your `App` component `props`.

Be sure to remove any remaining references to `id` in your `App` code (as we will use the document `_id` now instead).

Don't forget to add some prop type validation as we are now passing collection data into our component as a prop.

You may also want to set `defaultProps` for `todos` as an empty array so your app doesn't break when there's no todos in the database.

---

# A Default To-Do

Meteor can create a default to-do on start-up if none exist.

Create `imports/server/fixtures.js` and import it into `imports/server/index.js`. Add this code to `fixtures.js`:

```js
import { Meteor } from 'meteor/meteor';
import { ToDos } from '../../api/todos';

Meteor.startup(() => {
  if ( ToDos.find().count() === 0 ) {
    ToDos.insert({
      title: 'Learn React', 
      complete: false,
    });
  }
});
```

Kill your server, run `meteor reset` and see what happens.

---

# CRUD Time!

We need to convert our `addToDo`, `toggleComplete`, `removeToDo`, and `removeCompleted` methods to write data to MongoDB instead of simply updating the state of `App`.

What Meteor collection CRUD methods will we need to call to take the appropriate write action in each of our existing methods?

---

# Inserting To-dos

Our `insert` method will look like this:

```js
ToDos.insert({		
  title: this.state.inputValue,		
  complete: false
});
```

Where do we put this code? What are we replacing?

---

# Exercise 3

Now refactor the `toggleComplete()`, `removeToDo()`, and `removeCompleted()` methods to contain the `update()` and `remove()` methods, however appropriate.

The `removeCompleted()` method will be the trickiest...how will you check to see which to-dos are marked as complete now, and then remove those to-dos from the database based on their `_id`?

---
template: inverse

# User Accounts in Meteor

---

# For Free!

Meteor offers packages to that give you a lot of account-related functionality in your app for free, including:

- secure password authentication
- integration with third party login services
- a pre-built user interface.

So most of the hard work of implementing user accounts will already be done for us!

---

# Add Accounts

To add user accounts to our app simply add these packages:

```bash
meteor add accounts-ui-unstyled accounts-password
```

**Note:** DDP provides us the `userId` field on a connection, which means that you always have access to `this.userId` inside methods and publications (even on the client). This will be helpful for us to know tomorrow.

---

# Adding UI

In `ui/components/AccountsWrapper/index.js` add:

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
 
export default class AccountsUIWrapper extends Component {
  componentDidMount() {
    // Use Meteor Blaze to render login buttons
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  }
  componentWillUnmount() {
    Blaze.remove(this.view); // Clean up Blaze view
  }
  render() {
    return <span ref="container" />; // Render a placeholder
  }
}
```

---

# Exercise 4

Import the `<AccountsUIWrapper />` component into `App.js`. 

Add this component to the top of your `App` `render` method. Wrap it in a `<div>` with a class of `login-wrapper`. 

Now wrap your existing to-do list `<div>` and your new accounts component in a new parent `<div>` will a class of `app-wrapper` (we'll need this for the CSS...).

Now **[add this CSS](https://gist.github.com/mandiwise/29e4be3fbb737b883042ce7c92a87176)** to your `<AccountsUIWrapper />` component.

---

# User To-Dos

To access information about our current user, we'll need to pass some new props from our HOC to `App`:

```js
export default createContainer(() => {
  return {
    currentUser: Meteor.user(), // NEW!
    currentUserId: Meteor.userId(), // NEW!
    todos: ToDos.find({}).fetch() 
  };
}, App);
```

Update your `propTypes` too!

---

# Exercise 5

Let's wrap all of the components in our to-do list that should only be visible to logged in users (i.e. the input, to-do list, the to-do count, and clear button) in a `<div>`. Leave the `<h1>` visible.

When a user is not logged in, alternatively display the following:

```html
<div className="logged-out-message">
  <p>Please sign in to see your todos.</p>
</div>
```

---

# Assigning to Users

From now on when we add a new to-do, we'll want to assign it to a user:

```js
ToDos.insert({
  title: this.state.inputValue,
  complete: false,
  owner: currentUserId, // NEW!
});
```

Now how can we use our new `currentUserId` prop to filter the to-dos so that the ones that display are only relevant to the logged in user?

---

# Add a Default User

```js
// In fixtures.js...other imports above here
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  let user = {};

  if ( Meteor.users.find().count() === 0 ) {
    user = Accounts.createUser({
      email : 'm@wise.com',
      password : 'password',
    });
  }

  if ( ToDos.find().count() === 0 ) {
    ToDos.insert({
      title: 'Learn React', 
      complete: false,
      owner: user,
    });
  }
});
```

---

# Wrapping Up...

Do another `meteor reset` and re-start Meteor to confirm that your new start-up code works.

Try logging, add new to-dos, log out, and create new user. Is everything working as expected?

---
template: inverse

# Bonus Round: Schema Design in MongoDB

---

# Relational Normalization 

Goals of relational normalization include:

1. freeing the database of modification anomalies (of course)
2. minimizing redesign when extending (ideally)
3. avoiding any bias toward a particular access pattern (but does this not mean we'll be equally bad at all of them?)

In MongoDB, we will of course be careful to not create anomalies where our data can be inconsistently changed.

The second goal is admirable, but the third is completely contrary to the intention of MongoDB...

---

# NoSQL Schema Design

MongoDB favours an **application-driven schema**.

Compare this to relational schema design where you try to structure the data in a way that's agnostic to the application.

So with a MongoDB you think about what pieces of data are **used together**, what pieces of data **are read-only**, what pieces of data need to be **written all the time** (and match the data access patterns of your application!)

---

# In MongoDB...

- There are **no joins** (think of embedded data as "pre-joins")
- There are **no foreign key constraints**
- **Operations are atomic** at the level of the single document (so fields that should be updated together should be contained within a single document)
- Atomic operations also mean that when you work on a document that **work will be completed before anyone sees the updated document** (they see all the changes or none)
- There's **no declared schema** (**[but...](https://github.com/aldeed/meteor-simple-schema)**)

---

# Embedded Documents

- Potential to improve read performance if we design around access patterns
- We must have a plan for keeping our data consistent even though MongoDB lacks foreign key constraints
- **Third Normal Form:** Says that every non-key attribute in the table must provide a fact about the key, the whole key, and nothing but the key (not as worried about this in MongoDB)
- Must consider if data have a **1:1**, **1:Many**, or **Many:Many** (or **1:Few** or **Few:Few**) relationship

---

# What We've Learned

- What MongoDB is and how it differs from SQL databases
- How to add a collection to a meteor app and add documents to it
- How to easily add user accounts to a Meteor app

---
template: inverse

# Questions?

{% endhighlight %}
