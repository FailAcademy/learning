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
- Add `ON DELETE` rules to our foreign keys.
- Query a "link table"

---

## Keywords

- `PRIMARY KEY`
- `CONSTRAINT`
- `UNIQUE`
- Compound constraint
- `CASCADE`

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
- Write a query that returns how many tags, on average, items have.
- Write a query that returns all of the Items in your database sorted by most recently created.

---

# Exercise 3

What happens if we remove a row from our database that is referenced by it's foreign key?
Add the appropriate `ON DELETE` behavior for all of the foreign keys you defined.

Hint: Using the Postico GUI will prove much easier that the `psql` shell.

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

Use the _Postico_ app to connect to your local instance of Postgres. Once connected, use the
SQL query interface to test your queries. Once you've completed a query, save it to a `.sql` file.

At the end of today you should have `.sql` files containing all of the queries necessary for your project.

---

## Additional Resources

- [A Visual Explanation of SQL Joins](https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/)
