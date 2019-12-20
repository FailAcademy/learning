---
layout: lesson
title: Server + Client Authentication
slides: ["_slides/week-04/03-auth-server.md"]
lesson_date: 2020-2-6
---

## Pre-Work

Take some time to check out the following:

- [How does HTTPS Work?](https://blog.hartleybrody.com/https-certificates/)
- [JWT FTW WTF?](https://www.youtube.com/watch?v=4wOfjF1_j_0)
- [Apollo Authentication Docs](https://www.apollographql.com/docs/react/recipes/authentication.html)
- [A fun video about Shared Key encryption](https://www.youtube.com/watch?v=r4HQ8Bp-pfw)

---

## Learning Objectives

- Review Security on the Web
- Distinguish Authentication vs. Authorization.
- Understand CORS (Server-Side).
- Create a secure cookie using Express.
- Build a stateless session using JWT.
- Authenticate HTTP requests using JWT.
- Authorize GraphQL queries using Apollo.

---

## Keywords

- Encryption
- Authentication
- Authorization
- CORS
- JWT
- Stateless Session
- Context
- Custom Directives

---

## Exercise 1

"A" wants to communicate a number with "B", while "C" is listening in between. How can they securely communicate?
Together we'll use simple multiplication to create a mock version of a 'Shared Key' cryptographic exchange, based on the Diffie–Hellman key exchange algorithm!

**Note**: Prior to public key methods like Diffie–Hellman, cryptographic keys had to be transmitted in physical form such as [this World War II list](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange#/media/File:Enigma_keylist_3_rotor.jpg) of keys for the German Enigma cipher machine.
Diffie–Hellman key exchange.

---

## Exercise 2

HTTPS uses encryption to secure communication over the internet, How does it work.
Team up visit a site and use chrome's dev tools to find the Encryption algorithm being used.

Answer the following:

- What type of encryption scheme does HTTPS use?
- Do all HTTPS sites use the same encryption algorithm?

---

## Exercise 3

Hashing a password before storing it in a database is a basic security
precaution.

We're going to code a basic Express endpoint for handling signup requests, including the code for hashing
passwords. This code will be a basic demonstration of the technique we'll use in our project.

---

## Exercise 4

**Signup mutation & resolver**

- define a separate file for your authentication resolvers (login / signup) named `auth.js`
- In the GraphQL explorer, set up the signup mutation and provide variables for the username and password (and any other required field in your GraphQL Schema).
- Add the password column to your users table if you have not done so. Set the data type to `TEXT`
- Write the signup resolver which should check if the email exists, and hash the password before storing it.

---

## Exercise 5

**Update the signup resolver**

Now that we know how to send cookies, update the signup resolver to set a cookie on the response object.
To do this we'll need to pass the request object from express to our resolvers using the context object provided by Apollo:

```js
const apolloServer = new ApolloServer({
  context: ({ req }) => {
    return {
      req,
      pgResource
    };
  },
  schema
});
```

---

## Exercise 6

**Complete the signup resolver**

Now that we know how to send an recieve an encrypted session token (JWT)
using cookies, finish coding the signup resolver.

Once complete, you should be able to sign up users from the GraphQL explorer.

---

## Lab Activity

In today's lab, we'll complete our auth resolvers. By the end of this lab you should:

- Sign up from the GraphQL Explorer
- Login from the GraphQL Explorer
- Logout from the GraphQL Explorer

Aside from that, your `items` and `users` queries should return a 403/ApolloError if the there is no valid JWT cookie
present, or the cookie has expired.

---

## Additional Resources

- [Khan Academy: "Journey into Cryptography"](https://www.khanacademy.org/computing/computer-science/cryptography)
- [How Alan Turing Cracked the Enigma Code](https://www.iwm.org.uk/history/how-alan-turing-cracked-the-enigma-code)
- [How not to store passwords!](https://www.youtube.com/watch?v=8ZtInClXe1Q)
