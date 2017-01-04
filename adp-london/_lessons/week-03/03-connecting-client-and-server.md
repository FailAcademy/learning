---
layout: lesson
title: Connecting Client & Server
slides: ['_slides/week-03/02-rest.md']
lesson_date: 2017-01-25
---

## Pre-Work

- Be prepared to discuss the question "What is REST"?

---

## Learning Objectives

- Understand REST and the methods GET, POST, PUT & DELETE
- Setup RESTful endpoints using Express
- Use fetch on the client to get data from the server 

---

## Keywords

- REST
- CRUD
- API
- AJAX
- fetch

---

## Exercise 1

Experiment with the faces API to make different faces from different URL end points.

`/avatars/face/:eyes/:nose/:mouth/:color`

See an example below: 

https://api.adorable.io/avatars/face/eyes4/nose3/mouth7/8e8895

*Note: color must be a hex value*

---

## Exercise 2

Load specific information about a pokemon using [Postman](https://www.getpostman.com/).

- Charizard's abilities
- the gender of Bulbasaur
- a url linking to a photo of Luvdisc

---

# Exercise 3

Plan out end points for your Worst Pokemon app.

Which of the following will you need and why?

###/pokemon
GET
POST
PUT
DELETE

###/pokemon/(:id)
GET
POST
PUT
DELETE

---

## Exercise 4

Write the RESTful end points you planned in Exercise 3 using Express. 

---

## Lab Activity

In today's lab, you will begin converting your REDit project to be a full-stack app&mdash;finally connecting the client and server. 

You will create a RESTful backend using Express, to communicate data to your client through end points.

---

## Additional Resources

- [Learn REST - A Tutorial](http://www.restapitutorial.com/)
- [Scotch.io: Build a RESTful API with Express](https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4)
- [CodeSchool Express](https://www.codeschool.com/courses/building-blocks-of-express-js)
