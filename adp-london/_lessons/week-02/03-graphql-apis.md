---
layout: lesson
title: GraphQL APIs
slides: ['_slides/week-02/03-graphql-apis.md']
lesson_date:  2018-07-11
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

---

## Exercise 1

Write the resolvers for the `people` and `person` queries.

Be sure to resolve a person's `filmography` field as well.

Once you've done this, see if your GraphQL server will start by running `npm start`.

Are you able to query your movie API for data?

---

# Exercise 2

User your new `addPerson` mutation in the GraphQL explorer to add at least one new person to your movie database.

---

# Exercise 3

Refactor your data-fetching logic into `api/helpers.js`

As you do this, check to see if all of your resolvers actually need their own unique helper function now&mdash;can you re-use any of the helpers for multiple resolvers?

Require your new data helpers in `resolvers.js`, replace your existing code in each resolver with a helper function, and test your app to make sure everything still works as it did before.

---

---

## Exercise 1

Define the types and fields for items and users in Boomtown.

Be sure to use type modifiers where needed.

---

## Exercise 2

Write the resolvers for your Boomtown items and users now.

You will need to write extra resolvers to provide data to the `itemOwner` and `borrower` fields for `Item` type, and `items` and `borrowed` fields for the `User` type.

When you're done, try querying items and users using the GraphiQL interface.

---

## Exercise 3

Take what you've just learned and use it refactor your `<ItemsContainer>` component to fetch data from your GraphQL server.

There are a few things to consider...will you need to explicitly keep your items in your store (and dispatch an action to fetch them), or will Apollo handle that? If you're not using your old items actions, [how do we know if the data is loading](http://dev.apollodata.com/react/queries.html#default-result-props)?

What shape will your query be? How will your proptypes need to change as a result?

_Remember to leverage the power of nested queries!_

---

## Exercise 4

Now using what you just learned about query variables, refactor your `<ProfileContainer>` component to fetch data from your GraphQL server for a specific user on a `profile/:id` route.

Again, how will your proptypes change? Do you still need your Redux actions and reducer for user data anymore?

Additionally, can GraphQL help you filter items by user in advance with a nested query (instead of monkeying around with this on the client)? What about the other users that a user has borrowed items from?

---

## Exercise 5

Now define a mutation in your Boomtown schema to add an item. You will need to set it up with `title`, `imageUrl`, `itemOwner`, `description`, and `tags` parameters. The JSON server will auto-generate the `id`, but you will statically set the `createdOn`, `available`, and `borrower` properties in the resolver.

Your resolver will need to make a `POST` request to the JSON server's `/items` endpoint, and return the response as JSON.

For now, just test out your new mutation in GraphiQL, as we won't wire this up to the front-end of Boomtown until we add Redux Form next week.

---

## Exercise 6

As a best practice, it would be better to remove our data fetching code directly from our resolver code blocks, and instead abstract this away into helper functions.

Create a `api/jsonServer.js`, refactor your data-fetching logic in there now as exported functions. Do all of your resolvers need their own helper functions?

Import your new data fetching functions into `resolvers.js`, replace your existing `fetch` requests, and test your app to make sure everything still works.

---

## Lab Activity

You now have everything you need in place to retrieve data client-side from your GraphQL server in Project 1. Continue working on refactoring your client-side code to make use of Apollo Client, instead of hitting REST API endpoints in your async Redux action creators.

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

- [Apollo React Docs](http://dev.apollodata.com/react/)
- [Apollo Tools Guide](http://dev.apollodata.com/tools/)

A backgrounder on why and how to optimize what's happening in GraphQL resolvers:

- [Optimizing Your GraphQL Request Waterfalls](https://dev-blog.apollodata.com/optimizing-your-graphql-request-waterfalls-7c3f3360b051)

More on using the DataLoader library:

- [DataLoader and caching - One dataloader per request (Apollo docs)](http://dev.apollodata.com/tools/graphql-tools/connectors.html#One-dataloader-per-request)
- [Optimizing GraphQL Queries with DataLoader](https://spin.atomicobject.com/2017/05/15/optimize-graphql-queries/)
- [Using Facebook’s Dataloader with GraphQL server](http://www.eloquentwebapp.com/using-facebooks-dataloader-graphql/)
