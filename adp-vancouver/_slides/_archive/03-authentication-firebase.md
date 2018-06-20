---
layout: slidedeck
title: Web Authentication & Firebase Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Web Authentication & Firebase

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Quick Survey of Web Security
2. Review Some Important HTTP Status codes
2. Discuss Passwords, Hashing & Encryption
3. HTTP Basic Auth
4. Express Sessions & Cookies
5. JSON Web-Tokens (JWT)
6. Firebase Authentication (Using JWT)

---

.left-column[
  #### What Makes Web Security So Complex?
]

.right-column[
**Here's a list of things to consider:**

- Many "layers" that make up a web-page / web-application
means many "attack vectors".
- The Web uses many difficult to understand protocols and practices.
- A lot of humans making stuff for The Web means a lot of human error.
- Typically, new unproven technology is adopted quickly.
]

???

Challenge: 

Can you think of any other aspects?

- How many 'layers' can students come up with?
    - eg. OS, Browser, Network, Database, Programming Language...etc 
- How many protocols can students name?
    - eg. HTTP, tcp, udp, JSON, SSL, Encryption, Private key exchange...
- What kinds of human error? 
    - eg. Social engineering attacks
- What unproven technologies?

---

# Web Authentication

Today, our primary concern will be Authenticating users. To do this we'll need to understand a little more about:

- Password strength & storage
- HTTP security & status codes
- Server performance (Memory usage)
- Encryption
- Browser cookies

---

template: inverse

# HTTP Status Codes

???

Discuss: 

We know we're going to implement username password security so let's start from basics.
HTTP is the backbone of the web, so it makes sense to begin examining authentication methods here.

---

class: center, middle
# `401 UNAUTHORIZED`

The request has not been applied because it lacks valid authentication credentials for the target resource.

The server generating a 401 response MUST send a WWW-Authenticate header field containing at least one challenge applicable to the target resource.

