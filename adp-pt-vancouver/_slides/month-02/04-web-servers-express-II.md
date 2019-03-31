---
layout: slidedeck
title: Creating a Web Server with Express II Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Creating a Web Server with Express II

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1.  Parse requests coming into Express

---

## Exercise 1

Setting application configuration variables.

Refactor:

```
const PORT = 3300;
```

To be:

```
app.set('PORT', process.env.PORT || 3300);
const port = app.get('PORT');
```

- Why is it useful to set configuration values like this?
- What is `process.env` ?

???

Discussion:

What are the other values we'll need to configure for boomtown?
Lead the discussion towards: 'How do you think we're going to store / connect to postgres from node?'
ie. We'll need to use the app singleton to retrieve / store values from process.env

---

template: inverse

# Parsing Requests

---

# Dynamic Routes

Like with React Router, we can add route parameters:

```js
app.get('/quotes/:name', (request, response) => {
  response.send(request.params.name);
});
```

What do you see in your browser now when you navigate to `/quotes/someone`?

???

- Query string parameters are added to `request.query` object as properties too

---

# Exercise 2

Finish writing the route handler for `/quotes/:name`:

```js
app.get('/quotes/:name', (request, response) => {
  const { name } = request.params;

  // What array method can you use on the quotes array to return
  // the first object in the array with a matching name?

  if (/* there's no match... */) {
    response.status(404).json('That person isn\'t quote-worthy.');
  } else {
    response.send(/* the quote object */);
  }
});
```

???

Solution:

```js
app.get('/quotes/:name', (request, response) => {
  const { name } = request.params;
  const matchedQuote = quotes.find(quote => name === quote.name);

  if (!matchedQuote) {
    response.status(404).json("That person isn't quote-worthy.");
  } else {
    response.json(matchedQuote.text);
  }
});
```

---

# POST Requests

Time to add some new quotes to our app.

Doing this in our Express app will be similar to sending `GET` requests, but we'll use a `POST` request instead.

_But first, some initial set-up..._

---

# Submit Form

First, we'll need a form to send `POST` requests to our server from the client:

```html
<h2>Submit a Quote</h2>
<form id="create-quote">
  <label for="text">Quote Text</label>
  <input type="text" id="text" name="text" />
  <label for="name">Speaker Name</label>
  <input type="text" id="name" name="name" />
  <button type="submit">Create Quote</button>
</form>
```

---

# POST Requests

Now we finally get to handle the `POST` request we're sending from the client. First, we'll need some middleware to parse the JSON body of the incoming request:

```js
npm install --save body-parser
```

Now add this to your Express app:

```js
const bodyParser = require('body-parser');

app.post('/quotes', bodyParser.json(), (request, response) => {
  const newQuote = request.body;
  // Add your new quote to the quotes array
  // Then send back a 201 status
  // And also send the new quote as JSON in the response
});
```

---

# Exercise 3

Now figure out how to finish writing the route handler for the `POST` request.

Once you've finished that, jump back to your client-side JS and take the JSON response you get back from the server to append your new quote to the DOM.

Improve UX by clearing out the form inputs after the response comes back too!

---

# Remove a Quote

The last bit of functionality will be to delete an individual quote from the list. We'll submit our request from the client like this:

```js
const container = document.getElementById('quotes');

container.addEventListener('click', event => {
  const clickedEl = event.target;
  if (clickedEl.tagName === 'BUTTON') {
    const name = clickedEl.getAttribute('name');
    fetch(`/quotes/${name}`, {
      method: 'DELETE',
    }).then(() => {
      const blockquote = clickedEl.parentNode;
      blockquote.parentNode.removeChild(blockquote);
    });
  }
});
```

???

Explain to students that the URL for the `fetch()` command actually goes to `localhost:3300` – replace `/quotes/${name}` with `http://localhost:3300/quotes/${name}` to demonstrate this.

However, it is best practice to not commit code that contains the FQDN, so revert it after demonstrating this.

---

# DELETE Requests

Not surprisingly, you'll handle a `DELETE` request like this in Express:

```js
app.delete('/quotes/:name', (request, response) => {
  // Remove the quote from the quotes array
  // Send back the 200 status with the response
});
```

---

# Exercise 4

Finish writing the route handler for the `DELETE` request.

???

```js
app.delete('/quotes/:name', (request, response) => {
  const { name } = request.params;
  const newQuotes = quotes.filter(
    quote => quote.name.replace(/\s+/g, '-').toLowerCase() !== name,
  );
  response.status(200).send(newQuotes);
});
```

---

# Bonus Round: Clean-up

There's a way we can consolidate route code so that we're not making isolated calls to HTTP verb-related Express methods on the same routes.

Also, the `index.js` file in our Express app is getting a bit messy. Typically, you wouldn't define all of your routes for an app in this top-level file. There's a built-in solution in Express for that as well.

_Let's do some refactoring..._

---

# What We've Learned

- How to parse HTTP requests set to the Express server

---

template: inverse

# Questions?

{% endhighlight %}
