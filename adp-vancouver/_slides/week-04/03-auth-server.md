---
layout: slidedeck
title: Authentication
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Authentication

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1.  Discuss the state of security on the Web
2.  Encryption & Password storage
3.  Tokens & Cookies
4.  Create an authenticated endpoint with Express
5.  Implement Server-Side authentication in Boomtown

---

template: inverse

# Security on the Web

---

.left-column[

## Common security measures on the Web

]

.right-column[

- HTTPS
- VPN
- TOR / Onion router
- Encrypted Sessions
- High entropy passwords
- Security by obscurity
- Others?

  ]

---

# Encryption

The main tool for information security on the web is encryption. There are many different encryption
algorithms, each with its own set of tradeoffs.

**Vocabulary:**

- _'Encryption'_ is one tool used by _'Cryptographers'_ to secure communication 'in the presence of third parties called adversaries'.

.footnote[Source: [Wikipedia](https://en.wikipedia.org/wiki/Cryptography)]

---

# Turing and the Enigma

Alan Turing's famous real-world Turing machine, that eventually became the basis for all modern
computer systems, was designed to undo the work of German cryptographers!

---

# Exercise 1

"A" wants to communicate a number with "B", while "C" is listening in between. How can they securely communicate?
Together we'll use simple multiplication to create a mock version of a 'Shared Key' cryptographic exchange, based on the Diffie–Hellman key exchange algorithm!

**Note**: Prior to public key methods like Diffie–Hellman, cryptographic keys had to be transmitted in physical form such as [this World War II list](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange#/media/File:Enigma_keylist_3_rotor.jpg) of keys for the German Enigma cipher machine.
Diffie–Hellman key exchange.

.footnote[Source: [Wikipedia](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)]

---

# Exercise 2

HTTPS uses encryption to secure communication over the internet. How does it work?
Team up, visit a site and use Chrome's dev tools to find the Encryption algorithm being used.

Answer the following:

- What type of encryption scheme does HTTPS use?
- Do all HTTPS sites use the same encryption algorithm?

---

# Cryptographic Hash

Another form of Encryption that is common on the Web is called a **Cryptographic Hash**.
What are the important properties of a cryptographic hash?

---

template: inverse

# Storing Passwords

---

.left-column[

## Basic Rules for Storing Passwords in your Database

]

.right-column[

- Never store passwords as "Plaintext"
- Encrypt passwords using a cryptographic hash function
- Passwords with high entropy are best

]

---

![](/public/img/slide-assets/XKCD-password.png)

---

# Exercise 3

Hashing a password before storing it in a database is a basic security
precaution.

We're going to code a basic Express endpoint for handling signup requests, including the code for **hashing & salting
passwords**. This code will be a basic demonstration of the technique we'll use in our project.

- What is meant by "Salting"?

???

CODE ALONG

Instructor should code a basic Express server with a single endpoint that uses the `bcryptjs` package
to hash and salt an incoming password.

```js
// DEMO CODE EXAMPLE
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");

app.use("/signup", bodyParser.json(), async (req, res) => {
  const SALT = 10;
  const password = await bcrypt.hash(req.password, SALT);
  console.log(password);
  res.end();
});
```

---

# Exercise 4

**Signup mutation & resolver**

- In the GraphQL explorer, set up the signup mutation and provide variables for the username and password (and any other required field in your GraphQL Schema).
- Add the password column to your users table if you have not done so. Set the data type to `TEXT`
- Write the method for generating a hashed password. (See @TODO in `resolvers/auth.js`)

???

CODE ALONG

Instructor will need to introduce the following things:

- The `bcryptjs` library for hashing
- Ensure students have the app secret is defined.

Be sure to enable 'credentials' in the GraphQL explorer settings.
[Solution code](https://github.com/redacademy/boomtown/blob/master/server/api/resolvers/auth.js)

---

template: inverse

# Authentication with Cookies & JWT

---

# Cookies

Our project will use the browser's built-in mechanism for sending cookies to help us authenticate our users, once they are signed in.

Let's find out where cookies are stored by using your browser's dev-tools.

- What are the rules that the browser uses to determine when to include a cookie with a request?
- Where can we find information about cookies included in a request?

???

Answers:

- What are the rules that the browser uses to determine when to include a cookie with a request?
  - Cookies are sent to all domains using 'include' or to same origin using 'same-origin'
- Where can we find information about cookies included in a request?
  - Cookies can be found in the Application tab in Chrome, and also on the HTTP request headers

---

# Sending Cookies with Express

To configure Express to be able to read and send cookies with HTTP request/response, you'll
need to install the `cookie-parser` middleware. This has been done for you in the project starter.
Look in `config/application.js`.

[Express - Cookie Parser example code](https://github.com/expressjs/cookie-parser#example)

#### Warning!

- Cookies are a browser thing, and won't work on mobile, IoT

---

#Cookies and CORS

CORS stands for _Cross-Origin Resource Sharing_.

For our purposes, we'll need to configure Express to accept requests from domains other than the one where our Express server is running, while in development. This has been done for you in the project starter.
Look in `config/application.js`.

Notice the line `credentials: true`. This will configure Express' HTTP handlers to accept and send cookies (credentials) from domains we've permitted using our CORS settings.

What domains are we sharing our Express endpoints with?

---

# Exercise 5

**Update the signup resolver**

Now that we know how to send cookies, update the signup resolver to set a cookie on the response object.
To do this we'll need to pass the request object from Express to our resolvers using the context object provided by Apollo:

```js
const apolloServer = new ApolloServer({
  context: ({ req }) => {
    // .. etc
    return {
      req, //<- Add this!
      // ... etc
      pgResource
    };
  },
  schema
});
```

???

CODE ALONG

[Solution code](https://github.com/redacademy/boomtown/blob/master/server/api/resolvers/auth.js)

---

template: inverse

# Using JSON Web Tokens (JWT)

---

# JSON Web Tokens (JWT)

Like many technologies we've used in the course so far JWT is a specification, and it's up
to the developer how closely their implementation will follow the spec.

The Web Token system we're going to create is a very minimal implementation of the overall JWT spec.

[JSON Web Tokens Website](https://jwt.io/)

---

# What's in a Token?

Head over to [https://www.jsonwebtoken.io/](https://www.jsonwebtoken.io/) and play around with the demo token.
As you change the JSON, watch as the token changes.

What is the name of the resulting token in the language of cryptography?

???

Answer: Cryptographic Hash <br/>
Bonus question: What algorithm is used to hash the token? <br/>.
Answer: It depends! It's up to the developer!

Take a moment to discuss Hashing algorithms.

---

# What's in a Token?

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true,
  "jti": "b1d03cf6-7dea-457e-8e62-3fdeee53d98b",
  "iat": 1532464296,
  "exp": 1532467896
}
```

In this example token payload, what information do the `iat` and `exp` fields represent? <br/>
Why is this information important for security? <br/>

---

# JWT Advantages

1.  **Tokens are stateless**. No need for backend records. Each token contains all the data necessary to validate users.
2.  Cookies can be accessed by other domains. These can be used by other sites to identify who you are.
3.  JWTs can store any valid JSON, for example, storing the user's role &ndash; "admin", etc.

---

## Authenticating your Schema

To authenticate our GraphQL schema, we'll use a GraphQL custom directive.
Open `server/api/custom-directives.js` and follow along for the implementation.

When were done writing the logic for our directive, we'll apply it to the schema
as detailed in the `@TODO`.

???

CODE ALONG

[Solution Code](https://github.com/redacademy/boomtown/blob/master/server/api/custom-directives.js)

---

# Exercise 6

**Complete the signup resolver**

Now that we know how to send and receive an encrypted session token (JWT)
using cookies, finish coding the signup resolver.

Once complete, you should be able to sign up users from the GraphQL explorer!

---

# What We've Learned

1.  What is cryptography
2.  How shared key cryptography is used to secure information
3.  How to use cookies with Express
4.  Rules for storing passwords in your database
5.  How to generate stateless sessions using JWT
6.  How to authenticate GraphQL endpoints with JWT and Express

---

template: inverse

# Questions?

{% endhighlight %}
