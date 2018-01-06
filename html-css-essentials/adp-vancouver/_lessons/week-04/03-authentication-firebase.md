---
layout: lesson
title: Web Authentication & Firebase
lesson_date: 2018-02-01
slides: ['_slides/week-04/03-authentication-firebase.md']
---

## Pre-Work

Sign up to Firebase!

* [https://firebase.google.com/](https://firebase.google.com/)

Prior to class, please read:

* [What is Firebase?](https://howtofirebase.com/what-is-firebase-fcb8614ba442)

Please create a new project to hold the code-along examples from today's lesson.
You should create 4 folders within the project, 1 for each exercise.

---

## Learning Objectives

* Outline the common approaches to authentication and security on the Web.
* Describe the process of "Hashing", and it's related algorithms.
* Explain what Firebase is and take a tour of its many features.
* Use Firebase to authenticate users in Express, using JWT

---

## Keywords

* SSL
* Authentication
* Session
* Cookies
* Hashing algorithm (Hash)

---

## Exercise 1

**HTTP Basic Authentication**

Your web browser comes with a default authentication mechanism known as "HTTP Basic Authentication".
In this exercise we'll implement HTTP Basic authentication, and examine the associated HTTP requests.

You should be able to answer the following questions:

* Is HTTP Basic authentication encrypted?
* How does HTTP Basic authentication maintain a session once a user has logged in?

---

## Exercise 2

**Session / Cookie Based Authentication**

Using browser cookies is a common way to maintain a users session information. In this exercise we'll implement
user sessions in Express using the `express-sessions` library.

You should be able to answer the following questions:

* Where is the user's session information stored?
* What information does the user's session contain?
* How does HTTP Basic authentication maintain a session once a user has logged in?
* What are the potential downsides of this approach to user sessions?

---

## Exercise 3

**JWT (JSON Web-Token) Authentication**

You should be able to answer the following questions:

* In general, what makes JWT's preferable vs `express-sessions`?
* What information does the user's session contain?
* Where are JWT's stored?
* How are JWT's secured from interception and tampering?
* When a JWT is issued, how long does it remain valid?

---

## Exercise 4

**Authenticating users in Express with Firebase and JWT**.

In this exercise we'll use the Firebase PaaS as our authentication service.
We'll connect to Firebase, authenticate our users, and store their session in a JWT.

---

## Exercise 5

Add Firebase to our client & server applications.

On the Client:

* Create a file name `firebase.js` in our `config` folder
* Connect to Firebase using the appropriate configuration.

On the Server:

* Create a new resource file in our `resources` directory named ``FirebaseDB.js`.
* Connect to the Firebase database from our new resource file.

You should be able to answer the following questions:

* Can we access Firebase data from our server application?
* Is it secure to expose the Firebase connection variables in your client code?
* How should firebase environment variables be stored in your server code?
* How does Firebase store information?
* How do we access information in Firebase rom our client application?

---

## Lab Activity

In today's Lab we'll use data from Firebase in our project application, and examine how we can use Firebase's authentication and user management systems!

Here's what we're going to do:

* Create a resolver for handling fetching of user data.
* Add methods for fetching user data to use in our GraphQL Reslovers.
* Test logging-in and logging-out on the client, using Firebase's built in methods.
* Use Firebase's client-side auth event listener (`onAuthStateChanged`) to dispatch 'logged in' and 'logged out' state to our Redux Store
* Put the pieces together:
  * Build the login/signup form, using Redux-Form.
  * Authenticate users to your application!

You should be able to answer the following questions:

* What kind of authentication method does Firebase use to initialize an authenticated session?
* Where can this information be found on the client?
* How can we use Firebase to prevent un-authenticated access to your graphql api?
* Should we store user-profile information in Firebase?
* How do we relate users in Firebase with their items in Postgres?

---

## Additional Resources

* [Who invented the password? (Google Search)](https://www.google.ca/search?q=who+invented+the+password&oq=who+invented+the+password&aqs=chrome..69i57j0l4.3088j0j9&sourceid=chrome&ie=UTF-8)
* [Is XKCD right about password strength?](https://security.stackexchange.com/questions/62832/is-the-oft-cited-xkcd-scheme-no-longer-good-advice)
* [Let's Encrypt](https://letsencrypt.org/)
* [How Secure is 256 bit Encryption?](https://www.youtube.com/watch?v=S9JGmA5_unY)
* [https://jwt.io/](https://jwt.io/)
* [Firebase Auth](https://firebase.google.com/docs/auth/)
* [Password Hashing](https://crackstation.net/hashing-security.htm)
