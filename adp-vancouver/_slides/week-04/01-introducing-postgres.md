---
layout: slidedeck
title: Intro to Databases with PostgreSQL Slides

---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---
# Intro to Databases with PostgreSQL

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Determine what a database is
2. Introduce the various types of databases available
3. Introduce Codd's Rules (RDBMS)
4. Install and set up PostgreSQL
5. Demonstrate the SQL language
6. Setup a Postgres user and database for use in our project application

---

#What is a Database?

A database is an organized collection of data. The data is typically organized to model relevant aspects of reality. The process of describing the organization of data in your database is called *modelling*.

---
#Why we use Databases

Think of how we get the information about the weather from the newspaper. Information can be printed but it cannot be continuously updated without printing a new paper. We call this **static** data. 

We've used static data in the form of a JSON file, in our project already. Today we're going to replace static data with a database, which will allow us to update the data in our applicatoin **dynamically**, whilst persisting that data.

---

# Relational Databases (RDBMS)

Postgres is defined as a Relational Database, usually abreviated as RDBMS, which stands for 
**Relational Database Management System**.

The functioning of RDBMS systems was first defined by Computer Science researcher **Edgar F. Codd**.

???
Pause and review Codd's 12 rules from the pre-work reading.
[https://www.tutorialspoint.com/dbms/dbms_codds_rules.htm](https://www.tutorialspoint.com/dbms/dbms_codds_rules.htm)

---

# Relational Database

Relational databases are one of the most common types.

A relational database is made up of several components, of which the **table** is most significant.  The table is where all the data in a database is stored, and without tables, there would not be much use for relational databases.

![Table](/public/img/slide-assets/sql-table.png)

---
# Relational Database

In a relational system, we create structure of **schemas** by defining relationships between tables.
![Relational-Database](/public/img/slide-assets/relational-databases.png)

---

class: center, middle

#What is Postgres?

---
# What is Postgres?

"PostgreSQL is a general purpose and object-relational database management system, the most advanced open source database system. PostgreSQL was developed based on POSTGRES 4.2 at Berkeley Computer Science department, University of California."

*It's Open Source!*

???
Take the opportunity to contrast Open Source technology vs proprietary tech, ie Microsoft's MySQL.

---

template: inverse

# Lets's start using Postgres!

???
- Install [Postgres.app](https://postgresapp.com/) 
- Wire up the [command line utilities](https://postgresapp.com/documentation/cli-tools.html). 
- Install [DBeaver](http://dbeaver.jkiss.org/) 
- Install VSCode plugins (pgsql, sql beautify)
- Create db with user: 
    - createuser [follow prompts...]
    - createdb boomtown
    - alter user [user] with encrypted password '[somepassword]'
    - grant all privileges on [boomtown] databasename to [user];

** Take the class through reasoning about the schema and relationships they'll need to build for Boomtown ** <br/>
(All the necessary SQL scripts for creating the Boomtown database are in the lesson-notes-and-assets folder in /_lessons/week-04) 

{% endhighlight %}
