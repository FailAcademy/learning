---
layout: lesson
title: Validating Data with Schema
slides: ['_slides/week-04/02-schema.md']
lesson_date: 2016-10-18
---

## Pre-work

Please read over the following links:

- [Postgres Data Types](https://www.tutorialspoint.com/postgresql/postgresql_data_types.htm)
- [PostgreSQL Schema](https://www.tutorialspoint.com/postgresql/postgresql_schema.htm)
- [PostgreSQL Constraints](https://www.tutorialspoint.com/postgresql/postgresql_constraints.htm)
- [PostgreSQL Useful Functions](https://www.tutorialspoint.com/postgresql/postgresql_useful_functions.htm) 

---

## Learning Objectives

- Distinguish different data types in a SQL database context.
- Describe why a Schema is necessary.
- Create a simple Schema using PostgreSQL basic syntax.
- Write a simple Join using the JOIN clause.
- Add constraints to ensure consistent data.
- Describe the difference between 'Foreign key' and 'Primary key'.
- Get familiar with PostgreSQL functions.
- Write a simple validation function.
- Write a simple PostgreSQL View.
- Discover the Sequelize ORM.

---

## Keywords

- Data Types
- Schema
- Constraints
- Relations
- Primary Key
- Foreign Key
- JOIN
- View
- ORM

---

## Exercise 1

<!-- XXX TODO XXX
Create the schema and data types for REDit
-->

---

## Exercise 2

<!-- XXX TODO XXX
Create the relationships between data, discuss:
- Primary Key
- Foriegn Key
- One to One
- One to many
- Many to many
-->

---

## Exercise 3

**More fun with queries**

Now that we have our data and relationships set up. Let's write some SQL queries:

- Write a query that returns all of the tags for a given post.
- Write a query that returns the number of posts in the database.
- Write a query that returns the average number of votes on posts in your database.
- Write a query that returns the 5 newest posts.

---

## Exercise 4

Now that we have our data and relationships set up. Let's write some views that aggregate data from the database:

- Write a View that returns all of the posts for a tag with a given name.

---

## Lab Activity

How does the Sequelize ORM handle queries and relationships. Add Sequelze to your project.
When your project loads, create some *stub* data in your REDit database using the Sequelize API.

Once you've initialized your database instance, you'll add the commands to instre data, and create relationships
inside of the `sync` method, exposed by the instance, like this:

```js

db.sync({ force: true }).then(() => {

  // Your Sequelize code here.

})

```

The `{ force: true }` tells Sequelize to destroy and recreate the database each time `nodemon` reloads your server.
This is ideal for development. We'll remove this code and the *stubbed data* when it comes time to deploy our app!

---

## Additional Resources

- [Sequelize ORM Documenation](http://docs.sequelizejs.com/en/v3/)
- [The Sequelize ORM in Practice](http://www.redotheweb.com/2013/02/20/sequelize-the-javascript-orm-in-practice.html)
