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
- Create and query a 'linking table'
- Add constraints to our Postgres schema.
- Connect our Express app to a local Postgres database.
- Query a local Postgres database from Node/Express using ```node-postgres```
- Discover a new pattern of abstraction for dealing with methods that perform data-access.

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

Now that we have our data and relationships set up. Let's write a query to aggregate data from the database:

- Write a query that returns all of the Items that are tagged with a given Tag id.

---

## Exercise 5

Let's prepare our application to use Postgres. As usual, we'll rely on a pattern we can repeat as our 
application's list of features grows.

Create a folder called 'resources', if you have not already. Add a file called ```PostgresDB.js``` (This name is just a suggestion).

In that file add the following boilerplate: 

```
export default function(app) {

    const pg = new Pool();

}
```

You should be able to answer the following questions:

- Where does the app argument come from?
- What will we need to import?
- What will we need to export?


---

## Lab Activity

Now that we know how to use Postgres, it's time to integrate it with our project application.
In todays lab we'll connect our project to a local instance of Postgres!

Here's what we're going to do:

- Install ```node-postgres``` in our project. 
- Add the necessary environment variables to our Express server.
- Connect to our local instance of Postgres from our Node/Express server.
- Test the connection by performing the ```SELECT NOW()``` query.
- Create the necessary files & folders to hold our Postgres code. (Service pattern).
- Begin to write the methods for querying and retrieving information from Postgres, to use in our *GraphQL resolvers.*

---

## Additional Resources

- [A Visual Explanation of SQL Joins](https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/)
- [node-postgres](https://node-postgres.com/) Library
- [Express 4 API Docs](http://expressjs.com/tr/api.html)

