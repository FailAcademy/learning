---
layout: lesson
title: Intro to Databases with Postgres pt. II
slides: ['_slides/week-01/02-introducing-postgres2.md']
lesson_date: 2018-07-05
---

## Pre-work

Complete Part 2 _Joins and Subqueries_, from [these exercises](https://pgexercises.com/questions/joins/).

---

## Learning Objectives

- Describe the difference between "foreign key" and "primary key".
- Add constraints to our Postgres schema.
- Query a "link table"
- Connect our Express app to a local Postgres database.
- Query a local Postgres database from our Express app using `node-postgres`
- Implement Full-Text search.

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

We're nearly done setting up our database. To finish, we'll need to add constraints.
When creating constraints we need to consider things like:

- Which fields in our tables should be unique?
- What are the specific types of data we're storing in each column?
- Do we need to initialize any default values in our tables?
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

## Exercise 3

Let's write a query to aggregate data from the database:

- Write a query that returns all of the Items that are tagged with a given Tag id.

---

## Lab Activity

To ensure we're ready to take the next step building our application,
we'll need to ensure we have written all of the SQL queries we'll use in
our project application:

We've written some already. Here are the queries we'll need to write:

- Insert a user
- Insert a tag
- Insert an item with tags
- Get a user with a given email
- Get a user with a given ID
- Get all the items
- Get all the items owned by a specific user (ID)
- Get all the items for a specific user (ID) that are not borrowed
- Get all the items borrowed by a given user (ID)
- Get all the tags
- Get all tags for a given item (ID)

---

## Additional Resources

- [A Visual Explanation of SQL Joins](https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/)
