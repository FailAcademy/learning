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
- [PostgreSQL VIEW](https://www.tutorialspoint.com/postgresql/postgresql_views.htm)
- [PostgreSQL Useful Functions](https://www.tutorialspoint.com/postgresql/postgresql_useful_functions.htm)

Complete Part 2 *Joins and Subqueries*, from [these exercises](https://pgexercises.com/questions/joins/).

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

Let's create our REDit database, if we have not done so yet, and insert some data:
Just insert the data for now. Don't worry about the schema and constrains, we'll add those later).

- 1 User
- 3 Weeks
- 6 Posts
- 4 Tags
- 9 Lessons

You can choose how to do this:

- Using the `psql` prompt
- Using the `psql` prompt and a .sql file
- Using a Postgres GUI: [pgAdmin4](https://www.pgadmin.org/)

---

## Exercise 2

Ensure your REDit database has the following relationships.

- User has many Posts.
- Tag belongs to many Posts.
- Post belongs to many Tags.
- Lesson belongs to Week.
- Week has many Lessons.
- Post belongs to Lesson.
- Lesson has many Posts.

**Some things to consider:**

- Why have we structured our database in this way?
- How are relationships between tables in out database created.
- How are 'many to many' relationships defined.
- What is the purpose of a primary key?
- What is the purpose of a foreign key?
- Are there performance implications we should consider when creating out relationships, and if so what are they?

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

We're nearly done setting up our database. The final aspect of creating our schema is adding constraints.
When creating constraints we need to consider things like:

- What fields in our tables should be unique?
- What are the specific types of data we're storing in each column?

Add the appropriate constraints to your REDit database.

---

## Lab Activity

How does the Sequelize ORM handle queries and relationships. Add Sequelze to your project.
When your project loads, create some *stub* data in your REDit database using the Sequelize API.

Once you've initialized your database instance, you'll add the commands to instre data, and create relationships
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

- [Sequelize ORM Documenation](http://docs.sequelizejs.com/en/v3/)
- [The Sequelize ORM in Practice](http://www.redotheweb.com/2013/02/20/sequelize-the-javascript-orm-in-practice.html)
