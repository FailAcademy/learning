---
layout: slidedeck
title: Connecting Client and Server with GraphQL Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Connecting Client & Server with GraphQL

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. REST pain points
2. Graph theory basics
3. GraphQL basics
4. Set-up a GraphQL server
5. Define queries and run them in a client
6. Define mutations and run them in a client
7. Clean-up and optimize data fetching

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
- It's hiearchical
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

*Go to the Live Explorer...*

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

# Express Set-up

We'll need to set-up a basic Express server and create an endpoint for our web client to send queries to. Create a new directory for your server, `npm init`, and then:

```bash
npm i -S express body-parser node-fetch
```

Let's also use Babel with our app again:

```bash
npm i -D babel-cli babel-preset-es2015 babel-preset-stage-2 nodemon
```

Create a `.babelrc` file with the **same config as yesterday**, and then add the same `start` command to your `package.json` too.

???

`.babelrc` config:

```
{
  "presets": ["es2015", "stage-2"],
  "plugins": []
}
```

`package.json` script:

```bash
"scripts": {
  "start": "nodemon index.js --exec babel-node"
}
```

---

# Express Set-up

Now create an `index.js` file and instantiate your new Express app:

```js
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
```

---

# GraphQL Set-up

Now we'll need to install the GraphQL server for Express:

```bash
npm i -S graphql apollo-server-express graphql-tools
```

*Note that we are using the [**Apollo Server**](http://dev.apollodata.com/tools/apollo-server/index.html)*.

???

- `graphql`: The JavaScript reference implementation for GraphQL, a query language for APIs created by Facebook
- `apollo-server-express`: Apollo server is a flexible, community driven, production-ready HTTP Apollo Server plugin for Node.js
- `graphql-tools`: This package allows you to use the GraphQL schema language to build your GraphQL.js schema, and also includes useful schema tools like per-type mockin

---

# GraphQL Set-up

And create our endpoints in `index.js`:

```js
import { 
  graphqlExpress, 
  graphiqlExpress 
} from 'apollo-server-express';
import schema from './api/schema'; // Next step!

const GQL_PORT = process.env.PORT; // Where does this come from?

// Where we will send all of our GraphQL requests
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// A route for accessing the GraphiQL tool
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

app.listen(GQL_PORT, () => console.log(
  `GraphQL is now running on http://localhost:${GQL_PORT}/graphql`
));
```

???

The `.env` file:

```
GQL_PORT=4000
```

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

Create a `graphql/schema.js` file in your app:

```js
import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers'; // Next step!

const typeDefs = `
  # Your schema goes here...
`;

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
```

---

# Exercise 1

Define the types and fields for items and users in Boomtown.

Be sure to use type modifiers where needed.

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

Create a `graphql/resolvers.js` file in your app:

```js
import fetch from 'node-fetch';

const resolveFunctions = {
  // Resolvers go here...
};

export default resolveFunctions;
```

---

# Example Resolvers

If we were getting our data from **[a static source like this](https://gist.github.com/mandiwise/25dbcfd558748f6afded7dcebe23f9a3)**, our resolvers may look like this:

```js
const resolveFunctions = {
  Query: {
    movies() {
      return data.movies;
    },
    movie(root, { id }) {
      return data.movies.find(movie => movie.id === parseInt(id));
    },
  },
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
const resolveFunctions = {
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
  },
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

# Resolve the Director

We have to tell GraphQL where to find the director with another resolver function for that specific field:

```js
Movie: {
  // Static version
  director(movie) {
    if (!movie.director) return null;
    return data.people.find(person => person.id === movie.director);
  }

  // Promise-based version
  director(movie) {
    if (!movie.director) return null;
    return fetch(`http://somemovieapi.com/people/${movie.director}`)
      .then(response => response.json())
      .catch(errors => console.log(errors));
  }
},
```

---

# Exercise 2

Write the resolvers for your Boomtown items and users now.

You will need to write extra resolvers to provide data to the `itemOwner` and `borrower` fields for `Item` type, and `items` and `borrowed` fields for the `User` type.

When you're done, try querying items and users using the GraphiQL interface.

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

*Try this out in GraphiQL now.*

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

You can set the value of `$id` in GraphiQL like this in the **Query Variables panel**:

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

# Using GraphQL in Boomtown

In order to use GraphQL on the front-end, we'll need to add the **[React Apollo Client](http://dev.apollodata.com/react/)** to the front-end app:

```js
npm i -S react-apollo graphql-tag
```

???

Apollo client will allow us to shift from imperative to declarative data fetching in the client. Data fetching logic be gone!

Imperative data fetching:
1. construct and send the HTTP request
2. receive and parse data response
3. store data locally
4. display the inforamiton in the UI

Declarative data fetching:
1. describe its data requirements
2. display the information in the UI

(All of the lower level networking tasks should be abstracted away by Apollo Client.)

---

# Create a Client

Next we'll create an `ApolloClient` instance in our React app in `config/apolloClient.js`:

```js
import ApolloClient, { createNetworkInterface } from 'react-apollo';

