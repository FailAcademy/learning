# User Sessions and Accounts (3.5 hrs)

## Discussion (5)

1. ( client ) < ------ > (server)
  - what is public / private? (// only server can be private)
  - how does authentication work? Keywords: "session", "cookie", "token"

## Game (20)

1. Example: "A" wants to communicate a number with "B", but "C" is listening in between. How can they communicate?
(// answer: give each a secret shared number to each, say the shared number + your number)

2. Encryption paint game. Public and private key example.

3. Encryption as multiplication example. Public and private key example.


## Tokens vs. Cookies (20)

Show a "cookie" and a "token" from Chrome Dev Tools.

Group 1: draw an example of how cookies work.
Group 2: draw an example of how tokens work

Discussion: Which method would you prefer? Why?

JWT Advantages:

1. Tokens are stateless. No need for backend records. Each token contains all the data necessary to validate.
2. Cookies can be accessed by other domains. These can be used by other sites to identify who you are.
3. Cookies only store session id. These ids must be looked up to find the permissions. JWT's can store any valid JSON, For example, storing the users role "admin", etc.
4. JWT's are faster. Cookies store a session id which must be looked up.
5. Cookies are a browser thing, but JWT's work on mobile, IoT, etc.

JWT Disadvantages:

- size: JWT may be large. Each request to the client must include the JWT.

## JWT Demo (30)

Code: Setup a project with JWT's to authenticate the client.


## Login/Password Demo (40)

Code: Setup your project with login and password.

## On Storing Passwords (20)

Discussion: How should you store passwords in your database?

Read: [Hashing Security](https://crackstation.net/hashing-security.htm)
Discussion: Which **hashing algorithm** should you use? Why?

Test your password hash at https://crackstation.net/.

## Authentication as a Service (20)

Read: [An Introduction to OAuth2](https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2)
Discussion: How does OAuth2 work?

## OAuth2 Demo (40)

Code: Setup your project with OAuth2 authentication using Github.


## If Time: HTTPS (20)

1. Talk about HTTPS. What is the S? How do you enable it?
2. What is a "certificate authority"? Should we trust a certificate authority?
3. Talk about [Let's Encrypt](https://letsencrypt.org/).

## If Time: 2 Factor Auth
