---
layout: slidedeck
title: JavaScript Objects Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

template: inverse

# JavaScript Objects

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

???

**Important note to instructors:** Be sure to kick off the lesson with a discussion about where the students think they have seen objects in action before (as noted in the pre-work). Making a list of their ideas on the wall or a flip chart would be a good idea.

---

layout: false

# Agenda

1. Creating objects and accessing their properties
2. Object methods
3. Prototypes and constructors

---

template: inverse

# Objects and Properties

---

# What Are Objects?

**Objects** are like containers that hold groups of related variables and functions (i.e. related values) to create an organized **model** of something in your code.

```js
const emptyObject = {};
```

---

# What Are Objects?

You can think of an Object as a noun e.g. **Person, Place or Thing**.

Here's an example of a school represented as an Object.

```js
const school = {
  name: 'RED Academy',
  street: '1490 W Broadway #200',
  city: 'Vancouver',
  province: 'BC',
  zip: 'V6H 4E8'
}
```


---

# What Are Objects?

JavaScript Objects can be nested inside of an **array**. <br>
Since an array is essentially a collection, the following example would be a collection of Objects each representing a single product:

```js
const products = [
  {
    name: 'Stretch Knit Dress',
    category: 'dresses',
    price: 169
  },
  {
    name: 'Cotton Blue Shirt',
    category: 'shirts',
    price: 89
  },
]; // how would you count how many products are in this array?
```

???

Here you may pose the question: Why are they called key-value pairs?

It's also worth pointing out `new Date()` here, esp. the `new` keyword (more to come to come on that...).

---

# How Objects Help

- Like functions, objects help us **better organize our code** and make it more reusable
- When we define a variable in an object, we call it a **property**
- When we create a function in an object, we call it a **method**

---

# Objects

Here is a more complex example of an Object. Notice how you can also nest objects within objects!

```js
const zoo = {
  name: 'Animal Apartments',
  zookeeper: {
    name: 'G. Silverback',
    email: 'gorillas@mist.com',
  },
  animals: [
    { name: 'panda', type: 'mammal', apt: 201, favFood: 'bamboo' },
    { name: 'parrot', type: 'bird', apt: 202, favFood: 'pistachios' },
    { name: 'porcupine', type: 'mammal', apt: 203, favFood: 'nachos' },
    { name: 'porpoise', type: 'mammal', apt: 204, favFood: 'noodles' },
  ],
};

console.log(zoo.animals[3].name); // what does this log to the console?
```

---

# Property Accessors

Values stored inside objects are called **properties**. You can **read and write** object properties using **dot notation** or **bracket notation**.

```js
const human = {
  firstName: 'Richard',
  lastName: 'Stallman',
  height: 1.75,
  beard: true,
};

// DOT NOTATION
const hasBeard = human.beard; // will equal true

// BRACKET NOTATION
const hasBeard = human['beard']; // will equal true
```

---

# Property Accessors

Copy & paste this into your browser console (and press enter):

```js
const human = {
  fingerCount: 5,
  toeCount: 5,
};

const numFingers = human.fingerCount;
const numToes = human['toeCount'];

human.bellybutton = true;
human['opposable thumbs'] = true;

console.log(human);
```

_Did the output match what you were expecting?_

---

# Exercise 1

