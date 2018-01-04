---
layout: lesson
title: Intro to Databases with PostgreSQL
slides: ['_slides/week-04/01a-introducing-postgres.md']
lesson_date: 2018-01-29
---

## Pre-Work

Please read over the following: <br/>

[Codd's 12 Rules](https://www.tutorialspoint.com/dbms/dbms_codds_rules.htm) (Plain english explanation)<br/>
[Relational Database Normalization](https://www.quora.com/What-is-database-normalization-in-simple-terms-with-examples)

To start getting familiar with SQL syntax, complete Part 1, from [these exercises](https://www.pgexercises.com/questions/basic/).

---

## Learning Objectives

* Define what role a database plays in a software application.
* Explain how a relational database is structured.
* Install and set up an instance of PostgreSQL.
* Explain the difference between `TABLE` and `DATABASE`.
* Model data, and create tables to store it.
* Distinguish different data types in a SQL database context.
* Describe why a Schema is necessary.
* Create a simple Schema using SQL basic syntax.
* Write basic SQL queries to perform CRUD operations on a database.
* Add constraints to ensure consistent data.
* Implement an auto-incrementing id field.

---

## Keywords

* Relational database
* Normalization
* SQL
* CRUD
* `CREATE TABLE`
* `ALTER TABLE`
* `FOREIGN KEY`
* `INSERT`
* Data Types
* Scalar
* Schema

---

## Exercise 1

You should have a running instance of PostgreSQL running on your computer.

If you have not installed PostgreSQL yet, get the app installer here: https://postgresapp.com/

In this exercise, we'll go through the process of setting up a few new databases within it, to use throughout the rest of our time with PostgreSQL.

* Create 2 databases
  We'll use on of these databases to try out new things. Once we're comfortable, we'll apply
  what works to our `production` database.

* Use the `CREATE USER <name> WITH PASSWORD <pw>` command to create a new user and configure a password for each database.
  See [documentation](https://www.postgresql.org/docs/9.6/static/sql-createuser.html).

(This setup is meant to mock a real world database setup, and to give us the opportunity to become familiar with
creating and authorizing a new Database on your local machine. In a real production setting, our setup would be more complicated).

---

## Exercise 2

Populating your Relational Database.

* Use the `CREATE TABLE` command to set up some tables in our test database.
* Set the appropriate data-types for each column in our schema.

**Data Types** <br/>
What types of data do we need to model for our Boomtown application?

**Normalization** <br/>
How should we "Normalize" the data in our schema, according to the rules of Third Normal Form?

**Handling Id's** <br/>
Each entry into the database for each of the schema should have an id. This will be necessary for building
the relationships between data in out database.

* What data type is provided to implement and auto-incrementing id column?
* What are some important behaviors of an auto-incrementing column?

---

## Exercise 3

PostgreSQL is a 'Relational Database'. So far we have not specified any relationships between our data models.
Let's create relationships between the tables we created in the last lesson.

The relationships we'll create are defined as follows:

* 1 to 1 (1:1)
* 1 to many (1:n)
* Many to many (n:n)

To do this we'll need to add Foreign Key Constraints to some columns.

**Many to many relationships** :<br/>
Creating many to many relationships requires the creation of a "Link table".

* How are Link Tables implemented.
* Why are link tables necessary in order to define n:n relationships between columns in our database?
* WHat are the many to many relationships in our project application's database?

---

## Exercise 4

Installing and setting up PostgreSQL and a GUI for working with your database is complicated.
Take some time now to capture the steps for installing and setting up PostgreSQL on your local machine.

---

## Lab activity

Now that we've created our schema (table) for our project application, use the `INSERT` command to populate your data base with some mock data.

Add the following mock data to your database:

* At least 4 Items
* All of the Tags (Categories)

Ensure that you've set up the appropriate foreign key constraints!

---

## Additional Resources

* [Learn SQL - Codeacademy](https://www.codecademy.com/learn/learn-sql)
* [18+ Best Online Resources for Learning SQL and Database Concepts](http://www.vertabelo.com/blog/notes-from-the-lab/18-best-online-resources-for-learning-sql-and-database)
* [PostgreSQL Docs](http://www.postgresql.org/docs/9.6)
