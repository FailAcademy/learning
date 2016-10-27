---
layout: lesson
title: The Sequelize ORM
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
- Unique Constraints
- Injection attack

---

## Exercise 1

Install the Sequelize ORM into your project using npm. Once you have it installed:

- Create a sub-directory called `database` inside your server folder.
- Create a file called `index.js` within the `database` directory and connect to a local PostgreSQL database
using the username and password you configured. **This database should be 'empty'. It must not have any schema (tables).** 

>>>>>>> master
---

## Exercise 2

Let's define our schema using Sequelize. Review the Sequelize documentation and create a schema for your project.
Be sure to *set up the appropriate relationships* between your models, and the apropriate constraints *(hint: UNIQUE)*,
using Sequelize conventions.

Once you've created your application's schema. Use Sequelize to insert some sample data into your database.

- How does Sequelize create tables on the connected database?
- How can we create some sample data, using Sequelize?
- How are relationships (Foriegn key) defined in Sequelize?
>>>>>>> master

---

## Exercise 3

**REST** & **CRUD** & Express Routes

First, work with a partner, we'll take up this discussion with the class afterwards:

- Define REST
- Define CRUD
- Define API (In the context of REST)

We're going to use the Express Router to set up *modular routes* in our Express server.
Here is the code for creating the express router:

```javascript
const router = express.Router({
  mergeParams: true
});
```

- Why should we set up 'modular' routes in our projects?
- What are the 2 types of routes we'll be creating in our projects?
- Is it important to differentiate between types of routes? If so how should this be done?

---

## Exercise 4

Now that you have some experience using both PostgreSQL queries to create your database, and Sequelize,
Discuss with your neighbour some of the benefits and drawbacks of each approach.

Specifically:

- Is the Sequelize ORM a 'developer friendly' library?
- What are the limitations of the Sequelize ORM, based on what you've seen so far.
- How are relationships defined using the Sequelize ORM, vs using raw SQL queries?

---

## Exercise 5

Go [here](https://www.codebashing.com/) and play the demo.

When you're finished, try to perfor a SQL injection attack on your database!
Make sure you can begin to answer the following questions:

- What is a SQL injection attack and how is it performed?
- What are some of the methods for protecting against inection attacks
  - On the client.
  - On the server.

---

## Lab Activity

In today's lab we'll add the ability to create posts in your project. This will be the first time we'll
implement code across the "Full Stack".

Ensure that the proper validation checks are in place in all layers of the stack.

---

## Additional Resources

- [PostgreSQL Constraints](https://www.postgresql.org/docs/9.6/static/ddl-constraints.html) documentation.