Using [JSBin](https://jsbin.com/?html,css,js,output) or [CodePen](https://codepen.io), create an object to describe yourself. Be sure to include the following information:

- First name, last name, A URL to a profile image (you can use a placeholder image from: https://picsum.photos/).
- Include as a property a list, Array, of information e.g. your favorite foods or movies.

When you're done, use JavaScript to display everything in HTML and add some CSS.

For inspiration, think of a typical social network user page.

---

template: inverse

# Object Methods

---

class: center, middle

### More to Objects...

Objects allow you to do more than read and write properties.

Objects can also _do_ things by adding **methods** to them.

---

# Objects, in Relation to Regular Language

We already know that objects can have properties (variables) and methods (functions). Thinking about objects in relation to the real world, we can say that:

- An object is the **noun**
- A property is an **adjective**
- A method is a **verb**

---

# Methods (Functions as Object Properties)

For object methods, we write `getName: function() {...}` instead of `function getName() {...}`:

```js
const person = {
  firstName: 'Richard',
  lastName: 'Stallman',
  height: 1.75,
  beard: true,
  getName: function() {
    return this.firstName + ' ' + this.lastName;
  },
};
```

---

# Using Object Methods

We use dot notation to access object methods:

```js
const person = {
  firstName: 'Richard',
  lastName: 'Stallman',
  // ...
  getName: function() {
    return this.firstName + ' ' + this.lastName;
  },
};

const fullName = person.getName(); // will return "Richard Stallman"
```

---

# What Is `this`?

In JS, `this` is a special word and it always refers to one object (which object it refers to will depend on the context).

Inside of an object's method, it refers to the object itself:

```js
const person = {
  firstName: 'Richard',
  lastName: 'Stallman',
  // ...
  getName: function() {
    // use "this" to get properties of the object inside of a method

    return this.firstName + ' ' + this.lastName;
  },
};
```

**What is the value of `this` in a non-method function?**

???

Have students type `this` into the console...this is a great opportunity to talk about the `window` object briefly.

---

class: center, middle

### Data-Driven UI

As a front-end developer, you'll write a lot of JavaScript that works with **arrays** of **objects**.

Arrays of objects are common because _many software user-interfaces present dynamic lists of information to their users e.g. the products example we saw earlier_.

???

- Have student brainstorm when they have likely encountered "arrays of objects" under the hood in web applications that they use today

---

# Advanced Example

To reiterate functions inside of objects are called **methods**. <br>
Here we have a few methods e.g. **borrow**, **returnItem**, & **close**

```js
const library = {
  open: true,
  inventory: [
    { title: '1984', author: 'Orwell', id: 1 },
    { title: 'Dune', author: 'Herbert', id: 2 },
    { title: '1Q84', author: 'Murakami', id: 3 },
  ],
  lent: [],
  borrow: function(id) {},
  returnItem: function(id) {},
  close: function() {},
};
```

---

# Advanced Example

Using `this`, we can write a borrow method to help keep track of what books have been lent:

```js
// ...
borrow: function (id) {
    if (this.lent.indexOf(id) === -1) {
        console.log('Borrowed!');
        this.lent.push(id);
    } else {
        console.log('This book has been lent...');
    }
},
// ...
```

**How will the borrow method change the `lent` property?**

???

- Explain `.indexOf(id) === -1)` (why `-1`?)
- Have students verbally explain what's happening in this code line-by-line

---

# Exercise 2

See the [lesson page](/lesson/01-javascript-objects/) for further instructions.

---

template: inverse

# Prototypes and Constructors

---

class: center, middle

.large[
Sometimes creating objects isn't enough...
]

---

class: center, middle

.large[
We often need a smarter way to create multiple versions of the same *kind* of object...
]

---

# An Example

This doesn't feel very **DRY**...

```js
const person1 = {
  firstName: 'Richard',
  lastName: 'Stallman',
};

const person2 = {
  firstName: 'Ada',
  lastName: 'Lovelace',
};

const person3 = {
  firstName: 'Grace',
  lastName: 'Hopper',
};
```

Thankfully, we can do better!

---

class: center, middle

### JavaScript Weirdness Alert!

Functions are actually a special type of object in JavaScript (wat!?!). They are special because the can be **called**.

Because functions are objects the can have properties—one very special assigned to every function is called `prototype`.

???

**Further clarification:** In JavaScript, functions are **first-class objects**, because they can have properties and methods just like any other object.

---

# Prototypes

In JavaScript, a prototype can refer to two things:

`prototype`

_The special property assigned to your functions_

`[[Prototype]]` aka `__proto__`

_This is a reference to the `prototype` of the function that the object was based on_

**Let's look at an example...**

---

# An Example

Enter the following into your browser console:

```js
const myArr = ['item 1'];
myArr.__proto__;
```

**What do you see?**

Now run this:

```js
Array.prototype.getFirst = function() {
  return this[0];
};
myArr.getFirst();
```

**Did it work as expected?**

???

**Things to explain:**

- `constructor: ƒ Array()`: We can see that `myArr` was based on the `Array()` function (more on constructors in a minute)
- We can create a new array calling `const myArr2 = new Array();` too
- And yes, arrays are also a kind of object...

**Why is this useful?**

- We also see all of the array methods that we were using yesterday
- Because the `Array` prototype object includes these methods, any new array we create based on it can get access to those methods
- So this means that you don't have to create your own `forEach` method and add it to _your specific array_ every time you create own—the array you created can "look up the prototype chain" to see if an object it was based on has that method
- In this sense you can think of the `Array` prototype acting as a **delegate** on behalf of your array

**Lastly:**

- You can add methods to a prototype
- Then all objects based on that prototype will have access to these methods too
- _Generally not advisable to do this for built-in prototypes though_ (breaks defaults!)

---

class: center, middle

.large[
But what if you want to create your own function to create special kinds of objects?
]

(Spoiler alert! You can...)

---

# Constructor Functions

You can create your own `constructor` function to make special objects:

```js
function Library(inventory) {
  this.open = true;
  this.inventory = inventory;
  this.lent = [];
}

Library.prototype.borrow = function (id) {
    if (this.lent.indexOf(id) === -1) {
        console.log('Borrowed!');
        this.lent.push(id);
    } else {
        console.log('This book has been lent...');
    }
};
// Library.prototype.returnItems..etc.
```

???

Pause and walk through some interesting points...

- The use of a function instead of an object to set properties and values
- Use of a capital letter for `Library`
- Using `this` inside a function
- We add the `borrow` method to the `Library` prototype (instead of directly inside the constructor) so that it will only exist in `Library`, rather than each instance of an object created from it

---

# Construct New Objects

Describing objects using constructor functions allows you to create multiple **instances** of your object using `new`.

To create a new library object, we write `new Library()`:

```js
const myLibrary = new Library([
  { title: '1984', author: 'Orwell', id: 1 },
  { title: 'Dune', author: 'Herbert', id: 2 },
  { title: '1Q84', author: 'Murakami', id: 3 },
]);
```

---

# Under the Hood

With our new `Library` constructor, we can now see an example of the other meaning of &ldquo;prototype&rdquo; in JS.

Run the code from the previous two slides in the console, then run the following:

```js
Library.prototype;
```

Now run this:

```js
myLibrary.__proto__;
```

**What do you see now?**

???

- Rather than seeing the `myLibrary` object is based on the `Object` prototype (even though it's an object!) we can see that it was created with our `Library` constructor instead
- As a result it has access to the `Library` prototype methods, as well as any of the usual `Object` methods (because this is the prototype that `Library` is based on)
- This is what it means to go up the prototype chain...

---

# Advanced Example

We can tidy our code up even further with the use of additional constructors, and find multiple uses for our `Library` object:

```js
const cookBookLibrary = new Library([
  new CookBook('La Technique', 'Pepin'),
  new CookBook("Cookin' it lovin' it", 'Fieri'),
  new CookBook('The Pollan Family Table', 'Pollan'),
]);

const carShare = new Library([
  new CarShareVehicle('Hyundai', 'Accent'),
  new CarShareVehicle('Geely Auto', 'Geely'),
  new CarShareVehicle('Daihatsu', 'Tanto'),
]);

// ... use your new object instance!
carShare.borrow(2);
```

.footnote[☝️ It's good style to define constructors using capital letters.]

---

# Objects as State

Sometimes you'll need to keep track of what your code is doing, objects are really useful for this. Tracking what your program is doing is another common use of objects.

```js
function Transformer(name) {
  this.name = name;
  this.transformed = false;

  this.transform = function() {
    if (!this.transformed) {
      this.transformed = true;
    } else {
      this.transformed = false;
    }
  };
}
```

---

# Objects as State

And here is an example of the Object `transform` property at work. Be sure to console log the Object before and after the transform function to see how it changes.

```js
const bumbleBee = new Transformer('Bumblebee');
console.log(bumbleBee); // inspect the new Object

bumbleBee.transform(); // test the transform method
console.log(bumbleBee); // notice how the state has changed?
```

---

# Sneak Peak: Classes

Instead of using a `function`, define a `class` (same result, better syntax) for objects we want to **instantiate**:

```js
class Transformer {
  constructor(name) {
    this.name = name;
    this.transformed = false;
  }
  transform() {
    if (!this.transformed) {
      this.transformed = true;
    } else {
      this.transformed = false;
    }
  }
}
const bumbleBee = new Transformer('Bumblebee');
bumbleBee.transform();
```

Ahh, much nicer. _More on classes later!_

---

# Exercise 3

Refactor your previous `library` object to be created from the `Library` prototype instead.

This means you'll need to re-write the `returnItem` and `close` methods to belong to the `Library` prototype as well now too.

Once you re-write the methods, instantiate a new library with an inventory.

---

# What We've Learned

- How to create objects and read and write their properties
- How to create object methods
- What prototypes are
- How to create constructor functions

---

template: inverse

# Questions?

{% endhighlight %}
