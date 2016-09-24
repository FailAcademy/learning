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

How can a server and client communicate?

1. HTTP. HTTP is like a piece of mail. It has additional info in the headers.

2. Web Sockets. Web sockets are more like a text message, or a phone call.

## 2.1 Server Socket

Goal: setup a socket server on port 3030.

`npm i --save-dev socket.io`


/server/index.js

```js
require('./sockets')();
```

/server/sockets.js

```js
const Server = require('socket.io');

const port = 3030;

const startSocketServer = () => {
  const io = new Server().attach(port);

  io.on('connection', () => {
    console.log('socket connected');
  });

}
module.exports = startSocketServer;
```

## 2.2 Client Socket

Goal: setup a socket client on port 3030.

`npm i --save socket.io-client`

/client/index.js

```js
import './socket';
```

/client/socket/index.js

```js
import io from 'socket.io-client';

const socket = io(`${location.protocol}//${location.hostname}:3030`);

socket.on('connect', () => {
  console.log('socket connected');
});

export default socket;
```

## 2.3 Ping Pong

Goal: demonstrate client/server communication

/client/socket/index.js

```js
socket.on('state', (data) => {
  console.log(data);
  setTimeout(() => {
    socket.emit('state', 'pong');
  }, 1000);
});
```

/server/sockets.js

```js
io.on('connection', (socket) => {
    console.log('socket connected');

    socket.emit('state', 'ping');

    socket.on('state', (data) => {
      console.log(data);
      setTimeout(() => {
        socket.emit('state', 'ping');
      }, 1000);
    });
  });
}
```

Question: what will we communicate between the client and server?

## 3.1 Basic Middleware

We can trigger middleware to update our server store from the client.

/client/socket/remoteMiddleware.js

```js
export default store => next => action => {
  console.log('action', action);
  return next(action);
}
```

/client/store.js

```js
import remoteMiddleware from './socket/remoteMiddleware';

const store = createStore(
  reducers,
  applyMiddleware(
    thunk,
    remoteMiddleware
  )
);
```

## 3.2 Remote Action Middleware

/client/socket/remoteMiddleware.js

```js
export default socket => store => next => action => {
  socket.emit('action', action);
  return next(action);
}
```

/client/store.js

```js
import socket from './socket';

const store = createStore(
  reducers,
  applyMiddleware(
    thunk,
    remoteMiddleware(socket)
  )
);
```

/server/sockets.js

```js
io.on('connection', (socket) => {
    console.log('socket connected');

    // listen for dispatched actions
    socket.on('action', (action) => {
      console.log(action);
    });

  });
}
```

## 3.3 Action Meta Data

Will we want to send all actions to the server? Is there some data in the client that is only for the client?

/client/socket/remoteMiddleware.js

```js
 if (action.meta && action.meta.remote) {
    delete action.meta;
    socket.emit('action', action);
  }
```

/shared/modules/pokemon.js

```js
const sortByPopularity = () => ({
  type: SORT_BY_POPULARITY,
  meta: { remote: true }
});

const voteUp = id => (dispatch) => {
  dispatch({
    type: VOTE_UP,
    payload: { id },
    meta: { remote: true }
  });
  dispatch(sortByPopularity());
};
```

## 4.1: Server Store

Create a `store` on the server as well. How will it be different from your client `store`?

/server/store.js

```js
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;
const reducers  = require('../shared/reducers');

module.exports = createStore(
  reducers,
  applyMiddleware(thunk)
);
```

## 4.2: Update the Server Store

We don't actually need middleware on the server to do basic updates. We can use `store.subscribe` and pass it a function to emit on changes.

/server/sockets.js

```js
const store = require('./store');

const startSocketServer = () => {
  const io = new Server().attach(port);

  store.subscribe(() => {
    io.emit('state', store.getState());
  });

   io.on('connection', (socket) => {
    console.log('socket connected');

    socket.on('action', (action) => {
      console.log(action);

      // dispatch actions through store
      store.dispatch.bind(store)(action);

      // send updated state to client
      console.log('store updated');
      socket.emit('state', store.getState());
    });
  });
```

## 4.3: setState action on client

/client/socket/index.js

```js
import store from '../store';
import { setState } from './setState';

socket.on('state', state => {
  store.dispatch(setState(state));
});
```

/client/socket/setState.js

```js
const SET_STATE = 'SET_STATE';

export function setState(state) {
  return {
    type: SET_STATE,
    payload: { state }
  };
}
```

/shared/modules/pokemon.js

```js
case 'SET_STATE':
  return action.payload.state.pokemon;
```

## 5.1: create a client uuid

We want users to only be able to vote once. How can we accomplish this?

`npm i --save uuid`

/client/socket/actions.js

```js
import uuid from 'uuid';

export const SET_STATE = 'SET_STATE';

export function setState(state) {
  return {
    type: SET_STATE,
    payload: { state }
  };
}
```

/client/socket/actions.js (cont...)

```js
export function getClientId() {
  let id = localStorage.getItem('clientId');
  if (!id) {
    id = uuid.v4();
    localStorage.setItem('clientId', id);
  }
  return id;
}
```

/client/socket/index.js

```js
import { setState, getClientId } from './actions';

socket.on('connect', () => {
  console.log('socket connected');
  console.log(getClientId());
});
```

## 5.2: store clientId as a reducer

/client/socket/index.js

```js
import { setClientId } from '../../shared/modules/clientId';

socket.on('connect', () => {
  console.log('socket connected');
  store.dispatch(setClientId(getClientId()));
});
```

/shared/modules/clientId.js

```js
const SET_CLIENT_ID = 'SET_CLIENT_ID';

function setClientId(clientId) {
  return {
    type: SET_CLIENT_ID,
    clientId,
    meta: { remote: true },
  };
}

function reducer(clientId = null, action) {
  switch(action.type) {
    case SET_CLIENT_ID:
      console.log(action.clientId);
      return action.clientId;
    default:
      return clientId;
  }
}

exports.setClientId = setClientId;
exports.default = reducer;
```

/shared/reducers.js
```js
const clientId = require('./modules/clientId').default;

module.exports = combineReducers({
  pokemon, clientId
});
```

## 5.3: pass clientId into all middleware calls

WIP

```js

```
