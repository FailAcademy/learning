---
layout: lesson
title: GraphQL APIs I
slides: ['_slides/month-02/06-graphql-apis-I.md']
lesson_date: 2019-07-25
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
- Create a GraphQL schema using its Schema Definition Language (SDL).
- Identify the six different scalar types in GraphQL.
- Use GraphQL Playground as a client to explore a GraphQL API.

---

## Keywords

- GraphQL
- Graph
- Node
- Edge
- Schema
- Query
- Schema Definition Language (SDL)
- Type definitions
- Root type
- Scalar

---

## Exercise 1

Write the resolvers for the `people` and `person` queries.

Be sure to resolve a person's `filmography` field as well.

Once you've done this, see if your GraphQL server will start by running `npm start`.

Are you able to query your movie API for data?

---

## Additional Resources

Great introductory GraphQL tutorials:

- [The Fullstack Tutorial for GraphQL](https://www.howtographql.com/)
- [Tutorial: How to build a GraphQL server](https://dev-blog.apollodata.com/tutorial-building-a-graphql-server-cddaa023c035)
- [Understanding and Building a GraphQL Server](https://keywordbrain.com/blog/understanding-graphql-server/)

More on the difference between GraphQL and REST:

- [GraphQL vs. REST](https://dev-blog.apollodata.com/graphql-vs-rest-5d425123e34b)
