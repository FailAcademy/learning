---
layout: lesson
title: Introducing PostgreSQL II
lesson_date: 2017-07-25
---

## Pre-work

Please read over the following links:

- [PostgreSQL Constraints](https://www.tutorialspoint.com/postgresql/postgresql_constraints.htm)
- [PostgreSQL Useful Functions](https://www.tutorialspoint.com/postgresql/postgresql_useful_functions.htm)

Complete Part 2 *Joins and Subqueries*, from [these exercises](https://pgexercises.com/questions/joins/).

---

## Learning Objectives

- Describe the difference between 'Foreign key' and 'Primary key'.
- Get familiar with PostgreSQL functions.
- Write a simple validation function.
- Write a simple PostgreSQL View.
- Discover the Sequelize ORM.

---

## Keywords

- `PRIMARY KEY`
- `CONSTRAINT`
- `UNIQUE`
- Compound constraint
- `CASCADE`
- ORM

---

## Exercise 1

We're nearly done setting up our database. The final aspect of creating our schema is adding constraints.
When creating constraints we need to consider things like:

- What fields in our tables should be unique?
- What are the specific types of data we're storing in each column?
- How can we check if the data being sent by client applications for storage is valid?

Add the appropriate constraints to your project's database.

---
## Exercise 2

**More fun with queries**

Now that we have our data and relationships set up. Let's write some SQL queries.

- Write a query that returns all of the tags for a given Item.
- Write a query that returns the number of Items in the database.
- Write a query that returns the average number of Items which are tagged in your database.
- Write a query that returns the 5 newest Items.

---

## Exercise 4

Now that we have our data and relationships set up. Let's write some views that aggregate data from the database:

- Write a View that returns all of the Items that are tagged with a given tag name.

---

## Exercise 5

**CRUD** operations with JSON data.

In this exercise we'll store and retrieve JSON data from a local instance of PostgreSQL, by completing the following steps:
(Use the PostgreSQL command prompt or create a SQL file).
Using your `development` database:

1) Create a file name json-crud.sql. We'll use this file to add all of the commands we'll use in this exercise, and
execute them all at once by loading the file from the `psql` command prompt.

2) Create a table called `jsondata`

---

## Lab Activity

In today's lab we'll add a JavaScript ORM (Sequelize or node-postgres) to our application. 
We'll use this ORM library to fetch information from Postgres and return it. 

We'll use the ORM in our Graphql resolvers to retrieve and to save data into Postgres!

---

## Additional Resources

- [A Visual Explanation of SQL Joins](https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/)
- [Free PostgreSQL GUI](https://github.com/web-pal/DBGlass) build with JavaScript
- [Sequelize ORM Documenation](http://docs.sequelizejs.com/en/v3/)
- [The Sequelize ORM in Practice](http://www.redotheweb.com/2013/02/20/sequelize-the-javascript-orm-in-practice.html)
