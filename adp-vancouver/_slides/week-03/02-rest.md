---
layout: slidedeck
title: REST

---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# REST

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. HTTP * URIs
2. RESTful Guidelines
3. Creating an Express REST API
4. Consuming your REST API from the client

---

# Communication

How can we communicate data from the **server** to the **client**?

---

# End Points

**End points** are URI targets that can be used to load information. 

What data might be loaded from the following end points? 

http://example.com/pokemon
http://example.com/pokemon/1234
http://example.com/pokemon?species=psychic

---
template: inverse

# RESTful APIs

---

# Example 1: Faces

An API for building cute faces.

http://avatars.adorable.io/

See the available data points:

https://api.adorable.io/avatars/list


---

## Challenge 1: Making Faces

We can construct a face with the following formula

`/avatars/face/:eyes/:nose/:mouth/:color`

See an example below: 

https://api.adorable.io/avatars/face/eyes4/nose3/mouth7/8e8895

*Note: color must be a hex value*


---

# Example 2: PokeAPI

http://pokeapi.co/

Endpoints generally load JSON or XML.

Try loading the complete data set:

http://pokeapi.co/api/v2

---

# IDs

In REST, as in your database, each data point is given a unique **id**, as in the following:

https://api.adorable.io/avatars/1
http://pokeapi.co/api/v2/pokemon/6/
http://pokeapi.co/api/v2/pokemon/charizard/

What do you think the following example is loading?

http://example.com/pokemon/1234

---

# Postman

Loading end points in the browser automatically triggers the GET request.

Postman allows us to easily change our endpoints to use PUT, POST or DELETE.

[Download Postman](https://www.getpostman.com/)

---

## Challenge 2: Consuming Endpoints

Load specific information about a pokemon using Postman.

- Charizard's abilities
- the gender of Bulbasaur
- a url linking to a photo of Luvdisc

---

# Standards

REST is broken down into four actions that can be used to describe any data transformation.

- GET - load data
- POST - add new data
- PUT - update data
- DELETE - remove data

This standard is similar to CRUD (create, read, update, delete).

---

template: inverse

# Writing an API

---

# Writing an API

We will create an API for our Worst Pokemon app using Express.

Note that these requests would normally make calls from the database,
which will not be covered in these examples.

---

## Challenge 3: REST

For our Pokemon app, which of the following will we need and why?

###/pokemon
GET
POST
PUT
DELETE

###/pokemon/(:id)
GET
POST
PUT
DELETE

---

# REST in Action

We will only require some of these endpoints for now.

###/pokemon
GET - list all pokemon
POST - add a new pokemon

###/pokemon/(:id)
GET - get all details for a pokemon
PUT - update a pokemons details
DELETE - remove the pokemon

---

# Express 

In a new project, setup a few dependencies.

`npm install --save express`

---

# Server

/server/index.js

```js
const express = require('express')
const app = express()

const port = process.env.PORT || 4000

app.listen(port)
console.log('Listening on port', port)
```

Run these server to ensure it's working.

```shell
> node server
```

---

# Body Parser

Body parser is middleware used for parsing HTML, JSON & URL's from requests. 
We will need it to interpret our **JSON** and **URL** data.

`npm install --save body-parser'

/server/index.js

```js
/* ... port ... */
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
/* ... app.listen(port) ...  */
```

---

# Router

The router will provide the url end points.

```js
/* ... body parser ... */
const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
    res.status(200).json('success!');
});

// prefix all api calls with the path /api
app.use('/api', apiRouter);

/* ... app.listen(port) ...  */
```

---

# GET Pokemon

```js

const pokemon = [{
  id: 1,
  name: 'Luvdisc',
  description: 'This heart-shaped Pokemon earned its name by swimming after loving couples it spotted in the ocean’s waves.',
  votes: 3   
}]

apiRouter.get('/pokemon', (req, res) => {
    res.status(200).json({ data: pokemon });
});
```

---

# POST Pokemon

`apiRouter.post` can be used to save new data in the body of the **request**.

```js
apiRouter.post('/pokemon', (req, res) => {
  // assuming the req.body.pokemon is a valid pokemon
  pokemon.push(req.body.pokemon)
  res.status(200).json('pokemon added')
})
```

If no response is given, the data will be added silently.

---

# POST Pokemon Response

The response can be used to signal a successful or failed save, or to update the existing data.

```js
apiRouter.post('/pokemon', (req, res) => {
  // assuming the req.body.pokemon is a valid pokemon
  pokemon.push(req.body.pokemon)
  res.status(200).json('pokemon added');
})
```

---

# Restructuring Routes

We can join routes together using `router.route`

```js
apiRouter.route('/pokemon')
  .get((req, res) => /* ...get... */)
  .post((req, res) => /* ..post... */ )
