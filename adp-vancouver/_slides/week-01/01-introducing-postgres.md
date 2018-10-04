---
layout: slidedeck
title: Intro to Databases with Postgres Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Intro to Databases with Postgres

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1.  Determine what a database is
2.  Introduce the various types of databases available
3.  Install and set up Postgres
4.  Demonstrate the SQL language
5.  Setup a Postgres user and database for use in our project application

---

#What is a Database?

A database is an organized collection of data. The data is typically organized to model relevant aspects of reality. The process of describing the organization of data in your database is called _modelling_.

---

#Why we use Databases?

Think of how we get the information about the weather from the newspaper. Information can be printed but it cannot be continuously updated without printing a new paper. We call this **static** data.

We've used static data in the form of a JSON file, in our project already. Today we're going to replace static data with a database, which will allow us to update the data in our application **dynamically**, whilst persisting that data.

---

# Relational Databases (RDBMS)

To complete our project application, we'll use a database system called **Postgres**.

The principles of RDBMS systems were first formalized by Computer Science researcher **Edgar F. Codd**.

[Codd's 12 Rules](https://www.tutorialspoint.com/dbms/dbms_codds_rules.htm)

???
Pause and review Codd's 12 rules from the pre-work reading.
[https://www.tutorialspoint.com/dbms/dbms_codds_rules.htm](https://www.tutorialspoint.com/dbms/dbms_codds_rules.htm)

A "Management System" is more than just a database. What are the other components that make up the Postgres RDBMS?
eg. psql prompt

---

# Relational Database

A Relational Database is made up of several components, of which the **table** is most significant. The table is where all the data in a database is stored, and without tables, there would not be much use for relational databases.

![Table](/public/img/slide-assets/sql-table.png)

_What do Codd's rules say about tables in an RDBMS?_

???
Be sure to provide some clarity about "tables". Comparing tables in a relational database to those in common spreadsheet applications like excel is usually sufficient.

Google for a diagram of a large relational system. Find one and show the students the level of complexity inherent in large relational systems.

---

# Who is Postgres?

"Postgres is a general purpose and object-relational database management system, the most advanced open source database system. Postgres was developed based on POSTGRES 4.2 at Berkeley Computer Science department, University of California."

_It's Open Source!_

???
Take the opportunity to contrast Open Source technology vs proprietary tech, ie Microsoft's MSSQL.

---

# Install Postgres

[Download and install Postgres](https://postgresapp.com/)
![Postgres](/public/img/slide-assets/PostgresAppHomePage.png)

---

# Start Using Postgres

Once you've installed the Postgress.app, use the following command to log into the Postgres Shell.

```
psql
```

You should see a prompt with your OS username: <br/>
('RED' is the name of the user)

```
RED=#
```

You're connected to the Postgres RDBMS!

---

# Get Help

The `psql` shell provides all of the functionality for using our Postgres RDBMS.
To learn more, type the following command into the shell:

```
\?
```

**How do you quit the shell?** (Use `\?` to find the command)

```
\h
```

This command will list all of the SQL commands you can use to interact with your Relational Databases!<br/>
_To return to the shell type ctrl+c_

---

# SQL

The output of the `\h` command lists all of the **SQL** commands we can use to interact with our (yet to be created)
databases.

**SQL** is the common language used to interact with RDBMS systems that follow Codd's Rules.

How is SQL defined in Codd's rules?

???
**How is SQL defined in Codd's rules?**<br/>

Rule 5: <br/>
_Comprehensive Data Sub-Language Rule_ <br/>
A database can only be accessed using a language having linear syntax that supports data definition, data manipulation, and transaction management operations. This language can be used directly or by means of some application. If the database allows access to data without any help of this language, then it is considered as a violation.

---

# Exercise 1

In this exercise, we'll go through the process of setting up a database for your project.

- Create a new database using the Postgres cli.

- Use the `CREATE USER <name> WITH PASSWORD '<pw>';` command to create a new user and configure a password for each database.
  See [documentation](https://www.Postgres.org/docs/9.6/static/sql-createuser.html).

For ""boomtown

(This setup is meant to mock a real world database setup, and to give us the opportunity to become familiar with
creating and authorizing a new Database on your local machine. In a real production setting, our setup would be more complicated).

- For the project, use 'boomtown' for the user, name, and password to make things simple to remember.

???

Encourage the students to use the Postgres Docs as well as the help commands to determine how to complete the exercise.

Commands:

Start Postgres Shell

```
psql
```

Inside the Shell

```sql
CREATE USER <db-user> WITH PASSWORD '<new-password>'
CREATE DATABASE <db-name>;
GRANT ALL PRIVILEGES ON DATABASE <db-name> TO <db-user>;
```

???

- For the project, use 'boomtown' for the user, name, and password to make things simple to remember.

---

# More `psql` commands

To list the databases we've created in the previous exercise use the following command from the psql shell:

```
\l
```

To list the new Postgres users we created use the following command from the psql shell:

```
\du
```

---

template: inverse

#Adding Data to Postgres

---

# Relational Database

In a relational system, we create a **schema** by defining relationships between the data stored in various of tables.
![Relational-Database](/public/img/slide-assets/relational-databases.png)

---

template: inverse

# Normalization

---

class: center, middle

#What is Normalization?

"Database normalization is the process of organizing the attributes and tables of a relational database to minimize data redundancy."

[source](https://www.quora.com/What-is-database-normalization-in-simple-terms-with-examples)

---

### Codd on Normalization

1.  To free the collection of relations from undesirable insertion, update and deletion dependencies.
2.  To reduce the need for restructuring the collection of relations as new types of data are introduced, and thus increase the life span of application programs.
3.  To make the relational model more informative to users.
4.  To make the collection of relations neutral to the query statistics, where these statistics are liable to change as time goes by.

[source](https://www.quora.com/What-is-database-normalization-in-simple-terms-with-examples)

---

# A Table for Items

First, log into psql using a specific user & database with the following command:

```
psql -U <db-user> -d <db-name>
```

Run the following **SQL** command to create your first table!

```sql
CREATE TABLE IF NOT EXISTS items();
```

- For the project, use 'boomtown' for the user, name, and password to make things simple to remember.

---

# Adding Columns

```sql
ALTER TABLE items ADD COLUMN id serial;
ALTER TABLE items ADD COLUMN title text;
ALTER TABLE items ADD COLUMN description text;
ALTER TABLE items ADD COLUMN imageurl text;
ALTER TABLE items ADD COLUMN ownerid text;
ALTER TABLE items ADD COLUMN borrowerid text;
```

Copying and pasting each line into the psql shell allows us to modify the table we created, adding columns with their appropriate data types.

---

# All At Once

```sql
CREATE TABLE "public"."items" (
  "id" serial primary key,
  "title" text not null,
  "imageurl" text DEFAULT null,
  "description" text not null,
  "ownerid" text DEFAULT null,
  "borrowerid" text DEFAULT null
);
```

### Q & A

What is the function of a Primary Key? <br/>
What does the `serial` datatype do? <br/>
What does the DEFAULT attribute mean? <br/>

???

Be sure to stop to talk about the following details:

- serial data type
- PRIMARY KEY
- NOT NULL
- DEFAULT

---

# Mistakes Happen

If you need to start over, you can remove your new table with the following command:

```sql
DROP TABLE "public"."items";
```

---

# Exercise 2

Populating your Relational Database.
Use what you know to create the **Tags** & **Users**, table!

_Hint: use the `\du` command to check if the table was successfully created._

???

Solution:

```sql
CREATE TABLE "public"."tags" (
  "id" serial PRIMARY KEY,
  "title" text NOT NULL
);

CREATE TABLE "public"."users" (
  "id" serial PRIMARY KEY,
  "email" text NOT NULL,
  "fullname" text NOT NULL,
  "bio" text
);
```

---

template: inverse

# Relationships Matter

---

# Relational Relationships

We've created 2 tables in our database. Each table will hold information about a specific _thing_ in our application.

Now, it's time to use our Relational Database to create relationships between them! But first it's helpful to know what kind of relationships we can define. Here are the most common:

- 1 to 1 (1:1)
- 1 to many (1:n)
- Many to many (n:n)

???

Here you can introduce the following relationships among data in the project application:

**Items and Tags share a n:n (Many to many) relationship.** <br/>
**Users and Items share a 1:n (One to many) relationship.**

We haven't mentioned Users yet. Introduce them now.

---

# Primary Keys in Action

Imagine we're storing Users in our Database (We're going to put users in a separate database and connect them using GraphQL, which we'll talk about later):

```sql
CREATE TABLE "public"."users" (
  "id" serial primary key,
  "email" text NOT NULL,
  "fullname" TEXT NOT NULL,
  "bio" TEXT
);
```

---

# Primary Keys in Action

In Relational Databases, the PRIMARY KEY is used to define relationships between tables. To relate users to their items, we would use the PRIMARY KEY as follows, when creating the items table:

```sql
CREATE TABLE "public"."items" (
  "id" serial primary key,
  "title" text not null,
  "imageurl" text DEFAULT null,
  "description" text not null,
  "ownerid" text unique not null,
  "borrowerid" text unique not null,
  CHECK (borrowerid != ownerid)
);
```

In what other table will we find the itemid?

---

# Primary Key Constraint

```sql
"ownerid" integer REFERENCES users (id),
"borrowerid" integer REFERENCES users (id)
```

These lines are telling Postgres that the values stored in these columns will be references to values stored in the `users` table, namely the userid of actual users.

This is called a **Foreign Key constraint**, because no other value can be stored in this column, and it's a common way of defining relationships between tables in a relational database.

???
WARNING: This is just for example, we're not creating a user table for the project!

---

# Exercise 3

**Defining an n:n (Many to many) relationship**<br/>

Creating a 1:n relationship is straightforward. How should we create a many-to-many relationship? <br/>

Use what you know, and see if you can reason about how to implement a many-to-many relationship between **Items** and **Tags** in your database.

???

Solution

Create a Link Table

```sql
CREATE TABLE "public"."itemtags" (
  "itemid" integer references items (id),
  "tagid" integer references tags (id),
  unique (itemid, tagid)
);
```

---

# What We've Learned

- What is an RDBMS
- How to set up and configure Postgres
- How to use the `psql` shell
- How to create Postgres users & databases
- How to alter existing tables using `psql`
- How to define column data-types for our database tables
- How to create relationships between database tables using primary keys

---

# Lab activity

Now that we've created our schema (table) for our project application, use the `INSERT` command to populate your data base with some mock data.

Add the following mock data to your database:

- At least 4 Items
- All of the Tags (Categories)

Ensure that you've set up the appropriate foreign key constraints!

???

Solution (Partial)

```sql
INSERT INTO items
(
	title,
	imageurl,
	description
)
VALUES (
	'Camp Stove',
	'https://firebasestorage.googleapis.com/v0/b/boomtown-dfdd8.appspot.com/o/demo-images%2Fcamp-stove.jpg?alt=media',
	 'All you need to cook gourmet meals on your next trek into the wild.'
);

INSERT INTO tags
(
	title
)
VALUES (
	'Household Items'
);

INSERT INTO itemtags
(
	tagid,
	itemid
)
VALUES (
	1,
	1
);
```

---

template: inverse

# Questions?

{% endhighlight %}
