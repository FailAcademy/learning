---
layout: lesson
title: The Sequelize ORM
slides: ['_slides/week-04/04-validating-and-sanitizing.md']
lesson_date: 2016-10-20
---

## Pre-work

In todays class we'll be looking at the Sequelize ORM.
Please read over the [documentation](http://docs.sequelizejs.com/en/v3/) before today's class.

We'll also cover the Express Router. Please read over the [documentation](https://expressjs.com/en/guide/routing.html).
Specificall the section on `express.Router`.

---

## Learning Objectives

- Install the Sequelize ORM and connect to a local PostgreSQL database
- Define REST and CRUD
- Sanitize data submitted through a form
- Check for valid data in PostgreSQL when inserting!
- Hash a password before it is stored in PostgeSQL.
- Use the `fetch` API
- Use the Express router to create routes that will serve JSON
data from PostgreSQL via Sequelize to your client application.
- Write GET requests using fetch, as Redux Actions; get JSON from your Express server
and display it in your project
- Write POST requests using fetch to save data into a local PostgreSQL database
- Perform a SQL injection attack on your local PostgreSQL database

---

## Keywords

- REST
- CRUD
- ORM
- CORS
- `fetch`
- Check Constraints
- Unique Constraints
- Injection attack

---

## Exercise 1

<!--
    // INSTALL AND CONNECT SEQUELIZE
-->
---

## Exercise 2


<!--
    // CREATE SCHEMA WITH SEQUELIZE
    // DEFINE RELATIONSHIPS
    // ADD STUB DATA
-->

---

## Exercise 3


<!--
    // CREATE ROUTES MODULES
    // SET UP RESTFUL ROUTE HANDLER FOR CREATE POST
-->


---

## Exercise 4

<!--
    // SAVE DATA TO DATABASE USING FETCH / EXPRESS / SEQUELIZE
-->

---

## Exercise 5

Go [here](https://www.codebashing.com/) and play the demo.

When you're finished, try to perfor a SQL injection attack on your database!

Make sure you can begin to answer the following questions: <br/>
- What is a SQL injection attack and how is it performed?
- What are some of the methods for proteting agains inection attacks
  - On the client.
  - On the server.
  - Using PostgreSQL

---

## Lab Activity

In today's lab we'll add the ability to create posts in your project. This will be the first time we'll
implement code across the "Full Stack".

Ensure that the proer validation checks are in place at all levels of the stack.

---

## Additional Resources

- [PostgreSQL Constraints](https://www.postgresql.org/docs/9.6/static/ddl-constraints.html) documentation.
