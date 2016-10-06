---
layout: lesson
title: Intro to Databases with SQL
slides: ['_slides/week-04/01-intro-database-sql.md']
lesson_date: 2016-10-17
---

## Pre-Work

Watch this video prior to class for some background on SQL databases:

- [What is Database & SQL?](https://www.youtube.com/watch?v=FR4QIeZaPeM)

You need to download and install PostgrSQL prior to today's lessons:

- [PostgreSQL - Downloads](https://www.postgresql.org/docs/9.6/static/installation.html)

Read about some of the reasons you'll learn about PostgreSQL in this class:

- [PostgreSQL Advantages](https://www.postgresql.org/about/advantages/)

Complete Part 1 *Simple SQL Queries*, from [these exercises](https://www.pgexercises.com/questions/basic/).

---

## Learning Objectives

- Define what role a database plays in an application.
- Explain how a relational database is structured.
- Install and set up an instance of PostgreSQL.
- Explain the difference between `TABLE` and `DATABASE`.
- Write basic SQL queries to perform CRUD operations on a database.
- Write basic SQL queries to perform CRUD operations on a JSON data.
- Write SQL queries in a SQL file and execute commands form the `psql` prompt.
- Use Aggregate functions to perform operations on a PostgreSQL dataset.
- Describe full-text search.
- Describe 'Fuzzy Search' and perform a fuzzy search on a PostgreSQL dataset.

---

## Keywords

- Relational database
- SQL
- Table
- Fields
- Cells
- Primary Key
- Fuzzy search
- Full text search
- CRUD
- ACID

---

## Exercise 1

You should have a running instance of PostgreSQL running on your computer. In this lab activity,
we'll go through the process of setting up a few new databases within it, to use throughout the rest of our
time with PostgreSQL.

- Create 2 databases, one called `development`, and one called `production`.
We'll use the development database to try out new things. Once we're comfortable, we'll apply
what works to our `production` database.

- Use the `CREATE USER <name> WITH PASSWORD <pw>` command to create a new user and configure a password for each database.
See [documentation](https://www.postgresql.org/docs/9.6/static/sql-createuser.html).

(This setup is meant to mock a real world database setup, and to give us the opportunity to become familiar with
creating and authorizing a new Database on your local machine. In a real production setting, our setup would be more complicated).

<!-- XXX TODO XXX

INSERT
UPDATE
DROP TABLE
DROP DATABASE

-->

---

## Exercise 2

**CRUD** operations.

In this exercise we'll store and retrieve data from our new PostgreSQL database instance!
Using your `development` database:

1) Log into the PostgreSQL command prompt using the `psql` command.

2) Create a new table called `tabledata`

2) Add some data to your new database.

---

## Exercise 3

**CRUD** operations with JSON data.

In this exercise we'll store and retrieve JSON data from a local instance of PostgreSQL, by completing the following steps:
(Use the PostgreSQL command prompt or create a SQL file).
Using your `development` database:

1) Create a file name json-crud.sql. We'll use this file to add all of the commands we'll use in this exercise, and
execute them all at once by loading the file from the `psql` command prompt.

2) Create a table called `jsondata`


---

## Exercise 4

Let's query our data.

<!--
XXX TODO XXX

SELECT
FROM
WHERE

-->

---

## Exercise 5

To learn about fuzzy search, we'll follow this [example tutorial](http://rachbelaid.com/postgres-full-text-search-is-good-enough/).

---

## Lab Activity

In today's lab we'll set up a database to use with the REDit project. You'll need to: <br/>
Create a local database and database user for your REDit project. Connect to the database from your Express server
using the user and password you created.

You'll have 2 options for adding PostgreSQL connectivity to your application: <br/>

- [Sequelize OMR]([Sequelize ORM Documenation](http://docs.sequelizejs.com/en/v3/)
This is a full featured ORM, We'll learn more about ORM's in the following lesson.

- [node-postgres](https://github.com/brianc/node-postgres)
This library allows you to write SQL queries from your JavaScript code, and does not expose and ORM.


---

## Additional Resources

- [Learn SQL - Codeacademy](https://www.codecademy.com/learn/learn-sql)
- [18+ Best Online Resources for Learning SQL and Database Concepts](http://www.vertabelo.com/blog/notes-from-the-lab/18-best-online-resources-for-learning-sql-and-database)
- [A Visual Explanation of SQL Joins](https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/)
- [PostgreSQL Docs: Full Text Search](http://www.postgresql.org/docs/9.1/static/textsearch-indexes.html)