```

---

# GET a single Pokemon

Match on the id to find a single item.

```js
apiRouter.route('/pokemon/:pokemon_id')
  .get((req, res) => {
    const matches = pokemon.find(x => req.params.pokemon_id === x.id)
    if (matches.length) {
      const pokemon = p[0]
      res.json(p[0])
    } else {
      res.status(400).json('Error: Pokemon not found')
    }
  })
```

---

# PUT update a Pokemon

We can use `Object.assign` to merge changes into an object.

```js
let bad = { a: 1, b: 3 }
bad = { a: 2 }
// { a: 2 }

// changing a value without effecting other keys
const good = Object.assign({}, { a: 1, b : 3}, { a: 2 })
// { a: 2, b: 3 }
```

---

# PUT update a Pokemon

Update the pokemon with an object of changes.

```js
apiRouter.route('/pokemon/:pokemon_id')
  .get(/* ... */)
  .put((req, res) => {
    // where x is an object of changes
    const changes = req.changes;

    const matches = pokemon.map(x => {
      if (req.params.pokemon_id === x.id) {
        return Object.assign({}, x, changes)
      }
      return x
    };
    res.status(400).json('Pokemon updated')
  )
```

---

## Challenge 4: Remove a Pokemon

Write a method to remove a pokemon from the list.

*Hint: use the pokemon_id and a filter* 

---

# Remove a Pokemon

We can return override the pokemon list with a filtered list. 

```js
apiRouter.route('/pokemon/:pokemon_id')
  .get(/* ... */)
  .put(/* ... */)
  .delete((req, res) => {
    pokemon = pokemon.filter(x => req.params.pokemon_id !== x.id)
    res.status(200).json('pokemon deleted')
  })
```

---

# REST Review

Imagine we have an online store.

Plan out some a RESTFUL API organized by endpoints using GET, POST, PUT, & DELETE.

---

template: inverse

# Connecting to your REST API

---

# Connecting to your REST API

We can now use our REST API to handle actions from the server.

Let's start by loading our list of pokemon.

---

# AJAX

AJAX is client-side way of requesting data from a server.

It is short for (Asynchronous Javascript & XML).

```js
function ajaxRequest(data) {
  var xhttp = new XMLHttpRequest();
  // a lot more goes here
  xhttp.open("GET", data, true);
  xhttp.send();
}
```

---

# Fetch API

Fetch is a more modern browser API for making AJAX requests.

Fetch automatically returns a Promise.

```js
fetch('/path/to/file/or/api')
.then((response) => response.json())
.then((jsonData) => {
  // do something here
});
```

It is not fully implemented by all browsers. [CanIUse.com](http://caniuse.com/#search=fetch)

---

# Fetch Polyfill

We can use a package called ["isomorphic-fetch"](https://github.com/matthew-andrews/isomorphic-fetch), 
which brings the same `fetch` api to both the browser & server.

```shell
npm install isomorphic-fetch --save
```

```js
import fetch from 'isomorphic-fetch';

fetch('/api/path/to/endpoint')
.then((response) => response.json())
.then((jsonData) => {
  // do something here
});
```

---

# Fetch POST, PUT, DELETE

We have to specify different headers for non-GET requests.

```js
import fetch from 'isomorphic-fetch';

fetch('/api/path/to/endpoint', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: 'hello',
    password: 'pw',
  })
})
```

---

# Loading Data

We can load the data in several different ways.

1. In a components `componentWillMount` life-cycle
2. As a Redux action creator, loading data through props

We will try implementing and comparing both methods

---

# Loading Data in a Component

Call `setState` when a fetch is returned. 

```js
class SomeClass extends React.Component {
  componentWillMount() {
    fetch('/path/to/api')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });
    });
  }
}
```

---

# Loading Data in Redux

Call a loading action on startup.

```js
store.dispatch(initData())
```

Use a thunk inside an action creator to return the data.

```
const initData = () => (dispatch) => {
  fetch('/api/path/to/endpoint')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'INIT_DATA', payload: { data }});
    });
}
```

---

# Loading Data

Which method do you prefer and why?

- loading data in a component
- loading data in Redux

---

## Challenge 5: Connecting

Set your app up to load client data from the server using REST.

- plan a RESTful API for your Reddit app.
- create and test your REST end points
- consume the data from the client



{% endhighlight %}