const networkInterface = createNetworkInterface({
    uri: 'http://localhost:5000/graphql'
});

const client = new ApolloClient({ networkInterface });

export default client;
```

---

# Apollo Provider

Next we'll wrap our entire app in an `<ApolloProvider>` component to make the client instance available to our React component hierarchy in `index.js`:

```js
import { ApolloProvider } from 'react-apollo';
import client from './config/apolloClient';
```

```js
<MuiThemeProvider muiTheme={muiTheme}>
    <ApolloProvider client={client} store={store}>
        <ConnectedRouter history={history}>
            <Layout>
                <Routes />
            </Layout>
        </ConnectedRouter>
    </ApolloProvider>
</MuiThemeProvider>
```

---

# Integrate with Redux

`ApolloClient` has its own Redux store, but we can integrate into our existing store instead in `redux/store.js`:

```js
// ...other imports
import rootReducer from './reducers';
import client from '../config/apolloClient';
import { history } from '../index';
```

```js
export default createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            client.middleware(),
            thunk,
            routerMiddleware(history)
        )
    )
);
```

???

- Note that we will never pull Apollo data directly from the store
- We will use the `graphql` and `connect` HOCs as containers instead
- So this is more for debugging purposes
- http://dev.apollodata.com/core/how-it-works.html


---

# Integrate with Redux

Add the Apollo reducer as well!

```js
import { combineReducers } from 'redux';

import client from '../config/apolloClient';
import itemReducer from './modules/items';
import userReducer from './modules/user';

export default combineReducers({
    apollo: client.reducer(),
    items: itemReducer,
    user: userReducer
});

```

---

# CORS

Before we can access our GraphQL endpoint from our React app, we'll need to **enable CORS** (Cross-Origin Resource Sharing) in our GraphQL app.

To do that, **we'll need to apply some extra middleware** to our Express server:

```bash
npm install cors --save
```

In `index.js` of our server:

```js
import cors from 'cors';

app.use('*', cors());
```

???

- Enabling CORS will allow JavaScript to make requests across domain boundaries
- This will add the `Access-Control-Allow-Origin:*` header to the response
- This will allow Ajax requests that would otherwise have been forbidden by the same-origin policy (because it wouldn't be very secure if we could use JS to make requests across domains any place and any time...)

---

# graphQL HOC

Just as Redux `connect` allows us to create HOCs, Apollo has a `graphql` function to create HOCs to pass data as props:

```js
import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const MoviesList = ({ data }) => (
  <ul>{data.movies.map(({title}, i) => <li key={i}>{title}</li>)}</ul>
);

const fetchMovies = gql`
  query fetchMovies {
    movies {
      title
    }
  }
`;

export default graphql(fetchMovies)(MoviesList);
```

???

- When we use graphql with a GraphQL query document, two things happen:
  1. The query is loaded from the Apollo client-side data store, or the server if the data is not in the store
  2. Our component subscribes to the store, so that it is updated if the data changes as the result of a mutation or some other response from the server
- `gql` is a function, and using in front of template string creates a tagged template literal (tags allow you to parse template literals with a function)

---

# With Redux connect

```js
// ...imports above, including Redux "connect" now
const MoviesList = ({ data, filters }) => (
  <ul>
    {data.movies
      .filter({ title } => filters.includes(title))
      .map(({ title }, i) => <li key={i}>{title}</li>)}
  </ul>
);

const fetchMovies = gql`
  query fetchMovies {
    movies {
      title
    }
  }
`;

const mapStateToProps = state => ({ filters: state.movies.filters });

const MoviesListWithData = graphql(fetchMovies)(MoviesList);
export default connect(mapStateToProps)(MoviesListWithData);
```

???

- This means you can easily pass variables into your queries that come from Redux state, or dispatch actions that rely on server-side data

---

# Exercise 3

Take what you've just learned and use it refactor your `<ItemsContainer>` component to fetch data from your GraphQL server.

There are a few things to consider...will you need to explicitly keep your items in your store (and dispatch an action to fetch them), or will Apollo handle that? If you're not using your old items actions, [how do we know if the data is loading](http://dev.apollodata.com/react/queries.html#default-result-props)?

What shape will your query be? How will your proptypes need to change as a result?

*Remember to leverage the power of nested queries!*

---

# Dynamic Query Vars

We can pass component data into the query as an argument:

```js
const MovieListing({ data }) => (
  <p>{data.title}</p>
);

