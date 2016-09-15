---
layout: slidedeck
title: Intro to Mongo Slides

---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---
# Intro to MongoDB

.title-logo[![Red logo](/public/img/red-logo-white.svg)]


---
layout: false
# Agenda
1. Define NoSQL
2. What is MongoDB and why we use it
3. Know the purpose of Mongod & Mongo
4. Define collections, documents and fields
5. Use a Query selector
6. Write commands in Mongo that CRUD
7. Understand the purpose of Sharding
8. Be able to debate the differences of NoSQL & SQL

---
# SQL or NoSQL?

Tries to position a one-size-fits-all solution. 

Think: **Excel**

vs.

Open and aware of alternative, exisiting and additional patterns and tools for managing your data. 

Think: **JSON**

---

## SQL

Tries to position a one-size-fits-all solution. Think: **Excel**

- **Examples**: Oracle, SQL Server, PostGres

## NoSQL
 
 Open and aware of alternative, exisiting and additional patterns and tools for managing your data. Think: **JSON**
- **Examples**: *CouchDB, Cassandra, MongoDB*

---
# So what is NoSQL?

A NoSQL database is a mechanism for storage and retrieval of data which is different from relational databases which use tabular relations.

***"Not only SQL"*** databases have exsisted since the late 1960s but didn't gain popularity until the demands of **Web 2.0**
---
# Metaphor

https://kvaes.files.wordpress.com/2015/01/1401269083847.jpg?w=788

---
# MongoDB

We will be using MongoDB for our project and it is a Document-oriented database.
![mongo](/public/img/slide-assets/mongo_logo.png)
Mongo is great for unstructured data, especially when you have a lot of it.

Mongo's named is derived from humongus.

---
# Comparison

SQL TABLE
![SQL-Table](/public/img/slide-assets/MySQL.png)

MongoDB Document
```
{
  _id: 1,
  title: "JavaScript Ninja",
  experience: 0.1,
  industry: "Made-up",
}
```

---
# Watch

<iframe width="650" height="395" src="https://www.youtube.com/embed/b2F-DItXtZs" frameborder="0" allowfullscreen></iframe>

---
# Less Talking More Doing

In your terminal type 
```
mongod
```
In another terminal type
```
mongo
```
You should see
```
-> ~ mongo
MongoDB shell version: 3.0.4
connecting to: test
>
```

---

# Exercise 1
Partner up and understand what each of the commands do
```
db.help()

db.stats()

db.getCollectionNames()

use db_name

db.collection.find()

db.collection.insert({field: value})

show dbs

db.collection.remove({})

db.collection.find({field: value})

db.collection.remove({field: value})

db.collection.update

```

---
# Vocabulary

Mongo terminology compared to SQL

| SQL         | MONGO |
|-------------|-------|
| table       |   ?   |
| row         |   ?   |
| column      |   ?   |
| table joins |   ?   |
| primary key |   ?   |


---
# Query selector 

The query selector (think the **WHERE** clause in **SQL**) help with

- find
- count
- update
- remove

Documents from collections.

---
# Exercise 2

[Click Here](https://raw.githubusercontent.com/redacademy/adp-mongo-exercise3/master/data.json?token=ALZHC1bq8DWbeqm4YPxcxDD2zuxv7an7ks5X5B_EwA%3D%3D#)
and copy the information into a new dbs.

Spend 15 minutes reading and implementing the different commands from 

[This Link](https://docs.mongodb.com/manual/reference/operator/query/)

After everyone will be reponsible for teaching a Query operator to the rest of the class

---
#Translator Game

You will be provided with SQL executables and statements.

You will have to **translate** the SQL into MongoDB commands.

Write down your MongoDB commands. This is a competition each correct translation counts as 7 points.


---
class: middle
# #1


```
CREATE TABLE apple (
    id MEDIUMINT NOT NULL
        AUTO_INCREMENT,
    user_id Varchar(30),
    quantity Number,
    quality char(1),
    PRIMARY KEY (id)
)
```

---
class: middle
# #2

```
ALTER TABLE apple
ADD purchased_date DATETIME
```

---
class: middle
# #3

```
DROP TABLE apple
```

---
class: middle
# #4

```
SELECT *
FROM apple
```

---
class: middle
# #5

```
SELECT *
FROM apple
WHERE quality != "A"
```

---
class: middle
# #6

```
SELECT *
FROM apple
WHERE quality = "A"
ORDER BY user_id ASC
```

---
# Data Modeling
As mentioned before MongoDB's collections do not **force document structures** therefore some decisions need to be made. 

Key Decision in designing data models:

- Structure of documents

- How the application reresents relationships between data

There are two tools that help these relationships

---
# References

**Normalized Data Models**

 References store the relationships between data by including links or <strong>references</strong> from one document to another

 [Click here](https://docs.mongodb.com/manual/reference/database-references/)

  and read the documentation after we will have a discussion

---
# Embedded documents

**Denormalized data models**

Embedded Data creates a relationship between data by storing related data in a single document structure

[Click here](http://openmymind.net/Multiple-Collections-Versus-Embedded-Documents/# 1)

What does the mean for you?

---
# Sharding

Lastly Sharding...

What the heck is Sharding?

**Shard**: a piece of broken ceramic, metal, glass, or rock, typically having sharp edges

**Think**: rather than having one solid database you "shard" (break) pieces of data across multiple machines

---
# Sharding continued...
There are two systems for dealing with system growth

**Vertical scaling**: Making the single server more powerful. More RAM more storage space - limited to available technologies

**Horizontal scaling**: "Many hands make light work" - rather than overwhelm a single server you spread the work over. There is a trade off with complexity

MongoDB horizontal scaling is **sharding**

---
class: center, middle

![sharding](/public/img/slide-assets/sharding.jpg)

---
# True or False

NoSQL is better than SQL?
![think](/public/img/slide-assets/homer-thinking.png)

---
# NoSQL vs SQL

**FALSE!**

Some projects are better suited to use a SQL db while others are better suited for NoSQL dbs

Like anything NoSQL has it's **positives** and **negatives**

---
#Which one should I use?
 
For the next couple of slides pick whether you think a 

**SQL** database would be better 

or

A **mongo** database would be better

---
class: center, middle

#Craiglist

---

class: center, middle

#Banking

---
class: center, middle

#Yellow Pages

---
class: center, middle

#Facebook

---
class: center, middle

#Grocery Store

{% endhighlight %}
