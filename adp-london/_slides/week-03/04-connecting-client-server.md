---
layout: slidedeck
title: Connecting Client & Server Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Connecting Client & Server

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1.  Introduction
2.  Deep-dive
3.  ...

---

# Using GraphQL in Boomtown

In order to use GraphQL on the front-end, we'll need to add the **[React Apollo Client](http://dev.apollodata.com/react/)** to the front-end app:

```js
npm i -S react-apollo graphql-tag
```

???

Apollo client will allow us to shift from imperative to declarative data fetching in the client. Data fetching logic be gone!

Imperative data fetching:

1.  construct and send the HTTP request
2.  receive and parse data response
3.  store data locally
4.  display the inforamiton in the UI

Declarative data fetching:

1.  describe its data requirements
2.  display the information in the UI

(All of the lower level networking tasks should be abstracted away by Apollo Client.)

---

# Create a Client

Next we'll create an `ApolloClient` instance in our React app in `config/apolloClient.js`:

```js
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
  link: createHttpLink({ uri: "http://localhost:3000" }),
  cache: new InMemoryCache()
});

export default client;
```

---

# Apollo Provider

Next we'll wrap our entire app in an `<ApolloProvider>` component to make the client instance available to our React component hierarchy in `index.js`:

```js
import { ApolloProvider } from "react-apollo";
import client from "./config/apolloClient";
```

```js
<MuiThemeProvider muiTheme={muiTheme}>
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Layout>
          <Routes />
        </Layout>
      </ConnectedRouter>
    </Provider>
  </ApolloProvider>
</MuiThemeProvider>
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
import cors from "cors";

app.use("*", cors());
```

???

- Enabling CORS will allow JavaScript to make requests across domain boundaries
- This will add the `Access-Control-Allow-Origin:*` header to the response
- This will allow Ajax requests that would otherwise have been forbidden by the same-origin policy (because it wouldn't be very secure if we could use JS to make requests across domains any place and any time...)

---

# graphQL HOC

Just as Redux `connect` allows us to create HOCs, Apollo has a `graphql` function to create HOCs to pass data as props:

```js
import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const MoviesList = ({ data }) => (
  <ul>{data.movies.map(({ title }, i) => <li key={i}>{title}</li>)}</ul>
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
  1.  The query is loaded from the Apollo client-side data store, or the server if the data is not in the store
  2.  Our component subscribes to the store, so that it is updated if the data changes as the result of a mutation or some other response from the server
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

_Remember to leverage the power of nested queries!_

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

# What We've Learned

- Thing 1
- Thing 2
- Thing 3

---

template: inverse

# Questions?

{% endhighlight %}
