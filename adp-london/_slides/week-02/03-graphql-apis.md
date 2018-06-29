---
layout: slidedeck
title: GraphQL APIs Slides
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

1.  REST pain points
2.  Graph theory basics
3.  GraphQL basics
4.  Set-up a GraphQL server
5.  Define queries and run them in a client
6.  Define mutations and run them in a client
7.  Bonus round: clean-up

---

template: inverse

# REST Pain Points

---

class: center, middle

.large[
Over-fetching data
]

???

- More data is sent over the wire than what you typically need with REST
- Let's say we want to hit the GitHub API to fetch all of the names of our repos and list them on the RED Academy website...this is the response we get back from hitting that endpoint: https://api.github.com/orgs/redacademy/repos?client_id=a37c6077034750f953fc&client_secret=8ff75658b21aa8c5830b7efeae85f559b4d36a02

---

class: center, middle

.large[
Under-fetching data
]

???

- **n+1 problem:** when a request to load one item turns into n+1 requests since the item has "n" associated items
- how many requests are need to populate all of the information into this user profile: https://boom.academy.red/profile/LAi9TYWxgGhbjgHu1Sm6ZvB1tRP2

---

class: center, middle

.large[
The server decides the shape of the data, but the client decides the structure of the UI
]

???

- i.e. how data needs to be displayed
- relates to under-fetching and over-fetching, but also illustrates how REST makes it difficult for us to rapidly iterate the UI of an app
- Designing a REST API endpoint around views makes it harder it iterate on a product

---

class: center, middle

.large[
API versioning
]

???

- We didn't talk about API versioning yesterday (and how this gets incorporated into the path of an URL)
- What happens when you get feedback that the `createdOn` time for Boomtown should no longer be a Unix timestamp, but a human-readable time instead...how could you change this in the response without breaking things for other clients using this API?
- You have two choices...break things for clients who don't update, or version your API

---

class: center, middle

.large[
REST APIs are (usually) tied to a single data source
]

???

- What happens when we want to get data from multiple services, etc.?

---

class: center, middle

.large[
This is why Facebook <br />invented GraphQL!
]

???

- REST APIs can be problematic when it comes to keeping up with all the ways clients want to access data from them (inflexible)
- GraphQL gives us more flexibility and efficiency when it comes to query data from the client and getting it back in exactly the shape that we want it

---

template: inverse

# But First, <br />Some Graph Theory

---

# Graph Theory 101

- Graphs help us represent networks (i.e. collections of interconnected things)
- Graphs have **nodes** and **edges**
- In math, a graph can be expressed as `G = (V, E)` where `V`is a set of nodes (vertices), and `E` is the set of edges between them (links)

---

class: center, middle

![Trees and graphs](/public/img/slide-assets/graphs-trees.jpg)

