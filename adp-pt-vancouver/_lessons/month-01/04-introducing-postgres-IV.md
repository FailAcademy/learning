---
layout: lesson
title: Intro to Databases with Postgres IV
slides: ['_slides/month-01/04-introducing-postgres-IV.md']
lesson_date: 2019-06-13
---

## Learning Objectives

- Describe the difference between "foreign key" and "primary key".
- Add `ON DELETE` rules to our foreign keys.

---

## Keywords

- `CASCADE`

---

# Exercise 1

What happens if we remove a row from our database that is referenced by it's foreign key?
Add the appropriate `ON DELETE` behavior for all of the foreign keys you defined.

Hint: Using the Postico GUI will prove much easier that the `psql` shell.

---

## Lab Activity (Next Class)

Populating your Relational Database.

- Use the `CREATE TABLE` command to set up some tables in our test database.
- Set the appropriate data-types for each column in our schema.

**Data Types** <br/>
What types of data do we need to model for our application?

**Normalization** <br/>
How should we "Normalize" the data in our schema, according to the rules of Third Normal Form?

**Handling Ids** <br/>
Each entry into the database for each of the schema should have an id. This will be necessary for building
the relationships between data in out database.

- What data type is provided to implement and auto-incrementing id column?
- What are some important behaviors of an auto-incrementing column?

---

## Lab Activity #2 (Following Next Class)

**Task 1**

- To ensure we're ready to take the next step building our application,
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

**Task 2**

- Complete Part 2 _Joins and Subqueries_, from [these exercises](https://pgexercises.com/questions/joins/).

---

## Additional Resources

- [Postgres Docs](http://www.Postgres.org/docs/9.6)
