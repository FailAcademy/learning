---
layout: slidedeck
title: Authentication From Scratch (Server) I Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Authentication From Scratch (Server) I

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1.  Discuss the state of security on the Web
2.  Encryption & Password storage

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
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

app.use('/signup', bodyParser.json(), async (req, res) => {
  const SALT = 10;
  const password = await bcrypt.hash(req.password, SALT);
  console.log(password);
  res.end();
});
```

---

# What We've Learned

1.  What is cryptography
2.  How shared key cryptography is used to secure information
3.  Rules for storing passwords in your database

---

template: inverse

# Questions?

{% endhighlight %}
