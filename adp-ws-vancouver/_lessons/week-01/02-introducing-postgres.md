---
layout: lesson
title: Intro to Databases with Postgres pt. II
slides: ['_slides/week-01/02-introducing-postgres2.md']
lesson_date: 2019-04-10
---

## Pre-work

To start, get familiar with SQL syntax. Complete Part 1, from [these exercises](https://www.pgexercises.com/questions/basic/).

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

## Additional Resources

- [A Visual Explanation of SQL Joins](https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/)
