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

1. Determine what a database is
2. Introduce the various types of databases available
3. Install and set up Postgres
4. Create a database with authentication
5. Perform CRUD operations on our new database

---

#What is a Database?

A database is an organized collection of data. The data is typically organized to model relevant aspects of reality. The process of describing the organization of data in your database is called *modelling*.

---
#Why we use Databases

Think of how we get the information about the weather from the newspaper. Information can be printed but it cannot be continuously updated without printing a new paper. We call this **static** data. 

We've used static data in the form of a JSON file, in our project already. Today we're going to replace static data with a database, which will allow us to update the data in our applicatoin **dynamically**, whilst persisting that data.

---

# Types of Databases

- Relational Databases

- Operational Databases

- Database WareHouses

- Distributed Databases

- End-User Databases


---

# Relational Database

We'll be using a relational Database to store data for our project. Relational Databases store data in tables like this:

![Table](/public/img/slide-assets/sql-table.png)

A row represents a **record** within each table.

---

# Relational Database

Relational databases are one of the most common types.

A relational database is made up of several components, of which the table is most significant.  The table is where all the data in a database is stored, and without tables, there would not be much use for relational databases.

![Table](/public/img/slide-assets/sql-table.png)

---
# Relational Database

In a relational system, we create structure of **schemas** by defining relationships between tables.

![Relational-Database](/public/img/slide-assets/relational-databases.png)

---
class: center, middle

# SQL

Easily, the most common way to interact with Relational Databases is using SQL, which stands for<br/>
##**Structured Query Language**:

**Let's start using SQL & Postgres!**


---

#CRUD in SQL
CRUD stands for Create, Read, Update and Destroy. 

To **CREATE** data in our table we can use an insert command:  
```
database_name=# insert into people (name) values ('Fred');
```
→ this command puts the name 'Fred' into the "name" column of our "people" table.

→ It is important to note there is a difference between ('Fred') and ("Fred");


---
#READ
To **READ** the data from this table we use a select command:  
```
database_name=# select * from people;
```  
→ this is telling the database to retrieve all information from our "people" database.

```
database_name=# select age from people;
```  
→ this is telling the database to retrieve all  information from the "age" column of our "people" database.

---
#UPDATE
We can **UPDATE** our data by using an update statement:  
```
database_name=# update people set age =41 where name = "Fred";
```

If you don't specify where you want to update, all rows of the database will be updated.

---
#DESTROY 

We can **DESTROY** data from our table by using:  
```
database_name=# delete from people where age=35;
```
→ If we are not explicit, all rows of our database will be deleted.

---

template: inverse

#SQL TIME

???

```
mkdir sql
cd sql
touch people.sql
```

in our people.sql type:
```
CREATE TABLE people
(
  id bigserial PRIMARY KEY, 
  first varchar(30) NOT NULL,
  last varchar(20) unique NOT NULL,
  dob date CHECK (dob < '1/1/2000'),
  relationship varchar(50),
  friends int2 default 0,
  city varchar(20)
);
```

---

# What?
* **bigserial** (or serial8) - an integer that automatically increments from 1 to 9223372036854775807 with each new row 
* **varchar**(n) - a string with n characters - called a varchar because its length is _variable_ (http://www.Postgres.org/docs/9.2/static/datatype-character.html)
* **date** - http://www.Postgres.org/docs/9.1/static/datatype-datetime.html#DATATYPE-DATETIME-DATE-TABLE

---

# What continued...
* **int2** (or smallint) - integer between -32768 and 32767 inclusive. (http://www.Postgres.org/docs/9.2/static/datatype-numeric.html)

Data types limit the kind of info that can be stored in a table, but only very broadly.  For example, a column containing product prices should only have positive values, but there is no datatype for numbers greater than 0. _Constraints_ allow us to limit the data a table will accept and raise an error if a user tries to input invalid data.

---

# Last what
* **PRIMARY KEY** - data must be unique and not null (identical to "UNIQUE NOT NULL")
* **NOT NULL** - unsurprisingly, data must not be null :)
* **CHECK** - allows you to specify that the data satisfies a boolean expression

---
template: inverse

# Lets make a Database


{% endhighlight %}
