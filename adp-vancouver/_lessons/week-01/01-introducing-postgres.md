---
layout: lesson
title: Intro to Databases with Postgres
slides: ['_slides/week-01/01-introducing-postgres.md']
lesson_date: 2019-07-03
---

## Pre-Work

Install Postgres, get the app installer here: [https://postgresapp.com/](https://postgresapp.com/) <br/>
Install the Postico Free Postgres GUI form here: [https://eggerapps.at/postico/](https://eggerapps.at/postico/) <br/>

What makes RBDMS systems so useful? <br/>
[Codd's 12 Rules](http://www.idc-online.com/technical_references/pdfs/information_technology/Codd_12_Rules.pdf)

How does Postgres actually store you data? <br/>
http://rachbelaid.com/introduction-to-postgres-physical-storage/

---

## Learning Objectives

- Define what role a database plays in a software application.
- Explain how a relational database is structured.
- Install and set up an instance of Postgres.
- Explain the difference between `TABLE` and `DATABASE`.
- Model data, and create tables to store it.
- Distinguish different data types in a SQL database context.
- Describe why a Schema is necessary.
- Create a simple Schema using SQL basic syntax.
- Write basic SQL queries to perform CRUD operations on a database.
- Add constraints to ensure consistent data.
- Implement an auto-incrementing id field.

---

## Keywords

- Relational database
- Normalization
- SQL
- CRUD
- `CREATE TABLE`
- `ALTER TABLE`
- `FOREIGN KEY`
- `INSERT`
- Data Types
- Schema

---

## Exercise 1

In this exercise, we'll go through the process of setting up a database for your project.

- Create a new database using the Postgres cli.

- Use the `CREATE USER <name> WITH PASSWORD <pw>;` command to create a new user and configure a password for each database.
  See [documentation](https://www.Postgres.org/docs/9.6/static/sql-createuser.html).

(This setup is meant to mock a real world database setup, and to give us the opportunity to become familiar with
creating and authorizing a new Database on your local machine. In a real production setting, our setup would be more complicated).

---

## Exercise 2

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

## Exercise 3

Postgres is a 'Relational Database'. So far we have not specified any relationships between our tables.
Let's create relationships between the tables we created in the last lesson.

The relationships we'll create are defined as follows:

- 1 to 1 (1:1)
- 1 to many (1:n)
- Many to many (n:n)

To do this we'll need to add "foreign key constraints" to some columns.

**Many to many relationships** :<br/>
Creating many to many relationships requires the creation of a "Link table".

- How are Link Tables implemented.
- Why are link tables necessary in order to define n:n relationships between columns in our database?
- What are the many to many relationships in our project application's database?

---

## Exercise 4

Finish up your database by adding the Users table. <br/>
Here are the columns we'll need to add:

- id
- email
- fullname
- bio

---

## Lab activity

Now that we've created the database tables for our project application, use the `INSERT` command to populate your tables with some mock data.

Add the following mock data to your database:

- At least 4 Items
- All of the Tags we'll use in the project (Categories)
  - Household Items
  - Tools
  - Electronics
  - Physical Media
  - Sporting Goods
  - Musical Instruments
  - Recreational Equipment

---

## Additional Resources

- [Learn SQL - Codeacademy](https://www.codecademy.com/learn/learn-sql)
- [Postgres Docs](http://www.Postgres.org/docs/9.6)
