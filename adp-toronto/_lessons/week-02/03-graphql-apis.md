---
layout: lesson
title: GraphQL APIs
slides: ["_slides/week-02/03-graphql-apis.md"]
lesson_date: 2019-01-23
---

## Pre-work

Please read the following article prior to class:

- [So what’s this GraphQL thing I keep hearing about?](https://medium.freecodecamp.org/so-whats-this-graphql-thing-i-keep-hearing-about-baf4d36c20cf)

---

## Learning Objectives

- Explain the difference between a node and an edge in a graph.
- Describe the differences between using GraphQL and creating a REST API.
- Example the difference between imperative and declarative data fetching.
- Describe the architectural use cases for GraphQL.
- Describe how schema, queries, mutations, and subscriptions differ in GraphQL.
- Create a GraphQL schema using its Schema Definition Language (SDL).
- Identify the six different scalar types in GraphQL.
- Write data server-side using mutations.
- Name three different ways to keep the client and server in sync with GraphQL.
- Install and use Apollo Server in a project.
- Use GraphQL Playground as a client to explore a GraphQL API.

---

## Keywords

- GraphQL
- Graph
- Node
- Edge
- Schema
- Query
- Mutation
- Subscription
- Schema Definition Language (SDL)
- Type definitions
- Root type
- Scalar
- Resolver
- Input type

---

## Exercise 1

Write the resolvers for the `people` and `person` queries.

Be sure to resolve a person's `filmography` field as well.

Once you've done this, see if your GraphQL server will start by running `npm start`.

Are you able to query your movie API for data?

---

## Exercise 2

User your new `addPerson` mutation in the GraphQL explorer to add at least one new person to your movie database.

---

## Exercise 3

Refactor your data-fetching logic into `api/helpers.js`

As you do this, check to see if all of your resolvers actually need their own unique helper function now&mdash;can you re-use any of the helpers for multiple resolvers?

Require your new data helpers in `resolvers.js`, replace your existing code in each resolver with a helper function, and test your app to make sure everything still works as it did before.

---

## Lab Activity

### Task 1:

_Define your schema!_

- The `Item` type has the following fields:

  - `id` (its type is `ID` and it's required)
  - `title` (its type `String` and it's required)
  - `imageurl` (its type is `String`)
  - `description` (its type `String` and it's required)
  - `itemowner` (its type is `User` and it's required)
  - `tags` (its type is a list of `Tag`s)
  - `created` (its type is the custom `Date` scalar and it's required)
  - `borrower` (its type is `User`)

- The `User` type has the following fields:

  - `id` (its type is `ID` and it's required)
  - `email` (its type is `String` and it's required)
  - `fullname` (its type is `String` and it's required)
  - `bio` (its type is `String`)
  - `items` (its type is a list of `Item`s)
  - `borrowed` (its type is a list of `Item`s)

- The `Tag` type has the following fields:

  - `id` (its type is `ID` and it's required)
  - `title` (its type is `String` and it's required)

- The `File` type has the following fields:

  - `id` (its type is `ID` and it's required)
  - `filename` (its type is `String` and it's required)
  - `mimetype` (its type is `String` and it's required)
  - `encoding` (its type is `String` and it's required)
  - `itemid` (its type is `ID` and it's required)

- The `AssignedTag` input has the following fields:

  - `id` (its type is `ID` and it's required)
  - `title` (its type is `String` and it's required)

- The `AssignedBorrower` input has the following fields:

  - `id` (its type is `ID` and it's required)

- The `NewItemInput` input has the following fields:

  - `title` (its type is `String` and it's required)
  - `description` (its type is `String`)
  - `tags` (its type is a list of `AssignedTag`s and it's required)

- The `addItem` mutation has the following variables and returns an `Item`:

  - `item` (its type is `NewItemInput` and it's required)
  - `image` (its type is `Upload`)

### Task 2:

_Now that you have a schema, create your resolvers._

You'll start by transferring the SQL queries you wrote in Postico last week to the `server/api/pg-resource.js` file and completing all `@TODO` tasks in this file.

As you create your helpers in `pg-resource.js`, use them in your resolvers in `server/api/resolvers/index.js`. Start with the queries, and work your way up to the mutation.

Test them out in the GraphQL playground! You'll know you're done when running the queries returns the data you're expecting.

---

## Additional Resources

More on graph theory:

- [A Gentle Introduction to Graph Theory](https://dev.to/vaidehijoshi/a-gentle-introduction-to-graph-theory)

More on the difference between GraphQL and REST:

- [GraphQL vs. REST](https://dev-blog.apollodata.com/graphql-vs-rest-5d425123e34b)

Great introductory GraphQL tutorials:

- [The Fullstack Tutorial for GraphQL](https://www.howtographql.com/)
- [Tutorial: How to build a GraphQL server](https://dev-blog.apollodata.com/tutorial-building-a-graphql-server-cddaa023c035)
- [Understanding and Building a GraphQL Server](https://keywordbrain.com/blog/understanding-graphql-server/)

Official Apollo docs:

- [Apollo Server Guide](https://www.apollographql.com/docs/apollo-server/v2/)

A backgrounder on why and how to optimize what's happening in GraphQL resolvers:

- [Optimizing Your GraphQL Request Waterfalls](https://dev-blog.apollodata.com/optimizing-your-graphql-request-waterfalls-7c3f3360b051)
