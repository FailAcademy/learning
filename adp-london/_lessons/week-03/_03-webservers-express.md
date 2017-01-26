# Connecting Client & Server

## Intro (5)

Draw what we have made so far.

```
 [ View ] <- [ Data ] <- -> [ Server ] <- -> [ Database ]

( React )    ( Redux )       (Express)        (Postgres)
```

What is left to do?

*( sync the data layer and server )*

I told you Redux has a "single source of truth". I lied. What is the real source of truth?

*( not Redux, the Database )*

How do you think we will do this:

*( sync in middleware? REST? )*

## Exercise 1 (15)

1. With a partner, outline a way to sync the client and server using Redux. Use a high level overview.

2. Compare your solution with another group.

3. Compare the solution we will build with student solutions.

## Setup

Clone the project and checkout the first step.

## 1.1 Express Server

Goal: create a basic Express server.

```js
const express = require('express');
const { join } = require('path');
const app = express();
const port = 4000;

app.use(express.static(
  join(__dirname, '..', 'build')
));

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
```


## 1.2 Add a webpack server

Goal: load webpack through express.

`npm install --save-dev webpack webpack-dev-middleware webpack-hot-middleware`

server/index.js

```js
const middleware = require('./middleware')(app);
```

server/middleware.js

```js
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

module.exports = (app) => {

  const config = require('../config/webpack.config.dev');

  const compiler = webpack(config);

  const middleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    // contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  return middleware;
}
```


## Communication

---

## 3.1 Basic Middleware

---