[https://httpstatuses.com/401](https://httpstatuses.com/401)

---

class: center, middle

# `403 FORBIDDEN`

A server that wishes to make public why the request has been forbidden can describe that reason in the response payload.

If authentication credentials were provided in the request, the server considers them insufficient to grant access. The client SHOULD NOT automatically repeat the request with the same credentials. The client MAY repeat the request with new or different credentials. However, a request might be forbidden for reasons unrelated to the credentials.

[https://httpstatuses.com/403](https://httpstatuses.com/403)

---

# Passwords

![](/public/img/slide-assets/1960-MIT-mainframe.png)

This most common way of authenticating users on the web is with username / password.
This is an old method, stemming from early computer systems designed in the 1960's.

???

Challenge: 

How is the web like these 1960's mainframes?

Answer: 
- Old mainframes used 'dumb terminal' architecture. Users wishing to gain access would submit their credentials over a network to access computer time and storage on a central machine. The web is designed like this as well. As opposed to desktop applications which may not require a connection to a central system to do their job.

---

![](/public/img/slide-assets/XKCD-password.png)

---

class: center, middle
# Consider 

If users send their password and username from a webpage, over the internet, is it possible for someone to 'tap' the wires and intercept passwords on their way to the server?

**The answer is YES**

So, what is to be done?

---

template: inverse


#HTTP vs HTTPS

---

# HTTPS

Stands for 'Secure' HTTP. 

- Any information sent unencrypted over HTTP can be intercepted and seen by anyone possessing the right tools. 
- Encryption is generally never done on the client (Not by JavaScript anyways).
- The only way to be truly secure on the web is to use HTTPS, meaning if you're implementing a site that includes accounts (Users with passwords) you should deploy your site using HTTPS.

---

#HTTPS

Obtaining an HTTPS certificate use to be expensive and difficult.

*Thankfully services like [Let's Encrypt](https://letsencrypt.org/) are lowering the barrier to HTTPS significantly!*

HTTPS SSL and TLS are beyond the scope of this lesson, but you should gain some familiarity with these terms. (Hint: try google!)

---

template: inverse

# HTTP Basic Auth

---

# Exercise 1

Web browsers come with  built in interface for performing Basic HTTP authentication with a server. Let's examine the process.

**Instructions:**

- Create a folder containing and `index.js` file and an `index.html` file.
The `index.js` file will contain our Express server, the `index.html` file will contain our client application.

- Run `npm init -y && npm i -S express` inside your new folder to install Express.

???

Use the code contained here to walk students through implementing HTTP Basic auth: 
[https://github.com/redacademy/adp-exercise-solutions/tree/master/auth-express-basic](https://github.com/redacademy/adp-exercise-solutions/tree/master/auth-express-basic)


Make sure students observe / understand: 

- HTTP Status codes
- Network requests
- Query strings
- Express Middleware
- Where the database would come in if this was a real app


---

template: inverse

# User Sessions

---

# User Sessions

HTTP basic auth does not store any information related to the user's *session*. Put another way, HTTP basic auth knows about our browser, but does not know anything about us, and does not save any information about us while we are logged in.

We need an authentication mechanism that can store information about the user for the duration of their visit to our site (While they are signed in). This information is generally called a user's **session**. Our server will store some notion of all signed in users. We'll use the `express-session` library for this in our next exercise.

---

# Memory & Cookies


Before we implement sessions, we'll need to answer the following questions:

- Where should we store information about our user while they are signed in? 
- Since we are manually writing our authentication client-server interaction, how will the server determine which user
is making requests and if they are authenticated?

???

Answers: 

1) User information will be stored in memory on the server, for each logged in user a session id is generated.

2) Express sends a cookie with the session id to the client (browser). That id is sent back to the server on subsequent requests, and the server uses the id to retrieve information about the specific user from memory.

Be sure to pause and generate a discussion here. Having the student diagram things might be helpful. Consider using TPS or some other active learning exercise.


---

template: inverse

# Implementing User Sessions in Express

---

# Exercise 2

Let's create an Express server to serve our site and write the code to manually control authentication using user sessions. *Note: we'll send username and password details in the query-string of a url, this is just for demonstration, and should not be done in practice.*

**Instructions:**

- Create a folder and files like the last exercise.

- Run `npm init -y && npm i -S express express-session cookie-parser parseurl` inside your new folder to install Express and the rest of our project dependencies.

???

Use the code contained here to walk students through implementing HTTP Basic auth: https://github.com/redacademy/adp-exercise-solutions/tree/master/auth-express-session

Make sure students observe / understand:

- How cookies are sent and stored?
- What is the role of the 'secret' when generating a session?
- Security implications of http vs https cookies
- The specific contents of the session cookie generated by express
- Where data about the user is stored , ie in memory
    - Demo other session storage methods: https://github.com/expressjs/session#compatible-session-stores
- Review Express middleware

---

# Awesome

Congratulations, you've implemented your first Authentication server! It's not production-ready, but all the major pieces are in place. However, there are some potential issues associated with this approach.

Can you think of what issues might be? We'll address some of them in our next exercise.

???

The main issues being:

- Complexity (Adding memory management or a database simply for sessions)
- Security (If someone steals your session database...)

...etc


---

template: inverse

# Stateless Sessions with JWTs

---

class: center, middle

### What's a JWT?

JWT is short for JSON Web-Token!

---

class: center, middle

![](/public/img/slide-assets/no-idea-dog.png)

---

# What's a JWT

JWTs are easy to understand if you consider what we're trying to do with them: 

- We need to store information about a user's session.

- We don't want to store user session data on our server, because each user's session information takes up some memory. If we want to avoid keeping sessions in-memory, we'd introduce a database. We'd like to avoid both of these options.

- We want to store user session information in a convenient format, ie **JSON**.

---
# What's a JWT

So, a JWT is simply:


 *a JSON object containing information about our user's session (could be anything!), that is stored in the client's browser, using a cookie, and sent back and forth between client and server for the duration of the user's session!*

 - No state is stored on the server. Using JWTs and cookies is sometimes referred to as **stateless session** because no state is saved anywhere in our application.


Using JWTs we've accomplished the goals mentioned in the previous slide.

---
# Sessions Are Secrets

User information stored in a JWT is encoded (encrypted) using a hashing algorithm before being turned into a cookie and sent over the internet, thus protecting it from tampering. There are other ways that JWTs provide security which you can read about here: 

## [https://jwt.io/](https://jwt.io/)

In the next slide, we'll implemet **MVP** JWT authentication. It's secure, but there is a standard. Production systems using JWTs should adhere to the standard (mentioned above).

---

# Exercise 3

Let's implement stateless sessions using JWTs

**Instructions:**

- Create a folder and files like the last exercise. Also, add another HTML page `login.html` where we'll create a login form to submit our credentials!

- Run `npm init -y && npm i -S express jsonwebtoken cookie-parser body-parser` inside your new folder to install Express and the rest of our project dependencies.

???

- Make sure to examine the cookie as its being set and received. 
- Discuss the details of cookie / session expiration

This exercise uses a basic HTML form. This is a good point to stop and review HTML forms!

**In a lead up to our next exercise hilight where we would use firebase to lookup / verify the user instead of the hardcoded check in the exercise.*

---

template: inverse

# Firebase

---

# Firebase

Now that we've seen how to authenticate using JWT's, let's provide a database of users and passwords to verify and remove our hardcoded checks (Firebase!).
```js
const fbconfig = {
  apiKey: "1j3nk2j3n4k2jn342jk3n4k2j3n4k2j3n4k2jn34",
  authDomain: "express-auth-example.firebaseapp.com",
  databaseURL: "https://express-auth-example.firebaseio.com",
  projectId: "express-auth-example",
  storageBucket: "express-auth-example.appspot.com",
  messagingSenderId: "239847238746234"
};
```
Log into your firebase console, create an application called `express-auth-example` and find your web credentials (they look like the ones above)

---

# Firebase

You'll also want to manually create a user in the firebase system to authenticate!
Take a moment and create a user now, using the firebase console interface.

---

# Exercise 4

In this exercise we'll connect to Firebase, authenticate our users, and store their session in a JWT.

**Instructions:**

- Create files and folders identical to the previous exercise.

- Run `npm init -y && npm i -S express firebase jsonwebtoken cookie-parser body-parser` inside your new folder to install Express and the rest of our project dependencies.

- Add Firebase credentials to your client and server.

???

Be sure to talk about the firebase client library.

---

# Congratulations

You've implemented a real MVP authentication system using JWT and the Firebase PaaS. 
This is a great working MVP solution you can use when building future Express apps that require user accounts!

Note: We did not implement sign-up, but the logic should be self-evident with a little consideration.

Let's not waste any time. We'll use the approach we just covered in our project application. Let's dive in!

---

# Exercise 5

**Adding Authentication to our Project Application**

On the Client: 
- Create a file name ```firebase.js``` in our ```config``` folder
- Connect to Firebase using the appropriate configuration.

On the Server:
- Create a new resource file in our ```resources``` directory named ```FirebaseDB.js``.
- Connect to the Firebase database from our new resource file.

???

This should be done as a code along.

---
template: inverse

# Questions?

{% endhighlight %}
