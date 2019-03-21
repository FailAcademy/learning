---
layout: lesson
title: Intro to Databases with Postgres pt. III
slides: ['_slides/week-01/03-introducing-postgres-III.md']
lesson_date: 2019-04-10
---

## Learning Objectives

- Add constraints to our Postgres schema.
- Query a "link table"

---

## Keywords

- `PRIMARY KEY`
- `CONSTRAINT`
- `UNIQUE`
- Compound constraint

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

# What We've Learned

---

## Additional Resources

- [A Visual Explanation of SQL Joins](https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/)
