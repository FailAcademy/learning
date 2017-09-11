---
layout: lesson
title: Authentication with Firebase
lesson_date: 2017-07-27
---

## Pre-Work

Sign up to Firebase!
- [https://firebase.google.com/](https://firebase.google.com/)

Prior to class, please read:

- [Public Key Encryption Explained](https://www.youtube.com/watch?v=3QnD2c4Xovk)
- [cookies vs. tokens](https://auth0.com/blog/cookies-vs-tokens-definitive-guide/)

---

## Learning Objectives

- Explored the Diffe-Hellman key exchange algorithm
- Outline the common approaches to authentication and security on the Web.
- Explain what Firebase is and take a tour of its many features.
- Use Firebase to save and authenticate users and their associated profiles.

---

## Keywords

- Authentication
- Public key encryption
- Sessions
- Cookies
- Tokens
- Hashing algorithm (Hash)

---

## Exercise 1

**The Diffie Hellman Key Exchange**

We'll examine the process of shared public key encryption, as it relates to Web security, using the Diffe-Hellman key exchange as an example!

- You'll be required to diagram the process yourself, and perform the calculations used in this famous and very useful algorithm.    

---

## Exercise 2

**Get started with Firebase**

Create a new project in your Firebase account and create 2 new users using the Firebase Console interface.

---

## Exercise 3

Add Firebase to our client & server applications.

On the Client: 
- Create a file name ```firebase.js``` in our ```config``` folder
- Connect to Firebase using the apropriate configuration.

On the Server:
- Create a new resource file in our ```resources``` directory named ```FirebaseDB.js``.
- Connect to the Firebase database from our new resource file.


You should be able to answer the following questions:

- Is it secure to expose the Firebase connection variables in your client code?
- How should firebase environment variables be stored in your server code?
- How does Firebase store information?
- How do we acces information in Firebase rom our client application?
- Can we access Firebase data from our server application?

---

## Lab Activity

In today's Lab we'll use data from Firebase in our project application, and examine how we can use Firebase's authentication and user management systems!

Here's what we're going to do:

- Create a resolver for handling fetching of user data.
- Add methods for fetching user data to use in our GraphQL Reslovers.
- Test logging-in and logging-out on the client, using Firebase's built in methods.
- Use Firebase's client-side auth event listener (```onAuthStateChanged```) to dispatch 'logged in' and 'logged out' state to our Redux Store
- Put the pieces together: 
    - Build the login/signup form, using Redux-Form. 
    - Authenticate users to your application!

You should be able to answer the following questions:

- What kind of authentication method does Firebase use to initialte and authenticated session?
- Where can this information be found on the client?
- How can we use Firebase to prevent un-authenticated access to user records?
- How should we store user-profile information in Firebase?
- How do we relate users in Firebase with their items in Postgres?

---

## Additional Resources

- [Firebase Auth](https://firebase.google.com/docs/auth/)
- [Password Hashing](https://crackstation.net/hashing-security.htm)
