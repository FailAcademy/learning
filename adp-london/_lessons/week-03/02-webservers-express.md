---
layout: lesson
title: Creating a Web Server with Express
slides: ['_slides/week-02/02-webservers-express.md']
lesson_date: 2017-01-24
---

## Pre-Work

**TBA**

---

## Learning Objectives

- Make web requests to third-party web servers using Express.
- Define what a "RESTful" architectural style is application development.
- Use RESTful methods to communicate between an Express server and a web browser.
- Use at least one other NodeJS based Web Server.
- Understand REST and the methods GET, POST, PUT & DELETE.
- Setup RESTful endpoints using Express.
- Use fetch on the client to get data from the server.

---

## Keywords

- REST
- CRUD
- API
- AJAX
- fetch

---

## Exercise 1

**TBA**

---

## Exercise 2

Experiment with the faces API to make different faces from different URL end points.

`/avatars/face/:eyes/:nose/:mouth/:color`

See an example below: 

https://api.adorable.io/avatars/face/eyes4/nose3/mouth7/8e8895

*Note: color must be a hex value*

---

## Exercise 3

Load specific information about a pokemon using [Postman](https://www.getpostman.com/).

- Charizard's abilities
- the gender of Bulbasaur
- a url linking to a photo of Luvdisc

---

## Exercise 4

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

## Exercise 5

In a small group, attempt to implement a web server using one of the following Node web server frameworks:

1. [**Hapi**](http://hapijs.com/)
2. [**Koa**](http://koajs.com/)
3. [**Sails**](http://sailsjs.org/)

---

## Exercise 6

When you've successfully created a Web Server using one of the frameworks mentioned in the last exercise
deploy your site to the cloud using [Now](https://zeit.co/now)

---

## Exercise 7

Write the RESTful end points you planned in Exercise 3 using Express.

---

## Lab Activity

In today's lab, you will begin converting your REDit project to be a full-stack app&mdash;finally connecting the client and server.

You will create a RESTful backend using Express, to communicate data to your client through end points.

---

## Additional Resources

**TBA**
