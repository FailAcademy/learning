---
layout: lesson
title: Server-Side Authentication II
slides: ['_slides/month-06/04-auth-server-II.md']
lesson_date: 2019-11-16
---

## Pre-Work

Take some time to check out the following:

- [How does HTTPS Work?](https://blog.hartleybrody.com/https-certificates/)
- [A fun video about Shared Key encryption](https://www.youtube.com/watch?v=r4HQ8Bp-pfw)

---

## Learning Objectives

- Understand CORS (Server-Side).
- Create a secure cookie using Express.
- Build a stateless session using JWT.
- Authenticate HTTP requests using JWT.
- Authorize GraphQL queries using Apollo.

---

## Keywords

- CORS
- JWT
- Stateless Session
- Context
- Custom Directives

---

## Exercise 1

**Signup mutation & resolver**

- define a separate file for your authentication resolvers (login / signup) named `auth.js`
- In the GraphQL explorer, set up the signup mutation and provide variables for the username and password (and any other required field in your GraphQL Schema).
- Add the password column to your users table if you have not done so. Set the data type to `TEXT`
- Write the signup resolver which should check if the email exists, and hash the password before storing it.

---

## Exercise 2

**Update the signup resolver**

Now that we know how to send cookies, update the signup resolver to set a cookie on the response object.
To do this we'll need to pass the request object from express to our resolvers using the context object provided by Apollo:

```js
const apolloServer = new ApolloServer({
  context: ({ req }) => {
    return {
      req,
      pgResource,
    };
  },
  schema,
});
```

---

## Exercise 3

**Complete the signup resolver**

Now that we know how to send an recieve an encrypted session token (JWT)
using cookies, finish coding the signup resolver.

Once complete, you should be able to sign up users from the GraphQL explorer.

---

## Lab Activity (Next Class)

In today's lab, we'll complete our auth resolvers. By the end of this lab you should:

- Sign up from the GraphQL Explorer
- Login from the GraphQL Explorer
- Logout from the GraphQL Explorer

Aside from that, your `items` and `users` queries should return a 403/ApolloError if the there is no valid JWT cookie
present, or the cookie has expired.

---

## Additional Resources

- [Khan Academy: "Journey into Cryptography"](https://www.khanacademy.org/computing/computer-science/cryptography)
