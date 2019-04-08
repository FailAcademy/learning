---
layout: slidedeck
title: GraphQL APIs II Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# GraphQL APIs

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1.  Define mutations and run them in a client
2.  Bonus round: clean-up
3.  Set-up Boomtown

---

template: inverse

# Mutating Data

---

# Defining Mutations

Any mutations we want to permit on our data must be added to the schema as the `Mutation` root query type:

```js
// back in ./api/schema.js...

const typeDefs = gql`
  # Other types defined above...

  type Mutation {
    addPerson(
      name: String!
      birthday: String
      placeOfBirth: String
      bio: String
      filmography: [ID]
    ): Person
  }
`;
```

---

# Mutation Resolver

We must also another key to our `resolvers` object called `Mutation`, and define what the mutation should do:

```js
Mutation: {
  addPerson(root, args) {
    const newPerson = {
      id: data.people.length + 1,
      name: args.name,
      birthday: args.birthday,
      placeOfBirth: args.placeOfBirth,
      bio: args.bio,
      filmography: args.filmography
    }

    data.people.push(newPerson);
    return newPerson;
  }
}
```

---

# Using Mutations

Mutation queries always start with the `mutation` keyword:

```js
mutation createPerson(
  $name: String!
  $placeOfBirth: String
) {
  addPerson(
    name: $name
    placeOfBirth: $placeOfBirth
  ) {
    name
    placeOfBirth
  }
}
```

We can also **specify a payload** for the mutation (like getting the response back from a POST request).

???

- Show students how to add query variables for mutations in the GraphQL playground

---

# Exercise 2

User your new `addPerson` mutation in the GraphQL explorer to add at least one new person to your movie database.

---

template: inverse

# Cleaning Up

---

# Best Practice: Inputs

Use **[input types](https://graphql.org/learn/schema/#input-types)** to pass complex objects to your mutations. Add this new input to your schema and modify your mutation to use it. What have we changed here exactly?

```js
const typeDefs = gql`
  # Other types defined above...

  input PersonInput {
    name: String!
    birthday: String
    placeOfBirth: String
    bio: String
    filmography: [ID]
  }

  type Mutation {
    addPerson(person: PersonInput!): Person
  }
`;
```

???

- Be sure that students understand that input types are helpful for mutations where you might want to pass a whole object as an argument.

---

# Best Practice: Inputs

You'll use your modified mutation and new input like this:

```js
mutation createPerson(
  $person: PersonInput!
) {
  addPerson(
    person: $person
  ) {
    name
    placeOfBirth
  }
}
```

There will be problem with the query variables and resolver we created for our mutation now. What do we need to fix these issues?

???

- The query var is now an object `person` with `name`, etc. nested inside as properties.
- Adjust the resolver to pull the values out of the `person` object to fix this.

---

# Best Practice: Helpers

As a best practice, it would be better to remove our data fetching code directly from our resolver code blocks, and instead abstract this away into helper functions.

Create a `api/helpers.js`:

```js
const data = require('./data');

const helpers = {
  // An example to get you started...
  getMovies() {
    return data.movies;
  },

  // All of your other helpers will go here...
};
module.exports = helpers;
```

---

# Exercise 3

Refactor your data-fetching logic into `api/helpers.js`

As you do this, check to see if all of your resolvers actually need their own unique helper function now&mdash;can you re-use any of the helpers for multiple resolvers?

Require your new data helpers in `resolvers.js`, replace your existing code in each resolver with a helper function, and test your app to make sure everything still works as it did before.

---

# Bonus Topics

Some more advanced topics in GraphQL worth researching:

- [Subscriptions](http://dev.apollodata.com/tools/graphql-subscriptions/subscriptions-to-schema.html)
- [Fragments](http://graphql.org/learn/queries/#fragments)
- [Enums](http://graphql.org/learn/schema/#enumeration-types)
- [Unions](http://graphql.org/learn/schema/#enumeration-types)
- [Interfaces](http://graphql.org/learn/schema/#interfaces)

???

**Subscriptions:**

- when a client subscribes to an event, it Create and holds a steady connection to the server to be informed about events
- the server will push the corresponding data to the client when an event fires
- queries and mutations follow a typical request response cycle
- subscriptions are sustained

**Fragments:**

- ways to reuse chunks of queries

**Enums:**

- enums to express the sematics of a type that has a fixed set of values

**Interfaces:**

- an interface can be used to describe a type in an abstract way

**Unions:**

- a union type is a type that should be either of a collection of types (with conditional fragments)

---

template: inverse

# Boomtown Set-up

---

# Get Starter Files

You can see the starter files for Boomtown here:

**[https://github.com/redacademy/boomtown-starter](https://github.com/redacademy/boomtown-starter)**

Download them [from here](https://github.com/redacademy/boomtown-starter/archive/master.zip) (don't clone the repo!). You will create your own new repo that contains these starter files. Now would be a good time to do that.

We'll only work in the `server` directory this week, so `cd` in there and install the dependencies:

```bash
cd server && npm install
```

???

- Give students a quick tour of the `server` directory, and explain what's what.

---

# Set Config Vars

Start in `server/config/application.js`. Set these config variables, as instructed by the `@TODO`:

- `PORT`
- `PG_HOST`
- `PG_USER`
- `PG_PASSWORD`
- `PG_DB`

---

# Hook-up Postgres

Now move to `server/config/postgres.js`. Set the `host`, `user`, `password`, and `database` keys in the object passed into the instantiated `Pool` using the config variables you set.

Use `app.get()` to retrieve these variables (as instructed in the `@TODO`).

Set `idleTimeoutMillis` and `connectionTimeoutMillis` keys in this object to `30000` and `2000` respectively as well.

_Congrats! Your app is connected to your database and you should be able to start your server now!_

???

- At this point, students should attempt starting their app with `npm run start:dev`

---

# Hook-up Apollo

Now switch to `server/config/apollo.js`.

Pass your `typeDefs` and `resolvers` into `makeExecutableSchema`. Pass `pgResource` into your Apollo context.

At this point, you can uncomment the lines line `main.js` to start Apollo if you like, but we still have some work to do before our GraphQL server will give us the data we want.

_Please see the Lab Activity for this lesson for instructions to define your schema..._

???

- Make connection to `pgResource` and `helpers` from earlier, if this hasn't been explained yet.

---

# What We've Learned

- How to define mutations
- How to use fragments
- How to implement GraphQL Subscriptions

---

template: inverse

# Questions?

{% endhighlight %}
