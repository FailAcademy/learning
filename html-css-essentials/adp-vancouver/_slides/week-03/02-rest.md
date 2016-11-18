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

# Example: Faces

An API for building cute faces.

http://avatars.adorable.io/

See the available data points:

https://api.adorable.io/avatars/list


---

# Creating a Face

We can construct a face with the following formula

`/avatars/face/:eyes/:nose/:mouth/:color`

See an example below: 

https://api.adorable.io/avatars/face/eyes4/nose3/mouth7/8e8895

*Note: color must be a hex value*


---

# Example: PokeAPI

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
http://example.com/pokemon/1234

In this case, the end point would access data for a specific pokemon with the id of "1234".

---

# Standards

REST is broken down into four actions that can be used to describe any data transformation.

- GET - load data
- POST - add new data
- PUT - update data
- DELETE - remove data

This standard is similar to CRUD (create, read, update, delete).

---

# Postman

Loading end points in the browser automatically triggers the GET request.

Postman allows us to easily change our endpoints to use PUT, POST or DELETE.

---

# Example: MovieDB

The MovieDB is an open source API for films. 

https://developers.themoviedb.org/3

We will use it to practice our different RESTful requests.

---

# API_KEY

Most online APIs require an API key.

Use the following pre-registered API key to make requests.

API_KEY = 919c0b4659735831d827bdf5e264080f

https://api.themoviedb.org/3/movie/550?api_key={API_KEY}

Which film is loaded by the above request?

---

# Session ID

First get a session ID.

Click on "Try it Out", add the API key and send a request.

https://developers.themoviedb.org/3/authentication/create-request-token

Copy your session id somewhere for use later.

---

# POST

Add to favorites:

https://developers.themoviedb.org/3/account

Rate a movie:

https://developers.themoviedb.org/3/movies

---

template: inverse

# Writing an API

---

# Writing an API

We will create an API for our Worst Pokemon app using Express.

Note that these requests would normally make calls from the database,
which will not be covered in these examples.

---

# REST in Action

Which of the following will we need, and for what purpose?

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

const port = process.env.PORT || 3000

app.listen(port)
console.log('Listening on port', port)
```

Run these server to ensure it's working.

```shell
> node server
```

---

# Body Parser

Body parser is middleware used for parsing requests. 
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
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ msg: 'API is working' });
});

// prefix all api calls with the path /api
app.use('/api', router);

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

router.get('/pokemon', (req, res) => {
    res.json({ data: pokemon });
});
```

---

# POST Pokemon

`router.post` can be used to save new data in the body of the **request**.

```js
router.post('/pokemon', (req, res) => {
  // assuming the req.body.pokemon is a valid pokemon
  pokemon.push(req.body.pokemon)
})
```

If no response is given, the data will be added silently.

---

# POST Pokemon Response

The response can be used to signal a successful or failed save, or to update the existing data.

```js
router.post('/pokemon', (req, res) => {
  // assuming the req.body.pokemon is a valid pokemon
  pokemon.push(req.body.pokemon)
  res.json({ msg: 'Pokemon added!', data: pokemon });
})
```

---

# Restructuring Routes

We can join routes together using `router.route`

```js
router.route('/pokemon')
  .get((req, res) => /* ...get... */)
  .post((req, res) => /* ..post... */ )
```

---

# GET a single Pokemon

Match on the id to find a single item.

```js
router.route('/pokemon/:pokemon_id')
  .get((req, res) => {
    const matches = pokemon.find(x => req.params.pokemon_id === x.id)
    if (matches.length) {
      const pokemon = p[0]
      res.json(p[0])
    } else {
      res.send('Error: Pokemon not found')
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

```js
router.route('/pokemon/:pokemon_id')
  .get(/* ... */)
  .put((req, res) => {
    // where x is an object of changes
    const changes = req.changes;

    const matches = pokemon.map(x => {
      if (req.params.pokemon_id === x.id) {
        return Object.assign({}, x, changes)
      }
      return x
  })
```

---

# Remove a Pokemon

Write a method to remove a pokemon from the list.

*Hint: use the pokemon_id and a filter* 

---

# Remove a Pokemon

We can return override the pokemon list with a filtered list. 

```js
router.route('/pokemon/:pokemon_id')
  .get(/* ... */)
  .put(/* ... */)
  .delete((req, res) => {
    pokemon = pokemon.filter(x => req.params.pokemon_id !== x.id)
  })
```

---

# REST Review

Imagine we have an online store.

Plan out some a RESTFUL API organized by endpoints using GET, POST, PUT, & DELETE.

---

{% endhighlight %}


