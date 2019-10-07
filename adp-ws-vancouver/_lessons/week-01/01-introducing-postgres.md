---
layout: lesson
title: Intro to Databases with Postgres pt. I
slides: ['_slides/week-01/01-introducing-postgres.md']
lesson_date: 2019-10-08
---

## Pre-Work

Install Postgres, get the app installer here: [https://postgresapp.com/](https://postgresapp.com/) <br/>
Install the Postico Free Postgres GUI form here: [https://eggerapps.at/postico/](https://eggerapps.at/postico/) <br/>

---

## Learning Objectives

- Define what role a database plays in a software application.
- Explain how a relational database is structured.
- Install and set up an instance of Postgres.
- Explain the difference between `TABLE` and `DATABASE`.
- Model data, and create tables to store it.
- Distinguish different data types in a SQL database context.

---

## Keywords

- Relational database
- Normalization
- SQL
- CRUD
- `CREATE TABLE`
- `ALTER TABLE`

---

## Exercise 1

In this exercise, we'll go through the process of setting up a database for your project.

- Create a new database using the Postgres cli.

- Use the `CREATE USER <name> WITH PASSWORD <pw>;` command to create a new user and configure a password for each database.
  See [documentation](https://www.Postgres.org/docs/9.6/static/sql-createuser.html).

(This setup is meant to mock a real world database setup, and to give us the opportunity to become familiar with
creating and authorizing a new Database on your local machine. In a real production setting, our setup would be more complicated).

---

## Additional Resources

- [Learn SQL - Codeacademy](https://www.codecademy.com/learn/learn-sql)
- [Postgres Docs](http://www.Postgres.org/docs/9.6)
