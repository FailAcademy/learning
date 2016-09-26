---
layout: lesson
title: Authentication & Authorization
slides: ['_slides/week-04/05-authentication-authorization.md']
lesson_date: 2016-10-21
---

## Pre-Work

Prior to class, please read:

- [Public Key Encryption Explained](https://www.youtube.com/watch?v=3QnD2c4Xovk)
- [cookies vs. tokens](https://auth0.com/blog/cookies-vs-tokens-definitive-guide/)
- [Passport.js docs](http://passportjs.org/docs)

---

## Learning Objectives

- Explain a high level overview of how authentication can work.
- Distinguish between sessions and cookies or tokens.
- Demonstrate session state using JSON web tokens.
- Use Express and Passport to save and authenticate user login and passwords.
- Justify a particular type of hashing function for storing passwords.
- Use OAuth2 to handle user authentication with an external API service (such as Github, Facebook or Twitter).

---

## Keywords

- Authentication
- Public key encryption
- Sessions
- Cookies
- Tokens
- Hashing algorithm
- OAuth2

---

## Exercise 1

*Exercise details TBA.*

---

## Exercise 2

Draw a diagram on how the client and server can handle authentication with either "tokens" or "cookies". Compare the advantages and disadvantages of each.

---

## Exercise 3

Create a demo using [JSON Web Tokens](https://jwt.io/introduction/)'s to demonstrate client authentication.

---

## Exercise 4

Create a demo using [Passport](http://passportjs.org) for login and password authentication.

---

## Exercise 5

Think about storing passwords...

First read through [Hashing Security](https://crackstation.net/hashing-security.htm). Which hashing algorithm should you use and why? Test your password hash at [CrackStation](https://crackstation.net/).

---

## Exercise 6

Add OAuth2 authentication to your app with [Github](https://github.com/cfsghost/passport-github) and another [third-party authentication service](http://passportjs.org/docs) of your choice.

---

## Lab Activity

In today's lab, please set up the following in your REDit app:

1. Login and password authentication
2. JWT authentication
3. OAuth2 authentication

---

## Additional Resources

- [Passport](http://passportjs.org/)
- [Introduction to JSON Web Tokens](https://jwt.io/introduction/)
- [Securing React-Redux Apps with JWT](https://medium.com/@rajaraodv/securing-react-redux-apps-with-jwt-tokens-fcfe81356ea0#.c0ausyxc9)
- [Scotch.io: Node.js & JWT tutorial](https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens)
- [Password Hashing](https://crackstation.net/hashing-security.htm)
