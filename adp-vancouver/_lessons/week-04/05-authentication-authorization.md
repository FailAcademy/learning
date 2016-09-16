---
layout: lesson
title: Authentication & Authorization
slides: []
lesson_date: 2016-10-21
---

## Lesson Objectives

- explain a high level overview of how authentication can work
- distinguish between sessions & cookies or tokens
- demonstrate session state using json web tokens
- use Express and Passport to save and authenticate user login and passwords
- justify your choice of hashing function for storing passwords
- use OAuth2 to handle user authentication with an external API service (such as Github, Facebook or Twitter)

---

## Keywords

- authentication
- public key encryption
- sessions
- cookies
- tokens
- hashing algorithm
- OAuth2

---

## Pre-Work

- [Public Key Encryption Explained](https://www.youtube.com/watch?v=3QnD2c4Xovk)
- [cookies vs. tokens](https://auth0.com/blog/cookies-vs-tokens-definitive-guide/)
- Read over [Passport.js docs](http://passportjs.org/docs)

---

## Exercise 1

Group activity on public key encryption.

---

## Exercise 2

Draw a diagram on how the client and server can handle authentication with either "tokens" or "cookies". Compare the advantages and disadvantages of each.

---

## Exercise 3

Create a demo using [JSON Web Tokens](https://jwt.io/introduction/)'s to demonstrate client authentication.

---

## Exercise 4

Create a demo using [passportjs](http://passportjs.org) for login and password authentication.

---

## Exercise 5

Think about storing passwords. Read: [Hashing Security](https://crackstation.net/hashing-security.htm). Which hashing algorithm should you use and why? Test your password hash at https://crackstation.net/.

---

## Exercise 6

Add OAuth2 authentication to your app with [Github](https://github.com/cfsghost/passport-github) and another [third party authentication service](http://passportjs.org/docs) of your choice.

---

## Lab activity

1. Setup login and password authentication in your app.
2. Setup JWT authentication in your app.
3. Setup OAuth2 authentication in your app.

---

## Additional Resources
- [Passport.js](http://passportjs.org/)
- [Introduction to JSON Web Tokens](https://jwt.io/introduction/)
- [Securing React-Redux Apps with JWT](https://medium.com/@rajaraodv/securing-react-redux-apps-with-jwt-tokens-fcfe81356ea0#.c0ausyxc9)
- [Scotch.io: Node.js & JWT tutorial](https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens)
- [Password Hashing](https://crackstation.net/hashing-security.htm)
