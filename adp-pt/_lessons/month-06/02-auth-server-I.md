---
layout: lesson
title: Server-Side Authentication
slides: ['_slides/week-07/02-auth-server.md']
lesson_date: 2019-11-14
---

## Pre-Work

Take some time to check out the following:

- [JWT FTW WTF?](https://www.youtube.com/watch?v=4wOfjF1_j_0)
- [Apollo Authentication Docs](https://www.apollographql.com/docs/react/recipes/authentication.html)

---

## Learning Objectives

- Review Security on the Web
- Distinguish Authentication vs. Authorization.
- Create and "hash" a password

---

## Keywords

- Encryption
- Authentication
- Authorization

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

## Additional Resources

- [How Alan Turing Cracked the Enigma Code](https://www.iwm.org.uk/history/how-alan-turing-cracked-the-enigma-code)
- [How not to store passwords!](https://www.youtube.com/watch?v=8ZtInClXe1Q)
