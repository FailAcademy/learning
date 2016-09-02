---
layout: slidedeck
title: Intro to Databases with SQL

---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---
# Intro To Databases

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Determine what a database is
2. Understand why databases are need
3. write simple SQL queries

---

#What is a database?

A database is an organized collection of data. The data is typically organized to model relevant aspects of reality. We will be using databases to persist the data we are using in our apps.

---
#Why we use databases

Think of how we get the information about the weather from the newspaper. Information can be printed but it cannot be continuously updated without printing a new paper. We call this static

Websites can continuously update because it is pulling information from a database

---
#Data storage

Each app that you use stores data

For example Facebook stores data on 
  1. users - who you are
  2. users_friends - who your friends are
  3. users_posts - what you like to posts


---
#Database and tables
Data is organized and stored into tables, which hold the data so it is available to be retrieved. Each Database has a table.

Each Table has cells or fields of data that is accessible.
![Table](/public/img/slide-assets/sql-table.png)

A row represents an entire data record within each table.

Also tables often have a unique identifier (ID here) used to order the rows.

---
#Tables

To find information we search through columns first then by rows....Why?

Example - students at red - store: 
1. name 
2. pass/fail 
3. course  

Once built the columns for this database won’t increase but the rows will. Usually there are less columns than there are rows. Left to right top to bottom.

---
#Different types of Databases

Relational Databases

Operational Databases

Database WareHouses

Distributed Databases

End-User Databases

http://www.my-project-management-expert.com/different-types-of-databases.html

---
#Database

relational databases are one of the most common type

A relational database is made up of several components, of which the table is most significant.  The table is where all the data in a database is stored, and without tables, there would not be much use for relational databases.

![Table](/public/img/slide-assets/sql-table.png)

---
#Relational Database

Definition: A database structured to recognize relations among stored items of information.

Think friends with other tables. 

![Relational-Database](/public/img/slide-assets/relational-databases.png)

src = cdn.tutsplus.com

---
#SQL

Structured Query Language - A query language that allows you to interact with the database.

SQL allows you to
1. Create Table
2. Slect
3. Insert into
4. Update
5. Delete

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
→ again if we are not explicit about where, all rows of our database will be deleted.

---
#SQL TIME
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
#What?
* bigserial (or serial8) - an integer that automatically increments from 1 to 9223372036854775807 with each new row 
* varchar(n) - a string with n characters - called a varchar because its length is _variable_ (http://www.postgresql.org/docs/9.2/static/datatype-character.html)
* date - http://www.postgresql.org/docs/9.1/static/datatype-datetime.html#DATATYPE-DATETIME-DATE-TABLE

---
#What continued...
* int2 (or smallint) - integer between -32768 and 32767 inclusive. (http://www.postgresql.org/docs/9.2/static/datatype-numeric.html)

Datatypes limit the kind of info that can be stored in a table, but only very broadly.  For example, a column containing product prices should only have positive values, but there is no datatype for numbers greater than 0. _Constraints_ allow us to limit the data a table will accept and raise an error if a user tries to input invalid data.

---
#Last what
* PRIMARY KEY - data must be unique and not null (identical to "UNIQUE NOT NULL")
* NOT NULL - unsurprisingly, data must not be null :)
* CHECK - allows you to specify that the data satisfies a boolean expression

---
#Create a database

Now let us create the database and connect it to our people.sql file.

Terminal:
```
createdb people
psql -d people -f people.sql
psql
\c people
```

You should see:
```
You are now connected to database "people" as user "(Your User-name)"
```

---
#Adding data and SQL commands
INSERT INTO

```
INSERT INTO people (first, last) VALUES ('Ronald', 'McDonald');
```
```
INSERT INTO people (first, last) VALUES ('Marylin', 'Maroe');
```
```
INSERT INTO people (first, last, dob) VALUES ('jil', 'nance', '1/1/2003');
```

Do they all work?

---
#Field's constraint

No

```
INSERT INTO people (first, last, dob) VALUES ('jil', 'nance', '1/1/2003');
```

This last command won't work because the date of birth is too recent for the field's constraint.  

---
#Important SQL commands
Select all the rows added to the table with the command:
```
SELECT * FROM people;
```
Exit SQL:

```
\q
```


{% endhighlight %}