const fetchMovie = gql`
  query fetchMovie($id: ID!) {
    movie(id: $id) {
      title
    }
  }
`;

export default graphql(fetchMovie, {
  options: ownProps => ({
    variables: {
      id: ownProps.match.params.id // e.g. from React Router!
    }
  }),
})(MovieListing);
```

---

# Exercise 4

Now using what you just learned about query variables, refactor your `<ProfileContainer>` component to fetch data from your GraphQL server for a specific user on a `profile/:id` route.

Again, how will your proptypes change? Do you still need your Redux actions and reducer for user data anymore?

Additionally, can GraphQL help you filter items by user in advance with a nested query (instead of monkeying around with this on the client)? What about the other users that a user has borrowed items from?

---
template: inverse

# Mutating Data

---

# Defining Mutations

Any mutations we want to permit on our data must be added to the schema as the `Mutation` root query type:

```js
// back in ./api/schema.js...

const typeDefs = `

  # Other types defined above...

  type Mutation {
    addPerson (
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

We must also another key to our `resolveFunctions` object called `Mutation`, and define what the mutation should do:

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

# Exercise 5

Now define a mutation in your Boomtown schema to add an item. You will need to set it up with `title`, `imageUrl`, `itemOwner`, `description`, and `tags` parameters. The JSON server will auto-generate the `id`, but you will statically set the `createdOn`, `available`, and `borrower` properties in the resolver.

Your resolver will need to make a `POST` request to the JSON server's `/items` endpoint, and return the response as JSON.

For now, just test out your new mutation in GraphiQL, as we won't wire this up to the front-end of Boomtown until we add Redux Form next week.

---
template: inverse

# Cleaning Up and Optimizing Data Fetching

---

# Exercise 6

As a best practice, it would be better to remove our data fetching code directly from our resolver code blocks, and instead abstract this away into helper functions.

Create a `api/jsonServer.js`, refactor your data-fetching logic in there now as exported functions. Do all of your resolvers need their own helper functions?

Import your new data fetching functions into `resolvers.js`, replace your existing `fetch` requests, and test your app to make sure everything still works.

---

# GET Requests Run Amok

Try running this request in Boomtown's GraphiQL interface:

```
# Get items with owners, and list of all their items

query {
  items {
    title
    itemOwner {
    fullName
      borrowed {
        title
      }
    }
  }
}
```

*Take a look at requests to the JSON server logged in your Terminal. What do you see?*

---

# Batch Those Requests!

The **[DataLoader](https://github.com/facebook/dataloader)** library will up us solve this problem with its built-in batching and caching features. Install the library in Boomtown now:

```bash
npm install --save dataloader
```

???

- DataLoader is a utility that supports query batching and caching out of the box
- Caching is a process of storing data in a temporary storage area
- Batching is a way to coalesce all individual loads which occur within a single frame of execution and then calling a batch function with all requested keys

---

# Create Loaders

To create a loader, we will instantiate a new `DataLoader` and pass it a function that accepts some keys and returns a list of Promises (aka a **batch function**).

We'll do this in a new `api/loaders.js` file:

```js
import DataLoader from 'dataloader';
import { getUserOwnedItems } from './jsonServer';

export default function() {
  return {
    UserOwnedItems: new DataLoader(ids => (
      Promise.all(ids.map(id => getUserOwnedItems(id));
    ))),
    // other data loaders go here...
  }
};
```

???

- In our case, the individual item and user loaders should take a list of resource IDs and return the fetched data from each of their related endpoints (we'll use our helper functions for that)

---

# Set Context

This isn't enough by itself though! We'll need to set our data loaders as a `context` for our GraphQL server in `index.js`:

```js
import createLoaders from './api/loaders';

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  context: { loaders: createLoaders() }
}));
```

???

- The `context` property simply allows us to set some context to any of our resolvers
- In this case, it will be the data loaders, but we could also use it for something like setting API keys for all requests to a third-party service

---

# Use Context in Resolver

Lastly, we'll add `context` as the third parameter to our resolver function, and call our data loader there instead of calling the helper function directly:

```js
User: {
  items: (user, args, context) => {
    return context.loaders.UserOwnedItems.load(user.id);
  },
  // other resolvers here...
}
```

---

# Exercise 7

Now that we've created one data loader together, create three more for batching requests for items that a user has borrowed, individual items, and individual users.

Use your data loaders in your resolvers, and test your app to make sure everything still works.

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
- How to use Apollo client in a React app
- How to optimize data fetching in a GraphQL API

---
template: inverse

# Questions?

{% endhighlight %}
