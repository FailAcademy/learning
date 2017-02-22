---
layout: lesson
title: Introducing PostgreSQL II
lesson_date: 2016-10-19
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

Set up a link table called user post votes and define a **compound primary key** to ensure that ensure that users can only vote for one post once.

Answer the following questions when describing foreign key constraints: </br>
- What is the difference between `SET NULL`, `NO ACTION` & `CASCADE` when specifying 
foreign key constraints?
- What are some use cases for each?

*Hint:*
- If we delete users from the database, do we also want to delete records of what posts they voted for?

---

## Exercise 3

**More fun with queries**

Now that we have our data and relationships set up. Let's write some SQL queries.

- Write a query that returns all of the tags for a given post.
- Write a query that returns the number of posts in the database.
- Write a query that returns the average number of votes on posts in your database.
- Write a query that returns the 5 newest posts.

---

## Exercise 4

Now that we have our data and relationships set up. Let's write some views that aggregate data from the database:

- Write a View that returns all of the posts that are tagged tag with a given tag name.

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

How does the Sequelize ORM handle queries and relationships. Add Sequelze to your project.
When your project loads, create some *stub* data in your REDit database using the Sequelize API.

Once you've initialized your database instance, you'll add the commands to insert data, and create relationships
inside of the `sync` method, exposed by the instance, like this:

```js
db.sync({ force: true }).then(() => {

  // Your Sequelize code here.

});
```

The `{ force: true }` tells Sequelize to destroy and recreate the database each time `nodemon` reloads your server.
This is ideal for development. We'll remove this code and the *stubbed data* when it comes time to deploy our app!

---

## Additional Resources

- [A Visual Explanation of SQL Joins](https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/)
- [Free PostgreSQL GUI](https://github.com/web-pal/DBGlass) build with JavaScript
- [Sequelize ORM Documenation](http://docs.sequelizejs.com/en/v3/)
- [The Sequelize ORM in Practice](http://www.redotheweb.com/2013/02/20/sequelize-the-javascript-orm-in-practice.html)