.footnote.right[
Source: [The Practical Dev](https://dev.to/vaidehijoshi/a-gentle-introduction-to-graph-theory)
]

???

- All trees are graphs, but not all graphs are trees
- A graph can have one node (a singleton graph)

---

class: center, middle

![Nodes and edges](/public/img/slide-assets/graph-nodes-edges.jpg)

.footnote.right[
Source: [The Practical Dev](https://dev.to/vaidehijoshi/a-gentle-introduction-to-graph-theory)
]

???

- Edges are the links between nodes

---

class: center, middle

![Directed verus undirected](/public/img/slide-assets/graph-directed-undirected.jpg)

.footnote.right[
Source: [The Practical Dev](https://dev.to/vaidehijoshi/a-gentle-introduction-to-graph-theory)
]

???

- An edge can be directed (one-way; origin and destination are fixed)
- Or undirected (bidirectional; origin and destination nodes are not fixed)
- directed graphs are also called digraphs

---

class: center, middle

.large[
Is Facebook a directed or undirected graph?
]

???

- Undirected, because friendships are mutual

---

class: center, middle

.large[
How about Twitter?
]

???

- Undirected, because I can follow you but you don't have to follow me

---

class: center, middle

.large[
And the web?
]

???

- Undirected
- Webpages are nodes, directed edge is the link, the relationship of links is not mutual
- Web crawling is just graph traversal (i.e. visiting all nodes in a graph)

---

template: inverse

# Whats and Hows of GraphQL

---

# What Is GraphQL?

- It's a [specification](http://facebook.github.io/graphql/)
- It's a query language for APIs
- It's transport layer-agnostic
- It's an application layer (i.e. an abstraction)
- It's introspective
- It's hierarchical
- It's driven by the requirements of the view

???

- The specification is just a document describing how a GraphQL server should behave
- The spec determines the validity of the schema on the API server and the schema determines the validity of client calls
- Because it's just a spec, if you want to use it, you need to build your own GQL server or use a service like Graphcool (this is where Express will come in for us)
- "Introspective" means that client can query the schema for details about the schema
- Re: hierarchy, the shape of a GraphQL call mirrors the shape of the JSON data it returns, and nested fields let you query for and receive only the data you specify in a single round trip.

---

class: center, middle

.large[
**[Try it out!](https://developer.github.com/v4/)**
]

???

_Go to the Live Explorer..._

**Premise:**

Remember that mess of JSON we got back when we hit the GH REST endpoint?

With GraphQL we can just get back what we need:

```
query {
    organization(login:"redacademy") {
    repositories(first: 100) {
      edges {
        node {
          name
        }
      }
    }
  }
}
```

- Be sure to take a look in the dev tools in the Network tab. What kind of request is being sent? Where does it go? What's in the body?
- You just send a single POST request to the server with a query and it responds with all the data you need, packaged up a JSON object returned to the client
- Also be sure to take a look at the documentation explore in GraphiQL. Introspection!
- The root field is always called `data`

---

class: center, middle

.large[
Remember:<br />
It's not a database.
]

???

- GraphQL is not a storage model or a database query language
- This is something completely different from graph-based databases
- The graph refers to graph structures defined in the schema, where nodes define objects and edges define relationships between objects
- The API traverses and returns application data based on the schema definitions, **independent of how the data is stored**

---

# How Else Is It Different?

- **The identity of an object is separate from how you fetch it**
- It only defines a single endpoint on the server
- The client defines the shape and size of a resource
- All the data you need for your view is **retrieved in one round-trip to the server**
- It doesn't use HTTP verbs to indicate writes in requests (it changes a word in the query instead)
- It's easier evolve your API without versioning, and not adjust your API when product requirements change slightly

???

- GraphQL typically tunnels everything through a `POST` request (GraphiQL may use `GET` requests and query string through)

---

template: inverse

# A Basic GraphQL Server

---

# Fake IMDB Set-up

We'll need to set-up a basic Apollo server and create an endpoint for our web client to send queries to. Create a new directory for your server, `npm init`, and then:

```bash
npm i -S apollo-server@rc graphql
```

Let's also use Babel with our app again:

```bash
npm i -D nodemon
```

And add a start script to `package.json`:

```bash
"scripts": {
  "start": "nodemon index.js"
}
```

???

- `apollo-server`: The Apollo server library which allows you to focus on defining the shape of your data and how to fetch it.
- `graphql`: The library used to build a schema and to execute queries on that schema.

---

# Fake IMDB Set-up

Now create an `main.js` file and instantiate your new GraphQL server:

```js
const { ApolloServer } = require("apollo-server");

// We'll need to create these next...
const { typeDefs } = require("./api/schema");

// And then these
const { resolvers } = require("./api/resolvers");

// Instantiate the server
const server = new ApolloServer({ typeDefs, resolvers });

// Start it up!
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
```

---

# Fake IMDB Set-up

Create an `api/data.js` file and **[add the data in this Gist](https://gist.github.com/mandiwise/25dbcfd558748f6afded7dcebe23f9a3)**.

---

template: inverse

# Querying Data

---

# Where Does the Schema Come From?

Before we define our schema we'll need to cover some core GraphQL concepts:

- **Schema** (and root types)
- Queries
- Mutations

???

- The schema is one of the most important concepts in GraphQL
- The schema is where we will define what queries, mutations, and subscriptions are available in the API, and what the **root types** of the schema are
- These are the **main entry points for the API**
- Mutations allow us to create, update, and delete data
- We won't be creating subscriptions in Boomtown

---

# Schema

- With GraphQL, the schema serves as the **contract defined between the client and the server**
- We use a **Schema Definition** to write our schemas in GraphQL, which allows us to express our API's type system and the relationships between the types with relations
- Schema Definitions **types** and **fields**

---

# Built-in Types

GraphQL has five built-in scalar types:

- `Int`
- `Float`
- `String`
- `Boolean`
- `ID`

---

# Types and Fields

We use a special syntax to define types/fields in GraphQL:

```js
type Person {
  id: ID!
  name: String!
  birthday: String
  placeOfBirth: String
  bio: String
}
```

The `!` type modifier indicates a **non-nullable** field.

---

# Types and Fields

A field can use any other type defined in the Schema Definition. Notice the use of the `[]` type modifier for lists now:

```js
type Person {
  id: ID!
  name: String!
  birthday: String
  placeOfBirth: String
  bio: String
  filmography: [Movie]
}

type Movie {
  id: ID!
  title: String!
  releaseDate: String
  stars: [Person]
  director: Person
}
```

---

# Root Query Type

Finally, we'll need to define what queries our schema allows. This will be an entry point into the type system.

The name of this type is `Query` by convention, and it describes our **public, top-level API**.

```js
type Query {
  people: [Person]
  person(id: ID!): Person
  movies: [Movie]
  movie(id: ID!): Movie
}
```

---

# Add Your Schema

Create a `api/schema.js` file in your app:

```js
const { gql } = require("apollo-server");

const typeDefs = gql`
  # Add the Person type here...

  # Add the Movie type here...

  # Add the root Query type here...
`;

module.exports = { typeDefs };
```

---

# Resolvers

**Schemas are the what, resolvers are the how in GraphQL.**

The role of a resolver function is to fetch the data for its corresponding field.

Resolvers can't be included directly in the schema language, so they need to be added separately.

You define a resolver as a nested object that maps type and field names to resolver functions.

Resolvers can return Promises too (woot!).

???

- Every field can have a resolve function, which tells the GraphQL server how to return data for that field, if it appears in a query
- At the minimum, we need to define a resolve function for each field that either returns a non-scalar type or takes any arguments

---

# Resolver Set-up

Create a `api/resolvers.js` file in your app:

```js
const { data } = require("./data");

const resolvers = {
  // Resolvers go here...
};

module.exports = { resolvers };
```

---

# Example Resolvers

If we were getting our data from a static source as we are, our resolvers may look like this:

```js
const resolvers = {
  Query: {
    movies() {
      return data.movies;
    },
    movie(root, { id }) {
      return data.movies.find(movie => movie.id === parseInt(id));
    }
  }
  // ...other resolvers
};
```

???

- We should define a resolver for each of our types so GraphQL knows where to get the data from
- The first argument is the object that contains the result returned from the resolver on the parent field, or, in the case of a top-level Query field, the rootValue passed from the server configuration (this argument enables the nested nature of GraphQL queries)
- An object with the arguments passed into the field in the query

---

# Or Fetch the Data

But if we were fetching data from some (pretend) existing movie API, our resolvers would look like this:

```js
const resolvers = {
  Query: {
    movies() {
      return fetch(`http://somemovieapi.com/movies/`)
        .then(response => response.json())
        .catch(errors => console.log(errors));
    },
    movie(root, { id }) {
      return fetch(`http://somemovieapi.com/movies/${id}`)
        .then(response => response.json())
        .catch(errors => console.log(errors));
    }
  }
  // ...other resolvers
};
```

???

- Cool! GraphQL pushes the complexity of fetching data to the server (where ideally more powerful machines are taking care of this computing work)

---

class: center, middle

.large[
Problem: Where do the actors and directors come from in relation to our movie type?
]

---

# Resolve Director & Stars

We have to tell GraphQL where to find the director and stars with another resolver function for that specific field:

```js
Movie: {
  director(movie) {
    if (!movie.director) return null;
    return data.people.find(person => person.id === movie.director);
  }

  stars(movie) {
    return data.people.filter(person => (
      person.filmography.find(credit => (
        credit === movie.id && person.id !== movie.director
      ))
    ));
  },
},
```

---

# Exercise 1

Write the resolvers for the `people` and `person` queries.

Be sure to resolve a person's `filmography` field as well.

Once you've done this, see if your GraphQL server will start by running `npm start`. Visit `localhost:4000/graphql` to open the GraphQL Playground.

Do you see your schema there. Are you able to query your movie API for data?

---

# Query Variables

As per our schema, we can query for individual movies by ID:

```js
query {
  movie(id: 1) {
    title
  }
}
```

_Try this out in the GraphQL Explorer now._

---

# Query Variables

We often need to dynamically pass data in as the query argument. To do that, give your query a name and give an `$id` argument, then pass that ID into the `movie` query.

```js
query fetchMovie($id: ID!) {
  movie(id: $id) {
    title
  }
}
```

You can set the value of `$id` in the GraphQL Explorer like this in the **Query Variables panel**:

```js
{
  "id": 2
}
```

???

- As a best practice, we'll name all of our queries when we send them from the front-end of Boomtown
- Names queries allow us to name multiple queries per document, and actually send query variables along with our request
- Query variables will be very useful to use when we want to use props (like route params) to query for specific data

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

---

# Exercise 2

User your new `addPerson` mutation in the GraphQL explorer to add at least one new person to your movie database.

---

template: inverse

# Cleaning Up

---

# Best Practice

As a best practice, it would be better to remove our data fetching code directly from our resolver code blocks, and instead abstract this away into helper functions.

Create a `api/helpers.js`:

```js
const { data } = require("./data");

const helpers = {
  // An example to get you started...
  getMovies() {
    return data.movies;
  }

  // All of your other helpers will go here...
};
module.exports = { helpers };
```

---

# Exercise 3

Refactor your data-fetching logic into `api/helpers.js`

As you do this, check to see if all of your resolvers actually need their own unique helper function now&mdash;can you re-use any of the helpers for multiple resolvers?

Require your new data helpers in `resolvers.js`, replace your existing code in each resolver with a helper function, and test your app to make sure everything still works as it did before.

---

# Bonus Topics

Some more advanced topics in GraphQL you may want to look into

- [Subscriptions](http://dev.apollodata.com/tools/graphql-subscriptions/subscriptions-to-schema.html)
- [Fragments](http://graphql.org/learn/queries/#fragments)
- [Enums](http://graphql.org/learn/schema/#enumeration-types)
- [Unions](http://graphql.org/learn/schema/#enumeration-types)
- [Interfaces](http://graphql.org/learn/schema/#interfaces)
- [Inputs](http://graphql.org/learn/schema/#input-types)

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

**Inputs:**

- allow us to pass complex objects as arguments into a field (helpful for mutations where you might want to pass a whole object as an argument)

---

# What We've Learned

- Why GraphQL is awesome
- Graph theory and GraphQL core concepts
- How to set-up a GraphQL server
- How to define queries and mutations

---

template: inverse

# Questions?

{% endhighlight %}
